import dedent from 'dedent';

export const projects = [
  {
    type: 'Open-Source Application',
    title: 'Silencerer.com',
    description: dedent`
      Silencerer is a lightweight platform for fast and efficient audio and video silence removal.
      It uses custom algorithms for very precise silence detection and removal.
    `,
    imageUrl: '/images/projects/silencerer.jpg',
    technologies: [
      'TypeScript',
      'Next.js',
      'XState',
      'Digital Audio',
      'TailwindCSS',
    ],
    links: {
      github: 'https://github.com/silencerer',
      demo: '/',
    },
  },
  {
    type: 'Web Application',
    title: 'Portfolio Administrator',
    description: dedent`
      Portfolio Administrator is a platform that allows you to manage and monitor your portfolio.
      It is using advanced performance techniques to provide a fast and efficient service.
    `,
    imageUrl: '/images/projects/portfolio-administrator.jpg',
    technologies: ['TypeScript', 'React', 'TailwindCSS', 'Appwrite'],
    links: {
      github: 'https://github.com/marionikolov17/Portfolio-Administrator',
      demo: 'https://portfolio-administrator.onrender.com/',
    },
  },
];
