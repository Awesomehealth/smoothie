
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import '../index.css';

export const metadata: Metadata = {
  title: 'Awesome Kitchen - Delicious Smoothie Recipes',
  description: 'Find delicious smoothie recipes for every lifestyle',
  keywords: 'smoothies, recipes, healthy, protein, workout',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CategoriesProvider>
            {children}
            <Toaster />
          </CategoriesProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
