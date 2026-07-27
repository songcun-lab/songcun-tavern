/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // 宣纸色系
        xuan: {
          50:  '#fdf8f0',
          100: '#f9f0e0',
          200: '#f0dfc0',
          300: '#e4c898',
          400: '#d4a96a',
          500: '#c08040',
          600: '#a06030',
          700: '#7a4520',
          800: '#5a3015',
          900: '#3a1e0a',
        },
        // 墨色系
        ink: {
          50:  '#f5f5f0',
          100: '#e8e8e0',
          200: '#d0d0c8',
          300: '#a8a8a0',
          400: '#787870',
          500: '#505048',
          600: '#383830',
          700: '#282820',
          800: '#1a1a14',
          900: '#0e0e0a',
        },
        // 琥珀色
        amber: {
          tavern: '#c8922a',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"PingFang SC"',
          '"Hiragino Sans GB"',
          '"Microsoft YaHei"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: [
          '"Noto Serif SC"',
          '"Source Han Serif SC"',
          'Georgia',
          'serif',
        ],
        mono: [
          '"JetBrains Mono"',
          '"Fira Code"',
          '"Cascadia Code"',
          'Consolas',
          'monospace',
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.ink.700'),
            lineHeight: '1.9',
            letterSpacing: '0.02em',
            'h1, h2, h3, h4': {
              fontWeight: '600',
              letterSpacing: '-0.01em',
            },
            a: {
              color: theme('colors.xuan.600'),
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            blockquote: {
              borderLeftColor: theme('colors.xuan.300'),
              color: theme('colors.ink.500'),
              fontStyle: 'normal',
            },
            code: {
              backgroundColor: theme('colors.xuan.100'),
              borderRadius: '0.25rem',
              padding: '0.1em 0.3em',
              fontSize: '0.875em',
            },
          },
        },
        invert: {
          css: {
            color: theme('colors.xuan.100'),
            a: {
              color: theme('colors.xuan.300'),
            },
            blockquote: {
              borderLeftColor: theme('colors.xuan.600'),
              color: theme('colors.xuan.300'),
            },
            code: {
              backgroundColor: theme('colors.ink.700'),
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
