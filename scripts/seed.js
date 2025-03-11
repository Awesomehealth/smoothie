import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';
import { v4 as uuidv4 } from 'uuid';

// Function to escape single quotes for SQL
const escapeSQL = (str) => {
  if (!str) return '';
  return str.replace(/'/g, "''");
};

// Function to create slug from a string
const createSlug = (str) => {
  if (!str) return '';
  return str.trim().toLowerCase().replace(/\s+/g, '-');
};

// Main function to process the CSV file and generate the SQL
const generateSeedSQL = async () => {
  try {
    // Read CSV file
    const csvFilePath = path.resolve('./recipes.csv');
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' });
    
    // Parse CSV content
    const records = parse(fileContent, {
      columns: false,
      skip_empty_lines: true
    });
    
    // Skip header row if present (assuming first row is header)
    const data = records.slice(0);
    
    // Create collections to track all unique entities
    const authorId = uuidv4();
    const allCategories = new Map(); // key: slug, value: {id, name}
    const allIngredients = new Map(); // key: slug, value: {id, name}
    const allLabels = new Map(); // key: slug, value: {id, name}
    
    // First pass: collect all unique entities from data
    for (const row of data.slice(1,)) {
      const categoryName = row[7]?.trim();
      const benefitLabel = row[6]?.trim();
      const ingredientsString = row[3];
      
      // Track categories
      if (categoryName) {
        const categorySlug = createSlug(categoryName);
        if (!allCategories.has(categorySlug)) {
          allCategories.set(categorySlug, {
            id: uuidv4(),
            name: categoryName
          });
        }
      }
      
      // Track labels
      if (benefitLabel) {
        const labelSlug = createSlug(benefitLabel);
        if (!allLabels.has(labelSlug)) {
          allLabels.set(labelSlug, {
            id: uuidv4(),
            name: benefitLabel
          });
        }
      }
      
      // Parse and track ingredients
      if (ingredientsString) {
        const ingredients = ingredientsString.split(',').map(item => item.trim());
        
        for (const ingredient of ingredients) {
          const match = ingredient.match(/^([\d\/\.\s]+)?(?:\s*)([^\d]+)$/);
          if (match) {
            let [_, quantity, ingredientName] = match;
            ingredientName = ingredientName.trim();
            const ingredientSlug = createSlug(ingredientName);
            
            if (!allIngredients.has(ingredientSlug)) {
              allIngredients.set(ingredientSlug, {
                id: uuidv4(),
                name: ingredientName
              });
            }
          }
        }
      }
    }
    
    // Generate SQL file content
    let sqlContent = '-- Generated seed SQL file\n\n';
    
    // Insert author
    sqlContent += `INSERT INTO authors (id, slug, name, bio) VALUES ('${authorId}', 'default-author', 'Default Author', 'Bio of the default author');\n\n`;

    // Insert all ingredients first
    sqlContent += '-- Insert all ingredients\n';
    for (const [slug, data] of allIngredients.entries()) {
      const formattedName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      sqlContent += `INSERT INTO ingredients (id, slug, name) VALUES ('${data.id}', '${escapeSQL(slug)}', '${escapeSQL(formattedName)}');\n`;
    }
    sqlContent += '\n';
    
    // Insert all categories
    sqlContent += '-- Insert all categories\n';
    for (const [slug, data] of allCategories.entries()) {
      sqlContent += `INSERT INTO categories (id, slug, main_title) VALUES ('${data.id}', '${escapeSQL(slug)}', '${escapeSQL(data.name)}');\n`;
    }
    sqlContent += '\n';
    
    // Insert all labels
    sqlContent += '-- Insert all labels\n';
    for (const [slug, data] of allLabels.entries()) {
      sqlContent += `INSERT INTO labels (id, slug, text) VALUES ('${data.id}', '${escapeSQL(slug)}', '${escapeSQL(data.name)}');\n`;
    }
    sqlContent += '\n';
    
    // Helper function to find ingredient ID by slug
    const getIngredientId = (ingredientName) => {
      const slug = createSlug(ingredientName);
      
      // Check if ingredient exists by slug
      if (allIngredients.has(slug)) {
        return allIngredients.get(slug).id;
      }
      
      // If no match found, create a new entry
      const newId = uuidv4();
      allIngredients.set(slug, {
        id: newId,
        name: ingredientName
      });
      
      // Add new ingredient to SQL
      const formattedName = ingredientName.charAt(0).toUpperCase() + ingredientName.slice(1);
      sqlContent += `INSERT INTO ingredients (id, slug, name) VALUES ('${newId}', '${escapeSQL(slug)}', '${escapeSQL(formattedName)}');\n`;
      
      return newId;
    };
    
    // Second pass: process recipes
    for (const row of data) {
      const recipeId = uuidv4();
      const title = row[0];
      const ingredientsString = row[3];
      const overview = row[4];
      const directionsString = row[5];
      const benefitLabel = row[6]?.trim();
      const categoryName = row[7]?.trim();
      const dietType = row[8];
      const proteinType = row[9];
      const protein = parseFloat(row[10]?.replace(/\s*g$/, '') || 0);
      const carbs = parseFloat(row[11]?.replace(/\s*g$/, '') || 0);
      const fats = parseFloat(row[12]?.replace(/\s*g$/, '') || 0);
      const calories = parseFloat(row[13] || 0);
      const mealReplacement = row[14]?.toLowerCase() === 'yes';
      const glutenFree = row[15]?.toLowerCase() === 'yes';
      const nutFree = row[16]?.toLowerCase() === 'yes';
      const soyFree = row[17]?.toLowerCase() === 'yes';
      const caffeineFree = row[18]?.toLowerCase() === 'yes';
      const sugarFree = row[19]?.toLowerCase() === 'yes';
      
      // Create slug
      const slug = createSlug(title);
      
      // Parse directions
      const directions = parseDirections(directionsString);
      
      // Parse and get valid ingredient IDs
      const parsedIngredients = [];
      if (ingredientsString) {
        const ingredients = ingredientsString.split(',').map(item => item.trim());
        
        for (const ingredient of ingredients) {
          const match = ingredient.match(/^([\d\/\.\s]+)?(?:\s*)([^\d]+)$/);
          if (match) {
            let [_, quantity, ingredientName] = match;
            ingredientName = ingredientName.trim();
            
            const ingredientId = getIngredientId(ingredientName);
            
            parsedIngredients.push({
              ingredientId,
              quantity: quantity ? quantity.trim() : null,
              unit: null,
              info: null,
              name: ingredientName
            });
          }
        }
      }
      
      // Get label ID
      const labelId = benefitLabel ? allLabels.get(createSlug(benefitLabel))?.id : null;
      
      // Get category ID
      const categoryId = categoryName ? allCategories.get(createSlug(categoryName))?.id : null;
      
      // Add recipe to SQL
      sqlContent += `
-- Insert recipe: ${escapeSQL(title || '')}
INSERT INTO recipes (
  id, 
  slug, 
  title, 
  original_youtube_link, 
  overview, 
  directions, 
  benefits, 
  protein, 
  carbs, 
  fats, 
  calories, 
  meal_replacement, 
  gluten_free, 
  nut_free, 
  soy_free, 
  caffeine_free, 
  sugar_free,
  diet_type,
  protein_type,
  author_id
) VALUES (
  '${recipeId}', 
  '${escapeSQL(slug)}', 
  '${escapeSQL(title?.trim() || '')}', 
  NULL, 
  '${escapeSQL(overview?.trim() || '')}', 
  ARRAY[${directions.map(d => `'${escapeSQL(d?.trim())}'`).join(', ')}], 
  '${escapeSQL(benefitLabel || '')}', 
  ${isNaN(protein) ? 0 : protein}, 
  ${isNaN(carbs) ? 0 : carbs}, 
  ${isNaN(fats) ? 0 : fats}, 
  ${isNaN(calories) ? 0 : calories}, 
  ${mealReplacement ? 'true' : 'false'}, 
  ${glutenFree ? 'true' : 'false'}, 
  ${nutFree ? 'true' : 'false'}, 
  ${soyFree ? 'true' : 'false'}, 
  ${caffeineFree ? 'true' : 'false'}, 
  ${sugarFree ? 'true' : 'false'},
  ${dietType ? `ARRAY['${escapeSQL(dietType?.trim())}']` : 'NULL'},
  ${proteinType ? `ARRAY['${escapeSQL(proteinType?.trim())}']` : 'NULL'},
  '${authorId}'
);\n`;
      
      // Associate recipe with category
      if (categoryId) {
        sqlContent += `
-- Associate recipe with category
INSERT INTO recipe_categories (recipe_id, category_id)
VALUES ('${recipeId}', '${categoryId}');\n`;
      }
      
      // Add recipe ingredients
      if (parsedIngredients.length > 0) {
        sqlContent += `
-- Insert recipe ingredients
`;
        for (const ingredient of parsedIngredients) {
          sqlContent += `INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES ('${recipeId}', '${ingredient.ingredientId}', ${ingredient.quantity ? `'${escapeSQL(ingredient.quantity)}'` : 'NULL'}, ${ingredient.unit ? `'${escapeSQL(ingredient.unit)}'` : 'NULL'}, ${ingredient.info ? `'${escapeSQL(ingredient.info)}'` : 'NULL'});\n`;
        }
      }
      
      // Add recipe label if exists
      if (labelId) {
        sqlContent += `
-- Insert recipe label
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES ('${recipeId}', '${labelId}');\n`;
      }
      
      // Add dummy media for recipe
      sqlContent += `
-- Add dummy media for recipe
INSERT INTO recipe_media (recipe_id, url, is_main)
VALUES ('${recipeId}', '/images/recipes/${escapeSQL(slug)}.jpg', true);\n`;
    }
    
    // Write to file
    fs.writeFileSync('./generated-seed.sql', sqlContent);
    console.log('Seed SQL file generated successfully!');
    
  } catch (error) {
    console.error('Error generating seed SQL:', error);
  }
};

// Helper function to parse directions
const parseDirections = (directionsString) => {
  if (!directionsString) return [];
  return directionsString.split(/\d+\.\s*/).filter(step => step.trim().length > 0);
};

// Execute the function
generateSeedSQL();