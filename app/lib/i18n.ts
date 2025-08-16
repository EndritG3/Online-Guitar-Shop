'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.guitars': 'Guitars',
      'nav.cart': 'Cart',
      'search.placeholder': 'Search guitars...',
      'filter.brand': 'Brand',
      'filter.price': 'Price Range',
      'filter.type': 'Type',
      'guitar.price': 'Price',
      'guitar.brand': 'Brand',
      'guitar.model': 'Model',
      'guitar.type': 'Type',
      'guitar.addToCart': 'Add to Cart',
      'guitar.viewDetails': 'View Details',
      'cart.empty': 'Your cart is empty',
      'cart.total': 'Total',
      'cart.checkout': 'Checkout',
      'cart.remove': 'Remove',
      'loading': 'Loading...',
      'error': 'An error occurred',
      'noResults': 'No guitars found',
    },
  },
  sq: {
    translation: {
      'nav.home': 'Kryesore',
      'nav.guitars': 'Kitarat',
      'nav.cart': 'Shporta',
      'search.placeholder': 'Kërko kitarat...',
      'filter.brand': 'Marka',
      'filter.price': 'Gama e Çmimit',
      'filter.type': 'Lloji',
      'guitar.price': 'Çmimi',
      'guitar.brand': 'Marka',
      'guitar.model': 'Modeli',
      'guitar.type': 'Lloji',
      'guitar.addToCart': 'Shto në Shportë',
      'guitar.viewDetails': 'Shiko Detajet',
      'cart.empty': 'Shporta juaj është bosh',
      'cart.total': 'Totali',
      'cart.checkout': 'Përfundo Blerjen',
      'cart.remove': 'Hiq',
      'loading': 'Duke ngarkuar...',
      'error': 'Ndodhi një gabim',
      'noResults': 'Nuk u gjetën kitarat',
    },
  },
  mk: {
    translation: {
      'nav.home': 'Почетна',
      'nav.guitars': 'Гитари',
      'nav.cart': 'Количка',
      'search.placeholder': 'Пребарај гитари...',
      'filter.brand': 'Бренд',
      'filter.price': 'Ценовен опсег',
      'filter.type': 'Тип',
      'guitar.price': 'Цена',
      'guitar.brand': 'Бренд',
      'guitar.model': 'Модел',
      'guitar.type': 'Тип',
      'guitar.addToCart': 'Додај во количка',
      'guitar.viewDetails': 'Види детали',
      'cart.empty': 'Вашата количка е празна',
      'cart.total': 'Вкупно',
      'cart.checkout': 'Заврши нарачка',
      'cart.remove': 'Отстрани',
      'loading': 'Се вчитува...',
      'error': 'Се појави грешка',
      'noResults': 'Не се пронајдени гитари',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
