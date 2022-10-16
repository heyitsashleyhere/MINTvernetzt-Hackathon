import React from 'react'
import { Box, Link, Stack, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box display={'flex'} flexDirection={'row'} justifyContent={'flex-end'} mt={2} mb={2}>
        
        <Stack direction="row" spacing={2}>
            <Link href="#" underline="hover">
                <Typography>
                    Impressum
                </Typography>
            
            </Link>
            <Link href="#" underline="hover">
                <Typography>
                    Datenschutzerklärung
                </Typography>
            </Link>
            <Link href="#" underline="hover">
                <Typography>
                    Nutzungsbedingungen
                </Typography>
            </Link>

            <img src="/images/footer_logo.png" alt="MINTvernetzt" style={{width: '5%'}}/>
        </Stack>
    </Box>
  )
}
