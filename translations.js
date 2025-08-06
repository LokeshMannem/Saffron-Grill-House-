const menuItems = [
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Samosa (2 pcs) - $ 3.99",
      "hi": "Samosa (2 pcs)"
    },
    "description": {
      "en": "Crisp, golden pastries stuffed with spiced potatoes and peas."
    },
    "price": "",
    "image": "samosa_2_pcs.jpg",
    "inStock": true,
    "bestSeller": true,
    "popular": true,
  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": " Chicken Samosa (3 pcs) - $ 4.99",
      "hi": " Chicken Samosa (3 pcs)"
    },
    "description": {
      "en": "Crisp, golden pastries stuffed with spiced chicken ."
    },
    "price": "",
    "image": "chicken_samosa.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Samosa Chaat - $ 6.99",
      "hi": "Samosa Chaat - $ 6.99"
    },
    "description": {
      "en": "Crushed samosa topped with chickpeas, yogurt, chutneys & sev."
    },
    "price": "",
    "image": "samosa_chat.jpeg",
    "inStock": true,
    "popular": true

  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Paneer Pakora - $ 8.99",
      "hi": "Paneer Pakora - $ 8.99"
    },
    "description": {
      "en": "Soft paneer cubes deep-fried in seasoned gram flour batter."
    },
    "price": "",
    "image": "paneer_pakora.jpg",
        "inStock": true

  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Chilli Paneer - $ 12.99",
      "hi": "Chilli Paneer - $ 12.99"
    },
    "description": {
      "en": "Spicy Indo-Chinese stir-fry with paneer and bell peppers."
    },
    "price": "",
    "image": "chilli_paneer.jpg",
        "inStock": true

  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Chicken 65 - $ 13.99",
      "hi": "Chicken 65 - $ 13.99"
    },
    "description": {
      "en": "South Indian fried chicken with chili, curry leaves, and bold"
    },
    "price": "",
    "image": "IMG_0334.png",
    "inStock": true,
    "bestSeller": true
  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Chilli Chicken - $ 13.99",
      "hi": "Chilli Chicken - $ 13.99"
    },
    "description": {
      "en": "Crispy chicken tossed in tangy garlic-soy sauce with peppers.",
      "hi": "खस्ता चिकन को लहसुन-सोया सॉस और मिर्च के साथ भुना गया।"
    },
    "price": "",
    "image": "chilli_chicken.jpg",
        "inStock": true

  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Fried Crispy Shrimp - $ 13.99",
      "hi": "Fried Crispy Shrimp - $ 13.99"
    },
    "description": {
      "en": "Golden-fried shrimp with zesty seasoning and creamy dip."
    },
    "price": "",
    "image": "shrimp.jpg",
    "inStock": true,
    "bestSeller": true
  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Fish Pakora - $ 10.99",
      "hi": "Fish Pakora - $ 10.99"
    },
    "description": {
      "en": "Hyderabad-style medium battered fish, deep-fried and sautéed in aromatic seasonings."
    },
    "price": "",
    "image": "fish_pakora.jpg",
        "inStock": true

  },
  {
    "category": "APPETIZERS",
    "name": {
      "en": "Veg Pakora - $ 6.99",
      "hi": "Onion Pakora - $ 6.99"
    },
    "description": {
      "en": "Thinly sliced onions, deep-fried in a spiced gram flour batter,served hot and crispy."
    },
    "price": "",
    "image": "onion_pakora.jpg",
    "inStock": true,
    "bestSeller": true
  },
  {
    "category": "TANDOORI SPECIALS",
    "name": {
      "en": "Paneer Tikka - $ 14.99",
      "hi": "Paneer Tikka - $ 14.99"
    },
    "description": {
      "en": "Succulent paneer cubes marinated in spiced yogurt and grilled to perfection."
    },
    "price": "",
    "image": "paneer_tikka.jpg",
    "inStock": true
  },
  {
    "category": "TANDOORI SPECIALS",
    "name": {
      "en": "Chicken Tandoori(6PC) - $ 17.99 ",
      "hi": "Chicken Tandoori  - Half - $ 12.99"
    },
    "description": {
      "en": "Classic tandoori chicken, charred to perfection and bursting with bold flavors."
    },
    "price": "",
    "image": "IMG_0335.png",
    "inStock": true,
    "popular": true,
    "bestSeller": true,
  },
  {
    "category": "TANDOORI SPECIALS",
    "name": {
      "en": "Chicken Malai Tikka - $ 13.99",
      "hi": "Chicken Malai Tikka - $ 13.99"
    },
    "description": {
      "en": "Creamy, melt-in-your-mouth chicken bites marinated in a mild,nutty blend of cream, yogurt, and spices."
    },
    "price": "",
    "image": "chicken_malai_tikka.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "TANDOORI SPECIALS",
    "name": {
      "en": "Chicken Seekh Kebab - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebab.png",
    "inStock": true
  },
   {
    "category": "TANDOORI SPECIALS",
    "name": {
      "en": "Chapli Kebab - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chapli.png",
    "inStock": true
  },
  {
    "category": "SOUPS",
    "name": {
      "en": "Tomato Soup - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebab.png",
    "inStock": true
  },
   {
    "category": "SOUPS",
    "name": {
      "en": "Lentil Soup - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebab.png",
    "inStock": true
  },
  {
    "category": "SOUPS",
    "name": {
      "en": "Sweet Corn Soup - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebab.png",
    "inStock": true
  },
 {
    "category": "SOUPS",
    "name": {
      "en": "Hot & Sour Soup - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebab.png",
    "inStock": true
  },
 {
    "category": "SOUPS",
    "name": {
      "en": "Chicken Corn  Soup - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebab.png",
    "inStock": true
  },
  {
    "category": "BREADS",
    "name": {
      "en": "Plain Naan - $1.99",
      "hi": "Plain Naan - $1.99"
    },
    "description": {
      "en": "Traditional tandoor-baked flatbread."
    },
    "price": "",
    "image": "plain_naan.jpg",
    "inStock": true
  },
  {
    "category": "BREADS",
    "name": {
      "en": "Butter Naan - $2.99",
      "hi": "Butter Naan - $2.99"
    },
    "description": {
      "en": "Classic soft naan brushed with butter."
    },
    "price": "",
    "image": "IMG_2731.jpeg",
    "inStock": true
  },
  {
    "category": "BREADS",
    "name": {
      "en": "Garlic Naan - $ 3.99",
      "hi": "Garlic Naan - $ 3.99"
    },
    "description": {
      "en": "Fluffy naan infused with garlic and herbs."
    },
    "price": "",
    "image": "garlic_naan.jpg",
    "inStock": true,
    "popular": true,
    "bestSeller": true,
  },
  {
    "category": "BREADS",
    "name": {
      "en": "Cheese Naan - $ 3.99",
      "hi": "Cheese Naan - $ 3.99"
    },
    "description": {
      "en": "Stuffed with gooey melted cheese for a savory delight."
    },
    "price": "",
    "image": "IMG_2726.jpeg",
    "inStock": true,
    "popular": true,

  },
  {
    "category": "BREADS",
    "name": {
      "en": "Roti - $ 2.99",
      "hi": "Roti - $ 2.99"
    },
    "description": {
      "en": "Soft and wholesome Indian flatbread made from whole wheat flour, freshly cooked on a hot iron griddle (tawa) without oil or butter."
    },
    "price": "",
    "image": "IMG_0324.jpeg",
    "inStock": true

  },
  {
    "category": "PARATHAS",
    "name": {
      "en": "Plain Paratha - $4.99",
      "hi": "Plain Paratha - $4.99"
    },
    "description": {
      "en": "Flaky, layered whole wheat flatbread, pan-fried with ghee or oil."
    },
    "price": "",
    "image": "plain_paratha.jpg",
    "inStock": true
  },
  {
    "category": "PARATHAS",
    "name": {
      "en": "Cheese Paratha - $ 5.99",
      "hi": "Cheese Paratha - $ 5.99"
    },
    "description": {
      "en": "Crispy flatbread stuffed with melted, seasoned cheese."
    },
    "price": "",
    "image": "cheese_paratha.jpg",
    "inStock": true
  },
  {
    "category": "PARATHAS",
    "name": {
      "en": "Aloo Paratha - $ 5.99",
      "hi": "Aloo Paratha - $ 5.99"
    },
    "description": {
      "en": "Filled with mashed spiced potatoes – a classic favorite."
    },
    "price": "",
    "image": "aloo_paratha.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "PARATHAS",
    "name": {
      "en": "Paneer Paratha - $ 5.99",
      "hi": "Paneer Paratha - $ 5.99"
    },
    "description": {
      "en": "Stuffed with seasoned paneer – soft, cheesy delight."
    },
    "price": "",
    "image": "paneer_paratha.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "PARATHAS",
    "name": {
      "en": "Gobi Paratha - $5.99",
      "hi": "Gobi Paratha - $5.99"
    },
    "description": {
      "en": "Whole wheat flatbread stuffed with spiced grated cauliflower,pan-fried till golden."
    },
    "price": "",
    "image": "gobi_paratha.jpg",
    "inStock": true
  },
  {
    "category": "Indo-Chinese",
    "name": {
      "en": "Gobi Manchuria - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebb.png",
    "inStock": true
  },
 {
    "category": "Indo-Chinese",
    "name": {
      "en": "Chicken Manchuria - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebb.png",
    "inStock": true
  },
  {
    "category": "Indo-Chinese",
    "name": {
      "en": "Veg Fried Rice - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebb.png",
    "inStock": true
  },
  {
    "category": "Indo-Chinese",
    "name": {
      "en": "Chicken Fried Rice - $ 15.99",
      "hi": "Chicken Seekh Kebab - $ 15.99"
    },
    "description": {
      "en": "Minced chicken blended with aromatic spices, skewered, and char-grilled."
    },
    "price": "",
    "image": "Chicken_seek_kebb.png",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Dal Makhani - $ 13.99",
      "hi": "Dal Makhani - $ 13.99"
    },
    "description": {
      "en": "Creamy black lentils slow-cooked with butter and spices."
    },
    "price": "",
    "image": "dal_makhani.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Dal Tadka - $ 13.99",
      "hi": "Dal Tadka - $ 13.99"
    },
    "description": {
      "en": "Yellow lentils with ghee-tempered spices and garlic."
    },
    "price": "",
    "image": "dal_tadka.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Channa Masala - $ 13.99",
      "hi": "Channa Masala - $ 13.99"
    },
    "description": {
      "en": "Chickpeas simmered in a tangy tomato-based gravy with Indian spices."
    },
    "price": "",
    "image": "channa_masala.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Paneer Butter Masala - $ 13.99",
      "hi": "Paneer Butter Masala- $ 13.99"
    },
    "description": {
      "en": "Paneer cubes in a rich and creamy tomato-butter sauce."
    },
    "price": "",
    "image": "paneer_butter_masala.jpg",
    "inStock": true,
    "popular": true,

  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Palak Paneer - $ 14.99",
      "hi": "Palak Paneer - $ 14.99"
    },
    "description": {
      "en": "Cottage cheese cooked in a smooth, spiced spinach gravy."
    },
    "price": "",
    "image": "palak_paneer.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Shahi Paneer - $15.99",
      "hi": "Shahi Paneer - $15.99"
    },
    "description": {
      "en": "Paneer in a rich, creamy, mildly sweet royal gravy."
    },
    "price": "",
    "image": "shahi_paneer.jpg",
    "inStock": true,
    "popular": true,

  },
  {
    "category": "MAIN COURSE - VEG",
    "name": {
      "en": "Paneer Tikka Masala - $ 14.99",
      "hi": "Paneer Tikka Masala - $ 14.99"
    },
    "description": {
      "en": "Grilled paneer in a creamy, spiced tomato-onion curry."
    },
    "price": "",
    "image": "paneer_tikka_masala.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - NON VEG",
    "name": {
      "en": "Egg Masala - $ 13.99",
      "hi": "Egg Masala - $ 13.99"
    },
    "description": {
      "en": "Egg Masala is a spicy, flavorful curry made with boiled eggs in a rich onion-tomato gravy."
    },
    "price": "",
    "image": "egg_masala.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - NON VEG",
    "name": {
      "en": "Butter Chicken - $ 16.99",
      "hi": "Butter Chicken - $ 16.99"
    },
    "description": {
      "en": "The world-famous creamy, buttery chicken in a luscious tomato-based curry."
    },
    "price": "",
    "image": "butter_chicken.jpg",
    "inStock": true,
    "bestSeller": true,
    "popular": true

  },
  {
    "category": "MAIN COURSE - NON VEG",
    "name": {
      "en": "Chicken Tikka Masala - $ 16.99",
      "hi": "Chicken Tikka Masala - $ 16.99"
    },
    "description": {
      "en": "Tandoori chicken simmered in a bold and flavorful masala sauce."
    },
    "price": "",
    "image": "chicken_tikka_masala.jpg",
    "inStock": true,
    "bestSeller": true,
    "popular": true,

  },
  {
    "category": "MAIN COURSE - NON VEG",
    "name": {
      "en": "Chicken Curry - $ 15.99",
      "hi": "Chicken Curry - $ 15.99"
    },
    "description": {
      "en": "Homestyle chicken cooked in a fragrant onion-tomato gravy."
    },
    "price": "",
    "image": "chicken_curry.jpg",
    "inStock": true
  },
  {
    "category": "MAIN COURSE - NON VEG",
    "name": {
      "en": "Goat Curry - $ 20.99",
      "hi": "Goat Curry - $ 20.99"
    },
    "description": {
      "en": "Tender goat meat slow-cooked in a traditional spiced curry."
    },
    "price": "",
    "image": "goat_curry.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "MAIN COURSE - NON VEG",
    "name": {
      "en": "Lamb Curry - $19.99",
      "hi": "Lamb Curry - $19.99"
    },
    "description": {
      "en": "Tender lamb simmered in a rich, spiced onion-tomato gravy."
    },
    "price": "",
    "image": "lamb_curry.png",
    "inStock": true
  },
  {
    "category": "BIRIYANI",
    "name": {
      "en": "Chicken Biriyani - $ 17.99",
      "hi": "Chicken Biriyani - $ 17.99"
    },
    "description": {
      "en": "Classic dum-style biryani, cooked with chicken and fragrant spices."
    },
    "price": "",
    "image": "chicken_biriyani.jpg",
    "inStock": true,
    "bestSeller": true,
    "popular": true
  },
  {
    "category": "BIRIYANI",
    "name": {
      "en": "Goat Biriyani - $ 18.99",
      "hi": "Goat Biriyani - $ 18.99"
    },
    "description": {
      "en": "Traditional biryani featuring tender goat meat,slow-cooked to perfection."
    },
    "price": "",
    "image": "goat_biriyani.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "BIRIYANI",
    "name": {
      "en": "Veg Biriyani - $ 14.99",
      "hi": "Veg Biriyani - $ 14.99"
    },
    "description": {
      "en": "Fragrant rice infused with saffron and mixed vegetables."
    },
    "price": "",
    "image": "veg_biriyani.jpg",
    "inStock": true
  },
  {
    "category": "BIRIYANI",
    "name": {
      "en": "Paneer Biriyani- $16.99",
      "hi": "Paneer Biriyani- $16.99"
    },
    "description": {
      "en": "Fragrant basmati rice layered with spiced paneer and aromatic herbs."
    },
    "price": "",
    "image": "paneer_biriyani.jpg",
    "inStock": true
  },
  {
    "category": "BIRIYANI",
    "name": {
      "en": "Shrimp Biriyani-$ 17.99",
      "hi": "Shrimp Biriyani-$ 17.99"
    },
    "description": {
      "en": "Fragrant basmati rice cooked with succulent shrimp, aromatic spices, and herbs."
    },
    "price": "",
    "image": "shrimp_biriyani.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "BURGER AND FRIES",
    "name": {
      "en": "Zinger Burger - $ 9.99 + (meal $ 3.99)",
      "hi": "Zinger Burger - $ 9.99 + (meal $ 3.99)"
    },
    "description": {
      "en": "Crispy, spicy fried chicken sandwich with lettuce, mayo, and cheese.",
      "hi": "करारा, मसालेदार चिकन बर्गर, लेट्यूस, मेयो और चीज़ के साथ।"
    },
    "price": "",
    "image": "zinger_burger.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "BURGER AND FRIES",
    "name": {
      "en": "Fried Chicken - $ 8.99",
      "hi": "Fried Chicken - $ 8.99"
    },
    "description": {
      "en": "Crunchy, golden-fried chicken pieces."
    },
    "price": "",
    "image": "fried_chicken.jpg",
    "inStock": true
  },
  {
    "category": "BURGER AND FRIES",
    "name": {
      "en": "Mozzarella Sticks - $ 7.99",
      "hi": "Mozzarella Sticks - $ 7.99"
    },
    "description": {
      "en": "Crispy, gooey cheese sticks"
    },
    "price": "",
    "image": "mozzarella_sticks.jpg",
    "inStock": true
  },
  {
    "category": "BURGER AND FRIES",
    "name": {
      "en": "Cheese Curds - $ 10.99",
      "hi": "Cheese Curds - $ 10.99"
    },
    "description": {
      "en": "Bite-sized Wisconsin cheese, battered and fried to golden perfection."
    },
    "price": "",
    "image": "cheese_curds.jpg",
    "inStock": true
  },
  {
    "category": "BURGER AND FRIES",
    "name": {
      "en": "French Fries - $ 3.49",
      "hi": "French Fries - $ 3.49"
    },
    "description": {
      "en": "Crispy golden French fries, perfectly seasoned and freshly served."
    },
    "price": "",
    "image": "french_fries.jpg",
    "inStock": true,
    "popular": true
  },
  {
    "category": "DESSERTS",
    "name": {
      "en": "Gulab Jamun - $ 4.99",
      "hi": "Gulab Jamun - $ 4.99"
    },
    "description": {
      "en": "Soft milk dumplings soaked in warm, cardamom-infused sugar syrup."
    },
    "price": "",
    "image": "gulab_jamun.jpg",
    "inStock": true,
    "popular": true

  },
  {
    "category": "DRINKS",
    "name": {
      "en": "Karachi Tea - $ 2.99",
      "hi": "Karachi Tea - $ 2.99"
    },
    "description": {
      "en": "Strong, aromatic Pakistani-style tea brewed with milk and spices."
    },
    "price": "",
    "image": "karachi_tea.jpg",
    "inStock": true
  },
  {
    "category": "DRINKS",
    "name": {
      "en": "Mango Lassi - $ 5.99",
      "hi": "Mango Lassi - $ 5.99"
    },
    "description": {
      "en": "Smooth yogurt-based mango drink, sweet and refreshing."
    },
    "price": "",
    "image": "mango_lassi.jpg",
    "inStock": true,
    "popular": true

  },
  {
    "category": "DRINKS",
    "name": {
      "en": "Fountain Drinks - $ 2.49",
      "hi": "Fountain Drinks - $ 2.49"
    },
    "description": {
      "en": "Classic soda cans  and refreshments."
    },
    "price": "",
    "image": "fountain_drinks.jpg",
    "inStock": true
  },
  {
    "category": "DRINKS",
    "name": {
      "en": "Lime Soda - $ 4.99",
      "hi": "Lime Soda - $ 4.99"
    },
    "description": {
      "en": "Sparkling lime-infused soda for a zesty kick."
    },
    "price": "",
    "image": "lime_soda.jpg",
    "inStock": true
  },
  {
    "category": "DRINKS",
    "name": {
      "en": "Karachi Masala Soda- $ 5.99",
      "hi": "Karachi Masala Soda- $ 5.99"
    },
    "description": {
      "en": "A refreshing and tangy spiced soda with a zesty blend of masala, perfect for a flavorful kick."
    },
    "price": "",
    "image": "karachi_masala_soda.jpg",
    "inStock": true
  },
  {
    "category": "EXTRAS",
    "name": {
      "en": "Raita - $ 1.99",
      "hi": "Yogurt - $ 1.99"
    },
    "description": {
      "en": "Freshly prepared cool yogurt."
    },
    "price": "",
    "image": "yogurt.jpg",
    "inStock": true,
  },
  {
    "category": "EXTRAS",
    "name": {
      "en": "Mint Chutney - $ 1.99",
      "hi": "Mint Chutney - $ 1.99"
    },
    "description": {
      "en": "Refreshing mint-coriander dip."
    },
    "price": "",
    "image": "mint_chutney.jpg",
    "inStock": true,
  },
    {
    "category": "EXTRAS",
    "name": {
      "en": "Flavour Rice  - $ 4.99",
      "hi": "Flavour Rice - $ 4.99"
    },
    "description": {
      "en": "Rice cooked with cumin seeds and typically ghee or butter, often enhanced with other spices for a richer flavor.",
      "hi": "जीरे के साथ पकाया गया चावल, आमतौर पर घी या मक्खन में, और अक्सर अन्य मसालों से स्वाद को और समृद्ध किया जाता है।"
    },
    "price": "",
    "image": "flavour_rice.jpg",
    "inStock": true,
  }
];
