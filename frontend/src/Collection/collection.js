import React, { PureComponent } from 'react';
import sandwich from './sandwich.jpg'
import burger from './burger.jpg'
import waffles from './waffles.jpg'
import fries from './fries.jpg'
import cheesecake from './cheesecake.jpg'
import coffee from './coffee.jpg'
import dessert from './dessert.jpg'
import pasta from './pasta.jpg'
import pizza from './pizza.jpg'
import noodles from './noodles.jpg'
import momos from './momos.jpg'
import veg_burger from './veg_burger.jpg'
import tandoori_burger from './tandoori_burger.jpg'
import cheese_burger from './cheese_burger.jpg'
import paneer_burger from './paneer_burger.jpg';
import mexican_burger from './mexican_burger.jpg';
import Belgian_waffle from './Belgian_Waffle.jpg';
import american_waffle from './ameican_waffle.jpg';
import Hongkong_waffle from './HongKong _Waffle.jpg';
import Liage_waffle from './Liege_Waffle.jpg';
import Savoury_Waffle from './Savoury_Waffle.jpg';
import ClASSICvEG_Momo from './ClassicVeg_Momo.jpg';
import panner_Momo from './Paneer_Momo.jpg';
import SpinachandCheese_Momo from './SpinachandCheese_Momo.jpg';
import Mushroom_Momo from './Mushroom_Momo.jpg';
import Tofu_Momo from './Tofu_Momo.jpg';
import GardenFresh_Pizza from './GardenFresh_Pizza.jpg';
import Margherita_Pizza from './Margherita_Pizza.jpg';
import Mushroom_Pizza from './Mushroom_Pizza.jpg';
import PaneerTikka_Pizza from './PaneerTikka_Pizza.jpg';
import VeggieSupreme_Pizza from './VeggieSupreme_Pizza.jpg';
import veg_sandwich from './veg_sandwich.jpg';
import club_sandwich from './club_sandwich.jpg';
import mexican_sandwich from './mexican_sandwich.jpg';
import CheeseChutney_sanwich from './CheeseChutney_sanwich.jpg';
import AlooMutter_sanwich from './AlooMutter_sanwich.jpg';
import strawberry_cheesecake from './strawberry_cheesecake.jpg';
import Newyork_Cheesecake from './Newyork_Cheesecake.jpg';
import Chocolate_Cheesecake from './Chocolate_Cheesecake.jpg';
import Classic_Cheesecake from './Classic_Cheesecake.jpg';
import NoBake_Cheesecake from './NoBake_Cheesecake.jpg';
import Ramen_noodles from './Ramen_noodles.jpg';
import Hakka_Noodles from './Hakka_Noodles.jpg';
import Schezwan_noodles from './Schezwan_noodles.jpg';
import Manchurian_noodle from './Manchurian_noodle.jpg';
import ChowMein_noodles from './ChowMein_noodles.jpg';
import French_Fries from './French_Fries.jpg';
import ChiliCheese_Fries from './ChiliCheese_Fries.jpg';
import periperi_fries from './periperi_fries.jpg';
import Spaghetti_pasta from './Spaghetti_pasta.jpg';
import Lasagna_pasta from './Lasagna_pasta.jpg';
import Italian_Pasta from './Italian_Pasta.jpg';
import Gulab_Jamun from './Gulab_Jamun.jpg';
import Rasgulla from './Rasgulla.jpg';
import Rasmalai from './Rasmalai.jpg';
import Espresso from './Espresso.jpg';
import Cappuccino from './Cappuccino.jpg';
import Latte from './Latte.jpg';
import Americano from './Americano.jpg';
import Mocha from './Mocha.jpg';
import rating from './rating.jpg'
import add from '../Collection/add.jpg';
import remove from './remove.jpg';

export const icon = [
  { icon_name: add, icon_image: add },
  { icon_name: remove, icon_image: remove },
];


export const icon1 = {
  add_icon: add ,remove_icon: remove ,
  rating_icon: rating,
};

export const menu_list = [
  {
    menu_name: "burger",
    menu_image: burger
  },

  {
    menu_name:"waffles",
    menu_image: waffles
  },

  {
    menu_name: "mo-mos",
    menu_image: momos
  },

  {
    menu_name: "pizza",
    menu_image: pizza
  },

  {
    menu_name: "sandwich",
    menu_image: sandwich
  },

  {
    menu_name: "cheesecake",
    menu_image: cheesecake
  },

  {
    menu_name: "noodles",
    menu_image: noodles
  },

  {
    menu_name: "fries",
    menu_image: fries
  },

  {
    menu_name: "pasta",
    menu_image: pasta
  },

  {
    menu_name: "dessert",
    menu_image: dessert
  },
  
  {
    menu_name: "coffee",
    menu_image: coffee
  },

];


export const food_list = [
   {
    _id:"1",
    name:"veg burger",
    image:veg_burger,
    price:80,
    Image:rating,
    description:"A juicy grilled burger with fresh lettuce, tomatoes, and your choice of condiments.",
    category:"burger"
  },

  {
    _id:"2",
    name:"tandoori burger",
    image:tandoori_burger,
    price:100,
    Image:rating,
    description:"Our juicy, succulent chicken (or vegetarian) patty is marinated in a blend of traditional tandoori spices and grilled to perfection, ensuring each bite is packed with robust flavors.",
    category:"burger"
  },

  {
    _id:"3",
    name:"cheese burger",
    image:cheese_burger,
    price:120,
    Image:rating,
    description:"A cheeseburger is a classic sandwich featuring a beef patty topped with melted cheese, served in a bun with condiments like lettuce, tomato, and pickles, offering a savory and satisfying blend of flavors.",
    category:"burger"
  },

  {
    _id:"4",
    name:"Paneer Tikka Burger",
    image:paneer_burger,
    price:110,
    Image:rating,
    description:"A burger with paneer tikka (grilled cottage cheese marinated in Indian spices) as the main filling.",
    category:"burger"
  },

  {
    _id:"5",
    name:"Mexican Aloo Tikki",
    image:mexican_burger,
    price:120,
    Image:rating,
    description:"A flavorful fusion: spicy aloo tikki patty infused with zesty Mexican spices, served in a soft bun.",
    category:"burger"
  },

  {
    _id:"6",
    name:"Belgian Waffle",
    image:Belgian_waffle,
    price:140,
    Image:rating,
    description:"A light and fluffy waffle with deep, large pockets, perfect for holding syrup and toppings.",
    category:"waffles"
  },

  {
    _id:"7",
    name:"Liege Waffle",
    image:Liage_waffle,
    price:140,
    Image:rating,
    description:"A dense and chewy waffle with caramelized sugar on the outside, providing a sweet and crunchy texture.",
    category:"waffles"
  },

  {
    _id:"8",
    name:"American Waffle",
    image:american_waffle,
    price:150,
    Image:rating,
    description:"A classic waffle with a crisp exterior and soft interior, often served with butter and maple syrup.",
    category:"waffles"
  },

  {
    _id:"9",
    name:"Hong Kong Waffle",
    image:Hongkong_waffle,
    price:150,
    Image:rating,
    description:"A bubble-shaped waffle with a crispy exterior and soft, chewy interior, typically eaten plain or with sweet toppings.",
    category:"waffles"
  },

  {
    _id:"10",
    name:"Savoury Waffle",
    image:Savoury_Waffle,
    price:140,
    Image:rating,
    description:"A waffle made with savory ingredients like cheese, herbs, or vegetables, offering a savory twist on the traditional sweet waffle.",
    category:"waffles"
  },

  {
    _id:"11",
    name:"Classic Veg Momo",
    image:ClASSICvEG_Momo,
    price:70,
    Image:rating,
    description:"Filled with finely chopped mixed vegetables like cabbage, carrots, and onions, these steamed dumplings are a staple in many Himalayan cuisines.",
    category:"mo-mos"
  },

  {
    _id:"12",
    name:"Paneer Momo",
    image:panner_Momo,
    price:100,
    Image:rating,
    description:"These momos are stuffed with a flavorful mixture of crumbled paneer (Indian cottage cheese), spices, and herbs, offering a rich and creamy texture.",
    category:"mo-mos"
  },

  {
    _id:"13",
    name:"Spinach and Cheese Momo",
    image:SpinachandCheese_Momo,
    price:120,
    Image:rating,
    description:"Packed with a nutritious blend of spinach and melty cheese, these momos provide a delightful combination of flavors and textures.",
    category:"mo-mos"
  },

  {
    _id:"14",
    name:"Tofu Momo",
    image:Tofu_Momo,
    price:130,
    Image:rating,
    description:"Filled with marinated tofu and a mix of vegetables, these momos are a great plant-based protein option with a satisfying bite.",
    category:"mo-mos"
  },

  {
    _id:"15",
    name:"Mushroom Momo",
    image:Mushroom_Momo,
    price:140,
    Image:rating,
    description:"These momos are stuffed with a savory filling of sautéed mushrooms, garlic, and spices, delivering a rich and earthy flavor.",
    category:"mo-mos"
  },

  {
    _id:"16",
    name:"Margherita Pizza",
    image:Margherita_Pizza,
    price:400,
    Image:rating,
    description:"A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves, offering a simple yet flavorful experience.",
    category:"pizza"
  },

  {
    _id:"17",
    name:"Veggie Supreme Pizza",
    image:VeggieSupreme_Pizza,
    price:400,
    Image:rating,
    description:"Loaded with a variety of vegetables like bell peppers, onions, mushrooms, olives, and tomatoes, this pizza is a colorful and nutritious delight.",
    category:"pizza"
  },
  {
    _id:"18",
    name:"Paneer Tikka Pizza",
    image:PaneerTikka_Pizza,
    price:449,
    Image:rating,
    description:"Topped with marinated paneer cubes, onions, bell peppers, and a tangy tomato sauce, this pizza combines Indian flavors with an Italian classic.",
    category:"pizza"
  },

  {
    _id:"19",
    name:"Mushroom and Truffle Oil Pizza",
    image:Mushroom_Pizza,
    price:499,
    Image:rating,
    description:"A gourmet option with a generous topping of sautéed mushrooms and a drizzle of aromatic truffle oil, providing an earthy and luxurious flavor.",
    category:"pizza"
  },

  {
    _id:"20",
    name:"Garden Fresh Pizza",
    image:GardenFresh_Pizza,
    price:499,
    Image:rating,
    description:"A mix of seasonal fresh vegetables like broccoli, cherry tomatoes, red onions, and bell peppers, this pizza is both colorful and healthy.",
    category:"pizza"
  },

  {
    _id:"21",
    name:"Vegetable sandwich",
    image:veg_sandwich,
    price:70,
    Image:rating,
    description:"A beloved street food staple filled with a medley of vegetables such as potatoes, bell peppers, and onions, seasoned with chaat masala and grilled to a crispy finish.",
    category:"sandwich"
  },

  {
    _id:"22",
    name:"Club sandwich",
    image:club_sandwich,
    price:120,
    Image:rating,
    description:"Grilled sandwich with marinated paneer cubes, veggies, and mint chutney, bursting with Indian spices.",
    category:"sandwich"
  },

  {
    _id:"23",
    name:"Mexican sandwich",
    image:mexican_sandwich,
    price:150,
    Image:rating,
    description:"A hearty sandwich filled with refried beans, avocado, meat (such as beef or pork), cheese, lettuce, and salsa, served on a crusty roll for a satisfying blend of savory flavors and textures.",
    category:"sandwich"
  },

  {
    _id:"24",
    name:"CheeseChutney sandwich",
    image:CheeseChutney_sanwich,
    price:100,
    Image:rating,
    description:"A delightful combination of creamy cheese and tangy chutney spread between slices of bread, grilled to perfection for a crispy, gooey texture that's a savory delight.",
    category:"sandwich"
  },

  {
    _id:"25",
    name:"AlooMutter sandwich",
    image:AlooMutter_sanwich,
    price:60,
    Image:rating,
    description:"Sandwich with spicy potato patties, onions, tomatoes, and tangy chutneys, a favorite street food delight.",
    category:"sandwich"
  },

  {
    _id:"26",
    name:"Strawberry Cheesecake",
    image:strawberry_cheesecake,
    price:450,
    Image:rating,
    description:"Creamy cheesecake with a graham cracker crust, topped with fresh strawberries or strawberry sauce, offering a perfect blend of sweet and tangy flavors.",
    category:"cheesecake"
  },

  {
    _id:"27",
    name:"Newyork Cheesecake",
    image:Newyork_Cheesecake,
    price:480,
    Image:rating,
    description:"Dense and creamy, with a rich, tangy flavor from cream cheese, often topped with sour cream or fruit compote.",
    category:"cheesecake"
  },

  {
    _id:"28",
    name:"Classic Cheesecake",
    image:Classic_Cheesecake,
    price:460,
    Image:rating,
    description:"Similar to New York cheesecake but sometimes made with a graham cracker crust. It's rich and creamy with a tangy flavor.",
    category:"cheesecake"
  },

  {
    _id:"29",
    name:"No-Bake Cheesecake",
    image:NoBake_Cheesecake,
    price:460,
    Image:rating,
    description:"Similar to New York cheesecake but sometimes made with a graham cracker crust. It's rich and creamy with a tangy flavor.",
    category:"cheesecake"
  },

  {
    _id:"30",
    name:"Chocolate Cheesecake",
    image:Chocolate_Cheesecake,
    price:480,
    Image:rating,
    description:"Incorporates chocolate into the cheesecake mixture, resulting in a rich, decadent flavor. It can be made with dark, milk, or white chocolate.",
    category:"cheesecake"
  },

  {
    _id:"31",
    name:"Ramen",
    image:Ramen_noodles,
    price:380,
    Image:rating,
    description:"Japanese wheat noodles served in a savory broth with toppings like sliced pork, seaweed, and green onions, known for its rich umami flavor.",
    category:"noodles"
  },

  {
    _id:"32",
    name:"Hakka Noodles",
    image:Hakka_Noodles,
    price:360,
    Image:rating,
    description:"Indo-Chinese stir-fried noodles tossed with vegetables like cabbage, carrots, and bell peppers, flavored with soy sauce and chili sauce for a flavorful kick.",
    category:"noodles"
  },

  {
    _id:"33",
    name:"Chow Mein Noodles",
    image:ChowMein_noodles,
    price:380,
    Image:rating,
    description:"Chow Mein is typically stir-fried with vegetables, and flavored with soy sauce, vinegar, and chili sauce.",
    category:"noodles"
  },

  {
    _id:"34",
    name:"Schezwan Noodles",
    image:Schezwan_noodles,
    price:360,
    Image:rating,
    description:"Schezwan noodles are stir-fried with vegetables and a fiery Schezwan sauce that includes chili paste, garlic, ginger, and soy sauce.",
    category:"noodles"
  },

  {
    _id:"35",
    name:"Manchurian noodle",
    image:Manchurian_noodle,
    price:340,
    Image:rating,
    description:"Manchurian noodle is typically featuring stir-fried noodles with a savory, umami-laden sauce infused with garlic, ginger, and soy, often garnished with vegetables.",
    category:"noodles"
  },

  {
    _id:"36",
    name:"French Fries",
    image:French_Fries,
    price:70,
    Image:rating,
    description:"Classic thin-cut potatoes, deep-fried to golden perfection, crispy on the outside and fluffy on the inside, often served with ketchup or mayo.",
    category:"fries"
  },

  {
    _id:"37",
    name:"peri peri Fries",
    image:periperi_fries,
    price:90,
    Image:rating,
    description:"Peri peri fries are crispy potato sticks seasoned with a zesty blend of peri peri spices, offering a tangy and spicy kick with every bite.",
    category:"fries"
  },

  {
    _id:"38",
    name:"Chili Cheese Fries",
    image:ChiliCheese_Fries,
    price:80,
    Image:rating,
    description:"Crispy fries smothered in warm chili con carne and melted cheese, creating a hearty and indulgent dish with a satisfying combination of flavors and textures.",
    category:"fries"
  },

  {
    _id:"41",
    name:"Spaghetti Pasta",
    image:Spaghetti_pasta,
    price:400,
    Image:rating,
    description:"Long, thin strands of pasta perfect for pairing with a variety of sauces, from marinara to carbonara.",
    category:"pasta" 
  },

  {
    _id:"42",
    name:"Lasagna Pasta",
    image:Lasagna_pasta,
    price:440,
    Image:rating,
    description:"Wide, flat sheets of pasta layered with cheese, and tomato sauce, baked to perfection.",
    category:"pasta" 
  },

  { 
    _id:"43",
    name:"Italian Pasta",
    image:Italian_Pasta,
    price:450,
    Image:rating,
    description:"It's traditionally cooked al dente and served with a variety of sauces, from rich tomato to creamy Alfredo.",
    category:"pasta"
  },
  
  {
    _id:"46",
    name:"Gulab Jamun",
    image:Gulab_Jamun,
    price:140,
    Image:rating,
    description:"Soft, spongy, and soaked in sugar syrup, these milk-solid dumplings are infused with cardamom and rose flavors, offering a heavenly sweet experience.",
    category:"dessert" 
  },

  {
    _id:"47",
    name:"Rasmalai",
    image:Rasmalai,
    price:160,
    Image:rating,
    description:"Soft cheese patties soaked in sweetened, thickened milk flavored with cardamom and saffron, offering a creamy, fragrant, and luxurious dessert experience.",
    category:"dessert"
  },

  {
    _id:"48",
    name:"Rasgulla",
    image:Rasgulla,
    price:140,
    Image:rating,
    description:"Delicate cheese balls cooked in sugar syrup, with a spongy texture and a subtle infusion of cardamom, representing the epitome of Indian sweet indulgence.",
    category:"dessert"
  },

  {
    _id:"51",
    name:"Espresso",
    image:Espresso,
    price:150,
    Image:rating,
    description:"Strong and concentrated coffee made by forcing hot water through finely-ground coffee beans, offering a bold flavor with a layer of crema.",
    category:"coffee"
  },

  {
    _id:"52",
    name:"Cappuccino",
    image:Cappuccino,
    price:170,
    Image:rating,
    description:"Equal parts espresso, steamed milk, and frothy milk foam, providing a balanced and creamy texture with a hint of espresso flavor.",
    category:"coffee"
  },

  {
    _id:"53",
    name:"Latte",
    image:Latte,
    price:160,
    Image:rating,
    description:"A smooth blend of espresso and steamed milk with a light layer of foam. Ideal for a creamy coffee experience.",
    category:"coffee"
  },

  {
    _id:"54",
    name:"Americano",
    image:Americano,
    price:170,
    Image:rating,
    description:"Espresso diluted with hot water. Mimics the strength and flavor of a drip coffee.",
    category:"coffee"
  },

  {
    _id:"55",
    name:"Mocha",
    image:Mocha,
    price:150,
    Image:rating,
    description:"Espresso combined with steamed milk and chocolate syrup. A decadent treat for chocolate and coffee lovers.",
    category:"coffee"
  },

];

/*export const items = [
  {
    items_name: "burger",
  },

  {
    items_name:"waffles",
   
  },

  {
    items_name: "mo-mos",
  },

  {
    menu_name: "pizza",
  },

  {
    iyems_name: "sandwich",
  },

  {
    items_name: "cheesecake",
  },

  {
    items_name: "noodles",
  },

  {
    items_name: "fries",
  },

  {
    items_name: "pasta",
  },

  {
    items_name: "dessert",
  },
  
  {
    items_name: "coffee",
  }

];*/

export const items_detail = [
  {
    _id:"1",
    name:"veg burger",
    image:veg_burger,
    price:80,
    Image:rating,
    description:"A juicy grilled burger with fresh lettuce, tomatoes, and your choice of condiments.",
    category:"burger"
  },

  {
    _id:"2",
    name:"tandoori burger",
    image:tandoori_burger,
    price:100,
    Image:rating,
    description:"Our juicy, succulent chicken (or vegetarian) patty is marinated in a blend of traditional tandoori spices and grilled to perfection, ensuring each bite is packed with robust flavors.",
    category:"burger"
  },

  {
    _id:"3",
    name:"cheese burger",
    image:cheese_burger,
    price:120,
    Image:rating,
    description:"A cheeseburger is a classic sandwich featuring a beef patty topped with melted cheese, served in a bun with condiments like lettuce, tomato, and pickles, offering a savory and satisfying blend of flavors.",
    category:"burger"
  },

  {
    _id:"4",
    name:"Paneer Tikka Burger",
    image:paneer_burger,
    price:110,
    Image:rating,
    description:"A burger with paneer tikka (grilled cottage cheese marinated in Indian spices) as the main filling.",
    category:"burger"
  },

  {
    _id:"5",
    name:"Mexican Aloo Tikki",
    image:mexican_burger,
    price:120,
    Image:rating,
    description:"A flavorful fusion: spicy aloo tikki patty infused with zesty Mexican spices, served in a soft bun.",
    category:"burger"
  },

  {
    _id:"6",
    name:"Belgian Waffle",
    image:Belgian_waffle,
    price:140,
    Image:rating,
    description:"A light and fluffy waffle with deep, large pockets, perfect for holding syrup and toppings.",
    category:"waffles"
  },

  {
    _id:"7",
    name:"Liege Waffle",
    image:Liage_waffle,
    price:140,
    Image:rating,
    description:"A dense and chewy waffle with caramelized sugar on the outside, providing a sweet and crunchy texture.",
    category:"waffles"
  },

  {
    _id:"8",
    name:"American Waffle",
    image:american_waffle,
    price:150,
    Image:rating,
    description:"A classic waffle with a crisp exterior and soft interior, often served with butter and maple syrup.",
    category:"waffles"
  },

  {
    _id:"9",
    name:"Hong Kong Waffle",
    image:Hongkong_waffle,
    price:150,
    Image:rating,
    description:"A bubble-shaped waffle with a crispy exterior and soft, chewy interior, typically eaten plain or with sweet toppings.",
    category:"waffles"
  },

  {
    _id:"10",
    name:"Savoury Waffle",
    image:Savoury_Waffle,
    price:140,
    Image:rating,
    description:"A waffle made with savory ingredients like cheese, herbs, or vegetables, offering a savory twist on the traditional sweet waffle.",
    category:"waffles"
  },

  {
    _id:"11",
    name:"Classic Veg Momo",
    image:ClASSICvEG_Momo,
    price:70,
    Image:rating,
    description:"Filled with finely chopped mixed vegetables like cabbage, carrots, and onions, these steamed dumplings are a staple in many Himalayan cuisines.",
    category:"mo-mos"
  },

  {
    _id:"12",
    name:"Paneer Momo",
    image:panner_Momo,
    price:100,
    Image:rating,
    description:"These momos are stuffed with a flavorful mixture of crumbled paneer (Indian cottage cheese), spices, and herbs, offering a rich and creamy texture.",
    category:"mo-mos"
  },

  {
    _id:"13",
    name:"Spinach and Cheese Momo",
    image:SpinachandCheese_Momo,
    price:120,
    Image:rating,
    description:"Packed with a nutritious blend of spinach and melty cheese, these momos provide a delightful combination of flavors and textures.",
    category:"mo-mos"
  },

  {
    _id:"14",
    name:"Tofu Momo",
    image:Tofu_Momo,
    price:130,
    Image:rating,
    description:"Filled with marinated tofu and a mix of vegetables, these momos are a great plant-based protein option with a satisfying bite.",
    category:"mo-mos"
  },

  {
    _id:"15",
    name:"Mushroom Momo",
    image:Mushroom_Momo,
    price:140,
    Image:rating,
    description:"These momos are stuffed with a savory filling of sautéed mushrooms, garlic, and spices, delivering a rich and earthy flavor.",
    category:"mo-mos"
  },

  {
    _id:"16",
    name:"Margherita Pizza",
    image:Margherita_Pizza,
    price:400,
    Image:rating,
    description:"A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves, offering a simple yet flavorful experience.",
    category:"pizza"
  },

  {
    _id:"17",
    name:"Veggie Supreme Pizza",
    image:VeggieSupreme_Pizza,
    price:400,
    Image:rating,
    description:"Loaded with a variety of vegetables like bell peppers, onions, mushrooms, olives, and tomatoes, this pizza is a colorful and nutritious delight.",
    category:"pizza"
  },
  {
    _id:"18",
    name:"Paneer Tikka Pizza",
    image:PaneerTikka_Pizza,
    price:449,
    Image:rating,
    description:"Topped with marinated paneer cubes, onions, bell peppers, and a tangy tomato sauce, this pizza combines Indian flavors with an Italian classic.",
    category:"pizza"
  },

  {
    _id:"19",
    name:"Mushroom and Truffle Oil Pizza",
    image:Mushroom_Pizza,
    price:499,
    Image:rating,
    description:"A gourmet option with a generous topping of sautéed mushrooms and a drizzle of aromatic truffle oil, providing an earthy and luxurious flavor.",
    category:"pizza"
  },

  {
    _id:"20",
    name:"Garden Fresh Pizza",
    image:GardenFresh_Pizza,
    price:499,
    Image:rating,
    description:"A mix of seasonal fresh vegetables like broccoli, cherry tomatoes, red onions, and bell peppers, this pizza is both colorful and healthy.",
    category:"pizza"
  },

  {
    _id:"21",
    name:"Vegetable sandwich",
    image:veg_sandwich,
    price:70,
    Image:rating,
    description:"A beloved street food staple filled with a medley of vegetables such as potatoes, bell peppers, and onions, seasoned with chaat masala and grilled to a crispy finish.",
    category:"sandwich"
  },

  {
    _id:"22",
    name:"Club sandwich",
    image:club_sandwich,
    price:120,
    Image:rating,
    description:"Grilled sandwich with marinated paneer cubes, veggies, and mint chutney, bursting with Indian spices.",
    category:"sandwich"
  },

  {
    _id:"23",
    name:"Mexican sandwich",
    image:mexican_sandwich,
    price:150,
    Image:rating,
    description:"A hearty sandwich filled with refried beans, avocado, meat (such as beef or pork), cheese, lettuce, and salsa, served on a crusty roll for a satisfying blend of savory flavors and textures.",
    category:"sandwich"
  },

  {
    _id:"24",
    name:"CheeseChutney sandwich",
    image:CheeseChutney_sanwich,
    price:100,
    Image:rating,
    description:"A delightful combination of creamy cheese and tangy chutney spread between slices of bread, grilled to perfection for a crispy, gooey texture that's a savory delight.",
    category:"sandwich"
  },

  {
    _id:"25",
    name:"AlooMutter sandwich",
    image:AlooMutter_sanwich,
    price:60,
    Image:rating,
    description:"Sandwich with spicy potato patties, onions, tomatoes, and tangy chutneys, a favorite street food delight.",
    category:"sandwich"
  },

  {
    _id:"26",
    name:"Strawberry Cheesecake",
    image:strawberry_cheesecake,
    price:450,
    Image:rating,
    description:"Creamy cheesecake with a graham cracker crust, topped with fresh strawberries or strawberry sauce, offering a perfect blend of sweet and tangy flavors.",
    category:"cheesecake"
  },

  {
    _id:"27",
    name:"Newyork Cheesecake",
    image:Newyork_Cheesecake,
    price:480,
    Image:rating,
    description:"Dense and creamy, with a rich, tangy flavor from cream cheese, often topped with sour cream or fruit compote.",
    category:"cheesecake"
  },

  {
    _id:"28",
    name:"Classic Cheesecake",
    image:Classic_Cheesecake,
    price:460,
    Image:rating,
    description:"Similar to New York cheesecake but sometimes made with a graham cracker crust. It's rich and creamy with a tangy flavor.",
    category:"cheesecake"
  },

  {
    _id:"29",
    name:"No-Bake Cheesecake",
    image:NoBake_Cheesecake,
    price:460,
    Image:rating,
    description:"Similar to New York cheesecake but sometimes made with a graham cracker crust. It's rich and creamy with a tangy flavor.",
    category:"cheesecake"
  },

  {
    _id:"30",
    name:"Chocolate Cheesecake",
    image:Chocolate_Cheesecake,
    price:480,
    Image:rating,
    description:"Incorporates chocolate into the cheesecake mixture, resulting in a rich, decadent flavor. It can be made with dark, milk, or white chocolate.",
    category:"cheesecake"
  },

  {
    _id:"31",
    name:"Ramen",
    image:Ramen_noodles,
    price:380,
    Image:rating,
    description:"Japanese wheat noodles served in a savory broth with toppings like sliced pork, seaweed, and green onions, known for its rich umami flavor.",
    category:"noodles"
  },

  {
    _id:"32",
    name:"Hakka Noodles",
    image:Hakka_Noodles,
    price:360,
    Image:rating,
    description:"Indo-Chinese stir-fried noodles tossed with vegetables like cabbage, carrots, and bell peppers, flavored with soy sauce and chili sauce for a flavorful kick.",
    category:"noodles"
  },

  {
    _id:"33",
    name:"Chow Mein Noodles",
    image:ChowMein_noodles,
    price:380,
    Image:rating,
    description:"Chow Mein is typically stir-fried with vegetables, and flavored with soy sauce, vinegar, and chili sauce.",
    category:"noodles"
  },

  {
    _id:"34",
    name:"Schezwan Noodles",
    image:Schezwan_noodles,
    price:360,
    Image:rating,
    description:"Schezwan noodles are stir-fried with vegetables and a fiery Schezwan sauce that includes chili paste, garlic, ginger, and soy sauce.",
    category:"noodles"
  },

  {
    _id:"35",
    name:"Manchurian noodle",
    image:Manchurian_noodle,
    price:340,
    Image:rating,
    description:"Manchurian noodle is typically featuring stir-fried noodles with a savory, umami-laden sauce infused with garlic, ginger, and soy, often garnished with vegetables.",
    category:"noodles"
  },

  {
    _id:"36",
    name:"French Fries",
    image:French_Fries,
    price:70,
    Image:rating,
    description:"Classic thin-cut potatoes, deep-fried to golden perfection, crispy on the outside and fluffy on the inside, often served with ketchup or mayo.",
    category:"fries"
  },

  {
    _id:"37",
    name:"peri peri Fries",
    image:periperi_fries,
    price:90,
    Image:rating,
    description:"Peri peri fries are crispy potato sticks seasoned with a zesty blend of peri peri spices, offering a tangy and spicy kick with every bite.",
    category:"fries"
  },

  {
    _id:"38",
    name:"Chili Cheese Fries",
    image:ChiliCheese_Fries,
    price:80,
    Image:rating,
    description:"Crispy fries smothered in warm chili con carne and melted cheese, creating a hearty and indulgent dish with a satisfying combination of flavors and textures.",
    category:"fries"
  },

  {
    _id:"41",
    name:"Spaghetti Pasta",
    image:Spaghetti_pasta,
    price:400,
    Image:rating,
    description:"Long, thin strands of pasta perfect for pairing with a variety of sauces, from marinara to carbonara.",
    category:"pasta" 
  },

  {
    _id:"42",
    name:"Lasagna Pasta",
    image:Lasagna_pasta,
    price:440,
    Image:rating,
    description:"Wide, flat sheets of pasta layered with cheese, and tomato sauce, baked to perfection.",
    category:"pasta" 
  },

  { 
    _id:"43",
    name:"Italian Pasta",
    image:Italian_Pasta,
    price:450,
    Image:rating,
    description:"It's traditionally cooked al dente and served with a variety of sauces, from rich tomato to creamy Alfredo.",
    category:"pasta"
  },
  
  {
    _id:"46",
    name:"Gulab Jamun",
    image:Gulab_Jamun,
    price:140,
    Image:rating,
    description:"Soft, spongy, and soaked in sugar syrup, these milk-solid dumplings are infused with cardamom and rose flavors, offering a heavenly sweet experience.",
    category:"dessert" 
  },

  {
    _id:"47",
    name:"Rasmalai",
    image:Rasmalai,
    price:160,
    Image:rating,
    description:"Soft cheese patties soaked in sweetened, thickened milk flavored with cardamom and saffron, offering a creamy, fragrant, and luxurious dessert experience.",
    category:"dessert"
  },

  {
    _id:"48",
    name:"Rasgulla",
    image:Rasgulla,
    price:140,
    Image:rating,
    description:"Delicate cheese balls cooked in sugar syrup, with a spongy texture and a subtle infusion of cardamom, representing the epitome of Indian sweet indulgence.",
    category:"dessert"
  },

  {
    _id:"51",
    name:"Espresso",
    image:Espresso,
    price:150,
    Image:rating,
    description:"Strong and concentrated coffee made by forcing hot water through finely-ground coffee beans, offering a bold flavor with a layer of crema.",
    category:"coffee"
  },

  {
    _id:"52",
    name:"Cappuccino",
    image:Cappuccino,
    price:170,
    Image:rating,
    description:"Equal parts espresso, steamed milk, and frothy milk foam, providing a balanced and creamy texture with a hint of espresso flavor.",
    category:"coffee"
  },

  {
    _id:"53",
    name:"Latte",
    image:Latte,
    price:160,
    Image:rating,
    description:"A smooth blend of espresso and steamed milk with a light layer of foam. Ideal for a creamy coffee experience.",
    category:"coffee"
  },

  {
    _id:"54",
    name:"Americano",
    image:Americano,
    price:170,
    Image:rating,
    description:"Espresso diluted with hot water. Mimics the strength and flavor of a drip coffee.",
    category:"coffee"
  },

  {
    _id:"55",
    name:"Mocha",
    image:Mocha,
    price:150,
    Image:rating,
    description:"Espresso combined with steamed milk and chocolate syrup. A decadent treat for chocolate and coffee lovers.",
    category:"coffee"
  },

];


export default class Collection extends PureComponent {
    render() {
      return (
        <>
        <div>
          {menu_list.map((item, index) => (
            <div key={index}>
              <h3>{item.menu_name}</h3>
              <img src={item.menu_image} alt={item.menu_name} />
            </div>
          ))}
        </div>

        <div>
          {items_detail.map((item, index) => (
            <div key={index}>
              <h3>{item.menu_name}</h3>
              <img src={item.menu_image} alt={item.menu_name} />
            </div>
          ))}
        </div>
        </>
      );
 }
}
