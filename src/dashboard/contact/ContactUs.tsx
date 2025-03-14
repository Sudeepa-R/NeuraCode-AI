import { Button, Col, Row, Form, Input } from "antd";
import { motion } from "framer-motion";
import { MailFilled, PhoneFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./ContectUs.scss";

const ContactUsPage = () => {
  const navigate=useNavigate();
  return (
    <>
      <div>
        <div className="contactfirstpage">
          <div className="ContectUs">
            <Row
              style={{
                padding: "30px",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  flexWrap: "wrap",
                }}
                xs={24}
                sm={24}
                md={24}
                lg={24}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="text-4xl font-bold"
                >
                  <h1>Have Questions? Contact Us!</h1>
                </motion.h1>

                <p style={{ color: "black" }}>
                  {" "}
                  We’d love to hear from you! Whether you have questions,
                  feedback, or business inquiries, our team is here to help.
                </p>
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
                  <Button onClick={()=>{navigate('*')}} type="primary">Try NeuraCode AI</Button>
                </motion.button>
              </Col>
            </Row>
          </div>
        </div>
        <div>
          <Row
            style={{
              padding: "30px",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold"
              >
                <h1 className="gradientTextFree">Contact Us</h1>
              </motion.h1>

              <p style={{ color: "black" }}>
                {" "}
                Let’s connect! Reach out for support, collaboration, or any
                inquiries about our services.
              </p>
            </div>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flexWrap: "wrap",
              }}
              xs={24}
              sm={24}
              md={24}
              lg={24}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  width: "80%",
                  marginTop: "50px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MailFilled
                      style={{
                        color: "#00246b",
                        fontSize: "25px",
                        margin: "10px",
                      }}
                    />{" "}
                    <h5 style={{ fontWeight: "500" }}>
                      support@neuraocodeai.io
                    </h5>
                  </span>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <PhoneFilled
                      style={{
                        color: "#00246b",
                        fontSize: "25px",
                        margin: "10px",
                      }}
                    />{" "}
                    <h5 style={{ fontWeight: "500" }}> +91 86756 45678 </h5>
                  </span>
                </div>
                <div
                  style={{
                    width: "700px",
                    display: "flex",
                    // justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                  }}
                >
                  <Form name="contactUs" style={{ width: "100%" }}>
                    <div className="mobileView" >
                      <Form.Item
                        name="name"
                        validateDebounce={1000}
                        style={{ width: "100%" }}
                        rules={[{ max: 3 }]}
                      >
                        <Input
                          allowClear
                          style={{ height: "50px" }}
                          placeholder="Your Name"
                        />
                      </Form.Item>
                      <Form.Item
                        name="email"
                        style={{ width: "100%" }}
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your Email",
                          },
                        ]}
                      >
                        <Input
                          allowClear
                          style={{ height: "50px" }}
                          placeholder="Your Email"
                        />
                      </Form.Item>
                    </div>
                    <div style={{ display: "flex", gap: 20, width: "100%" }}>
                      <Form.Item
                        name="subject"
                        validateDebounce={1000}
                        style={{ width: "100%" }}
                        rules={[{ max: 3 }]}
                      >
                        <Input
                          allowClear
                          style={{ height: "50px" }}
                          placeholder="Subject"
                        />
                      </Form.Item>
                    </div>
                    <div style={{ display: "flex", gap: 20, width: "100%" }}>
                      <Form.Item
                        name="message"
                        style={{ width: "100%" }}
                        validateDebounce={1000}
                        rules={[{ max: 3 }]}
                      >
                        {/* <Input
                          style={{ height: "50px" }}
                          placeholder="Message"
                        /> */}
                         <Input.TextArea  placeholder="Message"  rows={4}  />
                      </Form.Item>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
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
                        <Button type="primary" htmlType="submit">
                          Send Message
                        </Button>
                      </motion.button>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
