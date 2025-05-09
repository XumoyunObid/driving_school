import { FacebookFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faLine,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");

  return (
    <footer className="bg-[#111111] text-white py-12 px-6 lg:px-20 ">
      <div className="container mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div>
              <h4 className="text-2xl font-bold text-[var(--main-color)]">
                Asia Driving
              </h4>
              <p className="text-sm text-gray-400">
                {isJapanese ? "学校" : "School"}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 text-md font-semibold mb-4">
            {isJapanese ? "クイックリンク" : "Quick Link"}
          </h4>
          <ul className="space-y-2 text-white font-medium">
            <li className="hover:text-[var(--main-color)] transition-all">
              <Link to={isJapanese ? "/ja" : "/"} className="custom-underline">
                {isJapanese ? "ホーム" : "Home"}
              </Link>
            </li>
            <li className="hover:text-[var(--main-color)] transition-all">
              <Link
                to={isJapanese ? "/ja/about-us" : "/about-us"}
                className="custom-underline"
              >
                {isJapanese ? "私たちに関しては" : "About Us"}
              </Link>
            </li>
            <li className="hover:text-[var(--main-color)] transition-all">
              <Link
                to={isJapanese ? "/ja/services" : "/services"}
                className="custom-underline"
              >
                {isJapanese ? "サービス" : "Service"}
              </Link>
            </li>
            <li className="hover:text-[var(--main-color)] transition-all">
              <Link
                to={isJapanese ? "/ja/contact-us" : "/contact-us"}
                className="custom-underline"
              >
                {isJapanese ? "お問い合わせ" : "Contact Us"}
              </Link>
            </li>
            <li className="hover:text-[var(--main-color)] transition-all">
              <Link
                to={isJapanese ? "/ja/blogs" : "/Blogs"}
                className="custom-underline"
              >
                {isJapanese ? "ブログ" : "Blogs"}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 text-md font-semibold mb-4">
            {isJapanese ? "連絡先情報" : "Contact Info"}
          </h4>
          <ul className="space-y-2 text-white text-sm">
            <li className="transition-all hover:text-[var(--main-color)]">
              <p className="custom-underline">
                {isJapanese
                  ? "〒365-0005 埼玉県鴻巣市広田2270-1"
                  : "2270-1 Hiroda, Konosu, Saitama 365-0005"}
              </p>
            </li>
            <li className="transition-all hover:text-[var(--main-color)]">
              <a href="tel:080-6749-5131" className="custom-underline">
                080-6749-5131
              </a>
            </li>
            <li className="transition-all hover:text-[var(--main-color)]">
              <a
                href="mailto:asiadrivelicense.info@gmail.com"
                className="custom-underline"
              >
                asiadrivelicense.info@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-start gap-4">
          <a
            href="https://www.facebook.com/share/15LLwZ4jMw/?mibextid=wwXIfr"
            target="_blank"
            className="text-[30px] hover:text-[var(--main-color)] transition-all"
          >
            <FacebookFilled />
          </a>
          <a
            href="https://wa.me/818067495131"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[30px]"
          >
            <FontAwesomeIcon
              icon={faSquareWhatsapp}
              className="hover:text-[var(--main-color)] transition-all text-white"
            />
          </a>

          <a href="https://line.me/ti/p/jgPc2YoB4Q" className="text-[30px]">
            <FontAwesomeIcon
              icon={faLine}
              className="text-white hover:text-[var(--main-color)] transition-all "
            />
          </a>
          <a
            href="https://www.instagram.com/saitamadrivingschool"
            target="_blank"
            className="text-[30px]"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white hover:text-[var(--main-color)] transition-all "
            />
          </a>
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
      </div>
    </footer>
  );
};

export default Footer;
