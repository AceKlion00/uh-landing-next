module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      primary: {
        DEFAULT: '#07A39D',
        50: '#E5F6F6',
        75: '#74D6D2',
        100: '#07A39D',
        200: '#009993',
        300: '#008F89',
        400: '#00857F',
      },
      secondary: {
        DEFAULT: '#0A2540',
        50: '#D2E3F3',
        100: '#0A2540',
      },
      success: {
        DEFAULT: '#74B06F',
        50: '#E8FCE6',
        75: '#BFE3BC',
        100: '#74B06F',
        200: '#63965F',
      },
      warning: {
        DEFAULT: '#F18F01',
        50: '#FFF5E5',
        75: '#FFCB80',
        100: '#F18F01',
        200: '#E78500',
        300: '#DD7B00',
        400: '#D37100',
      },
      danger: {
        DEFAULT: '#E54D4D',
        50: '#FFEDED',
        75: '#FFA3A3',
        100: '#E54D4D',
        200: '#CC4545',
      },
      light: {
        DEFAULT: '#D6D6D6',
        50: '#F8F8F8',
        75: '#EAEAEA',
        100: '#D6D6D6',
        200: '#BEBEBE',
        300: '#989898',
        400: '#6D6D6D',
        500: '#2C2C2C',
      },
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.15rem',
      xl: '1.7rem',
      '2xl': '2rem',
      '3xl': '2.25rem',
      '4xl': '3.25rem',
      '5xl': '4.25rem',
      '6xl': '5.25rem',
      '7xl': '6.25rem',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
