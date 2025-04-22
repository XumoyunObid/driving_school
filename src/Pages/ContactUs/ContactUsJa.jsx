import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import Button from "../../Components/Buttons/MainButton";

const ContactUsJa = () => {
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

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <section
      className="py-16 px-6 text-center bg-white container mx-auto w-full"
      style={{
        maxWidth: "var(--breakpoint-lg)",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
        安全運転講習へのご参加もご検討ください。高度なテクニックを身につけることで、自信をもって運転できるようになります。
      </p>

      <div className="flex flex-col gap-10 md:flex-row justify-between">
        {/* Location */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <EnvironmentOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">所在地</h3>
          <p className="text-gray-600 text-lg">
            〒365-0005 埼玉県鴻巣市広田2270-1
          </p>
          <p className="text-gray-600 text-lg">アメリカ合衆国</p>
        </div>

        {/* Phone */}
        <div className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <PhoneOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">
            お電話でのお問い合わせ
          </h3>
          <p className="text-gray-600 text-lg">
            <a href="tel:+818030865131">+818030865131</a>
          </p>
          <p className="text-gray-600 text-lg">
            <a href="tel:+818067495131">+818067495131</a>
          </p>
        </div>

        {/* Email */}
        <div className="mb-20 bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <MailOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">メールアドレス</h3>
          <p className="text-gray-600 text-lg">
            <a href="mailto:asiadriving2025@gmail.com">
              asiadriving2025@gmail.com
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
          <h3 className="text-2xl font-semibold mb-4">メッセージを送る</h3>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="名"
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
                  placeholder="姓"
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
                placeholder="メールアドレス"
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
                placeholder="電話番号"
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
                placeholder="メッセージ"
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
              メッセージを送信
            </Button>
          </form>
        </div>
      </div>

      <div className="mt-20 text-left flex flex-col items-center justify-center">
        <Button variant={"dotted"} className="my-5">
          よくある質問
        </Button>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          よくある質問（FAQ）
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10 text-lg">
          こちらでは、教習コース選びに関するよくあるご質問にお答えしています。
        </p>

        <div className="space-y-4 max-w-4xl w-full">
          {[
            {
              question: "運転コースの申し込みに必要な書類は？",
              answer:
                "通常、身分証明書、居住証明書、必要に応じて仮免許証が必要です。",
            },
            {
              question: "複数のレッスンプランはありますか？",
              answer:
                "はい。初心者向けから上級者向けまで、さまざまなプランをご用意しています。",
            },
            {
              question: "自分に合ったプランをカスタマイズできますか？",
              answer:
                "もちろん可能です。ご希望に応じてスケジュールや内容を柔軟に調整できます。",
            },
            {
              question: "1回のレッスン時間はどのくらいですか？",
              answer: "通常、1レッスンは45分～1時間程度です。",
            },
            {
              question: "どのような車を使用していますか？",
              answer:
                "定期的に点検された、二重制御付きの最新車両を使用しています。",
            },
            {
              question: "学生や団体向けの割引はありますか？",
              answer:
                "はい。学生割引や団体割引など、お得なキャンペーンを実施しています。",
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

export default ContactUsJa;
