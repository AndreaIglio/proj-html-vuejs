let app = new Vue({
  el: "#root",
  data: {
    jumbotronCounter: 0,
    testimonialCounter: 0,
    counter: 0,
    jumbotron: [
      {
        title: "./assets/img/jumbotron/h3-rev-img-1.png",
        pizza: "./assets/img/jumbotron/h3-rev-img-2.png",
      },
      {
        title: "./assets/img/jumbotron/h3-rev-img-3.png",
        pizza: "./assets/img/jumbotron/h3-rev-img-4.png",
      },
      {
        title: "./assets/img/jumbotron/h3-rev-img-5.png",
        pizza: "./assets/img/jumbotron/h3-rev-img-6.png",
      },
    ],
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
      {
        description: "WE LOVE UNABOMBER",
        journal: "WASHINGTON POST 1995",
      },
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
    team_low: [
      {
        src: "./assets/img/team_low/a.jpg",
        name: "Marcolino",
        job: "Swagger",
      },
      {
        src: "./assets/img/team_low/b.jpg",
        name: "Paolina",
        job: "Instagrammer",
      },
      {
        src: "./assets/img/team_low/c.jpg",
        name: "Eva",
        job: "Laundrier",
      },
      {
        src: "./assets/img/team_low/d.jpg",
        name: "Stephen",
        job: "Artist",
      },
    ],
    partners: [
      "./assets/img/partners/h1-clients-img-1.png",
      "./assets/img/partners/h1-clients-img-2.png",
      "./assets/img/partners/h1-clients-img-3.png",
      "./assets/img/partners/h1-clients-img-4.png",
      "./assets/img/partners/h1-clients-img-5.png",
    ],
    products: [
      {
        src: "./assets/img/products/h3-product-img-1a-100x100.png",
        title: "BISMARCK",
        price: "$30.00",
      },
      {
        src: "./assets/img/products/h3-product-img-2a-150x150.png",
        title: "FIORI DI ZUCCA",
        price: "$7.00 - $50.00",
      },
      {
        src: "./assets/img/products/h3-product-img-3a-150x150.png",
        title: "VALDOSTANA",
        price: "$55.00",
        sold: true,
      },
      {
        src: "./assets/img/products/h3-product-img-4a-150x150.png",
        title: "PIZZA TARTUFATA",
        price: "$45.00",
      },
      {
        src: "./assets/img/products/h3-product-img-5a-150x150.png",
        title: "FRANCESCANA",
        price: "$25.00",
      },
      {
        src: "./assets/img/products/h3-product-img-6a-100x100.png",
        title: "CAMPAGNOLA",
        price: "$30.00",
      },
    ],
    deals: [
      {
        day: "02",
        month: "NOV",
        title: "TRADITIONAL NEAPOLITAN PIES IN KYOTO PIZZA MERCATO",
        location: "204 E. Pizzetta Tommaso",
      },
      {
        day: "03",
        month: "NOV",
        title: "TERRAZZA PATIO DINING SPACE OPENING THIS WEEKEND",
        location: "204 E. Pizzetta Tommaso",
      },
      {
        day: "05",
        month: "NOV",
        title: "SIENNA PRIVATE DINING ROOM WITH STEPHANE BRUNN",
        location: "204 E. Pizzetta Tommaso",
      },
    ],
    restaurants: [
      {
        street: "1614 E. Bell Rd #104,",
        city: "Salerno, AZ 85022",
        phone: "(602)867-1010",
      },
      {
        street: "1614 E. Bell Rd #104,",
        city: "Salerno, AZ 85022",
        phone: "(602)867-1010",
      },
      {
        street: "1614 E. Bell Rd #104,",
        city: "Salerno, AZ 85022",
        phone: "(602)867-1010",
      },
      {
        street: "1614 E. Bell Rd #104,",
        city: "Salerno, AZ 85022",
        phone: "(602)867-1010",
      },
    ],
    working_hours: [
      {
        day: "MONDAY",
        time: "Kitchen Closed",
      },
      {
        day: "TUESDAY UNTIL FRIDAY",
        time: "09:00 - 22:00",
      },
      {
        day: "SATURDAY",
        time: "Saturday 11am to midnight",
      },
      {
        day: "SUNDAY",
        time: "09:00 - 22:00",
      },
    ],
  },
  methods: {
    // header
    nextImg: function () {
      this.jumbotronCounter++;
      if (this.jumbotronCounter >= this.jumbotron.length) {
        this.jumbotronCounter = 0;
      }
    },
    prevImg: function () {
      this.jumbotronCounter--;
      if (this.jumbotronCounter < 0) {
        this.jumbotronCounter = this.jumbotron.length - 1;
      }
    },

    // /header

    // testimonials

    nextTestimonial: function () {
      this.testimonialCounter++;
      if (this.testimonialCounter >= this.testimonials.length) {
        this.testimonialCounter = 0;
      }
    },

    prevTestimonial: function () {
      this.testimonialCounter--;
      if (this.testimonialCounter < 0) {
        this.testimonialCounter = this.testimonials.length - 1;
      }
    },

    // /testimonials
  },
  mounted() {},
});