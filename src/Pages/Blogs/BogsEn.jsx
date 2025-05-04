import React from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: "license-guide",
    title:
      "How to Get a Japanese Driver’s License for Foreigners – Saitama Edition",
    tag: "Foreigners Driver’s License | Saitama License Conversion",
    image: "/image6.jpeg",
    alt: "Foreigners converting license in Japan",
    summary:
      "Navigating the Japanese driving license system as a foreigner can be tricky. In Saitama, many driving schools assist with license conversion. This guide covers required documents, written and practical test tips.",
  },
  {
    id: "at-vs-mt",
    title: "AT vs. MT License: Which One Should You Choose in Japan?",
    tag: "AT License or MT License | Beginner Driver Japan",
    image: "/image1.jpeg",
    alt: "AT vs MT driving license in Japan",
    summary:
      "In Japan, choose between Automatic Transmission (AT) and Manual Transmission (MT) licenses. AT is quicker to obtain; MT offers more vehicle flexibility. Learn pros and cons to decide.",
  },
  {
    id: "driving-school",
    title: "5 Tips for Choosing the Best Driving School in Saitama",
    tag: "Driving School Saitama | School Comparison",
    image: "/service4.webp",
    alt: "Choosing a driving school in Saitama",
    summary:
      "Choosing the right driving school ensures smooth license acquisition. Consider multilingual instructors, flexible schedules, reputation, and cost. Here are five tips to find the best school.",
  },
  {
    id: "cost-guide",
    title:
      "Complete Guide to Cost, Duration & Steps for Getting a Driver’s License in Japan",
    tag: "Japan License Cost | School Fees & Process",
    image: "/service2.avif",
    alt: "Cost and steps to get a license in Japan",
    summary:
      "Wondering about cost and time for a Japanese driver’s license? This post details every step—from written test to graduation—and average fees in Saitama and nationwide.",
  },
];

const BlogsEn = () => {
  const navigate = useNavigate();
  const handleClick = (id) => navigate(`/blogs/${id}`);

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto text-gray-800">
      <Helmet>
        <title>Driving School Blog | License Guide & Tips</title>
        <meta
          name="description"
          content="Read guides on obtaining a Japanese driver’s license as a foreigner, AT vs MT licenses, choosing Saitama driving schools, and cost breakdowns."
        />
        <meta
          name="keywords"
          content="driving school Saitama, Japanese driver's license, license for foreigners Japan, AT vs MT license, cost of driving school Japan"
        />
      </Helmet>
<h1 className="text-center text-4xl my-4 font-bold">Our Blog</h1>
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
