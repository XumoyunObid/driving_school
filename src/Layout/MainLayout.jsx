import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Helmet } from "react-helmet";

const MainLayout = () => {
  return (
    <div>
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "DrivingSchool",
            "name": "Asia driving school",
            "url": "https://drivinglicense.jp",
            "address": {
        "@type": "PostalAddress",
        "streetAddress": "2270-1 Hiroda",
        "addressLocality": "Konosu",
        "addressRegion": "Saitama",
        "postalCode": "365-0005",
        "addressCountry": "JP"
      },
            "sameAs": []
          }
          `}
        </script>
      </Helmet>

      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
