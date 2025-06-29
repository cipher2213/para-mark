"use client";

import Link from "next/link";
import { useRouter } from 'next/navigation';

function Hero() {
  const router = useRouter();

  const handleMenuClick = () => {
    router.push('/menu-page');
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        {/* Make sure to add your video file in the /public/videos/ directory */}
        <source src="/image/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 h-full w-full bg-gray-900/50" />

      {/* Content */}
      <div className="grid min-h-screen px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col justify-center items-center w-full text-center relative z-10">
          <h3 className="mb-2 text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg text-white">
            Open Daily 10AM - 10PM @ Parbhani
          </h3>
          <h1 className="lg:max-w-3xl text-3xl md:text-5xl lg:text-7xl font-extrabold tracking-tight drop-shadow-xl mb-4 text-white">
            Paradise Cafe: Where Every Sip Tells a Story
          </h1>
          <p className="mt-1 mb-12 w-full md:max-w-full lg:max-w-2xl text-base md:text-lg lg:text-2xl font-medium drop-shadow-md text-white">
            Experience the perfect blend of artisanal coffee, gourmet cuisine, and warm hospitality in our cozy paradise.
          </p>
          <div className="flex justify-center w-full">
            <button 
              onClick={handleMenuClick}
              className="bg-white text-black text-base md:text-lg px-8 py-3 rounded-full shadow-lg font-semibold hover:bg-gray-200 transition border border-gray-300"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
