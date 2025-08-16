# Guitar Shop

A modern guitar shop built with Next.js 14+, Apollo Client, and Material-UI.

## Features

- **3-Page Application**: Home, Guitars listing, and Individual guitar detail pages
- **GraphQL Integration**: Uses Apollo Client with SSR support
- **Internationalization**: English (EN), Albanian (SQ), and Macedonian (MK)
- **Language switcher in footer**: Changes language instantly and is **persisted in localStorage**
- **Modern UI**: Built with Material-UI components
- **Responsive Design**: Mobile-first approach
- **Search & Filtering**: Brand page includes styled filter-by-type and search-by-name inputs
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **GraphQL Client**: Apollo Client with SSR support
- **UI Library**: Material-UI (MUI)
- **Internationalization**: react-i18next
- **Styling**: Emotion (MUI's styling solution)
- **Linting**: ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd guitar-shop
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
guitar-shop/
├── app/
│   ├── components/
│   │   ├── ApolloProvider.tsx
│   │   ├── Footer.tsx            # Footer with language switcher (EN/SQ/MK)
│   │   ├── I18nProvider.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── T.tsx                 # Small client helper to use translations in server files
│   ├── brand/
│   │   └── [id]/
│   │       ├── model/
│   │       │   └── [modelId]/
│   │       │       └── page.tsx  # Model detail (tabs + specs)
│   │       └── page.tsx          # Brand page (filter/search + models)
│   ├── lib/
│   │   ├── apollo-client.ts
│   │   ├── graphql.ts
│   │   ├── i18n.ts               # i18n resources + localStorage persistence
│   │   └── theme.ts
│   ├── layout.tsx                # Root layout with providers
│   └── page.tsx                  # Home page
├── public/
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Pages

### 1. Home Page (`/`)
- Localized hero and sections (uses translations)
- Featured brands grid

### 2. Brand Page (`/brand/[id]`)
- Localized texts
- Filter by type (left icon + caret) and search by name (left icon)
- Paginated model grid

### 3. Model Detail Page (`/brand/[id]/model/[modelId]`)
- Localized tabs: Specification / Who plays it?
- Specs list (localized labels)

## GraphQL API

The application connects to the GraphQL API at:
```
https://graphql-api-brown.vercel.app/api/graphql
```

### Main Queries:
- `GET_BRANDS`: Fetch available brands
- `GET_BRAND_BY_ID`: Fetch brand details + models
- `GET_MODEL`: Fetch a single model by brand and model id

## Internationalization

- Languages: **English (EN)**, **Albanian (SQ)**, **Macedonian (MK)**
- Switcher: in the footer (`Footer.tsx`)
- Persistence: the selected language is saved to `localStorage` under the key `lang` and restored on load
- Resources: defined in `app/lib/i18n.ts`

Using translations in client components:
```tsx
import { useTranslation } from 'react-i18next';

const MyClient = () => {
  const { t } = useTranslation();
  return <span>{t('filter.byType')}</span>;
};
```

Using translations in server files (via small client helper `T.tsx`):
```tsx
import T from '@/app/components/T';

export default function HeroTitle() {
  return (
    <h1>
      <T k="home.hero.titlePrefix" />{' '}
      <span><T k="home.hero.titleHighlight" /></span>{' '}
      <T k="home.hero.titleSuffix" />
    </h1>
  );
}
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Environment Variables

No environment variables are required for this project as it uses a public GraphQL API.

## Deployment

The application can be deployed to Vercel, Netlify, or any other Next.js-compatible hosting platform.

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
