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
          <p className="text-gray-600 text-lg">埼玉県鴻巣市広田2270番地1</p>
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
            <a href="tel:+818070527082">+818070527082</a>
          </p>
        </div>

        {/* Email */}
        <div className="mb-20 bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300 w-[352px] h-[250px] flex flex-col items-center justify-center">
          <MailOutlined className="text-[var(--main-color)] text-3xl mb-4" />
          <h3 className="text-2xl font-semibold mb-2">メールアドレス</h3>
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
          よくある質問
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-10 text-lg">
          ようこそ、FAQセクションへ。最適な教習コースを選ぶことは重要な決断です。以下に、よくあるご質問への回答をご紹介します。
        </p>

        <div className="space-y-4 max-w-4xl w-full">
          {[
            {
              question: "外国の運転免許で日本を運転できますか？",
              answer:
                "日本と運転免許協定がある国の免許であれば、公式な翻訳文を提出することで可能です。ほとんどの場合、免許の切り替えや試験が必要になります。",
            },
            {
              question: "日本で運転免許を新たに取得するには何が必要ですか？",
              answer:
                "• 有効な在留カード\n• 住民票\n• 視力検査\n• 学科試験（言語によっては翻訳あり）\n• 実技試験\n• 各種手数料の支払い",
            },
            {
              question: "運転免許の切り替え（外免切替）とは？",
              answer:
                "外免切替とは、外国の運転免許を日本の免許に変更する手続きです。日本と協定がある国に限り適用され、実技試験が求められる場合もあります。",
            },
            {
              question: "自国が日本と協定を結んでいない場合は？",
              answer:
                "以下が必要です：\n• 学科試験\n• 運転試験場での実技試験\n• 免許取得後、少なくとも3か月以上自国に居住していた証明",
            },
            {
              question: "日本での主な免許の種類は何ですか？",
              answer:
                "• 普通自動車免許（Class 1）\n• 普通二輪免許（バイク）\n• 原付免許（50cc）\n• 中型・大型トラック免許\n• 第二種免許（タクシーやバス運転手用）",
            },
            {
              question: "学科試験はどの言語で受けられますか？",
              answer:
                "日本語、英語、中国語、ポルトガル語など、一部の地域では他の言語にも対応しています。",
            },
            {
              question: "実技試験の難易度はどれくらいですか？",
              answer:
                "非常に厳しく、経験のある運転者でも不合格になることがあります。専門の教官による練習を強くおすすめします。",
            },
            {
              question: "取得にはいくらかかりますか？",
              answer:
                "初めて取得する場合は25万〜40万円ほどかかります。外国免許からの切り替えの場合は、費用はかなり安くなります。",
            },
            {
              question: "外国免許でプロドライバーとして働けますか？",
              answer:
                "いいえ、日本でプロの運転手として働くには、第二種免許の取得と年齢・経験・在留資格などの条件を満たす必要があります。",
            },
            {
              question: "取得にはどのくらいの期間がかかりますか？",
              answer:
                "免許切り替えの場合は数週間、最初から取得する場合はスケジュールや訓練によって数か月かかることがあります。",
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

export default ContactUsJa;
