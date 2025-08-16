# Guitar Shop

A modern guitar shop built with Next.js 14+, Apollo Client, and Material-UI.

## Features

- **3-Page Application**: Home, Guitars listing, and Individual guitar detail pages
- **GraphQL Integration**: Uses Apollo Client with SSR support
- **Internationalization**: Support for English, Albanian (SQ), and Macedonian (MK)
- **Modern UI**: Built with Material-UI components
- **Responsive Design**: Mobile-first approach
- **Search & Filtering**: Advanced search with brand, type, and price filters
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
│   ├── components/          # Reusable UI components
│   │   ├── Navigation.tsx   # Main navigation with language switcher
│   │   ├── GuitarCard.tsx   # Guitar card component
│   │   └── SearchFilters.tsx # Search and filter component
│   ├── lib/                 # Utility functions and configurations
│   │   ├── apollo-client.ts # Apollo Client configuration
│   │   ├── graphql.ts       # GraphQL queries and types
│   │   ├── i18n.ts          # Internationalization setup
│   │   └── theme.ts         # MUI theme configuration
│   ├── guitars/             # Guitars listing page
│   ├── guitar/[id]/         # Individual guitar detail page
│   ├── cart/                # Shopping cart page
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Home page
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Pages

### 1. Home Page (`/`)
- Hero section with call-to-action
- Featured guitars section
- Responsive design

### 2. Guitars Page (`/guitars`)
- Grid layout of all guitars
- Advanced search and filtering
- URL-based state management
- Loading and error states

### 3. Guitar Detail Page (`/guitar/[id]`)
- Detailed guitar information
- Full specifications
- Add to cart functionality
- Responsive image gallery

### 4. Cart Page (`/cart`)
- Shopping cart interface
- Item management
- Checkout process (placeholder)

## GraphQL API

The application connects to the GraphQL API at:
```
https://graphql-api-brown.vercel.app/api/graphql
```

### Main Queries:
- `GET_GUITARS`: Fetch guitars with filtering
- `GET_GUITAR`: Fetch individual guitar details
- `GET_BRANDS`: Fetch available brands
- `GET_TYPES`: Fetch available guitar types

## Internationalization

The application supports three languages:
- **English (EN)**: Default language
- **Albanian (SQ)**: Shqip
- **Macedonian (MK)**: Македонски

Language switching is available in the navigation bar.

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
