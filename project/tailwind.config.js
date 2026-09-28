/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      // Colores semánticos: cada rol tiene valor claro y oscuro (definidos en src/index.css).
      // Así toda la interfaz sigue la apariencia del sistema, como hace Apple.
      colors: {
        primary: {
          50: '#EAF3FF', 100: '#D3E6FF', 200: '#A9CFFF', 300: 'rgb(var(--primary-300) / <alpha-value>)', 400: 'rgb(var(--primary-400) / <alpha-value>)',
          500: '#1E8CFF', 600: '#0A6CF0', 700: '#0857D0', 800: '#0848CC', 900: '#06308F', 950: '#031A55',
        },
        accent: {
          50: '#E8FCFF', 100: '#C8F6FF', 200: '#94EBFF', 300: 'rgb(var(--accent-300) / <alpha-value>)', 400: 'rgb(var(--accent-400) / <alpha-value>)',
          500: '#22D3EE', 600: '#0A7C99', 700: '#0B6A82', 800: '#0B566A', 900: '#0A3F4F', 950: '#052733',
        },
        success: {
          50: '#EAFBF0', 100: '#CDF6DA', 200: '#A2EDBB', 300: 'rgb(var(--success-300) / <alpha-value>)', 400: 'rgb(var(--success-400) / <alpha-value>)',
          500: '#2BBF50', 600: '#1E7F35', 700: '#1D6E31', 800: '#17552A', 900: '#113F20', 950: '#08240F',
        },
        warning: {
          50: '#FFF8EA', 100: '#FFEDC7', 200: '#FFDB94', 300: 'rgb(var(--warning-300) / <alpha-value>)', 400: 'rgb(var(--warning-400) / <alpha-value>)',
          500: '#FF9F0A', 600: '#C93400', 700: '#A32800', 800: '#7D1F00', 900: '#5C1700', 950: '#330C00',
        },
        error: {
          50: '#FFF0EF', 100: '#FFDAD8', 200: '#FFB8B4', 300: 'rgb(var(--error-300) / <alpha-value>)', 400: 'rgb(var(--error-400) / <alpha-value>)',
          500: '#FF453A', 600: '#D70015', 700: '#B80012', 800: '#8F000E', 900: '#67000A', 950: '#3A0006',
        },
        // Neutros: 950 = fondo, 900 = superficie elevada, 800 = relleno, 50-500 = texto
        ink: {
          50: 'rgb(var(--ink-50) / <alpha-value>)', 100: 'rgb(var(--ink-100) / <alpha-value>)', 200: 'rgb(var(--ink-200) / <alpha-value>)', 300: 'rgb(var(--ink-300) / <alpha-value>)', 400: 'rgb(var(--ink-400) / <alpha-value>)', 500: 'rgb(var(--ink-500) / <alpha-value>)', 600: 'rgb(var(--ink-600) / <alpha-value>)', 700: 'rgb(var(--ink-700) / <alpha-value>)', 800: 'rgb(var(--ink-800) / <alpha-value>)', 900: 'rgb(var(--ink-900) / <alpha-value>)', 950: 'rgb(var(--ink-950) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Text"', 'system-ui', '"Segoe UI"', 'Roboto', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', 'system-ui', '"Segoe UI"', 'sans-serif'],
        mono: ['"SF Mono"', 'ui-monospace', '"JetBrains Mono"', 'monospace'],
      },
      // Títulos: interlineado corto y tracking negativo (como SF Pro Display); el cuerpo no cambia
      fontSize: {
        xs: ['0.8125rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        sm: ['0.9375rem', { lineHeight: '1.45', letterSpacing: '-0.01em' }],
        base: ['1.0625rem', { lineHeight: '1.5', letterSpacing: '-0.014em' }],
        lg: ['1.1875rem', { lineHeight: '1.5', letterSpacing: '-0.016em' }],
        xl: ['1.3125rem', { lineHeight: '1.4', letterSpacing: '-0.019em' }],
        '2xl': ['1.625rem', { lineHeight: '1.25', letterSpacing: '-0.022em' }],
        '3xl': ['2rem', { lineHeight: '1.15', letterSpacing: '-0.025em' }],
        '4xl': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.027em' }],
        '5xl': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.029em' }],
        '6xl': ['4rem', { lineHeight: '1.03', letterSpacing: '-0.031em' }],
        '7xl': ['5rem', { lineHeight: '1.02', letterSpacing: '-0.033em' }],
      },
      // Radios: 10 px controles, 12 px iconos, 24 px teselas y tarjetas, 32 px paneles grandes
      borderRadius: {
        lg: '0.625rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        // Resplandor azul del botón principal y de las tarjetas al pasar el cursor
        glow: '0 0 0 1px rgb(56 160 255 / 0.55), 0 8px 32px -6px rgb(10 108 240 / 0.75), inset 0 1px 0 rgb(255 255 255 / 0.35)',
        'glow-sm': '0 0 24px -4px rgb(30 140 255 / 0.55)',
        'glow-card': '0 0 0 1px rgb(56 160 255 / 0.35), 0 16px 48px -16px rgb(10 108 240 / 0.55)',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.35s cubic-bezier(0.25, 0.1, 0.25, 1) both',
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) both',
        'fade-in-down': 'fadeInDown 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) both',
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.25, 0.1, 0.25, 1) both',
        'scale-in': 'scaleIn 0.22s cubic-bezier(0.25, 0.1, 0.25, 1) both',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeInUp: { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        fadeInDown: { '0%': { opacity: '0', transform: 'translateY(-8px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        slideInRight: { '0%': { opacity: '0', transform: 'translateX(12px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.97)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
        shimmer: { '0%': { backgroundPosition: '-1000px 0' }, '100%': { backgroundPosition: '1000px 0' } },
        float: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        gradient: { '0%, 100%': { backgroundPosition: '0% 50%' }, '50%': { backgroundPosition: '100% 50%' } },
      },
      backgroundImage: {
        'grid-light': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0v40M40 0v40' stroke='%2300000008' stroke-width='1'/%3E%3C/svg%3E\")",
        'grid-dark': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 0v40M40 0v40' stroke='%23ffffff08' stroke-width='1'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
