import Cookies from "universal-cookie";

const cookies = new Cookies();

export function LogoutSession() {
  clearLocalStorage();
  removeCokies();
}

export const clearLocalStorage = () => {
  localStorage.clear();
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

