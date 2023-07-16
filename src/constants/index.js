import {
    frontend,
    seo,
    oneGold,
    twoGold,
    threeGold,
    ux,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    figma,
    komikult,
    leaderboard,
    math,
    movie,
    nyeusi,
    one,
    two,
    three,
    four
  } from '../assets';
  
  export const navLinks = [
    {
      id: 'about',
      title: 'About',
    },
    {
      id: 'experience',
      title: 'Experience',
    },
    {
      id: 'contact',
      title: 'Contact',
    },
  ];
  
  const services = [
    {
      title: 'Frontend Developer',
      icon: oneGold,
    },
    {
      title: 'SEO Specialist',
      icon: threeGold,
    },
    {
      title: 'UI/UX Design',
      icon: twoGold,
    },
  ];
  
  const technologies = [
    {
      name: 'HTML 5',
      icon: html,
    },
    {
      name: 'CSS 3',
      icon: css,
    },
    {
      name: 'JavaScript',
      icon: javascript,
    },
    {
      name: 'React JS',
      icon: reactjs,
    },
    {
      name: 'Tailwind CSS',
      icon: tailwind,
    },
    {
      name: 'Node JS',
      icon: nodejs,
    },
    {
      name: 'figma',
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: 'E-commerce',
      company_name: 'Personal business',
      icon: two,
      iconBg: '#333333',
      date: 'may 2018 - mar 2021',
    },
    {
      title: 'NFTs & cryptos',
      company_name: 'personal project',
      icon: three,
      iconBg: '#333333',
      date: 'feb 2021 - oct 2021',
    },
    {
      title: 'freelancer - SEO specialist',
      company_name: 'fiverr',
      icon: four,
      iconBg: '#333333',
      date: 'dec 2021 - jul 2022',
    },
    {
      title: 'Developer - frontend',
      company_name: 'personal projects',
      icon: one,
      iconBg: '#333333',
      date: 'jul 2022 - Present',
    },
  ];
  
  const projects = [
    {
      id: 'project-1',
      name: 'KomiKult',
      description: 'A comic characters list app that displays Marvel characters.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'mongodb',
          color: 'green-text-gradient',
        },
        {
          name: 'tailwind',
          color: 'pink-text-gradient',
        },
      ],
      image: komikult,
      repo: 'https://github.com/shaqdeff/KomiKult',
      demo: 'https://shaqdeff.github.io/KomiKult/',
    },
    {
      id: 'project-2',
      name: 'Leaderboard',
      description:
        'A leaderboard list app that displays scores submitted by different players.',
      tags: [
        {
          name: 'react',
          color: 'blue-text-gradient',
        },
        {
          name: 'restapi',
          color: 'green-text-gradient',
        },
        {
          name: 'scss',
          color: 'pink-text-gradient',
        },
      ],
      image: leaderboard,
      repo: 'https://github.com/shaqdeff/Leaderboard',
      demo: 'https://shaqdeff.github.io/Leaderboard/',
    },
    {
      id: 'project-3',
      name: 'Math Magicians',
      description: 'This is a single-page calculator app built with React',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: math,
      repo: 'https://github.com/shaqdeff/Math-Magicians',
      demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
    },
    {
      id: 'project-4',
      name: 'Movie Metro',
      description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: movie,
      repo: 'https://github.com/shaqdeff/Movie-Metro',
      demo: 'https://movie-metro.netlify.app/',
    },
    {
      id: 'project-5',
      name: 'Nyeusi Fest Site',
      description:
        'This is a demo concert website for a music festival called Nyeusi.',
      tags: [
        {
          name: 'nextjs',
          color: 'blue-text-gradient',
        },
        {
          name: 'supabase',
          color: 'green-text-gradient',
        },
        {
          name: 'css',
          color: 'pink-text-gradient',
        },
      ],
      image: nyeusi,
      repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
      demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
    },
  ];
  
  export { services, technologies, experiences, projects };
  