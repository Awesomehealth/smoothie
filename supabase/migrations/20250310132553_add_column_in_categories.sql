ALTER TABLE categories
ADD COLUMN tags TEXT[],
ADD COLUMN tag_style TEXT,
ADD COLUMN recipes_count INTEGER;