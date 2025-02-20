import { Col, Row, Divider, Menu } from "antd";
import logo from "../assets/final-logo-removebg-preview.png";
import {
  InstagramOutlined,
  GithubOutlined,
  LinkedinOutlined,
  YoutubeOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

const socialLinks = [
  { id: 1, icon: <FacebookOutlined />, link: "https://facebook.com" },
  { id: 2, icon: <GithubOutlined />, link: "https://github.com" },
  { id: 3, icon: <InstagramOutlined />, link: "https://instagram.com" },
  { id: 4, icon: <LinkedinOutlined />, link: "https://linkedin.com" },
  { id: 4, icon: <YoutubeOutlined />, link: "https://youtube.com" },
];

const items: MenuItem[] = [
  {
    key: "Home",
    label: "Home",
  },
  {
    key: "packages",
    label: "Packages",
  },
  {
    key: "contactUs",
    label: "Contact US",
  },
];

const DashboardFooter = () => {
  const onClick: MenuProps["onClick"] = (e: any) => {
    console.log("click", e);
  };
  const [acvtiveSection, SetacvtiveSection] = useState("home");
  useEffect(() => {
    const data = localStorage.getItem("acvtiveSection");
    SetacvtiveSection(data || "");
    console.log(acvtiveSection);
  }, [localStorage.getItem("acvtiveSection")]);
  return (
    <>
      <Row style={{ padding: "30px" }} className="templateFooter">
        <Col
          xs={24}
          sm={24}
          md={6}
          lg={6}
          
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong style={{ fontSize: "1.75rem" }}>
              <img
                src={logo}
                alt=""
                style={{ width: "300px", height: "80px" }}
              />
            </strong>
            <span style={{ fontSize: "1rem", marginTop: "10px" }}>
              NeuraCode AI simplifies code conversion with accuracy and
              efficiency.
            </span>
          </div>
        </Col>

        <Col xs={24} sm={24} md={6} lg={6}>
          <div>
            <strong style={{ fontSize: "1.75rem" }}>Company</strong>

            <Menu
              onClick={onClick}
              style={{ width: 150, fontSize: "1rem" }}
              mode="vertical"
              items={items}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <div>
            <strong style={{ fontSize: "1.75rem" }}>Location</strong>
            <ul
              style={{
                listStyleType: "none",
                color: "black",
                fontSize: "1rem",
              }}
            >
              <li>2nd stage Jayanagar, Bangalore south, Karnataka 560087 📍</li>
            </ul>
          </div>
        </Col>
        <Col xs={24} sm={24} md={6} lg={6}>
          <div>
            <strong style={{ fontSize: "1.75rem" }}>Follow Us</strong>
            <div style={{ display: "flex", margin: "2px" }}>
              {socialLinks.map(({ id, icon }) => (
                <span style={{ margin: "7px", cursor: "pointer" }}>
                  <motion.h3
                    key={id}
                    whileHover={{ scale: 1.2, y: -5, color: "#00246b" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {icon}
                  </motion.h3>
                </span>
              ))}
            </div>
          </div>
        </Col>
        <Divider
          style={{
            borderColor: "#8A92AC",
          }}
        >
          Made with 💜 in India
        </Divider>
        <div
          style={{
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>© 2025 NeuraCode AI. All rights reserved.</span>
        </div>
      </Row>
    </>
  );
};

export default DashboardFooter;
