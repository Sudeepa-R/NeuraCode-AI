import { Button, Menu } from "antd";
import "./TemplatesStyles.scss";
import { motion } from "framer-motion";
import {  useState } from "react";
import logo from "../assets/final-logo-removebg-preview.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { SetActivePageKey } from "../shared-components/react-redux-store/Store";

const items = [
  { key: "home", label: "Home", navigate: "/" },
  { key: "packages", label: "Packages", navigate: "/packages" },
  { key: "contact", label: "Contact Us", navigate: "/contactUs" },
];

const TemplateHeader = (props: any) => {
  const [collapsed, Setcollapsed] = useState(false);
  const [current, setCurrent] = useState("home");

  const handleClick = (key: string, navigateTo: string) => {
    setCurrent(key);
    props.SetActivePageKey(key);
    localStorage.setItem("activePage", navigateTo);
  };

  const handleNavigateFunction = (key: string) => {
    props.SetActivePageKey(key);
  };

  return (
    <div className="headerPage" style={{ backgroundColor: `${props.bgColor}` }}>
      <span
        style={{ fontWeight: "800", fontSize: "2rem", fontFamily: "Roboto" }}
      >
        <img src={logo} alt="" style={{ width: "50%", marginLeft: "10px" }} />
      </span>
      <div className="templateNav">
        <nav className="headerNav">
          {items.map((item) => (
            <span
              key={item.key}
              onClick={() => handleClick(item.key, item.navigate)}
              className="headerNavSpan"
              style={{
                position: "relative",
                paddingBottom: "5px",
                margin: "0 20px",
                cursor: "pointer",
                color: `${current === item.key ? "#00246B" : ""}`,
              }}
            >
              {item.label}
              {current === item.key && (
                <motion.div
                  layoutId="underline"
                  className="headerNavMotion"
                  style={{ marginTop: "100px" }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                />
              )}
            </span>
          ))}
        </nav>
        <div className="buttonsClass">
          <Button className="mx-2" variant="text">
            Log In
          </Button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              padding: "0",
              fontSize: "16px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <Button type="primary">Try for free!</Button>
          </motion.button>
        </div>
        <span className="mobileMenuVisible">
          <div
            className="mobileMenu"
            style={{
              backgroundColor: `${collapsed ? "#0000007d" : "transparent"}`,
            }}
          >
            <span>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => Setcollapsed(!collapsed)}
                style={{
                  fontSize: "32px",
                  width: 140,
                  height: 64,
                  marginTop: `${collapsed ? "130px" : ""}`,
                  color: `${collapsed ? "#fff" : "#000000"}`,
                }}
              />
              <Menu
                className="headerMenus"
                style={{ display: `${collapsed ? "" : "none"}` }}
                defaultSelectedKeys={[current]}
                defaultOpenKeys={[current]}
                mode="inline"
                items={items}
                onClick={(data) => {
                  handleNavigateFunction(data.key);
                }}
              />
            </span>
          </div>
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  activepageKey: state.neuracodeai.activepageKey,
});

const mapDispatchToProps = (dispatch: any) => ({
  SetActivePageKey: (data: string) => dispatch(SetActivePageKey(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateHeader);
