/* eslint-disable import/no-extraneous-dependencies, sonarjs/no-duplicate-string */
const { teal, orange } = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        teal,
        orange,
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontWeight: theme('fontWeight.medium'),
            },
            blockquote: {
              borderColor: theme('colors.teal.600'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1, h2, h3, h4, a, strong, blockquote, code, thead, pre code, a code':
              {
                color: theme('colors.gray.100'),
              },
            '[class~="lead"], figure figcaption': {
              color: theme('colors.gray.400'),
            },
            blockquote: {
              borderColor: theme('colors.orange.400'),
            },
            pre: {
              backgroundColor: theme('colors.gray.900'),
            },
            ol: {
              'li::before': {
                color: theme('colors.orange.400'),
              },
            },
            ul: {
              'li::before': {
                backgroundColor: theme('colors.orange.400'),
              },
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
  ],
};
