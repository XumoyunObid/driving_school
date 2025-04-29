import React from "react";
import ContactSection from "../ContactUs/ContactSection";
import img from "/image1.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-[var(--secondary-color)] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--main-color)] mb-4">
            About Asia Driving
          </h1>
          <p className="text-lg text-gray-600">
            Empowering you to drive with confidence, clarity, and community.
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          <p>
            At <strong>Asia Driving</strong>, we believe driving is more than
            just a skill — it’s a pathway to freedom, independence, and
            integration. Founded over a decade ago in Japan, our school was born
            from a simple but powerful mission: to help foreign residents obtain
            their driver's license with confidence and clarity.
          </p>

          <p>
            We understand the unique challenges that come with learning to drive
            in a new country — from language barriers to navigating a complex
            licensing system. That’s why our approach is built around **support,
            simplicity, and inclusivity**. From multilingual instruction to
            easy-to-follow materials, our goal is to make every student feel
            understood and empowered from day one.
          </p>

          <p>
            Over the years, we’ve guided thousands of students from all over the
            world toward their driving goals. Behind every success is our
            dedicated team of certified instructors — known not only for their
            expertise, but for their patience, professionalism, and care.
          </p>

          <p>
            Today, <strong>Asia Driving</strong> continues to grow, fueled by
            the same passion that started it all. Whether you’re a complete
            beginner or converting your license, we’re here to provide a
            supportive, personalized experience that meets you where you are.
          </p>

          <p>
            We’re more than a driving school — we’re a community committed to
            helping you thrive on the road and beyond. Welcome to Asia Driving.
            Let’s drive forward, together.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10 my-20 px-4 md:px-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={img}
              alt="Instructor teaching"
              className="rounded-2xl object-cover w-full h-full md:h-[600px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            {/* Section 1: Intro */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                A Passion for Driving Education
              </h1>
              <p className="text-lg text-gray-600">
                Our passion for driver education stems from a genuine desire to
                foster safer communities. We understand that new drivers are
                particularly vulnerable on the road.
              </p>
            </div>

            {/* Section 2: Mission */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[var(--main-color)]">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600">
                We recognize that everyone learns at their own pace. That’s why
                we offer a variety of driving lesson packages tailored to your
                specific needs and goals.
              </p>
            </div>

            {/* Section 3: Vision */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[var(--main-color)]">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600">
                Each instructor undergoes a rigorous training program, ensuring
                they possess not only extensive knowledge of traffic laws and
                safe driving practices but also exceptional communication and
                patience.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
