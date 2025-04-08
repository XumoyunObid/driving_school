import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import { Link as RouterLink } from "react-router-dom";
const items = [
  {
    label: (
      <div className="  text-md">
        <RouterLink
          to="about-us"
          className="text-lg cursor-pointer hover:text-[var(--main-color)]"
        >
          About Us
        </RouterLink>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="hover:text-[var(--main-color)] text-md">
        <RouterLink to="/contact-us" className="text-lg cursor-pointer">
          Contact Us
        </RouterLink>
      </div>
    ),
    key: "1",
  },
  {
    label: (
      <div className="hover:text-[var(--main-color)] text-md">
        <RouterLink to="/services" className="text-lg cursor-pointer">
          Services
        </RouterLink>
      </div>
    ),
    key: "2",
  },
  {
    label: (
      <div className="hover:text-[var(--main-color)] text-md">
        <RouterLink to="/instructors" className="text-lg cursor-pointer">
          Instructors
        </RouterLink>
      </div>
    ),
    key: "3",
  },
];
const NavDrawer = () => (
  <Dropdown menu={{ items }} trigger={["click"]}>
    <button
      className="text-lg cursor-pointer hover:text-[var(--main-color)]"
      onClick={(e) => e.preventDefault()}
    >
      <Space>
        All pages
        <DownOutlined />
      </Space>
    </button>
  </Dropdown>
);
export default NavDrawer;
