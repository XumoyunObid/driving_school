import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavDrawer = () => {
  const location = useLocation();
  const isJapanese = location.pathname.startsWith("/ja");

  const items = [
    {
      label: (
        <div className="text-md">
          <RouterLink
            to={isJapanese ? "/ja/about-us" : "/about-us"}
            className="text-lg cursor-pointer hover:text-[var(--main-color)]"
          >
            {isJapanese ? "私たちに関しては" : "About Us"}
          </RouterLink>
        </div>
      ),
      key: "0",
    },
    {
      label: (
        <div className="hover:text-[var(--main-color)] text-md">
          <RouterLink
            to={isJapanese ? "/ja/contact-us" : "/contact-us"}
            className="text-lg cursor-pointer"
          >
            {isJapanese ? "お問い合わせ" : "Contact Us"}
          </RouterLink>
        </div>
      ),
      key: "1",
    },
    {
      label: (
        <div className="hover:text-[var(--main-color)] text-md">
          <RouterLink
            to={isJapanese ? "/ja/services" : "/services"}
            className="text-lg cursor-pointer"
          >
            {isJapanese ? "サービス" : "Services"}
          </RouterLink>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="hover:text-[var(--main-color)] text-md">
          <RouterLink
            to={isJapanese ? "/ja/instructors" : "/instructors"}
            className="text-lg cursor-pointer"
          >
            {isJapanese ? "インストラクター" : "Instructors"}
          </RouterLink>
        </div>
      ),
      key: "3",
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <button
        className="text-lg cursor-pointer hover:text-[var(--main-color)]"
        onClick={(e) => e.preventDefault()}
      >
        <Space>
          {isJapanese ? "すべてのページ" : "All Pages"}
          <DownOutlined />
        </Space>
      </button>
    </Dropdown>
  );
};

export default NavDrawer;
