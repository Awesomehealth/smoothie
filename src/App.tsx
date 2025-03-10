
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import "./App.css";
import AppRoutes from "./components/core/AppRoutes";

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
