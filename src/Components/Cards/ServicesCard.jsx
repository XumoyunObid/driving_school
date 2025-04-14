import React from "react";

const ServiceCard = ({ id, title, description, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group h-[520px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute top-4 left-4 bg-white text-[var(--main-color)] font-bold text-lg px-5 py-4 rounded-md shadow">
        {id < 10 ? `0${id}` : id}
      </div>

      <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/100 to-transparent text-white">
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-lg leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
