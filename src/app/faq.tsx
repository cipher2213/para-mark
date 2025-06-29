"use client";

import React, { useState } from "react";

const FAQS = [
  {
    title: "1. What are your opening hours?",
    desc: "We are open daily from 10:00 AM to 10:00 PM. We also offer early bird specials from 7:00 AM to 9:00 AM for our morning customers.",
  },
  
 
  {
    title: "4. Do you have vegetarian and vegan options?",
    desc: "Yes, we have a wide variety of vegetarian and vegan options on our menu. Our kitchen team is happy to accommodate dietary restrictions and can modify many of our dishes to meet your needs.",
  },
  {
    title: "5. Do you host events or private parties?",
    desc: "We do! Paradise Cafe is perfect for intimate gatherings, business meetings, and special celebrations. We offer catering services and can accommodate groups of various sizes. Contact us for more details about our event packages.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(null);
  const handleOpen = (idx: number) => setOpen(open === idx ? null : idx);

  return (
    <section id="faq" className="py-8 px-8 lg:py-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="mb-4 text-3xl md:text-4xl font-bold text-blue-gray-900">Frequently asked questions</h1>
          <p className="mx-auto mb-24 lg:w-3/5 text-gray-500 text-lg">
            Welcome to Paradise Cafe FAQ section. We're here to address your questions and help you make the most of your cafe experience.
          </p>
        </div>
        <div className="mx-auto lg:max-w-screen-lg lg:px-20">
          {FAQS.map(({ title, desc }, idx) => (
            <div key={idx} className="mb-6 border-b border-blue-gray-100">
              <button
                className="w-full text-left text-gray-900 py-4 font-semibold text-lg flex justify-between items-center focus:outline-none"
                onClick={() => handleOpen(idx)}
                aria-expanded={open === idx}
              >
                {title}
                <span className={`ml-2 transition-transform ${open === idx ? 'rotate-180' : ''}`}>▼</span>
              </button>
              {open === idx && (
                <div className="pl-4 pb-4 text-gray-500 text-base animate-fade-in">
                  {desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
