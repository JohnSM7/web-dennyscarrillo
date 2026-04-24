/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05030a',
          900: '#0a0614',
          800: '#130a22',
          700: '#1c1030',
          600: '#2a184a',
        },
        gold: {
          DEFAULT: '#C9A24B',
          soft: '#E6C67A',
          deep: '#8F6E2A',
        },
        tropic: {
          coral: '#FF4D6D',
          sunset: '#FF8A3D',
          mango: '#FFCE3A',
          lime: '#6EE7A1',
          aqua: '#2CE6D7',
          ocean: '#1AA7FF',
          purple: '#A86BFF',
          magenta: '#FF4ECD',
        },
      },
      fontFamily: {
        display: ['"Unbounded"', '"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'marquee-reverse': 'marquee-reverse 40s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6', filter: 'blur(40px)' },
          '50%': { opacity: '1', filter: 'blur(60px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'tropic-gradient': 'linear-gradient(135deg, #FF4D6D 0%, #FF8A3D 25%, #FFCE3A 50%, #2CE6D7 75%, #A86BFF 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #FF4ECD 0%, #FF4D6D 30%, #FF8A3D 60%, #FFCE3A 100%)',
        'aqua-gradient': 'linear-gradient(135deg, #2CE6D7 0%, #1AA7FF 50%, #A86BFF 100%)',
        'ink-radial': 'radial-gradient(ellipse at top, #1c1030 0%, #05030a 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
