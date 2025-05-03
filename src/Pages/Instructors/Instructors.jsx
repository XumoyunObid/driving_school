import React from "react";
import ContactSection from "../ContactUs/ContactSection";
import newsimg from "/news.jpg";

const News = () => {
  return (
    <div>
      <div className="px-6 py-10 max-w-6xl mx-auto">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[var(--main-color)] mb-4">
            Office Staff Wanted!
          </h2>
          <p className="text-lg mb-6">
            Looking for a change in your life? This opportunity is perfect for
            you!
          </p>

          {/* Flex container for image and content */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={newsimg}
              alt="Office job recruitment poster"
              className="w-full md:w-1/2 rounded-xl shadow-md"
            />

            <div className="space-y-6 md:w-1/2">
              <div>
                <h3 className="text-xl font-semibold text-[var(--main-color)]">
                  Benefits:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Flexible working hours (adjustable to your schedule)</li>
                  <li>High hourly wage + bonus every 3 months</li>
                  <li>Friendly and comfortable work environment</li>
                  <li>No experience required — full support and training provided</li>
                  <li>Free moving support for applicants outside Saitama Prefecture</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--main-color)]">
                  Requirements:
                </h3>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Motivated and willing to work</li>
                  <li>Responsible and dependable</li>
                </ul>
              </div>

              <div className="text-gray-700">
                <p>
                  <strong>Location:</strong> Saitama Prefecture (nearby residents welcome)
                </p>
                <p>
                  <strong>Send your resume to:</strong>{" "}
                  <span className="text-blue-600 underline">
                    asiadrivelicense.info@gmail.com
                  </span>
                </p>
              </div>

              <p className="font-semibold text-[var(--main-color)] text-lg">
                Don’t wait! Start your best days with us today!
              </p>
            </div>
          </div>
        </section>
      </div>

      <section>
        <ContactSection />
      </section>
    </div>
  );
};

export default News;
