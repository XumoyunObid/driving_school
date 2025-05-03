import React from "react";
import ContactSection from "../ContactUs/ContactSection";
import newsimg from "/news.jpg";

const NewsJa = () => {
  return (
    <div>
      <div className="px-6 py-10 max-w-6xl mx-auto">
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-[var(--main-color)] mb-4">
            ＼オフィススタッフ大募集！／
          </h2>
          <p className="text-lg mb-6">
            「今の生活を変えたい！」そんなあなたにピッタリ！
          </p>

          {/* Flex layout for image and content */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <img
              src={newsimg}
              alt="事務職の求人ポスター"
              className="w-full md:w-1/2 rounded-xl shadow-md"
            />

            <div className="space-y-6 text-gray-800 md:w-1/2">
              <div>
                <h3 className="text-xl font-semibold text-[var(--main-color)]">
                  ◎うれしいポイント◎
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>好きな時間に働けるフレックス制度あり！</li>
                  <li>高時給＋3ヶ月ごとにボーナスあり！</li>
                  <li>雰囲気バツグンの職場♪</li>
                  <li>未経験でも大丈夫！しっかりサポートします！</li>
                  <li>埼玉以外の方も安心！引っ越しお手伝いします！</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[var(--main-color)]">
                  ▼こんな方を求めています！
                </h3>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>やる気のある方</li>
                  <li>責任感のある方</li>
                </ul>
              </div>

              <div>
                <p>
                  <strong>勤務地：</strong>埼玉県（近郊の方は大歓迎）
                </p>
                <p>
                  <strong>履歴書はこちらまで送ってください：</strong>{" "}
                  <span className="text-blue-600 underline">
                    asiadrivelicense.info@gmail.com
                  </span>
                </p>
              </div>

              <p className="font-semibold text-[var(--main-color)] text-lg">
                迷ってるヒマはない！一緒に最高の毎日を始めよう！
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

export default NewsJa;
