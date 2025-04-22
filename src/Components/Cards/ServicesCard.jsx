import React from "react";

const ServiceCard = ({ id, title, description, image }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md group h-[450px] md:h-[520px]">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />

      <div className="absolute top-4 left-4 bg-white text-[var(--main-color)] font-bold text-base md:text-lg px-4 py-2 md:px-5 md:py-3 rounded-md shadow">
        {id < 10 ? `0${id}` : id}
      </div>

      <div className="absolute bottom-0 w-full p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
        <h3 className="text-lg md:text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm md:text-lg leading-snug md:leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
