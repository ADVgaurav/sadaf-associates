import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "hsl(var(--canvas-default))",
        surface: "hsl(var(--surface-default))",
        "surface-raised": "hsl(var(--surface-raised))",
        "surface-glass": "hsl(var(--surface-glass))",
        foreground: "hsl(var(--text-primary))",
        muted: "hsl(var(--text-muted))",
        accent: "hsl(var(--accent-default))",
        border: "hsl(var(--border-default))",
        focus: "hsl(var(--focus-ring))",
        success: "hsl(var(--status-success))",
        warning: "hsl(var(--status-warning))",
        danger: "hsl(var(--status-error))",
      },
      fontFamily: {
        display: ["var(--font-cinzel)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: { "2xl": "var(--radius-lg)", xl: "var(--radius-md)" },
      boxShadow: { ambient: "var(--shadow-ambient)", raised: "var(--shadow-raised)" },
      maxWidth: { readable: "var(--content-readable)", content: "var(--container-content)", wide: "var(--container-wide)" },
    },
  },
  plugins: [],
};

export default config;
