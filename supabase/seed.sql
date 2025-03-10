INSERT INTO authors (id, slug, name, bio)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'default-author', 'Default Author', 'Bio of the default author');

INSERT INTO categories (id, slug, main_title)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'low-carb-smoothies', 'Low Carb Smoothies'),
  ('00000000-0000-0000-0000-000000000002', 'anti-inflammatory-smoothies', 'Anti-Inflammatory Smoothies'),
  ('00000000-0000-0000-0000-000000000003', 'superfood-smoothies', 'Superfood Smoothies'),
  ('00000000-0000-0000-0000-000000000004', 'meal-replacement-smoothies', 'Meal Replacement Smoothies');

INSERT INTO ingredients (id, slug, name)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'watermelon', 'Watermelon'),
  ('00000000-0000-0000-0000-000000000002', 'pineapple', 'Pineapple'),
  ('00000000-0000-0000-0000-000000000003', 'passion-fruit', 'Passion Fruit'),
  ('00000000-0000-0000-0000-000000000004', 'lemon-balm', 'Lemon Balm'),
  ('00000000-0000-0000-0000-000000000005', 'mango', 'Mango'),
  ('00000000-0000-0000-0000-000000000006', 'cucumber', 'Cucumber'),
  ('00000000-0000-0000-0000-000000000007', 'coconut-water', 'Coconut Water'),
  ('00000000-0000-0000-0000-000000000008', 'desiccated-coconut', 'Desiccated Coconut'),
  ('00000000-0000-0000-0000-000000000009', 'parsley', 'Parsley'),
  ('00000000-0000-0000-0000-000000000010', 'turmeric', 'Turmeric'),
  ('00000000-0000-0000-0000-000000000011', 'ginger', 'Ginger'),
  ('00000000-0000-0000-0000-000000000012', 'tamarind', 'Tamarind'),
  ('00000000-0000-0000-0000-000000000013', 'orange-juice', 'Orange Juice'),
  ('00000000-0000-0000-0000-000000000014', 'banana', 'Banana'),
  ('00000000-0000-0000-0000-000000000015', 'celery', 'Celery'),
  ('00000000-0000-0000-0000-000000000016', 'aloe-vera', 'Aloe Vera'),
  ('00000000-0000-0000-0000-000000000017', 'bok-choy', 'Bok Choy'),
  ('00000000-0000-0000-0000-000000000018', 'blueberries', 'Blueberries'),
  ('00000000-0000-0000-0000-000000000019', 'dates', 'Dates'),
  ('00000000-0000-0000-0000-000000000020', 'kale', 'Kale'),
  ('00000000-0000-0000-0000-000000000021', 'cocoa-nibs', 'Cocoa Nibs'),
  ('00000000-0000-0000-0000-000000000022', 'goji-berries', 'Goji Berries'),
  ('00000000-0000-0000-0000-000000000023', 'dragon-fruit', 'Dragon Fruit'),
  ('00000000-0000-0000-0000-000000000024', 'acai-pulp', 'Acai Pulp'),
  ('00000000-0000-0000-0000-000000000025', 'mulberries', 'Mulberries'),
  ('00000000-0000-0000-0000-000000000026', 'sweet-potato', 'Sweet Potato'),
  ('00000000-0000-0000-0000-000000000027', 'oat-milk', 'Oat Milk'),
  ('00000000-0000-0000-0000-000000000028', 'maple-syrup', 'Maple Syrup'),
  ('00000000-0000-0000-0000-000000000029', 'cinnamon', 'Cinnamon'),
  ('00000000-0000-0000-0000-000000000030', 'almond-butter', 'Almond Butter'),
  ('00000000-0000-0000-0000-000000000031', 'protein-powder', 'Vanilla Plant-Based Protein Powder'),
  ('00000000-0000-0000-0000-000000000032', 'ice', 'Ice');

-- Insert labels
INSERT INTO labels (id, slug, text)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'hydration', 'Hydration'),
  ('00000000-0000-0000-0000-000000000002', 'reconvalescence', 'Reconvalescence'),
  ('00000000-0000-0000-0000-000000000003', 'detoxification', 'Detoxification'),
  ('00000000-0000-0000-0000-000000000004', 'tropical-vibe', 'Tropical Vibe'),
  ('00000000-0000-0000-0000-000000000005', 'anti-inflammatory', 'Anti-Inflammatory'),
  ('00000000-0000-0000-0000-000000000006', 'inflammation-fighter', 'Inflammation Fighter'),
  ('00000000-0000-0000-0000-000000000007', 'alkalizing', 'Alkalizing'),
  ('00000000-0000-0000-0000-000000000008', 'blood-sugar-regulator', 'Blood Sugar Regulator'),
  ('00000000-0000-0000-0000-000000000009', 'antioxidants', 'Antioxidants'),
  ('00000000-0000-0000-0000-000000000010', 'blood-clotting', 'Blood Clotting'),
  ('00000000-0000-0000-0000-000000000011', 'bones-health', 'Bones Health'),
  ('00000000-0000-0000-0000-000000000012', 'gut-health', 'Gut Health'),
  ('00000000-0000-0000-0000-000000000013', 'liver-health', 'Liver Health'),
  ('00000000-0000-0000-0000-000000000014', 'iron-rich', 'Iron Rich'),
  ('00000000-0000-0000-0000-000000000015', 'reduces-anxiety', 'Reduces Anxiety'),
  ('00000000-0000-0000-0000-000000000016', 'digestion', 'Digestion'),
  ('00000000-0000-0000-0000-000000000017', 'brain-health', 'Brain Health'),
  ('00000000-0000-0000-0000-000000000018', 'immunity', 'Immunity'),
  ('00000000-0000-0000-0000-000000000019', 'energy', 'Energy');

-- Insert recipes
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
  author_id
) VALUES 
  (
    '00000000-0000-0000-0000-000000000001', 
    'hydration-bomb', 
    'Hydration bomb', 
    NULL, 
    'This smoothie is a hydration bomb. Great after training or as a part of reconvalescence after sickness or injury. Great for optimal hydration in hot environments.', 
    ARRAY[
      'Cut watermelon and pineapple into smaller pieces',
      'Open passion fruit and scoop out the pulp',
      'Remove stems from lemon balm (use the leaves only)',
      'Put all ingredients into a blender, add water and blend well together',
      'Serve with a piece of lemon balm on top and enjoy ☺'
    ], 
    'Hydration
Reconvalescence 
after sickness or injury', 
    1.5, 
    22.7, 
    0.4, 
    100.6, 
    false, 
    true, 
    true, 
    true, 
    true, 
    true,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000002', 
    'pina-colada', 
    'Piña Colada', 
    NULL, 
    'This smoothie is great for hydration, detoxification and simply to bring a tropical summer vibe into your home.', 
    ARRAY[
      'Cut pineapple and mango into smaller pieces',
      'Open passion fruit and scoop out the pulp',
      'Slice cucumber into round thick slices',
      'Put all ingredients into a blender, add coconut water and blend well together',
      'Serve with desiccated coconut and one thin cucumber slice on top and enjoy ☺'
    ], 
    'Hydration, 
Detoxification, 
Tropical vibe', 
    2.9, 
    39.6, 
    4.1, 
    216, 
    false, 
    true, 
    true, 
    true, 
    true, 
    true,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000003', 
    'heavy-metal-detox-and-immunity-booster', 
    'Heavy metal detox and Immunity booster', 
    NULL, 
    'This smoothie is amazing immunity booster and inflamation figher as well as support for detoxification.', 
    ARRAY[
      'Squeeze couple of oranges or buy a freshly made cold-pressed orange juice',
      'Cut mango, turmeric and ginger into smaller pieces',
      'Wash and rinse parsley well and cut it into smaller pieces, remove stalks if you desire',
      'Remove stones from tamarind and cut them into smaller pieces or add 1 teaspoon of tamarind paste instead if you are using that',
      'Put all ingredients into a blender, add orange juice and blend well together',
      'Serve with grated ginger or turmeric on top and enjoy ☺'
    ], 
    'Anti-inflammatory, 
Detoxification, 
Inflamation fighter', 
    3.4, 
    49.8, 
    1.6, 
    232, 
    true, 
    true, 
    true, 
    true, 
    true, 
    true,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000004', 
    'green-goddess', 
    'Green Goddess', 
    NULL, 
    'This smoothie is alkalizing, anti-inflammatory, regulating blood sugar and supportive for diabetes patients', 
    ARRAY[
      'Cut bananas, celery and Bok Choy into smaller pieces',
      'Make 4 round cucumber slices',
      'Remove skin on Aloe Vera and use the gel inside',
      'Put all ingredients into a blender, add fresh coconut water and blend well together',
      'Serve with Aloe Vera on top and enjoy ☺'
    ], 
    'Anti-inflammatory, 
Alkalizing, 
Blood sugar regulator', 
    4.1, 
    53.7, 
    1.1, 
    268.5, 
    true, 
    true, 
    true, 
    true, 
    true, 
    true,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000005', 
    'antioxidant-bomb', 
    'Antioxidant bomb', 
    NULL, 
    'This smoothie is fullpacked with anti-oxidants as well as high dose of vit. K, supporting blood clotting and building up the bones', 
    ARRAY[
      'Cut bananas into smaller pieces',
      'Remove stones from dates and cut them into smaller pieces',
      'Remove stems from kale and cut or rip the leaves into smaller pieces',
      'Put all ingredients into a blender, add frozen blueberries and fresh coconut water and blend well together',
      'Serve with cocoa nibs and Goji berries on top and enjoy ☺'
    ], 
    'Antioxidants, 
Blood clotting, 
Bones health', 
    4.6, 
    58.8, 
    3.8, 
    305.1, 
    true, 
    true, 
    true, 
    true, 
    true, 
    true,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000006', 
    'dragon-fruit-cream', 
    'Dragon fruit Cream', 
    NULL, 
    'Amazing ,,nice cream,, (a vegan ice-cream). Meal replacement. Gut and liver support. An iron bomb. Reduces anxiety and can prevent cancer.', 
    ARRAY[
      'Cut bananas and dragon fruit into smaller pieces',
      'Remove stones from dates and cut them into smaller pieces',
      'Put all ingredients into a blender, add Goji berries and fresh coconut water and blend well together',
      'Add water little by little ! We wanna create an ,,ice-cream consistence,, not a watery smoothie',
      'Serve with cocoa nibs and dried Goji berries on top and enjoy ☺'
    ], 
    'Gut and liver health, 
Iron rich, 
Reduces anxiety', 
    7.1, 
    62.3, 
    4.2, 
    333.5, 
    true, 
    true, 
    true, 
    true, 
    true, 
    true,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000007', 
    'acai-mulberry-smoothie', 
    'Acai-mulberry smoothie', 
    NULL, 
    'This smoothie helps to regulate digestion, supports brain health and strengthens immune system.', 
    ARRAY[
      'Cut bananas and kale into smaller pieces, remove stems from kale.',
      'Remove stones from dates and cut them into smaller pieces.',
      'Put banans, kale, dates, acai and mulberries into a blender.',
      'Blend well together.',
      'Serve with mulberries on top and enjoy ☺'
    ], 
    'Digestion. Braiin health. Immunity. Prevents Cold and Flu.', 
    5.6, 
    67.4, 
    7.1, 
    319.6, 
    true, 
    true, 
    true, 
    true, 
    true, 
    NULL,
    '00000000-0000-0000-0000-000000000001'
  ),
  (
    '00000000-0000-0000-0000-000000000008', 
    'sweet-potato-pie', 
    'Sweet Potato Pie', 
    NULL, 
    'Fall into the season with this healthy and delicious sweet potato pie smoothie, high in fiber, protein, and vitamin A!', 
    ARRAY[
      'Combine all ingredients in a blender. Add more ice or water to reach the desired consistency.'
    ], 
    'Energy', 
    31.4, 
    68.7, 
    13.1, 
    498, 
    true, 
    true, 
    true, 
    true, 
    true, 
    false,
    '00000000-0000-0000-0000-000000000001'
  );

-- Associate recipes with categories
INSERT INTO recipe_categories (recipe_id, category_id)
VALUES 
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001'), -- Hydration bomb - Low Carb Smoothies
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001'), -- Piña Colada - Low Carb Smoothies
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000002'), -- Heavy metal detox - Anti-Inflammatory Smoothies
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000002'), -- Green Goddess - Anti-Inflammatory Smoothies
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000003'), -- Antioxidant bomb - Superfood Smoothies
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000003'), -- Dragon fruit Cream - Superfood Smoothies
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000003'), -- Acai-mulberry smoothie - Superfood Smoothies
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000004'); -- Sweet Potato Pie - Meal Replacement Smoothies

-- Insert recipe ingredients
-- Hydration bomb
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001', '1', 'cup', NULL),
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002', '3/4', 'cup', NULL),
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000003', '1/2', 'pc', 'or 2 teaspoon passion fruit pulp'),
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000004', '1', 'tablespoon', 'leaves without stems');

-- Piña Colada
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000002', '1', 'cup', NULL),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000005', '1/2', 'pc', 'ca 150 g'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000003', '1/2', 'pc', 'or 2 teaspoon passion fruit pulp'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000006', '4', 'pc', 'cucumber slices ca 30 g'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000007', '1 1/2', 'tablespoon', '20 ml'),
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000008', 'ca 1/2', 'teaspoon', 'for garnishing');

-- Heavy metal detox and Immunity booster
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000005', '1', 'pc', 'ca 300 g'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000009', '1', 'big handful', 'ca 5 g'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000010', '1/2', 'teaspoon', NULL),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000011', '1/2', 'teaspoon', NULL),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000012', '1', 'teaspoon', 'fresh or tamarind paste'),
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000013', '1/3', 'cup', 'ca 80 ml freshly squeezed');

-- Green Goddess
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000014', '2 1/2', NULL, NULL),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000015', '1/2', 'stalk', NULL),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000006', '4', 'pc', 'cucumber slices ca 30 g'),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000016', '1', 'small stalk', 'ca 70 g'),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000017', '1', 'small head', 'ca 40 g'),
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000007', '3', 'tablespoon', 'ca 45 ml');

-- Antioxidant bomb
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000014', '1 1/2', NULL, NULL),
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000018', '1', 'cup', 'ca 150 g frozen'),
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000019', '2', 'small', 'soft dried dates ca 10 g'),
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000020', '3', 'leaves', 'ca 30 g - curly kale or any other type'),
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000007', '3', 'tablespoon', 'ca 45 ml'),
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000021', NULL, NULL, 'for garnishing'),
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000022', NULL, NULL, 'dried, for garnishing');

-- Dragon fruit Cream
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000014', '1 1/2', NULL, NULL),
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000023', '1', 'package', 'frozen or 1/4 pc fresh dragon fruit ca 100 g'),
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000022', '2', 'tablespoon', 'dried'),
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000007', '2', 'tablespoon', 'ca 30 ml');

-- Acai-mulberry smoothie
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000014', '1 1/2', NULL, NULL),
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000024', '100', 'gr', '1 package frozen or fresh acai pulp'),
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000020', '2', 'leaves', 'green curly or another type'),
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000019', '5', 'small', 'ca 30g'),
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000025', '2', 'tablespoon', 'use blueberries or any other berries if mulberries are not available');

-- Sweet Potato Pie
INSERT INTO recipe_ingredients (recipe_id, ingredient_id, quantity, unit, info)
VALUES 
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000026', '1', 'small', 'peeled and chopped'),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000027', '1/2', 'cup', NULL),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000028', '1', 'tsp', NULL),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000029', '1/2', 'tsp', NULL),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000014', '1', NULL, 'frozen'),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000030', '1', 'tbs', NULL),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000031', '1', 'scoop', NULL),
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000032', '1/2', 'cup', NULL);

-- Insert recipe labels
-- Hydration bomb
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000001'), -- Hydration
  ('00000000-0000-0000-0000-000000000001', '00000000-0000-0000-0000-000000000002'); -- Reconvalescence

-- Piña Colada
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000001'), -- Hydration
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000003'), -- Detoxification
  ('00000000-0000-0000-0000-000000000002', '00000000-0000-0000-0000-000000000004'); -- Tropical Vibe

-- Heavy metal detox and Immunity booster
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000005'), -- Anti-Inflammatory
  ('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000003'), -- Detoxification
('00000000-0000-0000-0000-000000000003', '00000000-0000-0000-0000-000000000006'); -- Inflammation Fighter

-- Green Goddess
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000005'), -- Anti-Inflammatory
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000007'), -- Alkalizing
  ('00000000-0000-0000-0000-000000000004', '00000000-0000-0000-0000-000000000008'); -- Blood Sugar Regulator

-- Antioxidant bomb
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000009'), -- Antioxidants
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000010'), -- Blood Clotting
  ('00000000-0000-0000-0000-000000000005', '00000000-0000-0000-0000-000000000011'); -- Bones Health

-- Dragon fruit Cream
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000012'), -- Gut Health
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000013'), -- Liver Health
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000014'), -- Iron Rich
  ('00000000-0000-0000-0000-000000000006', '00000000-0000-0000-0000-000000000015'); -- Reduces Anxiety

-- Acai-mulberry smoothie
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000016'), -- Digestion
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000017'), -- Brain Health
  ('00000000-0000-0000-0000-000000000007', '00000000-0000-0000-0000-000000000018'); -- Immunity

-- Sweet Potato Pie
INSERT INTO recipe_labels (recipe_id, label_id)
VALUES 
  ('00000000-0000-0000-0000-000000000008', '00000000-0000-0000-0000-000000000019'); -- Energy

-- Add dietary information for recipes where applicable
UPDATE recipes SET diet_type = 'Plant Based', protein_type = 'Plant Based' WHERE id = '00000000-0000-0000-0000-000000000008';

-- Add some dummy media entries for recipes
INSERT INTO recipe_media (recipe_id, url, is_main)
VALUES 
  ('00000000-0000-0000-0000-000000000001', '/images/recipes/hydration-bomb.jpg', true),
  ('00000000-0000-0000-0000-000000000002', '/images/recipes/pina-colada.jpg', true),
  ('00000000-0000-0000-0000-000000000003', '/images/recipes/heavy-metal-detox.jpg', true),
  ('00000000-0000-0000-0000-000000000004', '/images/recipes/green-goddess.jpg', true),
  ('00000000-0000-0000-0000-000000000005', '/images/recipes/antioxidant-bomb.jpg', true),
  ('00000000-0000-0000-0000-000000000006', '/images/recipes/dragon-fruit-cream.jpg', true),
  ('00000000-0000-0000-0000-000000000007', '/images/recipes/acai-mulberry.jpg', true),
  ('00000000-0000-0000-0000-000000000008', '/images/recipes/sweet-potato-pie.jpg', true);

-- Add some dummy recipe badges for illustrative purposes
INSERT INTO recipe_badges (recipe_id, type, info)
VALUES 
  ('00000000-0000-0000-0000-000000000001', 'quick', 'Ready in 5 minutes'),
  ('00000000-0000-0000-0000-000000000003', 'bestseller', 'Our most popular immunity booster'),
  ('00000000-0000-0000-0000-000000000006', 'new', 'New recipe'),
  ('00000000-0000-0000-0000-000000000008', 'protein', 'High protein content');