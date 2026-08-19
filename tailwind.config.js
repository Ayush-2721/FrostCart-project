/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        frost: '#1677FF',
        navy: '#102A43',
        ice: '#EAF4FF',
        ink: '#17212B',
        muted: '#5B6775',
        line: '#D9E2EC',
        success: '#18A66A',
        danger: '#D64545',
      },
      boxShadow: {
        soft: '0 16px 40px rgba(16, 42, 67, 0.08)',
      },
    },
  },
  plugins: [],
};
