import React from "react";
import ContactSection from "../ContactUs/ContactSection";
import mainimg from "/aboutmain.avif";
import ContactSectionJa from "../ContactUs/ContactSectionJa";

const AboutUsJa = () => {
  return (
    <div className="bg-[var(--secondary-color)] py-16 px-6 sm:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--main-color)] mb-4">
            アジアドライビングについて
          </h1>
          <p className="text-lg text-gray-600">
            自信・明確さ・コミュニティの中で運転を学ぶ。
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          <p>
            <strong>アジアドライビング</strong>
            では、運転は単なる技術ではなく、自由と自立、そして社会とのつながりを築くための重要なステップだと考えています。10年以上前に日本で設立されて以来、私たちは外国人居住者が自信と明確な理解をもって免許を取得できるようサポートしてきました。
          </p>

          <p>
            異国での運転には、言語の壁や複雑な免許制度といった特有の課題があります。だからこそ、私たちは
            <strong>「サポート・シンプルさ・多様性」</strong>
            を大切にしています。多言語対応の指導や分かりやすい教材を通して、すべての学習者が最初から安心して学べる環境を整えています。
          </p>

          <p>
            これまでに、世界中から来た何千人もの生徒を合格へ導いてきました。その成功の裏には、専門知識と同時に思いやりと忍耐力を兼ね備えた、認定インストラクターたちの努力があります。
          </p>

          <p>
            <strong>アジアドライビング</strong>
            は、創業当初の情熱を胸に、今なお成長を続けています。初めて運転する方も、免許の切り替えを目指す方も、あなたのニーズに寄り添ったサポートをお約束します。
          </p>

          <p>
            私たちは単なる教習所ではなく、道路の上でもその先でも、あなたの人生を後押しする
            <strong>コミュニティ</strong>
            です。アジアドライビングへようこそ。一緒に前進しましょう。
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 my-20 px-4 md:px-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={mainimg}
              alt="インストラクターが指導中"
              className="rounded-2xl object-cover w-full h-full md:h-[600px]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-10">
            {/* Section 1: Intro */}
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-snug">
                運転教育への情熱
              </h1>
              <p className="text-lg text-gray-600">
                私たちの情熱は、安全な地域社会を育むという信念に基づいています。特に初心者ドライバーは危険にさらされやすいため、安心して学べる環境づくりが私たちの使命です。
              </p>
            </div>

            {/* Section 2: Mission */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[var(--main-color)]">
                私たちのミッション
              </h2>
              <p className="text-lg text-gray-600">
                学び方は人それぞれ違います。だからこそ、私たちは多様なニーズに合わせたレッスンプランをご用意し、一人ひとりに合った指導を提供しています。
              </p>
            </div>

            {/* Section 3: Vision */}
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-[var(--main-color)]">
                私たちのビジョン
              </h2>
              <p className="text-lg text-gray-600">
                インストラクターは全員、交通ルールや安全運転の知識だけでなく、優れたコミュニケーション力と忍耐力を備えたプロフェッショナルです。
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20">
          <ContactSectionJa />
        </div>
      </div>
    </div>
  );
};

export default AboutUsJa;
