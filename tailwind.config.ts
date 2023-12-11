import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lobster: ['Lobster', 'sans-serif'],
      },
      colors: {
        header: '#333333',
        previus: '#F6F6F6',
        title: '#251D2B',
        description: '#302837',
        theme: '#FF5311',
        darkTheme: '#DB490F',
      },
      spacing: {
        '10': '10px',
        '50': '50px',
        '300': '300px',
        '350': '350px',
        '360': '347px',
        '280': '280px',
        '160': '160px',
        '120': '120px',
        '270': '270px',
        '288.5': '288.5px',
        '390': '390px',
        '470': '470px',
        '500': '500px',
        '600': '600px',
        '800': '800px',
      },
      screens: {
        '360': '360px',
        '460': '460px',
      },
    },
  },
  plugins: [],
};
export default config;
