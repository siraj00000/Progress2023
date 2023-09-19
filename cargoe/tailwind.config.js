/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito400: ['var(--nunito400)'],
        nunito700: ['var(--nunito700)'],
        sharpsans500: ['var(--sharpsans500)'],
        sharpsans700: ['var(--sharpsans700)'],
        sharpsans800: ['var(--sharpsans800)'],
      },
      colors: {
        primary: '#2998FF',
        secondary: '#091E31',
        accent: '#ECEA3D',
        neutral: '#9FFF97',
        activeTab: '#878B92',
        greenish: '#658D8E',
        // Light shades
        light: '#ffffff',
        lightRed: '#FFDACA',
        lightYellow: '#FFEFB7',
        lightBlue: '#97FFF9',
        lightPink: '#FFB9F8',
        lightGray: '#DEEFFF',
        shadowGray: 'rgba(102, 102, 102, 0.24);',
        dimLight: "#EEEEEE"
      },
      fontSize: {
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        24: '24px',
        32: '32px',
        40: '40px',
        56: '56px',
        80: '80px',
      },
      lineHeight: {
        16: '16px',
        24: '24px',
      },
      width: {
        132: '132px',
        200: '200px',
        238: '238px',
        300: '300px',
        350: '350px',
        400: '400px',
        450: '450px',
        761: '761px',
        1440: '1440px'
      },
      maxWidth: {
        150: '150px',
        180: '180px',
        200: '200px',
        254: '254px',
        524: '524px',
        1440: '1440px',
        '70per': '70%',
        '80per': '80%',
      },
      padding: {
        '5per': '5%',
        '8per': '8%',
        '12per': '12%',
        '20per': '20%',
        16: '16px',
        24: '24px',
      },
      margin: {
        '8per': '8%'
      },
      height: {
        24: '24px',
        40: '40px',
        '48px': '48px',
        100: '100px',
        100: '100px',
        150: '150px',
        200: '200px',
        248: '248px',
        300: '300px',
        400: '400px',
        728: '728px'
      },
      maxHeight: {
        254: '254px',
        320: '320px',
        576: '576px',
        728: '728px'
      },
      borderRadius: {
        16: '16px',
        24: '24px',
        40: '40px',
        48: '48px',
        80: '80px',
        1032: '1032px'
      },
      boxShadow: {
        '3xl': '0px 8px 24px 0px rgba(53, 53, 53, 0.16)'
      },
      backgroundImage: {
        'ship-bg': 'url(/public/HeroShipSVG.svg)',
      },
    },
  },
  plugins: [],
};
