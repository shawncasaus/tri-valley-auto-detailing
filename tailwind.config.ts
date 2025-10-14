import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom brand colors from your CSS variables
        primary: {
          DEFAULT: '#1c3d2b',
          dark: '#003314',
        },
        secondary: {
          DEFAULT: '#daaa39',
        },
        background: '#0a0a0a',
        foreground: '#ededed',
        offwhite: '#f9f0df',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        mono: ['monospace'],
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out both',
        'neon-glow': 'neonTextGlow 2s infinite ease-in-out',
        'glow-hue': 'glowHue 2s infinite ease-in-out',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        neonTextGlow: {
          '0%': {
            textShadow: '0 0 4px rgba(255, 255, 102, 0.4), 0 0 8px rgba(255, 255, 102, 0.5), 0 0 12px rgba(255, 255, 102, 0.6)',
          },
          '50%': {
            textShadow: '0 0 6px rgba(255, 255, 150, 0.6), 0 0 12px rgba(255, 255, 150, 0.7), 0 0 20px rgba(255, 255, 180, 0.8)',
          },
          '100%': {
            textShadow: '0 0 4px rgba(255, 255, 102, 0.4), 0 0 8px rgba(255, 255, 102, 0.5), 0 0 12px rgba(255, 255, 102, 0.6)',
          },
        },
        glowHue: {
          '0%': {
            filter: 'hue-rotate(0deg)',
            boxShadow: '0 0 8px 2px rgba(255, 255, 102, 0.75)',
          },
          '50%': {
            filter: 'hue-rotate(60deg)',
            boxShadow: '0 0 12px 3px rgba(255, 255, 150, 0.85)',
          },
          '100%': {
            filter: 'hue-rotate(0deg)',
            boxShadow: '0 0 8px 2px rgba(255, 255, 102, 0.75)',
          },
        },
      },
      boxShadow: {
        'glow-primary': '0 0 10px 2px rgba(255, 255, 255, 0.5)',
        'glow-secondary': '0 0 8px 2px rgba(255, 255, 102, 0.75)',
        'glow-focus': '0 0 0 1.2px rgba(255, 221, 0, 0.4)',
      },
      textShadow: {
        'glow': '0 0 5px #fffbe6, 0 0 10px #1c3d2b, 0 0 15px #1c3d2b',
      },
    },
  },
  plugins: [
    // Custom plugin for text-shadow utility
    function({ addUtilities }: any) {
      const newUtilities = {
        '.text-glow-animated': {
          color: '#fffbe6',
          textShadow: '0 0 5px #fffbe6, 0 0 10px #1c3d2b, 0 0 15px #1c3d2b',
        },
        '.border-glow-animated': {
          border: '1.8px solid #ffeb3b',
          boxShadow: '0 0 8px 2px rgba(255, 255, 102, 0.75)',
          outline: 'none',
          animation: 'glowHue 2s infinite ease-in-out',
        },
        '.btn-primary': {
          backgroundColor: '#1c3d2b',
          color: 'white',
          border: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '1rem',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        },
        '.btn-primary:hover': {
          backgroundColor: '#003314',
          boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
          outline: 'none',
        },
        '.btn-primary:focus': {
          backgroundColor: '#003314',
          boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.5)',
          outline: 'none',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}

export default config
