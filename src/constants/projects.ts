import dedent from 'dedent';

export const projects = [
  {
    type: 'Web Application',
    title: 'Strangram',
    description: dedent`
      Strangram allows you to meet strangers through Instagram.
    `,
    imageUrl: '/images/projects/strangram.png',
    technologies: ['Next.js', 'Supabase', 'WebRTC', 'Socket.io'],
    links: {
      github: '',
      demo: 'https://www.strangram.com',
    },
  },
  {
    type: 'Open-Source Application',
    title: 'Silencerer.com',
    description: dedent`
      Silencerer is a lightweight platform for fast and efficient audio and video silence removal.
      It uses custom algorithms for very precise silence detection and removal.
    `,
    imageUrl: '/images/projects/silencerer.png',
    technologies: [
      'TypeScript',
      'Next.js',
      'XState',
      'Digital Audio',
      'TailwindCSS',
    ],
    links: {
      github: 'https://github.com/marionikolov17/silencerer',
      demo: 'https://www.silencerer.com',
    },
  },
];
