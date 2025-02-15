'use client';

import './globals.css';
import '@fontsource/poppins';
import '@fontsource/inter';
import '@fontsource/source-sans-pro';
import { Background } from './components/background/Background';
import { Header } from './components/layouts/header/Header';
import { Footer } from './components/layouts/footer/Footer';
import AppLayout from './components/layouts/AppLayout';
import { ThemeProvider } from './components/theme-provider/ThemeProvider';
import AppLoader from './components/app-loader/AppLoader';

// const metadata: Metadata = {
//   title: 'Ashwin Arunachalam',
//   description: 'Portfolio of Ashwin Arunachalam',
// };

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
      </head>
      <body className={`antialiased`}>
        <ThemeProvider>
          <AppLoader />
          {typeof window !== 'undefined' && <Background />}

          <Header />

          <AppLayout>{children}</AppLayout>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
