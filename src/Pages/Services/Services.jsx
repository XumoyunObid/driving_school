import React from "react";
import ContactSection from "../ContactUs/ContactSection";
import { data } from "../../data/data";
import { Link as RouterLink } from "react-router-dom";
import ServiceCard from "../../Components/Cards/ServicesCard";

const Services = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-8 py-10 px-4 sm:px-6 md:px-10"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
          Our Services
        </h1>

        <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl">
          Our comprehensive teen driver education program lays a solid
          foundation for safe and responsible driving habits. We cover essential
          road rules, defensive driving.
        </p>

        <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service) => (
            <RouterLink to={`/services/${service.id}`} key={service.id}>
              <ServiceCard {...service} />
            </RouterLink>
          ))}
        </div>
      </div>

      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default Services;
