import React from "react";
import { Link as RouterLink } from "react-router-dom";
import ServiceCard from "../../Components/Cards/ServicesCard";
import ContactSectionJa from "../ContactUs/ContactSectionJa";
import { dataJa } from "../../data/dataJa";

const ServicesJa = () => {
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
          私たちのサービス
        </h1>

        <p className="text-gray-500 text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-3xl">
          私たちの包括的なティーンドライバー教育プログラムは、安全で責任ある運転習慣のための
          しっかりとした基礎を築きます。基本的な交通ルールや防衛運転をカバーしています。
        </p>

        <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
