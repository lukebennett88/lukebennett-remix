const { teal, orange } = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
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
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
