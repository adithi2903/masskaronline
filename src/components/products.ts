export interface Addon {
    id: number;
    name: string;
  }
  
  export interface Product {
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
  
  const cleaningAddons: Addon[] = [
    { id: 13, name: "Cleaning Only" },
    { id: 14, name: "Clean, slice Cutting" },
    { id: 15, name: "Fillet" },
    { id: 16, name: "Skin Out & Slice Cutting" },
    { id: 18, name: "Clean & Cube Cutting" },
    { id: 45, name: "Skin out & cube cutting" },
    { id: 21, name: "No Cleaning" },
    { id: 59, name: "Butterfly Cutting" },
  ];
  
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
      id: 1,
      name: "Sea Bass Turkey",
      arabicName: "سي باس تركيا",
      englishName: "Sea Bass Turkey",
      image: "uploads/images/items/Sea%20Bass.jpg",
      price: 43.75,
      minWeight: "500gm",
      description:
        "The body is blue to black, smoky gray and dusky brown in color with white flesh. Tail is straight edged or rounded. Black sea bass is believed to live up to 20 years. Scientific name: Centropristis striata.",
      addons: cleaningAddons,
    },
    {
      id: 2,
      name: "Sea Bream Turkey",
      arabicName: "سي بريام تركيا",
      englishName: "Sea Bream Turkey",
      image: "uploads/images/items/Sea%20Bream.jpg",
      price: 39.75,
      minWeight: "500gm",
      description:
        "Sea bream has firm white meat and a clean, delicate flavor. Great for grilling or baking. Packed with protein and omega-3 fatty acids. Perfect for a healthy meal.",
      addons: cleaningAddons,
    },
    {
      id: 202,
      name: "Salmon Whole Norway (M)",
      arabicName: "سلمون كامل نرويجي (وسط)",
      englishName: "Salmon Whole Norway (M)",
      image: "uploads/images/items/Salmon%20Whole%20Norway%20(S).jpg",
      price: 47.5,
      minWeight: "2.5kg – 3kg",
      description:
        "Premium whole salmon from Norway. M-size ideal for family meals and grilling. Rich in omega-3 fatty acids and perfect for a healthy diet. Order your fresh Salmon from Masskar Online.",
      addons: cleaningAddons,
    },
    {
      id: 203,
      name: "Salmon Whole Norway (B)",
      arabicName: "سلمون كامل نرويجي (كبير)",
      englishName: "Salmon Whole Norway (B)",
      image: "uploads/images/items/Salmon%20Whole%20Norway%20(M).jpg",
      price: 49.5,
      minWeight: "3.5kg – 5kg",
      description:
        "Large size whole Norwegian salmon. Ideal for large gatherings, filleting, or barbecues. A rich source of protein and omega-3. Sourced fresh daily from premium farms in Norway.",
      addons: cleaningAddons,
    },
  
    {
      id: 260,
      name: "Sulthan Ebrahim",
      arabicName: "سلطان إبراهيم",
      englishName: "Sulthan Ebrahim",
      image: "uploads/images/items/Sulthan%20Ebrahim.jpg",
      price: 20.0,
      minWeight: "500 gm",
      description: "Fresh Sulthan Ebrahim fish, ideal for frying or grilling. Rich in flavor and highly popular in Middle Eastern cuisine.",
      addons: [
        { id: 13, name: "Cleaning Only" },
        { id: 46, name: "Cleaning And Remove Head" },
        { id: 21, name: "No Cleaning" },
      ],
    },
    {
      id: 879,
      name: "Jesh M",
      arabicName: "جيش م",
      englishName: "Jesh M",
      image: "uploads/images/items/Jesh%20(M).jpg",
      price: 16.75,
      minWeight: "500 gm",
      description: "Jesh is a tender and tasty fish, often used in traditional Gulf recipes. Perfect for grilling or pan-frying.",
      addons: [
        { id: 13, name: "Cleaning Only" },
        { id: 14, name: "Clean, slice Cutting" },
        { id: 21, name: "No Cleaning" },
        { id: 18, name: "Clean & Cube Cutting" },
      ],
    },
    {
      id: 172,
      name: "Safi Doha (B)",
      arabicName: "صافي الدوحة (ب)",
      englishName: "Safi Doha (B)",
      image: "uploads/images/items/Safi%20Doha%20(B).jpg",
      price: 26.5,
      minWeight: "500 gm",
      description: "Locally sourced Safi fish from Doha. Sweet-tasting flesh, perfect for frying whole or grilling.",
      addons: cleaningAddons,
    }
  ];
  
  export default products;
  