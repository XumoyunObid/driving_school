import React from "react";
import Button from "../../Components/Buttons/MainButton";
import { EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

const ContactSection = () => {
  return (
    <div className="bg-[var(--secondary-color)] py-20 px-5">
      <div
        className="grid gap-10 md:grid-cols-2 items-center justify-between"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <div className="col-span-1 flex flex-col gap-15 items-start justify-center">
          <Button variant={"dotted"}>Contact Us</Button>
          <h1 className="text-5xl md:text-6xl font-bold">
            Get in touch, we reply in 24 hours.
          </h1>
          <div className="flex flex-col gap-3 items-start justify-center">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold flex gap-2 text-2xl">
                <div className="text-[var(--main-color)]">
                  <EnvironmentFilled />
                </div>{" "}
                Location
              </h2>
              <p className="text-lg text-gray-500 font-semibold ml-8">
                2270-1 Hiroda, Konosu, Saitama 365-0005
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold flex gap-2 text-2xl">
                <div className="text-[var(--main-color)]">
                  <PhoneFilled />
                </div>{" "}
                Give us a call
              </h2>
              <p className="text-lg text-gray-500 font-semibold ml-8">
                <a href="tel:+818070527082">+818070527082</a>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold flex gap-2 text-2xl">
                <div className="text-[var(--main-color)]">
                  <MailFilled />
                </div>{" "}
                Email
              </h2>
              <p className="text-lg text-gray-500 font-semibold ml-8">
                <a href="mailto:asiadrivelicense.info@gmail.com">
                  asiadrivelicense.info@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[500px]">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form className="w-full px-4 md:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg bg-white"
                />
              </div>
            </div>

            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <div className="mb-4">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="Mobile"
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <div className="mb-6">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>

            <Button
              variant="primary"
              type="submit"
              className="w-full md:w-auto cursor-pointer"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
