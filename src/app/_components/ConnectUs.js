"use client";
import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import styles from "./ConnectUs.module.scss";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const blinkAnimation = `
  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }
    50%{
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
const commonStyles = {
  bgcolor: "#2b59ff",
  animation: "blink 1s infinite",
  bborderRadius: 1,
  width: 140,
};
const ConnectUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Set your custom animation duration in milliseconds
    });
  }, []);
  return (
    <Box className={styles.wrkplce}>
      <Box className={styles.mainCntent}>
        <Typography
          variant="h6"
          sx={{
            color: "#2b59ff",
            textAlign: "center",
            fontSize: "15px",
            fontWeight: "500",
            marginTop: "60px",
            marginBottom: "10px",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Connect With Us
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Typography 
            variant="h2"
            sx={{ fontSize: { sm: "32px" , md: "48px" , xs:"32px"}, fontWeight: "500", lineHeight: "60px" }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Join Our Workplaces Around The World
          </Typography>
        </Box>
      </Box>
      <Box sx={{ position: "relative"}}>
        <Box className={styles.footermap}>
          <Image
            src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112074/contact-map_zbcefn.png"}
            width={1075}
            height={525}
            alt="cont"
            layout="responsive"
            className={styles.connectImg}
          />
        </Box>
         
         <Box className={styles.vgibeach}>
          <Typography sx={{ fontSize:"11px", fontWeight: "500" }}>
            4445 Corporation Ln. STE 264 Virginia Beach VA 23462 USA
          </Typography>
        </Box>
        <Box className={styles.jhrtwn}>
          <Typography sx={{ fontSize: "11px", fontWeight: "500" }}>
            392 F, Johar Town, Lahore Pakistan
          </Typography>
        </Box>
         
        
      </Box>
    </Box>
  );
};

export default ConnectUs;