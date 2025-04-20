import React from "react";
import Button from "../../Components/Buttons/MainButton";
import { EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons";

const ContactSectionJa = () => {
  return (
    <div className="bg-[var(--secondary-color)] py-20 px-5">
      <div
        className="grid gap-10 md:grid-cols-2 items-center justify-between"
        style={{
          maxWidth: "var(--breakpoint-lg)",
          margin: "0 auto",
        }}
      >
        <div className="col-span-1 flex flex-col gap-15 items-start justify-center">
          <Button variant={"dotted"}>お問い合わせ</Button>
          <h1 className="text-5xl md:text-6xl font-bold">
            ご連絡ください。24時間以内にお返事します。
          </h1>
          <div className="flex flex-col gap-3 items-start justify-center">
            <div className="flex flex-col gap-2">
              <h2 className="font-bold flex gap-2 text-2xl">
                <div className="text-[var(--main-color)]">
                  <EnvironmentFilled />
                </div>{" "}
                住所
              </h2>
              <p className="text-lg text-gray-500 font-semibold ml-8">
                〒365-0005 埼玉県鴻巣市広田2270-1
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold flex gap-2 text-2xl">
                <div className="text-[var(--main-color)]">
                  <PhoneFilled />
                </div>{" "}
                お電話ください
              </h2>
              <p className="text-lg text-gray-500 font-semibold ml-8">
                +555-123-4567
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold flex gap-2 text-2xl">
                <div className="text-[var(--main-color)]">
                  <MailFilled />
                </div>{" "}
                メール
              </h2>
              <p className="text-lg text-gray-500 font-semibold ml-8">
                info@balancepoint.com
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 bg-white rounded-2xl p-6 shadow-sm border-1 border-gray-300 h-[500px]">
          <h3 className="text-2xl font-semibold mb-4">メッセージを送信する</h3>
          <form className="w-full">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="mb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="名"
                  // value={formData.firstName}
                  // onChange={handleChange}
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
                  // value={formData.lastName}
                  // onChange={handleChange}
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
                // value={formData.email}
                // onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="mobile"
                name="mobile"
                placeholder="携帯電話番号"
                // value={formData.mobile}
                // onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                placeholder="メッセージ"
                // value={formData.message}
                // onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg bg-white"
              />
            </div>
            <Button
              variant={"primary"}
              type="submit"
              className="cursor-pointer"
            >
              メッセージを送信
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSectionJa;
