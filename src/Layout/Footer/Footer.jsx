import { Link } from "react-router-dom";
const Footer = () => {
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
              <p className="text-sm text-gray-400">DRIVING SCHOOL</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-gray-400 text-md font-semibold mb-4">
            Quick Link
          </h4>
          <ul className="space-y-2 text-white font-medium">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/services"}>Service</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/instructors"}>Instructors</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-400 text-md font-semibold mb-4">
            Contact Info
          </h4>
          <ul className="space-y-2 text-white text-sm">
            <li>123 Fifth Ave, New York, NY 12004, United States</li>
            <li>+555-123-4567</li>
            <li>info@balancepoint.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-800 pt-6 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p>© Copyright 2024, All Rights Reserved by FramerBite</p>
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
