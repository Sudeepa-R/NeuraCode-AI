import Dragger from "antd/es/upload/Dragger";
import "./ProgrammingLanguages.scss";
import { InboxOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { OpenNotificationWithIcon } from "../../../../shared-components/custom-notification/custom-notification";
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Image,
  Popconfirm,
  Tooltip,
} from "antd";
import { useEffect, useState } from "react";
import { UploadFile, UploadProps } from "antd/es/upload/interface";
import NCAApis from "../../../../shared-components/apis/NeuracodeAIApis";
import { openMessagesWithIcon } from "../../../../shared-components/custom-messages/custom-messages";
const { savePLData, getAllPLanguages, deleteDate } = NCAApis;

interface CardsDataInteface {
  plId?: number;
  plName?: string;
  imgUrl?: string;
}

const ProgrammingLanguages = () => {
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [imgUrl, SetImage] = useState("");
  const [loading, SetLoading] = useState(false);
  const [editEnabled, SeteditEnabled] = useState(false);
  const [languageID, SetlanguageID] = useState(null);
  const [cardsData, SetCardsData] = useState<CardsDataInteface[]>([]);

  const base64ToBlob = (base64Data: string): Blob => {
    const parts = base64Data.split(";base64,");
    const mimeType = parts[0].split(":")[1];
    const byteString = atob(parts[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeType });
  };

  const saveData = (data: any) => {
    SetLoading(true);
    if (imgUrl.length <= 0) {
      SetLoading(false);
      OpenNotificationWithIcon("error", "Please upload the image");
      return;
    }
    const _Data = { plName: data.plName, imgUrl: imgUrl, plId: languageID };
    savePLData(_Data)
      .then((res) => {
        if (res.data && (res?.status === 200 || res?.status === 201)) {
          SetLoading(false);
          fetch();
          handleDelete();
          form.resetFields();
          openMessagesWithIcon(
            "success",
            "Languages saved/updated successfully."
          );
        }
      })
      .catch((err) => {
        SetLoading(false);
        OpenNotificationWithIcon("error", err?.response?.data.message);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  const getPLById = (plId: any) => {
    // const params = new URLSearchParams({
    //   "filter.plId": `eq:${plId}`,
    // });
    // fetch(params.toString());
    SeteditEnabled(true);
    SetlanguageID(plId);
    const data = cardsData.filter((Item) => Item.plId === plId);
    onFill(data[0]);
  };

  const onFill = (data: CardsDataInteface) => {
    SetImage(data.imgUrl || "");
    const blobUrl = URL.createObjectURL(base64ToBlob(data.imgUrl || ""));
    setPreviewUrl(blobUrl);
    form.setFieldsValue({
      key: data.plId,
      plImg: data.imgUrl,
      plName: data.plName,
    });
  };

  const deleteLanguage = (plId: any) => {
    deleteDate(plId)
      .then((res) => {
        if (res?.status === 200 || res?.status === 201) {
          fetch();
          OpenNotificationWithIcon("success", res?.data?.message);
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon("error", err?.response?.data.message);
      });
  };

  const fetch = (params: string = "") => {
    getAllPLanguages(params)
      .then((res) => {
        if (res?.status === 200 || res?.status === 201) {
          SetCardsData(res?.data?.data);
        }
      })
      .catch((err) => {
        OpenNotificationWithIcon("error", err?.response?.data.message);
      });
  };

  const props: UploadProps = {
    name: "file",
    multiple: false,
    fileList,
    action: "",
    accept: "image/*",
    listType: "picture",
    maxCount: 1,
    disabled: fileList.length > 0 || editEnabled,
    onChange(info: any) {
      const { status, file, fileList: newFileList } = info;
      setFileList(newFileList);

      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        const blob = base64ToBlob(result);
        SetImage(result);
        const blobUrl = URL.createObjectURL(blob);
        setPreviewUrl(blobUrl);
      };
      reader.onerror = () => {
        OpenNotificationWithIcon("error", "Failed to generate image preview.");
      };
      reader.readAsDataURL(file.originFileObj as Blob);

      if (status === "done") {
        OpenNotificationWithIcon(
          "success",
          `${file.name} file uploaded successfully.`
        );
      } else if (status === "error") {
        OpenNotificationWithIcon("error", `${file.name} file upload failed.`);
        setPreviewUrl(null);
      } else if (status === "removed") {
        OpenNotificationWithIcon("info", `${file.name} file removed.`);
        setPreviewUrl(null);
      }
    },
    onDrop(e: React.DragEvent<HTMLDivElement>) {
      console.log("Dropped files:", e.dataTransfer.files); // Debug log
    },
    beforeUpload(file: UploadFile) {
      const isImage = file.type?.startsWith("image/");
      if (!isImage) {
        OpenNotificationWithIcon("error", "You can only upload image files!");
        return false;
      }
      return true;
    },
    showUploadList: false,
  };

  const handleDelete = () => {
    SetImage("");
    SeteditEnabled(false);
    setFileList([]);
    setPreviewUrl(null);
  };

  return (
    <div
      style={{ width: "100%", marginTop: "80px", padding: "30px" }}
      className="mainContent"
    >
      <div>
        <h4>Upload Programming Language Details</h4>
        <p style={{ color: "#808080", fontSize: "18px" }}>
          Add new programming languages to the system by uploading an image and
          entering the language name below.
        </p>
      </div>
      <div>
        <Row
          style={{
            padding: "1px",
            height: "100%",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <Col
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
            xs={24}
            sm={24}
            md={24}
            lg={12}
          >
            <div className="rightSectionUploadImg">
              <Form
                form={form}
                layout="vertical"
                name="control-hooks"
                style={{ maxWidth: 600 }}
                onFinish={saveData}
              >
                <Form.Item
                  name="plImg"
                  label="Upload the Logo"
                  rules={[
                    {
                      required: true,
                      message:
                        "Please upload the image of the programming language",
                    },
                  ]}
                >
                  <>
                    <Dragger {...props} style={{ width: "80%" }}>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">
                        Click or drag image to this area to upload
                      </p>
                      <p className="ant-upload-hint">
                        Support for a single image upload. Only image files are
                        allowed.
                      </p>
                    </Dragger>
                    {previewUrl && (
                      <div
                        style={{
                          marginTop: 16,
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <Image
                          src={previewUrl}
                          style={{
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                          }}
                          preview={true}
                        />
                        <DeleteOutlined
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            background: "rgba(0,0,0,0.5)",
                            color: "white",
                            padding: 4,
                            cursor: "pointer",
                          }}
                          onClick={handleDelete}
                        />
                      </div>
                    )}
                  </>
                </Form.Item>
                <Form.Item
                  label="Programming Language Title"
                  name="plName"
                  validateDebounce={1000}
                  rules={[
                    { min: 2, message: "Title must be at least 2 characters" },
                    {
                      required: true,
                      message:
                        "Please enter the appropriate Programming Language Title",
                    },
                  ]}
                >
                  <Input placeholder="Enter programming language title" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
          <Col
            style={{
              display: "flex",
              gap: 20,
              flexWrap: "wrap",
              marginTop: "10px",
              // alignItems:"center",
              // justifyContent:"center"
            }}
            xs={24}
            sm={24}
            md={24}
            lg={12}
          >
            {cardsData &&
              cardsData?.map((item) => {
                return (
                  <div
                    className="hoverable"
                    key={item.plId}
                    style={{
                      background: "#fff",
                      height: "125px",
                      width: "130px",
                      borderRadius: "5px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "5px",
                      }}
                    >
                      <img
                        alt="example"
                        src={item.imgUrl}
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                    <div style={{ textAlign: "center", fontWeight: "600" }}>
                      {item.plName}
                    </div>
                    <div style={{ display: "flex", marginTop: "5px" }}>
                      <div
                        style={{
                          width: "50%",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        {" "}
                        <Popconfirm
                          title="Delete the language"
                          description="Are you sure to delete this language?"
                          onConfirm={() => {
                            deleteLanguage(item.plId);
                          }}
                          // onCancel={cancel}
                          okText="Yes"
                          cancelText="No"
                        >
                          <Tooltip title="Delete language">
                            <Button variant="link" size="small">
                              <DeleteOutlined style={{ color: "red" }} />
                            </Button>
                          </Tooltip>
                        </Popconfirm>
                        {/* <DeleteOutlined
                          onClick={deleteLanguage()}
                          style={{ color: "red" }}
                          key="setting"
                        /> */}
                      </div>
                      <div
                        style={{
                          width: "50%",
                          textAlign: "center",
                          cursor: "pointer",
                        }}
                      >
                        {" "}
                        <Tooltip title="Edit menu">
                          <Button
                            onClick={() => getPLById(item.plId)}
                            size="small"
                            variant="link"
                          >
                            <EditOutlined />
                          </Button>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                );
              })}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProgrammingLanguages;
