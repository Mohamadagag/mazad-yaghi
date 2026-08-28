export type Product = {
  id: string;
  name: string;
  code: string;
  category: string;
  condition: string;
  estimate: string;
  currentBid: string;
  closing: string;
  image: string;
  accent: string;
  description: string;
  details: string[];
  specs: Array<[string, string]>;
  bidder: {
    name: string;
    amount: string;
    since: string;
    badge: string;
  };
};

export const products: Product[] = [
  {
    id: "sevrin-KA9307",
    name: "Severin Filter Coffee Maker",
    code: "KA9307",
    category: "Coffee Maker",
    condition: "New",
    estimate: "€80",
    currentBid: "$0",
    closing: "Today, 8:30 PM",
    image: "/products/sevrin-KA9307.png",
    accent: "#0f766e",
    description:
      "The Severin KA 9307 is a 1,000-watt drip coffee maker that includes two 1-liter thermal carafes to keep coffee hot without burning it. It brews up to 8 cups per pot and features a convenient drip-stop swivel filter alongside an automatic shut-off safety feature.",
    details: [
      "Power output: 1,000 Watts",
      "Capacity: 2 x 1.0 Liters (approx. 8 cups per jug)",
      "Dimensions: 24.0 x 22.0 x 35.5 cm",
      "Filter size: 1x4 paper filters",
    ],
    specs: [
      ["Lot", "1"],
      ["Included", "Full set"],
      // ["Missing", "something, 1,2,4,5"],
      ["Price in origin country", "€90"],
    ],
    bidder: {
      name: "Number 2.",
      amount: "$9",
      since: "Leading for 6 minutes",
      badge: "Verified collector",
    },
  },
  {
    id: "Ice-Cream-Maker",
    name: "Ice Cream Maker",
    code: "ICE-2035Y",
    category: "Ice Cream Maker",
    condition: "New",
    estimate: "€130-€150",
    currentBid: "$0",
    closing: "Today, 9:00 PM",
    image: "/products/Ice-Cream-Maker.png",
    accent: "#b45309",
    description:
      "The ICE-2035Y is a versatile 2-in-1 kitchen appliance that prepares fresh ice cream and yogurt using an automatic self-cooling compressor. Its built-in heating and cooling systems eliminate the need to pre-freeze mixing bowls, allowing for continuous, back-to-back dessert making.",
    details: [
      "Dual Functionality: Churns frozen ice cream or incubates warm yogurt.",
      "Large Capacity: Equipped with a 2-liter heavy-duty stainless steel bowl.",
      "Compressor Cooling: Features a 180W self-cooling system with no pre-freezing required.",
      "Smart Controls: Includes an intuitive LCD screen with adjustable timer settings.",
      "Full Kit: Ships with a mixing paddle, transparent lid, spatula, and measuring cup.",
    ],
    specs:[
      ["Lot", "2"],
      ["Included", "Full set"],
      ["Price in origin country", "€130 - €150"],
    ],
    bidder: {
      name: "Omar T.",
      amount: "$860",
      since: "Leading for 3 minutes",
      badge: "Studio buyer",
    },
  },
  {
    id: "cofee-machine",
    name: "Filter Coffee Machine Grind",
    code: "MI-2403",
    category: "Coffee Maker",
    condition: "Used",
    estimate: "$420 - $560",
    currentBid: "$0",
    closing: "Tomorrow, 6:15 PM",
    image: "/products/studio-speaker.svg",
    accent: "#2563eb",
    description:
      "This premium filter coffee machine features a built-in cone grinder to fresh-grind beans right before brewing. It combines digital convenience with an integrated timer to deliver rich, freshly brewed coffee exactly when you want it.",
    details: [
      "Integrated Cone Grinder: Automatically grinds whole beans with adjustable coarseness for maximum freshness.",
      "Dual Coffee Options: Works with both whole coffee beans and pre-ground coffee powder.",
      "24-Hour Digital Timer: Programmable clock lets you wake up to freshly brewed coffee automatically.",
      "Aroma Control: Features multi-level strength settings to customize the intensity of your brew.",
      "Eco-Friendly Filter: Includes a reusable permanent filter to eliminate the need for paper filters.",
      "Anti-Drip Function: Smart drip-stop feature allows you to pour a cup mid-brew without making a mess.",
    ],
    specs: [
      ["Output", "80 W stereo"],
      ["Battery", "24 hours"],
      ["Material", "Aluminum and fabric"],
      ["Lot", "C18"],
    ],
    bidder: {
      name: "Lea K.",
      amount: "$475",
      since: "Leading for 9 minutes",
      badge: "Audio pro",
    },
  },
  {
    id: "carbon-bag",
    name: "Carbon Weekender Bag",
    code: "MI-2404",
    category: "Travel",
    condition: "Excellent",
    estimate: "$520 - $700",
    currentBid: "$590",
    closing: "Tomorrow, 7:20 PM",
    image: "/products/carbon-bag.svg",
    accent: "#be123c",
    description:
      "Structured travel bag with coated canvas, leather trim, and a removable shoulder strap.",
    details: [
      "Clean interior with laptop divider",
      "Minimal wear on base corners",
      "Dust bag and luggage tag included",
    ],
    specs: [
      ["Size", "48 x 28 x 24 cm"],
      ["Material", "Canvas and leather"],
      ["Hardware", "Gunmetal"],
      ["Lot", "D03"],
    ],
    bidder: {
      name: "Nadine S.",
      amount: "$590",
      since: "Leading for 11 minutes",
      badge: "Frequent bidder",
    },
  },
  {
    id: "atlas-lamp",
    name: "Atlas Desk Lamp",
    code: "MI-2405",
    category: "Design",
    condition: "Restored",
    estimate: "$360 - $480",
    currentBid: "$410",
    closing: "Friday, 5:45 PM",
    image: "/products/atlas-lamp.svg",
    accent: "#7c3aed",
    description:
      "Adjustable task lamp with a satin brass shade, weighted base, and dimmable LED module.",
    details: [
      "New wiring and inline dimmer",
      "Original hinge hardware retained",
      "Balanced arm holds position smoothly",
    ],
    specs: [
      ["Height", "54 cm extended"],
      ["Finish", "Satin brass"],
      ["Light", "Warm LED"],
      ["Lot", "E22"],
    ],
    bidder: {
      name: "Karim H.",
      amount: "$410",
      since: "Leading for 5 minutes",
      badge: "Design dealer",
    },
  },
  {
    id: "ember-chair",
    name: "Ember Lounge Chair",
    code: "MI-2406",
    category: "Furniture",
    condition: "Very good",
    estimate: "$900 - $1,150",
    currentBid: "$980",
    closing: "Friday, 8:10 PM",
    image: "/products/ember-chair.svg",
    accent: "#dc2626",
    description:
      "Low lounge chair with walnut legs, tailored upholstery, and a compact mid-century stance.",
    details: [
      "Freshly cleaned wool blend upholstery",
      "Frame is tight with no wobble",
      "Small mark on rear left leg",
    ],
    specs: [
      ["Frame", "Walnut"],
      ["Fabric", "Wool blend"],
      ["Seat", "42 cm height"],
      ["Lot", "F09"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "vela-headphones",
    name: "Vela Studio Headphones",
    code: "MI-2407",
    category: "Audio",
    condition: "Excellent",
    estimate: "$260 - $340",
    currentBid: "$295",
    closing: "Saturday, 4:30 PM",
    image: "/products/vela-headphones.svg",
    accent: "#0891b2",
    description:
      "Closed-back studio headphones with soft pads, low distortion drivers, and a hard shell case.",
    details: [
      "Pads and cable replaced recently",
      "Balanced and standard cable included",
      "Case has light exterior scuffs",
    ],
    specs: [
      ["Driver", "50 mm dynamic"],
      ["Impedance", "32 ohm"],
      ["Cable", "Detachable"],
      ["Lot", "G14"],
    ],
    bidder: {
      name: "Tala M.",
      amount: "$295",
      since: "Leading for 8 minutes",
      badge: "Verified buyer",
    },
  },
  {
    id: "linea-drone",
    name: "Linea Compact Drone",
    code: "MI-2408",
    category: "Tech",
    condition: "New open box",
    estimate: "$640 - $820",
    currentBid: "$710",
    closing: "Saturday, 7:00 PM",
    image: "/products/linea-drone.svg",
    accent: "#16a34a",
    description:
      "Foldable camera drone with stabilized 4K capture, obstacle sensing, and two batteries.",
    details: [
      "Test flight completed by seller",
      "Controller, case, and spare propellers included",
      "Firmware updated before listing",
    ],
    specs: [
      ["Video", "4K stabilized"],
      ["Flight", "34 minutes"],
      ["Range", "8 km rated"],
      ["Lot", "H31"],
    ],
    bidder: {
      name: "Zein A.",
      amount: "$710",
      since: "Leading for 4 minutes",
      badge: "Tech reseller",
    },
  },
];

export const featuredProduct = products[0];
