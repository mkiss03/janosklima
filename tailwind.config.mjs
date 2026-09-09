/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // Colors are fully replaced (not extended) — the brand palette is the only
    // palette. No Tailwind default reds/blues/violets should ever be reachable.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#0B0B0B',
      ink: '#171A1F',
      paper: '#F4F6F8',
      sun: {
        500: '#F28A1E',
        600: '#E4552B',
      },
      ice: {
        400: '#4FB8E6',
        600: '#1E5AA8',
        900: '#10284F',
      },
      neutral: {
        50: '#F4F6F8',
        100: '#E2E4E7',
        200: '#CCCED1',
        300: '#ADB0B3',
        500: '#7A7D81',
        700: '#484A4F',
        900: '#171A1F',
      },
    },
    fontFamily: {
      display: ['"Archivo Variable"', 'Archivo', 'sans-serif'],
      body: ['"IBM Plex Sans"', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5' }],
      sm: ['0.9375rem', { lineHeight: '1.55' }],
      base: ['1.0625rem', { lineHeight: '1.55' }],
      lg: ['1.125rem', { lineHeight: '1.55' }],
      xl: ['1.375rem', { lineHeight: '1.3' }],
      '2xl': ['1.75rem', { lineHeight: '1.15' }],
      '3xl': ['2.25rem', { lineHeight: '1.05' }],
      '4xl': ['2.875rem', { lineHeight: '1.0' }],
      '5xl': ['3.75rem', { lineHeight: '0.98' }],
      '6xl': ['4.75rem', { lineHeight: '0.95' }],
    },
    extend: {
      maxWidth: {
        content: '1280px',
        measure: '70ch',
      },
      borderRadius: {
        none: '0',
        btn: '6px',
        frame: '12px',
      },
      transitionTimingFunction: {
        studio: 'cubic-bezier(0.2, 0, 0, 1)',
      },
      transitionDuration: {
        220: '220ms',
      },
    },
  },
  plugins: [],
};
