"use client";
import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box, Button, Tabs, Tab } from "@mui/material";
import styles from "./slider.module.scss";
import Image from "next/image";
import VerticalTabs from "./VerticalTabs";
import zIndex from "@mui/material/styles/zIndex";
import ModalComp from "./ModalComp";

const tabsData = [
  {
    label: (
      <div>
        {" "}
        <i
          className="fa fa-pie-chart"
          aria-hidden="true"
          style={{ fontSize: "18px", marginRight: "10px" }}
        ></i>
        Contractors
      </div>
    ),
    content: (
      <Box
        sx={{
          display: { lg: "flex" },
          background: "transparent",
          marginLeft: { lg: "20px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "280px", lg: "290px" },
            width: { xs: "300px", lg: "350px" },
            background: "#f2f5fb29",
            borderRadius: "15px",
            marginLeft: { lg: "50px" },
            marginRight: { lg: "40px" },
            padding: "15px",
            marginTop: { lg: "-20px" },
            marginBottom: { xs: "35px" },
          }}
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <Typography
            className={styles.h2}
            variant="h2"
            sx={{
              fontWeight: "500",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            01.
          </Typography>
          <Typography
            className={styles.detailedText}
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "20px",
              paddingTop: "30px",
              letterSpacing: "normal",
              lineHeight: "1.67",
              opacity: "0.65",
              width: "100%",
            }}
          >
            Hire full-time remote engineers as contractors, and set your own
            terms as you like.
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "280px", lg: "290px" },
            width: { xs: "300px", lg: "350px" },
            background: "#f2f5fb29",
            borderRadius: "15px",
            marginLeft: { lg: "50px" },
            marginRight: { lg: "40px" },
            padding: "15px",
            marginTop: { lg: "-20px" },
            marginBottom: { xs: "35px" },
          }}
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <Typography
            className={styles.h2}
            variant="h2"
            sx={{
              // fontFamily: "Rubik",
              fontWeight: "500",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            02.
          </Typography>
          <Typography
            className={styles.detailedText}
            sx={{
              // fontFamily: "Rubik",
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "20px",
              paddingTop: "30px",
              letterSpacing: "normal",
              lineHeight: "1.67",
              opacity: "0.65",
              width: "100%",
            }}
          >
            Perfection option for short-term engagements allowing you to onboard
            and offboard minus the complex paper work.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    label: (
      <div>
        {" "}
        <i
          class="fa fa-flag"
          aria-hidden="true"
          style={{ fontSize: "18px", marginRight: "10px" }}
        ></i>
        Dedicated Teams
      </div>
    ),

    content: (
      <Box
        sx={{
          display: { lg: "flex" },
          background: "transparent",
          marginLeft: { lg: "20px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "280px", lg: "290px" },
            width: { xs: "300px", lg: "350px" },
            background: "#f2f5fb29",
            borderRadius: "15px",
            marginLeft: { lg: "50px" },
            marginRight: { lg: "40px" },
            padding: "15px",
            marginTop: { lg: "-20px" },
            marginBottom: { xs: "35px" },
          }}
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <Typography
            className={styles.h2}
            variant="h2"
            sx={{
              // fontFamily: "Rubik",
              fontWeight: "500",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            01.
          </Typography>
          <Typography
            className={styles.detailedText}
            sx={{
              // fontFamily: "Rubik",
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "20px",
              paddingTop: "30px",
              letterSpacing: "normal",
              lineHeight: "1.67",
              opacity: "0.65",
              width: "100%",
            }}
          >
            Get pre-vetted and fully aligned, full-time dedicated team, and
            enjoy the freedom you’ve always wanted.
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "280px", lg: "290px" },
            width: { xs: "300px", lg: "350px" },
            background: "#f2f5fb29",
            borderRadius: "15px",
            marginLeft: { lg: "50px" },
            marginRight: { lg: "40px" },
            padding: "15px",
            marginTop: { lg: "-20px" },
            marginBottom: { xs: "35px" },
          }}
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <Typography
            className={styles.h2}
            variant="h2"
            sx={{
              // fontFamily: "Rubik",
              fontWeight: "500",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            02.
          </Typography>
          <Typography
            className={styles.detailedText}
            sx={{
              // fontFamily: "Rubik",
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "20px",
              paddingTop: "30px",
              letterSpacing: "normal",
              lineHeight: "1.67",
              opacity: "0.65",
              width: "100%",
            }}
          >
            Our well-trained and dedicated tech teams take care of everything
            allowing you to grow bigger and better.
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    label: (
      <div>
        {" "}
        <i
          class="fa fa-line-chart"
          aria-hidden="true"
          style={{ fontSize: "18px", marginRight: "10px" }}
        ></i>
        Employer on Record
      </div>
    ),

    content: (
      <Box
        sx={{
          display: { lg: "flex" },
          background: "transparent",
          marginLeft: { lg: "20px" },
        }}
      >
        <Box
          sx={{
            height: { xs: "280px", lg: "290px" },
            width: { xs: "300px", lg: "350px" },
            background: "#f2f5fb29",
            borderRadius: "15px",
            marginLeft: { lg: "50px" },
            marginRight: { lg: "40px" },
            padding: "15px",
            marginTop: { lg: "-20px" },
            marginBottom: { xs: "35px" },
          }}
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <Typography
            className={styles.h2}
            variant="h2"
            sx={{
              // fontFamily: "Rubik",
              fontWeight: "500",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            01.
          </Typography>
          <Typography
            className={styles.detailedText}
            sx={{
              // fontFamily: "Rubik",
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "20px",
              paddingTop: "30px",
              letterSpacing: "normal",
              lineHeight: "1.67",
              opacity: "0.65",
              width: "100%",
            }}
          >
            Talent has no borders and we let you hire full time employee where
            you drive the resource.
          </Typography>
        </Box>
        <Box
          sx={{
            height: { xs: "280px", lg: "290px" },
            width: { xs: "300px", lg: "350px" },
            background: "#f2f5fb29",
            borderRadius: "15px",
            marginLeft: { lg: "50px" },
            marginRight: { lg: "40px" },
            padding: "15px",
            marginTop: { lg: "-20px" },
            marginBottom: { xs: "35px" },
          }}
          data-aos="fade-left"
          data-aos-duration="300"
        >
          <Typography
            className={styles.h2}
            variant="h2"
            sx={{
              // fontFamily: "Rubik",
              fontWeight: "500",
              paddingLeft: "15px",
              paddingTop: "10px",
            }}
          >
            02.
          </Typography>
          <Typography
            className={styles.detailedText}
            sx={{
              // fontFamily: "Rubik",
              fontSize: "18px",
              fontWeight: "400",
              paddingLeft: "20px",
              paddingTop: "30px",
              letterSpacing: "normal",
              lineHeight: "1.67",
              opacity: "0.65",
              width: "100%",
            }}
          >
            You hire full time employees and we take on the liability to make
            sure the compliance.
          </Typography>
        </Box>
      </Box>
    ),
  },
];

const ContractingModels = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box className={styles.contractingModelsMainBox}>
      <Box className={styles.CircleBox}>
        <Image className={[styles.Circle]} src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112071/circle-shape_fszm1g.png"} width={250} height={250}></Image>
      </Box>
      <Box
        data-aos="fade-right"
        data-aos-duration="300"
        sx={{
          width: { lg: "50%" },
          height: "auto",
          left: { lg: "150px" },
          position: "relative",
          zIndex: "10",
          padding: { xs: "0px 12px" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            marginBottom: "0px",
            color: "#fff",
            fontSize: { xs: "34px", lg: "65px" },
            fontWeight: "500",
            marginBottom: "30px",
          }}
        >
          Variety of Contracting Models.
        </Typography>
        <Typography
          sx={{
            color: "#fff",
            letterSpacing: "-1px",
            // fontSize: { sx: "22px", lg: "21px" },
            fontSize: "21px",
            fontWeight: "400",
            marginBottom: "10px",
          }}
        >
          At TDC, we have a range of contracting models available for you. Enjoy
          the flexibility of choosing a model that best suits your needs.
        </Typography>
      </Box>

      <VerticalTabs
        tabs={tabsData}
        selectedTab={selectedTab}
        handleChange={handleChange}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          marginTop: { xs: "20px" },
        }}
      >
        <Button
          sx={{
            width: "180px",
            height: "53px",
            fontWeight: "500",
            fontSize: "15px",
            lineHeight: "28px",
            borderRadius: "5px",
            padding: "5px",
            textTransform: "none",
            background: "#fff",
            "&:hover": {
              background: "#fff",
            },
          }}
          data-aos="fade-up"
          data-aos-duration="300"
          onClick={handleOpenModal}
        >
          Hire Now
        </Button>
        <ModalComp onOpen={isModalOpen} onClose={handleCloseModal} />
      </Box>
    </Box>
  );
};

export default ContractingModels;
