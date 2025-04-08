import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import Button from "../../Components/Buttons/MainButton";
import NavDrawer from "./../../Components/NavDrawer";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setShow(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div>
      <div
        className="container flex items-center justify-between py-8 mx-auto w-full"
        style={{
          paddingLeft: "var(--container-padding)",
          paddingRight: "var(--container-padding)",
          maxWidth: "var(--breakpoint-lg)",
        }}
      >
        <RouterLink to="/" className="flex items-center">
          <img className="w-[180px]" src={logo} alt="" />
        </RouterLink>

        <ul className="lg:flex items-center gap-6 hidden">
          <li>
            <NavDrawer />
          </li>
          <li className="hover:text-[var(--main-color)] text-md">
            <RouterLink to="about-us" className="text-lg cursor-pointer">
              About Us
            </RouterLink>
          </li>
          <li className="hover:text-[var(--main-color)] text-md">
            <RouterLink to="/services" className="text-lg cursor-pointer">
              Services
            </RouterLink>
          </li>
          <li className="hover:text-[var(--main-color)] text-md">
            <RouterLink to="/contact-us" className="text-lg cursor-pointer">
              Contact Us
            </RouterLink>
          </li>
        </ul>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-lg cursor-pointer hover:text-[var(--main-color)]"
          >
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        <RouterLink to="/contact-us" className="lg:flex hidden">
          <Button variant={"primary"} className="cursor-pointer">
            Book A Free Lesson
          </Button>
        </RouterLink>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4">
          <RouterLink
            to="about-us"
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            About Us
          </RouterLink>
          <RouterLink
            to="/services"
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/contact-us"
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            Contact Us
          </RouterLink>
          <RouterLink
            to="/instructors"
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            Instructors
          </RouterLink>
        </div>
      )}
    </div>
  );
};

export default Header;
