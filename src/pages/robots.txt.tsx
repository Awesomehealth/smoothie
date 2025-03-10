
import { GetServerSideProps } from "next";

const EXTERNAL_URL = "https://awesome-kitchen.com"; // Replace with your actual domain

function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: ${EXTERNAL_URL}/sitemap.xml
`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsTxt = generateRobotsTxt();

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsTxt);
  res.end();

  return {
    props: {},
  };
};

export default function RobotsTxt() {
  // Empty component as we're generating plain text
  return null;
}
