import { message } from "antd";

type NoticeType = "info" | "warning" | "error" | "success";

export const openMessagesWithIcon = (
  
  msgType: NoticeType,
  msg: string='',
  isLoading: boolean=false
) => {
  const key = "updatable";
console.log('loading',isLoading)
  {
    isLoading
      ? message.open({
          key,
          type: "loading",
          content: "Loading...",
          duration:2
        })
      : message.open({
          key,
          type: msgType,
          content: msg,
          duration: 2,
        });
  }
};
