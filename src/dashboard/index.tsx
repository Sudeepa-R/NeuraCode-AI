import { useEffect, useState } from "react";
import DashboardTemplate from "./Template";
import TemplateHeader from "./TemplateHeader";
import DashboardFooter from "./dashboard-footer";

const Dashboard = () => {
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
      <DashboardTemplate />
      <DashboardFooter/>
    </>
  );
};

export default Dashboard;
