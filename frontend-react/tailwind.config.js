/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1e40af',

          secondary: '#22c55e',

          accent: '#d946ef',

          neutral: '#9ca3af',

          'base-100': '#f5f5f4',

          info: '#22d3ee',

          success: '#3b82f6',

          warning: '#dc2626',

          error: '#facc15',
        },
      },
    ],
  },
  // eslint-disable-next-line no-undef
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
