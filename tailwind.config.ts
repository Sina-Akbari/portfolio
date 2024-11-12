import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--foreground)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      boxShadow: {
        'neu-base':
          '-5px 5px 10px rgba(220, 222, 222, 0.2),5px -5px 10px rgba(220, 222, 222, 0.2),-5px -5px 10px rgba(255, 255, 255, 0.9),5px 5px 13px rgba(220, 222, 222, 0.9),inset 1px 1px 2px rgba(255, 255, 255, 0.3),inset -1px -1px 2px rgba(220, 222, 222, 0.5)',
        'neu-pressed':
          '1px 1px 2px rgba(255, 255, 255, 0.3),-1px -1px 2px rgba(221, 225, 225, 0.5),inset -5px 5px 10px rgba(221, 225, 225, 0.2),inset 5px -5px 10px rgba(221, 225, 225, 0.2),inset -5px -5px 10px rgba(255, 255, 255, 0.9),inset 5px 5px 13px rgba(221, 225, 225, 0.9)',
      },
    },
  },
  plugins: [],
} satisfies Config;
