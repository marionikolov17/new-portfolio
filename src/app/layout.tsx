import { Inter } from 'next/font/google';
import './globals.css';
import StructuredData from '@/components/structured-data';
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId="G-7FT4SKCCVV" />
    </html>
  );
}
