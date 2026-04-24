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
        // Paleta dorada — monocromía premium basada en el logo DC.
        gold: {
          50:  '#FBF3D6',   // cream muy claro
          100: '#F5E3A5',   // champagne claro
          200: '#EAD17E',
          300: '#E6C67A',   // soft
          400: '#D9B35C',
          500: '#C9A24B',   // color del logo · DEFAULT
          600: '#B28836',
          700: '#8F6E2A',   // deep
          800: '#5C4618',
          900: '#2E220C',   // bronce profundo
          DEFAULT: '#C9A24B',
          soft: '#E6C67A',
          deep: '#8F6E2A',
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
          '0%, 100%': { opacity: '0.55', filter: 'blur(40px)' },
          '50%': { opacity: '0.95', filter: 'blur(60px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        // Lingote de oro — de bronce profundo a champagne
        'gold-gradient': 'linear-gradient(135deg, #2E220C 0%, #5C4618 20%, #8F6E2A 40%, #C9A24B 60%, #E6C67A 80%, #FBF3D6 100%)',
        // Oro cálido — brillo dorado clásico
        'gold-warm': 'linear-gradient(135deg, #8F6E2A 0%, #C9A24B 40%, #E6C67A 75%, #F5E3A5 100%)',
        // Bronce profundo — acento dramático
        'gold-bronze': 'linear-gradient(135deg, #2E220C 0%, #5C4618 40%, #8F6E2A 80%, #B28836 100%)',
        // Oro radiante — destello
        'gold-shine': 'linear-gradient(90deg, transparent 0%, rgba(250, 227, 165, 0.25) 45%, rgba(255, 244, 214, 0.6) 50%, rgba(250, 227, 165, 0.25) 55%, transparent 100%)',

        'ink-radial': 'radial-gradient(ellipse at top, #1c1030 0%, #05030a 60%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
