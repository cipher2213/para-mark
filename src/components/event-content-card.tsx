"use client";

import Image from "next/image";

interface EventContentCardProps {
  title: string;
  des: string;
  panel: string;
  img: string;
}
export function EventContentCard({
  title,
  des,
  panel,
  img,
}: EventContentCardProps) {
  return (
    <div className="flex flex-col lg:flex-row mb-10 lg:items-end bg-white/80 shadow rounded-2xl overflow-hidden">
      <div className="h-[32rem] max-w-[28rem] w-full shrink-0">
        <Image
          width={768}
          height={768}
          src={img}
          alt="testimonial image"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center p-8 w-full">
        <h6 className="mb-4 text-blue-gray-700 text-lg font-semibold">{panel}</h6>
        <h2 className="mb-4 font-medium text-2xl md:text-3xl text-blue-gray-900">{title}</h2>
        <p className="mb-12 md:w-8/12 font-medium text-gray-500">{des}</p>
      </div>
    </div>
  );
}

export default EventContentCard;
