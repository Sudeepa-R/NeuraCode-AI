import { useEffect, useState } from "react";
import "./code-converter-content.scss";
import { connect } from "react-redux";
import { SetActivePageKey } from "../../../shared-components/react-redux-store/Store";
import { Button, Col, Radio, Row } from "antd";
import type { RadioChangeEvent } from "antd";
import Editor from "@monaco-editor/react";
import { SunFilled, MoonFilled } from "@ant-design/icons";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
enum LanguagesAllowed {
  python,
  java,
}
const CodeConverterContent = (props: any) => {
  // const navigate = useNavigate();
  const [theme, SetTheme] = useState("lightMode");
  const [current, setCurrent] = useState(props.activepageKey);
  useEffect(() => {
    const activeTheme = localStorage.getItem("theme");
    SetTheme(activeTheme || "lightMode");
  }, []);
  useEffect(() => {
    // navigate("/login");
  }, [props.activepageKey]);

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log("radio4 checked", value);
    localStorage.setItem("theme", value);
    SetTheme(value);
  };

  const optionsWithDisabled = [
    {
      label: (
        <span style={{}}>
          <SunFilled style={{ fontSize: "18px" }} />
        </span>
      ),
      value: "light",
    },
    {
      label: (
        <span>
          <MoonFilled style={{ fontSize: "18px" }} />
        </span>
      ),
      value: "vs-dark",
    },
  ];

  return (
    <div className="codeConverterContent">
      <div className="codeConverterContentDiv" style={{ paddingTop: "100px" }}>
        {/* <Row
          style={{
            padding: "30px",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col
            // style={{
            //   display: "flex",
            //   justifyContent: "center",
            //   alignItems: "center",
            //   marginTop: "15px",
            // }}
            xs={24}
            sm={24}
            md={24}
            lg={24}
          >
            <Radio.Group
              options={optionsWithDisabled}
              onChange={onChange4}
              value={theme}
              optionType="button"
              buttonStyle="solid"
              style={{ marginLeft: "20px" }}
            />
          </Col>
        </Row> */}
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
              marginTop: "15px",
              flexDirection: "column",
            }}
            xs={24}
            sm={24}
            md={24}
            lg={12}
          >
            <span
              style={{
                marginBottom: "10px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "95%",
              }}
            >
              <Radio.Group
                options={optionsWithDisabled}
                onChange={onChange4}
                value={theme}
                optionType="button"
                buttonStyle="solid"
              />
              <Button className="reset" variant="filled" htmlType="button">
                Reset
              </Button>
            </span>
            <Editor
              width="95%"
              height="500px"
              defaultLanguage="python"
              // language={LanguagesAllowed}
              theme={theme}
              options={{
                fontSize: 18,
                lineNumbers: "on",
                minimap: { enabled: true },
              }}
              defaultValue="// Type your code here..."
            />
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
              marginTop: "55px",
            }}
            xs={24}
            sm={24}
            md={24}
            lg={12}
          >
            <Editor
              height="500px"
              width="95%"
              options={{
                fontSize: 18,
                lineNumbers: "on",
                minimap: { enabled: true },
              }}
              defaultLanguage="python"
              theme={theme}
              defaultValue="// Converted code..."
            />
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
