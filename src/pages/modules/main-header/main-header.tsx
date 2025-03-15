import { Avatar, Dropdown, Space } from "antd";
// import "./TemplatesStyles.scss";
// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../../assets/final-logo-removebg-preview.png";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { SetActivePageKey } from "../../../shared-components/react-redux-store/Store";
// import { useNavigate } from "react-router-dom";
import "./main-header.scss";

const MainHeader = (props: any) => {
  // const [collapsed, Setcollapsed] = useState(false);
  const [userData, SetuserData] = useState({
    userName: null,
    email: null,
    emailName: null,
  });
  const [_, setCurrent] = useState(props.activepageKey);
  // const navigate = useNavigate();
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
    setUserProfileName();
  });

  useEffect(() => {
    setCurrent(props.activepageKey);
  }, [props.activepageKey]);

  // const handleNavigateFunction = (key: string) => {
  //   navigate(key);
  //   props.SetActivePageKey(key);
  //   Setcollapsed(false);
  // };

  const setUserProfileName = () => {
    const user = localStorage.getItem("data");
    const data = JSON.parse(user || "{}");
    const userName = data?.user?.userName;
    const email = (data?.user?.userEmail).split("@");
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

      <div className="profileDropdown">
        <Dropdown menu={{ items }}>
          <Space style={{ cursor: "pointer" }}>
            <Avatar
              style={{ backgroundColor: "#87d068" }}
              shape="circle"
              // size="large"
              icon={<UserOutlined />}
            />
            <span>{userData.userName || userData.emailName}</span>
          </Space>
        </Dropdown>
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
