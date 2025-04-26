import LayoutHome from '@/components/layout-home';
import { NavigationProvider } from '@/context/navigation-context';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mario Nikolov Developer',
  description: 'Personal website of Mario Nikolov, a software developer.',
  creator: 'Mario Nikolov',
  keywords: [
    'Mario Nikolov',
    'Developer',
    'Software Engineer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'React Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/icons/favicon.ico',
  },
  openGraph: {
    title: 'Mario Nikolov Developer',
    description: 'Personal website of Mario Nikolov, a software developer.',
    url: 'https://www.marionikolovdev.com',
    siteName: 'Mario Nikolov Developer',
    images: [
      {
        url: '/images/opengraph.png',
        width: 1200,
        height: 630,
        alt: 'Mario Nikolov Developer',
      },
    ],
  },
};

export default function Home() {
  return (
    <NavigationProvider>
      <LayoutHome />
    </NavigationProvider>
  );
}
