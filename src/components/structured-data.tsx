import Script from 'next/script';

export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mario Nikolov',
    jobTitle: 'Junior Software Engineer',
    description:
      'Passionate Junior Software Engineer specializing in modern web technologies including React, Next.js, TypeScript, and Node.js.',
    url: 'https://www.marionikolovdev.com',
    image: 'https://www.marionikolovdev.com/images/mario-for-portfolio.png',
    email: 'marionikolovdev@gmail.com',
    nationality: 'Bulgarian',
    knowsAbout: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'AWS',
      'Python',
      'Tailwind CSS',
      'Full Stack Development',
      'Web Development',
      'Software Engineering',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'nibnab.ai',
      url: 'https://www.nibnab.ai',
    },
    sameAs: [
      'https://github.com/marionikolov17',
      'https://www.linkedin.com/in/marionikolovdev',
      'https://www.instagram.com/marionikolov17',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'JavaScript Web Developer',
        credentialCategory: 'Certificate',
        recognizedBy: {
          '@type': 'Organization',
          name: 'SoftUni',
          url: 'https://softuni.bg',
        },
      },
    ],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.marionikolovdev.com',
    },
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
