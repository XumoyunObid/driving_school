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
        `Obtaining a Japanese driver's license as a foreigner can feel overwhelming, especially if you're new to the country and unfamiliar with the system. In Saitama, however, there are dedicated driving schools that specialize in helping non-Japanese residents with the license conversion process (外国免許切替). These schools offer guidance in English and other languages, making the experience smoother and less stressful.`,
        `**Step 1: Document Preparation** – To begin the process, gather essential documents such as your valid foreign driver's license, passport, residence card (在留カード), and a certified translation of your license from JAF (Japan Automobile Federation) or an authorized translation agency. These are mandatory for submitting your application at the licensing center. Be sure to double-check expiration dates and make copies of all documents.`,
        `**Step 2: Written Test** – The written exam focuses on Japanese traffic rules and signage. Many Saitama driving schools provide bilingual textbooks, practice quizzes, and mock exams to prepare students. Be sure to study the shapes and meanings of road signs and understand local safety laws. Keywords to focus on include "road signs in Japan," "bilingual driving exam," and "Japanese traffic rules."`,
        `**Step 3: Practical Lessons** – After passing the written test, enroll in driving lessons using Automatic Transmission (AT) or Manual Transmission (MT) vehicles. Instructors guide students through local roads, simulated test routes, and specific scenarios like hill starts or emergency braking. These lessons build your confidence in handling real traffic in Japan.`,
        `**Step 4: Final Exams** – At the end of your training, you'll take the official practical driving exam at the prefectural licensing center. You'll also attend a final classroom session covering safety procedures. With proper preparation and support from Saitama driving schools, you can smoothly convert your license and hit the road confidently!`,
      ],
    },
    {
      id: "at-vs-mt",
      title: "AT vs. MT License: Which One Should You Choose in Japan?",
      image: "/image9.JPEG",
      alt: "AT vs MT driving license in Japan",
      content: [
        `In Japan, you choose between two types of driving licenses: Automatic Transmission (AT) and Manual Transmission (MT). Each has pros and cons depending on your lifestyle, driving goals, and future plans.`,
        `**AT License** – Easier to obtain, requiring fewer lessons and a shorter course. It's ideal for beginners, people who only plan to drive in urban areas, or those who want to get a license quickly. Most rental and city cars in Japan are automatic, so this license covers common use cases.`,
        `**MT License** – More comprehensive and versatile. An MT license allows you to drive both manual and automatic cars, giving you greater flexibility. It’s useful if you expect to drive in rural areas, work in logistics or delivery, or plan to rent a car abroad where manuals are more common.`,
        `**Conclusion** – If you want convenience and speed, go for AT. If you seek versatility and future-proofing your options, invest in the MT course. Driving schools in Saitama offer both courses with experienced instructors and flexible scheduling.`,
      ],
    },
    {
      id: "driving-school",
      title: "5 Tips for Choosing the Best Driving School in Saitama",
      image: "/image10.JPEG",
      alt: "Choosing a driving school in Saitama",
      content: [
        `Choosing the right driving school is key to getting your Japanese license efficiently and confidently. Saitama has several options, but it's important to compare them before enrolling.`,
        `1. **Multilingual Instructors** – Look for schools with instructors who speak English, Chinese, or other languages. Clear communication helps you learn better and faster.`,
        `2. **Flexible Scheduling** – Find a school that offers classes during evenings, weekends, or holidays. This flexibility is essential for working professionals and students.`,
        `3. **Reputation & Reviews** – Check online reviews on Google Maps or social media, and ask for feedback from previous students. A school with a solid reputation is more likely to provide quality instruction.`,
        `4. **Vehicle Options** – Ensure the school provides both AT and MT cars. This lets you choose the type of license that suits your needs.`,
        `5. **Transparent Pricing** – Watch out for hidden costs. Compare fees, ask about retake charges, and look for seasonal promotions or referral bonuses.`,
        `By considering these factors, you’ll find a reliable driving school in Saitama that fits your goals, budget, and schedule.`,
      ],
    },
    {
      id: "cost-guide",
      title:
        "Complete Guide to Cost, Duration & Steps for Getting a Driver’s License in Japan",
      image: "/image5.jpeg",
      alt: "Cost and steps to get a license in Japan",
      content: [
        `Are you wondering how much it costs to get a Japanese driver's license and how long the process takes? Here's a complete guide for those planning to attend driving school in Saitama.`,
        `**Typical Cost** – The price for an Automatic Transmission (AT) license course ranges from ¥200,000 to ¥300,000. Manual Transmission (MT) courses may be slightly more expensive. This cost usually includes enrollment, lessons, exams, and materials.`,
        `**Average Duration** – Most students complete the process in 2 to 3 months, depending on lesson frequency and personal schedule. Intensive courses may shorten this period, but flexibility is key.`,
        `**Steps Involved**:
        1) Eye test and school registration
        2) Classroom lectures on traffic laws
        3) Practical driving lessons
        4) Internal mock tests
        5) Final written and practical exams at the licensing center`,
        `**Additional Expenses** – Budget extra for translation services (~¥3,000) and licensing center fees (~¥5,000). Some students also pay for extra practice lessons or retakes.`,
        `Driving schools in Saitama often run promotions and payment plans, so shop around to find the best value. With preparation and persistence, you’ll earn your Japanese license and drive confidently in no time.`,
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
        `外国人が日本で運転免許を取得するのは、特に制度や手順に慣れていない場合には大変に感じられるかもしれません。しかし、埼玉県内には外国人向けに特化した教習所があり、英語など多言語に対応して丁寧にサポートしてくれるため、スムーズに進められます。`,
        `**ステップ1：書類準備** – 有効な外国免許証、パスポート、在留カード（レジデンスカード）、およびJAFまたは認定翻訳業者による免許証の翻訳証明書を準備します。これらは運転免許センターでの手続きに必要不可欠です。`,
        `**ステップ2：学科試験** – 日本の交通ルールや標識に関する基礎知識が問われます。埼玉の教習所では、日本語と英語のテキストや模擬試験を提供しており、効率的に学習できます。特に道路標識と優先ルールの理解が重要です。`,
        `**ステップ3：実技教習** – 学科試験合格後、ATまたはMT車での運転練習が始まります。インストラクターが地元の道路や試験コースに沿って丁寧に指導し、急ブレーキや坂道発進といった実践的な運転スキルを身につけることができます。`,
        `**ステップ4：卒業検定** – 教習が完了すると、運転免許センターで実技試験を受けます。また、交通安全に関する最終講習も実施されます。埼玉の教習所のサポートを受ければ、自信を持って免許取得に臨めます。`,
      ],
    },
    {
      id: "at-vs-mt",
      title: "AT（オートマ）とMT（マニュアル）の違い：どちらの免許を選ぶべき？",
      image: "/image9.JPEG",
      alt: "ATとMT免許の違い",
      content: [
        `日本で運転免許を取得する際には、AT（オートマ）とMT（マニュアル）の2種類から選ぶ必要があります。それぞれの特徴を理解して、自分に合ったものを選びましょう。`,
        `**AT免許** – 操作が簡単で、取得までの期間が短くて済みます。市街地での運転や初心者に向いており、通勤や買い物などの日常使いにも最適です。`,
        `**MT免許** – マニュアル車とオートマ車の両方を運転できます。将来的に地方での運転や、物流関係の仕事、海外での運転を考えている方にはMTがおすすめです。`,
        `**まとめ** – 都会での生活や手軽さを重視するならAT、運転スキルの幅を広げたいならMTを選びましょう。埼玉の教習所ではどちらにも対応しています。`,
      ],
    },
    {
      id: "driving-school",
      title: "埼玉で人気の自動車教習所を選ぶ5つのポイント",
      image: "/image10.JPEG",
      alt: "埼玉の教習所の選び方",
      content: [
        `教習所の選び方は、免許取得の成否を大きく左右します。埼玉で信頼できる教習所を選ぶための5つのポイントをご紹介します。`,
        `1. **多言語インストラクター** – 英語や中国語に対応している教習所を選べば、安心して学べます。`,
        `2. **柔軟なスケジュール** – 夜間や週末に授業が受けられるか確認しましょう。忙しい人には重要なポイントです。`,
        `3. **口コミ・評判** – GoogleレビューやSNSでの評判をチェックし、卒業生の声を参考にするのがおすすめです。`,
        `4. **車種ラインナップ** – ATとMTの両方を提供しているかどうか確認してください。選択肢が広がります。`,
        `5. **価格透明性** – コース料金に含まれる内容や、追加費用の有無を事前に確認しましょう。特典やキャンペーン情報も要チェックです。`,
      ],
    },
    {
      id: "cost-guide",
      title: "日本の運転免許取得にかかる費用・期間・ステップ【完全ガイド】",
      image: "/image5.jpeg",
      alt: "日本の免許取得にかかる費用",
      content: [
        `日本の運転免許を取得するには、費用や期間、必要な手続きについてあらかじめ理解しておくことが大切です。ここでは、埼玉で教習所に通う場合の一般的な流れをご紹介します。`,
        `**費用の目安** – ATコースは約20万～30万円、MTコースは若干高めです。この費用には教習料、教材、試験料などが含まれます。`,
        `**期間の目安** – 通常、2～3ヶ月で免許取得が可能です。集中コースを利用すれば、より短期間での取得も可能です。`,
        `**取得までのステップ**：
        1) 入校・視力検査
        2) 学科講習（交通ルール・安全知識）
        3) 実技教習
        4) 模擬試験
        5) 最終実技・学科試験`,
        `**追加費用** – 翻訳証明書（約3,000円）、免許センターの手数料（約5,000円）などもかかります。必要に応じて補習料や再試験料も見込んでおきましょう。`,
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
      <img
        src={post.image}
        alt={post.alt}
        className="w-full rounded-lg mb-6 md:h-[500px] object-cover"
      />
      <div className="prose prose-lg">
        {post.content.map((line, i) => (
          <p key={i} className="text-lg">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetail;
