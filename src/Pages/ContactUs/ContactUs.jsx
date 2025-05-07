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
            <a href="tel:+818070527082">+818070527082</a>
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
            <a href="mailto:asiadrivelicense.info@gmail.com">
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
              question: "Can I drive in Japan with my foreign license?",
              answer:
                "Only if your country has a license agreement with Japan and you provide an official translation. In most cases, you will need to exchange it or take exams.",
            },
            {
              question:
                "What do I need to get a Japanese driver’s license from scratch?",
              answer:
                "• Valid residence card • Certificate of residence (Jūminhyō)\n• Vision test\n• Written test (available in some languages)\n• Practical driving test\n• Payment of fees",
            },
            {
              question:
                "What is the license exchange process (Gaimen Kirikae)?",
              answer:
                "It allows you to convert your foreign license to a Japanese one if your country has an agreement with Japan. A practical test may still be required.",
            },
            {
              question:
                "What if my country doesn’t have an agreement with Japan?",
              answer:
                "You must take:\n• A written test\n• A practical test at a driving center\n• Provide proof you lived in your home country at least 3 months after obtaining your license",
            },
            {
              question: "What are the most common types of licenses in Japan?",
              answer:
                "• Class 1 (普通自動車免許): Regular car\n• Motorcycle license (普通二輪免許)\n• Motorized bicycle (Moped) (原付免許, 50cc)\n• Medium/Large truck licenses\n• Class 2 (第二種免許): For taxi and bus drivers",
            },
            {
              question: "In which languages can I take the written test?",
              answer:
                "Available in Japanese, English, Chinese, Portuguese, and a few others depending on the location.",
            },
            {
              question: "How hard is the practical test?",
              answer:
                "It’s very strict. Even experienced drivers often fail. It’s highly recommended to train with a professional instructor.",
            },
            {
              question: "How much does it cost?",
              answer:
                "Getting a license from scratch can cost ¥250,000 to ¥400,000. If you’re exchanging a foreign license, costs are much lower.",
            },
            {
              question:
                "Can I work as a professional driver with a foreign license?",
              answer:
                "No. You must obtain a Japanese Class 2 license (第二種免許) and meet the requirements for age, experience, and visa status.",
            },
            {
              question: "How long does the process take?",
              answer:
                "It varies. A license exchange may take a few weeks. Starting from scratch may take several months, depending on your schedule and training.",
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="bg-[var(--secondary-color)] border border-gray-300 rounded-xl p-8 cursor-pointer"
            >
              <summary className="text-xl font-semibold whitespace-pre-wrap">
                {faq.question}
              </summary>
              <p className="mt-2 text-gray-700 whitespace-pre-wrap">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
