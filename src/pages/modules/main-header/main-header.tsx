import { Avatar, Button, Drawer, Dropdown, Menu, Space } from "antd";
// import "./TemplatesStyles.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../../assets/final-logo-removebg-preview.png";
import {
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { SetActivePageKey } from "../../../shared-components/react-redux-store/Store";
import { useNavigate } from "react-router-dom";
import "./main-header.scss";
import {
  currentUrlAssigned,
  LogoutSession,
} from "../../../shared-components/utils/helper-functions";

const MainHeader = (props: any) => {
  // const [collapsed, Setcollapsed] = useState(false);
  const [userData, SetuserData] = useState({
    userName: null,
    email: null,
    emailName: null,
  });
  const [current, setCurrent] = useState(props.activepageKey);
  const [collapsed, Setcollapsed] = useState(false);
  const navigate = useNavigate();

  const handleClick = (key: string, navigateTo: string) => {
    window.scrollTo(0, 0);
    navigate(navigateTo);
    setCurrent(key);
    props.SetActivePageKey(key);
    localStorage.setItem("activePage", navigateTo);
  };
  const items = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },

    { key: "email", label: userData.email, navigate: "/home" },
    { key: "changePassword", label: "Change password", navigate: "/home" },
    { key: "contactUs", label: "Contact Us", navigate: "/contactUs" },
    {
      key: "packages",
      label: "Logout",
      navigate: "/packages",
      danger: true,
      icon: <LogoutOutlined />,
      onClick: () => {
        handleLogout();
      },
    },
  ];
  const handleLogout = () => {
    LogoutSession();
    navigate("/home");
  };
  const menuItems = [
    { key: "codeconverter", label: "Convert Code", navigate: "/codeconverter" },
    { key: "runCode", label: "Run Code", navigate: "*" },
    {
      key: "admin-settings",
      label: "Admin Settings",
      navigate: "/admin-settings",
    },
  ];
  // const handleClick = (key: string, navigateTo: string) => {
  //   window.scrollTo(0, 0);
  //   navigate(navigateTo);
  //   setCurrent(key);
  //   props.SetActivePageKey(key);
  //   localStorage.setItem("activePage", navigateTo);
  // };

  useEffect(() => {
    props.SetActivePageKey(handleUrlAssigned());
    setCurrent(handleUrlAssigned());
    setUserProfileName();
  }, []);

  const handleUrlAssigned = () => {
    const url = currentUrlAssigned();
    console.log("urlOnAssigned----", url);
    const adminUrls=['AppMenu','ProgrammingLanguages']
    if(adminUrls.includes(url)){
      return 'admin-settings'
    }
    return url;
  };
  useEffect(() => {
    setCurrent(props.activepageKey);
  }, [props.activepageKey]);

  // const handleNavigateFunction = (key: string) => {
  //   navigate(key);
  //   props.SetActivePageKey(key);
  //   Setcollapsed(false);
  // };
  const handleNavigateFunction = (key: string) => {
    const menu = menuItems.find((i) => i.key === key) || menuItems[0];
    navigate(menu.navigate);
    props.SetActivePageKey(key);
    Setcollapsed(false);
  };

  const setUserProfileName = () => {
    const user = localStorage.getItem("data");
    const data = JSON.parse(user || "{}");
    const userName = data?.user?.userName;
    const email = data?.user?.userEmail
      ? (data?.user?.userEmail).split("@")
      : "Not found";
    SetuserData({
      userName: userName,
      email: data?.user?.userEmail,
      emailName: email,
    });
  };

  return (
    <div
      className="mainheaderPage"
      style={{
        backgroundColor: `${props.bgColor}`,
        justifyContent: "space-between",
      }}
    >
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

      <nav className="headerNav headerNav2">
        {menuItems.map((item) => (
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
              fontSize: "18px",
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

      <div className="profileDropdown" style={{ width: "20%" }}>
        <Dropdown className="profile" menu={{ items }}>
          <Space style={{ cursor: "pointer" }}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              shape="circle"
              // size="large"
              icon={<UserOutlined />}
            />
            <span style={{ fontSize: "18px" }}>
              {userData.userName || userData.emailName}
            </span>
          </Space>
        </Dropdown>
        <span className="secondHeader">
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
                  width: 60,
                  height: 64,
                  // marginTop: `${collapsed ? "130px" : ""}`,
                  color: `${collapsed ? "#fff" : "#000000"}`,
                }}
              />

              <Drawer
                style={{
                  width: "200px",
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
                  items={menuItems}
                  onClick={(data) => {
                    handleNavigateFunction(data.key);
                  }}
                />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
