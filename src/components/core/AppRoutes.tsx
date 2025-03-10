
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import IndexPage from "../../pages/index"; // Using lowercase and relative path
import CategoryPage from "@/pages/CategoryPage";
import RecipeDetailPage from "@/pages/RecipeDetailPage";
import NotFound from "@/pages/NotFound";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsConditions from "@/pages/TermsConditions";
import SearchResultsPage from "@/pages/SearchResultsPage";

function AppRoutes() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/recipe/:smoothieId" element={<RecipeDetailPage />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default AppRoutes
