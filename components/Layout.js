import { Box, ThemeProvider } from "@mui/material";
import { AppHead } from "./AppHeader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { theme } from "../utils/theme";
import { DefaultSeo } from "next-seo";
import { settings } from "../utils/siteSettings";

export const Layout = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: settings.siteUrl,
          site_name: settings.siteName
        }}
      />
      <AppHead title={title} />
      <Box sx={{ overflowX: 'clip' }}>
        <Header />
        <main style={{ position: 'relative'}}>
          {children}
        </main>
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
