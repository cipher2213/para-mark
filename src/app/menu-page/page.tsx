"use client";

import { Navbar, Footer } from "@/components";
import { MenuItemCard } from "@/components/menu-item-card";
import Link from "next/link";
import { useState, useEffect } from "react";

const MENU_DATA = {
  pizza: [
    { name: "Fries Pizza", description: "Onion, Capsicum, Fries, Peri-Peri Powder with Cheese", price: "₹180", img: "/menu-images/Fries Pizza.jpg" },
    { name: "Cheese Burst Pizza", description: "Cheese Burst", price: "₹240", img: "/menu-images/Cheese Burst Pizza.webp" },
    { name: "Margerita Pizza", description: "Black Olive, Jalepino, Panner, Capsicum, Sweet Corn with Cheese", price: "₹140", img: "/menu-images/Margerita pizza.jpeg" },
    { name: "Onion Capsicum Pizza", description: "Onion, Capsicum with Cheese", price: "₹130", img: "/menu-images/onion-capsicum-pizza.png" },
    { name: "Jain Pizza", description: "Tomato, Capsicum with Cheese", price: "₹140", img: "/menu-images/jain pizza.jpeg" },
    { name: "Maxicum Corn Pizza", description: "Onion, Capsicum, Black Olive, Sweet Corn with Cheese", price: "₹150", img: "/menu-images/Onion, Capsicum, Black Olive, Sweet Corn with Cheese.jpeg" },
  ],
  burger: [
    { name: "Cheese Burger", price: "₹90", img: "/menu-images/cheese burger.jpg", description: "Burger with cheese slice and veggies." },
    { name: "Cheese Paneer Burger", price: "₹100", img: "/menu-images/Cheese Paneer Burger.webp", description: "Paneer patty with cheese and veggies." },
    { name: "Mushroom Burger", price: "₹100", img: "/menu-images/Mushroom Burger.jpg", description: "Mushroom patty with fresh toppings." },
    { name: "Onion Capsicum Burger", price: "₹60", img: "/menu-images/Onion Capsicum Burger.jpeg", description: "Onion and capsicum patty burger." },
    { name: "Spicy Burger", price: "₹70", img: "/menu-images/Spicy Burger.jpg", description: "Spicy patty with fresh veggies." },
    { name: "Peri Peri Burger", price: "₹80", img: "/menu-images/peri peri burger.jpeg", description: "Peri peri spiced burger." },
  ],
  chinese_noodles: [
    { name: "Hakka Noodles", price: "₹80", img: "/menu-images/Hakka Noodles.webp", description: "Classic hakka noodles." },
    { name: "Paneer Noodles", price: "₹100", img: "/menu-images/Paneer Noodles.avif", description: "Noodles with paneer cubes." },
    { name: "Schezwan Noodles", price: "₹90", img: "/menu-images/Schezwan Noodles.webp", description: "Spicy schezwan noodles." },
    { name: "Tripple Noodles", price: "₹140", img: "/menu-images/Tripple Noodles.jpeg", description: "Triple delight noodles." },
  ],
  paradise_special_shakes: [
    { name: "Kitkat Shake", price: "₹110", img: "/menu-images/Kitkat Shake.jpg", description: "Kitkat blended shake." },
    { name: "Oero", price: "₹100", img: "/menu-images/Oero.jpg", description: "Oreo cookie shake." },
    { name: "Chocolate", price: "₹110", img: "/menu-images/Chocolate.jpeg", description: "Chocolate shake." },
  ],
  combo: [
    { name: "Paradise Pizza Thali", price: "₹300", img: "/menu-images/Fries Pizza.jpg", description: "Pizza thali combo." },
    { name: "Paradise Maggiee Thali", price: "₹200", img: "/menu-images/Tripple Noodles.jpeg", description: "Maggiee thali combo." },
    { name: "Paradise Burger Thali", price: "₹260", img: "/menu-images/cheese burger.jpg", description: "Burger thali combo." },
  ],
  sandwich: [
    { name: "Veg Grill", price: "₹60", img: "/menu-images/Veg Grill.webp", description: "Veg grilled sandwich." },
    { name: "Masala Grill", price: "₹60", img: "/menu-images/Masala grilled sandwich..jpg", description: "Masala grilled sandwich." },
    { name: "Chese Grill", price: "₹70", img: "/menu-images/Cheese grilled sandwic.jpg", description: "Cheese grilled sandwich." },
    { name: "Cheese Masala", price: "₹70", img: "/menu-images/Cheese masala sandwich.jpg", description: "Cheese masala sandwich." },
  ],
};

export default function MenuPage() {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-20 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32 bg-gradient-to-br from-white via-blue-50 to-blue-100 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-center mb-4 font-extrabold tracking-tight text-4xl md:text-5xl lg:text-6xl text-blue-gray-900">
            Our Premium Menu
          </h1>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-lg md:text-xl">
            Discover our curated selection of pizzas, burgers, Chinese noodles, Paradise special shakes, combos, and sandwiches. Crafted for the connoisseur.
          </p>
          {/* Menu Sections */}
          {Object.entries(MENU_DATA).map(([section, items]) => (
            <div className="mb-16" key={section}>
              <h2 className="mb-8 border-b-2 border-blue-300 pb-2 capitalize font-bold text-2xl md:text-3xl lg:text-4xl text-blue-gray-900">
                {section.replace(/_/g, " ")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
                {(items as any[]).map((item, index) => (
                  <MenuItemCard
                    key={index}
                    {...item}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
} 