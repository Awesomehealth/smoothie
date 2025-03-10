
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '../index.css';

// Create a client
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: 'Awesome Kitchen - Delicious Smoothie Recipes',
  description: 'Find delicious smoothie recipes for every lifestyle',
  keywords: 'smoothies, recipes, healthy, protein, workout',
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <CategoriesProvider>
              {children}
              <Toaster />
            </CategoriesProvider>
          </AuthProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
