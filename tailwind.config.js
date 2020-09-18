const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: ['**/*.js'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bmc-orange': '#ef874f',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
};
