import React, { useState, useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.JPG";
import Button from "../../Components/Buttons/MainButton";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => setIsMenuOpen(false), [location]);

  const toggleMenu = () => setIsMenuOpen((o) => !o);

  const toggleLanguage = () => {
    const isJa = location.pathname.startsWith("/ja");
    const newPath = isJa
      ? location.pathname.replace(/^\/ja/, "") || "/"
      : "/ja" + location.pathname;
    navigate(newPath);
  };

  const isJapanese = location.pathname.startsWith("/ja");

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <RouterLink to={isJapanese ? "/ja" : "/"} className="flex items-center">
          <img src={logo} alt="Logo" className="w-16" />
        </RouterLink>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <RouterLink
            to={isJapanese ? "/ja/about-us" : "/about-us"}
            className="hover:text-[var(--main-color)]"
          >
            {isJapanese ? "私たちに関しては" : "About Us"}
          </RouterLink>
          <RouterLink
            to={isJapanese ? "/ja/services" : "/services"}
            className="hover:text-[var(--main-color)]"
          >
            {isJapanese ? "サービス" : "Services"}
          </RouterLink>
          <RouterLink
            to={isJapanese ? "/ja/blogs" : "/blogs"}
            className="hover:text-[var(--main-color)]"
          >
            {isJapanese ? "ブログ" : "Blogs"}
          </RouterLink>
          <RouterLink
            to={isJapanese ? "/ja/contact-us" : "/contact-us"}
            className="hover:text-[var(--main-color)]"
          >
            {isJapanese ? "お問い合わせ" : "Contact Us"}
          </RouterLink>

          {/* language toggle lives in the same list */}
          <Button
            onClick={toggleLanguage}
            className="hover:text-[var(--main-color)]"
            variant={"dotted"}
          >
            {isJapanese ? "English" : "日本語"}
          </Button>

          {/* primary CTA */}
          <RouterLink to={isJapanese ? "/ja/contact-us" : "/contact-us"}>
            <Button variant="primary">
              {isJapanese ? "レッスンを予約する" : "Book A Lesson"}
            </Button>
          </RouterLink>
        </nav>

        {/* mobile hamburger */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>

      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4">
          {[
            {
              to: "/about-us",
              label: isJapanese ? "私たちに関しては" : "About Us",
            },
            { to: "/services", label: isJapanese ? "サービス" : "Services" },
            { to: "/blogs", label: isJapanese ? "ブログ" : "Blogs" },
            {
              to: "/contact-us",
              label: isJapanese ? "お問い合わせ" : "Contact Us",
            },
            { to: "/news", label: isJapanese ? "インストラクター" : "News" },
          ].map(({ to, label }) => (
            <RouterLink
              key={to}
              to={isJapanese ? "/ja" + to : to}
              className="block px-5 py-2 hover:bg-gray-100"
            >
              {label}
            </RouterLink>
          ))}

          <Button
            onClick={toggleLanguage}
            className="block text-left px-5 py-2 hover:bg-gray-100 ml-2"
            variant={"dotted"}
          >
            {isJapanese ? "English" : "日本語"}
          </Button>

          <RouterLink
            to={isJapanese ? "/ja/contact-us" : "/contact-us"}
            className="block px-5 py-3 mt-2"
          >
            <Button variant="primary" className="w-full">
              {isJapanese ? "レッスンを予約する" : "Book A Lesson"}
            </Button>
          </RouterLink>
        </div>
      )}
    </header>
  );
};

export default Header;
