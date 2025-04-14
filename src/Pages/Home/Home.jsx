import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.avif";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  BookFilled,
  CarFilled,
  CheckCircleFilled,
  CheckCircleOutlined,
  HourglassFilled,
  StarFilled,
} from "@ant-design/icons";
import FeatureCard from "../../Components/Cards/FeatureCard";
import ContactSection from "../ContactUs/ContactSection";
import { data } from "../../data/data";
import ServiceCard from "../../Components/Cards/ServicesCard";

const Home = () => {
  const featureCards = [
    {
      icon: <HourglassFilled />,
      title: "Lifetime support",
      text: "We understand that everyone has a busy schedule. That's why we offer flexible scheduling options to accommodate your individual needs.",
    },
    {
      icon: <CarFilled />,
      title: "Modern Vehicles",
      text: "We understand the demands on your time. Our flexible scheduling options are designed to fit your unique requirements and busy lifestyle.",
    },
    {
      icon: <BookFilled />,
      title: "Performance Feedback",
      text: "We offer various scheduling options to suit your individual needs and availability.",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--secondary-color)] mx-6 my-6 rounded-4xl px-4 md:px-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-20 py-12"
          style={{
            maxWidth: "var(--breakpoint-lg)",
            margin: "0 auto",
          }}
        >
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 items-start">
            <Button variant="dotted">Get Driving Lessons for Skills</Button>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug sm:leading-tight">
              Drive with Freedom, Start Lessons Today.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium">
              Welcome to Asia Driving! <br /> If you’re looking to learn how to
              drive in Japan or convert your foreign license, you’re in the
              right place. Our team is here to guide you every step of the way —
              in your language, at your pace, and with total clarity. Whether
              you’re starting from zero or just need help preparing for the
              written or driving test, we’re here to help you succeed with
              confidence. With us, driving in Japan is possible — and
              easier than you think!
            </p>
            <RouterLink to="/contact-us">
              <Button variant="primary" className="cursor-pointer">
                Book A Free Lesson
              </Button>
            </RouterLink>
          </div>

          {/* Right Image + Testimonials */}
          <div className="flex-1 relative w-full h-auto sm:h-[500px] md:h-[552px]">
            <img
              src={homeDriver}
              alt="Driver"
              className="rounded-xl object-cover w-[450px] h-[450px] mx-auto"
            />

            {/* Top Badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[90%] sm:w-auto bg-white rounded-xl shadow-lg flex items-center gap-3 px-4 py-2 z-10 float-y">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Shirley Parker"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-md">Shirley Parker</p>
                <p className="text-[var(--main-color)] text-sm flex items-center gap-1">
                  <CheckCircleOutlined />
                  Nesting confirmed
                </p>
              </div>
            </div>

            {/* Bottom Review */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-[90%] sm:w-[300px] bg-white rounded-xl shadow-lg p-4 z-10 float-x">
              <p className="text-sm text-gray-500 mb-3">
                “I came to Drive Smart feeling nervous and unsure about getting
                behind the wheel. Thanks to my patient and encouraging
                instructor.”
              </p>
              <div className="flex items-center gap-1 md:gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Jenifer Lopez"
                  className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Jenifer Lopez</p>
                  <p className="text-xs text-gray-500">Driving Student</p>
                </div>
                <div className="ml-auto text-yellow-400 text-xs md:text-xl">
                  {Array(5).fill(<StarFilled />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="bg-white px-5 py-12 md:py-20 flex items-center justify-center"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {featureCards.map((card, index) => (
            <Link key={index} to="/contact-us">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            </Link>
          ))}
        </div>
      </section>
      <section>
        <ContactSection />
      </section>
      <section className="bg-[var(--secondary-color)] py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          {/* Left Side: Grid Image Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Tall Left Image */}
            <img
              src="/about1.avif"
              alt="Woman driving"
              className="sm:col-span-1 h-full sm:h-[500px] object-cover rounded-2xl w-full"
            />

            {/* Right Column: Stats + Image */}
            <div className="sm:col-span-1 flex flex-col gap-4">
              {/* Experience Card */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm text-center p-6 h-[160px] sm:h-[240px] flex flex-col justify-center items-center">
                <h1 className="text-5xl sm:text-7xl font-bold text-[var(--main-color)]">
                  10+
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-600 mt-2 text-center">
                  Years <br /> Experience
                </p>
              </div>

              {/* Bottom Right Image */}
              <img
                src="/about2.avif"
                alt="Instructor with student"
                className="h-[160px] sm:h-[240px] object-cover rounded-2xl w-full"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-4">
              <Button variant={"dotted"}>About Us</Button>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
              Your Trusted Partner <br className="hidden md:block" />
              for Safe Driving.
            </h2>

            <p className="text-gray-500 text-base md:text-lg mb-6 max-w-lg">
              At drive smart, we’re more than just a driving school — we’re your
              trusted partner on the road to safe and confident driving.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Our mission is to empower individuals with the knowledge.",
                "We are dedicated to providing a superior driving experience.",
                "Our team comprises highly experienced and certified instructors.",
                "We recognize that every student learns differently.",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircleFilled className="text-[var(--main-color)] text-lg mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <RouterLink to="/about-us">
              <Button variant="primary" className="cursor-pointer">
                Read More
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-5 items-center">
            <Button variant={"dotted"}>Our Services</Button>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-snug sm:leading-tight">
              Driving lesson Services
            </h1>
            <p className="text-lg text-gray-500">
              We offer a variety of driving lesson packages to fit your schedule
              and budget. <br /> Whether you're a complete beginner or looking
              to refine your existing skills.{" "}
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.map((service) => (
              <RouterLink to={`/services/${service.id}`}>
                <ServiceCard key={data.id} {...service} />
              </RouterLink>
            ))}
          </div>
          <RouterLink to="/services">
            <Button variant="primary" className="cursor-pointer">
              View all services
            </Button>
          </RouterLink>
        </div>
      </section>
    </main>
  );
};

export default Home;
