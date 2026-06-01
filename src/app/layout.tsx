import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Ashwin Arunachalam',
  description:
    'Helping businesses turn AI into revenue. Practical AI adoption and scalable systems for small and mid-sized businesses.',
  keywords:
    'Ashwin Arunachalam, AI Adoption, Business Growth, Founder, Software Engineer, AI Systems, Product Engineering, Small Business AI',
  authors: [{ name: 'Ashwin Arunachalam' }],
  applicationName: 'Ashwin Arunachalam',
  robots: 'index, follow',
  openGraph: {
    title: 'Ashwin Arunachalam',
    description:
      'Helping businesses turn AI into revenue. Practical AI adoption and scalable systems for small and mid-sized businesses.',
    url: 'https://ashwin-arunachalam.com',
    siteName: 'Ashwin Arunachalam',
    images: [
      {
        url: 'https://www.ashwin-arunachalam.com/assets/icon.svg',
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
      'Helping businesses turn AI into revenue. Practical AI adoption and scalable systems for small and mid-sized businesses.',
    images: ['https://www.ashwin-arunachalam.com/assets/icon.svg'],
    creator: '@aashhwiin',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <head>
        <link
          rel='icon'
          type='image/svg+xml'
          href='/assets/icon.svg'
        />
        <meta name='theme-color' content='#000000' />
      </head>
      <body className='bg-black text-white antialiased'>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
