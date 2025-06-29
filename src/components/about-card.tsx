import React from "react";

interface AboutCardProp {
  title: string;
  subTitle: string;
  description: string;
}

export function AboutCard({ title, description, subTitle }: AboutCardProp) {
  return (
    <div className="h-[453px] p-5 flex flex-col justify-center items-center rounded-2xl bg-gray-900 shadow-lg">
      <div className="mb-4 text-center text-white text-lg font-semibold">{subTitle}</div>
      <div className="text-center text-white text-2xl font-bold mb-2">{title}</div>
      <div className="mt-2 mb-10 text-base w-full lg:w-8/12 text-center font-normal text-white">{description}</div>
      <button className="bg-white text-gray-900 px-4 py-2 rounded shadow hover:bg-gray-200 text-sm font-semibold">view details</button>
    </div>
  );
}

export default AboutCard;
