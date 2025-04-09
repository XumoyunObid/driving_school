import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

const ContactUs = () => {
  return (
    <section
      className="py-16 px-6 lg:px-20 text-center bg-white container mx-auto w-full"
      style={{
        paddingLeft: "var(--container-padding)",
        paddingRight: "var(--container-padding)",
        maxWidth: "var(--breakpoint-lg)",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        Consider enrolling in a defensive driving course. These courses can
        provide valuable in-depth training on advanced defensive driving
        techniques.
      </p>

      <div className="grid gap-10 md:grid-cols-3 items-center justify-between">
        {/* Location */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[250px] flex flex-col items-center justify-center">
          <EnvironmentOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Location</h3>
          <p className="text-gray-600 text-lg">
            123 Fifth Ave, New York, NY 12004
          </p>
          <p className="text-gray-600 text-lg">United States</p>
        </div>

        {/* Phone */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[250px] flex flex-col items-center justify-center">
          <PhoneOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Give us a call</h3>
          <p className="text-gray-600 text-lg">+555-123-4567</p>
          <p className="text-gray-600 text-lg">+666-321-4524</p>
        </div>

        {/* Email */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[250px] flex flex-col items-center justify-center">
          <MailOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Email</h3>
          <p className="text-gray-600 text-lg">info@balancepoint.com</p>
          <p className="text-gray-600 text-lg">info@aalancepoint.com</p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
