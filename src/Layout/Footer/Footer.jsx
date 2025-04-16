import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");

  return (
    <footer className="bg-[#111111] text-white py-12 px-6 lg:px-20 ">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[var(--main-color)] rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-xl font-bold text-white">🛞</span>
            </div>
            <div>
              <h4 className="text-lg font-bold">DRIVER</h4>
              <p className="text-sm text-gray-400">
                {isJapanese ? "自動車学校" : "DRIVING SCHOOL"}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 text-md font-semibold mb-4">
            {isJapanese ? "クイックリンク" : "Quick Link"}
          </h4>
          <ul className="space-y-2 text-white font-medium">
            <li>
              <Link to={isJapanese ? "/ja" : "/"}>
                {isJapanese ? "ホーム" : "Home"}
              </Link>
            </li>
            <li>
              <Link to={isJapanese ? "/ja/about-us" : "/about-us"}>
                {isJapanese ? "私たちに関しては" : "About Us"}
              </Link>
            </li>
            <li>
              <Link to={isJapanese ? "/ja/services" : "/services"}>
                {isJapanese ? "サービス" : "Service"}
              </Link>
            </li>
            <li>
              <Link to={isJapanese ? "/ja/contact-us" : "/contact-us"}>
                {isJapanese ? "お問い合わせ" : "Contact Us"}
              </Link>
            </li>
            <li>
              <Link to={isJapanese ? "/ja/instructors" : "/instructors"}>
                {isJapanese ? "インストラクター" : "Instructors"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 text-md font-semibold mb-4">
            {isJapanese ? "連絡先情報" : "Contact Info"}
          </h4>
          <ul className="space-y-2 text-white text-sm">
            <li>
              {isJapanese
                ? "123 Fifth Ave, ニューヨーク, NY 12004, アメリカ合衆国"
                : "123 Fifth Ave, New York, NY 12004, United States"}
            </li>
            <li>+555-123-4567</li>
            <li>info@balancepoint.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>
          ©{" "}
          {isJapanese
            ? "著作権 2024、による全著作権所有"
            : "Copyright 2024, All Rights Reserved"}
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
          >
            <i className="fab fa-facebook-f text-white"></i>
          </a>
          <a
            href="#"
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded-full"
          >
            <i className="fab fa-twitter text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
