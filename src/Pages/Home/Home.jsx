import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.avif";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  BookFilled,
  CarFilled,
  CheckCircleOutlined,
  HourglassFilled,
  StarFilled,
} from "@ant-design/icons";
import FeatureCard from "../../Components/Cards/FeatureCard";

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
              We understand that learning to drive can be both exciting and
              nerve-wracking. Our instructors are not only knowledgeable but
              also patient and understanding. They create a calm and supportive
              environment.
            </p>
            <RouterLink to="/contact-us" className="">
              <Button variant="primary">Book A Free Lesson</Button>
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
    </main>
  );
};

export default Home;
