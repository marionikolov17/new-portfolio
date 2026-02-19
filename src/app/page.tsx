import LayoutHome from '@/components/layout-home';
import { NavigationProvider } from '@/context/navigation-context';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mario Nikolov - Software Developer',
  description:
    'Mario Nikolov is a passionate Software Developer specializing in modern web technologies including React, Next.js, TypeScript, and Node.js. Building scalable applications and innovative solutions.',
  creator: 'Mario Nikolov',
  publisher: 'Mario Nikolov',
  authors: [{ name: 'Mario Nikolov' }],
  keywords: [
    'Mario Nikolov',
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'Node.js Developer',
    'Web Developer',
    'Portfolio',
    'Bulgaria Developer',
    'Nibnab.ai',
    'Silencerer',
    'Strangram',
    'Modern Web Applications',
    'Scalable Solutions',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icons/favicon.ico',
    shortcut: '/icons/favicon.ico',
    apple: '/icons/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Mario Nikolov - Software Developer',
    description:
      'Mario Nikolov is a passionate Software Developer specializing in modern web technologies including React, Next.js, TypeScript, and Node.js. Building scalable applications and innovative solutions.',
    url: 'https://www.marionikolovdev.com',
    siteName: 'Mario Nikolov Portfolio',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Mario Nikolov - Software Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mario Nikolov - Software Developer',
    description:
      'Passionate Software Developer building scalable applications with modern web technologies.',
    images: ['/images/opengraph.png'],
    creator: '@marionikolov',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
};

export default function Home() {
  return (
    <NavigationProvider>
      <LayoutHome />
    </NavigationProvider>
  );
}
