// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'space-blue': '#1A2A45', // Deep space blue
        'space-indigo': '#2F3B63', // Dark indigo for space feel
        'coffee-brown': '#4B3621', // Rich coffee brown
        'coffee-cream': '#D9C6B7', // Light cream color
        'coffee-dark': '#3E2C2A', // Dark coffee for accents and text
        'golden-brew': '#F8C471', // Warm golden accents (like brewed coffee)
        'dark-black': '#0A0A0A', // Dark black for void of space
        'star-light': '#F5F5F5', // Soft star-like white color
      },
      backgroundImage: {
        'space-pattern': "url('https://www.transparenttextures.com/patterns/stardust.png')",
        'moon-land':"url('https://static.vecteezy.com/system/resources/previews/039/074/332/non_2x/ai-generated-a-lunar-landscape-with-the-moon-s-barren-surface-and-distant-earthrise-free-photo.jpeg')"
      },
    },
  },
  plugins: [],
}
