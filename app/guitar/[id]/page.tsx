'use client';

import { useParams } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
  Alert,
  CircularProgress,
  Paper,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { useTranslation } from 'react-i18next';
import { ShoppingCart } from '@mui/icons-material';
import Navigation from '../../components/Navigation';
import { GET_GUITAR } from '../../lib/graphql';

export default function GuitarDetailPage() {
  const { t } = useTranslation();
  const params = useParams();
  const guitarId = params.id as string;

  const { loading, error, data } = useQuery(GET_GUITAR, {
    variables: { id: guitarId },
  });

  const handleAddToCart = () => {
    // TODO: Implement cart functionality
    console.log('Add to cart:', data?.guitar);
  };

  if (loading) {
    return (
      <Box>
        <Navigation />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        </Container>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <Navigation />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Alert severity="error">
            {t('error')}: {error.message}
          </Alert>
        </Container>
      </Box>
    );
  }

  const guitar = data?.guitar;

  if (!guitar) {
    return (
      <Box>
        <Navigation />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Alert severity="warning">
            Guitar not found
          </Alert>
        </Container>
      </Box>
    );
  }

  return (
    <Box>
      <Navigation />
      
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Guitar Image */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3}>
              <img
                src={guitar.image}
                alt={`${guitar.brand} ${guitar.model}`}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />
            </Paper>
          </Grid>

          {/* Guitar Details */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="h3" component="h1" gutterBottom>
                {guitar.brand} {guitar.model}
              </Typography>
              
              <Chip 
                label={guitar.type} 
                color="primary" 
                sx={{ mb: 2 }}
              />
              
              <Typography variant="h4" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
                ${guitar.price}
              </Typography>
              
              <Typography variant="body1" sx={{ mb: 3 }}>
                {guitar.description}
              </Typography>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<ShoppingCart />}
                onClick={handleAddToCart}
                sx={{ mb: 3 }}
              >
                {t('guitar.addToCart')}
              </Button>
            </Box>
          </Grid>

          {/* Specifications */}
          <Grid item xs={12}>
            <Divider sx={{ my: 4 }} />
            
            <Typography variant="h4" component="h2" gutterBottom>
              Specifications
            </Typography>
            
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {t('guitar.brand')}
                    </Typography>
                    <Typography variant="body1">
                      {guitar.brand}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {t('guitar.model')}
                    </Typography>
                    <Typography variant="body1">
                      {guitar.model}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {t('guitar.type')}
                    </Typography>
                    <Typography variant="body1">
                      {guitar.type}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      {t('guitar.price')}
                    </Typography>
                    <Typography variant="body1">
                      ${guitar.price}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            
            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Body
                    </Typography>
                    <Typography variant="body1">
                      {guitar.specs.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Neck
                    </Typography>
                    <Typography variant="body1">
                      {guitar.specs.neck}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Pickups
                    </Typography>
                    <Typography variant="body1">
                      {guitar.specs.pickups}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} sm={6} md={3}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" color="primary" gutterBottom>
                      Bridge
                    </Typography>
                    <Typography variant="body1">
                      {guitar.specs.bridge}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
