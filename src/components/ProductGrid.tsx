import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";


// --- Types ---
interface Addon {
  id: number;
  name: string;
}

interface CartItem {
  productId: number;
  name: string;
  quantity: number;
  addon: string;
  totalAmount: number;
}

interface ProductGridProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setCartCount: React.Dispatch<React.SetStateAction<number>>;
}


interface Product {
  id: number;
  name: string;
  arabicName: string;
  englishName: string;
  image: string;
  price: number;
  minWeight: string;
  description: string;
  addons?: Addon[];
}

// --- Product Data ---
// const cleaningAddons: Addon[] = [
//   { id: 13, name: "Cleaning Only" },
//   { id: 14, name: "Clean, slice Cutting" },
//   { id: 15, name: "Fillet" },
//   { id: 16, name: "Skin Out & Slice Cutting" },
//   { id: 18, name: "Clean & Cube Cutting" },
//   { id: 45, name: "Skin out & cube cutting" },
//   { id: 21, name: "No Cleaning" },
//   { id: 59, name: "Butterfly Cutting" },
// ];
const searchParams = new URLSearchParams(window.location.search);
const viewParam = searchParams.get("view");

const products: Product[] = [
    {
        id: 165,
        name: "King Fish Whole (Medium)",
        arabicName: "كنعد متوسط - كامل",
        englishName: "King Fish Whole (Medium)",
        image: "uploads/images/items/King%20Fish%20(M)-Full.jpg",
        price: 25.5,
        minWeight: "3.5 kg To 5kg",
        description:
          "Kingfish, which is more commonly called king mackerel, thrives in the Atlantic Ocean along the American coast. Scientific name: Scomberomorus commerson. It's low in total fat and a rich source of healthy omega-3 fatty acids. It's also packed with protein, vitamin B-12 and selenium. But be aware that it has high levels of mercury. Order your fresh Fish from Masskar Online.",
        addons: [
          { id: 13, name: "Cleaning Only" },
          { id: 14, name: "Clean, slice Cutting" },
          { id: 15, name: "Fillet" },
          { id: 16, name: "Skin Out & Slice Cutting" },
          { id: 18, name: "Clean & Cube Cutting" },
          { id: 45, name: "Skin out & cube cutting" },
          { id: 21, name: "No Cleaning" },
          { id: 59, name: "Butterfly Cutting" }
        ]
      },
      {
        id: 177,
        name: "Hamour (M)",
        arabicName: "هامور متوسط",
        englishName: "Hamour (M)",
        image: "uploads/images/items/Hamour%20%20M.jpg",
        price: 39.0,
        minWeight: "3kg To 5kg",
        description:
          "The name 'Hamour' is used to describe a number of fish, including the Brown spotted reef cod. Yet it is also the name given to a variety of closely related fish species in the Persian Gulf. Scientific name: Epinepheline. It is a reef-dwelling fish and this species can be found in the Persian Gulf, in the Indian Ocean and in western Pacific Ocean. Order your fresh Fish from Masskar Online.",
        addons: [
          { id: 13, name: "Cleaning Only" },
          { id: 14, name: "Clean, slice Cutting" },
          { id: 15, name: "Fillet" },
          { id: 16, name: "Skin Out & Slice Cutting" },
          { id: 17, name: "Cleaning & Skin Out" },
          { id: 45, name: "Skin out & cube cutting" },
          { id: 18, name: "Clean & Cube Cutting" },
          { id: 21, name: "No Cleaning" },
          { id: 59, name: "Butterfly Cutting" },
          { id: 46, name: "Cleaning And Remove Head" },
        ],
      },
  {
    id: 170,
    name: "Salmon Whole Norway (Medium)",
    arabicName: "سمك السلمون النرويجي كامل متوس",
    englishName: "Salmon Whole Norway (m)",
    image: "uploads/images/items/Salmon%20Whole%20Norway%20(S).jpg",
    price: 47.5,
    minWeight: "2.5kg To 3kg",
    description:
      "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Salmon are native to tributaries of the North Atlantic and Pacific Ocean. Salmon provides important amounts of the antioxidant amino acid taurine. It's an excellent source of vitamin B12, vitamin D, selenium, niacin, omega-3 fatty acids, protein, phosphorus and vitamin B6. It is also a good source of choline, pantothenic acid, biotin and potassium. Order your fresh Fish from Masskar Online.",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 15, name: "Fillet" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 45, name: "Skin out & cube cutting" },
      { id: 72, name: "Fillet Cube" },
      { id: 21, name: "No Cleaning" },
      { id: 17, name: "Cleaning & Skin Out" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 39, name: "Fillet With Skin" }
    ]
  },  
  {
    id: 498,
    name: "Salmon Whole Norway (Big)",
    arabicName: "سمك السلمون النرويجي كامل كبير",
    englishName: "Salmon Whole Norway (B)",
    image: "uploads/images/items/Salmon%20Whole%20Norway%20(M).jpg",
    price: 49.5,
    minWeight: "3.5kg To 5kg",
    description:
      "Salmon is the common name for several species of ray-finned fish in the family Salmonidae. Salmon are native to tributaries of the North Atlantic and Pacific Ocean. Salmon provides important amounts of the antioxidant amino acid taurine. It's an excellent source of vitamin B12, vitamin D, selenium, niacin, omega-3 fatty acids, protein, phosphorus and vitamin B6. It is also a good source of choline, pantothenic acid, biotin and potassium. Order your fresh Fish from Masskar Online.",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 17, name: "Cleaning & Skin Out" },
      { id: 21, name: "No Cleaning" },
      { id: 15, name: "Fillet" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 72, name: "Fillet Cube" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 45, name: "Skin out & cube cutting" },
      { id: 39, name: "Fillet With Skin" }
    ]
  },
  {
    id: 162,
    name: "Sea Bass Turkey",
    arabicName: "سي باس تركى",
    englishName: "Sea Bass Turkey",
    image: "uploads/images/items/Sea%20Bass.jpg",
    price: 43.75,
    minWeight: "500gm",
    description: "The body is blue to black, smoky gray and dusky brown in color with white flesh. Tail is straight edged or rounded. Black sea bass is believed to live up to 20 years. Scientific name: Centropristis striata. Whether you eat sea or freshwater bass, one serving is low in calories & an excellent source of protein, selenium and essential omega-3 fatty acids. While both types contain the same nutrients, they have varying amounts of some, such as vitamins B-12 & B-6. Order your fresh Fish from Masskar Online.",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 15, name: "Fillet" },
      { id: 59, name: "Butterfly Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 39, name: "Fillet With Skin" }
    ]
  },
  {
    id: 184,
    name: "Sea Bream Turkey",
    arabicName: "سي بريم تركى",
    englishName: "Sea Bream Turkey",
    image: "uploads/images/items/Sea%20Bream.jpg",
    price: 39.75,
    minWeight: "500gm",
    description: "The Sparidae are a family of fish in the order Perciformes, commonly called sea breams and porgies. Scientific name: Sparidae. They have a succulent, white flesh that is ideal for grilling, baking and frying either whole or as fillets. Order your fresh Fish from Masskar Online.",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 15, name: "Fillet" },
      { id: 21, name: "No Cleaning" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 59, name: "Butterfly Cutting" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 39, name: "Fillet With Skin" }
    ]
  },
  {
    id: 260,
    name: "Sulthan Ebrahim",
    arabicName: "سلطان إبراهيم",
    englishName: "Sulthan Ebrahim",
    image: "uploads/images/items/Sulthan%20Ebrahim.jpg",
    price: 20.00,
    minWeight: "500gm",
    description: "",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 21, name: "No Cleaning" }
    ]
  },
  {
    id: 879,
    name: "Jesh M",
    arabicName: "جيش م",
    englishName: "Jesh M",
    image: "uploads/images/items/Jesh%20(M).jpg",
    price: 16.75,
    minWeight: "500gm",
    description: "",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 19, name: "Clean & Remove Head" }
    ]
  },  
  {
    id: 172,
    name: "Safi Doha (B)",
    arabicName: "صافي الدوحة (ب)",
    englishName: "Safi Doha (B)",
    image: "uploads/images/items/Safi%20Doha%20(B).jpg",
    price: 26.50,
    minWeight: "500 gm",
    description: "",
    addons: [
      { id: 21, name: "No Cleaning" },
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" }
    ]
  },
  {
    id: 145,
    name: "Crab Lady",
    arabicName: "سيدة السلطعون",
    englishName: "Crab Lady",
    image: "uploads/images/items/Crab%20Lady.jpg",
    price: 17.50,
    minWeight: "1-kg",
    description: "The fishery for brown crab also known as edible crab or common crab, is one of the most valuable in Ireland. Scientific name: Cancer pagurus. Brown crab meat is found in the shell cavity at the top of the crab. It has a higher flavour content than white meat which makes its richness ideal for sauces. Brown meat has a higher natural fat content but is extremely high in Omega-3. Order your fresh Fish From Masskar Online",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 21, name: "No Cleaning" }
    ]
  },
  {
    id: 193,
    name: "Prawns (Medium)",
    arabicName: "الروبيان (متوسط ​​الحجم)",
    englishName: "Prawns (Medium)",
    image: "uploads/images/items/Prawns%20Sea%20(M).jpg",
    price: 23.75,
    minWeight: "500gm",
    description: "",
    addons: [
      { id: 37, name: "Clean & Head Required Separate" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 21, name: "No Cleaning" }
    ]
  },
  {
    id: 185,
    name: "Sheri (M)",
    arabicName: "شعري متوسط",
    englishName: "Sheri (M)",
    image: "uploads/images/items/Sheri%20Medium.jpg",
    price: 10.50,
    minWeight: "500gm",
    description: `7025
  This species is widespread in the tropical Indo-West Pacific, from the Red Sea & the east coast of Africa, east to Samoa, north to Japan & south to Australia. Scientific name: Lethrinus nebulosus. The Sheri is mainly caught by handlines & traps. It is a prized food fish, highly important to fisheries & common in markets. The Spangled Emperor occurs in a variety of habitats from coral assemblages to seagrass beds & mangroves, and is found from very shallow water. Order your fresh Fish from Masskar Online`,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 15, name: "Fillet" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 17, name: "Cleaning & Skin Out" },
      { id: 21, name: "No Cleaning" },
      { id: 59, name: "Butterfly Cutting" },
      { id: 46, name: "Cleaning And Remove Head" }
    ]
  },
  {
    id: 179,
    name: "Koofar (M)",
    arabicName: "كوفر (متوسط)",
    englishName: "Koofar (M)",
    image: "uploads/images/items/Koofar%20(M).jpg",
    price: 15.50,
    minWeight: "500gm",
    description: `Known as king soldier bream, Bowen snapper, frying-pan snapper, frypan bream, long-spined red bream, longfin snapper, longs pine seabream and red bokako. It is a species of fish in the family Sparidae.
  Scientific name: Argyrops Spinifer. It is used as seafood and can be found in the Red Sea, Eastern coast of Africa and northern Australia. Order your fresh Fish from Masskar Online`,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 45, name: "Skin out & cube cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 59, name: "Butterfly Cutting" }
    ]
  },
  {
    id: 599,
    name: "Koofar (B)",
    arabicName: "(كوفر (كبير",
    englishName: "Koofar (B)",
    image: "uploads/images/items/Koofer%20Big.jpg",
    price: 16.50,
    minWeight: "1kg to 1.8kg",
    description: "",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 17, name: "Cleaning & Skin Out" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 15, name: "Fillet" }
    ]
  },
  {
    id: 1436,
    name: "White Snapper (B)",
    arabicName: "النهاش الأبيض",
    englishName: "White Snapper (B)",
    image: "uploads/images/items/White%20Snapper%20(B).jpg",
    price: 9.75,
    minWeight: "500gm",
    description: "",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 15, name: "Fillet" },
      { id: 19, name: "Clean & Remove Head" },
      { id: 20, name: "Clean & Head Required" },
      { id: 21, name: "No Cleaning" },
      { id: 59, name: "Butterfly Cutting" }
    ]
  },{
    id: 160,
    name: "White Snapper (M)",
    arabicName: "(مطوع (متوسط",
    englishName: "White Snapper (M)",
    image: "uploads/images/items/White%20Snapper%20(M).jpg",
    price: 8.75,
    minWeight: "750gm To 1.5kg",
    description: "Macolor niger is widely distributed in the Indo-West Pacific, in the Indian Ocean at depths ranging from 3 to 90 m. It can be abundant in parts of its range and sometimes occurs in large schools. Scientific Name: Macolor niger. It is found from the Red Sea south along eastern Africa to South Africa, including the Seychelles, Mozambique Channel islands, Madagascar and western Mascarenes, as well as the Maldives, Sri Lanka, Malaysia, Indonesia and the Andaman. Order your fresh Fish from Masskar Online.",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 59, name: "Butterfly Cutting" },
      { id: 46, name: "Cleaning And Remove Head" }
    ]
  },
  {
    id: 171,
    name: "Fasker (M)",
    arabicName: "(فسكر (متوسط",
    englishName: "Fasker (M)",
    image: "uploads/images/items/Fasker%20(M).jpg",
    price: 9.75,
    minWeight: "500gm",
    description: "The Two Bar Seabream is another great option. Called Fasker in Arabic, this fish also likes to huddle around the reef at depths between 2 and 20 meters. Order your fresh Fish from Masskar Online.",
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 17, name: "Cleaning & Skin Out" },
      { id: 46, name: "Cleaning And Remove Head" },
      { id: 59, name: "Butterfly Cutting" }
    ]
  },
  {
    id: 154,
    name: "Naiser",
    arabicName: "نيسر",
    englishName: "Naiser",
    image: "uploads/images/items/Naiser.jpg",
    price: 8.75,
    minWeight: "500gm",
    description: `Lutjanus ehrenbergii is distributed from East Africa north to the Red Sea and Persian Gulf, east to the Solomon and Mariana islands and south to northeastern Australia and Fiji. Scientific Name: Lutjanus ehrenbergii. This species is a component of fisheries to varying degrees throughout its range. It is highly sought after in some areas, such as the Persian Gulf, and is commonly seen in subsistence fisheries and markets through other parts of its range. Order your fresh Fish from Masskar online.`,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 46, name: "Cleaning And Remove Head" }
    ]
  },
  {
    id: 146,
    name: "Cat Fish",
    arabicName: "سلور",
    englishName: "Cat Fish",
    image: "uploads/images/items/Cat Fish.jpg",
    price: 7.50,
    minWeight: "1kg To 1.5kg",
    description: `Catfish are a diverse group of ray-finned fish. Named for their prominent barbells, which resemble a cat's whiskers.
  Scientific name: Siluriformes.
  Catfish has a consistently sweet, mild taste. It absorbs other flavors readily. The moist, dense meat is firm and has less flake than the typical whitefish. Fresh catfish meat is white to off-white, sometimes pinkish, with noticeable translucency and iridescence. Contain heart-healthy omega-3 fatty acids. Order your fresh Fish from Masskar Online.`,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 18, name: "Clean & Cube Cutting" },
      { id: 16, name: "Skin Out & Slice Cutting" },
      { id: 15, name: "Fillet" },
      { id: 21, name: "No Cleaning" }
    ]
  },
  {
    id: 167,
    name: "Kurkufan (M)",
    arabicName: "قرقفان",
    englishName: "Kurkufan (M)",
    image: "uploads/images/items/Kurkufan.jpg",
    price: 9.50,
    minWeight: "500gm",
    description: `Rhabdosargus haffara is found from the Red Sea to the southern Persian Gulf. Rhabdosargus haffara is a recorded Lessepsian migrant in the eastern Mediterranean. Scientific Name: Rhabdosargus haffara. This species is one of the most important commercial fished sparids in the Gulf of Aqaba and Gulf of Suez.`,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 19, name: "Clean & Remove Head" }
    ]
  },
  {
    id: 503,
    name: "Badha (M)",
    arabicName: "بادة",
    englishName: "Badha (M)",
    image: "uploads/images/items/Badha.jpg",
    price: 13.75,
    minWeight: "500gm",
    description: ``,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 19, name: "Clean & Remove Head" },
      { id: 20, name: "Clean & Head Required" },
      { id: 21, name: "No Cleaning" },
      { id: 22, name: "Cleaning With Head Required" },
      { id: 36, name: "Medium Cutting" }
    ]
  },
  {
    id: 206,
    name: "Durduman (Karaari)",
    arabicName: "دردمان",
    englishName: "Durduman (Karaari)",
    image: "uploads/images/items/Durdman%20(Karaari).jpg",
    price: 11.00,
    minWeight: "500gm",
    description: ``,
    addons: [
      { id: 13, name: "Cleaning Only" },
      { id: 14, name: "Clean, slice Cutting" },
      { id: 21, name: "No Cleaning" },
      { id: 46, name: "Cleaning And Remove Head" }
    ]
  },                                  
];

// --- Main Component ---

const ProductGrid: React.FC<ProductGridProps> = ({ setCartItems, setCartCount }) => {
  const [selectedFish, setSelectedFish] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedAddon, setSelectedAddon] = useState<string>("");
  
  // Track quantity per product by id

  const handleShowModal = (product: Product) => {
    setSelectedFish(product);
    setSelectedAddon(""); // reset on open
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFish(null);
  };

// Increment quantity with 0.5 first step, then +1 steps
const incrementQuantity = (productId: number) => {
    setQuantities((prev) => {
      const current = prev[productId] ?? 0;
      let next = 0;
      if (current === 0) {
        next = 0.5;
      } else if (current === 0.5) {
        next = 1;
      } else {
        next = current + 1;
      }
      return { ...prev, [productId]: next };
    });
  };
  
  // Decrement quantity with -0.5 first step if at 0.5, then -1 steps, min 0
  const decrementQuantity = (productId: number) => {
    setQuantities((prev) => {
      const current = prev[productId] ?? 0;
      let next = 0;
      if (current <= 0) {
        next = 0;
      } else if (current === 0.5) {
        next = 0;
      } else if (current === 1) {
        next = 0.5;
      } else {
        next = current - 1;
      }
      return { ...prev, [productId]: next };
    });
  };

  const [selectedAddons, setSelectedAddons] = useState<{ [key: number]: string }>({});
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});

  const handleAddToCart = (product: Product) => {
    const quantity = quantities[product.id] || 0;
    const addon = selectedAddons[product.id] || "";
  
    if (!addon || addon.trim() === "") {
      alert("Please select an add-on.");
      return;
    }
  
    if (quantity <= 0) {
      alert("Please select a valid quantity.");
      return;
    }
  
    const cartItem = {
      productId: product.id,
      name: product.name,
      addon,
      quantity,
      pricePerKg: product.price,
      totalAmount: parseFloat((product.price * quantity).toFixed(2)),
    };
  
    setCartItems(prev => [...prev, cartItem]);
    setCartCount(prev => prev + 1);
    alert("Item added to cart!");
  
    // 🧼 Reset fields for this product
    setSelectedAddons(prev => ({ ...prev, [product.id]: "" }));
    setQuantities(prev => ({ ...prev, [product.id]: 0 }));
  };
  
  
  // If "offers" is in the URL, return just the layout without any products
if (viewParam === "offers") {
  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {/* No products displayed intentionally */}
      </div>
    </div>
  );
}
  

  return (
    <div style={{ padding: "2rem", backgroundColor: "#0e0e0e" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {products.reduce<React.ReactNode[]>((acc, product, index) => {
  acc.push(
    <div
      key={product.id}
      style={{
        position: "relative",
        flex: "1 0 21%",    // 4 items per row (21% each + gaps)
        maxWidth: "21%",
        minWidth: "250px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        border: "1px solid #ccc",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
        padding: "1rem",
        textAlign: "center",
        color: "#000",
      }}
    >
      {/* --- your existing product card JSX goes here --- */}

      {/* Small circular "i" icon */}
      <button
        onClick={(e) => {
          e.preventDefault();
          handleShowModal(product);
        }}
        aria-label={`More info about ${product.name}`}
        title="More info"
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          backgroundColor: "#3A3A3A",
          color: "white",
          borderRadius: "50%",
          width: "16px",
          height: "16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          fontSize: "12px",
          userSelect: "none",
          cursor: "pointer",
          boxShadow: "0 0 3px rgba(0,0,0,0.3)",
          border: "none",
          padding: 0,
          zIndex: 10,
        }}
      >
        i
      </button>

      {/* ... the rest of the JSX inside the card ... */}

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "170px",
          objectFit: "contain",
          objectPosition: "center",
          cursor: "pointer",
          borderRadius: "4px",
          marginBottom: "8px",
          backgroundColor: "white",
        }}
        onClick={(e) => {
          e.preventDefault();
          handleShowModal(product);
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          fontSize: "13px",
          marginBottom: "4px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <b>{product.arabicName}</b>
          <div>{product.englishName}</div>
        </div>
        <div style={{ fontWeight: "bold", whiteSpace: "nowrap" }}>
          {product.price.toFixed(2)} QR/Kg
        </div>
      </div>
      <div
        style={{
          fontSize: "11px",
          color: "#555",
          textAlign: "center",
          marginBottom: "8px",
        }}
      >
        {product.minWeight}
      </div>

      <Form.Select
        size="sm"
        style={{
          marginBottom: "10px",
          backgroundColor: "white",
          color: "black",
        }}
        value={selectedAddons[product.id] ?? ""}
        onChange={(e) => {
            setSelectedAddons((prev) => ({ ...prev, [product.id]: e.target.value }));
          }}
      >
        <option value="">Select Cleaning Option</option>
        {product.addons?.map((addon) => (
          <option key={addon.id} value={addon.name}>
            {addon.name}
          </option>
        ))}
      </Form.Select>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #3A3A3A",
            color: "black",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => decrementQuantity(product.id)}
          aria-label={`Decrease quantity of ${product.name}`}
        >
          -
        </button>

        <input
          type="text"
          value={quantities[product.id] ?? 0}
          disabled
          style={{
            width: "30px",
            textAlign: "center",
            color: "#000",
            backgroundColor: "white",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />

        <button
          style={{
            backgroundColor: "#fff",
            border: "1px solid #3A3A3A",
            color: "black",
            width: "30px",
            height: "30px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => incrementQuantity(product.id)}
          aria-label={`Increase quantity of ${product.name}`}
        >
          +
        </button>
      </div>

      <button
      disabled={!selectedAddons[product.id]}
      onClick={() => handleAddToCart(product)}
  style={{
    backgroundColor: "#3A3A3A",
    color: "#fff",
    border: "none",
    padding: "6px 10px",
    fontSize: "12px",
    fontWeight: "bold",
    borderRadius: "4px",
    cursor: "pointer",
  }}
>
  <i
    className="fa fa-shopping-cart"
    aria-hidden="true"
    style={{ marginRight: "5px" }}
  />
  ADD TO CART
</button>

    </div>
  );

  // if ((index + 1) % 8 === 0) {
  //   acc.push(
  //     <div
  //       key={`ad-${index}`}
  //       style={{
  //         flexBasis: "100%",
  //         width: "calc((21% * 4) + 60px)",
  //           maxWidth: "calc((21% * 4) + 60px)",
  //         margin: "20px 0",
  //         textAlign: "center",
  //       }}
  //     >
  //       <img
  //         src="uploads/images/poster/center2.jpg"
  //         alt="Advertisement"
  //         style={{ width: "100%", height: "auto", borderRadius: "8px" }}
  //       />
  //     </div>
  //   );
  // }

  return acc;
}, [])}


      </div>

      {/* Modal */}
      <Modal
  show={showModal}
  onHide={handleCloseModal}
  centered
  backdrop={true} 
  animation={true}
  scroll={false}
  autoFocus={false} 
  container={document.body}
  style={{
    zIndex: 2000, // increase if needed
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  }}
  backdropClassName="custom-modal-backdrop"
>


  {selectedFish && (
    <>
      <Modal.Header
  style={{
    backgroundColor: "#3A3A3A",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
    paddingLeft: "1.5rem",   // added left padding
    paddingRight: "1.5rem",  // added right padding
  }}
>
  <h4 style={{ color: "#fff", fontWeight: "bold", margin: 0 }}>
    {selectedFish.name}
  </h4>
  <button
    onClick={handleCloseModal}
    style={{
      position: "absolute",
      top: "8px",
      right: "12px",
      background: "none",
      border: "none",
      fontSize: "16px",      // made the X smaller
      color: "black",
      cursor: "pointer",
      lineHeight: "1",
    }}
    aria-label="Close"
  >
    ×
  </button>
</Modal.Header>



<Modal.Body
  style={{
    maxHeight: "900px", 
    width: "400px",
    overflowY: "auto",
    paddingTop: "1rem",
    paddingBottom: "1rem",
  }}
>
  <img
    src={selectedFish.image}
    alt={selectedFish.name}
    style={{
      width: "100%",
      height: "250px",
      objectFit: "contain",
      marginBottom: selectedFish.description ? "1rem" : "0", // no space if no description
    }}
  />

  {selectedFish.description && (
    <p
      style={{
        textAlign: "justify",
        border: "1px solid #3A3A3A",
        padding: "10px",
        borderRadius: "4px",
        color: "#000",
        margin: "0 15px"
      }}
    >
      {selectedFish.description}
    </p>
  )}
</Modal.Body>


      <Modal.Footer
  style={{
    borderTop: 0,
    padding: "0 0.5rem 1rem 10.5rem", // top: 0, bottom padding preserved
    width: "100%",
  }}
>
  <div
    style={{
      display: "flex",
      gap: "10px",
      justifyContent: "flex-start", // flush left
      width: "100%",
    }}
  >
    <div
      style={{
        backgroundColor: "#3A3A3A",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "4px",
        fontWeight: "bold",
        display: "inline-block",
      }}
    >
      {selectedFish.price.toFixed(2)} QR/Kg
    </div>
    <button
      onClick={handleCloseModal}
      style={{
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #ccc",
        padding: "8px 16px",
        borderRadius: "4px",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Close
    </button>
  </div>
</Modal.Footer>


    </>
  )}
</Modal>


    </div>
  );
};

export default ProductGrid;
