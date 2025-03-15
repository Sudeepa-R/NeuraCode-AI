import { useEffect, useState } from "react";
import MainHeader from "../main-header/main-header";

const CodeConverterIndex = (props: any) => {

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
        }, []); 

  return (
    <>
      <MainHeader bgColor={bgColor}/>
      {props.children}
    </>
  );
};

export default CodeConverterIndex;
