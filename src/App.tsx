
import AppRoutes from "./components/core/AppRoutes";
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import { Toaster } from "@/components/ui/toaster";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Awesome Kitchen - Find delicious smoothie recipes" />
        <meta name="keywords" content="smoothies, recipes, healthy, protein, workout" />
        <title>Awesome Kitchen - Delicious Smoothie Recipes</title>
      </Helmet>
      <AuthProvider>
        <CategoriesProvider>
          <AppRoutes />
          <Toaster />
        </CategoriesProvider>
      </AuthProvider>
    </>
  );
}

export default App;
