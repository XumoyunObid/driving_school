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
                123 Fifth Ave, New York, NY 12004. United 9 States
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
                +555-123-4567
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
                info@balancepoint.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[500px]">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form className="w-full">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  // value={formData.firstName}
                  // onChange={handleChange}
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
                  // value={formData.lastName}
                  // onChange={handleChange}
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
                // value={formData.email}
                // onChange={handleChange}
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
                // value={formData.mobile}
                // onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                // value={formData.message}
                // onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <Button
              variant={"primary"}
              type="submit"
              className="cursor-pointer"
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
