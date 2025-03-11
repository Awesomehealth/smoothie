
import type { Metadata } from 'next';
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import { QueryClient } from '@tanstack/react-query';
import '../index.css';

// Create a client
const queryClient = new QueryClient();

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
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>React App</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <div id="root">
          <AuthProvider>
            <CategoriesProvider>
              {children}
            </CategoriesProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}