import { Button, Card, Col, Divider, Form, Input, Row } from "antd";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/final-logo-removebg-preview.png";
import "./Login.scss";
import SocialMediaOptions from "./SocialMedia";
import { connect } from "react-redux";
import { SetActivePageKey } from "../../../shared-components/react-redux-store/Store";
import { useEffect, useState } from "react";
import NCAApis from "../../../shared-components/apis/NeuracodeAIApis";
import { OpenNotificationWithIcon } from "../../../shared-components/custom-notification/custom-notification";
const { loginUser } = NCAApis;

const Login = (props: any) => {
  const navigate = useNavigate();
  const [pageType, SetPageType] = useState(props.activepageKey);
  const [userName, SetUserName] = useState("");
  const [password, SetPassword] = useState("null");

  useEffect(() => {
    // navigate("/login");

    SetPageType(props.activepageKey);
  }, [props.activepageKey]);

  const validateUserCredentials = () => {
    const data = { userName: userName, password: password };
    loginUser(data)
      .then((res: any) => {
        if (res.status === 200) {
        } else {
          OpenNotificationWithIcon("error", res?.response?.data.message);
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon("error", err?.response?.data.message);
      });
  };

  return (
    <>
      <Row
        style={{
          padding: "30px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000000",
        }}
      >
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            flexWrap: "wrap",
            maxWidth: "350px",
          }}
          xs={24}
          sm={24}
          md={24}
          lg={24}
        >
          <img src={logo} alt="" style={{ height: "60px", margin: "10px" }} />
          <p style={{ textAlign: "center", fontSize: "18px" }}>
            {" "}
            Choose an option to {pageType === "login" ? "login" : "register"} to
            your account
          </p>
          <Form
            name="loginForm"
            onFinish={
              pageType === "login"
                ? validateUserCredentials
                : validateUserCredentials
            }
          >
            <Form.Item
              name="userEmail"
              rules={[
                { required: true, message: "Please enter your email address" },
                {
                  type: "email",
                  message: "Please enter a valid email address",
                },
              ]}
            >
              <Input
                allowClear
                style={{ padding: "9px", color: "#fff" }}
                onChange={(data) => {
                  SetUserName(data.target.value);
                }}
                placeholder="Enter your Email"
                className="socialMediaCard"
              />
            </Form.Item>
            {pageType === "login" && (
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                  allowClear
                  onChange={(data) => {
                    SetPassword(data.target.value);
                  }}
                  style={{ padding: "9px", color: "#fff" }}
                  placeholder="Enter your Password"
                  className="socialMediaCard"
                />
              </Form.Item>
            )}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "100px",
                padding: "0",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginBottom: "10px",
              }}
            >
              {pageType !== "login" ? (
                <Button
                  htmlType="submit"
                  className="tryButton"
                  style={{ backgroundColor: "#cadcfc" }}
                  variant="filled"
                  onClick={() => {
                    // navigate("*");
                  }}
                >
                  Send OTP
                </Button>
              ) : (
                <Button
                  htmlType="submit"
                  className="tryButton"
                  style={{ backgroundColor: "#cadcfc" }}
                  variant="filled"
                  onClick={() => {
                    // validateUserCredentials()
                    // navigate("*");
                  }}
                >
                  Login
                </Button>
              )}
            </motion.div>
          </Form>
          <span style={{ color: "#fff", fontSize: "16px" }}>
            {pageType !== "login" ? (
              <span>
                Already have an account?
                <Button
                  onClick={() => {
                    props.SetActivePageKey("login");
                    navigate("/login");
                  }}
                  color="cyan"
                  variant="link"
                >
                  Login
                </Button>
              </span>
            ) : (
              <span>
                Don't have an account?
                <Button
                  onClick={() => {
                    props.SetActivePageKey("register");
                    navigate("/register");
                  }}
                  color="cyan"
                  variant="link"
                >
                  Sign Up
                </Button>
              </span>
            )}
          </span>
          <div></div>
          <Divider style={{ borderColor: "#A3A3A3", color: "#A3A3A3" }}>
            Or
          </Divider>
          <div>
            {SocialMediaOptions &&
              SocialMediaOptions.map((data, _) => (
                <Card key={data.key} className="socialMediaCard" hoverable>
                  <span
                    style={{
                      color: "#fff",
                      fontSize: "16px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      className="me-2"
                      src={data.icon}
                      alt=""
                      style={{ width: "23px" }}
                    />

                    <div style={{ width: "200px" }}>
                      Login with {data.socialMediaType}
                    </div>
                  </span>
                </Card>
              ))}
          </div>{" "}
        </Col>
      </Row>
    </>
  );
};

// export default Login;
const mapStateToProps = (state: any) => ({
  activepageKey: state.neuracodeai.activepageKey,
});

const mapDispatchToProps = (dispatch: any) => ({
  SetActivePageKey: (data: string) => dispatch(SetActivePageKey(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
