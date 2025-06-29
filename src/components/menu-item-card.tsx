"use client";

import Image from "next/image";
import { useState } from "react";
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi'; // Install react-icons if not already installed
import toast from "react-hot-toast";

interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  img: string;
}

export function MenuItemCard({ name, description, price, img }: MenuItemCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div 
      className="border border-blue-gray-100 shadow-xl transform transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-lg rounded-3xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-56 relative overflow-hidden rounded-t-3xl">
        <Image
          src={img}
          alt={name}
          width={500}
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end p-4">
          <h3 className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] font-extrabold text-white text-lg md:text-xl lg:text-2xl">
            {name}
          </h3>
        </div>
      </div>
      <div className="text-center p-8">
        <p className="text-gray-700 font-semibold mb-2 text-lg">{description}</p>
        <div className="font-bold text-2xl mb-2 text-blue-700">{price}</div>
      </div>
    </div>
  );
}

export default MenuItemCard; 