/*
  Bloomin' Brass — store settings and product list.

  To add a piece: copy one of the product blocks below, give it a unique
  `id` (lowercase, dashes, no spaces), and drop its photo in images/products/.

  buyUrl: paste a checkout link here (e.g. a Stripe Payment Link or PayPal
          button link). Leave it "" and the Buy button becomes
          "Ask about this piece", which sends shoppers to the contact page.
  sold:   set to true to keep a piece on the site marked "Sold".
  featured: true shows it on the home page (the first three are used).
*/

const SITE = {
  // Where contact-form messages are sent. Leave "" until it's decided.
  email: "",
  instagram: "",
  facebook: "",
};

const PRODUCTS = [
  {
    id: "brass-blue-sea-glass",
    name: "Brass & Blue Sea Glass Earrings",
    price: 30,
    image: "images/products/blue-sea-glass.jpg",
    summary: "Reclaimed bullet jackets paired with deep blue sea glass.",
    description:
      "Handcrafted earrings made from reclaimed bullet full metal jackets, " +
      "each twisted and shaped by hand and finished with deep blue sea glass. " +
      "Every piece is one of a kind.",
    beads: "Blue sea glass",
    earWire: "Ear wire",
    featured: true,
    sold: false,
    buyUrl: "",
  },
  {
    id: "brass-poly-blue-glass",
    name: "Brass, Poly & Blue Glass Earrings",
    price: 30,
    image: "images/products/poly-blue-glass.jpg",
    summary: "Eye-catching, with a warm golden finish.",
    description:
      "Handcrafted earrings with a warm golden finish. Flattened reclaimed " +
      "brass frames an iridescent poly shell bead, with pale blue glass below.",
    beads: "Iridescent poly shell, blue glass",
    earWire: "Ear wire",
    featured: true,
    sold: false,
    buyUrl: "",
  },
  {
    id: "stacked-black-turquoise",
    name: "Stacked Black & Turquoise Earrings",
    price: 30,
    image: "images/products/black-turquoise.jpg",
    summary: "Rustic yet refined — pairs beautifully with any outfit.",
    description:
      "Layered earrings featuring black and turquoise glass beads beneath " +
      "curled, darkened reclaimed brass. Rustic yet refined — pairs " +
      "beautifully with any outfit.",
    beads: "Black & turquoise glass",
    earWire: "Ear wire",
    featured: true,
    sold: false,
    buyUrl: "",
  },
];
