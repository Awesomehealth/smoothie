
import { AppProps } from "next/app";
import { Toaster } from "@/components/ui/toaster";
import { AuthProvider } from "@/contexts/AuthContext";
import { CategoriesProvider } from "@/contexts/CategoriesContext";
import "../App.css";
import "../index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Awesome Kitchen - Find delicious smoothie recipes" />
        <meta name="keywords" content="smoothies, recipes, healthy, protein, workout" />
        <title>Awesome Kitchen - Delicious Smoothie Recipes</title>
      </Head>
      <AuthProvider>
        <CategoriesProvider>
          <Component {...pageProps} />
          <Toaster />
        </CategoriesProvider>
      </AuthProvider>
    </>
  );
}

export default MyApp;
