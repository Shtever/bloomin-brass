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
    id: "copper-blue-sea-glass",
    name: "Copper & Blue Sea Glass Earrings",
    price: 30,
    image: "images/products/blue-sea-glass.jpg",
    description: "Handcrafted earrings. Made from reclaimed bullet full metal jackets — each piece is one of a kind.",
    accents: "Blue sea glass",
    earWire: "Ear wire",
    featured: true,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-poly-blue-glass",
    name: "Copper, Poly & Blue Glass Earrings",
    price: 30,
    image: "images/products/poly-blue-glass.jpg",
    description: "Handcrafted earrings. Eye-catching with a warm golden finish.",
    accents: "Poly & blue glass beads",
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
    description: "Layered earrings featuring black and turquoise glass beads. Rustic yet refined — pairs beautifully with any outfit.",
    accents: "Black & turquoise glass beads",
    earWire: "Ear wire",
    featured: true,
    sold: false,
    buyUrl: "",
  },
  {
    id: "floral-lock-key",
    name: "Floral Earrings with Lock & Key",
    price: 30,
    image: "images/products/floral-lock-key.jpg",
    description: "Delicate variegated turquoise floral motif earrings with sparkly lock and key charms.",
    accents: "Variegated turquoise, lock & key charms",
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-blue-gold-talons",
    name: "Copper Blue & Gold Beads & Talons",
    price: 30,
    image: "images/products/blue-gold-talons.jpg",
    description: "Bold copper earrings with a raw, artisan influence and long dark talons. A striking statement piece.",
    accents: "Blue & gold beads, dark talons",
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-turquoise-accent",
    name: "Copper & Turquoise Accent Earrings",
    price: 30,
    image: "images/products/turquoise-accent.jpg",
    description: "Handmade copper and turquoise earrings combine rich warm metal tones with earthy stone accents.",
    accents: "Turquoise",
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-wings-turquoise",
    name: "Copper Wings & Turquoise Earrings",
    price: 30,
    image: "images/products/wings-turquoise.jpg",
    description: "Handcrafted earrings featuring turquoise accents topping bright copper pieces.",
    accents: "Turquoise",
    // The old site listed this as "Ear WiresBlue". Confirm whether the wires are blue.
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-navy-blue-drop",
    name: "Copper & Navy Blue Drop Earrings",
    price: 30,
    image: "images/products/navy-blue-drop.jpg",
    description: "Bold and earthy. Navy blue disc beads with gold accents. Warm and earthy.",
    accents: "Navy blue disc beads, gold accents",
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-lavender-glitter",
    name: "Copper & Lavender Glitter Earrings",
    price: 30,
    image: "images/products/lavender-glitter.jpg",
    description: "Distressed charm earrings with sparkly lavender glitter beads. Playful and eye-catching.",
    accents: "Lavender glitter beads",
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
  {
    id: "copper-floral-spiral",
    name: "Copper Floral Spiral Earrings",
    price: 30,
    image: "images/products/floral-spiral.jpg",
    description: "Bright copper blown-out full metal jackets softened by golden spirals. Sustainably sourced.",
    accents: "Golden spirals",
    earWire: "Ear wire",
    featured: false,
    sold: false,
    buyUrl: "",
  },
];
