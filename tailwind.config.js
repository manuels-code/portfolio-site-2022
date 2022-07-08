module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px", "20px"],
        base: ["16px", "24px"],
        lg: ["20px", "28px"],
        xl: ["24px", "32px"],
      },
      colors: {
        "app-base-1": "#0779e4",
        "app-base-2": "#57abfa",
        "app-base-3": "#89c4fb",
        "app-text-1": "#000000cc",
        "app-text-2": "#3b3b3b",
        "app-text-2": "#a6a6a6",
      },
    },
  },
  plugins: [],
};
