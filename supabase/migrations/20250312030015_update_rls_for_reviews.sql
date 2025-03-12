CREATE POLICY update_reviews_authenticated_users ON reviews
    FOR UPDATE TO authenticated USING (true) WITH CHECK (true);