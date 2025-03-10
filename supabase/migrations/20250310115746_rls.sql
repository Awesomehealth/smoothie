ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE category_benefits ENABLE ROW LEVEL SECURITY;
ALTER TABLE ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipes ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_media ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_ingredients ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_labels ENABLE ROW LEVEL SECURITY;
ALTER TABLE recipe_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY anon_select_categories ON categories
    FOR SELECT USING (true);

CREATE POLICY anon_select_category_benefits ON category_benefits
    FOR SELECT USING (true);

CREATE POLICY anon_select_ingredients ON ingredients
    FOR SELECT USING (true);

CREATE POLICY anon_select_labels ON labels
    FOR SELECT USING (true);

CREATE POLICY anon_select_authors ON authors
    FOR SELECT USING (true);

CREATE POLICY anon_select_recipes ON recipes
    FOR SELECT USING (true);

CREATE POLICY anon_select_recipe_media ON recipe_media
    FOR SELECT USING (true);

CREATE POLICY anon_select_recipe_ingredients ON recipe_ingredients
    FOR SELECT USING (true);

CREATE POLICY anon_select_recipe_categories ON recipe_categories
    FOR SELECT USING (true);

CREATE POLICY anon_select_recipe_labels ON recipe_labels
    FOR SELECT USING (true);

CREATE POLICY anon_select_recipe_badges ON recipe_badges
    FOR SELECT USING (true);

CREATE POLICY anon_select_reviews ON reviews
    FOR SELECT USING (true);

GRANT SELECT ON categories TO anon;
GRANT SELECT ON category_benefits TO anon;
GRANT SELECT ON ingredients TO anon;
GRANT SELECT ON labels TO anon;
GRANT SELECT ON authors TO anon;
GRANT SELECT ON recipes TO anon;
GRANT SELECT ON recipe_media TO anon;
GRANT SELECT ON recipe_ingredients TO anon;
GRANT SELECT ON recipe_categories TO anon;
GRANT SELECT ON recipe_labels TO anon;
GRANT SELECT ON recipe_badges TO anon;
GRANT SELECT ON reviews TO anon;
