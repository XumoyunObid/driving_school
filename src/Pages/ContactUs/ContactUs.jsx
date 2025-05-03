import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import Button from "../../Components/Buttons/MainButton";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare form data
    const formDataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      message: formData.message,
    };

    fetch(
      "https://script.google.com/macros/s/AKfycbzWD50TpS5anPdxGopZ0Tu2-LwVSOtpyuAhachUH4LkTpC5IytSPxoMSfvmvzxe18HRqQ/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          mobile: formData.mobile,
          message: formData.message,
        }).toString(),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.result === "success") {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            message: "",
          });
          alert("Your message has been sent successfully!");
        } else {
          alert("There was an error sending your message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error submitting the form.");
      });
  };

  return (
    <section
      className="py-16 px-6 text-center bg-white container mx-auto w-full"
      style={{
        maxWidth: "var(--breakpoint-lg)",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Consider enrolling in a defensive driving course. These courses can
        provide valuable in-depth training on advanced defensive driving
        techniques.
      </p>

      <div className="flex flex-col gap-10 md:flex-row justify-between">
        {/* Location */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <EnvironmentOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600 text-lg">
            2270-1 Hiroda, Konosu, Saitama 365-0005
          </p>
          <p className="text-gray-600 text-lg">Japan</p>
        </div>

        {/* Phone */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <PhoneOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Give us a call</h3>
          <p className="text-gray-600 text-lg">
            <a href="tel:+818067495131">+818067495131</a>
          </p>
          <p className="text-gray-600 text-lg">
            <a href="tel:+818030865131">+818030865131</a>
          </p>
        </div>

        {/* Email */}
        <div className="mb-20 bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <MailOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600 text-lg">
            <a href="mailto:asiadriving2025@gmail.com">
            asiadrivelicense.info@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2 items-center justify-between">
        <div className="col-span-1 bg-[var(--secondary-color)] rounded-2xl shadow-sm border-1 border-gray-300 h-[500px]">
          <MapContainer
            center={[36.107522, 139.512444]}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[36.107522, 139.512444]}>
              <Popup>2270-1 Hiroda, Konosu, Saitama 365-0005, Japan</Popup>
            </Marker>
          </MapContainer>
        </div>

        <div className="col-span-1 bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[500px]">
          <h3 className="text-2xl font-semibold mb-4">Send Us a Message</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  value={formData.lastName}
                  onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <Button
              type="submit"
              variant={"primary"}
              className="cursor-pointer"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
      <div className="mt-20 text-left flex flex-col items-center justify-center">
        <Button variant={"dotted"} className="my-5">
          FAQ
        </Button>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10 text-lg">
          Welcome to the FAQ section. We understand that choosing the right
          driving course is an important decision. Here are answers to some of
          the most common questions.
        </p>

        <div className="space-y-4 max-w-4xl w-full">
          {[
            {
              question:
                "What documents do I need to enroll in a driving course?",
              answer:
                "You'll typically need a government-issued ID, proof of residency, and in some cases, a learner’s permit.",
            },
            {
              question: "Do you offer different driving lesson packages?",
              answer:
                "Yes, we offer a variety of packages suited for beginners, intermediate, and advanced learners.",
            },
            {
              question: "Can I customize a driving lesson package?",
              answer:
                "Absolutely! We allow full customization of driving lesson schedules to fit your personal needs.",
            },
            {
              question: "How long do your driving lessons typically last?",
              answer:
                "Each lesson typically lasts between 45 minutes to an hour.",
            },
            {
              question: "What type of vehicles do you use for driving lessons?",
              answer:
                "We use dual-control, modern vehicles that are regularly maintained for safety.",
            },
            {
              question: "Do you offer discounts for students or groups?",
              answer:
                "Yes! We have seasonal discounts, and we offer special rates for students and group bookings.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="bg-[var(--secondary-color)] border border-gray-300 rounded-xl p-8 cursor-pointer"
            >
              <summary className="text-xl font-semibold">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
