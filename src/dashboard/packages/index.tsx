import { useEffect, useState } from "react";
import TemplateHeader from "../TemplateHeader";
import PackagesPage from "./PackagesPage";
import DashboardFooter from "../dashboard-footer";

const PackagesIndex = () => {
  const [bgColor, setBgColor] = useState("transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      if (scrollHeight > 40) {
        setBgColor("#fff");
      } else {
        setBgColor("transparent");
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Runs only once on mount
  return (
    <>
      <TemplateHeader bgColor={bgColor} />
      <PackagesPage />
      <DashboardFooter/>
    </>
  );
};

export default PackagesIndex;
