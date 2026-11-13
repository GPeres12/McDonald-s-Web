/**
 * MCDONALD'S® DIGITAL EXPERIENCE — CORE JAVASCRIPT
 * Features: Menu Engine, Customizer, Combo Builder, Cart, Promo Codes,
 *           Audio Synthesizer, Live Tracking Simulation, Reviews, and Wishlist.
 */

// =============================================================================
// 1. MENU DATABASE
// =============================================================================
const MENU_DATA = [
  // BURGERS
  {
    id: 1,
    name: "Big Mac®",
    category: "burgers",
    price: 6.49,
    calories: 590,
    fat: "34g",
    carbs: "46g",
    protein: "25g",
    tag: "Crown Favorite",
    rating: "4.9 (14.2k)",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    desc: "Two 100% pure beef patties, special Mac sauce, crisp shredded lettuce, American cheese, pickles and onions on a toasted sesame seed bun.",
    ingredients: "100% Pure Beef, Sesame Seed Bun, Big Mac Sauce, Pasteurized Process American Cheese, Crisp Shredded Lettuce, Pickles, Onions.",
    allergens: ["Dairy", "Wheat / Gluten", "Soy", "Egg", "Sesame"],
    diet: ["beef", "popular"]
  },
  {
    id: 2,
    name: "Quarter Pounder® with Cheese",
    category: "burgers",
    price: 6.99,
    calories: 520,
    fat: "26g",
    carbs: "42g",
    protein: "30g",
    tag: "Fresh Beef",
    rating: "4.8 (8.9k)",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80",
    desc: "Quarter pound of 100% fresh beef cooked right when you order. Melted American cheese, slivered onions and tangy pickles.",
    ingredients: "100% Fresh Beef Quarter Pound Patty, Sesame Bun, American Cheese, Pickles, Slivered Onions, Ketchup, Mustard.",
    allergens: ["Dairy", "Wheat / Gluten", "Soy", "Sesame"],
    diet: ["beef", "popular"]
  },
  {
    id: 3,
    name: "Double Quarter Pounder® with Cheese",
    category: "burgers",
    price: 8.49,
    calories: 740,
    fat: "42g",
    carbs: "43g",
    protein: "48g",
    tag: "Double Beef",
    rating: "4.9 (9.4k)",
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
    desc: "Half-pound of 100% fresh beef with double melted cheese, slivered onions, pickles, ketchup and mustard.",
    ingredients: "Two 100% Fresh Beef Patties, Sesame Bun, Double American Cheese, Pickles, Onions, Mustard, Ketchup.",
    allergens: ["Dairy", "Wheat / Gluten", "Soy", "Sesame"],
    diet: ["beef"]
  },
  {
    id: 4,
    name: "Smoky Bacon Deluxe Burger",
    category: "burgers",
    price: 7.49,
    calories: 630,
    fat: "35g",
    carbs: "45g",
    protein: "32g",
    tag: "Smoky Bacon",
    rating: "4.7 (5.1k)",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=600&q=80",
    desc: "Juicy beef patty stacked with thick-cut Applewood smoked bacon, melted cheddar, lettuce and smoky BBQ sauce.",
    ingredients: "Pure Beef Patty, Brioche Bun, Applewood Bacon, Cheddar Cheese, Crisp Lettuce, Smoky BBQ Sauce.",
    allergens: ["Dairy", "Wheat / Gluten", "Soy"],
    diet: ["beef"]
  },
  {
    id: 5,
    name: "Classic Cheeseburger",
    category: "burgers",
    price: 2.99,
    calories: 300,
    fat: "13g",
    carbs: "33g",
    protein: "15g",
    tag: "Value Pick",
    rating: "4.7 (12.3k)",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=600&q=80",
    desc: "100% pure beef patty seasoned with just a pinch of salt and pepper, topped with a tangy pickle, chopped onions, ketchup, mustard and melted cheese.",
    ingredients: "Pure Beef Patty, Regular Bun, American Cheese, Ketchup, Pickle Slices, Onions, Mustard.",
    allergens: ["Dairy", "Wheat / Gluten", "Soy"],
    diet: ["beef", "saver"]
  },
  {
    id: 6,
    name: "Filet-O-Fish®",
    category: "burgers",
    price: 5.99,
    calories: 390,
    fat: "19g",
    carbs: "39g",
    protein: "16g",
    tag: "Wild Caught",
    rating: "4.8 (6.4k)",
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?auto=format&fit=crop&w=600&q=80",
    desc: "Wild-caught Alaska Pollock fillet with creamy tartar sauce and melted American cheese on a warm steamed bun.",
    ingredients: "Wild Alaska Pollock Fillet, Steamed Bun, Tartar Sauce, Pasteurized Process American Cheese.",
    allergens: ["Fish", "Dairy", "Wheat / Gluten", "Egg", "Soy"],
    diet: ["popular"]
  },

  // CHICKEN
  {
    id: 7,
    name: "Spicy McCrispy™ Deluxe",
    category: "chicken",
    price: 6.79,
    calories: 530,
    fat: "25g",
    carbs: "49g",
    protein: "27g",
    tag: "Spicy 🔥",
    rating: "4.9 (11.2k)",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=600&q=80",
    desc: "Southern-style crispy chicken fillet with spicy pepper sauce, crinkle-cut pickles, Roma tomatoes and shredded lettuce on toasted potato roll.",
    ingredients: "Crispy Chicken Fillet, Toasted Potato Roll, Spicy Pepper Sauce, Roma Tomato, Lettuce, Crinkle Cut Pickles.",
    allergens: ["Wheat / Gluten", "Egg", "Soy"],
    diet: ["chicken", "spicy", "popular"]
  },
  {
    id: 8,
    name: "Classic McChicken®",
    category: "chicken",
    price: 4.49,
    calories: 400,
    fat: "21g",
    carbs: "39g",
    protein: "14g",
    tag: "Crispy Gold",
    rating: "4.8 (9.8k)",
    image: "https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=600&q=80",
    desc: "Crispy chicken patty with mayonnaise and shredded lettuce on a perfectly toasted sesame bun.",
    ingredients: "Chicken Patty, Sesame Bun, Mayonnaise, Shredded Lettuce.",
    allergens: ["Wheat / Gluten", "Egg", "Soy", "Sesame"],
    diet: ["chicken", "popular", "saver"]
  },
  {
    id: 9,
    name: "10pc Chicken McNuggets®",
    category: "chicken",
    price: 5.99,
    calories: 420,
    fat: "25g",
    carbs: "26g",
    protein: "23g",
    tag: "Bestseller",
    rating: "4.9 (24.1k)",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=600&q=80",
    desc: "Tender, juicy chicken breast meat in a golden crispy tempura coating. Served with your choice of signature dipping sauces.",
    ingredients: "White Boneless Chicken Breast, Tempura Breading, Vegetable Oil Blend. Choice of Tangy BBQ, Sweet & Sour, or Spicy Buffalo dip.",
    allergens: ["Wheat / Gluten", "Soy"],
    diet: ["chicken", "popular"]
  },
  {
    id: 10,
    name: "20pc McNuggets® ShareBox",
    category: "chicken",
    price: 9.99,
    calories: 830,
    fat: "50g",
    carbs: "52g",
    protein: "46g",
    tag: "Party Size",
    rating: "4.9 (15.5k)",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=600&q=80",
    desc: "20 crispy golden nuggets with 4 signature dipping sauces. Perfect for sharing with family and friends.",
    ingredients: "White Chicken Breast Meat, Tempura Batter, Vegetable Oil. 4 Assorted Dips.",
    allergens: ["Wheat / Gluten", "Soy"],
    diet: ["chicken"]
  },

  // SIDES & FRIES
  {
    id: 11,
    name: "World Famous Fries® (Medium)",
    category: "sides",
    price: 3.49,
    calories: 320,
    fat: "15g",
    carbs: "43g",
    protein: "5g",
    tag: "Legendary",
    rating: "5.0 (38.2k)",
    image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=600&q=80",
    desc: "Crispy and golden on the outside, fluffy on the inside. Specially sourced premium Russet Burbank potatoes, lightly salted.",
    ingredients: "Potatoes, Vegetable Oil (Canola, Corn, Soybean), Dextrose, Sodium Acid Pyrophosphate, Salt.",
    allergens: ["Soy"],
    diet: ["veggie", "popular", "saver"]
  },
  {
    id: 12,
    name: "World Famous Fries® (Large)",
    category: "sides",
    price: 4.29,
    calories: 480,
    fat: "23g",
    carbs: "65g",
    protein: "7g",
    tag: "Extra Crunch",
    rating: "5.0 (26.7k)",
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80",
    desc: "The largest portion of the world's most beloved french fries. Golden, crisp and irresistibly hot.",
    ingredients: "Potatoes, Vegetable Oil Blend, Salt.",
    allergens: ["Soy"],
    diet: ["veggie"]
  },
  {
    id: 13,
    name: "Crispy Mozzarella Dippers (4pc)",
    category: "sides",
    price: 4.19,
    calories: 260,
    fat: "14g",
    carbs: "22g",
    protein: "11g",
    tag: "Melty Cheese",
    rating: "4.8 (4.6k)",
    image: "https://images.unsplash.com/photo-1548340749-f757545228e0?auto=format&fit=crop&w=600&q=80",
    desc: "Warm breaded sticks of 100% mozzarella cheese coated in herb breadcrumbs, served with tangy tomato salsa.",
    ingredients: "Mozzarella Cheese, Herb Breadcrumbs, Vegetable Oil, Tomato Salsa Dip.",
    allergens: ["Dairy", "Wheat / Gluten"],
    diet: ["veggie"]
  },
  {
    id: 14,
    name: "Side Garden Salad with Balsamic",
    category: "sides",
    price: 3.29,
    calories: 60,
    fat: "2g",
    carbs: "8g",
    protein: "2g",
    tag: "Fresh Greens",
    rating: "4.6 (3.1k)",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    desc: "Crisp romaine greens, ripe grape tomatoes, and fresh cucumbers served with Newman's Own® Balsamic Vinaigrette.",
    ingredients: "Romaine Lettuce, Baby Spinach, Grape Tomatoes, Cucumbers, Balsamic Dressing.",
    allergens: [],
    diet: ["veggie", "saver"]
  },

  // MCCAFÉ & BEVERAGES
  {
    id: 15,
    name: "Coca-Cola® Zero Sugar",
    category: "mccafe",
    price: 2.49,
    calories: 0,
    fat: "0g",
    carbs: "0g",
    protein: "0g",
    tag: "Zero Cal",
    rating: "4.9 (18.4k)",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
    desc: "Ice-cold Coca-Cola Zero Sugar poured over crunchy nugget ice for maximum crisp refreshment.",
    ingredients: "Carbonated Water, Caramel Color, Phosphoric Acid, Aspartame, Natural Flavors, Caffeine.",
    allergens: [],
    diet: ["popular", "saver", "veggie"]
  },
  {
    id: 16,
    name: "McCafé® Iced Caramel Frappé",
    category: "mccafe",
    price: 4.29,
    calories: 450,
    fat: "18g",
    carbs: "66g",
    protein: "7g",
    tag: "Barista Pick",
    rating: "4.9 (13.7k)",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    desc: "Rich coffee blended with caramel flavor and crushed ice, crowned with whipped cream and golden caramel drizzle.",
    ingredients: "Brewed Arabica Coffee, Milk, Sugar, Caramel Drizzle, Whipped Light Cream.",
    allergens: ["Dairy"],
    diet: ["popular", "veggie"]
  },
  {
    id: 17,
    name: "McCafé® Premium Roast Coffee",
    category: "mccafe",
    price: 1.99,
    calories: 5,
    fat: "0g",
    carbs: "0g",
    protein: "0g",
    tag: "100% Arabica",
    rating: "4.8 (8.2k)",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    desc: "Freshly brewed 100% Rainforest Alliance Certified Arabica beans. Rich, aromatic and balanced.",
    ingredients: "100% Arabica Fresh Ground Beans, Filtered Water.",
    allergens: [],
    diet: ["veggie", "saver"]
  },
  {
    id: 18,
    name: "Mango Pineapple Real Fruit Smoothie",
    category: "mccafe",
    price: 3.79,
    calories: 250,
    fat: "1g",
    carbs: "57g",
    protein: "3g",
    tag: "Real Fruit",
    rating: "4.8 (5.9k)",
    image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?auto=format&fit=crop&w=600&q=80",
    desc: "Sweet mango and tangy pineapple purée blended with ice and low-fat creamy yogurt.",
    ingredients: "Mango Puree, Pineapple Juice Concentrate, Low-Fat Yogurt, Crushed Ice.",
    allergens: ["Dairy"],
    diet: ["veggie"]
  },

  // MCFLURRY & SWEETS
  {
    id: 19,
    name: "OREO® McFlurry®",
    category: "desserts",
    price: 3.99,
    calories: 510,
    fat: "17g",
    carbs: "80g",
    protein: "11g",
    tag: "Iconic Treat",
    rating: "5.0 (31.4k)",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80",
    desc: "Creamy vanilla soft-serve ice cream mixed with generous chunks of crunchy crushed OREO® cookies.",
    ingredients: "Vanilla Soft Serve Ice Cream, Crushed OREO® Cookies.",
    allergens: ["Dairy", "Wheat / Gluten", "Soy"],
    diet: ["veggie", "popular"]
  },
  {
    id: 20,
    name: "M&M'S® McFlurry®",
    category: "desserts",
    price: 3.99,
    calories: 640,
    fat: "22g",
    carbs: "96g",
    protein: "13g",
    tag: "Candy Crunch",
    rating: "4.8 (11.8k)",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80",
    desc: "Creamy vanilla soft serve blended with colorful chocolate M&M'S® candies.",
    ingredients: "Vanilla Soft Serve, M&M'S® Milk Chocolate Candies.",
    allergens: ["Dairy", "Soy", "May Contain Peanuts"],
    diet: ["veggie"]
  },
  {
    id: 21,
    name: "Baked Hot Apple Pie",
    category: "desserts",
    price: 2.29,
    calories: 230,
    fat: "11g",
    carbs: "33g",
    protein: "2g",
    tag: "Warm & Flaky",
    rating: "4.8 (16.2k)",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=600&q=80",
    desc: "Crispy golden turnover pastry filled with warm American-grown apples spiced with cinnamon.",
    ingredients: "Apples, Bleached Wheat Flour, Cinnamon, Sugar, Vegetable Oil, Palm Oil.",
    allergens: ["Wheat / Gluten", "Soy"],
    diet: ["veggie", "saver"]
  },
  {
    id: 22,
    name: "Soft-Baked Chocolate Chip Cookies (3pk)",
    category: "desserts",
    price: 2.89,
    calories: 510,
    fat: "24g",
    carbs: "72g",
    protein: "6g",
    tag: "Fresh Baked",
    rating: "4.7 (7.8k)",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=600&q=80",
    desc: "Three warm, soft-baked cookies loaded with melted chocolate pockets.",
    ingredients: "Enriched Flour, Semisweet Chocolate Chips, Butter, Brown Sugar, Eggs.",
    allergens: ["Dairy", "Wheat / Gluten", "Egg", "Soy"],
    diet: ["veggie", "saver"]
  },

  // BREAKFAST
  {
    id: 23,
    name: "Egg McMuffin®",
    category: "breakfast",
    price: 4.69,
    calories: 310,
    fat: "13g",
    carbs: "30g",
    protein: "17g",
    tag: "Fresh Cracked Egg",
    rating: "4.9 (19.1k)",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
    desc: "Freshly cracked Grade A egg, Canadian bacon and melted American cheese on a toasted English muffin with real butter.",
    ingredients: "English Muffin, Grade A Fresh Egg, Canadian Style Bacon, Pasteurized Process American Cheese, Salted Butter.",
    allergens: ["Egg", "Dairy", "Wheat / Gluten", "Soy"],
    diet: ["popular"]
  },
  {
    id: 24,
    name: "Golden Crispy Hash Browns",
    category: "breakfast",
    price: 2.29,
    calories: 140,
    fat: "8g",
    carbs: "16g",
    protein: "1g",
    tag: "Breakfast Crunch",
    rating: "5.0 (29.5k)",
    image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80",
    desc: "Shredded potato patty fried to golden perfection. Crisp and crunchy on the outside, steamy warmth inside.",
    ingredients: "Potatoes, Vegetable Oil Blend, Salt, Corn Flour, Dextrose.",
    allergens: ["Soy"],
    diet: ["veggie", "saver", "popular"]
  }
];

// =============================================================================
// 2. CONFIGURATION & STATE
// =============================================================================
const FREE_DELIVERY_THRESHOLD = 25.00;
const TAX_RATE = 0.08;
const STANDARD_DELIVERY_FEE = 3.99;

// Persistent state from localStorage
let cart = JSON.parse(localStorage.getItem("mcd_cart")) || [];
let favorites = JSON.parse(localStorage.getItem("mcd_favorites")) || [1, 11, 19];
let soundEnabled = localStorage.getItem("mcd_sound") !== "false";
let currentTheme = localStorage.getItem("mcd_theme") || "dark";
let currentLanguage = localStorage.getItem("mcd_lang") || "en";
let appliedDiscount = JSON.parse(localStorage.getItem("mcd_promo")) || null;
let currentTip = 3.00;
let currentStoreId = 1;

// =============================================================================
// 2.1 INTERNATIONALIZATION DICTIONARIES (EN / PT-BR / ES)
// =============================================================================
const I18N = {
  en: {
    code: "EN",
    flag: "🇺🇸",
    name: "English (US)",
    banner_badge: "🔥 EXCLUSIVE DEAL",
    banner_text: "Get 20% OFF your first McDelivery order! Use code",
    banner_free: "Free delivery on orders over $25",
    mode_delivery: "Delivery",
    mode_pickup: "Pick-up",
    mode_drivethru: "Drive-Thru",
    nav_menu: "Menu",
    nav_combo: "Meal Builder",
    nav_deals: "Deals & Coupons",
    nav_quality: "Our Quality",
    nav_locator: "Locations",
    nav_reviews: "Reviews",
    hero_status: "Kitchen Live: Sizzling & Delivering 24/7",
    hero_title: 'The Golden Standard,<br><span class="text-gradient">I\'m Lovin\' It.</span>',
    hero_desc: "100% fresh inspected beef, legendary golden fries, sizzling McNuggets, and handcrafted McCafé® drinks. Made fresh to order and delivered hot to your doorstep in minutes.",
    hero_btn_order: "Order McDelivery",
    hero_btn_combo: "Build Your Combo",
    stat_beef: "Pure Beef & No Fillers",
    stat_speed: "Avg. Delivery Speed",
    stat_orders: "Over 500k+ Orders",
    hero_card_badge: "⭐ Crown Favorite",
    hero_card_title: "Big Mac® Extra Value Pack",
    hero_card_desc: "Two 100% pure beef patties, special sauce, crisp lettuce, melted American cheese, pickles & onions on a toasted sesame seed bun.",
    hero_card_add: "+ Quick Add",
    deals_eyebrow: "Daily McDeals & Perks",
    deals_title: "Save Big on Your Favorites",
    deals_subtitle: "Exclusive digital coupons ready to redeem with one click.",
    apply_code: "Apply Code",
    expires_in: "Expires in:",
    combo_eyebrow: "Custom Meal Builder",
    combo_title: "The Golden Combo Creator",
    combo_subtitle: 'Choose your favorite Sandwich, a golden Side, and an ice-cold Beverage for an instant <strong>$3.00 bundle discount</strong>.',
    combo_step1: "1. Burger",
    combo_step2: "2. Side",
    combo_step3: "3. Drink",
    combo_summary_head: "Your Selected Meal:",
    combo_savings: "Bundle Savings:",
    combo_meal_total: "Meal Total:",
    combo_add_btn: "Add Golden Combo to Order 🛒",
    combo_choose_main: "1. Choose Your Main",
    combo_choose_side: "2. Choose Your Side",
    combo_choose_drink: "3. Choose Your Beverage",
    menu_eyebrow: "Fresh From The Grill",
    menu_title: "Explore The Full Menu",
    menu_subtitle: "Handcrafted with premium ingredients, prepared hot when you click order.",
    cat_all: "All Favorites",
    cat_burgers: "Burgers & Beef",
    cat_chicken: "Chicken & McNuggets",
    cat_sides: "Fries & Sides",
    cat_mccafe: "McCafé® & Drinks",
    cat_desserts: "McFlurry® & Sweets",
    cat_breakfast: "All-Day Breakfast",
    cat_saver: "Value Under $5",
    search_placeholder: "Search Big Mac, McFlurry, Fries, Coffee...",
    diet_label: "Dietary:",
    diet_all: "All",
    diet_beef: "🥩 100% Beef",
    diet_chicken: "🍗 Chicken",
    diet_spicy: "🌶️ Spicy",
    diet_veggie: "🍃 Veggie Friendly",
    sort_label: "Sort by:",
    sort_popular: "Most Popular",
    sort_price_asc: "Price: Low to High",
    sort_price_desc: "Price: High to Low",
    sort_calories: "Calories: Low to High",
    sort_name: "Alphabetical (A-Z)",
    showing_items: "Showing {n} delicious items",
    reset_filters: "Reset Filters ↺",
    card_customize: "🛠️ Customize",
    card_add: "+ Add",
    cart_head_title: "Your McDelivery Bag",
    cart_empty_title: "Your McDelivery Bag is Empty",
    cart_empty_desc: "Satisfy your cravings! Browse our full menu and add your favorite meals.",
    cart_empty_btn: "Explore Menu",
    cart_free_delivery_progress: "Add <strong>{amount}</strong> more for <strong>FREE Delivery!</strong> 🛵",
    cart_free_unlocked: "🎉 <strong>Unlocked FREE McDelivery!</strong> Delivery is on us.",
    toast_lang: "Language changed to English 🇺🇸"
  },
  pt: {
    code: "PT",
    flag: "🇧🇷",
    name: "Português (Brasil)",
    banner_badge: "🔥 OFERTA EXCLUSIVA",
    banner_text: "Ganhe 20% OFF no seu primeiro McDelivery! Use o cupom",
    banner_free: "Entrega grátis em pedidos acima de R$ 25",
    mode_delivery: "Entrega",
    mode_pickup: "Retirada",
    mode_drivethru: "Drive-Tudo",
    nav_menu: "Cardápio",
    nav_combo: "Montar Combo",
    nav_deals: "Ofertas & Cupons",
    nav_quality: "Nossa Qualidade",
    nav_locator: "Restaurantes",
    nav_reviews: "Avaliações",
    hero_status: "Cozinha Ao Vivo: Funcionando e Entregando 24h",
    hero_title: 'O Padrão Dourado,<br><span class="text-gradient">Amo Muito Tudo Isso.</span>',
    hero_desc: "Carne 100% bovina inspecionada, batatas douradas lendárias, McNuggets crocantes e bebidas artesanais McCafé®. Feito na hora e entregue quentinho na sua porta em minutos.",
    hero_btn_order: "Pedir McDelivery",
    hero_btn_combo: "Montar seu Combo",
    stat_beef: "Carne Bovina Sem Conservantes",
    stat_speed: "Tempo Médio de Entrega",
    stat_orders: "Mais de 500k+ Pedidos",
    hero_card_badge: "⭐ O Mais Pedido",
    hero_card_title: "Big Mac® Pacote Econômico",
    hero_card_desc: "Dois hambúrgueres de carne 100% bovina, molho especial, alface crocante, queijo derretido, picles e cebola no pão com gergelim tostado.",
    hero_card_add: "+ Adicionar Rápido",
    deals_eyebrow: "Ofertas do Dia & Benefícios",
    deals_title: "Economize nos Seus Favoritos",
    deals_subtitle: "Cupons digitais exclusivos prontos para resgatar com um clique.",
    apply_code: "Aplicar Cupom",
    expires_in: "Expira em:",
    combo_eyebrow: "Criador de Combo Sob Medida",
    combo_title: "O Criador do Combo Dourado",
    combo_subtitle: 'Escolha seu sanduíche favorito, um acompanhamento dourado e uma bebida gelada com <strong>desconto de $3.00 no combo</strong>.',
    combo_step1: "1. Sanduíche",
    combo_step2: "2. Acompanhamento",
    combo_step3: "3. Bebida",
    combo_summary_head: "Seu Combo Escolhido:",
    combo_savings: "Economia do Combo:",
    combo_meal_total: "Total do Combo:",
    combo_add_btn: "Adicionar Combo ao Pedido 🛒",
    combo_choose_main: "1. Escolha o Sanduíche",
    combo_choose_side: "2. Escolha o Acompanhamento",
    combo_choose_drink: "3. Escolha a Bebida",
    menu_eyebrow: "Saindo da Chapa",
    menu_title: "Explore o Cardápio Completo",
    menu_subtitle: "Preparado com ingredientes nobres e feito na hora assim que você pede.",
    cat_all: "Todos os Favoritos",
    cat_burgers: "Hambúrgueres & Carne",
    cat_chicken: "Frango & McNuggets",
    cat_sides: "Batatas & Acompanhamentos",
    cat_mccafe: "McCafé® & Bebidas",
    cat_desserts: "McFlurry® & Sobremesas",
    cat_breakfast: "Café da Manhã",
    cat_saver: "Ofertas até $5",
    search_placeholder: "Buscar Big Mac, McFlurry, Batata, Café...",
    diet_label: "Filtro:",
    diet_all: "Todos",
    diet_beef: "🥩 100% Carne",
    diet_chicken: "🍗 Frango",
    diet_spicy: "🌶️ Picante",
    diet_veggie: "🍃 Opções Vegetarianas",
    sort_label: "Ordenar por:",
    sort_popular: "Mais Populares",
    sort_price_asc: "Menor Preço",
    sort_price_desc: "Maior Preço",
    sort_calories: "Menos Calorias",
    sort_name: "Ordem Alfabética (A-Z)",
    showing_items: "Mostrando {n} itens deliciosos",
    reset_filters: "Limpar Filtros ↺",
    card_customize: "🛠️ Personalizar",
    card_add: "+ Adicionar",
    cart_head_title: "Sua Sacola McDelivery",
    cart_empty_title: "Sua Sacola McDelivery está Vazia",
    cart_empty_desc: "Mate a sua fome! Explore nosso cardápio completo e adicione seus lanches favoritos.",
    cart_empty_btn: "Explorar Cardápio",
    cart_free_delivery_progress: "Adicione mais <strong>{amount}</strong> para <strong>Frete GRÁTIS!</strong> 🛵",
    cart_free_unlocked: "🎉 <strong>Frete GRÁTIS Liberado!</strong> A entrega é por nossa conta.",
    toast_lang: "Idioma alterado para Português (Brasil) 🇧🇷"
  },
  es: {
    code: "ES",
    flag: "🇪🇸",
    name: "Español",
    banner_badge: "🔥 OFERTA EXCLUSIVA",
    banner_text: "¡Obtén 20% OFF en tu primer McDelivery! Usa el cupón",
    banner_free: "Envío gratis en pedidos superiores a $25",
    mode_delivery: "Entrega",
    mode_pickup: "Para Llevar",
    mode_drivethru: "AutoMac",
    nav_menu: "Menú",
    nav_combo: "Armar Combo",
    nav_deals: "Ofertas & Cupones",
    nav_quality: "Nuestra Calidad",
    nav_locator: "Restaurantes",
    nav_reviews: "Reseñas",
    hero_status: "Cocina En Vivo: Funcionando y Entregando 24h",
    hero_title: 'El Estándar Dorado,<br><span class="text-gradient">Me Encanta.</span>',
    hero_desc: "Carne 100% vacuna inspeccionada, papas doradas legendarias, McNuggets crujientes y bebidas artesanales McCafé®. Hecho en el momento y entregado caliente a tu puerta en minutos.",
    hero_btn_order: "Pedir McDelivery",
    hero_btn_combo: "Armar tu Combo",
    stat_beef: "Carne Vacuna Sin Conservantes",
    stat_speed: "Velocidad Promedio de Entrega",
    stat_orders: "Más de 500k+ Pedidos",
    hero_card_badge: "⭐ El Favorito",
    hero_card_title: "Big Mac® Paquete Especial",
    hero_card_desc: "Dos hamburguesas de carne 100% vacuna, salsa especial, lechuga crujiente, queso derretido, pepinillos y cebolla en pan con ajonjolí tostado.",
    hero_card_add: "+ Añadir Rápido",
    deals_eyebrow: "Ofertas del Día & Beneficios",
    deals_title: "Ahorra en tus Favoritos",
    deals_subtitle: "Cupones digitales exclusivos listos para canjear con un clic.",
    apply_code: "Aplicar Cupón",
    expires_in: "Vence en:",
    combo_eyebrow: "Creador de Combo Personalizado",
    combo_title: "El Creador del Combo Dorado",
    combo_subtitle: 'Elige tu hamburguesa favorita, un acompañamiento dorado y una bebida fría con <strong>descuento de $3.00 en el combo</strong>.',
    combo_step1: "1. Hamburguesa",
    combo_step2: "2. Acompañamiento",
    combo_step3: "3. Bebida",
    combo_summary_head: "Tu Combo Elegido:",
    combo_savings: "Ahorro del Combo:",
    combo_meal_total: "Total del Combo:",
    combo_add_btn: "Agregar Combo al Pedido 🛒",
    combo_choose_main: "1. Elige tu Hamburguesa",
    combo_choose_side: "2. Elige tu Acompañamiento",
    combo_choose_drink: "3. Elige tu Bebida",
    menu_eyebrow: "Recién Salido de la Parrilla",
    menu_title: "Explora el Menú Completo",
    menu_subtitle: "Preparado con ingredientes de primera calidad, cocinado al momento en cuanto ordenas.",
    cat_all: "Todos los Favoritos",
    cat_burgers: "Hamburguesas & Carne",
    cat_chicken: "Pollo & McNuggets",
    cat_sides: "Papas & Acompañamientos",
    cat_mccafe: "McCafé® & Bebidas",
    cat_desserts: "McFlurry® & Postres",
    cat_breakfast: "Desayunos Todo el Día",
    cat_saver: "Ofertas hasta $5",
    search_placeholder: "Buscar Big Mac, McFlurry, Papas, Café...",
    diet_label: "Filtro:",
    diet_all: "Todos",
    diet_beef: "🥩 100% Carne",
    diet_chicken: "🍗 Pollo",
    diet_spicy: "🌶️ Picante",
    diet_veggie: "🍃 Apto Vegetarianos",
    sort_label: "Ordenar por:",
    sort_popular: "Más Populares",
    sort_price_asc: "Precio: Menor a Mayor",
    sort_price_desc: "Precio: Mayor a Menor",
    sort_calories: "Calorías: Menor a Mayor",
    sort_name: "Alfabético (A-Z)",
    showing_items: "Mostrando {n} productos deliciosos",
    reset_filters: "Restablecer Filtros ↺",
    card_customize: "🛠️ Personalizar",
    card_add: "+ Agregar",
    cart_head_title: "Tu Bolsa McDelivery",
    cart_empty_title: "Tu Bolsa McDelivery está Vacía",
    cart_empty_desc: "¡Satisface tu antojo! Explora nuestro menú completo y agrega tus comidas favoritas.",
    cart_empty_btn: "Explorar Menú",
    cart_free_delivery_progress: "¡Agrega <strong>{amount}</strong> más para <strong>Envío GRATIS!</strong> 🛵",
    cart_free_unlocked: "🎉 <strong>¡Envío GRATIS Desbloqueado!</strong> La entrega corre por nuestra cuenta.",
    toast_lang: "Idioma cambiado a Español 🇪🇸"
  }
};

const ITEM_TRANSLATIONS = {
  pt: {
    1: { name: "Big Mac®", desc: "Dois hambúrgueres de carne 100% bovina, molho especial Mac, alface crocante, queijo, picles e cebola no pão com gergelim tostado." },
    2: { name: "Quarteirão® com Queijo", desc: "Hambúrguer de carne 100% bovina preparado na hora, queijo cheddar derretido, cebola em tiras e picles crocantes." },
    3: { name: "Duplo Quarteirão® com Queijo", desc: "Meia libra de pura carne bovina com queijo cheddar duplo derretido, cebola em tiras, picles, ketchup e mostarda." },
    4: { name: "Hambúrguer Bacon Deluxe", desc: "Hambúrguer suculento com fatias grossas de bacon defumado Applewood, queijo derretido, alface e molho barbecue." },
    5: { name: "Hambúrguer Clássico", desc: "Carne 100% bovina temperada apenas com uma pitada de sal e pimenta, picles, cebola picada, ketchup, mostarda e queijo." },
    6: { name: "Filet-O-Fish®", desc: "Filé de peixe empanado crocante de pesca sustentável com molho tártaro cremoso e queijo no pão quentinho no vapor." },
    7: { name: "McCrispy™ Deluxe Picante", desc: "Filé de frango super crocante ao estilo do sul, molho de pimenta picante, picles, tomate e alface fresca no pão de batata." },
    8: { name: "McChicken® Clássico", desc: "Empanado de frango crocante e dourado com maionese suave e alface americana picadinha no pão tostado." },
    9: { name: "Chicken McNuggets® 10 un", desc: "Pedaços macios de peito de frango com casquinha crocante e dourada. Acompanha seus molhos favoritos." },
    10: { name: "McNuggets® ShareBox 20 un", desc: "20 nuggets crocantes com 4 molhos artesanais para compartilhar com a família e amigos." },
    11: { name: "Batata Frita Lendária (Média)", desc: "Crocante e dourada por fora, macia e quentinha por dentro. Russet Burbank selecionadas, levemente salgadas." },
    12: { name: "Batata Frita Lendária (Grande)", desc: "A porção máxima da batata frita mais amada do planeta. Dourada, sequinha e irresistível." },
    13: { name: "Palitinhos de Muçarela (4 un)", desc: "Palitinhos crocantes de queijo muçarela 100% derretido com ervas finas e molho salsa especial." },
    14: { name: "Salada Fresca do Campo", desc: "Folhas verdes crocantes de alface romana, tomates-uva maduros e pepino fresco com molho balsâmico." },
    15: { name: "Coca-Cola® Sem Açúcar", desc: "Coca-Cola Zero geladíssima servida com gelo picado crocante para o máximo de refrescância." },
    16: { name: "McCafé® Frappé de Caramelo", desc: "Café encorpado batido com calda de caramelo e gelo, coroado com chantilly fofo e calda dourada." },
    17: { name: "Café Premium Torrado McCafé®", desc: "Café 100% Arábica certificado Rainforest Alliance, moído na hora para um aroma equilibrado." },
    18: { name: "Smoothie de Manga & Abacaxi", desc: "Purê natural de manga e abacaxi batido com iogurte suave e gelo picado." },
    19: { name: "McFlurry® OREO®", desc: "Massa gelada cremosa de baunilha mesclada com pedaços crocantes do autêntico biscoito OREO®." },
    20: { name: "McFlurry® M&M'S®", desc: "Sorvete cremoso de baunilha misturado com confetes coloridos crocantes de chocolate M&M'S®." },
    21: { name: "Torta de Maçã Quentinha", desc: "Massa folhada dourada e super crocante recheada com maçãs aromáticas e canela quentinha." },
    22: { name: "Cookies de Chocolate (3 un)", desc: "Três cookies macios assados na hora e repletos de gotas de chocolate derretidas." },
    23: { name: "Egg McMuffin®", desc: "Ovo fresco quebrado na chapa, presunto tipo bacon canadense e queijo derretido no muffin inglês quentinho." },
    24: { name: "Hash Brown Dourado", desc: "Batata ralada frita em formato clássico, dourada e crocante por fora com interior macio." }
  },
  es: {
    1: { name: "Big Mac®", desc: "Dos hamburguesas de carne 100% vacuna, salsa especial Mac, lechuga crujiente, queso, pepinillos y cebolla en pan con ajonjolí tostado." },
    2: { name: "Cuarto de Libra® con Queso", desc: "Hamburguesa de 100% carne fresca cocinada al momento, queso derretido, cebolla en tiras y pepinillos crujientes." },
    3: { name: "Doble Cuarto de Libra® con Queso", desc: "Media libra de carne fresca con doble queso americano derretido, cebolla, pepinillos, ketchup y mostaza." },
    4: { name: "Hamburguesa Bacon Deluxe", desc: "Hamburguesa jugosa con abundante tocino ahumado Applewood, queso derretido, lechuga y salsa barbacoa." },
    5: { name: "Hamburguesa con Queso", desc: "Carne 100% vacuna sazonada con una pizca de sal y pimienta, pepinillo, cebolla picada, ketchup, mostaza y queso." },
    6: { name: "Filet-O-Fish®", desc: "Filete de pescado crujiente de pesca silvestre sostenible con salsa tártara cremosa y queso en pan al vapor." },
    7: { name: "McCrispy™ Deluxe Picante", desc: "Filete de pollo crujiente estilo sureño con salsa de pimienta picante, pepinillos, tomate y lechuga fresca." },
    8: { name: "McChicken® Clásico", desc: "Empanizado de pollo crujiente y dorado con mayonesa suave y lechuga picada en pan con ajonjolí tostado." },
    9: { name: "Chicken McNuggets® 10 pz", desc: "Trocitos tiernos de pechuga de pollo con rebozado dorado y crujiente. Incluye tus salsas favoritas." },
    10: { name: "McNuggets® ShareBox 20 pz", desc: "20 nuggets crujientes con 4 salsas de la casa para compartir con amigos y familia." },
    11: { name: "Papas Fritas Famosas (Medianas)", desc: "Crujientes y doradas por fuera, suaves por dentro. Seleccionadas Russet Burbank, ligeramente saladas." },
    12: { name: "Papas Fritas Famosas (Grandes)", desc: "La porción más grande de las papas fritas más amadas del mundo. Calientes y doradas." },
    13: { name: "Dedos de Mozzarella (4 pz)", desc: "Crujientes bastones de queso 100% mozzarella derretido con hierbas finas y salsa de tomate." },
    14: { name: "Ensalada Fresca de Huerta", desc: "Hojas verdes frescas de lechuga romana, tomates uva y pepino crujiente con aderezo balsámico." },
    15: { name: "Coca-Cola® Sin Azúcar", desc: "Coca-Cola Zero helada servida con hielo picado para la máxima frescura burbujeante." },
    16: { name: "McCafé® Frappé de Caramelo", desc: "Café helado batido con caramelo y hielo picado, coronado con crema batida y lluvia de caramelo." },
    17: { name: "Café Tostado Premium McCafé®", desc: "Café 100% Arábica con certificación Rainforest Alliance, recién molido para un aroma perfecto." },
    18: { name: "Smoothie de Mango y Piña", desc: "Puré de mango dulce y piña fresca batido con yogurt descremado y hielo triturado." },
    19: { name: "McFlurry® OREO®", desc: "Cremoso helado suave de vainilla mezclado con generosos trozos de galletitas OREO® crujientes." },
    20: { name: "McFlurry® M&M'S®", desc: "Helado cremoso de vainilla combinado con coloridos confites crocantes de chocolate M&M'S®." },
    21: { name: "Pastel Caliente de Manzana", desc: "Empanada hojaldrada crujiente rellena de manzanas horneadas con canela aromática." },
    22: { name: "Galletas con Chips de Chocolate (3 pz)", desc: "Tres galletas horneadas suaves y esponjosas repletas de chispas de chocolate derretidas." },
    23: { name: "Egg McMuffin®", desc: "Huevo fresco quebrado al momento en la plancha, lomo canadiense y queso derretido en muffin inglés." },
    24: { name: "Hash Brown Dorado", desc: "Torta de papa rallada frita a la perfección dorada. Crujiente por fuera, suave por dentro." }
  }
};

// Temp customization state
let activeCustomizingItem = null;

// =============================================================================
// 3. SOUND SYNTHESIZER (WEB AUDIO API)
// =============================================================================
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) this.ctx = new AudioCtx();
    }
  }

  chime() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, this.ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.12); // A5

      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.35);
    } catch (e) {
      // Audio fallback silent
    }
  }

  success() {
    if (!soundEnabled) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "triangle";
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.12, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.3);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.3);
      });
    } catch (e) {
      // Audio fallback silent
    }
  }
}

const sfx = new SoundFX();

// =============================================================================
// 4. DOM ELEMENTS
// =============================================================================
const menuGrid = document.getElementById("menu-grid");
const cartDrawer = document.getElementById("cart-drawer");
const overlay = document.getElementById("overlay");
const cartItemsList = document.getElementById("cart-items-list");
const cartCountBadge = document.getElementById("cart-count");
const cartTotalBadge = document.getElementById("cart-total-badge");
const favCountBadge = document.getElementById("fav-count");
const mbCartCount = document.getElementById("mb-cart-count");
const mbFavCount = document.getElementById("mb-fav-count");
const toastContainer = document.getElementById("toast-container");

// Modals
const customizerModal = document.getElementById("customizer-modal");
const nutritionModal = document.getElementById("nutrition-modal");
const checkoutModal = document.getElementById("checkout-modal");
const trackerModal = document.getElementById("tracker-modal");
const favoritesModal = document.getElementById("favorites-modal");
const reviewModal = document.getElementById("review-modal");
const searchOverlayModal = document.getElementById("search-overlay-modal");

// =============================================================================
// 5. HELPER UTILITIES
// =============================================================================
const formatMoney = num => "$" + Number(num).toFixed(2);

function showToast(message, isGold = false) {
  const toast = document.createElement("div");
  toast.className = `toast ${isGold ? "toast-gold" : ""}`;
  toast.innerHTML = `<span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-10px)";
    setTimeout(() => toast.remove(), 300);
  }, 2600);
}

// =============================================================================
// 6. MENU RENDERING & FILTERING
// =============================================================================
let activeCategory = "all";
let activeDiet = "all";
let activeSearchQuery = "";
let activeSort = "popular";

function getFilteredMenu() {
  return MENU_DATA.filter(item => {
    // Category match
    const matchCat = activeCategory === "all" || 
      (activeCategory === "saver" ? (item.price <= 5.00 || item.diet.includes("saver")) : item.category === activeCategory);

    // Dietary match
    const matchDiet = activeDiet === "all" || item.diet.includes(activeDiet);

    // Search query match
    const query = activeSearchQuery.trim().toLowerCase();
    const matchSearch = !query || 
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.ingredients.toLowerCase().includes(query);

    return matchCat && matchDiet && matchSearch;
  }).sort((a, b) => {
    if (activeSort === "price-asc") return a.price - b.price;
    if (activeSort === "price-desc") return b.price - a.price;
    if (activeSort === "calories") return a.calories - b.calories;
    if (activeSort === "name") return a.name.localeCompare(b.name);
    return 0; // Default popular order
  });
}

function renderMenu() {
  const items = getFilteredMenu();
  const resultsCountEl = document.getElementById("results-count");
  const resetBtn = document.getElementById("reset-filters");

  if (resultsCountEl) {
    const template = (I18N[currentLanguage] && I18N[currentLanguage].showing_items) || "Showing {n} delicious items";
    resultsCountEl.textContent = template.replace("{n}", items.length);
  }

  if (resetBtn) {
    resetBtn.style.display = (activeCategory !== "all" || activeDiet !== "all" || activeSearchQuery) ? "inline-block" : "none";
  }

  if (items.length === 0) {
    menuGrid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <div style="font-size: 3.5rem; margin-bottom: 12px;">🔍</div>
        <h3>No items found matching your filter</h3>
        <p style="margin: 8px 0 20px;">Try searching for "Big Mac", "Fries", or reset your filters.</p>
        <button class="btn btn-primary" onclick="resetAllFilters()">Reset All Filters</button>
      </div>
    `;
    return;
  }

  const custText = (I18N[currentLanguage] && I18N[currentLanguage].card_customize) || "🛠️ Customize";
  const addText = (I18N[currentLanguage] && I18N[currentLanguage].card_add) || "+ Add";

  menuGrid.innerHTML = items.map(item => {
    const isFav = favorites.includes(item.id);
    const trans = (ITEM_TRANSLATIONS[currentLanguage] && ITEM_TRANSLATIONS[currentLanguage][item.id]) || {};
    const displayName = trans.name || item.name;
    const displayDesc = trans.desc || item.desc;

    return `
      <article class="menu-card" data-id="${item.id}">
        <div class="card-media" onclick="openNutritionModal(${item.id})">
          ${item.tag ? `<span class="card-tag">${item.tag}</span>` : ""}
          <button class="card-fav-btn ${isFav ? "active" : ""}" data-fav-id="${item.id}" aria-label="Save to Favorites" title="Favorite">
            ${isFav ? "❤️" : "🤍"}
          </button>
          <img src="${item.image}" alt="${displayName}" class="card-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'">
        </div>

        <div class="card-meta">
          <span class="card-cal">🔥 ${item.calories} kcal</span>
          <span class="card-rating">★ ${item.rating}</span>
        </div>

        <h3 class="card-title" onclick="openNutritionModal(${item.id})">${displayName}</h3>
        <p class="card-desc">${displayDesc}</p>

        <div class="card-footer">
          <span class="card-price">${formatMoney(item.price)}</span>
          <div class="card-btns">
            ${item.category === "burgers" || item.category === "chicken" ? `
              <button class="btn-customize-link" data-cust-id="${item.id}" title="Customize Ingredients">
                ${custText}
              </button>
            ` : ""}
            <button class="btn-add-item" data-add-id="${item.id}">
              ${addText}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

window.resetAllFilters = function() {
  activeCategory = "all";
  activeDiet = "all";
  activeSearchQuery = "";
  document.getElementById("menu-search-input").value = "";
  document.querySelectorAll(".cat-pill").forEach(p => p.classList.toggle("active", p.dataset.category === "all"));
  document.querySelectorAll(".diet-btn").forEach(b => b.classList.toggle("active", b.dataset.diet === "all"));
  renderMenu();
};

// =============================================================================
// 7. CART ENGINE
// =============================================================================
function saveCart() {
  localStorage.setItem("mcd_cart", JSON.stringify(cart));
}

function addToCart(itemId, customNote = null, customPrice = null) {
  const item = MENU_DATA.find(i => i.id === Number(itemId));
  if (!item) return;

  const price = customPrice !== null ? customPrice : item.price;
  const note = customNote || "Standard Recipe";

  // Check if identical item + note already exists in cart
  const existing = cart.find(c => c.id === item.id && c.note === note);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: price,
      image: item.image,
      note: note,
      qty: 1
    });
  }

  saveCart();
  renderCart();
  sfx.chime();
  showToast(`Added <strong>${item.name}</strong> to your bag! 🍔`, true);
}

function addComboToCart(comboTitle, comboPrice, comboNote) {
  cart.push({
    id: 999, // Combo special ID
    name: comboTitle,
    price: comboPrice,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
    note: comboNote,
    qty: 1
  });

  saveCart();
  renderCart();
  sfx.chime();
  showToast(`Added <strong>${comboTitle}</strong> to your order! 🎉`, true);
  openCartDrawer();
}

function updateCartQty(index, delta) {
  if (cart[index]) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
      cart.splice(index, 1);
    }
  }
  saveCart();
  renderCart();
}

function removeCartItem(index) {
  if (cart[index]) {
    cart.splice(index, 1);
  }
  saveCart();
  renderCart();
}

function renderCart() {
  const totalCount = cart.reduce((acc, cur) => acc + cur.qty, 0);
  const subtotal = cart.reduce((acc, cur) => acc + (cur.price * cur.qty), 0);

  // Update badges
  cartCountBadge.textContent = totalCount;
  cartTotalBadge.textContent = formatMoney(subtotal);
  if (mbCartCount) mbCartCount.textContent = totalCount;

  // Empty View
  if (cart.length === 0) {
    const emptyTitle = (I18N[currentLanguage] && I18N[currentLanguage].cart_empty_title) || "Your McDelivery Bag is Empty";
    const emptyDesc = (I18N[currentLanguage] && I18N[currentLanguage].cart_empty_desc) || "Satisfy your cravings! Browse our full menu and add your favorite meals.";
    const emptyBtn = (I18N[currentLanguage] && I18N[currentLanguage].cart_empty_btn) || "Explore Menu";

    cartItemsList.innerHTML = `
      <div class="cart-empty-view">
        <div class="cev-icon">🍟</div>
        <h4 class="cev-title">${emptyTitle}</h4>
        <p class="cev-desc">${emptyDesc}</p>
        <button class="btn btn-primary btn-sm" style="margin-top: 18px;" onclick="closeCartDrawer()">${emptyBtn}</button>
      </div>
    `;
  } else {
    cartItemsList.innerHTML = cart.map((item, index) => `
      <li class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="ci-thumb" onerror="this.src='https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80'">
        <div class="ci-info">
          <div class="ci-name">${item.name}</div>
          <div class="ci-custom-note">${item.note}</div>
          <div class="ci-price">${formatMoney(item.price * item.qty)}</div>
        </div>
        <div class="ci-qty-controls">
          <button class="ci-qty-btn" onclick="updateCartQty(${index}, -1)" aria-label="Decrease quantity">−</button>
          <span class="ci-qty-num">${item.qty}</span>
          <button class="ci-qty-btn" onclick="updateCartQty(${index}, 1)" aria-label="Increase quantity">+</button>
        </div>
        <button class="ci-remove-btn" onclick="removeCartItem(${index})" aria-label="Remove item">✕</button>
      </li>
    `).join("");
  }

  // Free delivery progress
  const deliveryMsgEl = document.getElementById("delivery-msg");
  const progressFillEl = document.getElementById("delivery-progress-fill");
  const diff = FREE_DELIVERY_THRESHOLD - subtotal;

  if (subtotal >= FREE_DELIVERY_THRESHOLD) {
    deliveryMsgEl.innerHTML = (I18N[currentLanguage] && I18N[currentLanguage].cart_free_unlocked) || "🎉 <strong>Unlocked FREE McDelivery!</strong> Delivery is on us.";
    progressFillEl.style.width = "100%";
  } else {
    const template = (I18N[currentLanguage] && I18N[currentLanguage].cart_free_delivery_progress) || "Add <strong>{amount}</strong> more for <strong>FREE Delivery!</strong> 🛵";
    deliveryMsgEl.innerHTML = template.replace("{amount}", formatMoney(diff));
    const pct = Math.min((subtotal / FREE_DELIVERY_THRESHOLD) * 100, 100);
    progressFillEl.style.width = `${pct}%`;
  }

  // Calculations
  const deliveryFee = (subtotal === 0 || subtotal >= FREE_DELIVERY_THRESHOLD) ? 0.00 : STANDARD_DELIVERY_FEE;
  const tax = subtotal * TAX_RATE;
  
  let discountAmount = 0;
  if (appliedDiscount) {
    if (appliedDiscount.type === "percent") {
      discountAmount = subtotal * (appliedDiscount.value / 100);
    } else if (appliedDiscount.type === "fixed") {
      discountAmount = Math.min(appliedDiscount.value, subtotal);
    }
  }

  const grandTotal = Math.max(0, subtotal + tax + deliveryFee + currentTip - discountAmount);

  // Update Bill display
  document.getElementById("bill-subtotal").textContent = formatMoney(subtotal);
  document.getElementById("bill-tax").textContent = formatMoney(tax);
  document.getElementById("bill-delivery").textContent = deliveryFee === 0 ? "FREE" : formatMoney(deliveryFee);
  document.getElementById("bill-tip").textContent = formatMoney(currentTip);
  document.getElementById("bill-grand-total").textContent = formatMoney(grandTotal);

  const discountRow = document.getElementById("bill-discount-row");
  const appliedPill = document.getElementById("applied-discount-pill");
  if (appliedDiscount && discountAmount > 0) {
    discountRow.style.display = "flex";
    document.getElementById("bill-discount").textContent = `-${formatMoney(discountAmount)}`;
    appliedPill.style.display = "flex";
    document.getElementById("applied-code-name").textContent = appliedDiscount.code;
  } else {
    discountRow.style.display = "none";
    appliedPill.style.display = "none";
  }

  // Checkout modal summary
  const coTotalEl = document.getElementById("co-final-total");
  if (coTotalEl) coTotalEl.textContent = formatMoney(grandTotal);
}

// Drawer Open / Close
function openCartDrawer() {
  cartDrawer.classList.add("open");
  overlay.classList.add("show");
}

function closeCartDrawer() {
  cartDrawer.classList.remove("open");
  overlay.classList.remove("show");
}

// Promo Code Logic
function applyPromoCode(code) {
  const cleanCode = code.trim().toUpperCase();
  if (cleanCode === "GOLDEN20") {
    appliedDiscount = { code: "GOLDEN20", type: "percent", value: 20 };
    sfx.success();
    showToast("Coupon <strong>GOLDEN20</strong> applied! 20% OFF 🏷️", true);
  } else if (cleanCode === "FREEFRIES") {
    appliedDiscount = { code: "FREEFRIES", type: "fixed", value: 3.49 };
    sfx.success();
    showToast("Coupon <strong>FREEFRIES</strong> applied! ($3.49 discount) 🍟", true);
  } else if (cleanCode === "SHAREBOX5" || cleanCode === "MCLOVE") {
    appliedDiscount = { code: cleanCode, type: "fixed", value: 5.00 };
    sfx.success();
    showToast(`Coupon <strong>${cleanCode}</strong> applied! $5.00 OFF 🎉`, true);
  } else {
    showToast("Invalid or expired coupon code. Try 'GOLDEN20'!");
    return;
  }

  localStorage.setItem("mcd_promo", JSON.stringify(appliedDiscount));
  renderCart();
}

function removePromoCode() {
  appliedDiscount = null;
  localStorage.removeItem("mcd_promo");
  renderCart();
  showToast("Promo code removed.");
}

// =============================================================================
// 8. FAVORITES & WISHLIST
// =============================================================================
function toggleFavorite(itemId) {
  const id = Number(itemId);
  const index = favorites.indexOf(id);

  if (index > -1) {
    favorites.splice(index, 1);
    showToast("Removed from Favorites.");
  } else {
    favorites.push(id);
    sfx.chime();
    showToast("Added to Favorites! ❤️", true);
  }

  localStorage.setItem("mcd_favorites", JSON.stringify(favorites));
  favCountBadge.textContent = favorites.length;
  if (mbFavCount) mbFavCount.textContent = favorites.length;
  renderMenu();
}

function openFavoritesModal() {
  const listEl = document.getElementById("fav-items-list");
  const favItems = MENU_DATA.filter(i => favorites.includes(i.id));

  if (favItems.length === 0) {
    listEl.innerHTML = `
      <div style="text-align: center; padding: 40px 0;">
        <span style="font-size: 3rem;">🤍</span>
        <h4 style="margin: 10px 0 6px;">No Favorites Saved Yet</h4>
        <p>Click the heart icon on any burger, fries or drink to save them here for 1-click ordering!</p>
      </div>
    `;
  } else {
    listEl.innerHTML = favItems.map(item => `
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 14px; background: var(--bg-main); border: 1px solid var(--border-subtle); padding: 12px; border-radius: var(--radius-md); margin-bottom: 12px;">
        <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; border-radius: var(--radius-sm); object-fit: cover;">
        <div style="flex: 1;">
          <strong style="display: block; font-size: 0.95rem;">${item.name}</strong>
          <span style="color: var(--mcd-gold); font-weight: 700;">${formatMoney(item.price)}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="addToCart(${item.id}); favoritesModal.classList.remove('show'); overlay.classList.remove('show');">
          + Add
        </button>
      </div>
    `).join("");
  }

  favoritesModal.classList.add("show");
  overlay.classList.add("show");
}

// =============================================================================
// 9. BURGER CUSTOMIZER ENGINE
// =============================================================================
function openCustomizer(itemId) {
  const item = MENU_DATA.find(i => i.id === Number(itemId));
  if (!item) return;

  activeCustomizingItem = item;
  document.getElementById("customizer-item-title").textContent = `Customize: ${item.name}`;
  document.getElementById("customizer-item-img").src = item.image;
  document.getElementById("customizer-item-desc").textContent = item.desc;

  // Reset inputs
  document.querySelectorAll('input[name="cust-bun"]')[0].checked = true;
  document.querySelectorAll('input[name="cust-patty"]')[0].checked = true;
  document.querySelectorAll('input[name="cust-addon"]').forEach(cb => cb.checked = false);
  document.querySelectorAll('input[name="cust-sauce"]')[0].checked = true;
  document.getElementById("cust-meal-upgrade").checked = false;

  updateCustomizerPrice();
  customizerModal.classList.add("show");
  overlay.classList.add("show");
}

function updateCustomizerPrice() {
  if (!activeCustomizingItem) return;

  let total = activeCustomizingItem.price;

  // Bun extra
  const bunChecked = document.querySelector('input[name="cust-bun"]:checked');
  if (bunChecked) total += Number(bunChecked.dataset.extra || 0);

  // Patty extra
  const pattyChecked = document.querySelector('input[name="cust-patty"]:checked');
  if (pattyChecked) total += Number(pattyChecked.dataset.extra || 0);

  // Addons
  document.querySelectorAll('input[name="cust-addon"]:checked').forEach(cb => {
    total += Number(cb.dataset.extra || 0);
  });

  // Meal upgrade
  const mealUpgrade = document.getElementById("cust-meal-upgrade");
  if (mealUpgrade && mealUpgrade.checked) {
    total += Number(mealUpgrade.dataset.extra || 3.99);
  }

  document.getElementById("customizer-total-price").textContent = formatMoney(total);
}

function saveCustomization() {
  if (!activeCustomizingItem) return;

  const bun = document.querySelector('input[name="cust-bun"]:checked').value;
  const patty = document.querySelector('input[name="cust-patty"]:checked').value;
  const sauce = document.querySelector('input[name="cust-sauce"]:checked').value;
  const meal = document.getElementById("cust-meal-upgrade").checked;

  const addons = [];
  document.querySelectorAll('input[name="cust-addon"]:checked').forEach(cb => addons.push(cb.value));

  const noteParts = [bun];
  if (patty.includes("Extra")) noteParts.push("Extra Patty");
  if (addons.length > 0) noteParts.push(addons.join(", "));
  noteParts.push(sauce);
  if (meal) noteParts.push("🍟 + Medium Fries & Drink (Meal)");

  const customPrice = parseFloat(document.getElementById("customizer-total-price").textContent.replace("$", ""));

  addToCart(activeCustomizingItem.id, noteParts.join(" • "), customPrice);

  customizerModal.classList.remove("show");
  overlay.classList.remove("show");
  openCartDrawer();
}

// =============================================================================
// 10. GOLDEN COMBO BUILDER
// =============================================================================
function setupComboBuilder() {
  function recalculateCombo() {
    const mainRadio = document.querySelector('input[name="combo-main"]:checked');
    const sideRadio = document.querySelector('input[name="combo-side"]:checked');
    const drinkRadio = document.querySelector('input[name="combo-drink"]:checked');

    if (!mainRadio || !sideRadio || !drinkRadio) return;

    const mainName = mainRadio.value;
    const sideName = sideRadio.value;
    const drinkName = drinkRadio.value;

    const mainPrice = Number(mainRadio.dataset.price);
    const sidePrice = Number(sideRadio.dataset.price);
    const drinkPrice = Number(drinkRadio.dataset.price);

    // Update summary text
    document.getElementById("cs-burger").textContent = `🍔 ${mainName}`;
    document.getElementById("cs-side").textContent = `🍟 ${sideName}`;
    document.getElementById("cs-drink").textContent = `🥤 ${drinkName}`;

    // Calculate bundle: Total sum minus $3.00 bundle discount
    const rawSum = mainPrice + sidePrice + drinkPrice;
    const bundlePrice = Math.max(7.99, rawSum - 3.00);

    document.getElementById("combo-price-display").textContent = formatMoney(bundlePrice);

    // Visual active radio classes
    document.querySelectorAll(".combo-radio").forEach(cr => {
      const input = cr.querySelector("input");
      cr.classList.toggle("active", input && input.checked);
    });
  }

  document.querySelectorAll('input[name="combo-main"], input[name="combo-side"], input[name="combo-drink"]').forEach(input => {
    input.addEventListener("change", recalculateCombo);
  });

  document.getElementById("add-combo-to-cart").addEventListener("click", () => {
    const mainName = document.querySelector('input[name="combo-main"]:checked').value;
    const sideName = document.querySelector('input[name="combo-side"]:checked').value;
    const drinkName = document.querySelector('input[name="combo-drink"]:checked').value;
    const price = parseFloat(document.getElementById("combo-price-display").textContent.replace("$", ""));

    addComboToCart("Golden Value Combo", price, `${mainName} + ${sideName} + ${drinkName}`);
  });

  recalculateCombo();
}

// =============================================================================
// 11. NUTRITION & ALLERGEN DETAIL MODAL
// =============================================================================
window.openNutritionModal = function(itemId) {
  const item = MENU_DATA.find(i => i.id === Number(itemId));
  if (!item) return;

  document.getElementById("nutri-item-title").textContent = item.name;
  document.getElementById("nutri-cal").textContent = item.calories;
  document.getElementById("nutri-fat").textContent = item.fat;
  document.getElementById("nutri-carbs").textContent = item.carbs;
  document.getElementById("nutri-protein").textContent = item.protein;
  document.getElementById("nutri-ingredients").textContent = item.ingredients;

  const allergensList = document.getElementById("nutri-allergens");
  if (item.allergens.length === 0) {
    allergensList.innerHTML = `<span class="allergen-tag" style="background: rgba(46, 204, 113, 0.15); color: #2ECC71;">No Major Allergens</span>`;
  } else {
    allergensList.innerHTML = item.allergens.map(a => `<span class="allergen-tag">${a}</span>`).join("");
  }

  nutritionModal.classList.add("show");
  overlay.classList.add("show");
};

// =============================================================================
// 12. CHECKOUT & LIVE ORDER TRACKER SIMULATION
// =============================================================================
let liveTrackingInterval = null;

function startOrderSimulation(orderId) {
  const etaEl = document.getElementById("eta-countdown");
  const steps = [
    { id: "step-order", eta: "18 Minutes" },
    { id: "step-grill", eta: "15 Minutes" },
    { id: "step-pack", eta: "11 Minutes" },
    { id: "step-transit", eta: "6 Minutes" },
    { id: "step-arrived", eta: "Arrived! 🎉" }
  ];

  let currentStep = 1;

  if (liveTrackingInterval) clearInterval(liveTrackingInterval);

  liveTrackingInterval = setInterval(() => {
    if (currentStep < steps.length) {
      // Mark previous as completed
      document.getElementById(steps[currentStep - 1].id).classList.remove("active");
      document.getElementById(steps[currentStep - 1].id).classList.add("completed");

      // Mark current as active
      document.getElementById(steps[currentStep].id).classList.add("active");
      etaEl.textContent = steps[currentStep].eta;

      if (currentStep === 4) {
        sfx.success();
        showToast("Your McDelivery has arrived! Enjoy your meal 🍔", true);
        clearInterval(liveTrackingInterval);
      }
      currentStep++;
    }
  }, 4500); // Progresses every 4.5 seconds for visual demonstration
}

function placeOrder(e) {
  e.preventDefault();
  if (cart.length === 0) {
    showToast("Your cart is empty!");
    return;
  }

  const orderId = "#MCD-" + Math.floor(100000 + Math.random() * 900000);
  document.getElementById("tracker-order-id").textContent = orderId;

  // Clear cart
  cart = [];
  saveCart();
  renderCart();

  // Reset steps
  ["step-order", "step-grill", "step-pack", "step-transit", "step-arrived"].forEach(id => {
    const el = document.getElementById(id);
    el.classList.remove("completed", "active");
  });
  document.getElementById("step-order").classList.add("completed");
  document.getElementById("step-grill").classList.add("active");
  document.getElementById("eta-countdown").textContent = "18 Minutes";

  checkoutModal.classList.remove("show");
  trackerModal.classList.add("show");
  overlay.classList.add("show");

  sfx.success();
  showToast(`Order Placed! Reference: ${orderId} 🎉`, true);
  startOrderSimulation(orderId);
}

// =============================================================================
// 13. STORE LOCATOR SIMULATION
// =============================================================================
function setupStoreLocator() {
  const storeItems = document.querySelectorAll(".store-item");
  const markers = document.querySelectorAll(".map-marker");
  const storeNameDisplay = document.getElementById("active-store-name");

  storeItems.forEach(item => {
    item.addEventListener("click", () => {
      storeItems.forEach(si => {
        si.classList.remove("active");
        si.querySelector(".si-select-btn").textContent = "Set as My Store";
      });

      item.classList.add("active");
      item.querySelector(".si-select-btn").textContent = "Selected Store ✓";

      const storeId = item.dataset.storeId;
      currentStoreId = storeId;
      const storeName = item.querySelector(".si-name").textContent;
      if (storeNameDisplay) storeNameDisplay.textContent = storeName;

      markers.forEach(m => m.classList.remove("active"));
      const matchMarker = document.querySelector(`.map-marker.m${storeId}`);
      if (matchMarker) matchMarker.classList.add("active");

      showToast(`Selected Store: ${storeName}`);
    });
  });

  const searchBtn = document.getElementById("store-search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      const query = document.getElementById("store-search-input").value;
      showToast(`Found 3 restaurants near "${query}"!`);
    });
  }
}

// =============================================================================
// 14. REVIEWS & SUBMISSION SYSTEM
// =============================================================================
function setupReviews() {
  const starSelect = document.getElementById("star-rating-select");
  let chosenStars = 5;

  if (starSelect) {
    starSelect.querySelectorAll(".star-pick").forEach(star => {
      star.addEventListener("click", () => {
        chosenStars = Number(star.dataset.val);
        starSelect.querySelectorAll(".star-pick").forEach(s => {
          s.classList.toggle("active", Number(s.dataset.val) <= chosenStars);
        });
      });
    });
  }

  const reviewForm = document.getElementById("new-review-form");
  if (reviewForm) {
    reviewForm.addEventListener("submit", e => {
      e.preventDefault();
      const author = document.getElementById("rev-author").value;
      const text = document.getElementById("rev-text").value;

      const initials = author.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) || "MC";
      const starsStr = "★".repeat(chosenStars) + "☆".repeat(5 - chosenStars);

      const newCard = document.createElement("div");
      newCard.className = "review-card";
      newCard.innerHTML = `
        <div class="review-header">
          <div class="reviewer-avatar av-yellow">${initials}</div>
          <div class="reviewer-meta">
            <strong>${author}</strong>
            <span class="verified-tag">✓ Verified McDelivery</span>
          </div>
          <div class="review-stars">${starsStr}</div>
        </div>
        <p class="review-text">"${text}"</p>
        <div class="review-footer">
          <span class="review-date">Just now • Web Order</span>
          <span class="review-helpful">👍 Helpful (1)</span>
        </div>
      `;

      const grid = document.getElementById("reviews-grid");
      if (grid) grid.prepend(newCard);

      reviewModal.classList.remove("show");
      overlay.classList.remove("show");
      reviewForm.reset();
      sfx.success();
      showToast("Thank you for your feedback! ⭐", true);
    });
  }
}

// =============================================================================
// 15. LIVE SEARCH OVERLAY & KEYBOARD SHORTCUTS
// =============================================================================
function setupSearchOverlay() {
  const searchInput = document.getElementById("overlay-search-input");
  const resultsList = document.getElementById("search-results-list");

  function performSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      resultsList.innerHTML = `<p style="text-align: center; color: var(--text-dim); padding: 20px;">Type something to search the McDonald's menu...</p>`;
      return;
    }

    const matches = MENU_DATA.filter(i => 
      i.name.toLowerCase().includes(q) || 
      i.desc.toLowerCase().includes(q) || 
      i.ingredients.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      resultsList.innerHTML = `<p style="text-align: center; color: var(--text-dim); padding: 20px;">No items match "${query}".</p>`;
      return;
    }

    resultsList.innerHTML = matches.map(item => `
      <div class="search-res-item" onclick="openNutritionModal(${item.id}); searchOverlayModal.classList.remove('show'); overlay.classList.remove('show');">
        <img src="${item.image}" alt="${item.name}" class="search-res-thumb">
        <div class="search-res-info">
          <strong>${item.name}</strong>
          <small style="color: var(--text-dim);">${item.calories} kcal</small>
        </div>
        <span>${formatMoney(item.price)}</span>
      </div>
    `).join("");
  }

  if (searchInput) {
    searchInput.addEventListener("input", e => performSearch(e.target.value));
  }

  // Ctrl + K shortcut
  window.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      searchOverlayModal.classList.add("show");
      overlay.classList.add("show");
      setTimeout(() => searchInput && searchInput.focus(), 100);
    }
    if (e.key === "Escape") {
      document.querySelectorAll(".modal.show").forEach(m => m.classList.remove("show"));
      cartDrawer.classList.remove("open");
      overlay.classList.remove("show");
    }
  });
}

// =============================================================================
// 16. THEME SWITCHER & SOUND TOGGLE
// =============================================================================
function setupThemeAndSound() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  function applyTheme(t) {
    if (t === "light") {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      if (themeIcon) themeIcon.textContent = "☀️";
    } else {
      document.body.classList.remove("light-theme");
      document.body.classList.add("dark-theme");
      if (themeIcon) themeIcon.textContent = "🌙";
    }
    localStorage.setItem("mcd_theme", t);
  }

  applyTheme(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      applyTheme(currentTheme);
      showToast(`Switched to ${currentTheme} theme`);
    });
  }

  // Sound FX toggle
  const soundToggle = document.getElementById("sound-toggle");
  const soundIcon = document.getElementById("sound-icon");

  if (soundToggle) {
    soundToggle.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      localStorage.setItem("mcd_sound", soundEnabled);
      if (soundIcon) soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
      showToast(soundEnabled ? "Sound Effects ON" : "Sound Effects Muted");
      if (soundEnabled) sfx.chime();
    });
  }
}

// =============================================================================
// 16.1 LANGUAGE SELECTOR & INTERNATIONALIZATION LOGIC
// =============================================================================
function setLanguage(lang, silent = false) {
  if (!I18N[lang]) lang = "en";
  currentLanguage = lang;
  localStorage.setItem("mcd_lang", lang);

  const flagEl = document.getElementById("current-lang-flag");
  const codeEl = document.getElementById("current-lang-code");
  if (flagEl) flagEl.textContent = I18N[lang].flag;
  if (codeEl) codeEl.textContent = I18N[lang].code;

  document.querySelectorAll(".lang-option").forEach(opt => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang] && I18N[lang][key]) {
      el.innerHTML = I18N[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (I18N[lang] && I18N[lang][key]) {
      el.placeholder = I18N[lang][key];
    }
  });

  renderMenu();
  renderCart();

  if (!silent) {
    sfx.chime();
    showToast(I18N[lang].toast_lang, true);
  }
}

function setupLanguageSelector() {
  const langBtn = document.getElementById("lang-btn");
  const langDropdown = document.getElementById("lang-dropdown");
  const langOptions = document.querySelectorAll(".lang-option");

  if (langBtn && langDropdown) {
    langBtn.addEventListener("click", e => {
      e.stopPropagation();
      const isOpen = langDropdown.classList.contains("open");
      langDropdown.classList.toggle("open", !isOpen);
      langBtn.setAttribute("aria-expanded", !isOpen);
    });

    langOptions.forEach(opt => {
      opt.addEventListener("click", () => {
        const lang = opt.dataset.lang;
        setLanguage(lang);
        langDropdown.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", e => {
      if (!langDropdown.contains(e.target)) {
        langDropdown.classList.remove("open");
        langBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
}

// =============================================================================
// 17. INITIALIZATION & EVENT LISTENERS
// =============================================================================
document.addEventListener("DOMContentLoaded", () => {
  // 1. Initial Render & Language Setup
  setupLanguageSelector();
  setLanguage(currentLanguage, true);
  favCountBadge.textContent = favorites.length;
  if (mbFavCount) mbFavCount.textContent = favorites.length;

  // 2. Setup Modules
  setupComboBuilder();
  setupStoreLocator();
  setupReviews();
  setupSearchOverlay();
  setupThemeAndSound();

  // 3. Category Buttons
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.addEventListener("click", () => {
      document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeCategory = pill.dataset.category;
      renderMenu();
    });
  });

  // 4. Dietary Buttons
  document.querySelectorAll(".diet-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".diet-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeDiet = btn.dataset.diet;
      renderMenu();
    });
  });

  // 5. Search Bar in Menu
  const menuSearch = document.getElementById("menu-search-input");
  const clearSearch = document.getElementById("clear-search");
  if (menuSearch) {
    menuSearch.addEventListener("input", e => {
      activeSearchQuery = e.target.value;
      if (clearSearch) clearSearch.style.display = activeSearchQuery ? "block" : "none";
      renderMenu();
    });
  }
  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      menuSearch.value = "";
      activeSearchQuery = "";
      clearSearch.style.display = "none";
      renderMenu();
    });
  }

  // 6. Sort Select
  const sortSelect = document.getElementById("menu-sort");
  if (sortSelect) {
    sortSelect.addEventListener("change", e => {
      activeSort = e.target.value;
      renderMenu();
    });
  }

  // 7. Grid Delegated Clicks (+ Add, Customize, Favorite)
  menuGrid.addEventListener("click", e => {
    const addBtn = e.target.closest("[data-add-id]");
    if (addBtn) {
      addToCart(Number(addBtn.dataset.addId));
      return;
    }

    const custBtn = e.target.closest("[data-cust-id]");
    if (custBtn) {
      openCustomizer(Number(custBtn.dataset.custId));
      return;
    }

    const favBtn = e.target.closest("[data-fav-id]");
    if (favBtn) {
      toggleFavorite(Number(favBtn.dataset.favId));
      return;
    }
  });

  // Quick add on hero
  document.querySelectorAll(".quick-add-btn").forEach(btn => {
    btn.addEventListener("click", () => addToCart(Number(btn.dataset.add)));
  });

  // 8. Customizer options changes
  customizerModal.addEventListener("change", updateCustomizerPrice);
  document.getElementById("save-customization-btn").addEventListener("click", saveCustomization);
  document.getElementById("close-customizer-btn").addEventListener("click", () => {
    customizerModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // 9. Nutrition Modal close
  document.getElementById("close-nutrition-btn").addEventListener("click", () => {
    nutritionModal.classList.remove("show");
    overlay.classList.remove("show");
  });
  document.getElementById("close-nutrition-btn-2").addEventListener("click", () => {
    nutritionModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // 10. Drawer Toggles
  document.getElementById("cart-btn").addEventListener("click", openCartDrawer);
  document.getElementById("mobile-cart-btn").addEventListener("click", openCartDrawer);
  document.getElementById("close-cart-btn").addEventListener("click", closeCartDrawer);
  overlay.addEventListener("click", () => {
    document.querySelectorAll(".modal.show").forEach(m => m.classList.remove("show"));
    closeCartDrawer();
  });

  // 11. Promo code form inside cart
  document.getElementById("cart-promo-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("promo-input");
    applyPromoCode(input.value);
    input.value = "";
  });
  document.getElementById("remove-promo-btn").addEventListener("click", removePromoCode);

  // 12. Deals section coupon buttons
  document.querySelectorAll(".coupon-copy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyPromoCode(btn.dataset.coupon);
      openCartDrawer();
    });
  });
  document.querySelectorAll(".copy-code-inline").forEach(span => {
    span.addEventListener("click", () => {
      applyPromoCode(span.dataset.copy);
      openCartDrawer();
    });
  });

  // 13. Tip buttons
  document.querySelectorAll(".tip-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tip-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentTip = Number(btn.dataset.tip);
      renderCart();
    });
  });

  // 14. Checkout Flow
  document.getElementById("checkout-trigger-btn").addEventListener("click", () => {
    if (cart.length === 0) {
      showToast("Add items to your bag before checkout!");
      return;
    }
    closeCartDrawer();
    checkoutModal.classList.add("show");
    overlay.classList.add("show");
  });
  document.getElementById("close-checkout-btn").addEventListener("click", () => {
    checkoutModal.classList.remove("show");
    overlay.classList.remove("show");
  });
  document.getElementById("checkout-form").addEventListener("submit", placeOrder);

  // 15. Live Tracker Close & Restart
  document.getElementById("close-tracker-btn").addEventListener("click", () => {
    trackerModal.classList.remove("show");
    overlay.classList.remove("show");
  });
  document.getElementById("new-order-btn").addEventListener("click", () => {
    trackerModal.classList.remove("show");
    overlay.classList.remove("show");
  });
  document.getElementById("call-driver-btn").addEventListener("click", () => {
    showToast("Connecting to Driver Mike via secure proxy... 📞");
  });

  // 16. Favorites Modal
  document.getElementById("fav-trigger").addEventListener("click", openFavoritesModal);
  document.getElementById("mobile-fav-btn").addEventListener("click", openFavoritesModal);
  document.getElementById("close-fav-btn").addEventListener("click", () => {
    favoritesModal.classList.remove("show");
    overlay.classList.remove("show");
  });
  document.getElementById("close-fav-btn-2").addEventListener("click", () => {
    favoritesModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // 17. Search Modal Trigger
  document.getElementById("search-trigger").addEventListener("click", () => {
    searchOverlayModal.classList.add("show");
    overlay.classList.add("show");
    const input = document.getElementById("overlay-search-input");
    setTimeout(() => input && input.focus(), 100);
  });
  document.getElementById("close-search-overlay-btn").addEventListener("click", () => {
    searchOverlayModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // 18. Reviews Modal Trigger
  document.getElementById("open-review-modal-btn").addEventListener("click", () => {
    reviewModal.classList.add("show");
    overlay.classList.add("show");
  });
  document.getElementById("close-review-modal-btn").addEventListener("click", () => {
    reviewModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // 19. FAQ Accordions
  document.querySelectorAll(".faq-item").forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item").forEach(fi => fi.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });

  // 20. Top Banner close
  const bannerClose = document.getElementById("banner-close");
  if (bannerClose) {
    bannerClose.addEventListener("click", () => {
      document.getElementById("top-banner").style.display = "none";
    });
  }

  // 21. Service Mode buttons (Delivery / Pickup / Drive-thru)
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      showToast(`Switched order mode to ${btn.dataset.mode.toUpperCase()}`);
    });
  });

  // 22. Newsletter form
  document.getElementById("newsletter-form").addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("nl-email").value;
    sfx.success();
    showToast(`Subscribed ${email} to VIP Golden Drops! 🍟`, true);
    e.target.reset();
  });

  // 23. Header Scrolled state
  window.addEventListener("scroll", () => {
    document.getElementById("header").classList.toggle("scrolled", window.scrollY > 40);
  });

  // 24. Mobile Navigation Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  // 25. Footer Category Quick Links
  document.querySelectorAll("[data-category-link]").forEach(link => {
    link.addEventListener("click", e => {
      const cat = link.dataset.categoryLink;
      const targetPill = document.querySelector(`.cat-pill[data-category="${cat}"]`);
      if (targetPill) {
        document.querySelectorAll(".cat-pill").forEach(p => p.classList.remove("active"));
        targetPill.classList.add("active");
        activeCategory = cat;
        renderMenu();
      }
    });
  });

  // 26. Live Countdown Timers for Deals
  setInterval(() => {
    document.querySelectorAll(".deal-timer").forEach(timer => {
      let remaining = Number(timer.dataset.expires);
      if (remaining > 0) {
        remaining -= 1;
        timer.dataset.expires = remaining;
        const hrs = String(Math.floor(remaining / 3600)).padStart(2, "0");
        const mins = String(Math.floor((remaining % 3600) / 60)).padStart(2, "0");
        const secs = String(remaining % 60).padStart(2, "0");
        const display = timer.querySelector(".timer-display");
        if (display) display.textContent = `${hrs}:${mins}:${secs}`;
      }
    });
  }, 1000);
});
