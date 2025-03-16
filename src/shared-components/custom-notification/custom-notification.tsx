import { notification } from "antd";
import {
  CloseCircleFilled,
  CheckCircleFilled,
  WarningFilled,
  InfoCircleFilled,
} from "@ant-design/icons";

type NoticeType = "info" | "warning" | "error" | "success";

export const OpenNotificationWithIcon = (msgType: NoticeType, msg: string) => {
  console.log("object,", msgType);
  const clr =
    msgType === "error"
      ? "#FF4D4F"
      : msgType === "success"
      ? "#52C41A"
      : msgType === "warning"
      ? "#FAAD14"
      : "#1677FF";

  const bgClr =
    msgType === "error"
      ? "#FFF2F0"
      : msgType === "success"
      ? "#F6FFED"
      : msgType === "warning"
      ? "#FFFBE6"
      : "#E6F4FF";

  const iconMap = {
    error: <CloseCircleFilled style={{ color: clr }} />,
    success: <CheckCircleFilled style={{ color: clr }} />,
    warning: <WarningFilled style={{ color: clr }} />,
    info: <InfoCircleFilled style={{ color: clr }} />,
  };

  notification["open"]({
    message: (
      <p style={{ color: '#000000', fontWeight: "700", fontSize: "20px" }}>{msg}</p>
    ),
    icon: iconMap[msgType], 
    style: { color: clr, background: bgClr },
    duration: 3,
    showProgress: true,
  });
};
