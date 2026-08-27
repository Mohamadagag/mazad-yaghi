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
    id: "aurora-watch",
    name: "Aurora Chrono Watch",
    code: "MI-2401",
    category: "Accessories",
    condition: "Excellent",
    estimate: "$1,200 - $1,650",
    currentBid: "$9",
    closing: "Today, 8:30 PM",
    image: "/products/aurora-watch.svg",
    accent: "#0f766e",
    description:
      "A steel chronograph with a smoked dial, sapphire crystal, and a clean exhibition caseback.",
    details: [
      "Automatic movement with a 42 hour reserve",
      "Original box, card, and service record included",
      "Light desk marks on clasp, crystal is clean",
    ],
    specs: [
      ["Lot", "1"],
      ["Included", "Full set"],
      ["Missing", "something, 1,2,4,5"],
      ["Price in origin country", "90$"],
    ],
    bidder: {
      name: "Number 2.",
      amount: "$9",
      since: "Leading for 6 minutes",
      badge: "Verified collector",
    },
  },
  {
    id: "prism-camera",
    name: "Prism Range Camera",
    code: "MI-2402",
    category: "Cameras",
    condition: "Very good",
    estimate: "$780 - $980",
    currentBid: "$860",
    closing: "Today, 9:00 PM",
    image: "/products/prism-camera.svg",
    accent: "#b45309",
    description:
      "Compact range camera with a bright lens, crisp metal body, and fresh light seals.",
    details: [
      "Lens glass is clean with no haze",
      "Meter responds correctly in daylight tests",
      "Includes leather strap and front cap",
    ],
    specs: [
      ["Lens", "45 mm f/2"],
      ["Body", "Aluminum"],
      ["Included", "Strap and cap"],
      ["Lot", "B07"],
    ],
    bidder: {
      name: "Omar T.",
      amount: "$860",
      since: "Leading for 3 minutes",
      badge: "Studio buyer",
    },
  },
  {
    id: "studio-speaker",
    name: "Studio Arc Speaker",
    code: "MI-2403",
    category: "Audio",
    condition: "New open box",
    estimate: "$420 - $560",
    currentBid: "$475",
    closing: "Tomorrow, 6:15 PM",
    image: "/products/studio-speaker.svg",
    accent: "#2563eb",
    description:
      "Wireless speaker with a sculpted aluminum grille, warm tuning, and room-filling output.",
    details: [
      "Bluetooth, optical, and USB-C input support",
      "Battery holds a full day of playback",
      "Includes charging dock and woven cable",
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
