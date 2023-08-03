/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        caveat: ['var(--font-caveat)', 'cursive'],
      },
      animation: {
        'text-slide-2': 'text-slide-2 5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-3': 'text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-4': 'text-slide-4 10s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-5': 'text-slide-5 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-6': 'text-slide-6 15s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'text-slide-8': 'text-slide-8 20s cubic-bezier(0.83, 0, 0.17, 1) infinite',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'text-slide-2': {
          '0%, 40%': {
            transform: 'translateY(0%)',
          },
          '50%, 90%': {
            transform: 'translateY(-33.33%)',
          },
          '100%': {
            transform: 'translateY(-66.66%)',
          },
        },
        'text-slide-3': {
          '0%, 26.66%': {
            transform: 'translateY(0%)',
          },
          '33.33%, 60%': {
            transform: 'translateY(-25%)',
          },
          '66.66%, 93.33%': {
            transform: 'translateY(-50%)',
          },
          '100%': {
            transform: 'translateY(-75%)',
          },
        },
        'text-slide-4': {
          '0%, 20%': {
            transform: 'translateY(0%)',
          },
          '25%, 45%': {
            transform: 'translateY(-20%)',
          },
          '50%, 70%': {
            transform: 'translateY(-40%)',
          },
          '75%, 95%': {
            transform: 'translateY(-60%)',
          },
          '100%': {
            transform: 'translateY(-80%)',
          },
        },
        'text-slide-5': {
          '0%, 16%': {
            transform: 'translateY(0%)',
          },
          '20%, 36%': {
            transform: 'translateY(-16.66%)',
          },
          '40%, 56%': {
            transform: 'translateY(-33.33%)',
          },
          '60%, 76%': {
            transform: 'translateY(-50%)',
          },
          '80%, 96%': {
            transform: 'translateY(-66.66%)',
          },
          '100%': {
            transform: 'translateY(-83.33%)',
          },
        },
        'text-slide-6': {
          '0%, 13.33%': {
            transform: 'translateY(0%)',
          },
          '16.66%, 30%': {
            transform: 'translateY(-14.28%)',
          },
          '33.33%, 46.66%': {
            transform: 'translateY(-28.57%)',
          },
          '50%, 63.33%': {
            transform: 'translateY(-42.85%)',
          },
          '66.66%, 80%': {
            transform: 'translateY(-57.14%)',
          },
          '83.33%, 96.66%': {
            transform: 'translateY(-71.42%)',
          },
          '100%': {
            transform: 'translateY(-85.71%)',
          },
        },
        'text-slide-7': {
          '0%, 11.43%': {
            transform: 'translateY(0%)',
          },
          '14.28%, 25.71%': {
            transform: 'translateY(-12.5%)',
          },
          '28.57%, 40%': {
            transform: 'translateY(-25%)',
          },
          '42.85%, 54.28%': {
            transform: 'translateY(-37.5%)',
          },
          '57.14%, 68.57%': {
            transform: 'translateY(-50%)',
          },
          '71.42%, 82.85%': {
            transform: 'translateY(-62.5%)',
          },
          '85.71%, 97.14%': {
            transform: 'translateY(-75%)',
          },
          '100%': {
            transform: 'translateY(-87.5%)',
          },
        },
        'text-slide-8': {
          '0%, 10%': {
            transform: 'translateY(0%)',
          },
          '12.5%, 22.5%': {
            transform: 'translateY(-11.11%)',
          },
          '25%, 35%': {
            transform: 'translateY(-22.22%)',
          },
          '37.5%, 47.5%': {
            transform: 'translateY(-33.33%)',
          },
          '50%, 60%': {
            transform: 'translateY(-44.44%)',
          },
          '62.5%, 72.5%': {
            transform: 'translateY(-55.55%)',
          },
          '75%, 85%': {
            transform: 'translateY(-66.66%)',
          },
          '87.5%, 97.5%': {
            transform: 'translateY(-77.77%)',
          },
          '100%': {
            transform: 'translateY(-88.88%)',
          },
        },
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },        
      },        
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
