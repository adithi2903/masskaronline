interface Addon {
  id: number;
  name: string;
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

export const products: Product[] = [
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
  },
  {
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
  }
];