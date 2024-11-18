/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.{html,ts}", // Adjust the path according to your app structure
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    extend: {
     
      fontFamily: {
        "Playwrite": ['"Playwrite GB S", cursive;']
    },
    spacing: {
      '5px': '5px',
    },
    animation: {
      'slide-left-right': 'slideLeftRight 5s ease-out forwards',
    },
    keyframes: {
      slideLeftRight: {
        '0%': {
          transform: 'translateX(-100%)', // Start from left side, off-screen
          opacity: '0',
        },
        '100%': {
          transform: 'translateX(0)', // Move to normal position
          opacity: '1',
        },
      },
    },
  
  },
    
    },
  
  plugins: [],
}
