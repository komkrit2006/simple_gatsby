exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/Bugatti",
    component: require.resolve("./src/components/DetailCar.js"),
    context: {
      img: "Bugatti",
      description:
        "BUGATTI has always been defined by the spirit of its founder, Ettore Bugatti. He started the incomparable journey of the BUGATTI brand in1909 in Molsheim. In 2019 we are looking back at our legacy and proudlycelebrating our rich, unparalleled 110 year long history full ofpassion, craftsmanship, dynamics and elegance. The BUGATTI CENTODIECI isone of the inspiring milestones of our celebrations:",
    },
  })
  createPage({
    path: "/Ferrari",
    component: require.resolve("./src/components/DetailCar.js"),
    context: {
      img: "Ferrari",
      description:
        "This was a day to remember for the Ferrari Driver Academy and Robert Shwartzman as the Russian driver’s second place finish in the first F3 race of the weekend.",
    },
  })
  createPage({
    path: "/Lamborghini",
    component: require.resolve("./src/components/DetailCar.js"),
    context: {
      img: "Lamborghini",
      description:
        "Founded in 1963, Automobili Lamborghini is headquartered in Sant’Agata Bolognese, in Northern Italy. The Lamborghini Huracán, which made its world debut at the Geneva Motor Show in 2014, in the Huracán Spyder and rear wheel-drive version released in 2015, are the successors to the iconic Gallardo. With their innovative technology and exceptional performance, they redefine the driving experience for luxury super sports cars. The Coupé and Roadster versions of the Aventador and the Aventador",
    },
  })
}
