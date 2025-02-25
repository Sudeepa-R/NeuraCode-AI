import { Button, Menu, Drawer } from "antd";
import "./TemplatesStyles.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/final-logo-removebg-preview.png";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { SetActivePageKey } from "../shared-components/react-redux-store/Store";
import { useNavigate } from "react-router-dom";

const items = [
  { key: "home", label: "Home", navigate: "/home" },
  { key: "packages", label: "Packages", navigate: "/packages" },
  { key: "contactUs", label: "Contact Us", navigate: "/contactUs" },
];

const TemplateHeader = (props: any) => {
  const [collapsed, Setcollapsed] = useState(false);
  const [current, setCurrent] = useState(props.activepageKey);
  const navigate = useNavigate();
  const handleClick = (key: string, navigateTo: string) => {
    window.scrollTo(0, 0);
    navigate(navigateTo);
    setCurrent(key);
    props.SetActivePageKey(key);
    localStorage.setItem("activePage", navigateTo);
  };

  const handleNavigateFunction = (key: string) => {
    navigate(key);
    props.SetActivePageKey(key);
    Setcollapsed(false);
  };

  return (
    <div className="headerPage" style={{ backgroundColor: `${props.bgColor}` }}>
      <span
        style={{ fontWeight: "800", fontSize: "2rem", fontFamily: "Roboto" }}
      >
        <img
          src={logo}
          alt=""
          onClick={() => {
            props.SetActivePageKey("home");
          }}
          style={{ width: "50%", marginLeft: "10px", cursor: "pointer" }}
        />
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
                  // style={{ marginTop: "100px" }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </span>
          ))}
        </nav>
        <div className="buttonsClass">
          <Button
            onClick={() => {
              props.SetActivePageKey("login");
              navigate("/login");
            }}
            className="mx-2"
            variant="text"
          >
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
              backgroundColor: `${collapsed ? "" : "transparent"}`,
            }}
          >
            <span>
              <Button
                type="text"
                icon={collapsed ? "" : <MenuFoldOutlined />}
                onClick={() => Setcollapsed(!collapsed)}
                style={{
                  fontSize: "32px",
                  width: 140,
                  height: 64,
                  // marginTop: `${collapsed ? "130px" : ""}`,
                  color: `${collapsed ? "#fff" : "#000000"}`,
                }}
              />

              <Drawer
                style={{
                  width: "150px",
                  position: "absolute",
                  right: 0,
                  backgroundColor: "#0000007d",
                }}
                closeIcon={<div></div>}
                title={
                  <span
                    onClick={() => {
                      Setcollapsed(false);
                    }}
                    style={{
                      fontSize: "30px",
                      color: "#fff",
                      cursor: "pointer",
                    }}
                  >
                    <MenuUnfoldOutlined />
                  </span>
                }
                onClose={() => {
                  Setcollapsed(false);
                }}
                open={collapsed}
              >
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
                <Button
                  style={{ background: "#fff" }}
                  className="mobileViewButton ms-4 mt-2"
                  variant="text"
                  onClick={() => {
                    props.SetActivePageKey("login");
                    navigate("/login");
                  }}
                >
                  <span> Log In</span>
                </Button>
              </Drawer>
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
