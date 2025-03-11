ALTER TABLE recipe_categories DROP CONSTRAINT recipe_categories_pkey;

ALTER TABLE recipe_categories ADD CONSTRAINT recipe_categories_pkey PRIMARY KEY (id, recipe_id, category_id);
