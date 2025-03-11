ALTER TABLE recipes drop column protein_type;
ALTER TABLE recipes add column protein_type TEXT[];

ALTER TABLE recipes drop column diet_type;
ALTER TABLE recipes add column diet_type TEXT[];

ALTER TABLE recipes add column difficulty TEXT;
ALTER TABLE recipes add column servings INTEGER;
