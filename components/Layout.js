import { Box, ThemeProvider } from "@mui/material";
import { AppHead } from "./AppHeader";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { theme } from "../utils/theme";

export const Layout = ({ children, title }) => {
  return (
    <ThemeProvider theme={theme}>
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
