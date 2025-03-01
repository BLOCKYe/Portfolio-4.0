/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "l-main": "#fafafa",
        "l-second": "#ababab",
        "d-main": "#0d0d0d",
        "d-second": "#121212",
        "d-third": "#212121",
        "c-main": "#facf87",
      },
      animation: {
        ping: "ping 1s 0.5s linear infinite",
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
