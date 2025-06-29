"use client";

import { StatsCard } from "@/components";

const STATS = [
    { count: "500+", title: "Happy Customers Daily" },
    { count: "50+", title: "Coffee Varieties" },
    { count: "100+", title: "Fresh Menu Items" },
    { count: "5-Star", title: "Average Rating" },
];

export function About() {
  return (
    <section id="about" className="container mx-auto flex flex-col items-center px-4 py-20">
      <div className="text-center mb-2 text-orange-500 text-lg font-semibold">About Paradise Cafe</div>
      <h2 className="text-center text-blue-gray-900 text-3xl md:text-4xl font-bold mb-6">A Haven for Coffee Lovers</h2>
      <p className="mt-4 lg:max-w-3xl mb-12 w-full text-center font-normal text-gray-600 text-lg">
        Welcome to Paradise Cafe, where every visit is a journey into culinary excellence! 
        Founded in 2023, our mission is to provide a cozy spot for our community to enjoy artisanal coffee, gourmet cuisine, and warm hospitality.
      </p>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
        <div className="text-center md:text-left">
            <img src="image/cafe1.jpg" alt="Cafe Interior" className="rounded-lg shadow-lg mb-8 w-full h-96 object-cover"/>
            <h4 className="mb-4 text-blue-gray-900 text-2xl font-semibold">Our Story</h4>
            <p className="text-gray-600 text-base">
                From a small dream to a beloved local hub, Paradise Cafe has grown with the love of our patrons. We believe in quality, community, and the simple joy of a perfect cup of coffee. Our beans are ethically sourced, and our food is made from fresh, local ingredients.
            </p>
        </div>
        <div>
            <h4 className="mb-8 text-blue-gray-900 text-2xl font-semibold text-center md:text-left">Our Highlights</h4>
            <div className="grid grid-cols-2 gap-8">
              {STATS.map((props, key) => (
                <StatsCard key={key} {...props} />
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}

export default About; 