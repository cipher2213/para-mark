"use client";

import { Navbar, Footer } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus, FiTrash2, FiArrowLeft, FiPhone } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

interface CartItem {
  name: string;
  price: string;
  quantity: number;
  img: string;
  description: string;
}

export default function CartPage() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-32 min-h-screen flex flex-col items-center justify-center">
        <h2 className="mb-6 text-center text-2xl font-bold">
          Explore Our Menu
        </h2>
        <p className="mb-8 text-lg text-gray-600 text-center max-w-xl">
          Our menu is crafted for the true connoisseur. Browse our premium selection of coffees, teas, pastries, and sandwiches. Ordering is currently unavailable—visit us in person to experience Paradise Cafe!
        </p>
        <Link href="/menu-page">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            View Menu
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
} 