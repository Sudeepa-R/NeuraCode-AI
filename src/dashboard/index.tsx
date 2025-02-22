import { useCallback, useEffect, useState } from "react";
import DashboardTemplate from "./Template";
import TemplateHeader from "./TemplateHeader";
import DashboardFooter from "./dashboard-footer";
import { connect } from "react-redux";
import { SetActivePageKey } from "../shared-components/react-redux-store/Store";
import PackagesPage from "./packages/PackagesPage";
import ContactUsPage from "./contact/ContactUs";

const Dashboard = (props: any) => {
  const [bgColor, setBgColor] = useState("transparent");
  const [currentPage, SetCurrentPage] = useState(props.activepageKey);

  const handleScroll = useCallback(() => {
    setBgColor(window.scrollY > 40 ? "#fff" : "transparent");
  }, []);

  window.onscroll = handleScroll;

  useEffect(() => {
    window.scrollTo(0, 0);
    SetCurrentPage(props.activepageKey);
    if (props.activepageKey === "login") {
      console.log(11111111111, props.activepageKey);
    }
  }, [props.activepageKey]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollHeight = window.scrollY;
  //     if (scrollHeight > 40) {
  //       setBgColor("#fff");
  //     } else {
  //       setBgColor("transparent");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup function to remove event listener
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  return (
    <>
      <TemplateHeader bgColor={bgColor} />
      {currentPage && currentPage === "home" ? (
        <DashboardTemplate />
      ) : currentPage === "packages" ? (
        <PackagesPage />
      ) : currentPage === "contact" ? (
        <ContactUsPage />
      ) : (
        <DashboardTemplate />
      )}

      <DashboardFooter />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  activepageKey: state.neuracodeai.activepageKey,
});

const mapDispatchToProps = (dispatch: any) => ({
  SetActivePageKey: (data: string) => dispatch(SetActivePageKey(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
