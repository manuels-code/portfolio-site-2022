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
      backgroundImage: {
        "hero-image":
          "url('https://preview.colorlib.com/theme/knuford/images/xbg_1.jpg.pagespeed.ic.LOd_TK0d0a.webp')",
      },
      colors: {
        "app-base-1": "#0779e4",
        "app-base-2": "#57abfa",
        "app-base-3": "#89c4fb",
        "app-text-1": "#000000cc",
        "app-text-2": "#3b3b3b",
        "app-text-2": "#a6a6a6",
        "app-bg-1": "#f8f8f8",
      },
    },
  },
  plugins: [],
};
