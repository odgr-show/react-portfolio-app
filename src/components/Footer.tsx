import React from 'react';
import { AppBar } from '@mui/material';
import { Container } from '@mui/material';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => {
    return (
        <>
            <AppBar component="footer" position="static" sx={{ backgroundColor: '#000' }}>
                <Container maxWidth="md">
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="caption">2023 engr-sng</Typography>
                    </Box>
                </Container>
            </AppBar>
        </>
    );
};

export default Footer;
