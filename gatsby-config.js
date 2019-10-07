module.exports = {
  siteMetadata: {
    footerText: "Powerby @komkrit",
    navbar: [
      { text: "Home", path: "/"},
      { text: "Bugatti", path: "/Bugatti" },
      { text: "Ferrari", path: "/Ferrari" },
      { text: "Lamborghini", path: "/Lamborghini" },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
  ],
}
