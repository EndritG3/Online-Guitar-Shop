import type { Metadata } from 'next';
import ApolloProvider from './components/ApolloProvider';
import ThemeProvider from './components/ThemeProvider';
import I18nProvider from './components/I18nProvider';

export const metadata: Metadata = {
  title: 'Online Guitar Shop',
  description: 'Find your perfect guitar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: '"Satoshi", "Inter", "Roboto", "Helvetica", "Arial", sans-serif' }}>
        <I18nProvider>
          <ApolloProvider>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ApolloProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
