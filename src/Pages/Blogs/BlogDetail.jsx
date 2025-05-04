import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

// Combined data for English and Japanese posts
const posts = {
  en: [
    {
      id: "license-guide",
      title:
        "How to Get a Japanese Driver’s License for Foreigners – Saitama Edition",
      image: "/image6.jpeg",
      alt: "Foreigners converting license in Japan",
      content: [
        `Obtaining a Japanese driver's license as a foreigner can feel overwhelming. In Saitama, dedicated driving schools offer support for license conversion (外国免許切替).`,
        `**Step 1: Document Preparation** – Gather your valid foreign license, passport, residence card, and translation certificate from JAF or authorized translator.`,
        `**Step 2: Written Test** – Most schools provide bilingual study materials. Focus on road signs and local traffic rules.`,
        `**Step 3: Practical Lessons** – Take driving lessons in AT or MT vehicles. Instructors will guide you through local road conditions and test routes.`,
        `**Step 4: Final Exams** – Pass both the practical exam at the licensing center and the final classroom session.`,
        `With proper preparation and support from Saitama driving schools, you can smoothly convert your license and hit the road confidently!`,
      ],
    },
    {
      id: "at-vs-mt",
      title: "AT vs. MT License: Which One Should You Choose in Japan?",
      image: "/image1.jpeg",
      alt: "AT vs MT driving license in Japan",
      content: [
        `In Japan, you choose between Automatic Transmission (AT) and Manual Transmission (MT) licenses.`,
        `**AT License** – Easier lessons, shorter course, recommended for city driving and beginners.`,
        `**MT License** – Allows driving both manual and automatic cars; ideal if you plan to rent varied vehicles.`,
        `Consider your future needs: if you want flexibility, invest extra time for MT; otherwise AT is efficient.`,
      ],
    },
    {
      id: "driving-school",
      title: "5 Tips for Choosing the Best Driving School in Saitama",
      image: "/service4.webp",
      alt: "Choosing a driving school in Saitama",
      content: [
        `Selecting the right driving school makes all the difference. Here are 5 tips for Saitama:`,
        `1. Multilingual Instructors – Support in English, Chinese, or other languages.`,
        `2. Flexible Scheduling – Evening/weekend classes to fit your timetable.`,
        `3. Reputation – Read online reviews and ask for alumni feedback.`,
        `4. Vehicle Types – Ensure they offer both AT and MT cars.`,
        `5. Pricing & Bonuses – Look for transparent pricing and periodic discounts.`,
      ],
    },
    {
      id: "cost-guide",
      title:
        "Complete Guide to Cost, Duration & Steps for Getting a Driver’s License in Japan",
      image: "/service2.avif",
      alt: "Cost and steps to get a license in Japan",
      content: [
        `Wondering about cost and duration? Typical Saitama driving school fees range from ¥200,000 to ¥300,000 for AT courses.`,
        `**Duration** – 2 to 3 months on average, depending on lesson frequency.`,
        `**Steps**: 1) Enrollment & Eye Test, 2) Classroom Lectures, 3) Practical Lessons, 4) Mock Exams, 5) Final Practical & Written Exams.`,
        `Budget for extra fees: license center fees (~¥5,000) and translation service (~¥3,000).`,
      ],
    },
  ],
  ja: [
    {
      id: "license-guide",
      title: "外国人のための日本の運転免許取得ガイド（埼玉対応）",
      image: "/image6.jpeg",
      alt: "外国人の日本免許切替",
      content: [
        `外国人が日本の運転免許を取得するのは簡単ではありません。埼玉県内の教習所では外国免許切替をサポートしています。`,
        `**ステップ1：書類準備** – 外国免許、パスポート、在留カード、JAF翻訳証明書を用意。`,
        `**ステップ2：学科試験** – 教習所が提供する日本語／英語の教材で勉強。標識と交通ルールが重要。`,
        `**ステップ3：実技教習** – ATまたはMT車で練習。試験コースや地元の道路状況に慣れるまで指導。`,
        `**ステップ4：卒業検定** – 運転免許センターでの実技試験と最後の教習修了。`,
        `これらのステップを踏めば、埼玉でスムーズに免許切替が完了します！`,
      ],
    },
    {
      id: "at-vs-mt",
      title: "AT（オートマ）とMT（マニュアル）の違い：どちらの免許を選ぶべき？",
      image: "/image1.jpeg",
      alt: "ATとMT免許の違い",
      content: [
        `日本ではAT免許とMT免許の2種類があります。`,
        `**AT免許** – 短期間で取得でき、市街地運転に最適。`,
        `**MT免許** – すべての車種を運転可能。将来の選択肢を広げたい人向け。`,
        `自分のライフスタイルに合わせて選びましょう。`,
      ],
    },
    {
      id: "driving-school",
      title: "埼玉で人気の自動車教習所を選ぶ5つのポイント",
      image: "/service4.webp",
      alt: "埼玉の教習所の選び方",
      content: [
        `教習所選びは免許取得の要です。埼玉で押さえる5つのポイント：`,
        `1. 多言語インストラクター – 英語、中国語対応の有無。`,
        `2. 柔軟なスケジュール – 仕事帰りや週末に受講可能か。`,
        `3. 口コミ・評判 – 卒業生の声をチェック。`,
        `4. 車種ラインナップ – AT／MT両方対応か。`,
        `5. 価格透明性 – 追加費用がないか確認。`,
      ],
    },
    {
      id: "cost-guide",
      title: "日本の運転免許取得にかかる費用・期間・ステップ【完全ガイド】",
      image: "/service2.avif",
      alt: "日本の免許取得にかかる費用",
      content: [
        `埼玉のATコース費用は約20万～30万円が相場です。`,
        `**期間** – 週数回の教習で2～3ヶ月程度。`,
        `**流れ**：1) 入校・視力検査 2) 学科講習 3) 実技教習 4) 卒業検定 5) 免許センター試験。`,
        `追加費用：センター手数料（約5,000円）、翻訳料（約3,000円）を想定。`,
      ],
    },
  ],
};

const BlogDetail = () => {
  const { id } = useParams();
  const lang = window.location.pathname.startsWith("/ja") ? "ja" : "en";
  const post = posts[lang].find((p) => p.id === id);
  if (!post) return <p className="p-6">Post not found.</p>;

  // Generate SEO-friendly meta tags
  const keywords = [
    "driving school",
    "運転免許",
    "license",
    "日本の運転免許",
    "Saitama driving school",
    "AT免許",
    "MT免許",
    "免許取得",
    "外国免許",
    "免許切替",
    "運転免許試験",
    "日本の教習所",
    "運転レッスン",
  ];

  return (
    <div className="px-6 py-10 max-w-4xl mx-auto text-gray-800">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.content[0]} />
        <meta name="keywords" content={keywords.join(", ")} />
      </Helmet>
      <h1 className="text-3xl font-bold text-[var(--main-color)] mb-4">
        {post.title}
      </h1>
      <img src={post.image} alt={post.alt} className="w-full rounded-lg mb-6" />
      <div className="prose prose-lg">
        {post.content.map((line, i) => (
          <p key={i} className="text-lg">{line}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
