import type { Config } from 'tailwindcss';
import { BREAKPOINTS } from './src/utils/enum';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        geist: ['var(--font-geist-sans)'],
      },
      colors: {
        background: {
          DEFAULT: 'var(--background)',
          component: 'var(--background-component)',
        },
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        input: 'var(--input)',
      },
      textColor: {
        regular: 'var(--font-regular)',
        placeholder: 'var(--font-placeholder)',
      },
      borderColor: {
        regular: 'var(--border-regular)',
      },
      width: BREAKPOINTS,
      minWidth: BREAKPOINTS,
      maxWidth: BREAKPOINTS,
    },
    screens: BREAKPOINTS,
  },
  plugins: [],
};
export default config;
