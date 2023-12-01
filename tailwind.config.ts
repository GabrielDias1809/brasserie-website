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
        title: '#251D2B',
        description: '#302837',
        theme: '#FF5311',
        darkTheme: '#c34210',
      },
      screens: {
        sml: '490px',
      },
      spacing: {
        '300': '300px',
        '350': '350px',
        '360': '360px',
        '280': '280px',
        '160': '160px',
        '120': '120px',
        '470': '470px',
        '500': '500px',
      },
    },
  },
  plugins: [],
};
export default config;
