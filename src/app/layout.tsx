
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
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
        {children}
        <Toaster />
      </body>
    </html>
  );
}
