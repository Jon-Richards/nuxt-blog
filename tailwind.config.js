module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        grey: {
          50: '#aaa',
          100: '#999',
          200: '#888',
          300: '#777',
          400: '#666',
          500: '#555',
          600: '#444',
          700: '#333',
          800: '#222',
          900: '#111'
        }
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
