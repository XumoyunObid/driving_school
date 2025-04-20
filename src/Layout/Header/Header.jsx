import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.JPG"; // or wherever it's located
import Button from "../../Components/Buttons/MainButton";
import NavDrawer from "./../../Components/NavDrawer";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [show, setShow] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setShow(false);
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const isJapanese = location.pathname.startsWith("/ja");
    const newPath = isJapanese
      ? location.pathname.replace("/ja", "") || "/"
      : "/ja" + location.pathname;

    navigate(newPath);
  };

  const isJapanese = location.pathname.startsWith("/ja");

  return (
    <div>
      <div
        className="container flex items-center justify-between px-5 py-2 mx-auto w-full"
        style={{
          maxWidth: "var(--breakpoint-lg)",
        }}
      >
        <RouterLink to={isJapanese ? "/ja" : "/"} className="flex items-center">
          <img className="w-[70px]" src={logo} alt="Logo" />
        </RouterLink>

        <ul className="lg:flex items-center gap-6 hidden">
          <li>
            <NavDrawer />
          </li>
          <li className="hover:text-[var(--main-color)] text-md">
            <RouterLink
              to={isJapanese ? "/ja/about-us" : "/about-us"}
              className="text-lg cursor-pointer"
            >
              {isJapanese ? "私たちに関しては" : "About Us"}
            </RouterLink>
          </li>
          <li className="hover:text-[var(--main-color)] text-md">
            <RouterLink
              to={isJapanese ? "/ja/services" : "/services"}
              className="text-lg cursor-pointer"
            >
              {isJapanese ? "サービス" : "Services"}
            </RouterLink>
          </li>
          <li className="hover:text-[var(--main-color)] text-md">
            <RouterLink
              to={isJapanese ? "/ja/contact-us" : "/contact-us"}
              className="text-lg cursor-pointer"
            >
              {isJapanese ? "お問い合わせ" : "Contact Us"}
            </RouterLink>
          </li>
        </ul>

        <Button onClick={toggleLanguage} variant="dotted" className="ml-40">
          {isJapanese ? "English" : "日本語"}
        </Button>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-lg cursor-pointer hover:text-[var(--main-color)]"
          >
            {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
          </button>
        </div>

        <RouterLink
          to={isJapanese ? "/ja/contact-us" : "/contact-us"}
          className="lg:flex hidden"
        >
          <Button variant={"primary"} className="cursor-pointer">
            {isJapanese ? "無料レッスンを予約する" : "Book A Free Lesson"}
          </Button>
        </RouterLink>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center mt-4">
          <RouterLink
            to={isJapanese ? "/ja/about-us" : "/about-us"}
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            {isJapanese ? "私たちに関しては" : "About Us"}
          </RouterLink>
          <RouterLink
            to={isJapanese ? "/ja/services" : "/services"}
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            {isJapanese ? "サービス" : "Services"}
          </RouterLink>
          <RouterLink
            to={isJapanese ? "/ja/contact-us" : "/contact-us"}
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            {isJapanese ? "お問い合わせ" : "Contact Us"}
          </RouterLink>
          <RouterLink
            to={isJapanese ? "/ja/instructors" : "/instructors"}
            className="text-lg cursor-pointer mb-2 hover:text-[var(--main-color)]"
          >
            {isJapanese ? "インストラクター" : "Instructors"}
          </RouterLink>
          <Button
            onClick={toggleLanguage}
            variant="dotted"
            className="mt-2 mb-4"
          >
            {isJapanese ? "English" : "日本語"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Header;
