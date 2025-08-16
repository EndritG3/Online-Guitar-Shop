'use client';

import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  TextField,
  InputAdornment,
  Pagination,
  MenuItem,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  ArrowBack,
  Search,
  FilterList,
  KeyboardArrowDown,
} from '@mui/icons-material';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';

import { GET_BRAND_BY_ID } from '../../lib/graphql';
import Footer from '@/app/components/Footer';



export default function BrandPage({ params }: { params: { id: string } }) {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  // GraphQL query for brand data with models
  const { loading, error, data } = useQuery(GET_BRAND_BY_ID, {
    variables: { id: params.id },
    fetchPolicy: 'cache-and-network',
  });

  const brand = data?.findUniqueBrand;
  const models = brand?.models || [];

  const filteredProducts = models.filter((model: any) => {
    const matchesSearch = model.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = !filterType || model.type.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <Box>
      <Container maxWidth="lg" sx={{ pt: 2, position: 'absolute', top: 0, left: 0, width: '100%', zIndex: 1000 }}>
        <Link href="/" style={{ textDecoration: 'none' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: '#666', mb: 2 }}>
            <ArrowBack sx={{ mr: 1, fontSize: 20 }} />
            <Typography variant="body2">{t('nav.backHome')}</Typography>
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
                    pr: "10px",
                    lineHeight: 1.2,
                  }}
                >
                   {t('hero.playLikeA')}{' '}
                <Box component="span" sx={{ color: '#ff6b35' }}>
                  {t('hero.rockStar')}
                </Box>
                </Typography>
                <Typography 
                variant="body1"
                sx={{
                  fontWeight: 400,
                  textAlign: 'center',
                  color: '#666',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  px: 4,
                  mb: 3,
                }}
              >
                {t('hero.description', { brand: brand?.name || 'Brand' })}
                <br />
                {t('hero.ask')}
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
              {brand?.image && <img src={brand?.image || 'Brand'} alt="Brand Logo" width={400} height={200} style={{ objectFit: 'contain', objectPosition: 'center', opacity: 0.4 }} />}
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

      {/* Product Selection Section */}
      <Container maxWidth="lg" sx={{ pt: 15, pb: 8 }}>
        <Typography 
          variant="h2" 
          component="h2" 
          gutterBottom
          sx={{
            fontSize: { xs: '2rem', md: '44px' },
            fontWeight: 700,
            color: '#2c2c2c',
            mb: 6,
            textAlign: 'center',
          }}
        >
          {t('selection.titlePrefix')}{' '}
          <Box component="span" sx={{ color: '#ff6b35' }}>
            {t('selection.titleHighlight')}
          </Box>
        </Typography>

        <Box sx={{ mb: 6, width: '60%', mx: 'auto' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                placeholder={t('filter.byType')}
                SelectProps={{
                  displayEmpty: true,
                  IconComponent: KeyboardArrowDown,
                  renderValue: (selected) => {
                    if (!selected) {
                      return t('filter.byType');
                    }
                    return String(selected as string);
                  },
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FilterList sx={{ color: '#B8BCC9' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    borderRadius: '4px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8E8E8',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8E8E8',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8E8E8',
                    boxShadow: '0 0 0 2px rgba(0,0,0,0.02)'
                  },
                  '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    color: filterType ? '#121212' : '#B8BCC9',
                  },
                }}
              >
                <MenuItem value="">{t('filter.allTypes')}</MenuItem>
                {Array.from(new Set(models.map((model: any) => model.type))).map((type: any) => (
                  <MenuItem key={type} value={type}>{type}</MenuItem>
                ))}
              </TextField>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder={t('search.byName')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: '#B8BCC9' }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    height: 56,
                    borderRadius: '4px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8E8E8',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8E8E8',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#E8E8E8',
                    boxShadow: '0 0 0 2px rgba(0,0,0,0.02)'
                  },
                  '& .MuiOutlinedInput-input::placeholder': {
                    color: '#B8BCC9',
                    opacity: 1,
                  },
                }}
              />
            </Grid>
          </Grid>
        </Box>

        {/* Loading State */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        )}

        {/* Error State */}
        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            {t('error')}: {error.message}
          </Alert>
        )}

        {/* Product Grid */}
        {!loading && !error && (
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {paginatedProducts.map((model: any) => (
              <Grid item xs={12} sm={6} md={4} key={model.id}>
                <Link href={`/brand/${brand?.id}/model/${model.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Card 
                    sx={{
                      p: 3,
                      height: '100%',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      boxShadow: 'none',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      }
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={model.image}
                      alt={model.name}
                      sx={{ objectFit: 'contain' }}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h3" gutterBottom sx={{ fontWeight: 500, color: '#121212', fontSize: '16px' }}>
                        {model.name}
                      </Typography>
                      <Typography variant="h5" sx={{ color: '#666666', fontWeight: 400, fontSize: '14px' }}>
                        {`$${model.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        )}

        {/* Pagination */}
        {!loading && !error && (
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 4 }}>
            <Typography variant="body2" color="#9292A3" sx={{ fontSize: '14px', fontWeight: 400 }}>
              {t('pagination.showingResults', { count: paginatedProducts.length.toLocaleString('en-US'), total: filteredProducts.length.toLocaleString('en-US') })}
            </Typography>
          
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={(e, page) => setCurrentPage(page)}
              color="primary"
              sx={{
                '& .MuiPaginationItem-root': {
                  color: '#9292A3',
                  borderRadius: '4px',
                  border: '1px solid #E8E8E8',
                  '&.Mui-selected': {
                    bgcolor: '#fff',
                    color: '#ff6b35',
                    borderRadius: '4px',
                    border: '1px solid #ff6b35',
                    '&:hover': {
                      bgcolor: 'rgba(255, 107, 53, 0.1)',
                    },
                  },
                },
              }}
            />
          </Box>
        )}
      </Container>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
