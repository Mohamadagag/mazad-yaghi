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
    id: "Smart-Cool-7000-3-1",
    name: 'Comfee Smart Cool 7000-3 ',
    code: "Smart Cool 7000-3",
    category: "Electronics",
    condition: "New",
    estimate: "$170",
    ////////////////////////////////////////////////////
    currentBid: "",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/comfee7000-3.jpeg",
    accent: "#dc2626",
    description:
      "The Comfee Smart Cool 7000-3 is a compact, 3-in-1 portable air conditioner that delivers efficient cooling, ventilation, and dehumidification for spaces up to 25 m². It features integrated Wi-Fi control, allowing you to effortlessly manage your indoor climate via a smartphone app or voice assistants like Alexa and Google Home.",
    details: [
      'Performance capacity: 7,000 BTU/h (2.0 kW) cooling power.',
      "Smart connectivity: App and voice control capabilities.",
      "Eco-friendly refrigerant: Uses natural R290 cooling agent.",
      'Protective coating: Golden Fin tech prevents bacteria/corrosion.',
      'Energy rating: Efficient Class A power consumption.',
      'Portability: Built-in wheels for easy room-to-room movement.',
    ],
      specs:[
      ["Lot", "1"],
      ["Included", "Full set"],
      ["Price in origin country", "$170"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "sevrin-KA9307",
    name: "Severin Filter Coffee Maker",
    code: "KA9307",
    category: "Electronics",
    condition: "New",
    estimate: "€80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
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
      ["Lot", "2"],
      ["Included", "Full set"],
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
    id: "Energy-saving-pot",
    name: "Energy-saving pot",
    code: "12196",
    category: "Electronics",
    condition: "New",
    estimate: "€49.99",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/pot.webp",
    accent: "#dc2626",
    description:
      "The GOURMETmaxx 5.8L Energy-Saving Pot uses a tightly sealed thermal system to cook your meals faster while cutting down on energy use. Unlike traditional pressure cookers, it operates without high pressure, allowing you to safely open the lid at any time to stir or season your food.",
    details: [
      "Generous Capacity: Holds up to 5.8 liters, making it ideal for family-sized meals, stews, and soups.",
      "Premium Build: Made of durable die-cast aluminum with a sleek black exterior and vibrant red accents.",
      "Safe & Convenient: Equipped with a built-in pressure relief valve and heat-insulated handles for safe handling.",
      "Easy Maintenance: Includes a high-quality non-stick coating for effortless food release and quick cleanup.",
    ],
      specs:[
      ["Lot", "3"],
      ["Included", "Full set"],
      ["Price in origin country", "€49.99"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
       {
    id: "handheld-garment-steamer",
    name: 'Handheld Garment Steamer',
    code: "CY-801",
    category: "Electronics",
    condition: "New",
    estimate: "30$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Steamer.jpeg",
    accent: "#dc2626",
    description:
      "This high-power handheld garment steamer features a fast-heating design that smooths out tough wrinkles quickly and effortlessly. It is an ideal portable solution for refreshing a wide variety of everyday clothing fabrics both at home and on the go.",
    details: [
      "Water Reservoir: Offers a generous 320 ml capacity for extended steaming time without constant refilling.",
      "Speedy Heat-Up: Ready to use in just 20 seconds to accommodate quick, last-minute wardrobe touch-ups.",
      "Steam Settings: Equipped with 3 adjustable power gears to safely tailor the heat to delicate silks or heavy jackets.",
      "Operating Range: Equipped with a 5-meter power cable for comfortable room-to-room cleaning without constant outlet switching.",
      "Ergonomic Build: Designed with a comfortable handheld grip and a wide, smooth-glide metal steaming plate.",
    ],
      specs:[
      ["Lot", "4"],
      ["Included", "Full set"],
      ["Price in origin country", "30$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
   {
    id: "weskate-Skateboard",
    name: 'Weskate Skateboard',
    code: "3108-1",
    category: "Skateboard",
    condition: "New",
    estimate: "$30",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/skateboard.jpg",
    accent: "#dc2626",
    description:
      "The WeSkate 3108-1 is a complete, pre-assembled 31-inch standard skateboard built from durable 7-ply Canadian maple. Featuring a double kick concave design and soft shock-absorbing wheels, it is an ideal, budget-friendly choice for beginners and teenagers learning basic stunts or cruising.",
    details: [
      "Deck Construction: 7-ply high-density Canadian maple wood offers great flexibility and durability.",
      "Dimensions: 31 inches long by 8 inches wide (78.5 x 19.5 cm) provides a stable riding platform.",
      "Weight Capacity: Supports a maximum load of up to 220 lbs (100 kg).",
      "Wheels: 85A polyurethane shock-absorbing wheels ensure a smooth ride on rough street surfaces.",
      "Bearings: ABEC-7 high-speed precision bearings allow for easy, long-lasting coasting.",
      "Trucks: 5-inch heavy-duty aluminum alloy trucks provide sturdy control and steering.",
      "Grip Tape: Pre-applied waterproof diamond emery sandpaper delivers high friction for excellent shoe grip.",
    ],
      specs:[
      ["Lot", "5"],
      ["Included", "Full set"],
      ["Price in origin country", "$30"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "radiator-cover",
    name: 'Radiator cover',
    code: "B0C414641C",
    category: "Furniture",
    condition: "New",
    estimate: "$45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/radiator-cover.jpg",
    accent: "#dc2626",
    description:
      "This modern MDF radiator cover is designed to elegantly conceal your home heating unit while providing a functional display shelf for decor. Its slatted structure ensures excellent heat distribution throughout the room while keeping children and pets safe from hot surfaces.",
    details: [
      'Material Composition: Crafted from high-density, sturdy MDF (Medium-Density Fibreboard).',
      'Surface Coating: Finished with a protective, water-based lacquer that is easy to wipe clean.',
      "Airflow Pattern: Features a slatted design optimized for unrestricted, natural heat circulation.",
      'Safety Feature: Creates a reliable physical barrier to protect against direct contact burns.',
    ],
      specs:[
      ["Lot", "6"],
      ["Included", "Full set"],
      ["Price in origin country", "$45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "Cotsoco-Massage-Gun",
    name: 'Cotsoco Deep Tissue Massage Gun',
    code: "M679",
    category: "Electronics",
    condition: "New",
    estimate: "30$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/massageGun.webp",
    accent: "#dc2626",
    description:
      "The Cotsoco Deep Tissue Massage Gun is an affordable, high-performance percussion therapy device engineered to relieve muscle soreness and accelerate athletic recovery. It features a customizable, multi-speed design and an array of interchangeable attachments to deliver a targeted, professional-grade deep tissue massage right at home.",
    details: [
      "Powerful Brushless Motor: Delivers up to 3,200 RPM of percussion while keeping noise levels exceptionally quiet at under 45dB.",
      "Variable Speed Control: Offers 20 to 30 distinct intensity levels managed easily through an intuitive LCD touchscreen display.",
      "Interchangeable Massage Heads: Includes 6 to 12 specialized attachments tailored to target unique muscle groups, joints, and trigger points.",
      "Long Battery Life: Features a rechargeable lithium-ion battery providing 4 to 6 hours of continuous wireless operation per charge.",
      "Ergonomic & Portable: Built with an anti-slip silicone grip and comes packed in a dedicated travel carrying case for on-the-go relief.",
    ],
      specs:[
      ["Lot", "7"],
      ["Included", "Full set"],
      ["Price in origin country", "30$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "EUGAD-Swivel-Office-Chair",
    name: 'EUGAD Swivel Office Chair',
    code: "Z-OFC104dgr",
    category: "Furniture",
    condition: "New",
    estimate: "$120",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Z-OFC104dgr.jpg",
    accent: "#dc2626",
    description:
      "The Z-OFC104DGR is a compact, dark grey ergonomic office chair designed with a breathable mesh backrest for dependable lumbar support. Its small footprint and smooth mobility make it an ideal seating choice for smaller home offices, reception desks, or commercial salons.",
    details: [
      "Color: Dark grey mesh backrest and padded seat upholstery with a matching black or charcoal frame.",
      "Ergonomics: Features a contoured mid-back design providing targeted lower back support to minimize strain.",
      'Adjustability: Equipped with a smooth pneumatic gas lift for height customization and a standard tilt mechanism.',
      'Mobility: Built on a heavy-duty, 360-degree swivel 5-star base with dual-wheel rolling casters.',
      'Ideal Use: Perfectly suited for compact workstations, retail counters, and study spaces.',
    ],
      specs:[
      ["Lot", "8"],
      ["Included", "Full set"],
      ["Price in origin country", "$120"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "VASAGLE-Under-Sink-Bathroom-Cabinet",
    name: 'VASAGLE Under Sink Bathroom Cabinet',
    code: "BBK513GU01",
    category: "Furniture",
    condition: "New",
    estimate: "€50",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Under-Sink-Bathroom-Storage.jpg",
    accent: "#dc2626",
    description:
      "This VASAGLE Under-Sink Storage Cabinet is a contemporary, space-saving freestanding bathroom vanity finished in a striking cloud white and cement grey tone. It features a top siphon slot precisely engineered to wrap seamlessly around pedestal or column-less basin plumbing to neatly hide unsightly pipes.",
    details: [
      "Smart Layout: Offers 3 deep pull-out side drawers and a single-door cupboard section featuring 2 adjustable height internal compartments.",
      "Built to Last: Constructed from moisture-resistant, robust MDF engineered wood paired with clean, sleek silver metal linear pull handles.",
      'Product Dimensions: Measures approximately 30 x 60 x 64 cm (11.8"D x 23.6"W x 25.2"H) to fit comfortably in small-to-medium bathroom layouts.',
      "Elevated Base: Raised on short protective feet to prevent water damage from damp bathroom floors and make cleaning underneath easy.",
    ],
      specs:[
      ["Lot", "9"],
      ["Included", "Full set"],
      ["Price in origin country", "€50"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },  
    {
    id: "Sejoy-Cordless-Oral-Irrigator",
    name: ' Sejoy Cordless Oral Irrigator',
    code: "CYQ-FC5091",
    category: "Electonics",
    condition: "New",
    estimate: "50$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/oral-irrigator.jpg",
    accent: "#dc2626",
    description:
      'The Sejoy Cordless Oral Irrigator is a portable water flosser designed with a 1400mAh rechargeable lithium-ion battery for deep dental cleaning. It includes a dedicated inductive charging dock that doubles as a built-in tip organizer to keep accessories clean and accessible.',
    details: [
      "Long Battery Life: Features a built-in 1400mAh Li-ion battery providing an active continuous runtime of ≥ 30 minutes per full charge.",
      "Inductive Charging Base: Includes a convenient wireless charging dock that keeps the main handle powered up and neatly organizes your flossing tips.",
      "Independent Controls: Built with standalone, separate Power ON/OFF and Mode Selection buttons for intuitive, mess-free operation.",
      "Versatile Cleaning: Offers multiple operation pressure modes (Normal, Soft, Pulse) to adapt to sensitive gums, braces, and implants.",
    ],
      specs:[
      ["Lot", "10"],
      ["Included", "Full set"],
      ["Price in origin country", "50$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Ice-Cream-Maker",
    name: "Ice Cream Maker",
    code: "ICE-2035Y",
    category: "Electronics",
    condition: "New",
    estimate: "€130-€150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
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
      ["Lot", "11"],
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
    id: "AJJHUUKI",
    name: "2 Seater Garden Bench",
    code: "B0DCJSDD35",
    category: "Furniture",
    condition: "New",
    estimate: "£90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Tomorrow, 6:15 PM",
    image: "/products/AJJHUUKI.jpg",
    accent: "#2563eb",
    description:
      "The AJJHUUKI 2-Seater Garden Bench is a modern outdoor companion seat featuring a built-in tempered glass table perfect for holding drinks and snacks. Constructed with a weather-resistant steel frame and breathable mesh seating, it provides an intimate and durable lounging solution for any patio, balcony, or garden.",
    details: [
      "Built-in Table: Includes a central tempered glass console for easy access to drinks and books.",
      "Ergonomic Fabric: Made with breathable, quick-drying Textilene mesh that eliminates the need for cushions.",
      "Sturdy Frame: Supported by a heavy-duty, powder-coated steel structure resistant to rust and outdoor wear.",
      "Compact Footprint: Measures 131 x 62 x 92 cm, making it an ideal space-saver for smaller outdoor areas.",
      "Eco-Friendly Filter: Includes a reusable permanent filter to eliminate the need for paper filters.",
    ],
    specs:[
      ["Lot", "12"],
      ["Included", "Full set"],
      ["Price in origin country", "£90"],
    ],
    bidder: {
      name: "Lea K.",
      amount: "$475",
      since: "Leading for 9 minutes",
      badge: "Audio pro",
    },
  },
  {
    id: "Dual-chamber-air-fryer",
    name: "Dual-chamber air fryer 7L",
    code: "11339",
    category: "Electronics",
    condition: "New",
    estimate: "€94,99",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Tomorrow, 7:20 PM",
    image: "/products/airfryer.png",
    accent: "#be123c",
    description:
      "The GOURMETmaxx Dual-Chamber Hot Air Fryer 7L is a powerful 2400W appliance that combines a hot air oven, grill, and deep fryer into one compact unit. Its innovative dual-chamber system lets you cook two different meals simultaneously using 360° rapid air technology for crispy results with up to 80% less fat.",
    details: [
      "Total Capacity: 7 liters split into two independent 3.5-liter cooking zones.",
      "Power & Performance: 2400 watts of high-efficiency power that cooks 1.5 times faster than standard ovens.",
      "Smart Synchronization: Synchronization feature ensures two different foods finish cooking at the exact same time.",
      "Pre-installed Programs: 10 digital touch programs for frying, roasting, baking, grilling, and dehydrating.",
      "Temperature Control: Wide adjustable range from 40°C up to 230°C.",
      "Safety Elements: Equipped with a cool-touch exterior, automatic shut-off, and non-slip feet.",
    ],
   specs:[
      ["Lot", "13"],
      ["Included", "Full set"],
      ["Price in origin country", "€94,99"],
    ],
    bidder: {
      name: "Nadine S.",
      amount: "$590",
      since: "Leading for 11 minutes",
      badge: "Frequent bidder",
    },
  },
  {
    id: "zit-blender",
    name: "Z.I.T Countertop Blender",
    code: "ZIT1009",
    category: "Electronics",
    condition: "New",
    estimate: "30$ - 40$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/zit2.jpeg",
    accent: "#dc2626",
    description:
      "The ZIT 1009 is a powerful 1000W multi-function 2-in-1 countertop blender engineered for effortless food preparation. Its sleek stainless steel design and high-capacity glass jug make it a durable and elegant addition to any modern kitchen.",
    details: [
      "High-Powered Motor: 1000 Watts for efficient blending.",
      "Dual Functionality: 2-in-1 system includes a blending jug and a grinding attachment.",
      "Large Capacity: 1.5 Liter heavy-duty glass jar.",
      "Speed Control: 3 variable speed settings plus a pulse function.",
      "Ice Crushing Blades: Premium stainless steel blade system.",
      "Sturdy Build: Premium stainless steel base with non-slip feet.",
    ],
      specs:[
      ["Lot", "14"],
      ["Included", "Full set"],
      ["Price in origin country", "40$ - 50$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "projector",
    name: "Magcubic Projector HY320",
    code: "HY320",
    category: "Electronics",
    condition: "New",
    estimate: "100$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/projector.jpg",
    accent: "#dc2626",
    description:
      "The Magcubic HY320 is an ultra-affordable, full HD portable smart projector featuring a 180-degree rotating stand that easily projects onto walls or ceilings. Running on a built-in Android operating system, it provides instant access to your favorite streaming apps without needing extra hardware.",
    details: [
      "Resolution: Native 1080p Full HD resolution with support for 4K video decoding.",
      "Brightness: 390 to 500 ANSI lumens, offering great clarity in dark or dim rooms.",
      "Throw Ratio: Short 0.9:1 throw ratio that projects a massive 100-inch screen from just 2 meters away.",
      "Wireless Tech: Dual-band Wi-Fi 6 for lag-free streaming and Bluetooth 5.0 for wireless audio.",
      "Smart Adjustments: Auto vertical keystone correction and four-corner manual calibration for a perfectly square image.",
    ],
      specs:[
      ["Lot", "15"],
      ["Included", "Full set"],
      ["Price in origin country", "100$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "WOLTU-Bar-Stool",
    name: 'WOLTU Bar Stool',
    code: "BH296sz-2",
    category: "Furniture",
    condition: "New",
    estimate: "€80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Bar-Stool.jpg",
    accent: "#dc2626",
    description:
      "A stylish and comfortable set of 2 modern bar stools featuring luxurious black velvet upholstery, ergonomic low backrests, and robust matte black metal legs designed to elevate any kitchen island, home bar, or dining area.",
    details: [
      "Premium Comfort: Upholstered in skin-friendly velvet and padded with high-density foam that retains its shape over time.",
      "Ergonomic Design: Equipped with a gently curved low backrest and a built-in metal footrest to reduce muscle fatigue and provide lumbar support.",
      "Sturdy Construction: Built with cross-shaped, matte powder-coated metal legs that are rust-proof, scratch-resistant, and highly stable.",
      "Floor Protection: Features non-slip foot pads under each leg to prevent slipping, dampening noise, and shielding your floors from scratches.",
      "High Weight Capacity: Engineered to easily support up to 150 kg (approx. 330 lbs) per chair.",
    ],
      specs:[
      ["Lot", "16"],
      ["Included", "Full set"],
      ["Price in origin country", "€80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
        {
    id: "e-bike-1",
    name: 'SWFT Volt Electric Bike',
    code: "SWFT-VOLT-BLK",
    category: "Sports",
    condition: "New",
    estimate: "700$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SWFT-VOLT-01-BLK-FrontAngle-scaled.jpg",
    accent: "#dc2626",
    description:
      "The SWFT Volt Electric Bike is an affordable, single-speed commuter e-bike designed for efficient city riding. It combines a clean, classic road-bike aesthetic with a quiet 350W motor to easily power your daily trips.",
    details: [
      "Top Speed: 20 mph using either pedal assist or the thumb throttle.",
      "Battery Range: Up to 32 miles on a single charge with a clean, integrated frame battery.",
      "Lightweight Build: Weighs just 44.1 lbs, making it much easier to carry and maneuver than standard e-bikes.",
      "Rider Fit: Large 58 cm steel frame with a 32.5-inch standover height, best suited for taller riders.",
      "Tech Features: Built-in handlebar LCD screen to monitor speed, battery life, and assist levels.",
    ],
      specs:[
      ["Lot", "17"],
      ["Included", "Full set"],
      ["Price in origin country", "700$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
        {
    id: "Barber-Chair",
    name: 'Costway Barber Chair',
    code: "49816520",
    category: "Furniture",
    condition: "New",
    estimate: "$280",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Barber-Chair.jpg",
    accent: "#dc2626",
    description:
      "The COSTWAY Heavy Duty Hydraulic Barber Salon Chair is a professional-grade styling chair featuring an ergonomic black faux-leather seat with tufted buttons and integrated armrests. Supported by a heavy-duty chrome hydraulic base, it provides full 360° rotation and customizable height configurations for professional beauty environments.",
    details: [
      "Adjustable Component: Fitted with an extendable and removable headrest to fit clients of different heights.",
      "Mobility System: Features a robust 360-degree swivel mechanism that locks in place seamlessly during styling.",
      "Hydraulic Pump: Built with a premium, heavy-duty foot-pedal pump for smooth height modifications.",
      "Structural Support: Anchored by a square chrome base and an integrated T-shaped footrest for maximum stability and user comfort.",
    ],
      specs:[
      ["Lot", "18"],
      ["Included", "Full set"],
      ["Price in origin country", "$280"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
        {
    id: "Storage-Shelving-Unit",
    name: 'WOLTU Storage Shelving Unit ',
    code: "RGB9289whe",
    category: "Furniture",
    condition: "New",
    estimate: "€45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/WOLTU-shelf.jpg",
    accent: "#dc2626",
    description:
      "A stylish and practical 5-tier storage shelving unit featuring walnut MDF shelves and a sturdy black metal frame. Perfect for organizing and displaying books, plants, kitchen essentials, bathroom products, and more.",
    details: [
      "5 spacious open shelves for versatile storage",
      "Modern industrial design with walnut MDF and black metal",
      "Strong and durable construction",
      "Anti-tip device for added stability and safety",
      'Back panels help prevent items from falling',
    ],
      specs:[
      ["Lot", "19"],
      ["Included", "Full set"],
      ["Price in origin country", "€45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "meat-grinder",
    name: "Electric meat grinder",
    code: "100393890",
    category: "Electronics",
    condition: "New",
    estimate: "€45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/meatgrinder.webp",
    accent: "#dc2626",
    description:
      "The Silvercrest Electric Meat Grinder is a versatile and budget-friendly kitchen appliance designed for easily preparing fresh minced meat, sausages, and baked goods at home. It features a reliable motor with a practical reverse function to quickly clear any food blockages without disassembly.",
    details: [
      "Power Output: Operates at 300W to 400W (depending on the model) for efficient home processing.",
      "Processing Speed: Grinds approximately 1 kg to 1.2 kg of meat per minute.",
      "Reverse Function: Features a safety reverse button to easily clear trapped meat or sinew.",
      "Included Attachments: Comes with multiple grinding discs, a sausage stuffer, a kebbe attachment, and a spritz biscuit shaper.",
      "Cleaning Note: Aluminum parts are not dishwasher safe and must be washed by hand to prevent discoloration.",
    ],
      specs:[
      ["Lot", "20"],
      ["Included", "Full set"],
      ["Price in origin country", "€45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Cyclone-vacuum-cleaner-800W",
    name: "Cyclone vacuum cleaner 800W",
    code: "100401497",
    category: "Electronics",
    condition: "New",
    estimate: "€45.99",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/vaccum.webp",
    accent: "#dc2626",
    description:
      "The CLEANmaxx Multi-Zyklonstaubsauger is a compact, bagless cylinder vacuum cleaner designed for highly efficient household cleaning. It utilizes multi-cyclone technology to separate dirt from the airflow, maintaining constant, powerful suction without the need for bags.",
    details: [
      "Suction Power: Delivers a strong 17 kPa maximum suction force.",
      "Motor Performance: Equipped with an energy-efficient 800-watt motor.",
      "Dust Capacity: Features a easy-to-empty 2-liter dirt container.",
      "Filtration System: Includes an EPA filter for cleaner exhaust air, ideal for allergy sufferers.",
      "Operating Range: Provides a 6.5-meter action radius with an automatic cable rewind mechanism.",
    ],
      specs:[
      ["Lot", "21"],
      ["Included", "Full set"],
      ["Price in origin country", "€45.99"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "tornado-tv",
    name: 'TORNADO Smart LED TV 32 Inch HD"',
    code: "32EA6500E",
    category: "Electonics",
    condition: "New",
    estimate: "170$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/tornadotv32.webp",
    accent: "#dc2626",
    description:
      'The Tornado 32" TV is a highly affordable, compact television that delivers vibrant high-definition visuals alongside an integrated digital receiver to seamlessly save space. Manufactured by the Elaraby Group, it features options running Google TV or WebOS platforms to easily stream modern entertainment services.',
    details: [
      "Display Quality: Features standard HD resolution (1366 x 768) with clean 60Hz refresh rates for smooth local viewing.",
      "Audio Engineering: Equipped with standard dual 8W speakers paired with Dolby Digital Plus audio enhancement software.",
      "Smart Ecosystems: Available with full Wi-Fi connectivity, built-in Chromecast, and immediate access to Netflix, YouTube, and Shahid.",
      "Wired Connectivity: Includes multi-port setups featuring 2x HDMI inputs and 2x USB slots for media playback.",
      "Hardware Protection: Outfitted with specialized internal voltage regulators to protect sensitive components from electrical surges.",
    ],
      specs:[
      ["Lot", "22"],
      ["Included", "Full set"],
      ["Price in origin country", "170$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "SONGMICS-Ergonomic-Gaming-and-Office-Chair",
    name: 'SONGMICS Ergonomic Gaming and Office Chair ',
    code: "OBG066P01",
    category: "Furniture",
    condition: "New",
    estimate: "90$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SONGMICS-gaming-chair.jpg",
    accent: "#dc2626",
    description:
      "The SONGMICS OBG066P01 is an ergonomic racing-style gaming and office chair finished in a sleek pastel pink color. It features a unique, height-adjustable telescopic headrest and breathable hybrid fabric upholstery designed for long-term comfort and support.",
    details: [
      "Smart Headrest: Features an adjustable telescopic design tailored to support individuals between 170 cm and 190 cm tall",
      "Breathable Fabric: Combines perforated PU faux leather with a cotton-linen blend to prevent sweating and improve airflow",
      'Strong Capacity: Built on a robust frame and base that safely supports a maximum static load of up to 150 kg.',
      "Relaxing Tilt: Offers a seat height range of 46.5–56.5 cm alongside a comfortable 95° to 110° rocking/tilt mechanism.",
    ],
      specs:[
      ["Lot", "23"],
      ["Included", "Full set"],
      ["Price in origin country", "90$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "hand-blender",
    name: "Z.I.T Hand Blender",
    code: "ZIT1008",
    category: "Electronics",
    condition: "New",
    estimate: "35$ - 50$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 5:45 PM",
    image: "/products/zitblender.png",
    accent: "#7c3aed",
    description:
      "The Z.I.T. Cuisine Hand Blender (Model ZIT1008) is a powerful 1200W 3-in-1 kitchen appliance engineered for efficient heavy-duty blending, chopping, and whisking. It combines an ergonomic stainless steel design with precise variable speed controls to handle everything from dense purees to light creams.",
    details: [
      "Power Output: Robust 1200-Watt high-performance motor.",
      "Versatility: 3-in-1 system includes an immersion wand, chopper bowl, and balloon whisk.",
      "Build Quality: Durable, food-grade stainless steel blades and attachments.",
      "Speed Management: Multi-tier variable speed dial to prevent kitchen splashes.",
    ],
     specs:[
      ["Lot", "24"],
      ["Included", "Full set"],
      ["Price in origin country", "35$ - 50$"],
    ],
    bidder: {
      name: "Karim H.",
      amount: "$410",
      since: "Leading for 5 minutes",
      badge: "Design dealer",
    },
  },
     {
    id: "Feandrea-Collapsible-Soft-Dog-Crate",
    name: 'Feandrea Collapsible Soft Dog Crate',
    code: "Feandrea Collapsible Soft Dog Crate",
    category: "Furniture",
    condition: "New",
    estimate: "$45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/feandrea.jpg",
    accent: "#dc2626",
    description:
      "The Feandrea Collapsible Soft Dog Crate is a lightweight, portable pet carrier featuring a sturdy steel frame wrapped in durable, water-resistant Oxford fabric. It is designed with scratch-resistant mesh windows on multiple sides to ensure excellent ventilation and visibility for your pet during travel or indoor use.",
    details: [
      "Material Composition: Crafted from heavy-duty 600D Oxford fabric with tight-weave mesh netting.",
      "Easy Portability: Features a tool-free, collapsible design that folds completely flat in seconds for quick vehicle storage.",
      'Convenient Accessibility: Equipped with multiple zippered doors (top and sides) to easily let your pet in or out.',
      'Built-in Storage: Includes integrated fabric pockets on the exterior to securely hold treats, toys, or leashes.',
      'Stable Support: Constructed around a lightweight, powder-coated internal steel frame for structured rigidity.',
    ],
      specs:[
      ["Lot", "25"],
      ["Included", "Full set"],
      ["Price in origin country", "$45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "bar-Stool-Avane-Set-of-2",
    name: 'Bar Stool Avane Set of 2',
    code: "405861",
    category: "Furniture",
    condition: "New",
    estimate: "£125",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/bar-Stool-Avane-Set-of-2.webp",
    accent: "#dc2626",
    description:
      "The tectake Avane Bar Stool (Model 405861) features an elegant cream velvet-look seat paired with slim, gold-finished steel legs. Its chic, contemporary design blends comfort and style, making it a perfect addition to modern kitchen islands or home bars.",
    details: [
      "Seating Comfort: Ergonomically designed, plush seat shell with supportive backrest and integrated armrests.",
      "Premium Materials: Upholstered in a soft-touch, hard-wearing fabric surface with steady, floor-protecting legs.",
      'Built to Last: Sturdy steel construction capable of supporting a maximum load capacity of 120 kg.',
      'Dimensions: Measures approximately 48.5 x 57 x 108 cm with a classic counter-to-bar profile.',
      'Stable Design: Equipped with a built-in metal footrest ring for enhanced seating posture and overall stability.',
    ],
      specs:[
      ["Lot", "26"],
      ["Included", "Full set"],
      ["Price in origin country", "£125"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Parkside-12V",
    name: 'Parkside 12V 2-in-1 Drill & Driver Set',
    code: "IAN-100388837",
    category: "Tools",
    condition: "New",
    estimate: "€90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/cordless-drill.png",
    accent: "#dc2626",
    description:
      "The Parkside 12V Cordless Drill Driver Set is a compact, highly versatile power tool renowned for its unique 2-in-1 design featuring a removable keyless chuck. It belongs to the interchangeable Parkside X 12V Team battery system, making it a budget-friendly staple for both quick household repairs and routine DIY projects.",
    details: [
      "Dual Functionality: Removable 10mm metal chuck reveals an integrated magnetic bit holder underneath for rapid swapping between drilling and driving.",
      "Speed Control: Two-speed gearbox providing 0–350 RPM for heavy screwdriving and 0–1,300 RPM for smooth drilling.",
      "Adjustable Torque: 19 selectable torque settings plus an additional dedicated drill setting to prevent over-tightening.",
      'Ecosystem Compatibility: Powered by 12V lithium-ion batteries that seamlessly fit all other tools in the Parkside 12V family.',
    ],
      specs:[
      ["Lot", "27"],
      ["Included", "Full set"],
      ["Price in origin country", "€90"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Coffee-Table",
    name: 'WOLTU Coffee Table',
    code: "TSG17hei",
    category: "Furniture",
    condition: "New",
    estimate: "€25",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Coffee-Table.jpg",
    accent: "#dc2626",
    description:
      "The WOLTU TSG17hei is a compact, C-shaped side table designed to slide seamlessly under your sofa or bed to save space. Featuring a light oak finish and a black metal frame, it brings both modern style and convenient tabletop access directly to your seat.",
    details: [
      'Space-Saving Design: The C-shaped structure allows the base to slide underneath furniture, maximizing usable space in tight rooms.',
      "Premium Materials: Built with a waterproof, scratch-resistant E1-class MDF tabletop and a durable, rust-resistant black steel frame.",
      "Compact Dimensions: Measures 45 x 25 x 63.5 cm (L x W x H), making it highly suitable for holding a laptop, coffee cup, or book.",
      'Lightweight & Portable: Weighs around 3 kg, allowing you to effortlessly move it between your living room, bedroom, or office.',
      'Floor Protection: Equipped with non-slip feet protectors that prevent floor scratches and improve overall stability.',
    ],
      specs:[
      ["Lot", "28"],
      ["Included", "Full set"],
      ["Price in origin country", "€25"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
        {
    id: "Tectake-child-car-seat",
    name: 'Tectake Child Car Seat',
    code: "400212",
    category: "Furniture",
    condition: "New",
    estimate: "£70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/babychair.jpg",
    accent: "#dc2626",
    description:
      "This tectake child car seat features thick padding and an adjustable headrest to grow comfortably with your toddler. It safely adapts from a forward-facing harness seat to a high-back booster using your car's standard 3-point seat belt.",
    details: [
      "Long-Lasting Use: Suitable for children from 15 months up to approximately 12 years old (or a body weight of 9 to 36 kg).",
      "Safety First: Equipped with an integrated 5-point safety harness and sturdy side-impact wings to keep children secure.",
      "Grow-With-Me Design: Features a multi-position height-adjustable headrest to comfortably accommodate a growing child.",
      "Removable Reducer Pad: Includes an extra-thick, washable insert padding that can be removed as the child gets older.",
    ],
      specs:[
      ["Lot", "29"],
      ["Included", "Full set"],
      ["Price in origin country", "£70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "drying-Rack",
    name: 'Drying Rack',
    code: "dryingRack",
    category: "Furniture",
    condition: "New",
    estimate: "$35",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/dryingRack.png",
    accent: "#dc2626",
    description:
      "This extendable clothes drying rack from Home Creation offers a highly flexible drying surface that easily expands to accommodate larger laundry loads. It features a robust design capable of holding up to 20 kg and includes integrated wheels for effortless mobility even when fully loaded.",
    details: [
      "Extendable Frame: The central section smoothly pulls out to increase drying space, making it perfect for wide items like bedsheets.",
      "High Weight Capacity: Engineered to securely support a maximum load of up to 20 kg.",
      'Easy Mobility: Equipped with smooth-rolling wheels on the base for scratch-free, effortless transport around the room.',
      'Space-Saving Storage: Folds completely flat in seconds, allowing you to easily slip it into tight closets or narrow gaps.',
    ],
      specs:[
      ["Lot", "30"],
      ["Included", "Full set"],
      ["Price in origin country", "$35"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "Playtive-Fairy-Bouncy-Castle",
    name: 'Playtive Fairy Bouncy Castle',
    code: "879000115208",
    category: "Toys",
    condition: "New",
    estimate: "€35",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Playtive-Fairy-Bouncy-Castle.webp",
    accent: "#dc2626",
    description:
      "The Playtive Fairy Bouncy Castle is an adorable, pink inflatable jumper designed to bring fairy-tale magic and active play to your backyard [1.4]. It features a built-in basketball hoop and a side ring-toss game to keep young children entertained for hours [1.6, 1.20].",
    details: [
      "Included Components: A 14-piece set featuring the bounce house, 1 inflatable basketball, 4 inflatable rings, and 8 ground pegs for stability [1.6].",
      "Safety & Build: Equipped with sturdy protective side walls and 8 separate air chambers with safety valves for quick deflation [1.22].",
      'Size & Capacity: Measures 160 x 180 x 160 cm (W x H x D) and supports a maximum total weight capacity of 50 kg.',
      'Age Grading: Specifically designed for kids aged 3 years and older.',
    ],
      specs:[
      ["Lot", "31"],
      ["Included", "Full set"],
      ["Price in origin country", "€35"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "Cat-Tree-house",
    name: 'Cat Tree House',
    code: "Cat Tree",
    category: "Furniture",
    condition: "New",
    estimate: "£60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Cat-Tree-house.jpg",
    accent: "#dc2626",
    description:
      "This compact multi-level cat tree is designed to provide your pet with a comfortable space for scratching, climbing, and resting. It features a space-saving layout finished in a soft, beige plush fabric that easily blends into small indoor spaces.",
    details: [
      'Structure: Multi-tier design with two elevated platforms and a ground-level hiding tunnel.',
      "Materials: Sturdy wooden base plates wrapped in soft plush fabric and durable sisal rope posts.",
      "Entertainment: Built-in hanging toy ball to encourage active play and hunting instincts.",
      'Functionality: Multiple dedicated scratching surfaces to help keep your cat’s claws healthy and protect home furniture.',
    ],
      specs:[
      ["Lot", "32"],
      ["Included", "Full set"],
      ["Price in origin country", "£60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Parkside-9-piece-tile-tool-case",
    name: 'Parkside 9-piece Tile Tool Case',
    code: "IAN 488319",
    category: "Tools",
    condition: "New",
    estimate: "€90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Parkside-9-piece-tile-tool-case.jpg",
    accent: "#dc2626",
    description:
      "This 9-piece Parkside Tile Tool Set (IAN 488319 / Article 100395730) is a versatile diamond accessory kit designed for heavy-duty drilling, cutting, and grinding masonry. Engineered for standard 125mm angle grinders with an M14 thread, it provides everything needed to work cleanly with tough materials like porcelain, granite, marble, and ceramic tiles.",
    details: [
      "9-Piece Comprehensive Kit: Includes 1 diamond grinding cup, 2 diamond cutting discs, 5 diamond drill bits, and 1 adapter guide.",
      "High-Grade Diamond Coating: Offers exceptional durability, speed, and precision when cutting or drilling through dense stone.",
      "125mm Universal Fit: Tailored for standard grinders operating up to a maximum speed of 12,250 RPM.",
      'Versatile Core Drills: Contains five varying drill bit sizes optimized for making clean holes for pipes and electrical outlets.',
    ],
      specs:[
      ["Lot", "33"],
      ["Included", "Full set"],
      ["Price in origin country", "€90"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "SILVERCREST-20V-Cordless-Handheld",
    name: 'SILVERCREST® 20V Cordless Handheld',
    code: "Silvercrest SHSA 20-Li A1",
    category: "Electonics",
    condition: "New",
    estimate: "€25",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/silvercrest-20-v-akku.webp",
    accent: "#dc2626",
    description:
      'The Silvercrest SHSA 20-Li A1 is a compact, cordless handheld vacuum designed for rapid cleanup of both dry debris and liquids around the home, workshop, or car. It operates on the highly versatile Parkside 20V battery platform, making it a cost-effective choice if you already own compatible Lidl tools.',
    details: [
      "Dual Functionality: Vacuums up dry dust or up to 150 ml of liquid messes.",
      "Universal Power System: Fully compatible with all batteries in the Parkside X 20 V Team series.",
      "Sustained Runtime: Delivers up to 35 minutes of continuous use on a standard 2 Ah battery (ECO mode).",
      "Easy Maintenance: Features a bagless, washable HEPA filter system with a 400 ml dust container",
      "Complete Attachments: Comes equipped with a crevice nozzle, wet-suction nozzle, and a small brush head.",
    ],
      specs:[
      ["Lot", "34"],
      ["Included", "Full set"],
      ["Price in origin country", "€25"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "costway-Walker",
    name: 'Costway Walker',
    code: "46102539",
    category: "Furniture",
    condition: "New",
    estimate: "$120",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/costwaywalker.jpg",
    accent: "#dc2626",
    description:
      "The Costway 3-Wheel Folding Rollator is a lightweight aluminum mobility walker featuring a stable, highly maneuverable triangular design. It comes equipped with a central zippered storage bag, adjustable ergonomic handles, and a dual-loop brake system for optimal control.",
    details: [
      "Triangular Aluminum Frame: Crafted from sturdy, corrosion-resistant aluminum that remains light and easy to maneuver.",
      "Height-Adjustable Handles: Features 6 distinct height positions to comfortably fit users of varying heights.",
      "All-Terrain Wheels: Equipped with three large, wear-resistant wheels designed for stable indoor and outdoor navigation.",
      "Dual Loop-Lock Brakes: Offers precise speed control during movement and a secure locking mechanism for parking.",
      "Zippered Storage Bag: Includes a spacious, removable front pouch to store and protect personal belongings.",
      "Space-Saving Folding Design: Collapses quickly into a compact profile for easy transport and storage in tight spaces.",
    ],
      specs:[
      ["Lot", "35"],
      ["Included", "Full set"],
      ["Price in origin country", "$120"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Step-Kitchen-Trash-Can",
    name: 'SONGMICS Step Kitchen Trash Can',
    code: "LTB001A01",
    category: "Furniture",
    condition: "New",
    estimate: "€60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/LTB001A01.jpg",
    accent: "#dc2626",
    description:
      "This SONGMICS Step Kitchen Trash Can features a sleek, space-saving design in a stylish sand beige finish that fits flat against walls or cabinets. Its premium steel construction is paired with a hands-free step pedal and a quiet, soft-close lid mechanism for maximum convenience.",
    details: [
      "Quiet Closure: Equipped with a soft-close lid mechanism for silent, slam-free operation.",
      "Easy Maintenance: Includes a removable plastic inner bucket with an integrated handle for quick emptying and effortless cleaning.",
      "Stay-Open Feature: The lid can be set to remain open manually when performing longer cleaning tasks.",
      "Odor Protection: Designed with an airtight lid seal that effectively traps unpleasant kitchen odors inside.",
      "Sturdy Base: Features a non-slip bottom structure that protects your floors from scratches and keeps the bin firmly in place during use.",
    ],
      specs:[
      ["Lot", "36"],
      ["Included", "Full set"],
      ["Price in origin country", "€60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Cordless-Upholstery",
    name: "Cordless Upholstery and Carpet Cleaner",
    code: "100399003",
    category: "Electronics",
    condition: "New",
    estimate: "€99.99",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/champonese.webp",
    accent: "#dc2626",
    description:
      "Tackle tough spots and spills anywhere with the ultimate portable cleaning companion. Powered by a high-performance 20V lithium-ion battery, this lightweight, cordless carpet cleaner delivers powerful suction to lift deep stains from carpets, rugs, car interiors, and home upholstery without tethering you to an electrical outlet.",
    details: [
      "Cordless Convenience: Powered by a removable 20V battery platform for unlimited portability around the home or in your vehicle.",
      "Dual Tank System: Keeps clean solution and dirty water completely separate for a pristine, streak-free clean every time.",
      "Powerful Lift Suction: Engineered to pull heavy liquids, embedded dirt, and stubborn pet stains directly out of dense fibers.",
      "Multi-Surface Versatility: Safely lifts messes from sofas, area rugs, stairs, car seats, and pet beds.",
      "Targeted Cleaning Tools: Includes specialized scrubbing brush attachments designed to clean both wide paths and tight, hard-to-reach crevices.",
      "Compact & Lightweight: Easy to carry with an integrated handle, making storage simple and stair cleaning effortless.",
    ],
      specs:[
      ["Lot", "37"],
      ["Included", "Full set"],
      ["Price in origin country", "€99.99"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
      {
    id: "food-slicer",
    name: "Princess Food Slicer",
    code: "01.492989.01.460",
    category: "Electronics",
    condition: "New",
    estimate: "€40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/foodslicer.jpg",
    accent: "#dc2626",
    description:
      "The Princess Allesschneider is a versatile, high-performance kitchen appliance designed to effortlessly slice everything from paper-thin meats to thick loaves of bread. Combining a robust motor with a precision stainless steel blade, it delivers commercial-grade slicing efficiency right to your home countertop.",
    details: [
      "Power Performance: Robust motor options up to 200W for smooth, consistent cutting.",
      "Adjustable Precision: Infinite thickness control dials slicing from 0mm up to 23mm.",
      "Safety Engineering: Non-slip suction feet paired with an instant safety lock switch.",
      "Effortless Cleaning: Fully detachable, dishwasher-safe components and removable stainless steel blades.",
      "Sturdy Build: Premium housing options ranging from space-saving composite to heavy-duty metal.",
    ],
      specs:[
      ["Lot", "38"],
      ["Included", "Full set"],
      ["Price in origin country", "€40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "ice-maker",
    name: 'Northclan Ice Maker',
    code: "northclan1226red",
    category: "Electronics",
    condition: "New",
    estimate: "128$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/northclan-icemaker.jpg",
    accent: "#dc2626",
    description:
      "This Northclan Countertop Ice Maker is a compact, retro-red portable appliance designed to produce fast, bullet-shaped ice cubes for home or office use.",
    details: [
      "Production Speed: Yields 9 fresh ice cubes in just 5 to 8 minutes.",
      "Daily Capacity: Capable of producing up to 28 to 30 lbs of ice per 24 hours.",
      "Smart Indicator Panel: Features alerts that tell you exactly when the ice basket is full or when you need to add water.",
      "Removable Storage: Includes an internal, lift-out ice basket and a scoop for quick and hygienic serving.",
    ],
      specs:[
      ["Lot", "39"],
      ["Included", "Full set"],
      ["Price in origin country", "128$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
     {
    id: "Coffee-Table-vower",
    name: 'Coffee Table',
    code: "B0CF3XP4DC",
    category: "Furniture",
    condition: "New",
    estimate: "€80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Coffee-Table-vower.jpg",
    accent: "#dc2626",
    description:
      "This mid-century modern coffee table balances Japandi simplicity with functional storage, making it an ideal anchor piece for smaller living spaces. Its split two-tier layout pairs an open display compartment with a sleek, vertically slatted storage drawer.",
    details: [
      'Slatted Front Panel: Features a textured, vertical fluted aesthetic on the sliding drawer face.',
      'Warm Wood Effect: Wrapped in a light natural oak wood-grain paper finish for an organic feel.',
      "Sturdy Solid Legs: Supported by four outward-tapered solid pine wood legs for stability.",
      'Dual Storage Options: Includes one hidden drawer and one open side-cubby shelf.',
      'Compact Footprint: Measures exactly 100 cm L x 50 cm D x 43 cm H and weighs 22 kg',
    ],
      specs:[
      ["Lot", "40"],
      ["Included", "Full set"],
      ["Price in origin country", "€80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Costway-Cat-Litter-Box",
    name: 'Costway Cat Litter Box ',
    code: "73496852",
    category: "Furniture",
    condition: "New",
    estimate: "$70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/pv10002wh1_1_.jpg",
    accent: "#dc2626",
    description:
      "This sleek, dual-purpose credenza functions as a modern home accent while completely concealing your cat's litter pan out of sight. It features a separate entryway compartment designed to capture tracking granules before your pet steps back out onto your floors.",
    details: [
      '3-in-1 Design: Blends seamlessly into your home decor as a stylish side table, TV console, or hidden pet washroom.',
      'Smart Litter Control: An internal entry divider holds an included scratching pad to clean paws and catch stray litter particles.',
      "Sturdy Construction: Crafted from durable, glossy white engineered wood and supported by solid elevated legs for stability.",
      'User-Friendly Access: Equipped with double front doors and classic round knobs for quick cleaning and scooping.',
      'Ventilated Back Panel: Built with integrated rear air vents to maintain fresh airflow and control unpleasant odors.',
    ],
      specs:[
      ["Lot", "41"],
      ["Included", "Full set"],
      ["Price in origin country", "$70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Feandrea-Scratching-tree",
    name: 'Feandrea Cat Tree ',
    code: "Cat Tree ",
    category: "Furniture",
    condition: "New",
    estimate: "$60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Feandrea-Scratching-tree.webp",
    accent: "#dc2626",
    description:
      "The Feandrea Cat Tree is a sturdy, multi-level activity center designed to give indoor cats a dedicated space to climb, play, and rest. Combining cozy plush lounging surfaces with natural sisal scratching posts, it provides vertical enrichment while protecting household furniture.",
    details: [
      'Comfortable Lounging: Features a spacious, heavily cushioned top perch with raised edges and two enclosed dark condos for secure napping.',
      "Furniture Protection: Equipped with durable, fully-wrapped natural sisal scratching posts to satisfy your cat's natural scratching instincts",
      "Stable Design: Constructed with a thick, heavy baseboard and includes an anti-tip wall-anchor safety strap to prevent shaking or tipping",
      'Space-Saving Build: Optimizes vertical space to offer multiple tiers of activity without taking up excessive floor real estate ',
    ],
      specs:[
      ["Lot", "42"],
      ["Included", "Full set"],
      ["Price in origin country", "$60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "tornado-tv-1",
    name: 'TORNADO Smart LED TV 32 Inch HD"',
    code: "32EA6500E",
    category: "Electonics",
    condition: "New",
    estimate: "170$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/tornadotv32.webp",
    accent: "#dc2626",
    description:
      'The Tornado 32" TV is a highly affordable, compact television that delivers vibrant high-definition visuals alongside an integrated digital receiver to seamlessly save space. Manufactured by the Elaraby Group, it features options running Google TV or WebOS platforms to easily stream modern entertainment services.',
    details: [
      "Display Quality: Features standard HD resolution (1366 x 768) with clean 60Hz refresh rates for smooth local viewing.",
      "Audio Engineering: Equipped with standard dual 8W speakers paired with Dolby Digital Plus audio enhancement software.",
      "Smart Ecosystems: Available with full Wi-Fi connectivity, built-in Chromecast, and immediate access to Netflix, YouTube, and Shahid.",
      "Wired Connectivity: Includes multi-port setups featuring 2x HDMI inputs and 2x USB slots for media playback.",
      "Hardware Protection: Outfitted with specialized internal voltage regulators to protect sensitive components from electrical surges.",
    ],
      specs:[
      ["Lot", "43"],
      ["Included", "Full set"],
      ["Price in origin country", "170$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "3-in-1-air-cooler",
    name: 'Comfee 3-in-1 air cooler',
    code: "100390766",
    category: "Electonics",
    condition: "New",
    estimate: "€150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/3-in-1-aircooler.webp",
    accent: "#dc2626",
    description:
      'The Comfee AC120-19ARB is a sleek, energy-efficient 3-in-1 evaporative air cooler, fan, and humidifier that cools indoor spaces using water evaporation rather than a compressor. Standing at 105 cm tall, its slim tower design distributes a refreshing, adjustable breeze across any room without requiring an external exhaust hose.',
    details: [
      "Multifunctional Design: Combines a cooling fan, humidifier, and air purifier into one compact tower unit.",
      "Large Water Capacity: Features a 7-liter water tank that accepts ice cubes or frozen cooling packs for an enhanced chilling effect.",
      "Low Energy Consumption: Operates on just 65W of power, making it a highly cost-effective alternative to traditional air conditioning.",
      "Customizable Settings: Offers 4 different speed levels and 3 wind modes (Normal, Natural, and Night/Silent mode).",
      "Smart Controls: Includes a built-in 10-hour timer, a crisp LED display with touch sensors, and a convenient remote control.",
      "Wide Air Distribution: Equipped with a 60-degree automatic oscillation feature to distribute airflow evenly.",
    ],
      specs:[
      ["Lot", "44"],
      ["Included", "Full set"],
      ["Price in origin country", "€150"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "popcorn-machine",
    name: "Popcorn Machine 300W",
    code: "00063873",
    category: "Electronics",
    condition: "New",
    estimate: "75€",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/pcm300.webp",
    accent: "#dc2626",
    description:
      "The Stagecaptain PCM-300 is a compact 300-watt tabletop popcorn maker that brings an authentic 1950s retro cinema aesthetic straight to your countertop. Utilizing a traditional stainless steel rotating kettle, it quickly whips up theater-style popcorn with oil and seasoning for the ultimate movie night experience.",
    details: [
      "Classic Kettle Design: Suspended stainless steel pot heats and rotates automatically to prevent burning.",
      "Warm Interior Light: Built-in internal lamp illuminates the popping process and keeps snacks under a warm spotlight.",
      "Easy to Clean: Features a removable kettle and catch tray that unhook completely for quick hand-washing.",
      "Complete Starter Kit: Comes equipped with a removable serving tray and two dedicated measuring spoons for oil and kernels.",
    ],
      specs:[
      ["Lot", "45"],
      ["Included", "Full set"],
      ["Price in origin country", "75€"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
        {
    id: "tectake-gaming-chair",
    name: 'tectake Ergonomic Gamer Chair',
    code: "B085NW1SHH",
    category: "Furniture",
    condition: "New",
    estimate: "€140",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/tectake-gaming-chair.jpg",
    accent: "#dc2626",
    description:
      "This racing-style ergonomic office chair features a sleek black and red faux leather and mesh fabric exterior designed for comfort. It is equipped with a high backrest, integrated padded armrests, and a sturdy 360-degree swivel base perfect for long gaming or working sessions.",
    details: [
      'Material: Upholstered in durable polyurethane (PU) synthetic leather paired with breathable mesh panels.',
      'Ergonomics: Thickly padded seat cushion and backrest with integrated, contoured armrests for maximum comfort.',
      "Adjustability: Features a smooth pneumatic gas lift for seamless seat height modification.",
      'Mobility: Built on a stable five-star base with double-wheel casters suitable for multiple flooring types.',
      'Ventilation: Designed with dual open cut-outs in the headrest area to promote air circulation.',
    ],
      specs:[
      ["Lot", "46"],
      ["Included", "Full set"],
      ["Price in origin country", "€140"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Nightstand",
    name: 'WOLTU 2x Bedside Table, Narrow Nightstand',
    code: "W0ETT0232-2",
    category: "Furniture",
    condition: "New",
    estimate: "€55",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Nightstand.jpg",
    accent: "#dc2626",
    description:
      "The WOLTU W0ETT0232-2 (Black) is a sleek, modern set of two ultra-narrow nightstands. Finished in a matte black lacquer, it is specifically crafted for minimal floor footprints next to beds or sofas. It provides an even balance of easily accessible display space and concealed storage.",
    details: [
      'Compact Footprint: Takes up a minimal 30 x 30 cm of floor space, making it highly optimized for tight corners, narrow gaps, and smaller rooms.',
      "Dual Storage Zones: Configured with 1 open upper cube for frequently handled items (like phones or books) and 1 lower cabinet with a integrated door to keep personal clutter hidden away.",
      "Overall Dimensions: Each individual unit measures precisely 30 x 60 x 30 cm (Width x Height x Depth).",
      'High-Grade Material: Constructed from robust P2 MDF (engineered wood) certified for structural stability and shape retention.',
      'Sleek Finish: Coated in an eco-friendly black lacquer that creates a smooth, water-resistant surface that is easy to wipe clean.',
    ],
      specs:[
      ["Lot", "47"],
      ["Included", "Full set"],
      ["Price in origin country", "€55"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "VITALmaxx-Fitmaxx-5",
    name: 'VITALmaxx Fitmaxx 5 / Abmaxx 6 abdominal and core trainer',
    code: "02678200101",
    category: "Electronics",
    condition: "New",
    estimate: "110$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/vitalmaxx.jpg",
    accent: "#dc2626",
    description:
      "The VITALmaxx Fitmaxx 5 is a compact, foldable home fitness trainer that uses an upward gliding reverse-crunch motion to intensely target your entire core. By combining strength and endurance training, it simultaneously engages your abdomen, legs, glutes, arms, and back for an efficient full-body workout.",
    details: [
      'Resistance Levels: Features 5 adjustable difficulty levels that allow you to change the angle of the incline to match your fitness level.',
      'Digital Computer: Includes a battery-operated display that tracks time, repetition count, and estimated calories burned',
      "Space-Saving Design: Folds completely flat in seconds, making it incredibly easy to store under a bed or inside a closet",
      'Weight Capacity: Accommodates users with a maximum body weight of up to 100 kg (220 lbs).',
    ],
      specs:[
      ["Lot", "48"],
      ["Included", "Full set"],
      ["Price in origin country", "110$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "zit-food-processor",
    name: "Z.I.T Food Processor",
    code: "ZIT1002",
    category: "Electronics",
    condition: "New",
    estimate: "$90 to $150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/zitfoodprocessor.jpeg",
    accent: "#dc2626",
    description:
      "The Z.I.T Cuisine ZIT1002 is a high-powered, multifunctional food processor designed to streamline meal preparation. It handles a wide range of kitchen tasks, from heavy dough kneading to precise vegetable slicing, using its comprehensive set of specialized attachments.",
    details: [
      "Power Output: Robust 1500W maximum capacity motor to handle demanding ingredients.",
      "Primary Functions: Equipped for kneading, chopping, mashing, and citrus juicing.",
      "Specialized Discs: Includes dedicated discs for shredding/slicing, mashing, and cutting French fries.",
      "Control Interface: Front-facing multi-speed control dial with an integrated pulse option.",
      "Design: Sleek stainless steel base paired with a large capacity processing bowl and a wide-feed chute.",
    ],
      specs:[
      ["Lot", "49"],
      ["Included", "Full set"],
      ["Price in origin country", "$90 to $150"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "SONGMICS-mirror",
    name: 'SONGMICS Full Length Mirror',
    code: "LFM031B01",
    category: "Furniture",
    condition: "New",
    estimate: "€70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SONGMICS-mirror.jpg",
    accent: "#dc2626",
    description:
      "The SONGMICS LFM031B01 is an elegant, arched full-length floor mirror designed to bring modern style and a head-to-toe view to any room. Crafted with a sleek ink-black aluminum frame, it offers flexible placement options as a freestanding, leaning, or wall-mounted accent piece.",
    details: [
      'Dimensions: Measures 160 x 50 cm (approx. 63" x 20") for a complete full-body view.',
      "Materials: Features a rust-resistant aluminum alloy frame and high-strength tempered glass.",
      "Safety Design: Equipped with an explosion-proof film that prevents glass shards from scattering if broken.",
      'No Assembly: Arrives fully assembled and ready to use straight out of the box.',
      'Versatile Use: Ideal for bedrooms, walk-in closets, entryways, and living spaces.',
    ],
      specs:[
      ["Lot", "50"],
      ["Included", "Full set"],
      ["Price in origin country", "€70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "white-comod",
    name: 'Bedroom Comod',
    code: "B0FVDX25JG",
    category: "Furniture",
    condition: "New",
    estimate: "€70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/white-comod.jpg",
    accent: "#dc2626",
    description:
      "This white wooden 3-drawer chest serves as a compact bedside table or office storage unit featuring an integrated top-panel power outlet for easy device charging. Its minimal, handleless design maximizes storage efficiency in small spaces while maintaining a clean, modern aesthetic.",
    details: [
      'Storage capacity: Three spacious pull-out drawers for bedside or office organization.',
      'Built-in power: Top surface features an embedded power strip with traditional plug outlets and dual USB ports.',
      "Materials: Built from sturdy MDF wood panels with an easy-to-clean, water-resistant surface finish.",
      'Dimensions: Measures approximately 40 cm wide by 60 cm high, making it ideal for narrow gaps next to beds or desks.',
      'Would you like help with step-by-step assembly tips for this type of furniture, or do you want to see if it comes in other color options like black or oak?',
    ],
      specs:[
      ["Lot", "51"],
      ["Included", "Full set"],
      ["Price in origin country", "€70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "camping-table",
    name: 'Kesser Folding Camping Cabinet',
    code: "NP11742",
    category: "Furniture",
    condition: "New",
    estimate: "$45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/camping-table.jpg",
    accent: "#dc2626",
    description:
      "This Kesser Portable Camping Table serves as a lightweight outdoor cook station and pantry for road trips, picnics, and backyard barbecues. It combines a solid aluminum countertop with a zippered 6-shelf fabric organizer underneath to store your food and kitchenware safely away from insects and dust.",
    details: [
      'Storage Compartments: 6 removable interior shelves with a dual-zipper front door mesh roll-up',
      "Portability: Collapsible folding frame design that packs completely flat",
      'Included Accessory: Heavy-duty canvas carrying bag for easy transport',
      'Side Accents: Built-in side storage pockets for quick access to utensils and small items',
    ],
      specs:[
      ["Lot", "52"],
      ["Included", "Full set"],
      ["Price in origin country", "$45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "Mobile-Storage-Unit",
    name: 'Costway Mobile Storage Unit',
    code: "20547318",
    category: "Furniture",
    condition: "New",
    estimate: "$150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Mobile-Storage-Unit.jpg",
    accent: "#dc2626",
    description:
      "The Costway Mobile Storage Unit (Model 20547318) is a versatile, space-saving wooden storage cabinet designed to optimize home offices, craft rooms, or workspaces. It seamlessly combines a spacious side cupboard with a five-drawer chest on smooth-rolling wheels to keep your daily equipment and documents perfectly organized.",
    details: [
      'Flexible Storage: Features 5 compact sliding drawers and a large cabinet compartment equipped with a 3-position adjustable internal shelf.',
      'Effortless Mobility: Outfitted with 5 universal 360° swivel casters (including 2 front wheels with built-in brakes) to smoothly roll or lock into place.',
      "Heavy-Duty Build: Formed from durable, scratch-resistant engineered wood capable of supporting up to 220 lbs of total weight.",
      'Multi-Functional Top: Serves as an excellent printer stand or extended desk countertop with a spacious 31" x 16" flat surface.',
    ],
      specs:[
      ["Lot", "53"],
      ["Included", "Full set"],
      ["Price in origin country", "$150"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
         {
    id: "e-bike-2",
    name: 'SWFT Volt Electric Bike',
    code: "SWFT-VOLT-BLK",
    category: "Sports",
    condition: "New",
    estimate: "700$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SWFT-VOLT-01-BLK-FrontAngle-scaled.jpg",
    accent: "#dc2626",
    description:
      "The SWFT Volt Electric Bike is an affordable, single-speed commuter e-bike designed for efficient city riding. It combines a clean, classic road-bike aesthetic with a quiet 350W motor to easily power your daily trips.",
    details: [
      "Top Speed: 20 mph using either pedal assist or the thumb throttle.",
      "Battery Range: Up to 32 miles on a single charge with a clean, integrated frame battery.",
      "Lightweight Build: Weighs just 44.1 lbs, making it much easier to carry and maneuver than standard e-bikes.",
      "Rider Fit: Large 58 cm steel frame with a 32.5-inch standover height, best suited for taller riders.",
      "Tech Features: Built-in handlebar LCD screen to monitor speed, battery life, and assist levels.",
    ],
      specs:[
      ["Lot", "54"],
      ["Included", "Full set"],
      ["Price in origin country", "700$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },

   {
    id: "planetary-stand-mixer",
    name: "Z.I.T Planetary Stand Mixer",
    code: "ZIT1001",
    category: "Electronics",
    condition: "New",
    estimate: "$90 to $150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Planetary-Stand-Mixer.jpeg",
    accent: "#dc2626",
    description:
      "The Z.I.T cuisine Planetary Stand Mixer (ZIT1001) is an 1800W high-performance electric kitchen machine designed for heavy-duty household baking and kneading. Its planetary mixing action ensures even, thorough blending of ingredients inside its massive, family-sized stainless steel bowl.",
    details: [
      "Motor Power: 1800 Watts",
      "Bowl Capacity: 8.5 Liters",
      "Mixing Action: Planetary Beating Action",
      "Included Attachments: Y-Stirrer, Dough Hook, and Whisk",
      "Speed Management: Adjustable control knob",
    ],
      specs:[
      ["Lot", "55"],
      ["Included", "Full set"],
      ["Price in origin country", "$110 to $140"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "ultenic",
    name: "Ultenic D6s ",
    code: "Ultenic D6s",
    category: "Electronics",
    condition: "New",
    estimate: "$110 to $200",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/ultenic.jpg",
    accent: "#dc2626",
    description:
      "The Ultenic D6s is an entry-level, 3-in-1 robot vacuum and mop that sweeps, vacuums, and scrubs your floors simultaneously using high-speed sonic vibration technology. Its slim design, automatic carpet boost, and smart app integration make automated, hands-free home cleaning both highly efficient and budget-friendly.",
    details: [
      "SonicTrue Vibration Mopping: Scrubs stubborn floors up to 3,000 times per minute to easily lift dried stains and footprints.",
      "3000Pa Strong Suction: Delivers plenty of power to pull large crumbs, fine dust, and deeply embedded debris from all floor types.",
      "Carpet Auto Boost: Automatically detects carpets and instantly maximizes suction power to extract deeply embedded dirt and pet hair.",
      "Integrated 2-in-1 Tank: Features a unified 490ml dust bin and water tank system that allows for seamless wet and dry cleaning in a single pass.",
      "Smart App & Voice Controls: Connects with the Ultenic app, Amazon Alexa, or Google Assistant to let you customize cleaning schedules and modes hands-free.",
    ],
      specs:[
      ["Lot", "56"],
      ["Included", "Full set"],
      ["Price in origin country", "$110 to $200"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
   {
    
    id: "hopvision-cordless-vacuum-cleaner",
    name: "Hopvision Cordless Vacuum Cleaner",
    code: "JQ02",
    category: "Electronics",
    condition: "New",
    estimate: "€80 to €130",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/hopvision.jpg",
    accent: "#dc2626",
    description:
      "The HOPVISION JQ02 is a powerful 45 kPa cordless stick vacuum designed for effortless, deep-cleaning performance across carpets and hard floors. It features a unique 180° folding wand and an anti-tangle brush roll, making it incredibly easy to clean under furniture and manage heavy pet hair.",
    details: [
      "Extreme Suction Power: Driven by a high-efficiency motor delivering up to 45 kPa of deep-cleaning suction.",
      "Extended Battery Life: Provides up to 70 minutes of fade-free runtime on a single charge.",
      "Flexible Folding Wand: Bends up to 180 degrees to reach under couches and beds without requiring you to bend over.",
      "Anti-Tangle Brush Roll: Specialized V-shaped bristles prevent long hair and pet fur from wrapping around the roller.",
      "Large Dust Capacity: Equipped with an 800 ml double-cup dustbin that detaches and empties with a single click.",
      "Advanced HEPA Filtration: Captures 99.99% of microscopic dust particles and allergens to exhaust clean air.",
    ],
      specs:[
      ["Lot", "57"],
      ["Included", "Full set"],
      ["Price in origin country", "€80 to €130"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "jovs-venus-pro",
    name: "Jovs Venus Pro",
    code: "JV-111",
    category: "Electronics",
    condition: "New",
    estimate: "300$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/vernus.jpg",
    accent: "#dc2626",
    description:
      "The JOVS Venus Pro II is a high-performance, at-home IPL hair removal device that features an innovative rotating head for effortless full-body coverage. It combines targeted hair reduction with a specialized skin rejuvenation mode to deliver a smooth, clinical-grade treatment from the comfort of home.",
    details: [
      "Device Model: JR5-E (Venus Pro II) / JV-111 (Original Venus Pro)",
      "Extended Battery Life: Provides up to 70 minutes of fade-free runtime on a single charge.",
      "Technology: Intense Pulsed Light (IPL) with built-in sapphire ice-cooling comfort",
      "Modes: 6 target-area body modes paired with 6 adjustable energy intensity levels",
      "Dual Functionality: Dedicated hair removal settings and a separate Skin Rejuvenation (SR) anti-aging mode",
      "Design Feature: 330-degree rotating head designed to seamlessly navigate tricky curves and body contours",
    ],
      specs:[
      ["Lot", "58"],
      ["Included", "Full set"],
      ["Price in origin country", "300$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "cotsoco-shiatsu-3d-rotating-massager",
    name: "Cotsoco Shiatsu 3D Rotating Massager",
    code: "LMS-801",
    category: "Electronics",
    condition: "New",
    estimate: "30$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/neck-massager.jpg",
    accent: "#dc2626",
    description:
      "The Cotsoco Shiatsu 3D Rotating Massager with Heat is an electronic kneading massage shawl designed for targeted deep-tissue pain relief. It features an ergonomic U-shaped design that drapes comfortably over the shoulders, allowing you to use arm loops to manually adjust the positioning and pressure.",
    details: [
      "3D Kneading Nodes: Equipped with 16 rotating massage heads that mimic the bi-directional kneading of a real massage therapist. The nodes automatically change direction every minute.",
      "Soothing Heat Therapy: Provides safe infrared heat up to body temperature (113°F / 45°C) to loosen tight muscles and improve circulation.",
      "Customizable Intensity: Features 3 adjustable speed levels (low, medium, high) controlled directly via the integrated button panel.",
      "Built-In Safety: Includes an overheat protection sensor and a 15-minute automatic shut-off timer to prevent over-use or injury if you fall asleep.",
      "Dual Power & Portability: Comes with an AC wall adapter and a car charger cigarette lighter adapter, making it fully functional at home, in the office, or during travel. Note: Cordless/rechargeable variants are also available.",
    ],
      specs:[
      ["Lot", "59"],
      ["Included", "Full set"],
      ["Price in origin country", "€45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "BK-Barbara-Klein-Trampoline-2",
    name: 'BK Barbara Klein Trampoline',
    code: "472949",
    category: "Sports",
    condition: "New",
    estimate: "€160",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/BK-trampoline.jpg",
    accent: "#dc2626",
    description:
      "The BK by Barbara Klein Hexagon Fitness Trampoline is a premium cardio rebounding tool designed for joint-friendly, high-intensity home workouts. It features a spacious hexagonal jumping surface paired with an adjustable T-bar stability handle to support a wide range of fitness levels.",
    details: [
      'Low-Impact Rebounding: Utilizes a high-quality elastic bungee ring system instead of traditional steel springs to deliver a deep, quiet bounce that protects your joints.',
      'Adjustable T-Bar Handle: Features a central, height-adjustable stability bar that can be modified to match your height or removed entirely for open workouts.',
      "Compact Space-Saving Design: Equipped with foldable legs that allow the unit to be stowed away flat under a bed or inside a closet when not in use.",
      'Sturdy Hexagonal Frame: Designed with a 112 cm diameter hexagonal steel frame that provides superior stability and prevents the trampoline from tipping during side-to-side movements.',
    ],
      specs:[
      ["Lot", "60"],
      ["Included", "Full set"],
      ["Price in origin country", "€160"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "VenenWalker-PRO2",
    name: "VenenWalker® PRO2",
    code: "VenenWalker® PRO2",
    category: "Electronics",
    condition: "New",
    estimate: "€299",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/VenenWalkerPRO2.webp",
    accent: "#dc2626",
    description:
      "The VenenWalker Pro 2 is a certified medical pressotherapy device that uses intermittent pneumatic compression to improve blood circulation and reduce leg swelling. It mimics the body's natural muscle pump, making it highly effective for treating heavy legs, varicose veins, and lymphatic buildup.",
    details: [
      "3-Chamber System: Alternating air cushions inflate and deflate sequentially to massage the legs from the ankles up to the thighs.",
      "Adjustable Pressure: Allows customizable compression levels up to a maximum pressure of 120 mmHg.",
      "Integrated Timer: Features an automatic shut-off function with selectable session lengths from 0 to 60 minutes.",
      "Universal Leg Sleeves: Includes two double-walled boots with an 85 cm length and a maximum thigh circumference of 70 cm.",
      "Medical Certification: Registered as an official medical device for treating chronic venous insufficiency and lymphedema.",
    ],
      specs:[
      ["Lot", "61"],
      ["Included", "Full set"],
      ["Price in origin country", "€299"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "Hisense-QLED-E7-43",
    name: 'hisense QLED E7 43"',
    code: "43E7QTUK",
    category: "Electonics",
    condition: "New",
    estimate: "£260",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/TV43.webp",
    accent: "#dc2626",
    description:
      'The Hisense QLED E7 43" is a budget-friendly 4K Smart TV that uses Quantum Dot technology to deliver vibrant, rich colors. It provides a highly immersive viewing experience by supporting premium audiovisual formats like Dolby Vision and Dolby Atmos at an accessible price point.',
    details: [
      "Quantum Dot Color: Produces over a billion shades for highly vivid picture quality.",
      "4K Ultra HD: Delivers sharp, detailed images at a 60 Hz native refresh rate.",
      "Cinema Formats: Fully supports Dolby Vision, HDR10+, and HLG for enhanced contrast.",
      "Spatial Audio: Features Dolby Atmos and DTS Virtual:X for multi-dimensional sound.",
      "Smart Platform: Runs on the fast, user-friendly VIDAA OS with major streaming apps pre-installed.",
    ],
      specs:[
      ["Lot", "62"],
      ["Included", "Full set"],
      ["Price in origin country", "£260"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "WET-&-DRY-VACUUM-CLEANER-Parkside",
    name: 'WET & DRY VACUUM CLEANER Parkside',
    code: "PWD 20 C3",
    category: "Electonics",
    condition: "New",
    estimate: "€50",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/WETDRYVACUUMCLEANER.webp",
    accent: "#dc2626",
    description:
      'The PARKSIDE PWD 20 C3 is a powerful 1300W electric wet/dry vacuum cleaner designed to tackle liquid spills, heavy workshop debris, and dust. Featuring a durable 19.8-liter stainless steel container and a built-in blower function, it serves as a highly versatile cleaning tool for households, garages, and DIY projects.',
    details: [
      "Motor Power: 1300 W output providing 200 Air-watts of strong suction force.",
      "Tank Capacity: 19.8-liter rust-resistant stainless steel container with an easy-empty drain mechanism.",
      "Triple Functionality: Vacuums dry dust, sucks up liquid spills, and converts into a leaf or dust blower.",
      "Mobility & Reach: Equipped with 5 stable caster wheels, a 2-meter suction hose, and a 4-meter power cable.",
      "Onboard Storage: Integrated slots and brackets to keep all nozzles, pipes, and cables organized on the unit.",
    ],
      specs:[
      ["Lot", "63"],
      ["Included", "Full set"],
      ["Price in origin country", "€50"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "comfee-7000-btu",
    name: 'Comfee 7000 BTU',
    code: "MPPHA-07CRN7",
    category: "Electonics",
    condition: "New",
    estimate: "€170",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/comfee7000btu.webp",
    accent: "#dc2626",
    description:
      'The Comfee Smart Cool 7000-1 is a compact, mobile 3-in-1 air conditioner designed to efficiently cool, dehumidify, and ventilate smaller rooms up to 25 m². It features built-in Wi-Fi connectivity, allowing you to easily control your indoor climate via a smartphone app or voice assistants.',
    details: [
      "Cooling Power: 7,000 BTU/h (2.0 kW) capacity tailored for rooms up to 25 m² (70 m³).",
      "Smart Control: Compatible with a dedicated mobile app, Amazon Alexa, and Google Assistant.",
      "Auto-Evaporation: Slinger-up system recycles condensation to cool the compressor, eliminating manual tank emptying.",
      "Triple Functionality: Works as an air conditioner, a high-capacity dehumidifier (43L/day), and a 2-speed fan.",
      "Mobility & Setup: Equipped with 360° easy-roll casters and includes a standard flexible exhaust hose.",
    ],
      specs:[
      ["Lot", "64"],
      ["Included", "Full set"],
      ["Price in origin country", "€170"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "Parkside-Tool-Set",
    name: 'Parkside Tool Set',
    code: "HG12820",
    category: "Tools",
    condition: "New",
    estimate: "€80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/parkside-tool-set.jpg",
    accent: "#dc2626",
    description:
      'The Parkside PWBM A1 (HG12820) is a comprehensive, 92-piece industrial-style metal tool chest featuring an integrated 4V cordless screwdriver and a robust selection of hand tools. It is engineered for versatile home maintenance, automotive repairs, and DIY projects, organizing all essentials across two heavy-duty drawers.',
    details: [
      "Cordless Power: Integrated 4V lithium-ion screwdriver (1.5 Ah) with convenient USB-C charging.",
      "Premium Ratchet System: 72-tooth reversible ratchet paired with a wobble extension bar for tight 15° angles.",
      "High-Visibility Sockets: Spline sockets featuring matte finishes and crisp laser-marked sizing.",
      "Heavy-Duty Chest: Housed in a durable steel toolbox equipped with two smooth pull-out drawers.",
      "Total Weight: Approximately 8.95 kg including the metal case and all 92 contents.",
    ],
      specs:[
      ["Lot", "65"],
      ["Included", "Full set"],
      ["Price in origin country", "€80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
     {
    id: "crivit-cooler",
    name: 'Crivit Cooler',
    code: "CEK 29",
    category: "Electronics",
    condition: "New",
    estimate: "€60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/crivit-cooler.webp",
    accent: "#dc2626",
    description:
      "The Crivit Electric Cool Box is a budget-friendly, portable thermoelectric travel refrigerator sold seasonally through Lidl supermarkets. It is designed to switch seamlessly between a vehicle's 12V cigarette lighter and a standard 230V wall outlet, making it perfect for camping and road trips.",
    details: [
      "Capacity: Offers a generous 29-to-30-liter interior that can easily hold six upright 1.5L or 2L bottles.",
      "Dual Cooling & Heating: Cools food and drinks down to 20°C below ambient room temperature and heats up to 65°C",
      "Power & Performance: Features built-in connection cables, a rubber lid seal to reduce condensation, and an Eco-mode for ultra-quiet operation.",
      "Portability: Built with a durable outer shell and a locking carry handle that holds the lid securely closed while you are moving.",
    ],
      specs:[
      ["Lot", "66"],
      ["Included", "Full set"],
      ["Price in origin country", "€60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {  
    id: "PARKSIDE-lawnmower",
    name: 'Parkside Lawnmower',
    code: "PBEM39C2",
    category: "Tools",
    condition: "New",
    estimate: "€130",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/parksidelawnmower.jpg",
    accent: "#dc2626",
    description:
      "The Parkside PBRM 39 C2 is a lightweight, push-type petrol lawnmower designed for efficient cutting of residential lawns up to 600 m². Powered by a 131 cc 4-stroke engine, it combines cordless petrol freedom with an agile, easy-to-maneuver plastic chassis.",
    details: [
      "Cutting Width: 39 cm",
      "Engine Power: 2.4 kW (3.3 HP) at 3600 rpm",
      "Cutting Height: 30–66 mm, manually adjustable across 3 stages",
      "Grass Collection: 35-liter collection bag with a hard top",
      "Total Weight: 16.3 kg for effortless pushing",
      "Fuel Type: Regular unleaded gasoline (E10 compatible)",
    ],
      specs:[
      ["Lot", "67"],
      ["Included", "Full set"],
      ["Price in origin country", "€130"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },  
   {
    id: "Switch-On-mobile-air-cooler",
    name: 'Switch On mobile air cooler',
    code: "SWITCH ON SOML 330 A1",
    category: "Electronics",
    condition: "New",
    estimate: "€40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/cwitchonac.jpg",
    accent: "#dc2626",
    description:
      "This portable cooler lowers the temperature by drawing warm room air through an eco-friendly water evaporation filter to distribute a refreshing, chilled breeze. It serves as an energy-efficient, compact alternative to traditional air conditioning, designed primarily for target spot-cooling in individual rooms.",
    details: [
      "Eco-Friendly Evaporation: Uses natural water or ice-cube evaporation instead of harsh chemical refrigerants.",
      "Multi-Speed Ventilation: Offers 3 adjustable cooling speeds to control air circulation intensity.",
      "Directional Swing: Features motorized horizontal oscillation to evenly distribute airflow across spaces.",
      "Built-In Timer: Includes a programmable sleep timer (up to 15 hours) for automated energy savings.",
      "Low Power Draw: Consumes significantly less electricity than a standard compressor-based AC unit.",
    ],
      specs:[
      ["Lot", "68"],
      ["Included", "Full set"],
      ["Price in origin country", "€40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
      {
    id: "GourmetMaxx-12L",
    name: 'Digital Air Fryer 12L',
    code: "13606",
    category: "Electronics",
    condition: "New",
    estimate: "€110",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/gourmetmaxx12L.webp",
    accent: "#dc2626",
    description:
      "The GourmetMaxx 13606 is a 1700-watt digital air fryer oven featuring a large 12-liter capacity and versatile 9-in-1 multi-cooking functions. It combines an air fryer, rotary grill, and dehydrator into one countertop appliance, making it ideal for preparing family-sized meals efficiently.",
    details: [
      "Capacity: 12-liter XXL interior space suitable for up to 8 portions or three 23 cm pizzas.",
      "Power: 1700 watts of high-efficiency heating power for rapid cooking without preheating.",
      "Programs: 10 preset smart programs on a digital touchscreen for quick, one-touch cooking.",
      "Functions: 9 modes including air frying, roasting, baking, grilling, and food dehydrating.",
      "Accessories: Includes a rotisserie spit, rotating fries basket, 3 mesh grids, kebab skewers, and a drip tray.",
      "Safety: Built with a cool-touch housing, an insulated viewing window, and an automatic shut-off feature.",
    ],
      specs:[
      ["Lot", "69"],
      ["Included", "Full set"],
      ["Price in origin country", "€110"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "Ultimate-Speed",
    name: 'Ultimate Speed Car Battery Charger',
    code: "IAN 367512",
    category: "Electronics",
    condition: "New",
    estimate: "€40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/ultiatespeed.jpg",
    accent: "#dc2626",
    description:
      "The Ultimate Speed ULG 17 A1 is a 3-in-1 vehicle maintenance tool that serves as a smart microprocessor-controlled battery charger, a 75A engine jump-starter, and an alternator tester. It is designed to safely revive, maintain, and start cars and motorcycles equipped with 6V or 12V batteries.",
    details: [
      "Battery Compatibility: Supports lead-acid, gel, and AGM batteries from 8 Ah to 250 Ah.",
      "Smart Charging: Features automated charging paths with selectable currents of 2A, 6A, or 17A.",
      "Engine Booster: Delivers a short 75A current pulse to assist in cranking engines with weak batteries.",
      "Diagnostics: Includes an alternator test function to check the charging performance of your vehicle.",
      "Safety Suite: Equipped with automatic protection against reverse polarity, short circuits, and overload.",
    ],
      specs:[
      ["Lot", "70"],
      ["Included", "Full set"],
      ["Price in origin country", "€40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
       {
    id: "Mini-Fridge",
    name: 'Upstreman Mini Fridge',
    code: "Upstreman BR321",
    category: "Electronics",
    condition: "New",
    estimate: "170$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/upsterman.webp",
    accent: "#dc2626",
    description:
      "The Upstreman BR321 is a highly popular, energy-efficient 3.2 Cu.Ft. single-door mini fridge designed for dorm rooms, bedrooms, and offices. It delivers whisper-quiet cooling down to 32°F and features a flexible interior with adjustable glass shelves to maximize small spaces.",
    details: [
      "Storage Layout: Offers 2.9 Cu.Ft. of fresh food storage across two adjustable glass shelves, a bottom crisper drawer, and door bottle racks.",
      "Chiller Box: Features a small 0.3 Cu.Ft. internal freezer compartment suitable for ice trays, ice packs, or short-term frozen snacks.",
      "Ultra-Quiet Operation: Runs at a low noise level of 38 dB, ensuring it won't disturb your sleep or work.",
      "Temperature Adjustment: Equipped with a mechanical control dial offering 5 adjustable cooling levels ranging from 32°F to 50°F.",
      "Adaptable Design: Built with a reversible door and adjustable leveling feet to accommodate uneven flooring and different room configurations.",
    ],
      specs:[
      ["Lot", "71"],
      ["Included", "Full set"],
      ["Price in origin country", "170$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
        {
    id: "silvercrest-icemaker",
    name: 'Silvercrest Icemaker',
    code: "SEMD 130 A1",
    category: "Electronics",
    condition: "New",
    estimate: "€50",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/icemaker.webp",
    accent: "#dc2626",
    description:
      "This compact countertop machine quickly produces bullet-shaped ice cubes and dispenses both ice and chilled water without requiring a permanent plumbing connection. Operating at 130W, it features an intuitive control panel and a generous water tank, making it perfect for home bars, small kitchens, and office breakrooms.",
    details: [
      "Model Code: Silvercrest SEMD 130 A1 (Lidl IAN: 100375948)",
      "Power Rating: 130 Watts",
      "Water Reservoir: 2.0 Liters",
      "Production Speed: 9 ice cubes in 7 to 9 minutes",
      "Ice Options: Two selectable sizes (Small and Large)",
      "Key Features: Integrated ice/water dispenser, LCD control screen, and a removable drip tray",
    ],
      specs:[
      ["Lot", "72"],
      ["Included", "Full set"],
      ["Price in origin country", "€50"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
       {
    id: "cleanmaxx-vaccum-cleaner",
    name: 'Cleanmaxx Vacuum Cleaner',
    code: "15684",
    category: "Electronics",
    condition: "New",
    estimate: "€40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/hover.jpg",
    accent: "#dc2626",
    description:
      "The CLEANmaxx Bodenstaubsauger is a powerful yet highly compact 800-watt canister vacuum cleaner designed for efficient everyday home cleaning. It stands out for its environmentally friendly design, utilizing a reusable fabric dust bag that eliminates the ongoing cost of disposables.",
    details: [
      "Suction Performance: Delivers 15 kPa of suction power to easily lift dust and debris from floors.",
      "Power Rating: 130 Watts",
      "Eco-Friendly Bag: Includes a washable and reusable fabric dust bag with an easy-to-open clip for emptying.",
      "Operating Range: Equipped with a 5-meter power cable for comfortable room-to-room cleaning without constant outlet switching.",
      "Compact Storage: Built with a lightweight, space-saving frame and an integrated carrying handle for effortless transport.",
      "Would you like me to find the official instruction manual or look up which nozzle attachments come included in the box?",
    ],
      specs:[
      ["Lot", "73"],
      ["Included", "Full set"],
      ["Price in origin country", "€40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
       {
    id: "ceiling-fan",
    name: 'Ceiling Fan',
    code: "YM-QWABS001-52",
    category: "Electronics",
    condition: "New",
    estimate: "75$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/ceilingfan.jpg",
    accent: "#dc2626",
    description:
      "The YM-QWABS001-52 is a 52-inch modern, low-profile ceiling fan without a light designed for quiet and energy-efficient indoor or covered outdoor use. Operating on a reversible DC motor, this 3-blade minimalist fan delivers powerful airflow and comes equipped with a multi-functional wireless remote.",
    details: [
      "Motor: 35W energy-efficient reversible DC motor.",
      "Blades: 3 moisture-resistant ABS plastic blades",
      "Speed Settings: 6 adjustable wind speeds.",
      "Airflow Capacity: Delivers up to 5,500 CFM at a maximum 150 RPM.",
      "Noise Level: Whisper-quiet operation rated at 35 dB or lower.",
      "Timer Function: Built-in auto-shutoff timer for 1, 2, or 4 hours.",
      "Mounting Type: Low-profile, flush-mount design suitable for standard and covered outdoor ceilings.",
    ],
      specs:[
      ["Lot", "74"],
      ["Included", "Full set"],
      ["Price in origin country", "75$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
       {
    id: "merach-treadmil",
    name: 'Merach Treadmill',
    code: "MR-T25",
    category: "Sports",
    condition: "New",
    estimate: "£280",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/merach.webp",
    accent: "#dc2626",
    description:
      "The MERACH MR-T25 Walking Pad is a heavy-duty under-desk treadmill featuring a unique 12% automatic incline and an industry-leading 400 lbs weight capacity. It is designed specifically for low-impact, high-calorie burning directly from your home office or apartment setup.",
    details: [
      "Motor Power: 3.5 HP peak power brushless motor.",
      "Speed Range: Adjustable from 0.6 to 4.0 mph.",
      "Incline Range: 0% to 12% automatic motorized incline.",
      "Max Capacity: Supports user weights up to 400 lbs.",
      'Running Belt: 16.5" x 41.3" multi-layer shock-absorbing surface.',
      "Noise Level: Ultra-quiet operation under 25 decibels.",
      "Portability: Built-in transport wheels with zero installation required.",
    ],
      specs:[
      ["Lot", "75"],
      ["Included", "Full set"],
      ["Price in origin country", "£280"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
    {
    id: "Barbara-Klein-seated-compact-mini-stepper",
    name: 'Barbara Klein seated compact mini stepper',
    code: "481600",
    category: "Sports",
    condition: "New",
    estimate: "€65",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/B&K2.png",
    accent: "#dc2626",
    description:
      "The BK Workout Cube by Barbara Klein is a compact, multifunctional home exercise machine that combines a step machine with a swivel stool. It is designed to provide low-impact cardio, core conditioning, and lower-body toning entirely from a comfortable, seated position.",
    details: [
      "360° Swivel Seat: Features a thick, cushioned rotating top designed to engage your abdominal and core muscles during movement.",
      "Dual Foot Pedals: Equipped with textured, non-slip vertical stepping plates for a smooth hydraulic resistance workout.",
      "LCD Fitness Monitor: Displays essential real-time workout tracking data including steps, time elapsed, and estimated calories burned.",
      "Heavy-Duty Frame: Constructed with a supportive, black tubular steel outer handle system for safety and stability.",
      "Space-Saving Design: Designed with a small footprint that easily fits under tables or in small living areas when not in use.",
    ],
      specs:[
      ["Lot", "76"],
      ["Included", "Full set"],
      ["Price in origin country", "€65"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
        {
    id: "foot-massager",
    name: 'Nah-Vital Shiatsu Foot Massager',
    code: "04052926050139",
    category: "Electronics",
    condition: "New",
    estimate: "$90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/footmassager.jpg",
    accent: "#dc2626",
    description:
      "This electronic foot massager uses combined roller kneading and air compression to target pressure points across the entire foot. It is designed with built-in heat settings to gently warm cold feet and soothe tired muscles after long periods of standing.",
    details: [
      "Massage Functionality: Delivers simultaneous deep-rolling Shiatsu massage underneath the soles and air pressure on the upper feet.",
      "Adjustable Settings: Includes a digital control interface with multiple intensity levels, distinct massage modes, and an automated timer.",
      "Targeted Heat: Features a switchable heating function to enhance circulation and deeply relieve muscle tension.",
      "Hygiene Design: Equipped with fabric inner liners that easily unzip for regular washing.",
      'Universal Sizing: Built with a spacious interior cavity suitable for most standard adult shoe sizes.',
    ],
      specs:[
      ["Lot", "77"],
      ["Included", "Full set"],
      ["Price in origin country", "$90"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
  
         {
    id: "Laundry-Sorter",
    name: 'Tectake Laundry Sorter',
    code: "405164",
    category: "Furniture",
    condition: "New",
    estimate: "€45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/LaundrySorter.webp",
    accent: "#dc2626",
    description:
      "The tectake 405164 is a stylish industrial-style laundry sorter that combines a rustic wood-look top shelf with a sturdy dark steel frame. It features two sliding, removable fabric bags designed to help you effortlessly separate and organize your clothes while saving space.",
    details: [
      "Total Capacity: 92 Liters split across two separate 46-liter compartments.",
      "Dimensions: 74 cm Width × 34 cm Depth × 72 cm Height.",
      "Premium Materials: Built with a powder-coated alloy steel frame, a particle board top shelf, and water-resistant polyester bags.",
      "Pull-Out Sorter: Features two independent sliding compartments to easily separate light and dark clothing.",
      "Detachable Bags: Equipped with convenient Velcro fasteners for easy removal, transport, and cleaning.",
      "Adjustable Feet: Includes height-adjustable plastic feet to level the unit on uneven floors and protect against scratches.",
    ],
      specs:[
      ["Lot", "78"],
      ["Included", "Full set"],
      ["Price in origin country", "€45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
  
         {
    id: "Dining-Chair",
    name: 'Tectake Dining Chair',
    code: "401293",
    category: "Furniture",
    condition: "New",
    estimate: "£113",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/highChair.webp",
    accent: "#dc2626",
    description:
      "The tectake high-back dining chairs feature an elegant, minimalist look wrapped in premium black faux leather. Built with solid hardwood frames, this set of 2 provides a durable and comfortable seating solution for any dining space.",
    details: [
      "Material: Upholstered in soft, water-resistant synthetic leather that is highly durable and easy to wipe clean.",
      "Comfort: Thick, supportive foam padding and an ergonomic high backrest ensure lasting comfort during long meals.",
      "Frame & Legs: Sturdy solid wood legs with a dark, polished finish that provides excellent stability and strength.",
      "Floor Protection: Equipped with plastic caps on the feet to prevent scratches or scuffs on your floors.",
    ],
      specs:[
      ["Lot", "79"],
      ["Included", "Full set"],
      ["Price in origin country", "£113"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
   {
    id: "ultenic-1",
    name: "Ultenic D6s ",
    code: "Ultenic D6s",
    category: "Electronics",
    condition: "New",
    estimate: "$110 to $200",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/ultenic.jpg",
    accent: "#dc2626",
    description:
      "The Ultenic D6s is an entry-level, 3-in-1 robot vacuum and mop that sweeps, vacuums, and scrubs your floors simultaneously using high-speed sonic vibration technology. Its slim design, automatic carpet boost, and smart app integration make automated, hands-free home cleaning both highly efficient and budget-friendly.",
    details: [
      "SonicTrue Vibration Mopping: Scrubs stubborn floors up to 3,000 times per minute to easily lift dried stains and footprints.",
      "3000Pa Strong Suction: Delivers plenty of power to pull large crumbs, fine dust, and deeply embedded debris from all floor types.",
      "Carpet Auto Boost: Automatically detects carpets and instantly maximizes suction power to extract deeply embedded dirt and pet hair.",
      "Integrated 2-in-1 Tank: Features a unified 490ml dust bin and water tank system that allows for seamless wet and dry cleaning in a single pass.",
      "Smart App & Voice Controls: Connects with the Ultenic app, Amazon Alexa, or Google Assistant to let you customize cleaning schedules and modes hands-free.",
    ],
      specs:[
      ["Lot", "80"],
      ["Included", "Full set"],
      ["Price in origin country", "$110 to $200"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   
       {
    id: "SONGMICS-Makeup-Trolley",
    name: 'SONGMICS Makeup Trolley',
    code: "UKJHZ08BK",
    category: "Furniture",
    condition: "New",
    estimate: "£65",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SONGMICS-Makeup-Trolley.jpg",
    accent: "#dc2626",
    description:
      "The SONGMICS Rolling Trolley Cosmetic Case is a professional, multi-tier makeup train case designed for seamless storage and mobility. Featuring heavy-duty wheels and a telescopic handle, it offers a secure and organized way for beauty professionals to transport cosmetics, hair styling tools, and equipment.",
    details: [
      "Multi-tier storage: Separates into independent compartments or stacks together for customized storage capacity.",
      "Smooth mobility: Equipped with 360-degree swivel caster wheels and a sturdy retractable pull handle.",
      "Heavy-duty build: Constructed with an aluminum frame, reinforced corners, and an easy-to-clean ABS surface.",
      "Secure locking: Built-in cylinder locks with keys protect valuable cosmetics and equipment during travel.",
      "Versatile layout: Features adjustable dividers, fold-out trays, and deep bottom compartments for large items like hair dryers.",
    ],
      specs:[
      ["Lot", "81"],
      ["Included", "Full set"],
      ["Price in origin country", "£65"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "VASAGLE-Coat-Rack",
    name: 'VASAGLE Coat Rack',
    code: "UHSR40MB",
    category: "Furniture",
    condition: "New",
    estimate: "55$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/CoatRack.jpg",
    accent: "#dc2626",
    description:
      "The VASAGLE UHSR40MB is an industrial-style, 4-in-1 entryway hall tree featuring coat hooks, a hanging rod, a shoe bench, and storage shelves. This space-saving greige and black organizer maximizes vertical room to neatly declutter mudrooms, apartments, or small hallways.",
    details: [
      "4-in-1 Design: Combines a top hanging rail, 9 movable coat hooks, a seating bench, and a 2-tier shoe rack.",
      "Sturdy Build: Crafted with a rigid steel frame and durable particleboard panels.",
      "Weight Capacity: The bench supports up to 198 lbs (90 kg), while each hook handles up to 6.6 lbs (3 kg).",
      'Compact Footprint: Measures 13.3" D x 28.3" W x 72.1" H to easily fit narrow entryways.',
      "Enhanced Stability: Equipped with adjustable feet for uneven floors and an anti-tip kit for wall-mounting safety.",
    ],
      specs:[
      ["Lot", "82"],
      ["Included", "Full set"],
      ["Price in origin country", "55$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "Tectake-Armchair-Lucia-cream-Set-of-2",
    name: 'Tectake Armchair Lucia cream Set of 2',
    code: "405338",
    category: "Furniture",
    condition: "New",
    estimate: "£160",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Armchair-Lucia-cream.webp",
    accent: "#dc2626",
    description:
      "The tectake Lucia Swivel Velvet Armchair (Set of 2) blends elegant aesthetics with high-end functionality. This practical two-piece set features a luxurious cream velvet finish that serves as a striking focal point for any modern home.",
    details: [
      "Comfort & Padding: Outfitted with an extra-thick high-density foam padding and a continuous wraparound backrest that supports both the back and arms.",
      "Luxury Finish: Covered in ultra-soft, fine polyester fabric with a sophisticated diamond-quilted pattern.",
      '180° Swivel Function: Built with a smooth 180-degree swivel mechanism and an automatic return spring that aligns the chair back to its starting position.',
      'Base & Stability: Grounded by slim, flared powder-coated steel legs that easily support up to 120 kg (264 lbs) per chair.',
      'Floor Protection: Equipped with non-slip plastic caps on the feet to prevent scratches on your floors.',
    ],
      specs:[
      ["Lot", "83"],
      ["Included", "Full set"],
      ["Price in origin country", "£160"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "HLDIRECT-High-Back-Gaming-Chair",
    name: 'HLDIRECT High Back Gaming Chair',
    code: "04-DY",
    category: "Furniture",
    condition: "New",
    estimate: "90$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/HLDIRECT-High-Back-Gaming-Chair.jpg",
    accent: "#dc2626",
    description:
      "This ergonomic racing-style gaming chair features a supportive bucket seat design wrapped in premium dark green and matte black faux leather. It is engineered with a mattress-style pocket spring seat cushion to deliver balanced weight distribution and long-lasting structural comfort.",
    details: [
      "Custom Ergonomics: Equipped with a 29.5-inch high backrest, an adjustable memory latex headrest, and a lumbar support cushion.",
      "Built-in Massage: Integrates dual-vibration massage nodes inside the lower lumbar cushion that power easily via a standard USB connection.",
      'Flexible Recline: Supports smooth backrest tilt adjustments ranging from 90° to 135° with a secure position lock mechanism.',
      "Synchronized Armrests: Features soft-padded linkage armrests that move automatically in sync with the backrest to keep forearms supported at all angles.",
      "Heavy-Duty Build: Crafted using an SGS-certified explosion-proof gas lift and a durable star base supporting a maximum weight of 300 lbs (136 kg).",
      "Extendable Footrest: Includes a padded, retractable slide-out footrest that tucks neatly beneath the seat cushion when not in use.",
    ],
      specs:[
      ["Lot", "84"],
      ["Included", "Full set"],
      ["Price in origin country", "90$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "Tectake-Garden-Chairs",
    name: 'Tectake Garden Chairs',
    code: "404552",
    category: "Furniture",
    condition: "New",
    estimate: "£120",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/gardenchairs.webp",
    accent: "#dc2626",
    description:
      "The tectake Nantes Polyrattan Garden Chair is a durable, weather-resistant outdoor dining armchair featuring a textured, multicolored weave. Designed for longevity and comfort, it blends seamlessly into patios, balconies, or garden settings.",
    details: [
      "Material: Built with high-quality, UV-resistant polyrattan woven around a robust, rust-resistant steel frame.",
      "Cushioning: Equipped with water-repellent upholstered seat pads that feature removable, washable covers.",
      "Floor Protection: Outfitted with protective, floor-friendly plastic caps on the base of the metal legs.",
    ],
      specs:[
      ["Lot", "85"],
      ["Included", "Full set"],
      ["Price in origin country", "£120"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "VASAGLE-Lift-Top-Coffee-Table",
    name: 'VASAGLE Coffee Table',
    code: "LCT205K50",
    category: "Furniture",
    condition: "New",
    estimate: "140$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/cofeetable.jpg",
    accent: "#dc2626",
    description:
      "This VASAGLE lift-top coffee table features a dual-section split surface that seamlessly adjusts from a standard coffee table into a comfortable elevated workspace. Built with a rustic camel-brown engineered wood top and a rigid matte-black steel frame, it blends modern industrial style with functional hidden storage.",
    details: [
      "Split Lift-Top Mechanism: Smoothly raises a portion of the tabletop forward to bring your laptop closer while leaving a section fixed for drinks or decor.",
      "Dual Storage Options: Features a spacious hidden compartment beneath the lifting surface alongside open lower storage shelves to keep items organized and accessible.",
      "Heavy-Duty Construction: Utilizes robust steel lifting hinges and structural X-shaped side reinforcement bars to guarantee reliable stability when extended.",
      "Floor Protection: Equipped with adjustable leveling feet that balance the table on uneven surfaces and protect your flooring from scuffs.",
    ],
      specs:[
      ["Lot", "86"],
      ["Included", "Full set"],
      ["Price in origin country", "140$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Walker",
    name: 'Walker',
    code: "RLT03GRE",
    category: "Furniture",
    condition: "New",
    estimate: "130$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/walker.webp",
    accent: "#dc2626",
    description:
      "The SectorCare ComfortRoll Rollator Walker provides lightweight, comfortable, and reliable support for everyday mobility. With a supportive backrest, smooth shock-absorbing wheels, adjustable handles, and a compact folding design, it is ideal for convenient indoor and outdoor use.",
    details: [
      "Lightweight and durable aluminium frame",
      "Comfortable wraparound backrest for added support",
      "8-inch shock-absorbing solid wheels",
      "360° rotatable front wheels for easy manoeuvrability",
      "Six-level adjustable handle height: 82.5–94.5 cm",
      "Easy one-click folding system for compact storage and transport",
      "Foot-operated pedal for easier obstacle and kerb clearance",
    ],
      specs:[
      ["Lot", "87"],
      ["Included", "Full set"],
      ["Price in origin country", "130$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Barbara-Klein-Mini-Electric-Elliptical",
    name: 'Barbara Klein Mini Electric Elliptical',
    code: " JF-J-10",
    category: "Sports",
    condition: "New",
    estimate: "$179",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/B&K.png",
    accent: "#dc2626",
    description:
      "The Barbara Klein Mini Electric Elliptical Trainer is a compact, low-impact exercise machine designed for passive or active leg workouts while sitting down. It is ideal for senior mobility, physical therapy rehab, or burning light calories under an office desk.",
    details: [
      "Dual-Mode Operation: Functions as an automated electric pedal assist or manual resistance trainer.",
      "12 Speed Levels: Features adjustable motorized pacing to accommodate various fitness and mobility levels.",
      "Remote Controlled: Includes a wireless remote control to seamlessly alter speed and direction without bending over.",
      "Bi-Directional Pedaling: Supports both forward and reverse movement to target different leg muscle groups.",
      "Digital Display: Built-in LCD monitor tracks training data including time, speed, distance, and calories.",
    ],
      specs:[
      ["Lot", "88"],
      ["Included", "Full set"],
      ["Price in origin country", "$179"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
 
   {
    id: "SONGMICS-Dual-Step-TrashCan",
    name: 'SONGMICS Dual Step Trash Can',
    code: "B34UKLTB60WT",
    category: "Furniture",
    condition: "New",
    estimate: "€160",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/B34UKLTB60WT.jpg",
    accent: "#dc2626",
    description:
      "This SONGMICS Dual Compartment Step Trash Can features a sleek, space-saving design with independent foot pedals for hygienic, hands-free operation. Its dual internal buckets make it effortless to sort everyday household trash from recyclable materials.",
    details: [
      "Dual Separation: Features two individual, removable plastic inner buckets with integrated metal handles for clean emptying.",
      "Quiet Closure: Designed with a soft-close mechanism so the lids shut gently and silently without slamming.",
      "Odor & Seal Control: Form-fitting airtight lids keep unappealing waste odors securely trapped inside the unit.",
      "Durable Build: Built with a rigid steel exterior shell and heavy-duty step pedals engineered for long-term daily use.",
    ],
      specs:[
      ["Lot", "89"],
      ["Included", "Full set"],
      ["Price in origin country", "€160"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
   
  
   {
    id: "HLDIRECT-High-Back-Gaming-Chair-green",
    name: 'HLDIRECT High Back Gaming Chair',
    code: "04-DY",
    category: "Furniture",
    condition: "New",
    estimate: "90$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/HLDIRECT-Ergonomic-High-Back-Gaming-Chair.jpg",
    accent: "#dc2626",
    description:
      "This ergonomic racing-style gaming chair features a striking red and white synthetic leather design complete with integrated neck and lumbar support pillows. Built for maximum comfort, it includes a heavy-duty star base on rolling casters alongside a convenient retractable footrest for relaxation.",
    details: [
      "Enhanced Seating Comfort: Built-in high-density molded padding with integrated pocket spring coils provides long-lasting cushioning, support, and breathability.",
      "Flexible Reclining Adjustments: The backrest adapts to your needs with an adjustable recline angle ranging smoothly from 90° to 135°.",
      'Retractable Footrest: Features a pull-out padded leg support that slides neatly beneath the seat when not in use.',
      "Premium Upholstery Materials: Finished in soft, water-resistant PU synthetic leather that allows for simple wipe-clean maintenance.",
      "Full Body Support: High-back structural architecture provides continuous ergonomic alignment across your neck, shoulders, and spine.",
    ],
      specs:[
      ["Lot", "90"],
      ["Included", "Full set"],
      ["Price in origin country", "90$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "SONGMICS-3-Compartment",
    name: 'SONGMICS 3-Compartment Kitchen Rubbish Bin',
    code: "UKLB35TB54BK",
    category: "Furniture",
    condition: "New",
    estimate: "£120",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SONGMICS-3-Compartment.jpg",
    accent: "#dc2626",
    description:
      "The highlighted item is a Songmics 3-Compartment Pedal Waste Bin, designed for efficient trash and recycling separation. It features a sleek matte black steel exterior with three independent foot pedals for hands-free operation.",
    details: [
      "Capacity: Total of 54 liters split into three 18-liter inner buckets.",
      "Material: Heavy-duty stainless steel body with durable plastic inner liners.",
      'Functionality: Features soft-close lids and individual foot pedals for hygienic, hands-free waste disposal.',
      "Maintenance: Finished with an anti-fingerprint coating that easily wipes clean with a damp cloth.",
    ],
      specs:[
      ["Lot", "91"],
      ["Included", "Full set"],
      ["Price in origin country", "£120"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "AINPECCA-Velvet-Dining-Chairs",
    name: 'AINPECCA Velvet Dining Chairs',
    code: "sr2407263939346512",
    category: "Furniture",
    condition: "New",
    estimate: "£80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/AINPECCA.webp",
    accent: "#dc2626",
    description:
      "The AINPECCA Velvet Dining Chairs (Set of 2) combine contemporary luxury with a comfortable, ergonomic tub silhouette. They feature soft-touch diamond button tufting and minimalist black metal legs, making them an elegant fit for modern dining rooms, home offices, or living areas.",
    details: [
      "Premium Upholstery: Covered in dense, breathable velvet fabric that offers a soft texture and long-lasting durability.",
      "Ergonomic Design: Features a curved tub seat shape with integrated armrests and supportive back padding to ensure maximum seating comfort.",
      'Sturdy Base: Supported by solid black metal legs engineered with anti-scratch feet pads to protect your floors.',
      'Classic Details: Finished with deep, diamond-patterned button tufting along the inner backrest for a sophisticated aesthetic texture.',
    ],
      specs:[
      ["Lot", "92"],
      ["Included", "Full set"],
      ["Price in origin country", "£80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "BK-Barbara-Klein-Trampoline-1",
    name: 'BK Barbara Klein Trampoline',
    code: "472949",
    category: "Sports",
    condition: "New",
    estimate: "€160",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/BK-trampoline.jpg",
    accent: "#dc2626",
    description:
      "The BK by Barbara Klein Hexagon Fitness Trampoline is a premium cardio rebounding tool designed for joint-friendly, high-intensity home workouts. It features a spacious hexagonal jumping surface paired with an adjustable T-bar stability handle to support a wide range of fitness levels.",
    details: [
      'Low-Impact Rebounding: Utilizes a high-quality elastic bungee ring system instead of traditional steel springs to deliver a deep, quiet bounce that protects your joints.',
      'Adjustable T-Bar Handle: Features a central, height-adjustable stability bar that can be modified to match your height or removed entirely for open workouts.',
      "Compact Space-Saving Design: Equipped with foldable legs that allow the unit to be stowed away flat under a bed or inside a closet when not in use.",
      'Sturdy Hexagonal Frame: Designed with a 112 cm diameter hexagonal steel frame that provides superior stability and prevents the trampoline from tipping during side-to-side movements.',
    ],
      specs:[
      ["Lot", "93"],
      ["Included", "Full set"],
      ["Price in origin country", "€160"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
 
  
  {
    id: "SONGMICS-Jewelry-Organizers",
    name: 'SONGMICS Jewelry Organizers Cabinet with Mirror',
    code: "UJJC007W01",
    category: "Furniture",
    condition: "New",
    estimate: "$190",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Jewelry-Organizers.jpg",
    accent: "#dc2626",
    description:
      "The SONGMICS jewelry organizer cabinet with mirror is a multi-functional storage solution that combines a full-length dressing mirror with a high-capacity secure armoire. It optimizes your bedroom space by neatly organizing hundreds of accessories behind a sleek, protective glass door.",
    details: [
      "Massive Storage Capacity: Features specialized slots, hooks, and drawers to hold up to 100+ earrings, 90+ rings, and 30+ necklaces without tangling.",
      "Full-Length Glass Mirror: Equipped with a premium, distortion-free exterior mirror for head-to-toe viewing while dressing.",
      'Lockable Security: Includes a built-in lock with two keys to protect precious jewelry from dust, pets, and children.',
      'Integrated LED Lighting: Activates automatically when the cabinet door opens to help you easily locate matching pieces in dim light.',
      'Flexible Mounting Options: Designed to be safely mounted on a wall or hung over a standard bedroom door using the included heavy-duty hooks.',
      'Protective Velvet Lining: Covered internally with thick, soft velvet fabric to prevent delicate metals and stones from scratching.',
    ],
      specs:[
      ["Lot", "94"],
      ["Included", "Full set"],
      ["Price in origin country", "$190"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Coocaa-43-inch-Roku-TV",
    name: 'Coocaa 43-inch Roku TV ',
    code: "43CRUG50 ",
    category: "Electronics",
    condition: "New",
    estimate: "£165",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Coocaa-43-inch-Roku-TV.webp",
    accent: "#dc2626",
    description:
      "This Nakabayashi CNN-008BK is an ergonomic mesh office chair designed with an adjustable lumbar support system to minimize lower back fatigue. It features spacesaving, flip-up padded armrests and a high-density urethane foam cushion for reliable daily working comfort.",
    details: [
      'Lumbar Support: Adjusts up and down by 2.4 inches (6 cm) to match the natural curvature of your spine.',
      'Flip-Up Armrests: Rotate upward smoothly so you can tuck the chair completely under your desk when not in use.',
      "Seat Cushion: Features a thick 2.8-inch (70 mm) molded urethane foam pad that prevents bottoming out.",
      'Materials: Constructed with a high-tension, breathable polyester mesh backrest and a durable nylon base.',
      'Dimensions: Measures 72.5 cm x 67 cm x 100–108 cm with an adjustable seat height range of 44.5–52.5 cm.',
      'Weight Capacity: Supports a maximum user weight of up to 220.5 lbs (100 kg).',
    ],
      specs:[
      ["Lot", "95"],
      ["Included", "Full set"],
      ["Price in origin country", "£165"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },

    {
    id: "Advwin-Armless-Cross-Legged-Desk-Chair",
    name: 'Advwin Armless Cross-Legged Desk Chair',
    code: "B0FBR2353P",
    category: "Furniture",
    condition: "New",
    estimate: "$110",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Advwin Armless Cross-Legged.jpg",
    accent: "#dc2626",
    description:
      "This Advwin Armless Desk Chair features an extra-wide, heavily cushioned seat designed specifically for comfortably sitting cross-legged. It blends minimalist styling with ergonomic support, making it an ideal multi-functional addition to a home office or bedroom vanity.",
    details: [
      "Wide U-Shaped Base: Features a spacious 58 cm seat width lined with 8 cm high-density foam.",
      "Ergonomic Adjustment: Offers 360-degree swivel, height adjustability (50 cm to 63 cm), and a tilt/rocking range from 105° to 120°.",
      'Heavy-Duty Build: Supports a maximum weight capacity of 136 kg via a sturdy 5-star black star base.',
      'Premium Materials: Fabricated from skin-friendly, breathable grey linen upholstery paired with smooth-rolling caster wheels.',
    ],
      specs:[
      ["Lot", "96"],
      ["Included", "Full set"],
      ["Price in origin country", "$110"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "SONGMICS-Parasol",
    name: 'SONGMICS parasol',
    code: "GPU202G01",
    category: "Furniture",
    condition: "New",
    estimate: "$50",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SONGMICS-parasol.jpg",
    accent: "#dc2626",
    description:
      "This SONGMICS market patio umbrella features a charcoal-gray canopy supported by a robust metal frame and an integrated manual crank for smooth operation. Designed for residential outdoor spaces, it provides reliable shade and weather resistance over dining tables or standalone seating arrangements.",
    details: [
      "Sun Protection: Engineered with a high-density fabric canopy offering up to UPF 50+ UV shielding.",
      "Crank System: Equipped with an easy-to-use mechanical hand crank built directly into the pole for effortless opening and closing.",
      'Sturdy Frame: Built with high-strength, powder-coated metal ribs that resist rusting and wind distortion.',
      'Ventilated Canopy: Features a single wind vent at the apex to enhance stability by letting air pass through freely.',
      'Standard Fit: Uses a standard center pole diameter compatible with most patio tables and base weights.',
    ],
      specs:[
      ["Lot", "97"],
      ["Included", "Full set"],
      ["Price in origin country", "$50"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Parkside-Performance-12V-Cordless-Rotary-Tool",
    name: 'Parkside Performance 12V Cordless Rotary Tool',
    code: "PPFBSA 12 A1",
    category: "Tools",
    condition: "New",
    estimate: "€70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/PPFBSA12A1.jpg",
    accent: "#dc2626",
    description:
      "This Parkside Performance 12V Cordless Rotary Tool Set is a versatile, high-precision multi-tool powered by an efficient brushless motor for hobby, crafting, and DIY projects. It comes packaged as a comprehensive starter kit complete with various specialized cutting guides, a battery, a charger, and a rugged aluminum carrying case.",
    details: [
      "Brushless Motor Technology: Delivers higher efficiency, a longer service life, and less wear compared to standard brushed motors.",
      "Digital Speed Control: Features an onboard display screen and control buttons to easily adjust and monitor operational speeds from 5,000 to 32,000 RPM.",
      "12V Lithium-Ion Battery System: Uses a removable 12V battery compatible with other tools in the Parkside 12V Team family.",
      'Premium Guide Attachments: Includes a parallel rip fence, a router/plunge depth stop, and 45°/90° angle tables for highly accurate cutting, milling, and grinding.',
    ],
      specs:[
      ["Lot", "98"],
      ["Included", "Full set"],
      ["Price in origin country", "€70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
 
     {
    id: "sun-Lounger-Chair",
    name: 'Sun Lounger Chair',
    code: "B0B7L8BM58",
    category: "Furniture",
    condition: "New",
    estimate: "$60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/sunLoungerChair.jpg",
    accent: "#dc2626",
    description:
      "This heavy-duty zero gravity lounge chair features an adjustable reclining frame and a supportive, detachable headrest pillow. It is built with weather-resistant materials, making it ideal for comfortable relaxation both indoors and outdoors.",
    details: [
      "Weight Capacity: Supports up to 200 kg (approx. 440 lbs).",
      "Materials: Features a breathable, waterproof mesh fabric on a durable alloy steel frame.",
      'Adjustable Recline: Includes multiple lockable angles along with a built-in footrest mechanism.',
      'Portability: Folds down completely flat for compact storage and easy transport.',
    ],
      specs:[
      ["Lot", "99"],
      ["Included", "Full set"],
      ["Price in origin country", "$60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   
   
      {
    id: "Ladder-DAVDING",
    name: 'Ladder DAVDING',
    code: "2412761",
    category: "Furniture",
    condition: "New",
    estimate: "$35",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Ladder-DAVDING.webp",
    accent: "#dc2626",
    description:
      "The JYSK DAVDING 2-step ladder is a compact and foldable household stepping stool designed for safe, easy reach around the home. It features wide, slip-resistant steps and a sturdy frame that collapses flat to easily fit into tight storage spaces.",
    details: [
      "Height: 78 cm",
      "Step Count: 2 steps",
      'Weight Capacity: Up to 150 kg',
      'Material: Durable steel and plastic',
    ],
      specs:[
      ["Lot", "100"],
      ["Included", "Full set"],
      ["Price in origin country", "$35"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },

   
     {
    id: "3-in-1-Exercise-Bike-with-Adjustable=-Resistance",
    name: 'FlexiSpot 3-in-1 Exercise Bike with Adjustable Resistance (V9)',
    code: "V9",
    category: "Sports",
    condition: "New",
    estimate: "£399",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/flexispot.jpg",
    accent: "#dc2626",
    description:
      "The FlexiSpot Deskcise Pro V9 is an innovative fitness workstation that combines a height-adjustable standing desk with a smooth, magnetic exercise bike. It allows you to peddle effortlessly to stay active, burn calories, and boost productivity while working from your home or office.",
    details: [
      "Integrated Desktop: Features a spacious, fully adjustable surface that moves forward, backward, up, and down to hold your laptop or tablet comfortably.",
      "8-Level Magnetic Resistance: Features a turning dial that lets you easily adjust the workout intensity from a light, casual stroll to a more intense track workout.",
      "Quiet & Smooth Pedaling: Equipped with a whisper-quiet, premium flywheel mechanism that won't disrupt your focus, phone calls, or video meetings.",
      'Locking Caster Wheels: Moves effortlessly on four durable caster wheels that automatically lock into place when you sit down and apply pressure.',
    ],
      specs:[
      ["Lot", "101"],
      ["Included", "Full set"],
      ["Price in origin country", "£399"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "LEBENLANG-2-in-1-Electric-Stand-Grill",
    name: 'LEBENLANG 2-in-1 Electric Stand Grill',
    code: "LBL9977",
    category: "Electronics",
    condition: "New",
    estimate: "€60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/LEBENLANG 2-in-1-Electric-Stand-Grill.png",
    accent: "#dc2626",
    description:
      "This LEBENLANG 2-in-1 Electric Grill features a versatile, space-saving design with a removable stand that transitions seamlessly between an outdoor balcony BBQ and a compact indoor tabletop cooker. Equipped with a 2000-watt heating system and dual folding side trays, it delivers fast, efficient cooking and effortless meal prep for small spaces.",
    details: [
      "Dual-Function Design: Functions both as a freestanding balcony/patio grill and a compact indoor tabletop grill.",
      "Efficient Power: Delivers 2000 W of power for rapid heating and consistent cooking temperatures.",
      "Integrated Storage: Includes two folding side shelves for food preparation and a lower rack for accessory storage.",
      'Temperature Control: Features a front-facing adjustable thermostat dial for precise heat regulation.',
    ],
      specs:[
      ["Lot", "102"],
      ["Included", "Full set"],
      ["Price in origin country", "€60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "parkside-set",
    name: 'Parkside Performance 12V Cordless Drill Driver and Impact Screwdriver Starter',
    code: "B0FZFKKF31",
    category: "Tools",
    condition: "New",
    estimate: "€90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/parkside-set.jpg",
    accent: "#dc2626",
    description:
      "The PARKSIDE PERFORMANCE 12V Cordless Starter Set delivers professional-grade power in a compact layout, bundling a high-efficiency brushless drill driver with a heavy-duty impact screwdriver. Complete with two 12V lithium-ion batteries and a charger, this combo provides up to 25% higher torque and 10 times longer motor life than standard entry-level models.",
    details: [
      "Dual Tool Powerhouse: Combines a 2-speed drill driver (PBSPA 12 E4) for precise drilling and a high-torque impact driver (PDSSAP 12 B1) for fastening dense materials.",
      "Brushless Motor Tech: Features advanced brushless engineering that eliminates internal friction, extending overall runtime by 20% and preventing motor wear.",
      "Massive Torque Levels: Offers versatile speed controls up to a max torque of 35 Nm on the drill, and a powerful 170 Nm on the impact driver for heavy-duty screws.",
      'Full Starter System: Includes two 12V (2.0 Ah) rechargeable batteries compatible with the entire "Parkside X 12V Team" ecosystem, a fast charger, and a canvas carry bag.',
    ],
      specs:[
      ["Lot", "103"],
      ["Included", "Full set"],
      ["Price in origin country", "€90"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   
   
   
      {
    id: "Patio-Umbrella",
    name: 'Costway Patio Umbrella',
    code: "13291167",
    category: "Furniture",
    condition: "New",
    estimate: "70$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/13291167.jpg",
    accent: "#dc2626",
    description:
      "The 9 FT Patio Market Umbrella features an eco-friendly natural bamboo pole and 8 sturdy ribs that offer exceptional wind resistance. Its weather-resistant canopy provides perfect shade for 48-inch to 54-inch outdoor tables, blending classic style with durable performance.",
    details: [
      "Natural Bamboo Frame: Built with a renewable, flexible bamboo pole and 8 heavy-duty ribs for a rustic, coastal aesthetic.",
      "Optimal Shade Coverage: The 9-foot diameter comfortably shelters 4 to 6 patio chairs or an outdoor lounge set.",
      "Manual Pulley System: Utilizes a classic cord-and-pulley lift mechanisms with a metal safety pin to lock the canopy securely in place.",
      "Weatherproof Fabric: Made from fade-resistant, water-repellent polyester featuring a top wind vent for maximum airflow and stability.",
    ],
      specs:[
      ["Lot", "104"],
      ["Included", "Full set"],
      ["Price in origin country", "70$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },   
    {
    id: "Smart-Cool-7000-3-2",
    name: 'Comfee Smart Cool 7000-3 ',
    code: "Smart Cool 7000-3",
    category: "Electronics",
    condition: "New",
    estimate: "$170",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/comfee7000-3.jpeg",
    accent: "#dc2626",
    description:
      "The Comfee Smart Cool 7000-3 is a compact, 3-in-1 portable air conditioner that delivers efficient cooling, ventilation, and dehumidification for spaces up to 25 m². It features integrated Wi-Fi control, allowing you to effortlessly manage your indoor climate via a smartphone app or voice assistants like Alexa and Google Home.",
    details: [
      'Performance capacity: 7,000 BTU/h (2.0 kW) cooling power.',
      "Smart connectivity: App and voice control capabilities.",
      "Eco-friendly refrigerant: Uses natural R290 cooling agent.",
      'Protective coating: Golden Fin tech prevents bacteria/corrosion.',
      'Energy rating: Efficient Class A power consumption.',
      'Portability: Built-in wheels for easy room-to-room movement.',
    ],
      specs:[
      ["Lot", "105"],
      ["Included", "Full set"],
      ["Price in origin country", "$170"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "ultenic-2",
    name: "Ultenic D6s ",
    code: "Ultenic D6s",
    category: "Electronics",
    condition: "New",
    estimate: "$110 to $200",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/ultenic.jpg",
    accent: "#dc2626",
    description:
      "The Ultenic D6s is an entry-level, 3-in-1 robot vacuum and mop that sweeps, vacuums, and scrubs your floors simultaneously using high-speed sonic vibration technology. Its slim design, automatic carpet boost, and smart app integration make automated, hands-free home cleaning both highly efficient and budget-friendly.",
    details: [
      "SonicTrue Vibration Mopping: Scrubs stubborn floors up to 3,000 times per minute to easily lift dried stains and footprints.",
      "3000Pa Strong Suction: Delivers plenty of power to pull large crumbs, fine dust, and deeply embedded debris from all floor types.",
      "Carpet Auto Boost: Automatically detects carpets and instantly maximizes suction power to extract deeply embedded dirt and pet hair.",
      "Integrated 2-in-1 Tank: Features a unified 490ml dust bin and water tank system that allows for seamless wet and dry cleaning in a single pass.",
      "Smart App & Voice Controls: Connects with the Ultenic app, Amazon Alexa, or Google Assistant to let you customize cleaning schedules and modes hands-free.",
    ],
      specs:[
      ["Lot", "106"],
      ["Included", "Full set"],
      ["Price in origin country", "$110 to $200"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
 
   
   
  
    {
    id: "VASAGLE-kitchen-shelf",
    name: 'VASAGLE Kitchen Shelf',
    code: "KKS025B01EU",
    category: "Furniture",
    condition: "New",
    estimate: "€90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/KKS025B01EU.jpg",
    accent: "#dc2626",
    description:
      "The VASAGLE KKS025B01EU is a 5-tier industrial-style baker's rack designed to maximize small kitchen storage space for appliances and utensils. It combines a vintage brown particleboard finish with a sturdy steel frame, featuring a built-in power strip for ultimate convenience.",
    details: [
      'Dimensions & Weight: Measures 40 x 80 x 170 cm and weighs 21.1 kg.',
      "Power Strip: Integrated with 4 AC outlets, a 2-meter cord, and overload protection.",
      "Storage Variety: Offers 5 spacious shelves including a customizable, height-adjustable middle tier.",
      'Weight Capacity: Supports up to 275 kg in total, with the main countertop holding 45 kg.',
      'Extra Hanging Space: Includes a metal mesh grid panel and 14 S-hooks for mugs and tools.',
    ],
      specs:[
      ["Lot", "107"],
      ["Included", "Full set"],
      ["Price in origin country", "€90"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "Bookshelves-and-Bookcases",
    name: 'Bookshelves and Bookcases',
    code: "1039160",
    category: "Furniture",
    condition: "New",
    estimate: "100$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/1039160.jpg",
    accent: "#dc2626",
    description:
      "This farmhouse-style industrial bookcase combines display space and hidden storage in a single space-saving footprint. It features four deep, open upper shelves for books and decor, anchored by a bottom double-door cabinet detailed with rustic barn-door framing accents.",
    details: [
      'Design Style: Rustic farmhouse aesthetics mixed with modern industrial minimalism.',
      'Cabinet Accents: Lower double doors featuring a distinctive geometric "X" barn-door brace pattern.',
      "Storage Capacity: Multi-tier shelving paired with a concealed bottom cabinet for clutter-free organization.",
      'Material Composition: Built from engineered wood paneling with smooth, dark textured laminate finishes.',
    ],
      specs:[
      ["Lot", "108"],
      ["Included", "Full set"],
      ["Price in origin country", "100$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
       {
    id: "4-Burners-Gas-Grill",
    name: '4 Burners Gas Grill',
    code: "791684878114",
    category: "Furniture",
    condition: "New",
    estimate: "400$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/grill.jpg",
    accent: "#dc2626",
    description:
      "The TLSUNNY 4-Burner Gas Grill Cart is a high-performance outdoor barbecue designed to deliver even heat distribution and a spacious cooking area. Featuring a mobile trolley design with integrated side tables, it provides a convenient and durable solution for backyard grilling.",
    details: [
      'Burner Configuration: Equipped with 4 independent stainless steel burners providing a total output of 11.72 kW (approx. 40,000 BTU total).',
      'Premium Materials: Built with a sturdy, powder-coated alloy steel frame and sleek stainless steel handles for enhanced weather resistance.',
      "Mobility & Convenience: Mounted on a heavy-duty trolley cart with wheels, featuring two side preparation shelves and a built-in lid thermometer.",
      'Ignition System: Utilizes a quick and reliable pulse electronic ignition system for effortless, hassle-free startup.',
    ],
      specs:[
      ["Lot", "109"],
      ["Included", "Full set"],
      ["Price in origin country", "400$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   
     {
    id: "Pull-Up-Station",
    name: 'Pull Up Station',
    code: "B07G85F8BB",
    category: "Sports",
    condition: "New",
    estimate: "€300",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Pull-Up-Station.jpg",
    accent: "#dc2626",
    description:
      "This compact, plate-loaded lat pull tower utilizes top and bottom cable pulleys to deliver full-body workouts like lat pulldowns and seated rows. It is designed to fit comfortably into home gym spaces without taking up significant floor area.",
    details: [
      'Brand/Model: Bad Company Lat Pull Tower (BCA-27)',
      'Maximum Load Capacity: Supports up to 150 kg of weight plates',
      "Plate Compatibility: Fits both standard (30/31 mm) and Olympic (50/51 mm) weight plates",
      'Ergonomics: Equipped with a 4-way height-adjustable seat and padded thigh rollers to lock you into position during heavy lifts',
    ],
      specs:[
      ["Lot", "110"],
      ["Included", "Full set"],
      ["Price in origin country", "€300"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "VASAGLE-Bedside-Table",
    name: 'VASAGLE Bedside Table',
    code: "LET631B57",
    category: "Furniture",
    condition: "New",
    estimate: "€40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/VASAGLE-Bedside-Table.jpg",
    accent: "#dc2626",
    description:
      "This modern VASAGLE nightstand from the KAILYN collection features a sleek, handleless three-drawer design finished in a textured ebony black wood grain. It includes a built-in, flush-mounted charging station on the top surface to keep all your personal devices powered right by your bedside.",
    details: [
      'Charging Hub: Built-in power strip with 2 AC outlets and 2 USB-A ports.',
      'Dimensions: Standard bedside size measuring 13.8"D x 15.7"W x 23.2"H (35 x 40 x 59 cm).',
      "Storage Space: Three spacious, handle-free drawers featuring smooth metal runners and sleek bevelled top edges",
      'Power Cord: Equipped with a 4.9 ft (1.5 m) integrated power cable.',
      'Weight Capacity: Supports a total static load of up to 136 lbs (62 kg) on the top surface.',
      'Materials: Constructed from durable 15 mm particleboard with a smooth, wipe-clean finish.',
    ],
      specs:[
      ["Lot", "111"],
      ["Included", "Full set"],
      ["Price in origin country", "€40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "VOWNER-Extendable-Coffee-Table",
    name: 'VOWNER Extendable Coffee Table',
    code: "VOWNER-43",
    category: "Furniture",
    condition: "New",
    estimate: "€70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/VOWNER.jpg",
    accent: "#dc2626",
    description:
      "This modern dual lift-top coffee table features an independent split-surface design that smoothly elevates to comfortable working or dining heights. It seamlessly balances style and utility, resting on tapered wooden legs and hiding ample storage compartments underneath the panels.",
    details: [
      'Dual Lifting Surfaces: Features two independent pop-up sections that can be used simultaneously at different heights.',
      'Hidden Storage: Provides two large, separate compartments beneath the tabletops to keep living room clutter out of sight.',
      "Premium Mechanics: Utilizes smooth gas struts and pneumatic cushions for quiet, effortless, and safe opening and closing.",
      'Sturdy Construction: Built from durable engineered wood with a clean, matte white finish supported by solid wood legs.',
      'Weight Capacity: Supports a total static load of up to 136 lbs (62 kg) on the top surface.',
      'Multifunctional Design: Quickly transitions from a standard low center table into a laptop desk or a casual dining spot.',
    ],
      specs:[
      ["Lot", "112"],
      ["Included", "Full set"],
      ["Price in origin country", "€70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
    {
    id: "Velvet-chair",
    name: 'Wahson Velvet Chair',
    code: "B08FH517CW",
    category: "Furniture",
    condition: "New",
    estimate: "$100",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Velvet-chair.jpg",
    accent: "#dc2626",
    description:
      "This elegant Art Deco accent chair features a plush, shell-inspired scalloped backrest upholstered in luxurious dusty rose velvet. Supported by sleek gold-plated metal legs, it serves as a chic and comfortable statement piece perfect for vanities, bedrooms, or modern living spaces.",
    details: [
      'Design Silhouette: Seashell-style petal backrest with rounded armrests.',
      'Upholstery Fabric: High-quality, skin-friendly velvet fabric.',
      "Base & Support: Sturdy metal legs finished with a brushed gold plating.",
      'Interior Cushioning: High-density, resilient sponge padding for comfort.',
      'Best Use Cases: Dressing rooms, bedroom accent corners, home offices, and makeup vanities.'
    ],
      specs:[
      ["Lot", "113"],
      ["Included", "Full set"],
      ["Price in origin country", "$100"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "COSTWAY-12V",
    name: 'COSTWAY 12V Kids Electric Ride',
    code: "B0D8VNYN6P",
    category: "Toys",
    condition: "New",
    estimate: "$150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/COSTWAY-12V-Kids-Electric-Ride.webp",
    accent: "#dc2626",
    description:
      "The Costway Licensed Lamborghini Sián 12V Ride-On Car is a premium electric toy vehicle featuring realistic engine sounds, bright LED headlights, and authentic upward-opening hydraulic scissor doors. It provides children with an exciting driving experience through manual controls, while ensuring parental peace of mind with an included 2.4G wireless remote control override.",
    details: [
      'Power & Performance: Driven by a 12V 4.5Ah rechargeable battery and dual motors, offering speeds ranging from 2 to 3.1 mph.',
      'Safety Features: Equipped with an adjustable safety belt, slow-start acceleration technology to prevent sudden jolts, and extra-wide wear-resistant wheels.',
      "Parental Override: Features a wireless 2.4G remote control that allows parents to safely take over steering, speed adjustments, and emergency braking.",
      'Onboard Entertainment: Outfitted with an integrated media player featuring a horn, built-in music, and USB/TF slots to plug in custom audio.',
      'Age & Weight Capacity: Designed for toddlers and children aged 3 to 8 years old, with a maximum weight limit of 55 lbs (25 kg).'
    ],
      specs:[
      ["Lot", "114"],
      ["Included", "Full set"],
      ["Price in origin country", "$150"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Coffee-Table-High-Gloss",
    name: 'Coffee Table High Gloss',
    code: "B0H1L365FZ",
    category: "Furniture",
    condition: "New",
    estimate: "$80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Coffee-Table-High-Gloss.jpg",
    accent: "#dc2626",
    description:
      "This modern high-gloss white coffee table features a sleek, handleless dual-drawer design paired with an open bottom shelf for optimized living room organization. Crafted from durable engineered wood, its minimalist aesthetic effortlessly complements contemporary, Scandinavian, or industrial home decor styles.",
    details: [
      'Dimensions: Measures exactly 102.5 cm wide, 55 cm deep, and 44 cm high, making it a compact yet highly functional center piece.',
      'Premium Finish: Boasts a glossy white exterior that provides a clean, light-reflective look and is exceptionally easy to wipe clean.',
      "Ample Storage: Features two smooth-gliding drawers for hidden items alongside a large lower shelf for media consoles, books, or baskets.",
      'Sturdy Construction: Built from robust engineered wood designed to resist daily wear and tear while providing reliable structural stability.',
    ],
      specs:[
      ["Lot", "115"],
      ["Included", "Full set"],
      ["Price in origin country", "$80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "laundry-basket",
    name: 'VASAGLE Double Laundry Basket',
    code: "B09XF2B7RX",
    category: "Furniture",
    condition: "New",
    estimate: "$45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/laundry-basket.jpg",
    accent: "#dc2626",
    description:
      "This multi-functional laundry station combines a robust steel garment rack with a dual-compartment hamper system to streamline your clothing organization. Its sleek space-saving profile provides a practical solution for drying, hanging, and sorting laundry within a single compact footprint.",
    details: [
      'Dual-Sorting Capacity: Two independent sliding fabric bags hold up to 92 liters total (46L per side) to easily separate whites and colors.',
      'Integrated Hanging Rail: A top steel rod supports up to 20 kg (44 lbs) of weight, making it ideal for air-drying clothes or storing outerwear.',
      "Dual Work Shelves: Engineered greige wood panels offer convenient top and middle tier surfaces for folding clothes or storing detergent.",
      'Pull-Out Design: The fabric bags slide out smoothly on guided rails and feature hook-and-loop fasteners for quick detachment and easy carrying.',
      'Sturdy & Stable Frame: Built with a rigid steel frame and adjustable leveling feet to keep the unit stable even on uneven floors.',
    ],
      specs:[
      ["Lot", "116"],
      ["Included", "Full set"],
      ["Price in origin country", "$45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Smart-Cool-7000-3-3",
    name: 'Comfee Smart Cool 7000-3 ',
    code: "Smart Cool 7000-3",
    category: "Electronics",
    condition: "New",
    estimate: "$170",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/comfee7000-3.jpeg",
    accent: "#dc2626",
    description:
      "The Comfee Smart Cool 7000-3 is a compact, 3-in-1 portable air conditioner that delivers efficient cooling, ventilation, and dehumidification for spaces up to 25 m². It features integrated Wi-Fi control, allowing you to effortlessly manage your indoor climate via a smartphone app or voice assistants like Alexa and Google Home.",
    details: [
      'Performance capacity: 7,000 BTU/h (2.0 kW) cooling power.',
      "Smart connectivity: App and voice control capabilities.",
      "Eco-friendly refrigerant: Uses natural R290 cooling agent.",
      'Protective coating: Golden Fin tech prevents bacteria/corrosion.',
      'Energy rating: Efficient Class A power consumption.',
      'Portability: Built-in wheels for easy room-to-room movement.',
    ],
      specs:[
      ["Lot", "117"],
      ["Included", "Full set"],
      ["Price in origin country", "$170"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "Scratching-tree",
    name: 'Scratching tree ',
    code: "Scratching tree ",
    category: "Furniture",
    condition: "New",
    estimate: "£70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Scratching-tree.webp",
    accent: "#dc2626",
    description:
      "This multi-level beige plush cat tree serves as an all-in-one activity tower designed to keep indoor cats active, cozy, and entertained. It combines elevated lounging perches with dedicated scratching zones to satisfy your pet's natural instincts while saving your household furniture.",
    details: [
      'Top Cushion Bed: Elevated circular perch with thick, padded borders for comfortable sleeping and bird-watching.',
      'Side-Mounted Hammock: A soft, flexible plush pouch extending from the main post that creates a perfect cradled nesting spot.',
      "Lower Hiding Condo: Features a barrel-shaped enclosed shelter near the base for private retreats and quiet catnaps.",
      'Sisal Scratching Posts: Heavy-duty support columns tightly wrapped in durable, natural sisal rope to promote healthy nail maintenance.',
      'Sturdy Construction: Engineered with a wide baseplate and low center of gravity to prevent tipping during high-energy play..',
    ],
      specs:[
      ["Lot", "118"],
      ["Included", "Full set"],
      ["Price in origin country", "£70"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "Bookcase-with-Cabinet",
    name: 'Costway Bookcase with Cabinet',
    code: "48275610",
    category: "Furniture",
    condition: "New",
    estimate: "$80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Bookcase-with-Cabinet.jpg",
    accent: "#dc2626",
    description:
      "This modern 5-tier wall-mounted ladder bookcase features an industrial black metal frame holding four spacious open display shelves. Its space-saving design is anchored by a practical 2-door lower storage cabinet that keeps your clutter hidden away.",
    details: [
      'Overall Dimensions: Measures 60 cm L x 35 cm W x 184 cm H (23.6" x 13.7" x 72.4").',
      'Storage Space: Offers 4 open tiers for books or plants and 1 enclosed base cabinet with dual handles.',
      "Safety First: Includes essential anti-tipping wall anchors to secure the top frame firmly to your wall.",
      'Build Material: Made from durable engineered wood panels and a sturdy powder-coated metal frame.',
      'Versatile Style: Blends easily into modern, minimalist, or industrial spaces like living rooms and home offices.',
    ],
      specs:[
      ["Lot", "119"],
      ["Included", "Full set"],
      ["Price in origin country", "$80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "Laundry-Basket-with-Shelf",
    name: 'VASAGLE Laundry Basket with Shelf',
    code: "BLH201W11",
    category: "Furniture",
    condition: "New",
    estimate: "$45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Laundry-Basket-with-Shelf.jpg",
    accent: "#dc2626",
    description:
      "VASAGLE 2-Compartment Laundry Hamper with Slatted Top Shelf — A space-saving, dual-bag sorting station featuring a durable white steel frame and pull-out fabric liners designed for effortless laundry organization and storage.",
    details: [
      'Dual-Section Sorter: Separate your whites and darks easily with two independent 46-liter compartments totaling a 92-liter capacity',
      'Pull-Out & Detachable Liners: Fitted with rigid slide rails and hook-and-loop fasteners so you can slide bags out smoothly or remove them completely to carry directly to the washer.',
      "Functional Top Shelf: Features a clean, slatted steel surface that prevents water buildup and offers handy overhead storage for laundry detergent, fabric softeners, or toiletries.",
      'Heavy-Duty Construction: Built with rigid 20 mm steel tubes and supported by four adjustable leveling feet to ensure stable, wobble-free placement on uneven floors.',
      'Compact Footprint: Measuring 73 x 33 x 72 cm, its slim profile makes it perfect for tight spaces like small laundry rooms, bathrooms, or bedroom closets.',
    ],
      specs:[
      ["Lot", "120"],
      ["Included", "Full set"],
      ["Price in origin country", "$45"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "COSTWAY-Height-Adjustable-Kid-Study-Desk",
    name: 'COSTWAY Height Adjustable Kids Study Desk',
    code: "HY10284BL",
    category: "Furniture",
    condition: "New",
    estimate: "$75",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/COSTWAY-Height-Adjustable-Kid-Study-Desk.jpg",
    accent: "#dc2626",
    description:
      "This ergonomic children's workspace grows alongside your child, featuring manual adjustment knobs on the legs to dynamically change the overall height. Designed to keep learning environments neat and organized, it pairs a multi-level storage hutch with an integrated, tiltable desktop perfect for drawing, reading, or writing.",
    details: [
      'Age Range: Designed for growing children aged 3 to 12 years old.',
      'Ergonomic Desktop: Main surface tilts from 0 to 50 degrees to reduce neck and eye strain.',
      "Smart Storage: Includes a multi-tier hutch, built-in pen holder, and a large pull-out partition drawer.",
      'Premium Materials: Built with a scratch-resistant, anti-reflection tabletop and sturdy steel support frame legs.',
      'Safety Features: Features anti-pinch protective cutouts and rounded corner edges to keep hands safe.',
    ],
      specs:[
      ["Lot", "121"],
      ["Included", "Full set"],
      ["Price in origin country", "$75"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
     {
    id: "BK-Barbara-Klein-Treadmill",
    name: 'BK Barbara Klein Treadmill',
    code: "473587",
    category: "Sports",
    condition: "New",
    estimate: "€299",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/BK-treadmill.png",
    accent: "#dc2626",
    description:
      "This BK Barbara Klein 2-in-1 Smart Treadmill features a space-saving, fold-flat design that easily transitions from a high-speed running machine into a low-profile under-desk walking pad. Created by a leading German fitness expert, it delivers a quiet, high-efficiency workout optimized for small apartments and home offices.",
    details: [
      'Dual Functionality: The support handlebar folds down completely for under-desk walking or locks upright for jogging up to 12 km/h',
      'Compact Storage: Built with a slim profile and transport wheels to easily roll under beds or store vertically in tight closets.',
      "Integrated Console: Features a built-in LED base screen to monitor your speed, distance, time, and calories in real time.",
      'User Capacity: Engineered with a sturdy frame that supports a maximum user weight limit of up to 120 kg (~265 lbs).',
    ],
      specs:[
      ["Lot", "122"],
      ["Included", "Full set"],
      ["Price in origin country", "€299"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
      {
    id: "BK-Barbara-Klein-Trampoline",
    name: 'BK Barbara Klein Trampoline',
    code: "472949",
    category: "Sports",
    condition: "New",
    estimate: "€160",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/BK-trampoline.jpg",
    accent: "#dc2626",
    description:
      "The BK by Barbara Klein Hexagon Fitness Trampoline is a premium cardio rebounding tool designed for joint-friendly, high-intensity home workouts. It features a spacious hexagonal jumping surface paired with an adjustable T-bar stability handle to support a wide range of fitness levels.",
    details: [
      'Low-Impact Rebounding: Utilizes a high-quality elastic bungee ring system instead of traditional steel springs to deliver a deep, quiet bounce that protects your joints.',
      'Adjustable T-Bar Handle: Features a central, height-adjustable stability bar that can be modified to match your height or removed entirely for open workouts.',
      "Compact Space-Saving Design: Equipped with foldable legs that allow the unit to be stowed away flat under a bed or inside a closet when not in use.",
      'Sturdy Hexagonal Frame: Designed with a 112 cm diameter hexagonal steel frame that provides superior stability and prevents the trampoline from tipping during side-to-side movements.',
    ],
      specs:[
      ["Lot", "123"],
      ["Included", "Full set"],
      ["Price in origin country", "€160"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Cat-Tree-Fippi",
    name: 'Cat Tree Fippi',
    code: "402185",
    category: "Furniture",
    condition: "New",
    estimate: "£75",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/cat-treehouse.webp",
    accent: "#dc2626",
    description:
      "This multi-level cat tree is a comprehensive pet activity tower designed to satisfy a cat's natural instincts to climb, scratch, and lounge. Standing at an impressive height, it features a striking black-and-white plush fabric finish that blends entertainment with home comfort.",
    details: [
      'Multi-Tier Layout: Features staggered jumping platforms and elevated viewing perches.',
      "Cozy Hideaway: Includes a central enclosed condo cave for private resting.",
      "Relaxation Zones: Equipped with multiple hanging hammock cradles and plush beds.",
      'Scratching Surfaces: Built with durable sisal-wrapped posts to encourage healthy claw maintenance.',
    ],
      specs:[
      ["Lot", "124"],
      ["Included", "Full set"],
      ["Price in origin country", "£75"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
   {
    id: "Parkside-Sliding-Compound-Mitre-Saw",
    name: 'Parkside Sliding Compound Mitre Saw',
    code: "B079PYJ6S8",
    category: "Tools",
    condition: "New",
    estimate: "€110",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Parkside-Sliding-Compound-Mitre-Saw.jpg",
    accent: "#dc2626",
    description:
      "This Parkside PZKS 2000 C3 is a 2000W sliding compound mitre saw engineered for making precise, clean cuts through wood and plastic materials. It features a continuous tilting saw head and an integrated laser guide to ensure maximum accuracy for both DIY workshops and home renovation projects.",
    details: [
      'Power Output: 2000W high-performance motor.',
      "No-Load Speed: 4800 rpm for rapid, clean cutting.",
      "Blade Dimensions: Ø 210 mm diameter with a 24-tooth carbide-tipped blade pre-installed.",
      'Cutting Adjustments: Continuous mitre bevel tracking from 0° to 45° with a flexible tilting mechanism.',
    ],
      specs:[
      ["Lot", "125"],
      ["Included", "Full set"],
      ["Price in origin country", "€110"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
       {
    id: "Lightweight-Framed-Child-Carrier",
    name: 'Lightweight Framed Child Carrier',
    code: "Child Carrier",
    category: "Furniture",
    condition: "New",
    estimate: "$60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/child-carrier.jpg",
    accent: "#dc2626",
    description:
      "The entry-level kid carrier features a suspension that carries a squirming load well, while offering the wearer 25% less perspiration via the Aircomfort ventilated back system. VariQuick system allows for easy adjustment to any back length. Separate bottom compartment. Side pockets. Waistbelt for securing and stabilizing the load. Material: Deuter Microrip Nylon, Deuter Super Polytex",
    details: [
      'Aircomfort Ventilation System',
      'Vari Quick System: For easy adjustment to any back length',
      "Bottom Compartment: With removable separator for ideal gear access and load placement",
      'Side Pockets: stretch side pockets provide additional storage space',
    ],
      specs:[
      ["Lot", "126"],
      ["Included", "Full set"],
      ["Price in origin country", "$60"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
     {
    id: "dowinx-ls-6650",
    name: 'Dowinx Ergonomic Gaming Chair',
    code: "LS-6650",
    category: "Furniture",
    condition: "New",
    estimate: "$140",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/downix.jpg",
    accent: "#dc2626",
    description:
      "This ergonomic Dowinx LS-6650 Gaming Chair combines sleek PU leather styling with an integrated retractable footrest for maximum comfort. It provides tailored orthopedic support during extended gaming or working sessions through its signature pocket spring cushion and dual-zone pillows.",
    details: [
      'Dynamic Reclining: Bends backward up to 135°–140° with an extendable footrest for quick power naps.',
      'Linkage Armrests: Moves automatically as you tilt to keep your elbows supported at any angle.',
      "Massaging Lumbar: Features a USB-powered vibrating mechanism inside the lower back cushion.",
      'Heavy-Duty Base: Supported by a robust steel frame and smooth-rolling nylon casters.',
      'Pocket Spring Seat: Uses coil springs similar to a premium mattress to prevent the seat from flattening over time.',
    ],
      specs:[
      ["Lot", "127"],
      ["Included", "Full set"],
      ["Price in origin country", "$140"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
 
     {
    id: "Modern-Dining-Chairs",
    name: 'Modern Dining Chairs',
    code: "B0FVFBNXZX",
    category: "Furniture",
    condition: "New",
    estimate: "€150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Modern-Dining-Chairs.jpg",
    accent: "#dc2626",
    description:
      "This mid-century modern cantilever dining chair beautifully blends retro aesthetics with contemporary comfort, pairing a breathable woven rattan backrest with a plush velvet upholstered seat cushion. Built on an architectural chrome-plated steel frame, it delivers a gentle, flexible spring motion that adds distinct vintage charm to any dining room.",
    details: [
      'Iconic Silhouette: Inspired by classic 1920s Cesca design, featuring a legless cantilever base made from polished tubular steel.',
      'Mixed-Texture Materials: Features a natural woven cane back framed in warm light wood and a high-density sponge seat wrapped in soft velvet fabric.',
      "Heavy-Duty Build: Reinforced with a double-steel internal pipe system to ensure a sturdy weight capacity of up to 360 lbs.",
      'Floor Protection: Outfitted with clear, anti-scratch rubber glides on the bottom of the metal frame to shield hard surfaces.',
    ],
      specs:[
      ["Lot", "128"],
      ["Included", "Full set"],
      ["Price in origin country", "€150"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
    {
    id: "Tent-Roskilde",
    name: 'Tectake Tent Roskilde',
    code: "404825",
    category: "Sports",
    condition: "Furniture",
    estimate: "€130",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Tent-Roskilde.webp",
    accent: "#dc2626",
    description:
      "The tectake 404825 Roskilde is a spacious 6-person tunnel tent featuring a large sleeping cabin and a functional front vestibule. It provides excellent weather protection and a comfortable standing height, making it ideal for family camping trips and festival groups.",
    details: [
      'High Waterproof Rating: Offers a 10,000 mm hydro-static head with PU-coated polyester and taped seams for superior rain protection.',
      'Spacious Interior: Generous dimensions of 480 x 350 x 195 cm offer plenty of headroom and space to move comfortably.',
      "Bug-Free Ventilation: Equipped with four mesh windows and two zipped entrances to ensure optimal airflow while keeping insects out.",
      'Sun Protection: Fabric features a UV 50+ coating to shield occupants from harsh solar radiation.',
    ],
      specs:[
      ["Lot", "129"],
      ["Included", "Full set"],
      ["Price in origin country", "€130"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Lumbar-Support-Mesh-Chair",
    name: 'Lumbar Support Mesh Chair',
    code: "B0FQC8GKPL",
    category: "Furniture",
    condition: "New",
    estimate: "$80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Lumbar-Support-Mesh-Chair.jpg",
    accent: "#dc2626",
    description:
      "This Nakabayashi CNN-008BK is an ergonomic mesh office chair designed with an adjustable lumbar support system to minimize lower back fatigue. It features spacesaving, flip-up padded armrests and a high-density urethane foam cushion for reliable daily working comfort.",
    details: [
      'Lumbar Support: Adjusts up and down by 2.4 inches (6 cm) to match the natural curvature of your spine.',
      'Flip-Up Armrests: Rotate upward smoothly so you can tuck the chair completely under your desk when not in use.',
      "Seat Cushion: Features a thick 2.8-inch (70 mm) molded urethane foam pad that prevents bottoming out.",
      'Materials: Constructed with a high-tension, breathable polyester mesh backrest and a durable nylon base.',
      'Dimensions: Measures 72.5 cm x 67 cm x 100–108 cm with an adjustable seat height range of 44.5–52.5 cm.',
      'Weight Capacity: Supports a maximum user weight of up to 220.5 lbs (100 kg).',
    ],
      specs:[
      ["Lot", "130"],
      ["Included", "Full set"],
      ["Price in origin country", "$80"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
    {
    id: "Sharp-Aquos-40-inch",
    name: 'Sharp Aquos 40-inch',
    code: "40HE2245K ",
    category: "Electronics",
    condition: "New",
    estimate: "£190",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Sharp-Aquos-40-inch.jpg",
    accent: "#dc2626",
    description:
      "This Sharp Aquos 40-inch Full HD Smart TV comes equipped with TiVo OS to seamlessly bring live television and your favorite streaming apps together onto one screen. Its modern, frameless design provides an expansive view, making it a great fit for bedrooms, kitchens, or smaller living spaces.",
    details: [
      'Display: 40-inch (101 cm) screen featuring crisp Full HD (1080p) resolution.',
      'Smart Platform: Powered by TiVo OS for intuitive, content-first browsing across multiple services.',
      "Visuals & Audio: Enhances content with HDR10/HLG support and features Dolby Audio for balanced sound.",
      'Connectivity: Offers built-in Wi-Fi and Freely TV integration to stream live television channels without needing a traditional aerial cable.',
      'Dimensions: Measures 72.5 cm x 67 cm x 100–108 cm with an adjustable seat height range of 44.5–52.5 cm.',
    ],
      specs:[
      ["Lot", "131"],
      ["Included", "Full set"],
      ["Price in origin country", "£190"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
         {
    id: "e-bike-3",
    name: 'SWFT Volt Electric Bike',
    code: "SWFT-VOLT-BLK",
    category: "Sports",
    condition: "New",
    estimate: "700$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SWFT-VOLT-01-BLK-FrontAngle-scaled.jpg",
    accent: "#dc2626",
    description:
      "The SWFT Volt Electric Bike is an affordable, single-speed commuter e-bike designed for efficient city riding. It combines a clean, classic road-bike aesthetic with a quiet 350W motor to easily power your daily trips.",
    details: [
      "Top Speed: 20 mph using either pedal assist or the thumb throttle.",
      "Battery Range: Up to 32 miles on a single charge with a clean, integrated frame battery.",
      "Lightweight Build: Weighs just 44.1 lbs, making it much easier to carry and maneuver than standard e-bikes.",
      "Rider Fit: Large 58 cm steel frame with a 32.5-inch standover height, best suited for taller riders.",
      "Tech Features: Built-in handlebar LCD screen to monitor speed, battery life, and assist levels.",
    ],
      specs:[
      ["Lot", "132"],
      ["Included", "Full set"],
      ["Price in origin country", "700$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
          {
    id: "Round-Coffee-Table",
    name: 'Acme Dustan Round Coffee Table',
    code: "B0DKXP7FMS",
    category: "Furniture",
    condition: "New",
    estimate: "200$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/cofeetablewhite.jpeg",
    accent: "#dc2626",
    description:
      "This minimalist, drum-style round concrete coffee table features a sleek, low-profile cylindrical shape with slightly tapered base edges. Its clean aesthetic blends seamlessly into modern, industrial, or bohemian spaces both inside and outside the home.",
    details: [
      "Material: Eco-friendly cement or microcement construction with a smooth, faux-concrete finish.",
      "Placement: Fully weather-resistant and versatile for indoor or outdoor use, such as living rooms or backyard patios.",
      "Maintenance: Features a non-porous, easy-to-clean surface that resists spills and stains.",
      "Aesthetic: Neutral natural white color palette that complements various decor textures and colors.",
    ],
      specs:[
      ["Lot", "133"],
      ["Included", "Full set"],
      ["Price in origin country", "200$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  }, 
   {
    id: "parkside-set-1",
    name: 'Parkside Performance 12V Cordless Drill Driver and Impact Screwdriver Starter',
    code: "B0FZFKKF31",
    category: "Tools",
    condition: "New",
    estimate: "€90",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/parkside-set.jpg",
    accent: "#dc2626",
    description:
      "The PARKSIDE PERFORMANCE 12V Cordless Starter Set delivers professional-grade power in a compact layout, bundling a high-efficiency brushless drill driver with a heavy-duty impact screwdriver. Complete with two 12V lithium-ion batteries and a charger, this combo provides up to 25% higher torque and 10 times longer motor life than standard entry-level models.",
    details: [
      "Dual Tool Powerhouse: Combines a 2-speed drill driver (PBSPA 12 E4) for precise drilling and a high-torque impact driver (PDSSAP 12 B1) for fastening dense materials.",
      "Brushless Motor Tech: Features advanced brushless engineering that eliminates internal friction, extending overall runtime by 20% and preventing motor wear.",
      "Massive Torque Levels: Offers versatile speed controls up to a max torque of 35 Nm on the drill, and a powerful 170 Nm on the impact driver for heavy-duty screws.",
      'Full Starter System: Includes two 12V (2.0 Ah) rechargeable batteries compatible with the entire "Parkside X 12V Team" ecosystem, a fast charger, and a canvas carry bag.',
    ],
      specs:[
      ["Lot", "134"],
      ["Included", "Full set"],
      ["Price in origin country", "€90"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  
  
];
export const featuredProduct = products[0]; 
