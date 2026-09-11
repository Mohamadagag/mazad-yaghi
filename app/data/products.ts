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
    id: "Cyclone-vacuum-cleaner-800W",
    name: 'Cyclone vacuum cleaner 800W',
    code: "B0F1MSX2W7",
    category: "Electronics",
    condition: "New",
    estimate: "€45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/cleaner-800W.webp",
    accent: "#dc2626",
    description:
      "The CLEANmaxx Multi-Zyklonstaubsauger is a compact, bagless cylinder vacuum cleaner designed for highly efficient household cleaning. It utilizes multi-cyclone technology to separate dirt from the airflow, maintaining constant, powerful suction without the need for bags.",
    details: [
      "Suction Power: Delivers a strong 17 kPa maximum suction force.",
      "Motor Performance: Equipped with an energy-efficient 800-watt motor.",
      "Dust Capacity: Features a easy-to-empty 2-liter dirt container.",
      'Filtration System: Includes an EPA filter for cleaner exhaust air, ideal for allergy sufferers.',
    ],
      specs:[
      ["Lot", "1"],
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
    id: "electric-standing-desk",
    name: 'Electric Standing Desk',
    code: "ZHUMI-ELT-P4024V3-WT",
    category: "Furniture",
    condition: "New",
    estimate: "€100",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/electric-standing-desk.jpg",
    accent: "#dc2626",
    description:
      "The ELT-P4024-WT is a compact, 40-inch electric standing desk designed to optimize productivity in small home offices or bedrooms. It features a sleek white finish paired with a smart digital controller that makes shifting between sitting and standing completely effortless.",
    details: [
      'Compact Footprint: Features a 40" x 24" desktop ideal for smaller rooms, apartments, or student setups',
      "Smart Memory Handset: Includes an LED digital display with 3 programmable presets to save your favorite sitting and standing heights.",
      'Smooth Height Transition: Adjusts smoothly from 28.7" up to 46.5" using a quiet, single-motor system.',
      "Sturdy Construction: Built with an industrial-grade steel frame that safely supports up to 176 lbs of office gear.",
    ],
      specs:[
      ["Lot", "2"],
      ["Included", "Full set"],
      ["Price in origin country", "€100"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Dresser",
    name: 'White Makeup Vanity Dresser',
    code: "White Dresser",
    category: "Furniture",
    condition: "New",
    estimate: "$110",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Dresser.png",
    accent: "#dc2626",
    description:
      "This compact white makeup vanity set features a built-in mirror, a multi-tier storage shelf tower, and dual pull-out drawers equipped with sleek gold handles. It provides a functional, space-saving layout for daily grooming and cosmetic organization in smaller bedrooms.",
    details: [
      "Storage Capacity: Two spacious horizontal drawers and four open shelves for organized cosmetic display.",
      "Matching Seating: Includes a padded, fabric-upholstered stool that neatly tucks under the desk.",
      "Premium Accents: Finished with contrasting metallic gold bar handles for a contemporary touch.",
      "Material Composition: Constructed from white-coated engineered wood panels designed for stability.",
    ],
      specs:[
      ["Lot", "3"],
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
    id: "Sejoy-Cordless-Oral-Irrigator",
    name: 'Sejoy Cordless Oral Irrigator',
    code: "CYQ-FC5091",
    category: "Furniture",
    condition: "New",
    estimate: "$30",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/oral-irrigator.jpg",
    accent: "#dc2626",
    description:
      "The Sejoy Cordless Oral Irrigator is a portable water flosser designed with a 1400mAh rechargeable lithium-ion battery for deep dental cleaning. It includes a dedicated inductive charging dock that doubles as a built-in tip organizer to keep accessories clean and accessible.",
    details: [
      "Long Battery Life: Features a built-in 1400mAh Li-ion battery providing an active continuous runtime of ≥ 30 minutes per full charge.",
      "Inductive Charging Base: Includes a convenient wireless charging dock that keeps the main handle powered up and neatly organizes your flossing tips.",
      "Independent Controls: Built with standalone, separate Power ON/OFF and Mode Selection buttons for intuitive, mess-free operation.",
      "Versatile Cleaning: Offers multiple operation pressure modes (Normal, Soft, Pulse) to adapt to sensitive gums, braces, and implants.",
    ],
      specs:[
      ["Lot", "4"],
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
    id: "Smart-Cool-7000-3-1",
    name: 'Comfee Smart Cool 7000-3',
    code: "Smart Cool 7000-3",
    category: "Furniture",
    condition: "New",
    estimate: "$170",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Smart-Cool.webp",
    accent: "#dc2626",
    description:
      "The Comfee Smart Cool 7000-3 is a compact, 3-in-1 portable air conditioner that delivers efficient cooling, ventilation, and dehumidification for spaces up to 25 m². It features integrated Wi-Fi control, allowing you to effortlessly manage your indoor climate via a smartphone app or voice assistants like Alexa and Google Home.",
    details: [
      "Performance capacity: 7,000 BTU/h (2.0 kW) cooling power.",
      "Smart connectivity: App and voice control capabilities.",
      "Eco-friendly refrigerant: Uses natural R290 cooling agent.",
      "Protective coating: Golden Fin tech prevents bacteria/corrosion.",
      "Energy rating: Efficient Class A power consumption.",
      "Portability: Built-in wheels for easy room-to-room movement.",
    ],
      specs:[
      ["Lot", "5"],
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
    id: "Kids-Table",
    name: 'COSTWAY Kids Table',
    code: "B0C5XHNVMM",
    category: "Furniture",
    condition: "New",
    estimate: "£55",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Kids-Table.jpg",
    accent: "#dc2626",
    description:
      'The COSTWAY Kids Flip-Top Art Desk Set is a multifunctional wooden activity station designed to foster early childhood creativity and learning. It seamlessly combines a sturdy writing surface with a built-in drawing paper roll, making it an ideal addition to any playroom or bedroom.',
    details: [
      'Materials: Premium MDF wood body with solid pine wood table legs for enhanced stability.',
      "Storage Space: Large concealed compartment beneath the lift-top lid to easily hide away coloring books, crayons, and school supplies.",
      'Safety Features: Equipped with a built-in safety hinge and cut-out anti-pinch handle grooves to prevent the heavy lid from crushing little fingers.',
      "Recommended Age: Ideal for toddlers and children aged 3 years old and up.",
    ],
      specs:[
      ["Lot", "6"],
      ["Included", "Full set"],
      ["Price in origin country", "£55"],
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
    currentBid: "25",
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
      ["Lot", "7"],
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
      ["Lot", "8"],
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
    id: "HopeHope-Pedestal",
    name: 'HopeHope Sink Cabinet',
    code: "B093Y8DF8V",
    category: "Furniture",
    condition: "New",
    estimate: "$45",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/HopeHope-Sink.jpg",
    accent: "#dc2626",
    description:
      "This pedestal under-sink storage cabinet features a specialized U-shaped cutout that wraps effortlessly around traditional bathroom sink columns to Maximize tight spaces. Its modern double-door design safely conceals toiletries and cleaning essentials, making it an ideal organization solution for smaller bathrooms.",
    details: [
      "Product Type: Freestanding under-sink storage vanity",
      "Material & Finish: Smooth, moisture-resistant white engineered wood",
      'Door Style: Distinctive vertical slatted plank-effect panels',
      "Hardware: Minimalist, sleek brushed silver pull handles",
      "Storage Space: Spacious interior cupboard with a hidden layout for toiletries",
    ],
      specs:[
      ["Lot", "9"],
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
    id: "Sharp-Aquos-Full-HD-Smart-LED-TV",
    name: 'Sharp Aquos Full HD Smart LED TV',
    code: "B0FJSG1PWP",
    category: "Electronics",
    condition: "New",
    estimate: "€230",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/sharp-40.jpg",
    accent: "#dc2626",
    description:
      "This retail box contains a SHARP AQUOS 40-inch Full HD Smart LED TV featuring a sleek, frameless design for an immersive viewing experience. It is powered by the TiVo OS platform, offering intuitive navigation that seamlessly combines live TV and your favorite streaming applications.",
    details: [
      "Screen Size: 40 inches (101 cm diagonal display panel).",
      "Resolution: Full HD 1080p (1920 x 1080 pixels) for crisp picture quality.",
      "Smart Platform: TiVo OS built-in for unified live TV streaming and personalized content discovery.",
      'Audio & Video: Equipped with Dolby Audio tuning and HDR (High Dynamic Range) support for enhanced contrast.',
    ],
      specs:[
      ["Lot", "10"],
      ["Included", "Full set"],
      ["Price in origin country", "€230"],
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
      ["Lot", "11"],
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
    id: "Dining-Chair-Marilyn",
    name: 'Dining Chair Marilyn cream/gold Set of 2',
    code: "B0F21RP583",
    category: "Furniture",
    condition: "New",
    estimate: "£135",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Dining-Chair-Marilyn.jpg",
    accent: "#dc2626",
    description:
      "The tectake Marilyn Dining Chair features a modern, elegant design highlighted by a soft velvet-look upholstery and a continuous curved backrest. Its clean lines and luxurious aesthetic are elevated by slim, tapered steel legs in a polished gold finish.",
    details: [
      "Materials: Soft-touch velvet fabric, dense foam cushioning, and steel legs.",
      "Design Features: Square diamond quilting on the inner lining and ergonomic armrests.",
      "Dimensions: Approximately 58 x 62 x 82 cm with a seat height of 46 cm.",
      "Weight Capacity: Designed to support a maximum weight load of up to 120 kg.",
      "Stability Features: Fitted with protective, height-adjustable feet to balance on uneven flooring and prevent scratches.",
    ],
      specs:[
      ["Lot", "12"],
      ["Included", "Full set"],
      ["Price in origin country", "£135"],
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
    currentBid: "80",
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
      ["Lot", "13"],
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
    id: "Livarno-Home-kitchen-trolley",
    name: 'Livarno Home kitchen trolley',
    code: "kitchen trolley",
    category: "Furniture",
    condition: "New",
    estimate: "$30",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Livarno-Home-kitchen-trolley.jpg",
    accent: "#dc2626",
    description:
      'This portable rotary clothes airer features a space-saving umbrella design paired with a fillable base for convenient outdoor drying. It is a highly practical, mobile alternative to traditional fixed clotheslines, making it perfect for patios, balconies, and camping trips.',
    details: [
     "Multi-Tier Design: Features four stacked open shelves perfect for organizing jars, cans, spices, or cleaning supplies.",
      'Space-Saving Build: Specifically engineered with an ultra-slim depth to fit into narrow crevices and awkward corners.',
      'Mobile & Portable: Outfitted with smooth-rolling caster wheels on the bottom for effortless pull-out access.',
      "Protective Guardrails: Built with raised front lips on each shelf tier to stop items from tipping over while in motion.",
    ],
      specs:[
      ["Lot", "14"],
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
    id: "jovs-venus-pro",
    name: "Jovs Venus Pro",
    code: "JV-111",
    category: "Electronics",
    condition: "New",
    estimate: "300$",
    ////////////////////////////////////////////////////
    currentBid: "65",
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
      ["Lot", "15"],
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
    id: "Oval-Coffee-Table",
    name: 'GIANTEX Oval Coffee Table',
    code: "B0F28LHSCS",
    category: "Furniture",
    condition: "New",
    estimate: "$70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Oval-Coffee-Table.jpg",
    accent: "#dc2626",
    description:
      'This mid-century modern coffee table features a sleek, inset tempered glass top framed by an elegant acacia wood border. Its eye-catching, geometric cross-base provides excellent structural support while bringing a retro, open aesthetic to your living space.',
    details: [
      'Dimensions: 46.5" L x 28" W x 18.5" H (118 x 71.5 x 47.5 cm)',
      "Materials: Premium clear tempered glass and solid acacia wood legs",
      'Weight Capacity: Holds up to 110 lbs (50 kg) safely',
      "Stability: Features adjustable leveling foot pads to protect floors and prevent wobbling",
    ],
      specs:[
      ["Lot", "16"],
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
      ["Lot", "17"],
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
    id: "COSTWAY-PU-Leather-Office-Chair",
    name: 'COSTWAY PU Leather Office Chair',
    code: "B0GCHK293F",
    category: "Furniture",
    condition: "New",
    estimate: "$110",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/COSTWAY-PU-Leather-Office-Chair.jpg",
    accent: "#dc2626",
    description:
      'The Costway PU Leather Office Chair is a mid-century modern task chair featuring a brown faux leather finish with contrasting horizontal seam detailing [costway office chair amazon]. It is designed with padded armrests and an adjustable hydraulic gas lift on a black 5-star rolling caster base for style and mobility [costway office chair amazon].',
    details: [
      'Material: Rich brown PU faux leather upholstery.',
      "Adjustability: Height-adjustable hydraulic lift lever with full 360-degree swivel",
      'Base: Heavy-duty black 5-star base equipped with dual-wheel smooth-rolling casters',
      "Design: Ergonomic mid-century modern aesthetic with a thick padded seat and backres",
    ],
      specs:[
      ["Lot", "18"],
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
    id: "WET-DRY-VACUUM-CLEANER-Parkside",
    name: 'WET & DRY VACUUM CLEANER Parkside',
    code: "PWD 20 C3",
    category: "Electonics",
    condition: "New",
    estimate: "€50",
    ////////////////////////////////////////////////////
    currentBid: "80",
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
      ["Lot", "19"],
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
      ["Lot", "20"],
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
    id: "VASAGLE-2-Drawer",
    name: 'VASAGLE 2-Drawer Lockable File Cabinet',
    code: "B07VML5NXP",
    category: "Furniture",
    condition: "New",
    estimate: "$80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/VASAGLE-2-Drawer.jpg",
    accent: "#dc2626",
    description:
      "This mobile filing cabinet features a sleek, matte black finish and a compact design that fits perfectly underneath standard home office desks. It offers secure storage for sensitive documents while doubling as a sturdy rolling stand for a printer or office supplies.",
    details: [
      "Smart Security: A single built-in lock reliably secures both drawers at the same time to protect your private documents.",
      "Anti-Topple Caster: Includes a unique fifth wheel attached underneath the bottom drawer to keep the unit stable and prevent it from tipping forward.",
      "Dual Size Fitting: The deep drawer features adjustable hanging rails configured to seamlessly hold both A4 and Letter-size folders.",
      "Heavy-Duty Top: The robust top surface safely handles weights up to 110 lbs, making it a durable option for heavy office electronics.",
    ],
      specs:[
      ["Lot", "21"],
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
    id: "tectake-Set-of-2",
    name: 'tectake Set of 2 Armrests in Velvet Look',
    code: "B0DJ3GSG94",
    category: "Furniture",
    condition: "New",
    estimate: "£130",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/tectake-Set-of-2.jpg",
    accent: "#dc2626",
    description:
      "The tectake Sachel Dining Chair features a modern, mid-century inspired silhouette highlighted by a distinctive rounded, open-back cutout shell. Upholstered in a soft velvet-look fabric, it blends elegant, contemporary dining style with plush ergonomic comfort.",
    details: [
      "Material: Fabricated with high-density foam padding and covered in a velvet-finish polyester fabric.",
      "Support: Features slim, tapered steel legs finished with a textured black powder coating.",
      "Floor Protection: Equipped with plastic, height-adjustable screw-in feet to level the chair and prevent scratches.",
      "Weight Capacity: Specially engineered to accommodate a maximum load of up to 120 kg (~265 lbs).",
      "Dimensions: Measures approximately 57 x 61.5 x 87.5 cm with a comfortable seating height of 48 cm.",
    ],
      specs:[
      ["Lot", "22"],
      ["Included", "Full set"],
      ["Price in origin country", "£130"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Steam-Generator",
    name: "Silvercrest Steam Generator Iron",
    code: "100392735",
    category: "Electronics",
    condition: "New",
    estimate: "60€",
    ////////////////////////////////////////////////////
    currentBid: "25",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Steam-Generator.jpg",
    accent: "#dc2626",
    description:
      "This is a Silvercrest Steam Generator Iron, a high-performance household appliance designed for efficient garment care. It produces continuous high-pressure steam to easily remove deep creases from clothing and heavy fabrics.",
    details: [
      "Power Output: Up to 2400 Watts for rapid heating and powerful steam generation.",
      "Water Tank Capacity: Large 1.5-liter tank allowing for long, uninterrupted ironing sessions.",
      "Soleplate Type: Smooth-gliding ceramic coating for effortless movement over fabrics.",
      "Steam Settings: Multiple customizable steam modes tailored to different fabric types.",
      "Refill Type: Removable water tank system that allows you to add water easily at any time.",
    ],
      specs:[
      ["Lot", "23"],
      ["Included", "Full set"],
      ["Price in origin country", "60€"],
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
      ["Lot", "24"],
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
    id: "Sharp-Aquos-Full-HD-Smart-LED-TV-1",
    name: 'Sharp Aquos Full HD Smart LED TV',
    code: "B0FJSG1PWP",
    category: "Electronics",
    condition: "New",
    estimate: "€230",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/sharp-40.jpg",
    accent: "#dc2626",
    description:
      "This retail box contains a SHARP AQUOS 40-inch Full HD Smart LED TV featuring a sleek, frameless design for an immersive viewing experience. It is powered by the TiVo OS platform, offering intuitive navigation that seamlessly combines live TV and your favorite streaming applications.",
    details: [
      "Screen Size: 40 inches (101 cm diagonal display panel).",
      "Resolution: Full HD 1080p (1920 x 1080 pixels) for crisp picture quality.",
      "Smart Platform: TiVo OS built-in for unified live TV streaming and personalized content discovery.",
      'Audio & Video: Equipped with Dolby Audio tuning and HDR (High Dynamic Range) support for enhanced contrast.',
    ],
      specs:[
      ["Lot", "25"],
      ["Included", "Full set"],
      ["Price in origin country", "€230"],
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
    currentBid: "80",
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
      ["Lot", "26"],
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
      ["Lot", "27"],
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
    id: "two-tables",
    name: 'Nesting coffee tables',
    code: "Nesting coffee tables",
    category: "Furniture",
    condition: "New",
    estimate: "$80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/two-tables.jpg",
    accent: "#dc2626",
    description:
      "This elegant two-piece nesting coffee table set features a striking white faux-marble finish paired with a sleek, minimalist golden frame. Its space-saving design allows the smaller table to slide seamlessly underneath the larger one, making it both functional and highly stylish.",
    details: [
      'Design: Round nesting structure with a contemporary mid-century modern aesthetic.',
      'Materials: Durable MDF or laminate tabletop with a marble-veined pattern and a sturdy metal base.',
      "Finish: High-gloss white top with a polished or brushed gold-finished frame.",
      'Versatility: The tables can be grouped together for a layered look or used separately in different parts of the room.  ',
      'Space-Saving: The compact nested layout optimizes floor space in smaller living areas or apartments.',
    ],
      specs:[
      ["Lot", "28"],
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
    id: "Songmics--Rubbish-Bin-2",
    name: 'Songmics Rubbish Bin',
    code: "B07B8D8RC5",
    category: "Furniture",
    condition: "New",
    estimate: "£120",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Songmics-Rubbish-Bin.jpg",
    accent: "#dc2626",
    description:
      "This SONGMICS Dual Compartment Step Trash Can features a sleek, fingerprint-resistant stainless steel body designed for seamless waste separation. It offers hands-free operation with independent foot pedals and airtight, soft-close lids that effectively contain odors.",
    details: [
      "Material: Premium stainless steel exterior with durable plastic inner liners.",
      "Capacity: Typically available in 48L (2 x 24L) or 60L (2 x 30L) configurations.",
      'Dual Sections: Two separate, removable inner buckets with individual handles for easy emptying.',
      "Quiet Closure: Integrated buffer mechanism ensures the lids shut softly and silently.",
    ],
      specs:[
      ["Lot", "29"],
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
    id: "Smart-Cool-7000-3-2",
    name: 'Comfee Smart Cool 7000-3',
    code: "Smart Cool 7000-3",
    category: "Furniture",
    condition: "New",
    estimate: "$170",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Smart-Cool.webp",
    accent: "#dc2626",
    description:
      "The Comfee Smart Cool 7000-3 is a compact, 3-in-1 portable air conditioner that delivers efficient cooling, ventilation, and dehumidification for spaces up to 25 m². It features integrated Wi-Fi control, allowing you to effortlessly manage your indoor climate via a smartphone app or voice assistants like Alexa and Google Home.",
    details: [
      "Performance capacity: 7,000 BTU/h (2.0 kW) cooling power.",
      "Smart connectivity: App and voice control capabilities.",
      "Eco-friendly refrigerant: Uses natural R290 cooling agent.",
      "Protective coating: Golden Fin tech prevents bacteria/corrosion.",
      "Energy rating: Efficient Class A power consumption.",
      "Portability: Built-in wheels for easy room-to-room movement.",
    ],
      specs:[
      ["Lot", "30"],
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
      ["Lot", "31"],
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
    id: "KESSER-Garden-Lounger",
    name: 'KESSER Garden Lounger',
    code: "B0CTQ92XM3 ",
    category: "Furniture",
    condition: "New",
    estimate: "$60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/KESSER-Garden-Lounger.jpg",
    accent: "#dc2626",
    description:
      "The KESSER Ergonomic Rocking Sun Lounger is a premium outdoor wave-style deck chair crafted to mimic the body's natural curvature for deepest relaxation. Its weatherproof, breathable fabric paired with an integrated gentle rocking motion transforms any garden, balcony, or patio into a resort-like wellness oasis.",
    details: [
      "Ergonomic Wave Frame: Designed to completely mirror your body outline, quickly releasing muscle tension and reducing spinal stress.",
      'Breathable Textilene Fabric: Engineered to withstand moisture, high UV exposure, and tearing while preventing hot-weather sweating.',
      'Gentle Rocking System: Rounded frame base produces a smooth, comforting swinging motion outfitted with built-in safety stoppers.',
    ],
      specs:[
      ["Lot", "32"],
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
    id: "Rowing-Machine",
    name: "Christopeit Rowing Machine",
    code: "B0C663LSSH",
    category: "Sports",
    condition: "New",
    estimate: "$230",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Rowing-Machine.jpg",
    accent: "#dc2626",
    description:
      "The Christopeit Cambridge II Black Edition is a compact, foldable home rowing machine that utilizes a quiet latex-cord traction system. It is designed to deliver a space-saving cardiovascular and full-body endurance workout for fitness enthusiasts of all levels.",
    details: [
      "Resistance System: Uses a durable latex-rope system with 4 distinct mechanical resistance levels.",
      'Digital Console: Features a 2-line LCD screen tracking elapsed time, rowing strokes, strokes per minute, and approximate calorie count.',
      'Space-Saving Build: Folds down flat and can be stored vertically to occupy minimal floor space when not in use.',
    ],
      specs:[
      ["Lot", "33"],
      ["Included", "Full set"],
      ["Price in origin country", "$230"],
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
    id: "ultenic1",
    name: 'Ultenic D6s',
    code: "Ultenic D6s",
    category: "Electronics",
    condition: "New",
    estimate: "$110",
    ////////////////////////////////////////////////////
    currentBid: "100",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Ultenic-D6s.webp",
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
      ["Lot", "36"],
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
      ["Lot", "36"],
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
    id: "handheld-garment-steamer",
    name: "Handheld Garment Steamer",
    code: "CY-801",
    category: "Electronics",
    condition: "New",
    estimate: "$30",
    ////////////////////////////////////////////////////
    currentBid: "25",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Garment-Steamer.webp",
    accent: "#dc2626",
    description:
      "This high-power handheld garment steamer features a fast-heating design that smooths out tough wrinkles quickly and effortlessly. It is an ideal portable solution for refreshing a wide variety of everyday clothing fabrics both at home and on the go",
    details: [
      "Water Reservoir: Offers a generous 320 ml capacity for extended steaming time without constant refilling.",
      "Speedy Heat-Up: Ready to use in just 20 seconds to accommodate quick, last-minute wardrobe touch-ups.",
      "Steam Settings: Equipped with 3 adjustable power gears to safely tailor the heat to delicate silks or heavy jackets.",
      "Operating Range: Equipped with a 5-meter power cable for comfortable room-to-room cleaning without constant outlet switching.",
      "Ergonomic Build: Designed with a comfortable handheld grip and a wide, smooth-glide metal steaming plate.",
    ],
      specs:[
      ["Lot", "37"],
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
    id: "minimalist-dining-chairs",
    name: 'LEMROE Grey Dining Chairs',
    code: "UDC8124GY",
    category: "Furniture",
    condition: "New",
    estimate: "$110",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/minimalist-dining-chairs.jpg",
    accent: "#dc2626",
    description:
      "The LEMROE Grey Modern Dining Chairs feature a sleek mid-century silhouette highlighted by ergonomic curved seats and elegant vertical channel tufting. Supported by durable black metal legs, these armless accent chairs effortlessly bring both comfort and contemporary style to any room.",
    details: [
      "Upholstery Materials: Soft, padded velvet fabric or water-resistant faux leather alternatives.",
      "Frame & Support: Sturdy cross-leg metal base finished with a matte black coating.",
      "Floor Protection: Equipped with anti-scratch protective footcaps on the base of each leg.",
      "Multi-Purpose Use: Suited for kitchen dining tables, home office desks, vanities, or reception areas.",
    ],
      specs:[
      ["Lot", "38"],
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
    id: "3-in-1-Exercise-Bike-with-Adjustable-Resistance",
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
      ["Lot", "39"],
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
    id: "Coocaa-43-inch-Roku-Smart-TV",
    name: 'Coocaa 43-inch Roku Smart TV',
    code: "B0DWHB9DW4",
    category: "Electronics",
    condition: "New",
    estimate: "€180",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/roku-43'.jpg",
    accent: "#dc2626",
    description:
      "The Coocaa 43R5G Roku TV is an affordable 43-inch Smart TV featuring crisp 4K Ultra HD resolution and integrated smart home capabilities. Operating on the user-friendly Roku TV OS, it offers seamless navigation and quick access to thousands of streaming channels and live broadcasts.",
    details: [
      "Display Quality: 43-inch LED screen with 4K UHD (3840 x 2160) resolution and HDR10 / HLG support for enhanced contrast.",
      "Smart Interface: Powered by Roku TV OS, supporting major platforms like Netflix, Disney+, Prime Video, and Apple TV.",
      "Connectivity: Equipped with 3x HDMI ports (including ARC), USB ports, dual-band Wi-Fi, and an Ethernet (LAN) port.",
      'Smart Home Control: Compatible with Apple AirPlay, Apple Home, and Google Home for effortless casting and voice integration.',
    ],
      specs:[
      ["Lot", "40"],
      ["Included", "Full set"],
      ["Price in origin country", "€180"],
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
      ["Lot", "41"],
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
      ["Lot", "42"],
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
      ["Lot", "43"],
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
      ["Lot", "44"],
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
    id: "projector",
    name: "Magcubic HY300Pro",
    code: "HY300Pro",
    category: "Electronics",
    condition: "New",
    estimate: "100$",
    ////////////////////////////////////////////////////
    currentBid: "19",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Magcubic-HY300Pro.webp",
    accent: "#dc2626",
    description:
      "The Magcubic HY300Pro is an ultra-affordable, full HD portable smart projector featuring a 180-degree rotating stand that easily projects onto walls or ceilings. Running on a built-in Android operating system, it provides instant access to your favorite streaming apps without needing extra hardware.",
    details: [
      "Resolution: Native 1080p Full HD resolution with support for 4K video decoding.",
      "Brightness: 390 to 500 ANSI lumens, offering great clarity in dark or dim rooms.",
      "Throw Ratio: Short 0.9:1 throw ratio that projects a massive 100-inch screen from just 2 meters away.",
      "Wireless Tech: Dual-band Wi-Fi 6 for lag-free streaming and Bluetooth 5.0 for wireless audio.",
      "Smart Adjustments: Auto vertical keystone correction and four-corner manual calibration for a perfectly square image.",
    ],
      specs:[
      ["Lot", "45"],
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
    id: "modern-S-shaped-geometric-bookcase",
    name: "Modern S-shaped geometric bookcase ",
    code: "HY300Pro",
    category: "Electronics",
    condition: "New",
    estimate: "60$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/modern-S-shaped-geometric-bookcase.jpg",
    accent: "#dc2626",
    description:
      "This modern S-shaped geometric bookcase features a striking black-and-white color block design that functions beautifully as both storage and a sleek room divider. Its asymmetric tiered open shelves create a contemporary focal point perfect for displaying books, plants, and curated decor.",
    details: [
      "Geometric S-shape design adds architectural interest to any living room, office, or studio.",
      "Dual-tone finish in contrasting black and white delivers a bold, minimalist look.",
      "Multi-tier open shelving provides versatile space for storage baskets, books, and art pieces.",
      "Freestanding structure works excellently against a wall or placed centrally as a stylish room separator.",
    ],
      specs:[
      ["Lot", "46"],
      ["Included", "Full set"],
      ["Price in origin country", "60$"],
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
      ["Lot", "47"],
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
    id: "electric-pressure-cooker-and-multi-cooker",
    name: "Electric pressure cooker and multi-cooker",
    code: "electric pressure cooker",
    category: "Electronics",
    condition: "New",
    estimate: "75€",
    ////////////////////////////////////////////////////
    currentBid: "25",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/electric-pressure-cooker-and-multi-cooker.jpg",
    accent: "#dc2626",
    description:
      "The SilverCrest Multicuiseur Électrique (Model SSM 1000 A2) is a versatile 1000 W multi-cooker designed to simplify meal preparation by combining several kitchen appliances into one. It operates as a pressure cooker, steamer, rice cooker, and slow cooker to deliver quick, efficient, and healthy cooking results.",
    details: [
      "Capacity: 5.7-liter removable inner cooking pot.",
      "Power: 1000-watt heating element.",
      "Functions: 16 pre-programmed cooking modes.",
      "Control: Digital control panel with a delay timer function.",
      "Safety: Built-in pressure relief valve and secure locking lid mechanism.",
    ],
      specs:[
      ["Lot", "48"],
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
      ["Lot", "49"],
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
    id: "e-bike-1",
    name: 'SWFT Volt Electric Bike',
    code: "SWFT-VOLT-BLK",
    category: "Sports",
    condition: "New",
    estimate: "700$",
    ////////////////////////////////////////////////////
    currentBid: "225",
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
      ["Lot", "50"],
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
    id: "VASAGLE-4-Tier-Corner-Shelf",
    name: 'VASAGLE 4-Tier Corner Shelf',
    code: "B07C21PTNL",
    category: "Furniture",
    condition: "New",
    estimate: "$40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/VASAGLE-4-Tier-Corner-Shelf.jpg",
    accent: "#dc2626",
    description:
      'The VASAGLE 4-Tier Corner Shelf Unit is a freestanding, space-saving wooden bookcase designed to fit flush into any 90-degree room corner. Its sleek white finish and modern zigzag silhouette make it an ideal storage solution for books, plants, and decorative accents in bedrooms, kitchens, or home offices.',
    details: [
      'Dimensions: 30 x 30 x 129.5 cm (11.8" x 11.8" x 51")',
      'Shelf Spacing: 30.5 cm (12") of height clearance between each tier',
      'Weight Capacity: Holds up to 15 kg (33 lbs) per individual shelf',
      "Material: 15 mm thick particleboard with a durable white melamine finish",
    ],
      specs:[
      ["Lot", "51"],
      ["Included", "Full set"],
      ["Price in origin country", "$40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "WOLTU-Bookcase-White-Bookcase",
    name: 'WOLTU Bookcase White Bookcase',
    code: "B09PFM4W77",
    category: "Furniture",
    condition: "New",
    estimate: "€70",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/WOLTU-Bookcase.jpg",
    accent: "#dc2626",
    description:
      'The WOLTU 6-Cube Bookcase with 3 Doors is a sleek, Scandinavian-style storage organizer crafted from durable white engineered wood. Its smart layout features three open display compartments alongside three enclosed cabinets with cut-out handles, making it a perfect dustproof solution for living rooms, bedrooms, or home offices.',
    details: [
      'Product Dimensions: Measures 59.6 x 29 x 91 cm (W x D x H), with individual cube spaces measuring 28 x 28 x 28 cm',
      'Premium Materials: Built from high-quality, E1-grade manufactured wood covered in a smooth, water-repellent, and scratch-resistant melamine veneer.',
      'Quiet & Dustproof: The three enclosed cabinets utilize magnetic soft-close hinges and clean, integrated notch handles to keep your items hidden away securely.',
      "Stable & Safe Design: Equipped with a built-in anti-tipping device for wall anchoring and non-slip floor protectors on the base.",
    ],
      specs:[
      ["Lot", "52"],
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
    id: "ceiling-fan",
    name: 'Ceiling Fan',
    code: "YM-QWABS001-52",
    category: "Electronics",
    condition: "New",
    estimate: "75$",
    ////////////////////////////////////////////////////
    currentBid: "115",
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
      ["Lot", "53"],
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
      ["Lot", "54"],
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
    id: "Ultimate-Speed",
    name: 'Ultimate Speed Car Battery Charger',
    code: "IAN 367512",
    category: "Electronics",
    condition: "New",
    estimate: "€40",
    ////////////////////////////////////////////////////
    currentBid: "100",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Charger.webp",
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
      ["Lot", "56"],
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
    id: "Nightstand",
    name: 'WOLTU 2x Bedside Table, Narrow Nightstand',
    code: "W0ETT0232-2",
    category: "Furniture",
    condition: "New",
    estimate: "€55",
    ////////////////////////////////////////////////////
    currentBid: "20",
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
      ["Lot", "57"],
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
      ["Lot", "58"],
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
      ["Lot", "59"],
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
    id: "ultenic2",
    name: 'Ultenic D6s',
    code: "Ultenic D6s",
    category: "Electronics",
    condition: "New",
    estimate: "$110",
    ////////////////////////////////////////////////////
    currentBid: "100",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Ultenic-D6s.webp",
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
      ["Lot", "60"],
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
      ["Lot", "61"],
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
    id: "SONGMICS-Shoe-Rack",
    name: 'SONGMICS Shoe Rack',
    code: "B0F5PHKFTC",
    category: "Furniture",
    condition: "New",
    estimate: "$35",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/SONGMICS-Shoe-Rack.jpg",
    accent: "#dc2626",
    description:
      'The SONGMICS 10-Tier Shoe Rack is a customizable metal storage tower designed to organize large footwear collections in entryways or closets. Its flexible, heavy-duty build allows you to split it into two separate units or adjust the shelves to fit boots and high heels.',
    details: [
      'Storage capacity: Holds 44 to 55 pairs of shoes depending on setup.',
      'Sturdy materials: Made of thickened steel tubes and reinforced premium plastic connectors.',
      'High weight capacity: Supports up to 22 lbs per tier',
      "Flexible configuration: Can be used upright, flipped upside down, or split into smaller units.",
    ],
      specs:[
      ["Lot", "62"],
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
    id: "multi-tier-storage-unit",
    name: 'Multi-tier storage unit',
    code: "B0F5PHKFTC",
    category: "Furniture",
    condition: "New",
    estimate: "$35",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/multi-tier.jpg",
    accent: "#dc2626",
    description:
      'This multi-tier storage unit is showcased in a bright, contemporary bathroom setting to highlight its space-saving design. The clean environment and thoughtful staging demonstrate how the sleek metal frame seamlessly integrates into modern home decor.',
    details: [
      'Functional Layout: The black metal shelving unit is placed directly over a standard toilet, illustrating its practical, space-maximizing design.',
      'Modern Aesthetic: The background features a minimalist bathroom with neutral large-format floor tiles, clean walls, and a contemporary floating vanity.',
      'Thoughtful Accents: The shelves are organized with everyday essentials, including rolled and stacked charcoal towels, amber apothecary bottles, a glass cotton swab holder, and a small potted succulent.',
      "Balanced Lighting: Bright, soft illumination highlights the matte finish of the frame and brings out the fine details of the decorative items without harsh glare.",
    ],
      specs:[
      ["Lot", "63"],
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
    id: "Cat-Tree-house",
    name: 'Cat Tree House',
    code: "Cat Tree",
    category: "Furniture",
    condition: "New",
    estimate: "£60",
    ////////////////////////////////////////////////////
    currentBid: "17",
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
      ["Lot", "64"],
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
    id: "hopvision-cordless-vacuum-cleaner",
    name: "Hopvision Cordless Vacuum Cleaner",
    code: "JQ02",
    category: "Electronics",
    condition: "New",
    estimate: "€80 to €130",
    ////////////////////////////////////////////////////
    currentBid: "40",
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
      ["Lot", "65"],
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
    id: "Feandrea-Dog-Crate",
    name: 'Feandrea Dog Crate',
    code: "B00QF6OAPO",
    category: "Furniture",
    condition: "New",
    estimate: "$40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Feandrea-Dog-Crate.jpg",
    accent: "#dc2626",
    description:
      'This Feandrea Medium Foldable Dog Crate features a durable black iron wire frame with a space-saving collapsible design. It is built with two secure doors and a slide-out plastic tray to make pet containment and cleanup effortless.',
    details: [
      "Dimensions: 77.5 x 48.5 x 55.5 cm (Medium size).",
      'Weight Capacity: Optimized for dogs weighing 11–18 kg (e.g., Dachshunds, French Bulldogs).',
      'Security: Equipped with two doors featuring L-shaped slide-bolt latches to prevent escapes.',
      "Floor Protection: Includes a removable, leak-proof plastic pan for fast cleaning and protective bottom pads to prevent floor scratches.",
    ],
      specs:[
      ["Lot", "66"],
      ["Included", "Full set"],
      ["Price in origin country", "$40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Childrens-seat",
    name: "Children's seat",
    code: "Children's seat",
    category: "Furniture",
    condition: "New",
    estimate: "$50",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Children's-seat.jpg",
    accent: "#dc2626",
    description:
      "The Pinolino Nicki für 4 is a colorful, child-sized wooden picnic table set integrated with dual benches for indoor or outdoor use. It offers a safe, stable, and vibrant seating arrangement where up to four toddlers can comfortably play, craft, or eat.",
    details: [
      "Sturdy Construction: Crafted from solid coniferous wood with a colorful lacquer finish.",
      'Child-Friendly Dimensions: Measures 90 cm L × 79 cm W × 50 cm H with a perfect toddler seat height of 28 cm.',
      'Seating Capacity: Designed with integrated benches to comfortably fit 4 children at once.',
    ],
      specs:[
      ["Lot", "67"],
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
    id: "Costway-Travel-Dog-Crate",
    name: 'Costway Travel Dog Crate',
    code: "B0GMW2FLPT",
    category: "Furniture",
    condition: "New",
    estimate: "$80",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Costway-Travel-Dog-Crate.jpg",
    accent: "#dc2626",
    description:
      'The Costway B0GMW2FLPT is a heavy-duty, trapezoidal aluminum dog crate engineered to fit safely and flush inside car trunks or SUVs. It provides a chew-proof, highly ventilated, and secure enclosure tailored for transporting cats and small dogs during road trips.',
    details: [
      "Vehicle-Optimized Shape: Features a unique sloped, trapezoidal frame designed to sit tightly against the back of your car's rear seats.",
      'Chew-Proof Construction: Built with robust, rust-resistant 2 cm thick aluminum alloy pipes and reinforced plastic corners to withstand scratchers and chewers.',
      'Safe Bar Spacing: Designed with a 6.5 cm gap between the bars, ensuring high visibility and plenty of airflow while keeping paws safely inside.',
      "Wide-Opening Safety Door: Equipped with a lockable front door that opens up to 100 degrees to allow hassle-free entry without scraping your car's interior.",
    ],
      specs:[
      ["Lot", "68"],
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
    id: "Standing-Desk",
    name: 'Bilbil Electric Standing Desk',
    code: "B0C7TDVDN3",
    category: "Furniture",
    condition: "New",
    estimate: "$100",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Standing-Desk.jpg",
    accent: "#dc2626",
    description:
      "This compact electric standing desk from Bilbil adjusts effortlessly from a sitting to a standing height at the push of a button. Designed for small spaces and home offices, its mobile H-frame base glides smoothly under chairs or couches for ultimate comfort.",
    details: [
      "Compact Workspace: Features a 32” x 24” engineered wood desktop, perfectly sized for a laptop, monitor, and daily work essentials.",
      "Smart Memory Controls: The built-in digital keypad includes 4 programmable memory presets to save and switch to your preferred heights.",
      "Smooth Motorized Lift: Quiet, single-motor electronic lift system transitions smoothly between 29” and 47” heights.",
      "Lockable Mobility: Equipped with four 2.4-inch swivel casters (including 2 locking wheels) to roll easily across hardwood or carpets.",
      "Sturdy H-Base Frame: Built with industrial-grade steel legs that keep the single-column workstation completely stable while typing.",
    ],
      specs:[
      ["Lot", "69"],
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
    id: "Coocaa-43-inch-Roku-Smart-TV-1",
    name: 'Coocaa 43-inch Roku Smart TV',
    code: "B0DWHB9DW4",
    category: "Electronics",
    condition: "New",
    estimate: "€180",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/roku-43'.jpg",
    accent: "#dc2626",
    description:
      "The Coocaa 43R5G Roku TV is an affordable 43-inch Smart TV featuring crisp 4K Ultra HD resolution and integrated smart home capabilities. Operating on the user-friendly Roku TV OS, it offers seamless navigation and quick access to thousands of streaming channels and live broadcasts.",
    details: [
      "Display Quality: 43-inch LED screen with 4K UHD (3840 x 2160) resolution and HDR10 / HLG support for enhanced contrast.",
      "Smart Interface: Powered by Roku TV OS, supporting major platforms like Netflix, Disney+, Prime Video, and Apple TV.",
      "Connectivity: Equipped with 3x HDMI ports (including ARC), USB ports, dual-band Wi-Fi, and an Ethernet (LAN) port.",
      'Smart Home Control: Compatible with Apple AirPlay, Apple Home, and Google Home for effortless casting and voice integration.',
    ],
      specs:[
      ["Lot", "70"],
      ["Included", "Full set"],
      ["Price in origin country", "€180"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Playpen-Moni-Lollipop-Blue",
    name: 'Lupilu Baby Travel',
    code: "3800146249045",
    category: "Furniture",
    condition: "New",
    estimate: "€50",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/PlaypenMoni.jpg",
    accent: "#dc2626",
    description:
      "This Lupilu Baby Travel Cot serves as a lightweight, dual-purpose portable crib and playpen designed for convenient travel. Its sturdy frame features breathable mesh side panels to ensure optimal airflow and easy viewing of your child.",
    details: [
      "Design: Two-toned mint green and grey color scheme.",
      "Portability: Features a quick-collapse mechanism for compact folding and travel.",
      "Safety: Padded top rails protect children from hard bumps and impacts.",
      "Visibility: Full mesh sides allow you to keep an eye on your baby from any angle.",
      "Mobility: Built-in wheels on one side allow for easy repositioning around the room.",
    ],
      specs:[
      ["Lot", "71"],
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
    id: "L-Shaped-desk",
    name: 'L Shaped Computer Desk',
    code: "VGDFGDF",
    category: "Furniture",
    condition: "New",
    estimate: "$160",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/L-Shaped-desk.png",
    accent: "#dc2626",
    description:
      'The Anwick 94.5" Home Office Desk is a versatile, space-saving workstation featuring a modern black metal frame integrated with multi-tier storage shelves and an upper hutch. It can be built either as a compact corner L-shaped desk or expanded into a long straight table designed to comfortably accommodate two people.',
    details: [
      'Reversible Layout: Assembles into a 67-inch L-shape or a 94.5-inch long desk to fit your specific room layout.',
      "Smart Storage: Equipped with a built-in upper hutch shelf, a side fabric pocket, a mesh pegboard, and a lower two-tier bookshelf.",
      'Bonus Seating: Comes packaged with a matching, space-saving under-desk storage stool.',
      "Sturdy Build: Constructed with a rust-preventing, powder-sprayed steel frame and adjustable feet for complete stability on uneven floors.",
    ],
      specs:[
      ["Lot", "72"],
      ["Included", "Full set"],
      ["Price in origin country", "$160"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Kids-Bicycle",
    name: "Kids Bicycle",
    code: "B0DNYYVNKB",
    category: "Furniture",
    condition: "New",
    estimate: "$150",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Kids-Bicycle.jpg",
    accent: "#dc2626",
    description:
      "This is a 14-inch BODIOO kids' bicycle designed in vibrant blue for young beginner riders. It features a rugged alloy steel frame built to handle everyday use by active boys and girls.",
    details: [
      "Target Age: Best suited for children aged 3 to 6 years old (heights between 94–107 cm).",
      'Dual Brakes: Features a manual front handbrake and a rear coaster brake for safer, intuitive stopping.',
      'Grow-with-Me Fit: Outfitted with an adjustable handlebar and seat to accommodate your growing child.',
    ],
      specs:[
      ["Lot", "73"],
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
      ["Lot", "74"],
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
      ["Lot", "76"],
      ["Included", "Full set"],
      ["Price in origin country", "€70"],
      ["Issues", "Broken Leg"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "outdoor-rotary-clothes-airer",
    name: 'outdoor rotary clothes airer',
    code: "clothes airer",
    category: "Furniture",
    condition: "New",
    estimate: "$60",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/clothes-airer.jpg",
    accent: "#dc2626",
    description:
      'This rotary washing line is an outdoor umbrella-style drying rack featuring a four-arm folding metal frame designed to maximize laundry space. It features integrated clotheslines across the rotating head, allowing garments to dry evenly in the wind before collapsing down for neat storage.',
    details: [
      "Heavy-Duty Frame: Built with four strong aluminum or steel arms connected to a sturdy central supporting pole.",
      'Large Drying Capacity: Provides multiple tiers of tightly tensioned line space to hang several loads of laundry at once.',
      'Wind-Driven Rotation: The upper frame spins freely in the breeze, which accelerates drying times and lets you access all sides from one spot.',
      "Collapsible Umbrella Design: Features an easy-glide lifting mechanism to raise the arms for use or collapse them downward for compact storage.",
    ],
      specs:[
      ["Lot", "77"],
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
    id: "PARKSIDE-lawnmower",
    name: 'Parkside Lawnmower',
    code: "PBEM39C2",
    category: "Tools",
    condition: "New",
    estimate: "€130",
    ////////////////////////////////////////////////////
    currentBid: "120",
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
      ["Lot", "78"],
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
    id: "modern-coffee-table",
    name: 'Modern lift-top coffee table',
    code: "modern-coffee-table",
    category: "Tools",
    condition: "New",
    estimate: "€60",
    ////////////////////////////////////////////////////
    currentBid: "120",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/modern-coffee-table.jpg",
    accent: "#dc2626",
    description:
      "This modern lift-top coffee table features a hidden storage compartment with wood-toned dividers and an integrated open side shelf. Its minimalist white finish paired with tapered wooden legs offers a sleek, functional aesthetic perfect for contemporary living spaces.",
    details: [
      "Dual-Function Top: A mechanical lift-top surface that raises to reveal a spacious hidden storage area with built-in dividers.",
      "Open Storage Shelf: A side-facing open compartment that provides quick, easy access to books, remotes, or decor.",
      "Modern Aesthetic: Styled with a clean white finish and mid-century modern tapered wooden legs for a sleek, contemporary look.",
    ],
      specs:[
      ["Lot", "79"],
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
    id: "Smart-Cool-7000-3-3",
    name: 'Comfee Smart Cool 7000-3',
    code: "Smart Cool 7000-3",
    category: "Furniture",
    condition: "New",
    estimate: "$170",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Smart-Cool.webp",
    accent: "#dc2626",
    description:
      "The Comfee Smart Cool 7000-3 is a compact, 3-in-1 portable air conditioner that delivers efficient cooling, ventilation, and dehumidification for spaces up to 25 m². It features integrated Wi-Fi control, allowing you to effortlessly manage your indoor climate via a smartphone app or voice assistants like Alexa and Google Home.",
    details: [
      "Performance capacity: 7,000 BTU/h (2.0 kW) cooling power.",
      "Smart connectivity: App and voice control capabilities.",
      "Eco-friendly refrigerant: Uses natural R290 cooling agent.",
      "Protective coating: Golden Fin tech prevents bacteria/corrosion.",
      "Energy rating: Efficient Class A power consumption.",
      "Portability: Built-in wheels for easy room-to-room movement.",
    ],
      specs:[
      ["Lot", "80"],
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
    id: "Bestron-Electric",
    name: "Bestron Electric pizza oven",
    code: "B09C8NHX6J",
    category: "Electronics",
    condition: "New",
    estimate: "60€",
    ////////////////////////////////////////////////////
    currentBid: "25",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Bestron-Electric.jpg",
    accent: "#dc2626",
    description:
      "The Bestron Viva Italia APZ400Z is a versatile 2-in-1 kitchen appliance that functions as a high-powered electric pizza maker and an open tabletop grill. It is designed to bake fresh or frozen pizzas up to 27 cm in diameter quickly and evenly using simultaneous top and bottom heating elements.",
    details: [
      "Power & Performance: Draws 1800 Watts of power to preheat in 7 minutes and fully bake pizzas in under 10 minutes",
      "Temperature Control: Equipped with a manual dial for step-less temperature adjustment up to 230°C (446°F)",
      "180-Degree Opening: The lid unfolds completely flat to convert the unit into a large, dual-surface table grill",
      "Easy Maintenance: Built with premium non-stick coated plates to ensure effortless food release and simple cleanup.",
      "Safe Design: Features heat-resistant handles, non-slip feet, and clear power/ready indicator lights.",
    ],
      specs:[
      ["Lot", "81"],
      ["Included", "Full set"],
      ["Price in origin country", "60€"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Ninja-Desk",
    name: 'Ninja Desk',
    code: "TBL-Z10 120CM BLK",
    category: "Furniture",
    condition: "New",
    estimate: "100$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Ninja-Desk.jpg",
    accent: "#dc2626",
    description:
      "This 120cm Z-shaped gaming desk features a split-panel desktop with a sleek, textured carbon-fiber finish. Designed specifically for esports setups, it combines an aggressive aesthetic with functional cable and accessory organization.",
    details: [
      "Desk Dimensions: 120 cm wide × 60 cm deep × 73 cm high.",
      "Surface Material: 15mm thick Medium Density Fiberboard (MDF) coated in carbon-fiber PVC.",
      "Support Frame: Heavy-duty, 1.0mm thick Z-shaped steel legs for maximum stability.",
      "Esports Design: Built-in ABS plastic side armor panels equipped with integrated multi-color RGB lighting.",
      "Convenience Accessories: Includes a dedicated under-desk headphone storage hook and a side-mounted cup holder.",
    ],
      specs:[
      ["Lot", "82"],
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
    id: "silvercrest-coffeemachine",
    name: 'Silvercrest Coffee Machine',
    code: "silvercrest-coffeemachine",
    category: "Furniture",
    condition: "New",
    estimate: "30$",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/silvercrest-coffeemachine.jpg",
    accent: "#dc2626",
    description:
      "This programmable drip coffee maker features a modern stainless steel finish and an integrated digital control panel. It utilizes an insulated thermal carafe to lock in fresh coffee aromas and keep beverages warm without scorching them on a hot plate",
    details: [
      "Power Capacity: Operates at 900 Watts for optimized water heating and brewing.",
      "Volume Output: Large 1.25-liter reservoir brews up to 10 large cups or 15 smaller cups in a single cycle.",
      "24-Hour Timer: Integrated electronic display allows you to schedule delayed automated brewing.",
      "Aroma Settings: Features an adjustable 3-level intensity control to customize the strength of your brew.",
      "Mess-Free Design: Equipped with a removable filter bracket (size 1x4) featuring an automatic drip-stop mechanism.",
    ],
      specs:[
      ["Lot", "84"],
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
      ["Lot", "85"],
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
    id: "WOLTU-Kids-Bookshelf",
    name: "WOLTU Kids Bookshelf",
    code: "Kids Bookshelf",
    category: "Furniture",
    condition: "New",
    estimate: "$40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/WOLTU-Kids -Bookshelf.jpg",
    accent: "#dc2626",
    description:
      "This space-saving kids' storage organizer combines a multi-tier sling bookcase with vertical fabric toy bins. Its low-profile, child-friendly design promotes independence by keeping books and toys easily accessible to young children.",
    details: [
      "Product Type: Multi-functional toddler Montessori-style bookshelf and toy storage unit.",
      'Storage Layout: Features 4 tiered fabric sling pockets for front-facing book display, 3 side compartments with collapsible fabric drawers, and 1 large bottom open bin.',
      'Materials: Constructed from durable engineered wood (white MDF) paired with breathable non-woven fabric components.',
    ],
      specs:[
      ["Lot", "86"],
      ["Included", "Full set"],
      ["Price in origin country", "$40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Juicers-housnat",
    name: "HOUSNAT Centrifugal Extractor Juicer",
    code: "AMR526",
    category: "Electronics",
    condition: "New",
    estimate: "30$",
    ////////////////////////////////////////////////////
    currentBid: "20",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Juicers-housnat.jpg",
    accent: "#dc2626",
    description:
      "The Housnat AMR526 is a compact, 400W centrifugal juicer engineered for fast and efficient daily extraction. It features a wide feed chute and multiple speed settings to easily handle both soft fruits and hard vegetables with minimal prep work.",
    details: [
      "Dual Speed Options: Dual-speed control knob with a manual pulse function tailored for different ingredient textures.",
      "Extra-Wide Chute: Large 3-inch feed inlet reduces the need to pre-cut fruits and vegetables.",
      "Precision Blades: Sharp 304 stainless steel micro-mesh filter basket designed to maximize juice yield.",
      "Safety Lock: Integrated locking arm mechanism prevents operation unless all components are safely secured.",
    ],
      specs:[
      ["Lot", "87"],
      ["Included", "Full set"],
      ["Price in origin country", "65$"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
// NO.88 Dehumidier
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
      ["Lot", "89"],
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
    id: "e-bike-2",
    name: 'SWFT Volt Electric Bike',
    code: "SWFT-VOLT-BLK",
    category: "Sports",
    condition: "New",
    estimate: "700$",
    ////////////////////////////////////////////////////
    currentBid: "225",
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
      ["Lot", "90"],
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
    id: "Filing-Cabinet-Vagur",
    name: 'Tectake Filing Cabinet Vagur',
    code: "405458",
    category: "Furniture",
    condition: "New",
    estimate: "£55",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Filing-Cabinet-Vagur.jpg",
    accent: "#dc2626",
    description:
      'The Tectake Vagur (Model 405458) is a sleek, black mobile office cabinet designed for compact, under-desk organization and reliable data privacy. It features two spacious, independently lockable drawers specifically configured to safely store A4-sized documents and essential office supplies.',
    details: [
      "Dual-Lock Security: Equipped with two separate cylinder locks and individual keys to secure each drawer independently.",
      'Anti-Tip Stability: Features five smooth-swiveling wheels, including a front-center support castor to prevent tipping when drawers are fully extended.',
      'Durable Construction: Built from scratch-resistant, easy-to-clean chipboard material with stylish, curved metallic silver handles.',
      "Product Dimensions: Measures 54.5 cm (H) x 40 cm (W) x 46 cm (D) and weighs approximately 16.4 kg.",
    ],
      specs:[
      ["Lot", "91"],
      ["Included", "Full set"],
      ["Price in origin country", "£55"],
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
      ["Lot", "92"],
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
    id: "Sewing-Machine-Table",
    name: 'Sewing Machine Table',
    code: "HW65668",
    category: "Furniture",
    condition: "New",
    estimate: "$95",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Sewing-Machine-Table.jpg",
    accent: "#dc2626",
    description:
      'The Costway Folding Sewing Machine Table is a versatile, space-saving workstation that easily converts from a large crafting desk into a compact storage cabinet. It features a smart fold-down tabletop and mobile caster wheels, making it an ideal choice for small apartments, craft rooms, or home offices.',
    details: [
      '2-in-1 Design: Tabletop expands on heavy-duty hinges for work and folds down when finished to save valuable floor space.',
      "Smart Storage: Equipped with a swing-out door that houses three deep side baskets and an inner shelf to keep crafting supplies organized.",
      'Built-in Power Strip: Includes an integrated charging station with outlets and USB ports to power your sewing machine, iron, or laptop.',
      "Easy Mobility: Mounted on 360° rolling casters—including lockable wheels—to smoothly shift the station and secure it safely in place.",
    ],
      specs:[
      ["Lot", "93"],
      ["Included", "Full set"],
      ["Price in origin country", "$95"],
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
    currentBid: "20",
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
      ["Lot", "94"],
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

  // NO.95 Vibration plate gold

  {
    id: "Energy-saving-pot",
    name: 'Energy-saving pot',
    code: "12196",
    category: "Electronics",
    condition: "New",
    estimate: "€50",
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
      'Easy Maintenance: Includes a high-quality non-stick coating for effortless food release and quick cleanup.',
    ],
      specs:[
      ["Lot", "96"],
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
    id: "weskate-Skateboard",
    name: "Weskate Skateboard",
    code: "3108-1",
    category: "Electronics",
    condition: "New",
    estimate: "$30",
    ////////////////////////////////////////////////////
    currentBid: "25",
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
    ],
      specs:[
      ["Lot", "97"],
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
    id: "Playtive-Fairy-Bouncy-Castle",
    name: 'Playtive Fairy Bouncy Castle',
    code: "879000115208",
    category: "Toys",
    condition: "New",
    estimate: "€35",
    ////////////////////////////////////////////////////
    currentBid: "15",
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
      ["Lot", "98"],
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

  // NO.99 
  //  4 in 1

  {
    id: "merach-treadmil",
    name: 'Merach Treadmill',
    code: "MR-T25",
    category: "Sports",
    condition: "New",
    estimate: "£280",
    ////////////////////////////////////////////////////
    currentBid: "55",
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
      ["Lot", "100"],
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

  // NO. 101 Clothes hanger
  // NO. 102 Shoe rack
  {
    id: "VASAGLE-LED-Nightstand",
    name: 'VASAGLE LED Nightstand',
    code: "B0DB7J6ZWW ",
    category: "Furniture",
    condition: "New",
    estimate: "$100",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/VASAGLE-LED-Nightstand.jpg",
    accent: "#dc2626",
    description:
      "This set of two VASAGLE nightstands combines modern style with functional convenience, featuring a sleek ebony black finish that complements any bedroom decor. Each table is equipped with a built-in power strip and multiple drawers to keep your essential electronics charged and your bedside organized.",
    details: [
      "Built-in Power: Includes 2 AC outlets and 2 USB ports with a 4.9-foot power cord.",
      'Ample Storage: Features 3 deep drawers with smooth handles for seamless opening and closing.',
      'Sturdy Construction: Crafted from durable particleboard to ensure long-term stability and support.',
    ],
      specs:[
      ["Lot", "103"],
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
    id: "Mini-Exercise-Bike",
    name: "Mini Exercise Bike",
    code: "B0F9KM67D7",
    category: "Furniture",
    condition: "New",
    estimate: "$40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Mini-Exercise-Bike.jpg",
    accent: "#dc2626",
    description:
      "This compact mini exercise bike is a portable, low-impact pedal exerciser designed for light cardio, joint rehabilitation, and muscle toning. It features an adjustable resistance knob and an integrated LCD digital monitor, making it perfect for active sitting at home or under your office desk.",
    details: [
      "Multi-Use Design: Dual-function pedals can be operated by feet or hands to work out either your legs or arms.",
      'Real-Time Tracking: Features a digital LCD screen that tracks time, count, RPM, and calories burned.',
      'Space-Saving Frame: Foldable and lightweight body structure allows for easy storage and effortless travel.',
    ],
      specs:[
      ["Lot", "104"],
      ["Included", "Full set"],
      ["Price in origin country", "$40"],
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
      ["Lot", "105"],
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

  // NO.106 Mini BBQ

     {
    id: "Exercise-Bike",
    name: "Exercise Bike",
    code: "Exercise Bike",
    category: "Sports",
    condition: "New",
    estimate: "$40",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Exercise-Bike.jpg",
    accent: "#dc2626",
    description:
      "This item is a dual pedal exerciser machine designed for low-impact, full-body physical therapy and home workouts. It features simultaneous upper and lower limb training mechanisms, allowing users to exercise their arms and legs together while seated comfortably in a chair or couch.",
    details: [
      "Multi-Functional Training: Features foot pedals for lower-body movement, top rotating handgrips for upper-body training, and mid-mounted resistance bands for chest or arm strength conditioning.",
      'Adjustable Height: Built with a telescoping central frame column that can be raised or lowered to customize the reach for different body heights or seating preferences.',
      'Customizable Resistance: Equipped with tension control knobs to increase or decrease rotational friction for tailored workout intensities.',
    ],
      specs:[
      ["Lot", "107"],
      ["Included", "Full set"],
      ["Price in origin country", "$40"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Jewelry-Armoire",
    name: 'Giantex Standing Jewelry Armoire',
    code: "B07M72H67Q",
    category: "Furniture",
    condition: "New",
    estimate: "$95",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Jewelry-Armoire.jpg",
    accent: "#dc2626",
    description:
      'This freestanding brown engineered wood armoire combines a full-length vanity mirror with a heavy-duty jewelry organizer cabinet. Its perimeter border door is uniquely lined with built-in, battery-operated bulbs to perfectly illuminate your dressing and makeup routine.',
    details: [
      'Integrated Lighting: Features 18 battery-operated LED bulbs surrounding the mirror frame.',
      "Massive Jewelry Capacity: Houses 142 divisional slots including 42 earring slots, 33 earring holes, 40 ring slots, and 7 necklace/bracelet hooks.",
      'Dedicated Vanity Station: Includes 16 lipstick holder compartments and an auxiliary small mirror built directly into the interior storage cabinet.',
      "Product Dimensions: Measures approximately 57 inches high by 14 inches wide across its sturdy floor base.",
    ],
      specs:[
      ["Lot", "108"],
      ["Included", "Full set"],
      ["Price in origin country", "$95"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },
  {
    id: "Computer-Desk",
    name: 'Computer Desk',
    code: "B0D8JZ8G4R",
    category: "Furniture",
    condition: "New",
    estimate: "$100",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Computer-Desk.jpg",
    accent: "#dc2626",
    description:
      'The Wifehelper 1.4m Ergonomic Computer Gaming Desk is a spacious, modern workstation tailored for smooth gaming and workflow setups. It features a curved front edge and a durable black finish supported by sturdy, minimalist steel legs.',
    details: [
      'Desktop Width: 1.4 meters (140 cm) wide for dual monitors.',
      "Ergonomic Cutout: Beveled front curve allows for closer seating comfort.",
      'Stable Frame: Angled steel legs reinforced with cross-bracing.',
      "Cable Management: Built-in desktop grommet hole to route wires cleanly.",
    ],
      specs:[
      ["Lot", "109"],
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
    id: "Hisense-E7-Series-QLED-Smart-TV",
    name: 'Hisense E7 Series QLED Smart TV',
    code: "B0F1MSX2W7",
    category: "Electronics",
    condition: "New",
    estimate: "€200",
    ////////////////////////////////////////////////////
    currentBid: "0",
    //////////////////////////////////////////////////// 
    closing: "Friday, 8:10 PM",
    image: "/products/Hisense-43.jpg",
    accent: "#dc2626",
    description:
      "This is a Hisense 43-inch E7 Series Smart TV that features premium 4K Ultra HD resolution powered by QLED display technology. It runs on the VIDAA Smart OS platform, providing direct out-of-the-box access to popular streaming platforms like Netflix, YouTube, and Prime Video.",
    details: [
      "Screen Size: 43 inches (108 cm)",
      "Display Tech: QLED (Quantum Dot Colour) for vibrant shades",
      "Picture & Audio: Supports Dolby Vision HDR and Dolby Atmos sound",
      'Smart Platform: VIDAA OS with built-in streaming apps',
    ],
      specs:[
      ["Lot", "110"],
      ["Included", "Full set"],
      ["Price in origin country", "€200"],
    ],
    bidder: {
      name: "Rami B.",
      amount: "$980",
      since: "Leading for 2 minutes",
      badge: "Interior buyer",
    },
  },

  

  
  





















  






  
  // {
  //   id: "Cordless-Upholstery",
  //   name: "Cordless Upholstery and Carpet Cleaner",
  //   code: "100399003",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "€99.99",
    
  //   currentBid: "36",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/champonese.webp",
  //   accent: "#dc2626",
  //   description:
  //     "Tackle tough spots and spills anywhere with the ultimate portable cleaning companion. Powered by a high-performance 20V lithium-ion battery, this lightweight, cordless carpet cleaner delivers powerful suction to lift deep stains from carpets, rugs, car interiors, and home upholstery without tethering you to an electrical outlet.",
  //   details: [
  //     "Cordless Convenience: Powered by a removable 20V battery platform for unlimited portability around the home or in your vehicle.",
  //     "Dual Tank System: Keeps clean solution and dirty water completely separate for a pristine, streak-free clean every time.",
  //     "Powerful Lift Suction: Engineered to pull heavy liquids, embedded dirt, and stubborn pet stains directly out of dense fibers.",
  //     "Multi-Surface Versatility: Safely lifts messes from sofas, area rugs, stairs, car seats, and pet beds.",
  //     "Targeted Cleaning Tools: Includes specialized scrubbing brush attachments designed to clean both wide paths and tight, hard-to-reach crevices.",
  //     "Compact & Lightweight: Easy to carry with an integrated handle, making storage simple and stair cleaning effortless.",
  //   ],
  //     specs:[
  //     ["Lot", "37"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€99.99"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  // {
  //   id: "food-slicer",
  //   name: "Silvercrest Food Slicer",
  //   code: "01.492989.01.460",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "€30",
    
  //   currentBid: "9",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/foodslicer.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This SilverCrest Electric Multi-Purpose Slicer is a compact, space-saving kitchen appliance designed for effortlessly slicing bread, meat, cheese, and vegetables. It features a foldable design that stores away easily, making it perfect for smaller kitchens without sacrificing performance.",
  //   details: [
  //     "Motor Power: Equipped with a 100W eco-motor for efficient cutting performance.",
  //     "Adjustable Slicing: Customize thickness up to 17 mm to suit different food items.",
  //     "Compact Build: Measures 33 x 27 x 20 cm when open and folds down to a slim width of just 9.6 cm.",
  //     "Safety & Build: Features a high-quality stainless steel blade with a safety switch and non-slip feet for secure operation.",
  //   ],
  //     specs:[
  //     ["Lot", "38"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€30"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // }, 
  // {
  //   id: "Costway-Cat-Litter-Box",
  //   name: 'Costway Cat Litter Box ',
  //   code: "73496852",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$70",
    
  //   currentBid: "30",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/pv10002wh1_1_.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This sleek, dual-purpose credenza functions as a modern home accent while completely concealing your cat's litter pan out of sight. It features a separate entryway compartment designed to capture tracking granules before your pet steps back out onto your floors.",
  //   details: [
  //     '3-in-1 Design: Blends seamlessly into your home decor as a stylish side table, TV console, or hidden pet washroom.',
  //     'Smart Litter Control: An internal entry divider holds an included scratching pad to clean paws and catch stray litter particles.',
  //     "Sturdy Construction: Crafted from durable, glossy white engineered wood and supported by solid elevated legs for stability.",
  //     'User-Friendly Access: Equipped with double front doors and classic round knobs for quick cleaning and scooping.',
  //     'Ventilated Back Panel: Built with integrated rear air vents to maintain fresh airflow and control unpleasant odors.',
  //   ],
  //     specs:[
  //     ["Lot", "41"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$70"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
 
  // {
  //   id: "planetary-stand-mixer",
  //   name: "Z.I.T Planetary Stand Mixer",
  //   code: "ZIT1001",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "$90 to $150",
    
  //   currentBid: "40",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Planetary-Stand-Mixer.jpeg",
  //   accent: "#dc2626",
  //   description:
  //     "The Z.I.T cuisine Planetary Stand Mixer (ZIT1001) is an 1800W high-performance electric kitchen machine designed for heavy-duty household baking and kneading. Its planetary mixing action ensures even, thorough blending of ingredients inside its massive, family-sized stainless steel bowl.",
  //   details: [
  //     "Motor Power: 1800 Watts",
  //     "Bowl Capacity: 8.5 Liters",
  //     "Mixing Action: Planetary Beating Action",
  //     "Included Attachments: Y-Stirrer, Dough Hook, and Whisk",
  //     "Speed Management: Adjustable control knob",
  //   ],
  //     specs:[
  //     ["Lot", "55"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$110 to $140"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
 
 
  // {
  //   id: "VenenWalker-PRO2",
  //   name: "VenenWalker® PRO2",
  //   code: "VenenWalker® PRO2",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "€299",
    
  //   currentBid: "40",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/VenenWalkerPRO2.webp",
  //   accent: "#dc2626",
  //   description:
  //     "The VenenWalker Pro 2 is a certified medical pressotherapy device that uses intermittent pneumatic compression to improve blood circulation and reduce leg swelling. It mimics the body's natural muscle pump, making it highly effective for treating heavy legs, varicose veins, and lymphatic buildup.",
  //   details: [
  //     "3-Chamber System: Alternating air cushions inflate and deflate sequentially to massage the legs from the ankles up to the thighs.",
  //     "Adjustable Pressure: Allows customizable compression levels up to a maximum pressure of 120 mmHg.",
  //     "Integrated Timer: Features an automatic shut-off function with selectable session lengths from 0 to 60 minutes.",
  //     "Universal Leg Sleeves: Includes two double-walled boots with an 85 cm length and a maximum thigh circumference of 70 cm.",
  //     "Medical Certification: Registered as an official medical device for treating chronic venous insufficiency and lymphedema.",
  //   ],
  //     specs:[
  //     ["Lot", "61"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€299"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
 
 
  
  // {
  //   id: "GourmetMaxx-12L",
  //   name: 'Digital Air Fryer 12L',
  //   code: "13606",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "€110",
    
  //   currentBid: "40",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/gourmetmaxx12L.webp",
  //   accent: "#dc2626",
  //   description:
  //     "The GourmetMaxx 13606 is a 1700-watt digital air fryer oven featuring a large 12-liter capacity and versatile 9-in-1 multi-cooking functions. It combines an air fryer, rotary grill, and dehydrator into one countertop appliance, making it ideal for preparing family-sized meals efficiently.",
  //   details: [
  //     "Capacity: 12-liter XXL interior space suitable for up to 8 portions or three 23 cm pizzas.",
  //     "Power: 1700 watts of high-efficiency heating power for rapid cooking without preheating.",
  //     "Programs: 10 preset smart programs on a digital touchscreen for quick, one-touch cooking.",
  //     "Functions: 9 modes including air frying, roasting, baking, grilling, and food dehydrating.",
  //     "Accessories: Includes a rotisserie spit, rotating fries basket, 3 mesh grids, kebab skewers, and a drip tray.",
  //     "Safety: Built with a cool-touch housing, an insulated viewing window, and an automatic shut-off feature.",
  //   ],
  //     specs:[
  //     ["Lot", "69"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€110"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  // {
  //   id: "Mini-Fridge",
  //   name: 'Upstreman Mini Fridge',
  //   code: "Upstreman BR321",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "170$",
    
  //   currentBid: "20",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/upsterman.webp",
  //   accent: "#dc2626",
  //   description:
  //     "The Upstreman BR321 is a highly popular, energy-efficient 3.2 Cu.Ft. single-door mini fridge designed for dorm rooms, bedrooms, and offices. It delivers whisper-quiet cooling down to 32°F and features a flexible interior with adjustable glass shelves to maximize small spaces.",
  //   details: [
  //     "Storage Layout: Offers 2.9 Cu.Ft. of fresh food storage across two adjustable glass shelves, a bottom crisper drawer, and door bottle racks.",
  //     "Chiller Box: Features a small 0.3 Cu.Ft. internal freezer compartment suitable for ice trays, ice packs, or short-term frozen snacks.",
  //     "Ultra-Quiet Operation: Runs at a low noise level of 38 dB, ensuring it won't disturb your sleep or work.",
  //     "Temperature Adjustment: Equipped with a mechanical control dial offering 5 adjustable cooling levels ranging from 32°F to 50°F.",
  //     "Adaptable Design: Built with a reversible door and adjustable leveling feet to accommodate uneven flooring and different room configurations.",
  //   ],
  //     specs:[
  //     ["Lot", "71"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "170$"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
  
   
  // {
  //   id: "Barbara-Klein-seated-compact-mini-stepper",
  //   name: 'Barbara Klein seated compact mini stepper',
  //   code: "481600",
  //   category: "Sports",
  //   condition: "New",
  //   estimate: "€65",
    
  //   currentBid: "215",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/B&K2.png",
  //   accent: "#dc2626",
  //   description:
  //     "The BK Workout Cube by Barbara Klein is a compact, multifunctional home exercise machine that combines a step machine with a swivel stool. It is designed to provide low-impact cardio, core conditioning, and lower-body toning entirely from a comfortable, seated position.",
  //   details: [
  //     "360° Swivel Seat: Features a thick, cushioned rotating top designed to engage your abdominal and core muscles during movement.",
  //     "Dual Foot Pedals: Equipped with textured, non-slip vertical stepping plates for a smooth hydraulic resistance workout.",
  //     "LCD Fitness Monitor: Displays essential real-time workout tracking data including steps, time elapsed, and estimated calories burned.",
  //     "Heavy-Duty Frame: Constructed with a supportive, black tubular steel outer handle system for safety and stability.",
  //     "Space-Saving Design: Designed with a small footprint that easily fits under tables or in small living areas when not in use.",
  //   ],
  //     specs:[
  //     ["Lot", "76"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€65"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  

  // {
  //   id: "Barbara-Klein-Mini-Electric-Elliptical",
  //   name: 'Barbara Klein Mini Electric Elliptical',
  //   code: " JF-J-10",
  //   category: "Sports",
  //   condition: "New",
  //   estimate: "$179",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/B&K.png",
  //   accent: "#dc2626",
  //   description:
  //     "The Barbara Klein Mini Electric Elliptical Trainer is a compact, low-impact exercise machine designed for passive or active leg workouts while sitting down. It is ideal for senior mobility, physical therapy rehab, or burning light calories under an office desk.",
  //   details: [
  //     "Dual-Mode Operation: Functions as an automated electric pedal assist or manual resistance trainer.",
  //     "12 Speed Levels: Features adjustable motorized pacing to accommodate various fitness and mobility levels.",
  //     "Remote Controlled: Includes a wireless remote control to seamlessly alter speed and direction without bending over.",
  //     "Bi-Directional Pedaling: Supports both forward and reverse movement to target different leg muscle groups.",
  //     "Digital Display: Built-in LCD monitor tracks training data including time, speed, distance, and calories.",
  //   ],
  //     specs:[
  //     ["Lot", "88"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$179"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
  
  
  
  // {
  //   id: "SONGMICS-Parasol",
  //   name: 'SONGMICS parasol',
  //   code: "GPU202G01",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$50",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/SONGMICS-parasol.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This SONGMICS market patio umbrella features a charcoal-gray canopy supported by a robust metal frame and an integrated manual crank for smooth operation. Designed for residential outdoor spaces, it provides reliable shade and weather resistance over dining tables or standalone seating arrangements.",
  //   details: [
  //     "Sun Protection: Engineered with a high-density fabric canopy offering up to UPF 50+ UV shielding.",
  //     "Crank System: Equipped with an easy-to-use mechanical hand crank built directly into the pole for effortless opening and closing.",
  //     'Sturdy Frame: Built with high-strength, powder-coated metal ribs that resist rusting and wind distortion.',
  //     'Ventilated Canopy: Features a single wind vent at the apex to enhance stability by letting air pass through freely.',
  //     'Standard Fit: Uses a standard center pole diameter compatible with most patio tables and base weights.',
  //   ],
  //     specs:[
  //     ["Lot", "97"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$50"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  // {
  //   id: "Parkside-Performance-12V-Cordless-Rotary-Tool",
  //   name: 'Parkside Performance 12V Cordless Rotary Tool',
  //   code: "PPFBSA 12 A1",
  //   category: "Tools",
  //   condition: "New",
  //   estimate: "€70",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/PPFBSA12A1.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This Parkside Performance 12V Cordless Rotary Tool Set is a versatile, high-precision multi-tool powered by an efficient brushless motor for hobby, crafting, and DIY projects. It comes packaged as a comprehensive starter kit complete with various specialized cutting guides, a battery, a charger, and a rugged aluminum carrying case.",
  //   details: [
  //     "Brushless Motor Technology: Delivers higher efficiency, a longer service life, and less wear compared to standard brushed motors.",
  //     "Digital Speed Control: Features an onboard display screen and control buttons to easily adjust and monitor operational speeds from 5,000 to 32,000 RPM.",
  //     "12V Lithium-Ion Battery System: Uses a removable 12V battery compatible with other tools in the Parkside 12V Team family.",
  //     'Premium Guide Attachments: Includes a parallel rip fence, a router/plunge depth stop, and 45°/90° angle tables for highly accurate cutting, milling, and grinding.',
  //   ],
  //     specs:[
  //     ["Lot", "98"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€70"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
  // {
  //   id: "Ladder-DAVDING",
  //   name: 'Ladder DAVDING',
  //   code: "2412761",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$35",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Ladder-DAVDING.webp",
  //   accent: "#dc2626",
  //   description:
  //     "The JYSK DAVDING 2-step ladder is a compact and foldable household stepping stool designed for safe, easy reach around the home. It features wide, slip-resistant steps and a sturdy frame that collapses flat to easily fit into tight storage spaces.",
  //   details: [
  //     "Height: 78 cm",
  //     "Step Count: 2 steps",
  //     'Weight Capacity: Up to 150 kg',
  //     'Material: Durable steel and plastic',
  //   ],
  //     specs:[
  //     ["Lot", "100"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$35"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  
  
     
  
  
 
  
  
  
  
 
 
  
 
  // {
  //   id: "BK-Barbara-Klein-Treadmill",
  //   name: 'BK Barbara Klein Treadmill',
  //   code: "473587",
  //   category: "Sports",
  //   condition: "New",
  //   estimate: "€299",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/BK-treadmill.png",
  //   accent: "#dc2626",
  //   description:
  //     "This BK Barbara Klein 2-in-1 Smart Treadmill features a space-saving, fold-flat design that easily transitions from a high-speed running machine into a low-profile under-desk walking pad. Created by a leading German fitness expert, it delivers a quiet, high-efficiency workout optimized for small apartments and home offices.",
  //   details: [
  //     'Dual Functionality: The support handlebar folds down completely for under-desk walking or locks upright for jogging up to 12 km/h',
  //     'Compact Storage: Built with a slim profile and transport wheels to easily roll under beds or store vertically in tight closets.',
  //     "Integrated Console: Features a built-in LED base screen to monitor your speed, distance, time, and calories in real time.",
  //     'User Capacity: Engineered with a sturdy frame that supports a maximum user weight limit of up to 120 kg (~265 lbs).',
  //   ],
  //     specs:[
  //     ["Lot", "122"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€299"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  
 
  // {
  //   id: "Parkside-Sliding-Compound-Mitre-Saw",
  //   name: 'Parkside Sliding Compound Mitre Saw',
  //   code: "B079PYJ6S8",
  //   category: "Tools",
  //   condition: "New",
  //   estimate: "€110",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Parkside-Sliding-Compound-Mitre-Saw.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This Parkside PZKS 2000 C3 is a 2000W sliding compound mitre saw engineered for making precise, clean cuts through wood and plastic materials. It features a continuous tilting saw head and an integrated laser guide to ensure maximum accuracy for both DIY workshops and home renovation projects.",
  //   details: [
  //     'Power Output: 2000W high-performance motor.',
  //     "No-Load Speed: 4800 rpm for rapid, clean cutting.",
  //     "Blade Dimensions: Ø 210 mm diameter with a 24-tooth carbide-tipped blade pre-installed.",
  //     'Cutting Adjustments: Continuous mitre bevel tracking from 0° to 45° with a flexible tilting mechanism.',
  //   ],
  //     specs:[
  //     ["Lot", "125"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€110"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  
  
  // {
  //   id: "Round-Coffee-Table",
  //   name: 'Acme Dustan Round Coffee Table',
  //   code: "B0DKXP7FMS",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "200$",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/cofeetablewhite.jpeg",
  //   accent: "#dc2626",
  //   description:
  //     "This minimalist, drum-style round concrete coffee table features a sleek, low-profile cylindrical shape with slightly tapered base edges. Its clean aesthetic blends seamlessly into modern, industrial, or bohemian spaces both inside and outside the home.",
  //   details: [
  //     "Material: Eco-friendly cement or microcement construction with a smooth, faux-concrete finish.",
  //     "Placement: Fully weather-resistant and versatile for indoor or outdoor use, such as living rooms or backyard patios.",
  //     "Maintenance: Features a non-porous, easy-to-clean surface that resists spills and stains.",
  //     "Aesthetic: Neutral natural white color palette that complements various decor textures and colors.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "200$"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
   
  // {
  //   id: "Bar-Stool",
  //   name: 'Bar Stool Dover brown',
  //   code: "403512",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "60$",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/brown-high-chair.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "The tectake Bar Stool Dover features a comfortable, ergonomically padded backrest and an elegant antique brown faux leather finish. Built for longevity and everyday comfort, it stands on sturdy dark wooden legs equipped with integrated practical footrests.",
  //   details: [
  //     "Material Composition: Easy-to-clean synthetic faux leather upholstery over a solid wood framework.",
  //     "Functional Elements: Fitted with protective, non-slip floor glider pads to prevent floor scuffing and scratches.",
  //     "Ergonomic Design: Features thick, dense cushioning designed for comfortable extended periods of sitting.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "60$"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  // {
  //   id: "Gaming-Chair",
  //   name: 'Gaming Chair',
  //   code: "B0F21RP583",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "100$",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Gaming-Chair.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "The WOTSTA Ergonomic Gaming Chair with Footrest is an entry-tier racing-style chair designed for long hours of gaming or office work. It features integrated synthetic leather padding, a reclining frame, and dedicated support pillows to maximize comfort and posture.",
  //   details: [
  //     "Lumbar Massage: Includes an adjustable lower back cushion featuring a built-in USB-powered vibration node.",
  //     "Synchronized Tilt: Reclines smoothly from 90° to 135° with link armrests that automatically adjust to your position.",
  //     "Retractable Footrest: Features a hidden leg support pad that slides smoothly out from beneath the seat cushion.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "100$"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
 
  
  
  
  
  // {
  //   id: "Mobility-Scooter-Cargo",
  //   name: 'Mobility Scooter Cargo',
  //   code: "B0DR8W67VJ",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$120",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Mobility-Scooter-Cargo.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This heavy-duty utility cargo trailer features a removable 70-liter plastic transportation box supported by a rugged alloy steel chassis. It is designed with a universal hitch attachment to easily connect behind adult mobility scooters, electric power chairs, or bicycles.",
  //   details: [
  //     "Weight Capacity: Safely carries and hauls a payload of up to 30 kg (66 lbs).",
  //     "Storage Volume: Equipped with a spacious, heavy-duty 70L removable plastic tub.",
  //     "Durable Frame: Built on a weather-resistant, powder-coated alloy steel chassis.",
  //     "Mobility Wheels: Rolling on two large, solid-construction puncture-proof tyres.",
  //     "Safety & Security: Outfitted with an integrated push-to-lock hand brake mechanism.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$120"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
 
  // {
  //   id: "white-Dresser",
  //   name: 'Black Vanity Desk',
  //   code: "Black dresser",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$100",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/black-dresser.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This modern black vanity desk features a sleek, space-saving design with integrated shelving and a built-in LED mirror. Supported by an elegant gold-finished metal frame, it blends contemporary style with practical bedroom organization.",
  //   details: [
  //     "Storage Options: Features three side storage drawers, a lower cabinet, a wide main drawer, and multiple open display shelves.",
  //     "Integrated Lighting: Equipped with a rectangular mirror that features an embedded LED light strip border.",
  //     "Premium Accents: Accented with minimalist round gold hardware knobs that complement the geometric gold base.",
  //     "Functional Top: Includes a distinct glass-panel section on the left tabletop surface to easily view stored items.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$100"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  // {
  //   id: "Jewellery-Cabinet",
  //   name: 'Homcom 360 Degree Lockable Mirror Jewellery Cabinet with White Frame',
  //   code: "B0FKH4GGWJ",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "€135",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/jewlery-cabinet.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This multifunctional white vanity furniture features a full-length dressing mirror that swivels 360 degrees on caster wheels for ultimate bedroom convenience. The innovative space-saving design conceals a lockable jewelry armoire behind the mirror while offering open display shelves on the side and back.",
  //   details: [
  //     "4-in-1 Functionality: Serves as a full-length dressing mirror, secure jewelry storage, clothes hanging rack, and open shelving.",
  //     "360° Rotating Base: Built on heavy-duty wheels to easily turn, reposition, and access hidden storage spaces.",
  //     "Lockable Cabinet: Features a secure key-lock mechanism protecting a velvet-lined interior with extensive hooks, slots, and trays for jewelry.",
  //     "Integrated LED Lighting: Equipped with an interior battery-powered light strip featuring three distinct color modes (warm, cool, and neutral).",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€135"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  
 
  
  
 
 
  
  // {
  //   id: "Mannequin",
  //   name: 'Mannequin',
  //   code: "B0GCHK293F",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$30",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Mannequin.jpg",
  //   accent: "#dc2626",
  //   description:
  //     'This pinnable female dress form features a lightweight styrofoam torso covered in fabric, making it ideal for sewing, clothing design, and retail garment displays. Supported by an adjustable stainless steel pole and a classic tripod base, it provides a stable and versatile setup for showcasing fashion pieces.',
  //   details: [
  //     'Pinnable Body: The sturdy foam core lets you insert sewing pins directly into the torso at any angle.',
  //     "Adjustable Height: The support pole easily shifts to customize the overall height from 58 inches to 67 inches.",
  //     'Stable Footprint: The three-legged tripod base ensures solid balance on carpets and hard floors alike.',
  //     "Easy Assembly: No tools are required, making it fast to put together or take apart for transport.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$30"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },

  
  //  {
  //   id: "VASAGLE-Side-Table",
  //   name: 'VASAGLE Side Table',
  //   code: "B0C73BVGMH",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "€70",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/VASAGLE-Side-Table.jpg",
  //   accent: "#dc2626",
  //   description:
  //     'The VASAGLE C-Shaped Side Table is a sleek, space-saving mobile utility table designed to slide effortlessly under your sofa or bed. Combining a minimalist cream white finish with a sturdy steel frame, it functions perfectly as a modern laptop workspace, coffee table, or bedside tray.',
  //   details: [
  //     'Dimensions: 35D x 50W x 60H cm (when using wheels) or 56H cm (when using fixed feet).',
  //     'Base Flexibility: Includes both 4 rolling castors for smooth mobility and 4 adjustable leveling feet for stationary stability.',
  //     'Furniture Clearance: Requires at least 7 cm of floor clearance underneath your couch or bed frame to slide the base inside.',
  //     "Weight & Capacity: Weighs 4.7 kg and safely supports a maximum static load of 25 kg.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€70"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
   
  
  //  {
  //   id: "WOLTU-Set-of-3-Floating",
  //   name: 'WOLTU Set of 3 Floating',
  //   code: "B075YG4TR9",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "€50",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/WOLTU-Set-of-3-Floating.jpg",
  //   accent: "#dc2626",
  //   description:
  //     'This 3-piece WOLTU floating shelf set features a retro, rounded-corner design with a modern white exterior and black interior lining. Equipped with an invisible integrated mounting system, these versatile MDF wood shelves create a sleek, bracketless look perfect for books, DVDs, and home decor.',
  //   details: [
  //     "Package Contents: 1 large oval shelf and 2 matching small shelves.",
  //     'Large Shelf Dimensions: 95 cm x 17.5 cm x 16 cm (Length x Height x Depth).',
  //     'Small Shelf Dimensions: 40 cm x 13 cm x 16 cm (Length x Height x Depth).',
  //     "Premium Materials: Built from high-quality MDF wood finished with a durable, 5-layer matte lacquer.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€50"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  
  
  //   {
  //   id: "pavement-sign",
  //   name: 'Pavement Sign',
  //   code: "clothes airer",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$40",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/sign-stand.jpg",
  //   accent: "#dc2626",
  //   description:
  //     'This heavy-duty outdoor pavement sign features a dual-sided aluminum snap frame designed to securely hold and protect commercial posters. Its robust, water-fillable base provides maximum stability, making it an excellent choice for storefronts, sidewalks, and high-traffic promotional displays.',
  //   details: [
  //     "Wind-Resistant Base: Heavy-duty plastic base can be filled with water or sand to prevent the stand from tipping over in high winds.",
  //     'Poster Compatibility: Perfectly fits DIN A1 size graphics (594 x 841 mm) with a double-sided display for multi-directional visibility.',
  //     'Snap-Frame Functionality: Front-opening aluminum profiles allow you to change marketing materials in seconds without dismantling the unit.',
  //     "Weatherproof Design: Equipped with heavy springs to absorb wind gusts and anti-glare PVC sheets to shield posters from UV rays and rain.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$40"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
   
   
  //    {
  //   id: "VASAGLE-Side-Table-round",
  //   name: 'VASAGLE Side Table',
  //   code: "B0CV4VTM97",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$40",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/VASAGLE-Side-Table2.jpg",
  //   accent: "#dc2626",
  //   description:
  //     'This VASAGLE round side table combines sleek modern style with functional utility, featuring a sleek dove gray top and a matching slate gray lower fabric basket. Its clever design integrates a hidden power strip directly under the tabletop, making it an ideal spacesaver for contemporary living rooms or bedrooms.',
  //   details: [
  //     "Integrated Charging Station: Equipped with two AC outlets and two USB ports to easily power your phone, tablet, or lamp.",
  //     'Storage Basket: Features a durable, double-layered polyester fabric basket at the base for organizing books, blankets, or remote controls.',
  //     'Sturdy Construction: Supported by a robust steel frame and rigid U-shaped legs capable of holding up to 77 lbs (35 kg) on the tabletop.',
  //     "Compact Dimensions: Measures 17.7” in diameter and 19.7” in height, fitting comfortably into tight corners next to a bed or sofa.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$40"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  //     {
  //   id: "VASAGLE-Bedside-Table2",
  //   name: 'VASAGLE Bedside Table',
  //   code: "B0C46WKDHL",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$30",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/VASAGLE-Bedside-Table2.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "The VASAGLE CUSTOS Bedside Table combines a sleek white finish with a compact footprint to provide efficient bedroom storage. Its minimalist profile features a smooth-gliding drawer paired with a spacious lower compartment to keep your evening essentials organized and within arm's reach.",
  //   details: [
  //     "Product Dimensions: 39 cm x 28 cm x 41 cm (Length x Width x Height)",
  //     'Storage Options: Features one storage drawer with a silver metallic handle and one open base compartment.',
  //     'Sturdy Construction: Built from durable engineered wood capable of supporting a total load capacity of up to 75 kg.',
  //     "Modern Aesthetic: Styled in a neutral, classic white finish that blends seamlessly with contemporary, Scandinavian, or minimalist decor.",
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$30"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
   
   
  //      {
  //   id: "LRFVADW-Bar-Stools",
  //   name: 'LRFVADW Bar Stools',
  //   code: "B0GNFFNQXP",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$60",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Bar-Stools.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This modern swivel bar stool features an ergonomic, low-back bucket seat wrapped in sleek black faux leather with an elegant diamond-tufted stitch pattern. Its polished chrome pedestal base provides a contemporary look, complete with an adjustable pneumatic gas lift to easily customize the height.",
  //   details: [
  //     "Upholstery Material: Premium, water-resistant faux leather (PU) that is easy to wipe clean.",
  //     'Ergonomic Design: Diamond-patterned tufted backrest provides supportive, padded comfort.',
  //     'Height Adjustable: Built-in smooth gas-lift mechanism changes seat height seamlessly.',
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$60"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
   
  
  //    {
  //   id: "modern-round-wall-mirror",
  //   name: "Modern Round Wall Mirror",
  //   code: "Modern Round Wall Mirror",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$40",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/modern-round-wall-mirror.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This item is a modern round wall mirror featuring a minimalist, matte black metallic frame. Its sleek and universal design makes it an ideal accent piece for entryways, bathrooms, or contemporary living areas.",
  //   details: [
  //     "Frame Style: Thin, low-profile outer rim with a clean matte black finish.",
  //     'Shape: Perfectly circular geometric design.',
  //     'Versatility: Blends seamlessly with modern, industrial, or minimalist home decor.',
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$40"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  //    {
  //   id: "borderless-mirror",
  //   name: "Frameless round smart LED vanity mirror",
  //   code: "borderless-mirror",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$60",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/borderless-mirror.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This sleek, frameless round smart LED vanity mirror features a modern minimalist aesthetic with built-in ambient lighting. It is uniquely designed as a plug-and-play unit, making it ideal for standard wall mounting or custom commercial displays.",
  //   details: [
  //     "Lighting Style: Integrated LED backlit system that projects a soft, diffused glow onto the wall surface.",
  //     'Power Source: Equipped with a standard attached power cable and plug, though it can typically be hardwired by an electrician.',
  //     'Design Aesthetic: Clean, frameless circular edge suited for modern bathrooms, powder rooms, or retail setups.',
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$60"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  //   {
  //   id: "rectangular-smart-LED-bathroom-mirror",
  //   name: "Rectangular smart LED bathroom mirror",
  //   code: "rectangular-smart-LED-bathroom-mirror",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$80",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/rectangular-smart-LED-bathroom-mirror.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "The item displayed in the image is a rectangular smart LED bathroom mirror featuring an integrated frosted light border around its perimeter. This type of functional home piece is commonly used above a vanity to provide even, shadow-free lighting.",
  //   details: [
  //     "Integrated Lighting: Features built-in energy-efficient LED strips diffused behind a frosted glass border.",
  //     'Touch Sensor Controls: Typically operated via capacitive touch buttons directly on the glass face.',
  //     'Advanced Options: High-end models often incorporate anti-fog heating elements, adjustable color temperatures (warm, neutral, cool), and dimming functions.',
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$80"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  //    {
  //   id: "round-LED-backlit-smart-mirror",
  //   name: "Round LED backlit smart mirror",
  //   code: "rectangular-smart-LED-bathroom-mirror",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$80",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/round-LED-backlit-smart-mirror.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This round LED backlit smart mirror features a sleek, frameless design with an integrated frosted glass border. It provides modern, shadow-free illumination that is perfect for contemporary bathrooms, vanity spaces, or salon settings.",
  //   details: [
  //     "Backlit LED Lighting: Energy-efficient strips illuminate the frosted outer ring for a soft, ambient glow.",
  //     'Hardwired or Plug-in: Features an external power cord, allowing it to be plugged directly into a wall outlet or seamlessly hardwired by an electrician.',
  //     'Sleek Floating Effect: Mounted via a rear bracket system that offsets the glass from the wall to create a floating silhouette.',
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$80"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
  //    {
  //   id: "modern-rectangular-tabletop-vanity-mirror",
  //   name: "Modern rectangular tabletop vanity mirror",
  //   code: "rectangular-smart-LED-bathroom-mirror",
  //   category: "Furniture",
  //   condition: "New",
  //   estimate: "$80",
    
  //   currentBid: "0",
     
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/modern-rectangular-tabletop-vanity-mirror.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "This sleek, tabletop LED vanity mirror features a minimalist borderless design that blends seamlessly into any modern dressing space. Its integrated front-lit illumination provides clear, shadow-free lighting perfect for precise makeup application and skincare routines.",
  //   details: [
  //     "Smart Touch Controls: Built-in capacitive icons on the glass surface offer effortless, one-touch management.",
  //     'Adjustable Lighting: Cycles through multiple color temperatures, including cool white, daylight, and warm yellow.  ',
  //     'Dimmable Brightness: Allows you to easily adjust the intensity to mimic different environmental lighting conditions.',
  //   ],
  //     specs:[
  //     ["Lot", "133"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "$80"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },
   
   
  
   
     
 
   
  //  {  
  //   id: "GOURMETmaxx-4.5",
  //   name: 'GOURMETmaxx Air fryer - 4.5L',
  //   code: "11822",
  //   category: "Electronics",
  //   condition: "New",
  //   estimate: "€55",
  //   ////////////////////////////////////////////////////
  //   currentBid: "120",
  //   //////////////////////////////////////////////////// 
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/GOURMETmaxx-4.5.jpg",
  //   accent: "#dc2626",
  //   description:
  //     "The GOURMETmaxx Digitale Heißluft-Fritteuse is a versatile 1400-watt digital air fryer designed to grill, roast, bake, and fry food with minimal oil. It utilizes rapid hot-air circulation to prepare your favorite meals faster and more efficiently than a standard conventional oven.",
  //   details: [
  //     "Capacity: 4.5-liter cooking basket suitable for family-sized meals.",
  //     "Interface: Digital touchscreen display for intuitive temperature and time adjustments.",
  //     "Pre-sets: 8 automatic programs tailored for popular foods like fries, poultry, and fish.",
  //     "Healthier Cooking: Uses up to 80% less fat compared to traditional deep frying methods.",
  //     "Safety: Features a cool-touch handle and automatic shut-off functionality.",
  //   ],
  //     specs:[
  //     ["Lot", "67"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€55"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // }, 
   
  
  //  {
  //   id: "Dual-chamber",
  //   name: 'Dual-chamber air fryer 7L',
  //   code: "11339",
  //   category: "Sports",
  //   condition: "New",
  //   estimate: "€90",
  //   ////////////////////////////////////////////////////
  //   currentBid: "225",
  //   //////////////////////////////////////////////////// 
  //   closing: "Friday, 8:10 PM",
  //   image: "/products/Dual-chamber.webp",
  //   accent: "#dc2626",
  //   description:
  //     "The GOURMETmaxx Dual-Chamber Hot Air Fryer 7L is a powerful 2400W appliance that combines a hot air oven, grill, and deep fryer into one compact unit. Its innovative dual-chamber system lets you cook two different meals simultaneously using 360° rapid air technology for crispy results with up to 80% less fat.",
  //   details: [
  //     "Total Capacity: 7 liters split into two independent 3.5-liter cooking zones.",
  //     "Power & Performance: 2400 watts of high-efficiency power that cooks 1.5 times faster than standard ovens.",
  //     "Smart Synchronization: Synchronization feature ensures two different foods finish cooking at the exact same time.",
  //     "Pre-installed Programs: 10 digital touch programs for frying, roasting, baking, grilling, and dehydrating.",
  //     "Temperature Control: Wide adjustable range from 40°C up to 230°C.",
  //   ],
  //     specs:[
  //     ["Lot", "54"],
  //     ["Included", "Full set"],
  //     ["Price in origin country", "€90"],
  //   ],
  //   bidder: {
  //     name: "Rami B.",
  //     amount: "$980",
  //     since: "Leading for 2 minutes",
  //     badge: "Interior buyer",
  //   },
  // },  
 
  
    
    
  
 
  
  
];
export const featuredProduct = products[0]; 
