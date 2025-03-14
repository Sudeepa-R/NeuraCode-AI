import { message } from "antd";

type NoticeType = "info" | "warning" | "error" | "success";

export const openMessagesWithIcon = (msgType: NoticeType, msg:string) => {
  const key = "updatable";

  message.open({
    key,
    type: "loading",
    content: "Loading...",
  });
  setTimeout(() => {
    message.open({
      key,
      type: msgType,
      content: msg,
      duration: 2,
    });
  }, 1000);
};
