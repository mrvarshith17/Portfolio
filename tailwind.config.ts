import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(29, 78, 216, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(29, 78, 216, 0.8)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "bounce-in": {
          "0%": { opacity: "0", transform: "scale(0.3) translateY(20px)" },
          "50%": { opacity: "1" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "rotate-in": {
          "0%": { opacity: "0", transform: "rotate(-10deg) scale(0.9)" },
          "100%": { opacity: "1", transform: "rotate(0deg) scale(1)" },
        },
        // Profile Picture Animations
        "profile-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "25%": { transform: "translateY(-8px) rotate(1deg)" },
          "50%": { transform: "translateY(-15px) rotate(0deg)" },
          "75%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        "profile-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(29, 78, 216, 0.6), 0 0 40px rgba(147, 51, 234, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(29, 78, 216, 0.9), 0 0 80px rgba(147, 51, 234, 0.6)" },
        },
        "profile-spin": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        // Section Content Animations
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "flip-in-x": {
          "0%": { opacity: "0", transform: "rotateX(-10deg)" },
          "100%": { opacity: "1", transform: "rotateX(0deg)" },
        },
        "flip-in-y": {
          "0%": { opacity: "0", transform: "rotateY(-10deg)" },
          "100%": { opacity: "1", transform: "rotateY(0deg)" },
        },
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "swing-in": {
          "0%": { opacity: "0", transform: "rotateZ(-5deg) translateX(-20px)" },
          "50%": { transform: "rotateZ(2deg)" },
          "100%": { opacity: "1", transform: "rotateZ(0deg) translateX(0)" },
        },
        "bounce-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "50%": { transform: "translateY(-5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-5px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(5px)" },
        },
        "pulse-scale": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        // Navigation Button Click Animations
        "btn-click": {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
        "btn-ripple": {
          "0%": { opacity: "1", transform: "scale(0)" },
          "100%": { opacity: "0", transform: "scale(2.5)" },
        },
        "btn-glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(29, 78, 216, 0.5), inset 0 0 5px rgba(29, 78, 216, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(29, 78, 216, 0.8), inset 0 0 10px rgba(29, 78, 216, 0.6)" },
        },
        // Profile Picture Flip Animation (New)
        "flip-3d": {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
        "flip-toggle": {
          "0%": { opacity: "1", transform: "rotateY(0deg)" },
          "50%": { opacity: "0" },
          "100%": { opacity: "1", transform: "rotateY(180deg)" },
        },
        // Section Reveal Animations
        "slide-in-left-lg": {
          "0%": { opacity: "0", transform: "translateX(-100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right-lg": {
          "0%": { opacity: "0", transform: "translateX(100px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-top": {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "converge-to-center": {
          "0%": { opacity: "0", transform: "scale(0.8) translateY(30px)" },
          "50%": { opacity: "0.7", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "center-reveal": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "edge-inward": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "50%": { opacity: "0.6", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "radial-inward": {
          "0%": { opacity: "0", transform: "scale(0) rotate(0deg)" },
          "100%": { opacity: "1", transform: "scale(1) rotate(0deg)" },
        },
        // Aurora Background Animation
        "aurora": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        // Staggered Reveal (per-element)
        "stagger-1": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stagger-2": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "stagger-3": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // 3D Perspective Entrance
        "perspective-entrance": {
          "0%": { opacity: "0", transform: "perspective(1000px) rotateX(80deg) translateZ(-100px)" },
          "100%": { opacity: "1", transform: "perspective(1000px) rotateX(0) translateZ(0)" },
        },
        // Parallax Hero
        "parallax-slow": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(30px)" },
        },
        "parallax-fast": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-30px)" },
        },
        // Magnetic Button
        "magnetic": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(var(--mx, 0), var(--my, 0))" },
        },
        // Clip-Path Section Reveals
        "clip-reveal-left": {
          "0%": { clipPath: "inset(0 100% 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "clip-reveal-right": {
          "0%": { clipPath: "inset(0 0 0 100%)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "clip-reveal-top": {
          "0%": { clipPath: "inset(100% 0 0 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        "clip-reveal-bottom": {
          "0%": { clipPath: "inset(0 0 100% 0)" },
          "100%": { clipPath: "inset(0 0 0 0)" },
        },
        // Grid to Focus (Project Cards)
        "grid-to-focus": {
          "0%": { opacity: "0.4", transform: "scale(0.8) blur(5px)" },
          "100%": { opacity: "1", transform: "scale(1) blur(0)" },
        },
        // Section Exit Animations
        "exit-fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "exit-fade-out-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-30px)" },
        },
        "exit-fade-out-down": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(30px)" },
        },
        "exit-fade-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-50px)" },
        },
        "exit-fade-out-right": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(50px)" },
        },
        "exit-scale-down": {
          "0%": { opacity: "1", transform: "scale(1)" },
          "100%": { opacity: "0", transform: "scale(0.8)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        glow: "glow 2s ease-in-out infinite",
        "gradient-shift": "gradient-shift 3s ease infinite",
        shimmer: "shimmer 2s infinite",
        "bounce-in": "bounce-in 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "rotate-in": "rotate-in 0.6s ease-out",
        // Profile Picture Animations
        "profile-float": "profile-float 4s ease-in-out infinite",
        "profile-glow": "profile-glow 3s ease-in-out infinite",
        "profile-spin": "profile-spin 20s linear infinite",
        // Section Content Animations
        "slide-up": "slide-up 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "flip-in-x": "flip-in-x 0.7s ease-out",
        "flip-in-y": "flip-in-y 0.7s ease-out",
        "zoom-in": "zoom-in 0.5s ease-out",
        "swing-in": "swing-in 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "bounce-up": "bounce-up 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "shake": "shake 0.6s ease-in-out",
        "pulse-scale": "pulse-scale 2s ease-in-out infinite",
        // Navigation Button Click Animations
        "btn-click": "btn-click 0.3s ease-in-out",
        "btn-ripple": "btn-ripple 0.6s ease-out",
        "btn-glow-pulse": "btn-glow-pulse 1.5s ease-in-out infinite",
        // Profile Picture Flip Animations
        "flip-3d": "flip-3d 1s ease-in-out",
        "flip-toggle": "flip-toggle 1s ease-in-out",
        // Section Reveal Animations
        "slide-in-left-lg": "slide-in-left-lg 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-in-right-lg": "slide-in-right-lg 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "slide-in-top": "slide-in-top 0.8s ease-out",
        "converge-to-center": "converge-to-center 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "center-reveal": "center-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "edge-inward": "edge-inward 0.8s ease-out",
        "radial-inward": "radial-inward 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
        // Advanced Animations
        "aurora": "aurora 8s ease infinite",
        "stagger-1": "stagger-1 0.6s ease-out 0.1s both",
        "stagger-2": "stagger-2 0.6s ease-out 0.2s both",
        "stagger-3": "stagger-3 0.6s ease-out 0.3s both",
        "perspective-entrance": "perspective-entrance 1s ease-out",
        "parallax-slow": "parallax-slow 6s ease-in-out infinite",
        "parallax-fast": "parallax-fast 4s ease-in-out infinite",
        "magnetic": "magnetic 0.4s ease-out",
        "clip-reveal-left": "clip-reveal-left 0.8s ease-out",
        "clip-reveal-right": "clip-reveal-right 0.8s ease-out",
        "clip-reveal-top": "clip-reveal-top 0.8s ease-out",
        "clip-reveal-bottom": "clip-reveal-bottom 0.8s ease-out",
        "grid-to-focus": "grid-to-focus 0.6s ease-out",
        // Exit Animations
        "exit-fade-out": "exit-fade-out 0.5s ease-in forwards",
        "exit-fade-out-up": "exit-fade-out-up 0.5s ease-in forwards",
        "exit-fade-out-down": "exit-fade-out-down 0.5s ease-in forwards",
        "exit-fade-out-left": "exit-fade-out-left 0.5s ease-in forwards",
        "exit-fade-out-right": "exit-fade-out-right 0.5s ease-in forwards",
        "exit-scale-down": "exit-scale-down 0.5s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
