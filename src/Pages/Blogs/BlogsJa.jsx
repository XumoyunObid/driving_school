import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: "license-guide",
    title: "外国人のための日本の運転免許取得ガイド – 埼玉編",
    tag: "外国人 運転免許 | 埼玉 免許切替",
    image: "/image6.jpeg",
    alt: "日本で免許を切り替える外国人",
    summary:
      "外国人として日本の運転免許を取得するのは少し複雑です。埼玉では多くの教習所が免許切替をサポートしています。このガイドでは、必要書類、学科試験や実技試験のポイントについて解説します。",
  },
  {
    id: "at-vs-mt",
    title: "AT免許とMT免許：日本ではどちらを選ぶべきか？",
    tag: "AT免許・MT免許 | 初心者ドライバー 日本",
    image: "/image1.jpeg",
    alt: "日本のATとMT免許",
    summary:
      "日本では、オートマチック（AT）とマニュアル（MT）の免許があります。ATは取得が早く、MTは多くの車種を運転できる利点があります。それぞれのメリットとデメリットを学びましょう。",
  },
  {
    id: "driving-school",
    title: "埼玉でおすすめの自動車教習所を選ぶための5つのポイント",
    tag: "埼玉 教習所 | 教習所 比較",
    image: "/image2.jpg",
    alt: "埼玉の教習所選び",
    summary:
      "適切な教習所を選ぶことで、スムーズに免許取得を進めることができます。多言語対応、柔軟なスケジュール、評判、料金などを考慮して、最適な教習所を見つけるための5つのポイントを紹介します。",
  },
  {
    id: "cost-guide",
    title: "日本の運転免許取得にかかる費用・期間・ステップ【完全ガイド】",
    tag: "日本 免許費用 | 教習所 費用・プロセス",
    image: "/image5.jpeg",
    alt: "日本の免許取得の費用とステップ",
    summary:
      "日本で運転免許を取得するには、どれくらいの費用と期間がかかるのでしょうか？本記事では、学科試験から卒業までのステップと、埼玉や全国の平均費用を解説します。",
  },
];

const BlogsEn = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/ja/blogs/${id}`);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <Helmet>
        <title>運転免許教習所ブログ | 免許ガイドとヒント</title>
        <meta
          name="description"
          content="外国人向けの日本の運転免許取得ガイド、ATとMT免許の違い、埼玉の教習所選び、免許取得の費用詳細を読むことができます。"
        />
        <meta
          name="keywords"
          content="埼玉 教習所, 日本の運転免許, 外国人向け日本免許, AT免許 MT免許, 日本の教習所の費用"
        />
      </Helmet>

      <h1 className="text-center text-4xl my-4 font-bold">ブログ</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleClick(post.id)}
            className="bg-[var(--secondary-color)] border border-gray-200 rounded-lg shadow-md cursor-pointer hover:scale-105 transform transition"
          >
            <img
              src={post.image}
              alt={post.alt}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-[var(--main-color)] mb-1">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-2">{post.tag}</p>
              <p className="text-sm text-gray-700">{post.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsEn;
