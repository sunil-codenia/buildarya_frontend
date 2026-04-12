/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B6E6E',
          dark: '#085858',
          light: '#0E8A8A',
          50: '#F0F9F9',
          100: '#CCEBEB',
          200: '#99D6D6',
          300: '#66C2C2',
          400: '#33ADAD',
          500: '#0B6E6E',
          600: '#085858',
          700: '#064242',
          800: '#042C2C',
          900: '#021616',
        },
        accent: {
          DEFAULT: '#F5A623',
          dark: '#D4911A',
          light: '#F7B84E',
        },
        bg: {
          DEFAULT: '#F8F7F4',
          alt: '#FFFFFF',
          surface: '#F0EFEC',
        },
        fg: {
          DEFAULT: '#1C1917',
          muted: '#78716C',
          subtle: '#A8A29E',
        },
        border: {
          DEFAULT: '#E7E5E4',
          strong: '#D6D3D1',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['DM Sans', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '6rem',
        '7xl': '12rem',
      },
      animation: {
        'spin-slow': 'rotate 14s linear infinite',
        'float': 'floatUp 4s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-in': 'animationIn 0.8s ease-out forwards',
      },
      keyframes: {
        rotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        animationIn: {
          '0%': { opacity: '0', transform: 'translateY(28px)', filter: 'blur(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0,0,0,0.06)',
        'card': '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover': '0 8px 40px rgba(0,0,0,0.12)',
        'teal': '0 4px 20px rgba(11,110,110,0.25)',
        'accent': '0 4px 20px rgba(245,166,35,0.35)',
      },
    },
  },
  plugins: [],
};