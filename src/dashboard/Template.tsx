import { Button, Col, Row, Card, Tooltip } from "antd";
import { motion } from "framer-motion";
import {
  ThunderboltFilled,
  SafetyCertificateOutlined,
  UngroupOutlined,
  DeploymentUnitOutlined,
} from "@ant-design/icons";
import image1 from "../assets/image1.gif";
import postgre from "../assets/ProgrammingLanguages/postgresqlimg.png";
import css from "../assets/ProgrammingLanguages/css.png";
import html from "../assets/ProgrammingLanguages/html.png";
import mysql from "../assets/ProgrammingLanguages/mysql.png";
import reactImg from "../assets/ProgrammingLanguages/react.png";
import scss from "../assets/ProgrammingLanguages/scss.png";
import sqlserver from "../assets/ProgrammingLanguages/sqlserver.png";
import manymore from "../assets/ProgrammingLanguages/manymore.png";

const DashboardTemplate = () => {
  const socialLinks = [
    {
      id: 1,
      icon: "https://www.codeconvert.ai/lang_logos/golang.svg",
      lable: "Go",
    },
    {
      id: 2,
      icon: "https://www.codeconvert.ai/lang_logos/python.svg",
      lable: "python",
    },
    {
      id: 3,
      icon: "https://www.codeconvert.ai/lang_logos/c++.svg",
      lable: "C++",
    },
    {
      id: 4,
      icon: "https://www.codeconvert.ai/lang_logos/java.svg",
      lable: "Java",
    },
    {
      id: 5,
      icon: "https://www.codeconvert.ai/lang_logos/javascript.svg",
      lable: "JavaScript",
    },
    { id: 6, icon: "https://www.codeconvert.ai/lang_logos/c.svg", lable: "C" },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/csharp.svg",
      lable: "C#",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/typescript.svg",
      lable: "TypeScript",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/perl.svg",
      lable: "Perl",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/vb.net.svg",
      lable: "VB.Net",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/ruby.svg",
      lable: "Ruby",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/php.svg",
      lable: "Php",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/kotlin.svg",
      lable: "Kotlin",
    },
    { id: 6, icon: postgre, lable: "PostgreSQL" },
    { id: 6, icon: css, lable: "CSS " },
    { id: 6, icon: html, lable: "HTML" },
    { id: 6, icon: mysql, lable: "MySQL" },
    { id: 6, icon: reactImg, lable: "ReactJs" },
    { id: 6, icon: scss, lable: "SCSS" },
    { id: 6, icon: sqlserver, lable: "Microsoft SQL Server" },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/swift.svg",
      lable: "Swift",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/elixir.svg",
      lable: "Elixir",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/erlang.svg",
      lable: "Erlang",
    },
    {
      id: 6,
      icon: "https://www.codeconvert.ai/lang_logos/rust.svg",
      lable: "Rust",
    },
    { id: 6, icon: manymore, lable: "Many More" },
  ];
  return (
    <>
      <div className="homePage">
        {/* <img src={backgroundImage} alt="" style={{width:"100%", height:"100vh", opacity:'1'}} /> */}
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
              <h1>
                NeuraCode AI – The Ultimate AI-Powered Code Converter
                {/* NeuraCode AI – The Smart, AI-Driven Code Converter for Effortless
              Cross-Language Transformation */}
              </h1>
            </motion.h1>

            <p>
              {" "}
              A smart, AI-driven code converter for effortless cross-language
              transformation, ensuring fast and accurate code conversion with
              optimization.
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
              <Button
                className="tryButton"
                style={{ backgroundColor: "#cadcfc" }}
                variant="filled"
              >
                Try for free!
              </Button>
            </motion.button>
          </Col>
        </Row>
      </div>
      <div className="gradientBackground">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "60px",
          }}
        >
          <h1>
            Why <span className="gradientText"> NeuraCode AI</span>
          </h1>
        </span>
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
            md={12}
            lg={12}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="text-4xl font-bold cardBoxes"
              // style={{ width: "60%" }}
            >
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00246b",
                    width: "35px",
                    height: "35px",
                    padding: "8px",
                    borderRadius: "40%",
                    marginRight: "10px",
                  }}
                >
                  <UngroupOutlined
                    style={{ color: "#f9eded", fontSize: "20px" }}
                  />
                </span>
                <span>
                  <h5>High Quality Conversion</h5>
                  <p style={{ color: "black", fontSize: "18px" }}>
                    We use advanced AI models to ensure that your code is
                    converted with the highest accuracy and quality.
                  </p>
                </span>
              </span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="text-4xl font-bold cardBoxes"
              // style={{ width: "60%" }}
            >
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00246b",
                    width: "35px",
                    height: "35px",
                    padding: "8px",
                    borderRadius: "40%",
                    marginRight: "10px",
                  }}
                >
                  <DeploymentUnitOutlined
                    style={{ color: "#f9eded", fontSize: "20px" }}
                  />
                </span>
                <span>
                  <h5>Unlimited Usage</h5>
                  <p style={{ color: "black", fontSize: "18px" }}>
                    All our paid plans come with unlimited usage. Convert as
                    much code as you want using our web tool.
                  </p>
                </span>
              </span>
            </motion.h1>
          </Col>
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
            md={12}
            lg={12}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="text-4xl font-bold cardBoxes"
              // style={{ width: "60%" }}
            >
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00246b",
                    width: "35px",
                    height: "35px",
                    padding: "8px",
                    borderRadius: "40%",
                    marginRight: "10px",
                  }}
                >
                  <ThunderboltFilled
                    style={{ color: "#f9eded", fontSize: "20px" }}
                  />
                </span>
                <span>
                  <h5> No Setup Required</h5>
                  <p style={{ color: "black", fontSize: "18px" }}>
                    No need to download or install any software. Simply paste
                    your code and click a button to convert it to your desired
                    language.
                  </p>
                </span>
              </span>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="text-4xl font-bold cardBoxes"
              // style={{ width: "60%" }}
            >
              <span
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <span
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#00246b",
                    width: "35px",
                    height: "35px",
                    padding: "8px",
                    borderRadius: "40%",
                    marginRight: "10px",
                  }}
                >
                  <SafetyCertificateOutlined
                    style={{ color: "#f9eded", fontSize: "20px" }}
                  />
                </span>
                <span>
                  <h5>Privacy and Security</h5>
                  <p style={{ color: "black", fontSize: "18px" }}>
                    We take privacy and security seriously. We do not retain the
                    user’s input code and/or the generated output code.
                  </p>
                </span>
              </span>
            </motion.h1>
          </Col>
        </Row>
      </div>
      <div className="gradientBackgroundPage2">
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
            md={12}
            lg={12}
          >
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              whileHover={{ scale: 1.03 }}
              className="text-4xl font-bold"
              // style={{ width: "60%" }}
            >
              <img src={image1} alt="" style={{ width: "90%" }} />
            </motion.h1>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            xs={24}
            sm={24}
            md={12}
            lg={12}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "300px",
                textAlign: "center",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold"
              >
                <h1>
                  Begin Your{" "}
                  <span className="gradientTextFree"> Free Trial</span> Now!
                </h1>
              </motion.h1>
              <span>
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
              </span>
            </span>
          </Col>
        </Row>
      </div>
      <div>
        <Row
          style={{
            padding: "30px",
            minHeight: "80vh",
          }}
        >
          <Col xs={24} sm={24} md={24} lg={24}>
            <span
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "15px",
                flexDirection: "column",
              }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl font-bold"
              >
                <h1>
                  {" "}
                  <span className="gradientTextLanguages">
                    {" "}
                    Languages Covered
                  </span>{" "}
                </h1>
              </motion.h1>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: "70%",
                    color: "#696969",
                    fontWeight: "500",
                    textAlign: "center",
                    fontSize: "18px",
                    margin: "10px",
                  }}
                >
                  NeuraCode AI is a powerful multi-language code converter,
                  supporting Python, Java, C++, C#, JavaScript, TypeScript, and
                  more. With instant conversion, syntax highlighting, and
                  AI-optimized suggestions, it ensures clean, well-structured,
                  and efficient code. Save time and streamline your development
                  with NeuraCode AI!
                </span>
              </div>
            </span>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {socialLinks.map(({ id, icon, lable }) => (
                <span style={{ margin: "15px", cursor: "pointer" }}>
                  <motion.h3
                    key={id}
                    whileHover={{ scale: 1.2, y: -5, color: "#551A8B" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card
                      style={{
                        width: 100,
                        height: 60,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {/* <span style={{fontSize:"35px"}}> {icon}</span> */}
                      <Tooltip placement="topRight" title={lable}>
                        <img src={icon} alt="" style={{ width: "40px" }} />
                      </Tooltip>
                    </Card>
                  </motion.h3>
                </span>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default DashboardTemplate;
