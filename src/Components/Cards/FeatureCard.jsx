import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="p-5 rounded-2xl flex flex-col items-start justify-start gap-5 border-[0.5px] cursor-pointer bg-white border-gray-300 hover:bg-[var(--secondary-color)] h-[280px]">
      <p className="text-5xl text-[var(--main-color)]">{props.icon}</p>
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <p className="text-gray-500 text-lg font-semibold">{props.text}</p>
    </div>
  );
};

export default FeatureCard;
