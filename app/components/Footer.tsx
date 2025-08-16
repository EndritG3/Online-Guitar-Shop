"use client";

import { Box, Container, Grid, Typography, IconButton, Button } from '@mui/material';
import { Email, LocationOn, Facebook, Twitter, Instagram } from '@mui/icons-material';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t, i18n } = useTranslation();
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
              <Typography variant="body2" color="#666666">Enquiry@VibeStrings.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocationOn sx={{ color: '#666666', mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="#121212" sx={{ opacity: 0.6 }}>{t('footer.city')}</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700, color: '#121212' }} gutterBottom>{t('footer.pages')}</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">{t('footer.store')}</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">{t('footer.collections')}</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">{t('footer.support')}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700, color: '#121212' }} gutterBottom>{t('footer.product')}</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">{t('footer.terms')}</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">{t('footer.privacyPolicy')}</Typography>
                <Typography variant="body2" color="#121212" sx={{ opacity: 0.6, mb: 1 }} display="block">Copyright</Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 700, color: '#121212' }} gutterBottom>{t('footer.followUs')}</Typography>
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
            <Box sx={{ display: 'flex', gap: 1, mt: 2, flexWrap: 'wrap' }}>
              <Button
                size="small"
                variant={i18n.language === 'en' ? 'contained' : 'outlined'}
                onClick={() => i18n.changeLanguage('en')}
                sx={{ textTransform: 'none', borderRadius: '8px', bgcolor: i18n.language === 'en' ? '#ff6b35' : 'transparent', color: i18n.language === 'en' ? '#fff' : '#121212', borderColor: '#E8E8E8' }}
              >
                {t('language.en')}
              </Button>
              <Button
                size="small"
                variant={i18n.language === 'sq' ? 'contained' : 'outlined'}
                onClick={() => i18n.changeLanguage('sq')}
                sx={{ textTransform: 'none', borderRadius: '8px', bgcolor: i18n.language === 'sq' ? '#ff6b35' : 'transparent', color: i18n.language === 'sq' ? '#fff' : '#121212', borderColor: '#E8E8E8' }}
              >
                {t('language.sq')}
              </Button>
              <Button
                size="small"
                variant={i18n.language === 'mk' ? 'contained' : 'outlined'}
                onClick={() => i18n.changeLanguage('mk')}
                sx={{ textTransform: 'none', borderRadius: '8px', bgcolor: i18n.language === 'mk' ? '#ff6b35' : 'transparent', color: i18n.language === 'mk' ? '#fff' : '#121212', borderColor: '#E8E8E8' }}
              >
                {t('language.mk')}
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Typography variant="body2" color="#121212" sx={{ opacity: 0.6 }}>{t('footer.copyright')}</Typography>
        </Box>
      </Container>
    </Box>
  );
}


