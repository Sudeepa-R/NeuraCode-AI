import { useEffect } from "react";
import "./code-converter-content.scss";
import { connect } from "react-redux";
import { SetActivePageKey } from "../../../shared-components/react-redux-store/Store";
import {  Col, Row } from "antd";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

const CodeConverterContent = (props: any) => {
  // const navigate = useNavigate();
  useEffect(() => {
    // navigate("/login");
  }, [props.activepageKey]);

  return (
    <div className="codeConverterContent">
      <div className="codeConverterContentDiv" style={{ paddingTop: "100px" }}>
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
          ></Col>
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

            </span>
          </Col>
        </Row>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CodeConverterContent);
