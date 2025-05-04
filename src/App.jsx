import { Route, Routes, useLocation } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import HomeJa from "./Pages/Home/HomeJa";
import Services from "./Pages/Services/Services";
import ServicesJa from "./Pages/Services/ServicesJa";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ContactUsJa from "./Pages/ContactUs/ContactUsJa";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AboutUsJa from "./Pages/AboutUs/AboutUsJa";
import SingleService from "./Pages/Services/SingleService";
import SingleServiceJa from "./Pages/Services/SingleServiceJa";
import ScrollToTop from "./Components/useScrollToTop";
import ReactGA from "react-ga4";
import { useEffect } from "react";
import News from "./Pages/Instructors/Instructors";
import NewsJa from "./Pages/Instructors/InstructorsJa";
import BlogsEn from "./Pages/Blogs/BogsEn";
import BlogsJa from "./Pages/Blogs/BlogsJa";
import BlogDetail from "./Pages/Blogs/BlogDetail";

const TRACKING_ID = "G-NM8ZJWGY69";
function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* English Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:id" element={<SingleService />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="news" element={<News />} />
          <Route path="blogs" element={<BlogsEn />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
        </Route>

        {/* Japanese Routes */}
        <Route path="/ja" element={<MainLayout />}>
          <Route index element={<HomeJa />} />
          <Route path="services" element={<ServicesJa />} />
          <Route path="services/:id" element={<SingleServiceJa />} />
          <Route path="about-us" element={<AboutUsJa />} />
          <Route path="contact-us" element={<ContactUsJa />} />
          <Route path="news" element={<NewsJa />} />
          <Route path="blogs" element={<BlogsJa />} />
          <Route path="blogs/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
