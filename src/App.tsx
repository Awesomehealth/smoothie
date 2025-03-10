
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";

import "./App.css";
import AppRoutes from "./components/core/AppRoutes";
import { CategoriesProvider } from "./contexts/CategoriesContext";

function App() {
  return (
    <AuthProvider>
      <CategoriesProvider>
        <AppRoutes />
        <Toaster />
      </CategoriesProvider>
    </AuthProvider>
  );
}

export default App;
