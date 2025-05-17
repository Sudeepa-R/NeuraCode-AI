import Dragger from "antd/es/upload/Dragger";
import "./ProgrammingLanguages.scss";
import { InboxOutlined } from "@ant-design/icons";
import { OpenNotificationWithIcon } from "../../../../shared-components/custom-notification/custom-notification";
import { Col, Row } from "antd";

const ProgrammingLanguages = () => {
  const props = {
    name: "file",
    multiple: true,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info: any) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        OpenNotificationWithIcon(
          "success",
          `${info.file.name} file uploaded successfully.`
        );
      } else if (status === "error") {
        OpenNotificationWithIcon(
          "error",
          `${info.file.name} file upload failed.`
        );
      }
    },
    onDrop(e: any) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };
  return (
    <>
      <div
        style={{ width: "100%", marginTop: "80px", padding: "30px" }}
        className="mainContent"
      >
        <div>
          <h4>Upload Programming Language Details</h4>
          <p style={{ color: "#808080", fontSize: "18px" }}>
            Add new programming languages to the system by uploading an image
            and entering the language name below.
          </p>
        </div>
        <div>
          <Row style={{ padding: "30px" }}>
            <Col xs={24} sm={24} md={12} lg={6}></Col>

            <Col xs={24} sm={24} md={6} lg={6}>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibited from
                  uploading company data or other banned files.
                </p>
              </Dragger>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ProgrammingLanguages;
