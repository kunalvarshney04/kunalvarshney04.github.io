module.exports = {
  siteTitle: 'Kunal Varshney | Quantitative Risk Analyst',
  siteDescription:
    'Kunal Varshney is a Quantitative RiskAnalyst, based in Mumbai, who loves learning new things and helping others.',
  siteKeywords:
    'Kunal Varshney,Mumbai, Nomura,BITS,Pilani,Hyderabad',
  siteUrl: 'https://kunalvarshney04.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Kunal Varshney',
  location: 'Mumbai,India',
  email: 'yash4.varshney@gmail.com',
  github: 'https://github.com/kunalvarshney04',
  twitterHandle: '@KunalYash4',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/kunalvarshney04',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/kunal-varshney-34591659/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/kunal_yash4/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/KunalYash4',
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
