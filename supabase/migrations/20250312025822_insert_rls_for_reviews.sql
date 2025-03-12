CREATE POLICY insert_reviews_authenticated_users ON reviews
    FOR INSERT TO authenticated WITH CHECK (true);