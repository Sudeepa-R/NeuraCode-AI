import Cookies from "universal-cookie";

const cookies = new Cookies();

export function LogoutSession() {
  clearLocalStorage();
  removeCokies();
}

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const checkTheToken = () => {
  const token = cookies.get("tokens");
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const removeCokies = () => {
  cookies.remove("tokens", {
    path: "/",
    expires: new Date("Thu, 01 Jan 1970 00:00:01"),
  });
};

export function goBack() {
  window.history.back();
}

export function currentUrlAssigned() {
  const currentUrl = window.location.href;
  const url = currentUrl.split("/").slice(-1)[0];
  return url;
}

export function getLocalStorageDataByKey(key: string) {
  if (typeof window !== undefined) {
    const data = JSON.parse(localStorage.getItem(key) || "{}");
    return data;
  }
}
