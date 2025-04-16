import React from "react";
import ContactSection from "../ContactUs/ContactSection";
import { data } from "../../data/data";
import { Link as RouterLink } from "react-router-dom";
import ServiceCard from "../../Components/Cards/ServicesCard";

const Services = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-10 py-12"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold">Our Services</h1>
        <p className="text-gray-500 text-lg md:text-2xl text-center">
          Our comprehensive teen driver education program lays a solid
          foundation for safe and responsible driving habits. We cover essential
          road rules, defensive driving.
        </p>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {data.map((service) => (
            <RouterLink to={`/services/${service.id}`}>
              <ServiceCard key={data.id} {...service} />
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
