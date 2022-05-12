import { Layout } from "../components/Layout";
import { Box } from "@mui/material";
import { settings } from "../utils/siteSettings";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title={`Homepage | ${settings.siteName}`}
        description=""
      />
      <Box>
        Content
      </Box>
    </Layout>
  );
}

