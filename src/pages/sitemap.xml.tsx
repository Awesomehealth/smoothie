
import { smoothies } from "@/data/smoothiesData";
import { categories } from "@/data/categories";
import { GetServerSideProps } from "next";

const EXTERNAL_URL = "https://awesome-kitchen.com"; // Replace with your actual domain

function generateSiteMap(
  smoothies: any[],
  categories: any[]
) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${EXTERNAL_URL}</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>daily</changefreq>
       <priority>1.0</priority>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/search</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>weekly</changefreq>
       <priority>0.8</priority>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/privacy-policy</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.3</priority>
     </url>
     <url>
       <loc>${EXTERNAL_URL}/terms-conditions</loc>
       <lastmod>${new Date().toISOString()}</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.3</priority>
     </url>
     ${categories
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_URL}/category/${id}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>weekly</changefreq>
           <priority>0.7</priority>
       </url>
     `;
       })
       .join("")}
     ${smoothies
       .map(({ id }) => {
         return `
       <url>
           <loc>${`${EXTERNAL_URL}/recipe/${id}`}</loc>
           <lastmod>${new Date().toISOString()}</lastmod>
           <changefreq>monthly</changefreq>
           <priority>0.6</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = generateSiteMap(smoothies, categories);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default function SiteMap() {
  // Empty component as we're generating XML
  return null;
}
