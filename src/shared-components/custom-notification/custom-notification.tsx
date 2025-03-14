import { notification } from "antd";
import {
  CloseCircleFilled,
  CheckCircleFilled,
  WarningFilled,
  InfoCircleFilled,
} from "@ant-design/icons";

type NoticeType = "info" | "warning" | "error" | "success";

export const OpenNotificationWithIcon = (msgType: NoticeType, msg: string) => {
    console.log('object,',msgType)
  const clr =
    msgType === "error"
      ? "#FF4D4F"
      : msgType === "success"
      ? "#52C41A"
      : msgType === "warning"
      ? "#FAAD14"
      : "#1677FF";

  const iconMap = {
    error: <CloseCircleFilled style={{ color: clr }} />,
    success: <CheckCircleFilled style={{ color: clr }} />,
    warning: <WarningFilled style={{ color: clr }} />,
    info: <InfoCircleFilled style={{ color: clr }} />,
  };

  notification['open']({
    message: <h5 style={{color:clr}}>{msg}</h5>,
    icon: iconMap[msgType], // Corrected icon selection
    style: { color: clr },
    duration: 2,
    showProgress:true
  });
};
