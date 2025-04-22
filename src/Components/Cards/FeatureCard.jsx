import React from "react";

const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="p-5 rounded-2xl flex flex-col items-start justify-start gap-4 border-[0.5px] cursor-pointer bg-white border-gray-300 hover:bg-[var(--secondary-color)] transition-colors duration-300 h-auto min-h-[250px] md:min-h-[280px]">
      <p className="text-4xl md:text-5xl text-[var(--main-color)]">{icon}</p>
      <h1 className="text-xl md:text-2xl font-bold">{title}</h1>
      <p className="text-gray-500 text-base md:text-lg font-semibold">{text}</p>
    </div>
  );
};

export default FeatureCard;
