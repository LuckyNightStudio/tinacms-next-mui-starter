import { Box, Typography } from "@mui/material";
import { LuckyLogo } from "./icons";
import { settings } from "../utils/siteSettings";

export const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <Box>
      <Box>
        <Typography sx={{ color: '#fff', textAlign: 'center', fontWeight: 'light', fontSize: '0.8rem', pt: 4}}>{`Copyright © ${date} ${settings.siteName}. All rights reserved.`}</Typography>
        <Typography sx={{ color: '#fff', textAlign: 'center', fontWeight: 'light', fontSize: '0.8rem'}}>Designed & Created by</Typography>
        <a href="https://www.luckynightstudio.co.uk/">
          <Box sx={{ cursor: 'pointer', maxWidth: 120, m: 'auto', pt: 2, pb: 4, color: 'primary.main', transition: '0.4s','&:hover': {color: 'secondary.main'}}}>
            <LuckyLogo />
          </Box>
        </a>
      </Box>
    </Box>
  )
}
