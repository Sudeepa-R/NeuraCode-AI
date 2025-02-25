import { useEffect, useState } from "react";
import DashboardFooter from "./dashboard-footer";
import TemplateHeader from "./TemplateHeader";

const DashboardMainPage = (props: any) => {
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
      <div>
        <TemplateHeader bgColor={bgColor}/>
        {props.children}
        <DashboardFooter />
      </div>
    </>
  );
};

export default DashboardMainPage;
