import type { Config } from 'tailwindcss';
import xionPlugin from '@xionhub/tailwind-plugin';
import { XION_STYLE } from '@xionhub/token';
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    ...XION_STYLE,
    colors: XION_STYLE.colors,
    extend: {},
  },
  plugins: [xionPlugin],
  darkMode: ['class'],
};
export default config;
