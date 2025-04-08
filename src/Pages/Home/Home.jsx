import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.avif";
import { Link as RouterLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[var(--secondary-color)] mx-6 my-6 max-h-screen md:h-[700px] flex items-center justify-center px-4 md:px-10 rounded-4xl">
      <div
        className="container flex items-center justify-betwen py-8 w-full gap-20"
        style={{
          paddingLeft: "var(--container-padding)",
          paddingRight: "var(--container-padding)",
          maxWidth: "var(--breakpoint-lg)",
        }}
      >
        <div className="flex flex-col items-start gap-10 justify-center flex-1">
          <Button variant={"dotted"}>Get Driving Lessons for Skills</Button>
          <h1 className="text-7xl font-semibold text-wrap">
            Drive with Freedom, Start Lessons Today.
          </h1>
          <p className="text-gray-500 text-xl text-wrap font-semibold">
            We understand that learning to drive can be both exciting and
            nerve-wracking. Our instructors are not only knowledgeable but also
            patient and understanding. They create a calm and supportive.
          </p>
          <div className="flex items-center justify-between">
            <RouterLink to="/contact-us" className="lg:flex hidden">
              <Button variant={"primary"} className="cursor-pointer">
                Book A Free Lesson
              </Button>
            </RouterLink>
          </div>
        </div>
        <div className="flex-1">
          <img
            src={homeDriver}
            alt=""
            className="rounded-xl w-[463px] h-[552px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
