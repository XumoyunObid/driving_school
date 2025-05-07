import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.webp";
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
import rightImg from "/img1.jpg";
import leftImg from "/img2.jpg";

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
      <section className="bg-[var(--secondary-color)] mx-4 sm:mx-6 my-6 rounded-4xl px-4 md:px-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10 sm:gap-20 py-12"
          style={{
            maxWidth: "var(--breakpoint-lg)",
            margin: "0 auto",
          }}
        >
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-6 sm:gap-8 items-start">
            <Button variant="dotted">Get Driving Lessons for Skills</Button>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug sm:leading-tight">
              Get Your Japanese Driver’s License with Asia Driving
            </h1>
            <h2 className="text-xl md:text-3xl leading-snug text-[var(--main-color)]">
              Driving lessons in English and Spanish for foreigners in Japan
            </h2>
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
                Book A Lesson
              </Button>
            </RouterLink>
          </div>

          {/* Right Image + Testimonials */}
          <div className="flex-1 relative w-full h-auto sm:h-[500px] md:h-[552px]">
            <img
              src={homeDriver}
              alt="Driver"
              className="rounded-xl object-cover w-full max-w-[600px] h-[400px] sm:h-[450px] md:h-[600px] mx-auto"
            />

            {/* Top Badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[90%] sm:w-auto bg-white rounded-xl shadow-lg flex items-center gap-3 px-4 py-2 z-10 float-y">
              <img
                src={rightImg}
                alt="Rami Khoury"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-md">Rami Khoury</p>
                <p className="text-[var(--main-color)] text-sm flex items-center gap-1">
                  <CheckCircleOutlined />
                  Nesting confirmed
                </p>
              </div>
            </div>

            {/* Bottom Review */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-[90%] sm:w-[300px] bg-white rounded-xl shadow-lg p-4 z-10 float-x">
              <p className="text-sm text-gray-500 mb-3">
                “I came to Asia Driving feeling nervous and unsure about getting
                behind the wheel. Thanks to my patient and encouraging
                instructor.”
              </p>
              <div className="flex items-center gap-1 md:gap-3">
                <img
                  src={leftImg}
                  alt="Takumi Sato"
                  className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">Takumi Sato</p>
                  <p className="text-xs text-gray-500">Driving Student</p>
                </div>
                <div className="ml-auto text-yellow-400 text-xs md:text-xl">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarFilled key={i} />
                  ))}
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

      {/* About Section */}
      <section className="bg-[var(--secondary-color)] py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <img
              src="/image3.JPG"
              alt="Woman driving"
              className="sm:col-span-1 h-full sm:h-[500px] object-cover rounded-2xl w-full"
            />
            <div className="sm:col-span-1 flex flex-col gap-4">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm text-center p-6 h-[160px] sm:h-[240px] flex flex-col justify-center items-center">
                <h1 className="text-5xl sm:text-7xl font-bold text-[var(--main-color)]">
                  10+
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-600 mt-2 text-center">
                  Years <br /> Experience
                </p>
              </div>
              <img
                src="/image11.JPEG"
                alt="Instructor with student"
                className="h-[160px] sm:h-[240px] object-cover rounded-2xl w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start">
            <div className="mb-4">
              <Button variant={"dotted"}>About Us</Button>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
              Your Trusted Partner <br className="hidden md:block" /> for Safe
              Driving.
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-6 max-w-lg">
              At Asia Driving, we’ve been helping foreigners get their Japanese
              driver’s license for over 10 years. Our team speaks English,
              Spanish, and Japanese, and we offer personalized driving lessons
              for all experience levels.
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

      {/* Services Section */}
      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-5 items-center text-center">
            <Button variant={"dotted"}>Our Services</Button>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-snug sm:leading-tight">
              Driving lesson Services
            </h1>
            <p className="text-lg text-gray-500">
              We offer a variety of driving lesson packages to fit your schedule
              and budget. <br /> Whether you're a complete beginner or looking
              to refine your existing skills.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 3).map((service) => (
              <RouterLink key={service.id} to={`/services/${service.id}`}>
                <ServiceCard {...service} />
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
      {/* Why Choose Us Section */}
      <section className="bg-[var(--secondary-color)] py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center text-center">
          <Button variant={"dotted"}>Why Choose Us</Button>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            Tailored Support for Foreigners in Japan
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            At Asia Driving, we go beyond just driving lessons. We provide full
            assistance throughout your licensing journey — with cultural
            sensitivity and multilingual support at every step.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left w-full max-w-5xl">
            {[
              "Multilingual Instructors",
              "Tailored Courses for Foreigners",
              "Preparation for Writing and Driving Exam",
              "Full Assistance Throughout the Process",
              "License Conversion Assistance",
              "Flexible Scheduling",
              "Cultural Sensitivity",
              "International Test Preparation",
              "Affordable Packages",
              "Online Booking and Support",
              "Transportation Fee Covered for Distant Students",
              "100% Success Rate",
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3"
              >
                <CheckCircleFilled className="text-[var(--main-color)] mt-1 text-lg" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <ContactSection />
      </section>
    </main>
  );
};

export default Home;
