/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "l-main": "#e2e3e5",
        "l-second": "#999a9d",
        "d-main": "#090909",
        "d-second": "#0f1011",
        "d-third": "#222328",
        "c-main": "#facf87",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      {
        addComponents({
          ".fc": {
            display: "flex",
            gap: theme("padding.2"),
            alignItems: "center",
          },
          ".text-muted": {
            color: theme("colors.l-second"),
          },
          ".text-default": {
            color: theme("colors.l-main"),
          },
          ".divider": {
            width: "100%",
            height: "1px",
            backgroundColor: theme("colors.d-third"),
            marginTop: theme("margin.9"),
            marginBottom: theme("margin.9"),
          },
          ".divider-2": {
            width: "100%",
            height: "1px",
            backgroundColor: theme("colors.d-third"),
            marginTop: theme("margin.3"),
            marginBottom: theme("margin.3"),
          },
        });
      }
    },
  ],
};
