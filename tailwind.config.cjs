export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans:    ["Inter", "sans-serif"],
        heading: ["Outfit", "sans-serif"],
        accent:  ["Space Grotesk", "sans-serif"],
      },
      zIndex: { "-5": "-5" },
      colors: {
        background: "#02040a",
        primary: {
          DEFAULT: "#ff4d00",
          light:   "#ff8c00",
          dark:    "#e64500",
          start:   "#ff2200",
        },
        accent: "#ff4d00",
      },
      backgroundImage: {
        // Full red→orange gradient — use as bg-gradient-primary
        "gradient-primary": "linear-gradient(135deg, #ff2200 0%, #ff4d00 50%, #ff8c00 100%)",
        "gradient-dark":    "linear-gradient(180deg, rgba(2,4,10,0) 0%, #02040a 100%)",
        "gradient-glow":    "radial-gradient(circle, rgba(255,77,0,0.25) 0%, rgba(255,140,0,0.08) 50%, transparent 70%)",
      },
      animation: {
        first:              "moveVertical 30s ease infinite",
        second:             "moveInCircle 20s reverse infinite",
        third:              "moveInCircle 40s linear infinite",
        fourth:             "moveHorizontal 40s ease infinite",
        fifth:              "moveInCircle 20s ease infinite",
        "infinite-scroll":  "infinite-scroll 30s linear infinite",
        "gradient-shift":   "gradient-shift 4s ease infinite",
        "orb-float-1":      "orb-float-1 18s ease-in-out infinite",
        "orb-float-2":      "orb-float-2 22s ease-in-out infinite",
        "pulse-glow":       "pulse-glow 2s ease infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-100%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":       { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255,77,0,0)" },
          "50%":       { boxShadow: "0 0 24px 4px rgba(255,77,0,0.25)" },
        },
        "orb-float-1": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%":       { transform: "translate(80px,60px) scale(1.1)" },
          "66%":       { transform: "translate(-40px,100px) scale(0.9)" },
        },
        "orb-float-2": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "40%":       { transform: "translate(-100px,-60px) scale(1.15)" },
          "70%":       { transform: "translate(50px,-120px) scale(0.85)" },
        },
        moveHorizontal: {
          "0%":   { transform: "translateX(-50%) translateY(-10%)" },
          "50%":  { transform: "translateX(50%) translateY(10%)" },
          "100%": { transform: "translateX(-50%) translateY(-10%)" },
        },
        moveInCircle: {
          "0%":   { transform: "rotate(0deg)" },
          "50%":  { transform: "rotate(180deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        moveVertical: {
          "0%":   { transform: "translateY(-50%)" },
          "50%":  { transform: "translateY(50%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
