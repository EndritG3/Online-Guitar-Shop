import { Box, Container, Grid, Typography, IconButton } from '@mui/material';
import { Email, LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: '#eeeeee', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 1 }}>
              <Image src="/butterfly.svg" alt="Butterfly logo" width={40} height={40} />
              <Typography variant="h6" component="p" sx={{ color: '#121212', fontSize: '1.1rem', fontWeight: 400}}>
                VibeStrings
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ color: '#666666', mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="#666666">
                Enquiry@VibeStrings.com
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ color: '#666666', mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="#121212" sx={{ opacity: 0.6 }}>
                San Francisco
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700, color: '#121212' }} gutterBottom>
                  PAGES
                </Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Store</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Collections</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Support</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700, color: '#121212' }} gutterBottom>
                  PRODUCT
                </Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Terms</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Privacy Policy</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Copyright</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700, color: '#121212' }} gutterBottom>
              FOLLOW US
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'grey.400', '&:hover': { color: '#ff6b35' } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'grey.400', '&:hover': { color: '#ff6b35' } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'grey.400', '&:hover': { color: '#ff6b35' } }}>
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" color="#121212" sx={{ opacity: 0.6 }}>
            ©2025 Copyright VibeStrings
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}


