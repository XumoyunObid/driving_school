import { Route, Routes } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";
import Home from "./Pages/Home/Home";
import HomeJa from "./Pages/Home/HomeJa";
import Services from "./Pages/Services/Services";
import ServicesJa from "./Pages/Services/ServicesJa";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ContactUsJa from "./Pages/ContactUs/ContactUsJa";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AboutUsJa from "./Pages/AboutUs/AboutUsJa";
import Instructors from "./Pages/Instructors/Instructors";
import InstructorsJa from "./Pages/Instructors/InstructorsJa";
import SingleService from "./Pages/Services/SingleService";
import SingleServiceJa from "./Pages/Services/SingleServiceJa";
import ScrollToTop from "./Components/useScrollToTop";

function App() {
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
          <Route path="instructors" element={<Instructors />} />
        </Route>

        {/* Japanese Routes */}
        <Route path="/ja" element={<MainLayout />}>
          <Route index element={<HomeJa />} />
          <Route path="services" element={<ServicesJa />} />
          <Route path="services/:id" element={<SingleServiceJa />} />
          <Route path="about-us" element={<AboutUsJa />} />
          <Route path="contact-us" element={<ContactUsJa />} />
          <Route path="instructors" element={<InstructorsJa />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
