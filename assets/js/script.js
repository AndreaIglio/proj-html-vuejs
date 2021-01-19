let app = new Vue({
  el: "#root",
  data: {
    counter: 0,
    events: [
      "./assets/img/events/h3-img-1.jpg",
      "./assets/img/events/h3-img-2.jpg",
      "./assets/img/events/h3-img-3.jpg",
      "./assets/img/events/h3-img-4.jpg",
    ],
    testimonials: [
      {
        description:
          "FORGET THE TRENDY PIZZA SHOPS, THIS HIDDEN SPOT MAKES THE BEST NEW YORK-STYLE PIZZA SLICE IN NAPLES",
        journal: "WASHINGTON POST 2018",
      },
      {},
    ],
    specials: [
      {
        price: "$ 10",
        title: "COMBO PICCOLO",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui",
      },
      {
        price: "$ 20",
        title: "COMBO MEZZO",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui",
      },
      {
        price: "$ 30",
        title: "COMBO GRANDE",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesent ut aliquam dui",
      },
    ],
  },
  methods: {},
  mounted() {},
});