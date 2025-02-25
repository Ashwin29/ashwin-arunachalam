import './globals.css';
import '@fontsource/poppins';
import '@fontsource/inter';
import '@fontsource/source-sans-pro';
import { Background } from './components/background/Background';
import { Header } from './components/layouts/header/Header';
import { Footer } from './components/layouts/footer/Footer';
import AppLayout from './components/layouts/AppLayout';
import { ThemeProvider } from './components/theme-provider/ThemeProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Ashwin Arunachalam',
  description:
    'Discover how Ashwin Arunachalam, a results-driven software engineer with a passion for business development, drives impactful solutions at scale through cutting-edge technology and strategic innovation.',
  keywords:
    'Ashwin Arunachalam, Software Engineer, Business Development, Technology Leader, Scalable Solutions, Engineering at Scale, Tech Strategy, Software Projects, Innovation, Portfolio',
  authors: [{ name: 'Ashwin Arunachalam' }],
  applicationName: 'Ashwin Arunachalam',
  robots: 'index, follow',
  openGraph: {
    title: 'Ashwin Arunachalam',
    description:
      'Discover how Ashwin Arunachalam, a results-driven software engineer with a passion for business development, drives impactful solutions at scale through cutting-edge technology and strategic innovation.',
    url: 'https://ashwin-arunachalam.com',
    siteName: 'Ashwin Arunachalam',
    images: [
      {
        url: 'https://ashwin-arunachalam.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ashwin Arunachalam Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashwin Arunachalam',
    description:
      'Discover how Ashwin Arunachalam, a results-driven software engineer with a passion for business development, drives impactful solutions at scale through cutting-edge technology and strategic innovation.',
    images: ['https://ashwin-arunachalam.com/og-image.png'],
    creator: '@aashhwiin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Poppins:wght@400;700&family=Source+Sans+Pro:wght@600&display=swap'
          rel='stylesheet'
        />

        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/icon.svg'
          media='(prefers-color-scheme: light)'
        />

        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/icon.svg'
          media='(prefers-color-scheme: dark)'
        />

        <meta
          name='theme-color'
          content='#F9F9F9'
          media='(prefers-color-scheme: light)'
        />
        <meta
          name='theme-color'
          content='#121212'
          media='(prefers-color-scheme: dark)'
        />
      </head>
      <body className={`antialiased`}>
        <ThemeProvider>
          <Background />

          <Header />

          <AppLayout>{children}</AppLayout>

          <Footer />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
