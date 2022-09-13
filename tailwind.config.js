/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
        "primary": "#84cc16",
        
        "secondary": "#4d7c0f",
        
        "accent": "#facc15",
        
        "neutral": "#3D4451",
        
        "base-100": "#FFFFFF",
        
        "info": "#3ABFF8",
        
        "success": "#36D399",
        
        "warning": "#FBBD23",
        
        "error": "#F87272",
        },
      },
    ],
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
