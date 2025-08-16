'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Alert,
  CircularProgress,
  Tabs,
  Tab,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { ArrowBack } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

import { GET_MODEL } from '@/app/lib/graphql';
import Footer from '@/app/components/Footer';

export default function ModelDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const brandId = params.id as string;
  const modelId = params.modelId as string;

  const { loading, error, data } = useQuery(GET_MODEL, {
    variables: { brandId, modelId },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Alert severity="error">{t('error')}: {error.message}</Alert>
      </Container>
    );
  }

  const model = data?.findUniqueModel;

  if (!model) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Alert severity="warning">{t('model.notFound')}</Alert>
      </Container>
    );
  }

  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 2, position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Link href={`/brand/${brandId}`}  style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#666', mb: 2 }}>
            <ArrowBack sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">{t('nav.backList')}</Typography>
          </Box>
        </Link>
      </Container>
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
              <Box sx={{ mb: 4, minHeight: '330px' }}>
                <Box sx={{ mb: "90px", display: 'flex', alignItems: 'center', mt: "60px", justifyContent: 'start', gap: 1 }}>
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
                    pr: "10px",
                    lineHeight: 1.2,
                  }}
                >
                   {model?.name}
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
            width: '45%',
            borderRadius: '0 0 30% 50%'
          }}
        >
          <Box sx={{ position: 'relative', width: { xs: 320, md: "100%" }, height: { xs: 240, md: "100%" }, borderRadius: '0 0 30% 50%', overflow: 'hidden', background: 'linear-gradient(180deg, #FF8C60 0%, #FF5B1C 100%)' }}>
            <Typography 
              variant="h2" 
              color="#fff" 
              fontWeight="bold"
              sx={{ fontSize: { xs: '2rem', md: '3rem' }, position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            >
              {model?.image && <img src={model?.image || 'Brand'} alt="Brand Logo" width={400} height={200} style={{ objectFit: 'contain', objectPosition: 'center', rotate: '-45deg' }} />}
            </Typography>
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
      <Container maxWidth="lg" sx={{ pt: 12, pb: 8 }}>
        <TabsSection model={model} />
      </Container>
      <Footer />
    </Box>
  );
}

function TabsSection({ model }: { model: any; }) {
  const { t } = useTranslation();
  const [tab, setTab] = useState(0);

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 12 }}>
        <Tabs
          value={tab}
          onChange={(e, v) => setTab(v)}
          textColor="primary"
          indicatorColor="primary"
        >
          <Tab sx={{ width: '50%', maxWidth: '50%', fontSize: '24px', fontWeight: 400, textTransform: 'none' }} label={t('model.specification')} />
          <Tab sx={{ width: '50%', maxWidth: '50%', fontSize: '24px', fontWeight: 400, textTransform: 'none' }} label={t('model.whoPlaysIt')} />
        </Tabs>
      </Box>

      {tab === 0 && (
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box>
              <Typography variant="body1" sx={{ mb: 3, color: '#3D3D46', fontSize: '24px', fontWeight: 300 }}>
                {model.description}
              </Typography>
              <Box component="ul" sx={{ pl: 3, m: 0, color: '#3D3D46', fontSize: '24px', fontWeight: 300 }}>
                <li>
                  <Typography variant="body1">{t('model.specs.bodyWood')}: "{model?.specs?.bodyWood}",</Typography>
                </li>
                <li>
                  <Typography variant="body1">{t('model.specs.neckWood')}: "{model?.specs?.neckWood}",</Typography>
                </li>
                <li>
                  <Typography variant="body1">{t('model.specs.fingerboard')}: "{model?.specs?.fingerboardWood}",</Typography>
                </li>
                <li>
                  <Typography variant="body1">{t('model.specs.pickups')}: "{model?.specs?.pickups}",</Typography>
                </li>
                <li>
                  <Typography variant="body1">{t('model.specs.tuners')}: "{model?.specs?.tuners}",</Typography>
                </li>
                <li>
                  <Typography variant="body1">{t('model.specs.scaleLength')}: "{model?.specs?.scaleLength}",</Typography>
                </li>
                <li>
                  <Typography variant="body1">{t('model.specs.bridge')}: "{model?.specs?.bridge}"</Typography>
                </li>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}

      {tab === 1 && (
        <Box>
          <MusiciansSlider musicians={model.musicians || []} />
        </Box>
      )}
    </Box>
  );
}

function MusiciansSlider({ musicians }: { musicians: Array<{ name: string; musicianImage: string; bands: string[] }> }) {
  const [index, setIndex] = useState(0);
  const pageSize = 2;
  const pages = Math.max(1, Math.ceil(musicians.length / pageSize));

  const goto = (i: number) => {
    const next = ((i % pages) + pages) % pages;
    setIndex(next);
  };

  const visible = musicians.slice(index * pageSize, index * pageSize + pageSize);

  return (
    <Box>
      <Grid container spacing={4}>
        {visible.map((m, idx) => (
          <Grid item xs={12} md={6} key={`${m.name}-${idx}`}>
            <Card sx={{ bgcolor: '#FFF4EF' }}>
              <CardContent>
                <Box sx={{ borderRadius: 2, overflow: 'hidden', mb: 2 }}>
                  <img src={m.musicianImage} alt={m.name} style={{ width: '100%', height: '440px', display: 'block', objectFit: 'cover' }} />
                </Box>
                <Typography variant="h6" sx={{ textAlign: 'center' }}>{m.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dots */}
      {pages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, gap: 1 }}>
          {Array.from({ length: pages }).map((_, i) => (
            <Box
              key={i}
              onClick={() => goto(i)}
              sx={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                bgcolor: i === index ? '#FF6B35' : '#E0E0E0',
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
