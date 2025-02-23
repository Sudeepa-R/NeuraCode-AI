import { Button, Col, Row } from "antd";
import { motion } from "framer-motion";
import notFoundImg from "../../assets/pagenotfound.gif";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const navigate=useNavigate();
  return (
    <>
      <div style={{height:"100vh"}}>
        <Row
          style={{
           
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background:'#F7F9FB'
          }}
        >
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              flexWrap: "wrap",
              background:"#F7F9FB"
            }}
            xs={24}
            sm={24}
            md={24}
            lg={24}
          >
            <div style={{width:"100%", display:'flex', justifyContent:'center'}}>
              <img className="pageNotFoundImage" src={notFoundImg} alt=""/>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{
                padding: "0",
                fontSize: "16px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                position:"absolute",
                bottom:40
                
              }}
            >
              <Button
                className="tryButton"
                style={{ backgroundColor: "#cadcfc" }}
                variant="filled"
                onClick={()=>{

                  navigate("/")}}
              >
                Return to privious page
              </Button>
            </motion.button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PageNotFound;
