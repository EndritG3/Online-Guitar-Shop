'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  Grid,
  Alert,
  CircularProgress,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import GuitarCard from '../components/GuitarCard';
import SearchFilters from '../components/SearchFilters';
import { GET_GUITARS, GuitarFilters } from '../lib/graphql';

export default function GuitarsPage() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  
  const [filters, setFilters] = useState<GuitarFilters>({
    search: searchParams.get('search') || '',
    brand: searchParams.get('brand') || '',
    category: searchParams.get('category') || '',
    minPrice: parseInt(searchParams.get('minPrice') || '0'),
    maxPrice: parseInt(searchParams.get('maxPrice') || '5000'),
  });

  const { loading, error, data, refetch } = useQuery(GET_GUITARS, {
    variables: filters,
    fetchPolicy: 'cache-and-network',
  });

  const handleFiltersChange = (newFilters: GuitarFilters) => {
    setFilters(newFilters);
    refetch(newFilters);
  };

  const handleAddToCart = (guitar: any) => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', guitar);
  };

  return (
    <Box>
      <Navigation />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {t('nav.guitars')}
        </Typography>
        
        <SearchFilters onFiltersChange={handleFiltersChange} />
        
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        )}
        
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {t('error')}: {error.message}
          </Alert>
        )}
        
        {!loading && !error && data?.guitars?.length === 0 && (
          <Alert severity="info" sx={{ mb: 3 }}>
            {t('noResults')}
          </Alert>
        )}
        
        {!loading && !error && data?.guitars?.length > 0 && (
          <>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              {data.allGuitars.length} {data.allGuitars.length === 1 ? 'guitar' : 'guitars'} found
            </Typography>
            
            <Grid container spacing={3}>
              {data.allGuitars.map((guitar: any) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={guitar.id}>
                  <GuitarCard guitar={guitar} onAddToCart={handleAddToCart} />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </Container>
    </Box>
  );
}
