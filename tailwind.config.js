/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#070a09',
          surface: '#0d1310',
          'surface-light': '#121c17',
          'surface-card': '#0f1714',
          border: 'rgba(16, 185, 129, 0.16)',
          'border-focus': 'rgba(16, 185, 129, 0.45)',
          green: '#10b981',
          neon: '#00ff66',
          'neon-dim': '#00cc52',
          text: '#e2e8f0',
          muted: '#8e9e96',
          dim: '#4a5b53'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'monospace']
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(16, 185, 129, 0.15)',
        'glow-md': '0 0 20px rgba(16, 185, 129, 0.25)',
        'glow-lg': '0 0 35px rgba(0, 255, 102, 0.2)',
        'glow-neon': '0 0 15px rgba(0, 255, 102, 0.35)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1.1s steps(2, start) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      }
    },
  },
  plugins: [],
}
