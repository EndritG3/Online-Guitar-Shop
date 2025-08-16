import { Suspense } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
} from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Footer from './components/Footer';
import T from './components/T';

import { getClient } from './lib/apollo-client';
import { GET_BRANDS } from './lib/graphql';

async function getFeaturedBrands() {
  const client = getClient();
  const { data } = await client.query({
    query: GET_BRANDS,
  });
  return data?.findAllBrands?.slice(0, 8) || [];
}

function LoadingBrands() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <Grid item xs={6} sm={4} md={3} key={item}>
          <Paper sx={{ height: 120, p: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ height: 60, width: 120, bgcolor: 'grey.200' }} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}

async function FeaturedBrands() {
  const brands = await getFeaturedBrands();

  return (
    <Grid container spacing={3}>
      {brands.map((brand: any) => (
        <Grid item xs={6} sm={4} md={3} key={brand.id}>
          <Link href={`/brand/${brand.id}`} style={{ textDecoration: 'none' }}>
            <Paper 
              sx={{ 
                height: 120, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                cursor: 'pointer',
                '&:hover': {
                  bgcolor: 'grey.100',
                  transform: 'scale(1.05)',
                  transition: 'all 0.3s ease',
                }
              }}
            >
              <img src={brand.image} alt={brand.name} width={120} height={60} style={{ objectFit: 'contain', filter: 'grayscale(100%)', opacity: 0.4 }} />
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default function HomePage() {
  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'start',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ mb: 4 }}>
                <Box sx={{ mb: "160px", display: 'flex', alignItems: 'center', mt: "60px", justifyContent: 'start', gap: 1 }}>
                  <Image src="/butterfly.svg" alt="Butterfly logo" width={40} height={40} />
                  <Typography variant="h6" component="p" sx={{ color: '#121212', fontSize: '1.1rem', fontWeight: 400}}>
                    VibeStrings
                  </Typography>
                </Box>
                <Typography 
                  variant="h1" 
                  component="h1" 
                  gutterBottom
                  sx={{
                    fontSize: { xs: '2.5rem', md: '56px' },
                    fontWeight: 700,
                    color: '#121212',
                    textAlign: 'center',
                    pr: "50px",
                    lineHeight: 1.2,
                  }}
                >
                  <T k="home.hero.titlePrefix" />{' '}
                  <Box component="span" sx={{ color: '#ff6b35' }}>
                    <T k="home.hero.titleHighlight" />
                  </Box>{' '}
                  <T k="home.hero.titleSuffix" />
                </Typography>
                <Typography 
                  variant="h6" 
                  component="p" 
                  sx={{ 
                    color: '#666666',
                    fontSize: '1.1rem',
                    lineHeight: 1.6,
                    textAlign: 'center',
                    pr: "50px",
                    mb: "155px",
                  }}
                >
                  <T k="home.hero.subtitle" />
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            width: '50%',
            borderRadius: '0 0 30% 50%'
          }}
        >
          <Box sx={{ position: 'relative', width: { xs: 320, md: "100%" }, height: { xs: 240, md: "100%" }, borderRadius: '0 0 30% 50%', overflow: 'hidden' }}>
            <Image src="/assets/header.jpg" alt="Hero" fill style={{ objectFit: 'cover', objectPosition: 'bottom' }} />
          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            zIndex: 1,
            bottom: "-40px", left: "55%", width: '80px', height: '80px', backgroundColor: 'white', borderRadius: '50%' }}>
            <Image src="/butterfly.svg" alt="Butterfly logo" width={25} height={25} />
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg" sx={{ pb: 15, mt: "190px" }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '44px' },
              fontWeight: 700,
              color: '#000',
            }}
          >
            <T k="home.featured.titlePrefix" />{' '}
            <Box component="span" sx={{ color: '#ff6b35' }}>
              <T k="home.featured.titleHighlight" />
            </Box>
          </Typography>
          <Typography 
            variant="h6" 
            component="p" 
            color="text.secondary" 
            sx={{ 
              fontSize: '16px',
              fontWeight: 500,
              color: '#666',
            }}
          >
            <T k="home.featured.subtitle" />
          </Typography>
        </Box>
        
        <Suspense fallback={<LoadingBrands />}>
          <FeaturedBrands />
        </Suspense>
      </Container>
      <Box sx={{ bgcolor: '#121212', py: 12 }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign="center"
            sx={{
              fontSize: { xs: '2rem', md: '44px' },
              fontWeight: 400,
              color: 'white'
            }}
          >
            <T k="home.why.titlePrefix" />{' '}
            <Box component="span" sx={{ color: '#ff6b35' }}>
              VibeStrings
            </Box>
            <T k="home.why.titleSuffix" />
          </Typography>
          
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'transparent', color: 'white', textAlign: 'center', border: 'none', boxShadow: 'none' }}>
                <CardContent sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Box sx={{ mt: 5, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '72px', width: '72px', backgroundColor: '#262626', borderRadius: '20px' }}>
                    <Image src="/assets/category-2.svg" alt="Smooth Browsing" width={32} height={32} />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>
                    SMOOTH BROWSING
                  </Typography>
                  <Typography variant="body1" color="#666666" sx={{ fontSize: '14px', fontWeight: 400, px: 5 }}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'transparent', color: 'white', textAlign: 'center', border: 'none', boxShadow: 'none' }}>
                <CardContent sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Box sx={{ mt: 5, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '72px', width: '72px', backgroundColor: '#262626', borderRadius: '20px' }}>
                    <Image src="/assets/group.svg" alt="Smooth Browsing" width={32} height={32} />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>
                    EASY DELIVERY
                  </Typography>
                  <Typography variant="body1" color="#666666" sx={{ fontSize: '14px', fontWeight: 400, px: 5 }}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ bgcolor: 'transparent', color: 'white', textAlign: 'center', border: 'none', boxShadow: 'none' }}>
                <CardContent sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                  <Box sx={{ mt: 5, mb: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '72px', width: '72px', backgroundColor: '#262626', borderRadius: '20px' }}>
                    <Image src="/assets/empty-wallet-tick.svg" alt="Smooth Browsing" width={32} height={32} />
                  </Box>
                  <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 700, fontSize: '16px', color: '#fff' }}>
                    SWIFT PAYMENTS
                  </Typography>
                  <Typography variant="body1" color="#666666" sx={{ fontSize: '14px', fontWeight: 400, px: 5 }}>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Mobile App Section */}
      <Box sx={{ bgcolor: 'white', py: 12 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h2" 
                component="h2" 
                gutterBottom
                sx={{
                  fontSize: { xs: '2rem', md: '46px' },
                  fontWeight: 400,
                  color: '#000',
                  mb: 3,
                  textAlign: 'center',
                }}
              >
                <T k="home.mobile.titlePrefix" />{' '}
                <Box component="span" sx={{ color: '#ff6b35' }}>
                  <T k="home.mobile.titleHighlight" />
                </Box>{' '}
                <T k="home.mobile.titleSuffix" />
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'start', gap: 2, flexWrap: 'wrap' }}>
                <Image src="/assets/google-app.png" alt="Google Play" width={170} height={50} />
                <Image src="/assets/store-badge.png" alt="App Store" width={170} height={50} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Image src="/assets/mobile.png" alt="Mobile App" width={550} height={550} style={{ objectFit: 'contain' }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
