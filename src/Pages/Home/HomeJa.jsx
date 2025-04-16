import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.avif";
import { Link, Link as RouterLink } from "react-router-dom";
import {
  BookFilled,
  CarFilled,
  CheckCircleFilled,
  CheckCircleOutlined,
  HourglassFilled,
  StarFilled,
} from "@ant-design/icons";
import FeatureCard from "../../Components/Cards/FeatureCard";
import { data } from "../../data/data";
import ServiceCard from "../../Components/Cards/ServicesCard";
import ContactSectionJa from "../ContactUs/ContactSectionJa";

const HomeJa = () => {
  const featureCards = [
    {
      icon: <HourglassFilled />,
      title: "生涯サポート",
      text: "忙しいスケジュールを理解しているため、個々のニーズに合わせた柔軟なスケジュールオプションを提供します。",
    },
    {
      icon: <CarFilled />,
      title: "最新の車両",
      text: "時間の制約を理解しているため、独自のニーズや忙しいライフスタイルに合わせた柔軟なスケジュールオプションを提供します。",
    },
    {
      icon: <BookFilled />,
      title: "パフォーマンスフィードバック",
      text: "個々のニーズと空き時間に合わせたスケジュールオプションを提供します。",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--secondary-color)] mx-6 my-6 rounded-4xl px-4 md:px-10">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-20 py-12"
          style={{
            maxWidth: "var(--breakpoint-lg)",
            margin: "0 auto",
          }}
        >
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 items-start">
            <Button variant="dotted">
              スキルのための運転レッスンを受けよう
            </Button>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug sm:leading-tight">
              アジアドライビングで日本の運転免許を取得
            </h1>
            <h2 className="text-xl md:text-3xl leading-snug text-[var(--main-color)]">
              日本にいる外国人向けの英語とスペイン語での運転レッスン
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium">
              アジアドライビングへようこそ！ <br />
              日本で運転を学びたい、または外国免許を切り替えたいと考えているなら、ここが正しい場所です。
              私たちのチームは、あなたのペースで、わかりやすく、あなたの言語でサポートします。
              ゼロから始める方や、筆記試験や実技試験の準備をしたい方も、私たちが自信を持ってサポートします。
              日本で運転することは、私たちと一緒なら思っているよりも簡単です！
            </p>
            <RouterLink to="/contact-us">
              <Button variant="primary" className="cursor-pointer">
                無料レッスンを予約する
              </Button>
            </RouterLink>
          </div>

          {/* Right Image + Testimonials */}
          <div className="flex-1 relative w-full h-auto sm:h-[500px] md:h-[552px]">
            <img
              src={homeDriver}
              alt="Driver"
              className="rounded-xl object-cover w-[450px]  md:w-[600px] h-[450px] md:h-[600px] mx-auto"
            />

            {/* Top Badge */}
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[90%] sm:w-auto bg-white rounded-xl shadow-lg flex items-center gap-3 px-4 py-2 z-10 float-y">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Shirley Parker"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-md">シャーリー・パーカー</p>
                <p className="text-[var(--main-color)] text-sm flex items-center gap-1">
                  <CheckCircleOutlined />
                  巣作り確認済み
                </p>
              </div>
            </div>

            {/* Bottom Review */}
            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-[90%] sm:w-[300px] bg-white rounded-xl shadow-lg p-4 z-10 float-x">
              <p className="text-sm text-gray-500 mb-3">
                “私は運転するのが不安で、車に乗ることに自信がありませんでしたが、忍耐強く励ましてくれるインストラクターのおかげで安心できました。”
              </p>
              <div className="flex items-center gap-1 md:gap-3">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Jenifer Lopez"
                  className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">ジェニファー・ロペス</p>
                  <p className="text-xs text-gray-500">運転生徒</p>
                </div>
                <div className="ml-auto text-yellow-400 text-xs md:text-xl">
                  {Array(5).fill(<StarFilled />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="bg-white px-5 py-12 md:py-20 flex items-center justify-center"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {featureCards.map((card, index) => (
            <Link key={index} to="/contact-us">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            </Link>
          ))}
        </div>
      </section>
      <section className="bg-[var(--secondary-color)] py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          {/* Left Side: Grid Image Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {/* Tall Left Image */}
            <img
              src="/about1.avif"
              alt="Woman driving"
              className="sm:col-span-1 h-full sm:h-[500px] object-cover rounded-2xl w-full"
            />

            {/* Right Column: Stats + Image */}
            <div className="sm:col-span-1 flex flex-col gap-4">
              {/* Experience Card */}
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm text-center p-6 h-[160px] sm:h-[240px] flex flex-col justify-center items-center">
                <h1 className="text-5xl sm:text-7xl font-bold text-[var(--main-color)]">
                  10+
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-600 mt-2 text-center">
                  年間の経験
                </p>
              </div>

              {/* Bottom Right Image */}
              <img
                src="/about2.avif"
                alt="Instructor with student"
                className="h-[160px] sm:h-[240px] object-cover rounded-2xl w-full"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-4">
              <Button variant={"dotted"}>私たちについて</Button>
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
              安全運転の信頼できるパートナー
            </h2>

            <p className="text-gray-500 text-base md:text-lg mb-6 max-w-lg">
              アジアドライビングでは、10年以上にわたり外国人の日本での運転免許取得をサポートしてきました。私たちのチームは英語、スペイン語、日本語を話し、すべての経験レベルに合わせた個別の運転レッスンを提供しています。
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "私たちの使命は、個々の知識を提供することです。",
                "優れた運転体験を提供することに尽力しています。",
                "私たちのチームは経験豊富で認定されたインストラクターで構成されています。",
                "すべての学生が異なる方法で学ぶことを認識しています。",
              ].map((text, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <CheckCircleFilled className="text-[var(--main-color)] text-lg mt-1" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <RouterLink to="/about-us">
              <Button variant="primary" className="cursor-pointer">
                詳しく見る
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-5 items-center">
            <Button variant={"dotted"}>サービス</Button>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-snug sm:leading-tight">
              運転レッスンサービス
            </h1>
            <p className="text-lg text-gray-500">
              私たちは、あなたのスケジュールと予算に合わせたさまざまな運転レッスンパッケージを提供します。{" "}
              <br /> 初心者の方から既存のスキルを磨きたい方まで対応しています。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.slice(0, 3).map((service) => (
              <RouterLink to={`/services/${service.id}`} key={service.id}>
                <ServiceCard {...service} />
              </RouterLink>
            ))}
          </div>

          <RouterLink to="/services">
            <Button variant="primary" className="cursor-pointer">
              すべてのサービスを見る
            </Button>
          </RouterLink>
        </div>
      </section>
      <section>
        <ContactSectionJa />
      </section>
    </main>
  );
};

export default HomeJa;
