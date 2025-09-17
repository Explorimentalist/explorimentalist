import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // The Explorimentalist Color Palette
      colors: {
        // Base monochromatic colors
        white: '#FFFFFF',
        black: '#000000',
        
        // Extended gray scale
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        
        // The Explorimentalist Accent Colors
        accent: {
          orange: {
            light: '#FF6B47',
            DEFAULT: '#FF522A',
            dark: '#E6451F',
          },
          green: {
            light: '#45C785',
            DEFAULT: '#2BB673',
            dark: '#219A5E',
          },
          purple: {
            light: '#9D5BF5',
            DEFAULT: '#8642F4',
            dark: '#7135E0',
          },
        },
        
        // Glassmorphism utilities
        glass: {
          'white-10': 'rgba(255, 255, 255, 0.1)',
          'white-20': 'rgba(255, 255, 255, 0.2)',
          'white-80': 'rgba(255, 255, 255, 0.8)',
          'black-10': 'rgba(0, 0, 0, 0.1)',
          'black-50': 'rgba(0, 0, 0, 0.5)',
          'gray-10': 'rgba(115, 115, 115, 0.1)',
        },

        // ShadCN compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Brutalist Typography
      fontSize: {
        'display': '8rem',    // 128px - Hero headlines
        'massive': '6rem',     // 96px - Section headers  
        'huge': '4rem',        // 64px - Page titles
      },
      
      fontWeight: {
        'black': '900',
        'extrabold': '800',
      },
      
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
      },
      
      lineHeight: {
        'none': '1',
        'tight': '1.25',
      },

      // Glassmorphism Effects
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      
      backdropBrightness: {
        110: '1.1',
        125: '1.25',
      },
      
      backdropSaturate: {
        150: '1.5',
        200: '2',
      },

      // Enhanced Shadows for Glassmorphism
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-lg': '0 16px 64px rgba(0, 0, 0, 0.15)',
        'brutal': '8px 8px 0px rgba(0, 0, 0, 1)',
        'brutal-sm': '4px 4px 0px rgba(0, 0, 0, 1)',
      },

      // Border Radius (Minimal for brutalism, subtle for glass)
      borderRadius: {
        lg: "var(--radius)", // ShadCN compatibility
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        'glass': '12px', // Specific for glassmorphism elements
        'glass-lg': '16px',
      },

      // Custom Animations
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "glass-shimmer": {
          from: {
            "background-position": "200% 0",
          },
          to: {
            "background-position": "-200% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out",
        "glass-shimmer": "glass-shimmer 2s ease-in-out infinite",
      },

      // Typography Improvements
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },

      // Spacing Scale Extensions
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
      },

      // Z-index Scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Custom plugin for glassmorphism utilities
    function({ addUtilities }: any) {
      const glassmorphismUtilities = {
        '.glass-card': {
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(12px) saturate(1.5)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        },
        '.glass-nav': {
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        },
        '.glass-overlay': {
          background: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(8px)',
        },
        '.glass-button': {
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.brutalist-shadow': {
          boxShadow: '8px 8px 0px rgba(0, 0, 0, 1)',
        },
        '.brutalist-shadow-sm': {
          boxShadow: '4px 4px 0px rgba(0, 0, 0, 1)',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      }
      addUtilities(glassmorphismUtilities)
    },
    // Custom plugin for accent color variations
    function({ addUtilities, theme }: any) {
      const accentVariations = {
        '.accent-orange': {
          color: theme('colors.accent.orange.DEFAULT'),
        },
        '.accent-green': {
          color: theme('colors.accent.green.DEFAULT'),
        },
        '.accent-purple': {
          color: theme('colors.accent.purple.DEFAULT'),
        },
        '.bg-accent-orange': {
          backgroundColor: theme('colors.accent.orange.DEFAULT'),
        },
        '.bg-accent-green': {
          backgroundColor: theme('colors.accent.green.DEFAULT'),
        },
        '.bg-accent-purple': {
          backgroundColor: theme('colors.accent.purple.DEFAULT'),
        },
        '.border-accent-orange': {
          borderColor: theme('colors.accent.orange.DEFAULT'),
        },
        '.border-accent-green': {
          borderColor: theme('colors.accent.green.DEFAULT'),
        },
        '.border-accent-purple': {
          borderColor: theme('colors.accent.purple.DEFAULT'),
        },
      }
      addUtilities(accentVariations)
    },
  ],
};

export default config;