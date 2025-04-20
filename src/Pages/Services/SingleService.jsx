import React from "react";
import { data } from "../../data/data";
import { useParams } from "react-router-dom";
import ContactSection from "../ContactUs/ContactSection";

const SingleService = () => {
  const { id } = useParams();
  const service = data.find((service) => service.id === parseInt(id));

  if (!service) {
    return <p>Service not found!</p>;
  }

  return (
    <div className="service-details">
      <section className="service-header py-12 text-center">
        <h1 className="text-4xl font-bold">{service.title}</h1>
        <p className="text-lg text-gray-600 mt-4">{service.description}</p>
      </section>

      <section className="service-content py-12 px-6">
        <div className="flex flex-col gap-12 items-center justify-center">
          <div className="service-image">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full md:w-[750px] lg:w-[1000px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
            />
          </div>
          <div className="service-text flex flex-col gap-10 items-center justify-center px-[100px]">
            <h2 className="text-2xl md:text-5xl font-semibold mb-4">Details</h2>
            <p className="text-lg text-gray-600">{service.text}</p>
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default SingleService;
