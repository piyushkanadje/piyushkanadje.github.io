module.exports = {
  siteTitle: 'Piyush Prabhakar Kanadje | Software Developer',
  siteDescription:
    'Piyush Prabhakar kanadje holds a Masters degree in Computer Engineering(March\,24) at University Of California, Riverside',
  siteKeywords:
    'Piyush, Piyush Kanadje, Software Developer, Software Engineer, Programmer, UCR',
  siteUrl: 'https://piyushkanadje.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'G-ZT833Z08LJ',
  googleVerification: '',
  name: 'Piyush Prabhakar Kanadje',
  location: 'University Of California, Riverside ',
  email: 'piyushkanadje.work@gmail.com',
  github: 'https://github.com/piyushkanadje',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/piyushkanadje',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/piyush-kanadje/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/karmasphere_pk?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
