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
      },
      spacing: {
        '360': '360px',
        '280': '280px',
        '160': '160px',
        '120': '120px',
      },
    },
  },
  plugins: [],
};
export default config;
