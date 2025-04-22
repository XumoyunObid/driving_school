import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ServiceCard from "../../Components/Cards/ServicesCard";
import ContactSectionJa from "./../ContactUs/ContactSectionJa";
import { dataJa } from "./../../data/dataJa";

const ServicesJa = () => {
  return (
    <div>
      <div
        className="flex flex-col items-center justify-center gap-10 py-12 px-4 md:px-0"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-center">私たちのサービス</h1>
        <p className="text-gray-500 text-lg md:text-2xl text-center max-w-2xl">
          私たちの包括的なティーンドライバー教育プログラムは、安全で責任ある運転習慣のための
          しっかりとした基礎を築きます。基本的な交通ルールや防衛運転をカバーしています。
        </p>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {dataJa.map((service) => (
            <RouterLink to={`/ja/services/${service.id}`} key={service.id}>
              <ServiceCard {...service} />
            </RouterLink>
          ))}
        </div>
      </div>
      <section>
        <ContactSectionJa />
      </section>
    </div>
  );
};

export default ServicesJa;
