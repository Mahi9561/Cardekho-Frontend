const navMenu = [
  {
    id: "new-cars",
    label: "NEW CARS",
    route: "/new-cars",
    children: [
      {
        label: "Popular Cars",
        route: "/new-cars/popular",
      },
      {
        label: "Upcoming Cars",
        route: "/new-cars/upcoming",
      },
      {
        label: "Electric Cars",
        route: "/new-cars/electric",
      },
    ],
  },
  {
    id: "used-cars",
    label: "USED CARS",
    route: "/used-cars",
    children: [
      {
        label: "Buy Used Cars",
        route: "/used-cars/buy",
      },
      {
        label: "Sell Used Cars",
        route: "/used-cars/sell",
      },
    ],
  },
  {
    id: "news",
    label: "NEWS & REVIEWS",
    route: "/news",
    children: [
      {
        label: "Car News",
        route: "/news/cars",
      },
      {
        label: "Expert Reviews",
        route: "/reviews/expert",
      },
    ],
  },
  {
    id: "videos",
    label: "VIDEOS",
    route: "/videos",
    children: [],
  },
];

export default navMenu;
