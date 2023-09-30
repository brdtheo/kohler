/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "smoke": "#f2f3f5",
        "active": "#5865f2",
        "active-extra": "#23a559",
        "server-browser": "#1e1f22",
        "server-browser-divider": "#35363c",
        "server-browser-icon": "#dbdee1",
        "server-sidebar": "#2b2d31",
        "server-chat": "#313338",
        input: "#383a40",
        "input-icon": "#b5bac1",
      },
    },
  },
  plugins: [],
};
