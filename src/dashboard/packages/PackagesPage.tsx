import { Button, Col, Row, Card, Badge } from "antd";
import { motion } from "framer-motion";
import "./packagesPage.scss";
import cardData from "./CardData";

const PackagesPage = () => {
  return (
    <>
      <div>
        <div className="packagesfirstpage">
          <div className="packagesPage">
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
                  <h1>Convert. Optimize. Innovate.</h1>
                </motion.h1>

                <p style={{ color: "black" }}>
                  {" "}
                  Seamlessly transform code across languages with our powerful
                  converter.
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
                  <Button type="primary">Try for free!</Button>
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
                <h1 className="gradientTextFree">Packages</h1>
              </motion.h1>

              <p style={{ color: "black" }}>
                {" "}
                Effortlessly convert and manage code across multiple languages
                with our versatile package solutions.
              </p>
            </div>
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                flexWrap: "wrap",
                marginRight: "80px",
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
                  width: "70%",
                }}
              >
                {cardData &&
                  cardData.map((data, _) => (
                    <Badge.Ribbon text={data.badge}>
                      <Card
                        hoverable
                        title={
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              fontWeight: "800",
                              flexDirection: "column",
                            }}
                          >
                            <h4
                              style={{
                                fontWeight: "900",
                              }}
                            >
                              {data.title}
                            </h4>
                            <h1>{data.price}</h1>
                          </div>
                        }
                        variant="borderless"
                        style={{
                          width: 300,
                          marginBottom: "20px",
                          marginTop: "30px",
                          minHeight: "500px",
                        }}
                      >
                        <span
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            // alignItems: "center",
                            flexDirection: "column",
                          }}
                        >
                          {data.features.map((item, _) => (
                            <span
                              style={{
                                fontSize: "17px",
                                fontWeight: "500",
                                color: "#696969",
                                marginLeft: "20px",
                                display: "flex",
                                marginBottom: "5px",
                                // textAlign:
                              }}
                            >
                              <span>🔹</span>
                              <span>{item}</span>
                            </span>
                          ))}
                        </span>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          style={{
                            padding: "0",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            position: "absolute",
                            bottom: "15px",
                            left: "30%",
                          }}
                        >
                          <Button
                            className="tryButton"
                            style={{ backgroundColor: "#cadcfc" }}
                            variant="filled"
                          >
                            Buy Now
                          </Button>
                        </motion.button>
                      </Card>
                    </Badge.Ribbon>
                  ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default PackagesPage;
