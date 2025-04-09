import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.avif";
import { Link as RouterLink } from "react-router-dom";
import { CheckCircleOutlined, StarOutlined } from "@ant-design/icons";

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
          <h1 className="text-5xl font-semibold text-wrap">
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
        <div className="flex-1 relative w-full h-full">
          <img
            src={homeDriver}
            alt="Driver"
            className="rounded-xl object-cover w-[463px] h-[552px]"
          />

          <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg flex items-center gap-3 px-4 py-2 z-10 float-y">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Shirley Parker"
              className="w-15 h-15 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-md">Shirley Parker</p>
              <p className="text-[var(--main-color)] text-md flex items-center gap-1">
                <CheckCircleOutlined />
                Nesting confirmed
              </p>
            </div>
          </div>

          <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg p-4 w-[300px] z-10 float-x">
            <p className="text-md mb-3 text-gray-500">
              “I came to drive smart feeling nervous and unsure about getting
              behind the wheel. Thanks to my patient and encouraging”.
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Jenifer Lopez"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">Jenifer Lopez</p>
                <p className="text-xs text-gray-500">Driving Student</p>
              </div>
              <div className="ml-auto text-yellow-400 text-2xl">
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
