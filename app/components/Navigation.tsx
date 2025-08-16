'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Box,
} from '@mui/material';
import { ShoppingCart, Language } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavigationProps {
  cartItemCount?: number;
}

export default function Navigation({ cartItemCount = 0 }: NavigationProps) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);

  const handleLanguageClick = (event: React.MouseEvent<HTMLElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = () => {
    setLanguageAnchor(null);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    handleLanguageClose();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src="/logo.svg" alt="Butterfly logo" width={28} height={28} />
              <span>Online Guitar Shop</span>
            </Box>
          </Link>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button color="inherit" component={Link} href="/">
            {t('nav.home')}
          </Button>
          <Button color="inherit" component={Link} href="/brands">
            {t('nav.guitars')}
          </Button>

          <IconButton
            color="inherit"
            onClick={handleLanguageClick}
            aria-label="language"
          >
            <Language />
          </IconButton>

          <Menu
            anchorEl={languageAnchor}
            open={Boolean(languageAnchor)}
            onClose={handleLanguageClose}
          >
            <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLanguage('sq')}>Shqip</MenuItem>
            <MenuItem onClick={() => changeLanguage('mk')}>Македонски</MenuItem>
          </Menu>

          <IconButton
            color="inherit"
            component={Link}
            href="/cart"
            aria-label="cart"
          >
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
