import React from "react";
import Button from "../../Components/Buttons/MainButton";
import homeDriver from "/home-driver.webp";
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
import ContactSectionJa from "../ContactUs/ContactSectionJa";
import { dataJa } from "../../data/dataJa";
import ServiceCard from "../../Components/Cards/ServicesCard";
import rightImg from "/img1.jpg";
import leftImg from "/img2.jpg";

const HomeJa = () => {
  const featureCards = [
    {
      icon: <HourglassFilled />,
      title: "生涯サポート",
      text: "忙しいスケジュールにも対応できるよう、柔軟なスケジューリングオプションを提供しています。",
    },
    {
      icon: <CarFilled />,
      title: "最新の車両",
      text: "多忙なライフスタイルに合わせて、柔軟なレッスンプランをご用意しています。",
    },
    {
      icon: <BookFilled />,
      title: "パフォーマンスフィードバック",
      text: "生徒一人ひとりのニーズに合わせたスケジューリングが可能です。",
    },
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-[var(--secondary-color)] mx-4 sm:mx-6 md:mx-8 lg:mx-20 my-6 rounded-4xl px-4 sm:px-6 md:px-8 lg:px-20">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-20 py-12"
          style={{ maxWidth: "var(--breakpoint-lg)", margin: "0 auto" }}
        >
          {/* Left Content */}
          <div className="flex-1 flex flex-col gap-8 items-start">
            <Button variant="dotted">運転スキルのためのレッスン</Button>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug sm:leading-tight">
              アジアドライビングで日本の運転免許を取得しましょう
            </h1>
            <h2 className="text-xl md:text-3xl leading-snug text-[var(--main-color)]">
              外国人のための英語とスペイン語での運転レッスン
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-500 font-medium">
              アジアドライビングへようこそ！
              <br />
              日本での運転を学びたい方や、外国の免許を切り替えたい方を全力でサポートします。言語、スピード、内容すべてあなたに合わせて、合格までの道のりを明確に導きます。初心者でも、筆記試験や実技試験の準備でも、私たちが全力でお手伝いします。
            </p>
            <RouterLink to="/contact-us-ja">
              <Button variant="primary" className="cursor-pointer">
                レッスンを予約する
              </Button>
            </RouterLink>
          </div>

          {/* Right Image + Testimonials */}
          <div className="flex-1 relative w-full h-auto sm:h-[500px] md:h-[552px]">
            <img
              src={homeDriver}
              alt="Driver"
              className="rounded-xl object-cover w-[450px] md:w-[600px] h-[450px] md:h-[600px] mx-auto"
            />
            <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-[90%] sm:w-auto bg-white rounded-xl shadow-lg flex items-center gap-3 px-4 py-2 z-10 float-y">
              <img
                src={rightImg}
                alt="Rami Khoury"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-md">ラミ・クーリー</p>
                <p className="text-[var(--main-color)] text-sm flex items-center gap-1">
                  <CheckCircleOutlined />
                  実績あり
                </p>
              </div>
            </div>

            <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-[90%] sm:w-[300px] bg-white rounded-xl shadow-lg p-4 z-10 float-x">
              <p className="text-sm text-gray-500 mb-3">
                「アジアドライビングに来たときは、運転することに不安と緊張を感じていましたが、忍耐強く励ましてくれたインストラクターのおかげで自信が持てるようになりました。」
              </p>

              <div className="flex items-center gap-1 md:gap-3">
                <img
                  src={leftImg}
                  alt="Takumi Sato"
                  className="w-8 md:w-10 h-8 md:h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm">佐藤 拓海</p>
                  <p className="text-xs text-gray-500">ドライビング生徒</p>
                </div>
                <div className="ml-auto text-yellow-400 text-xs md:text-xl">
                  {Array(5).fill(<StarFilled />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="my-20 text-center px-5">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">コースプラン</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
          宿泊と食事付きのサポートが充実したプランから、予算重視のプランまで、あなたに合ったプランをお選びください。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "プランA",
              duration: "3ヶ月",
              support: ["筆記試験", "実技試験"],
              accommodation: "なし",
              food: "なし",
              price: "¥186,000",
            },
            {
              title: "プランB（1ヶ月）",
              duration: "1ヶ月",
              support: ["筆記試験", "実技試験"],
              accommodation: "なし（希望の場合：¥3,000/日）",
              food: "なし",
              price: "¥250,000",
            },
            {
              title: "プランC（2週間）",
              duration: "2週間",
              support: ["筆記試験", "実技試験"],
              accommodation: "あり",
              food: "あり",
              price: "¥380,000",
            },
          ].map((plan, index) => (
            <RouterLink to={"/ja/contact-us"}>
              <div
                key={index}
                className="bg-[var(--secondary-color)] rounded-2xl p-6 shadow-sm border-1 border-gray-300"
              >
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-lg text-gray-700 mb-2">
                  期間：{plan.duration}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  サポート：{plan.support.join("、")}
                </p>
                <p className="text-lg text-gray-700 mb-2">
                  宿泊：{plan.accommodation}
                </p>
                <p className="text-lg text-gray-700 mb-2">食事：{plan.food}</p>
                <p className="text-xl font-bold text-[var(--main-color)] mb-4">
                  {plan.price}
                </p>
              </div>
            </RouterLink>
          ))}
        </div>
      </div>

      {/* About Section */}
      <section className="bg-[var(--secondary-color)] py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <img
              src="/image3.JPG"
              alt="運転中の女性"
              className="sm:col-span-1 h-full sm:h-[500px] object-cover rounded-2xl w-full"
            />
            <div className="sm:col-span-1 flex flex-col gap-4">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm text-center p-6 h-[160px] sm:h-[240px] flex flex-col justify-center items-center">
                <h1 className="text-5xl sm:text-7xl font-bold text-[var(--main-color)]">
                  10+
                </h1>
                <p className="text-base sm:text-lg font-medium text-gray-600 mt-2 text-center">
                  年以上の <br /> 経験
                </p>
              </div>
              <img
                src="/image11.JPEG"
                alt="教官と生徒"
                className="h-[160px] sm:h-[240px] object-cover rounded-2xl w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-start">
            <div className="mb-4">
              <Button variant={"dotted"}>私たちについて</Button>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold mb-6 leading-tight">
              安心して任せられる <br className="hidden md:block" />
              ドライビングパートナー
            </h2>
            <p className="text-gray-500 text-base md:text-lg mb-6 max-w-lg">
              アジアドライビングでは、10年以上にわたり外国人の免許取得をサポートしています。英語、スペイン語、日本語に対応し、個別指導のレッスンを提供しています。
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "知識を身につけることを使命としています。",
                "優れた運転体験の提供に尽力しています。",
                "経験豊富で有資格の講師が在籍しています。",
                "一人ひとりの学び方に合わせた指導を行っています。",
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
            <RouterLink to="/about-us-ja">
              <Button variant="primary" className="cursor-pointer">
                詳細を見る
              </Button>
            </RouterLink>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="bg-white px-4 sm:px-6 md:px-8 lg:px-20 py-12 md:py-20 flex items-center justify-center"
        style={{ maxWidth: "var(--breakpoint-lg)", margin: "0 auto" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          {featureCards.map((card, index) => (
            <Link key={index} to="/ja/contact-us">
              <FeatureCard
                icon={card.icon}
                title={card.title}
                text={card.text}
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[var(--secondary-color)] py-16 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-5 items-center">
            <Button variant={"dotted"}>サービス一覧</Button>
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold leading-snug sm:leading-tight">
              運転レッスンサービス
            </h1>
            <p className="text-lg text-gray-500 text-center">
              あなたのスケジュールや予算に合わせたレッスンをご用意。 <br />
              初心者から上級者まで幅広く対応します。
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {dataJa.slice(0, 3).map((service) => (
              <RouterLink to={`/ja/services/${service.id}`} key={service.id}>
                <ServiceCard {...service} />
              </RouterLink>
            ))}
          </div>
          <RouterLink to="/services-ja">
            <Button variant="primary" className="cursor-pointer">
              すべてのサービスを見る
            </Button>
          </RouterLink>
        </div>
      </section>

      <section className="py-16 px-4 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center text-center">
          <Button variant={"dotted"}>私たちを選ぶ理由</Button>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            日本に住む外国人のためのサポート
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl">
            Asia Drivingでは、単なる運転レッスンにとどまりません。
            文化的配慮と多言語サポートを通じて、免許取得の全過程をサポートします。
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left w-full max-w-5xl">
            {[
              "多言語対応のインストラクター",
              "外国人向けの特別コース",
              "筆記試験・実技試験の対策",
              "プロセス全体にわたるフルサポート",
              "免許切替のサポート",
              "柔軟なスケジュール対応",
              "文化的配慮のある対応",
              "国際試験の準備サポート",
              "手頃な料金プラン",
              "オンライン予約＆サポート",
              "遠方の方には交通費補助",
              "合格率100%",
            ].map((point, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 shadow-sm flex items-start gap-3"
              >
                <CheckCircleFilled className="text-[var(--main-color)] mt-1 text-lg" />
                <p className="text-gray-700 font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <ContactSectionJa />
      </section>
    </main>
  );
};

export default HomeJa;
