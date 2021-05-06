module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './components/**/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#06040f',
      white: '#f0f9fb',
      gray: {
        white: '#e1eaef',
        light: '#b2b8be',
        dark: '#4e4c4f',
        black: '#1c1a1f',
      },
      blue: {
        white: '#b1dbe9',
        light: '#6ca6d4',
        DEFAULT: '#397ac2',
        dark: '#1f346c',
        black: '#0f1633',
      },
      purple: {
        white: '#e6a8ca',
        light: '#d776c6',
        DEFAULT: '#8130a4',
        dark: '#582274',
        black: '#2a164b',
      },
      red: {
        white: '#e4af9f',
        light: '#ce5a50',
        DEFAULT: '#942a2a',
        dark: '#541821',
        black: '#270b18',
      },
      orange: {
        white: '#deb789',
        light: '#ce8050',
        DEFAULT: '#a64f2f',
      },
      yellow: {
        white: '#dce195',
        light: '#c9c13e',
        DEFAULT: '#9a822b',
        dark: '#5d451b',
        black: '#392410',
      },
      green: {
        white: '#b1e8b8',
        light: '#81da98',
        DEFAULT: '#36b96c',
        dark: '#27836a',
        black: '#143545',
      },
    },
    extend: {
      borderWidth: {
        '12': '12px',
      },

      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
