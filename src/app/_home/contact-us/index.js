"use client"
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React,{useState,useEffect}from "react";
import Avatar from "@mui/material/Avatar";
import Hidden from "@mui/material/Hidden";
import AOS from "aos";
import "aos/dist/aos.css";
import ModalComp from "@/app/_components/ModalComp";
export default function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const colorText = "rgba(37, 55, 63, 0.7)";
  const colorHeading = "#25373F";
  const avatarStyle = {
    width: 70,
    height: 70,
    color: "#fff",
    fontSize: "21px",
    fontWeight: "500",
    margin: "0 0 45px",
  };
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    height: "300px",
    boxShadow: "none",
    background: "#F3F4F6",
    width: "80%",
  };

  const gridStyle = {
    padding: "0px 12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  //Horizontal Lines Styling
  const horizontalLineStyle1 = {
    content: "''",
    position: "absolute",
    width: " 15%", // Adjust the width as needed
    borderBottom: "1px solid #ccc", // Adjust the border style as needed
    top: "calc(50% + -5px)", // Adjust the top position as needed
    left: "270px", // Adjust the left position as needed
  };
  const horizontalLineStyle2 = {
    content: "''",
    position: "absolute",
    width: " 15%",
    borderBottom: "1px solid #ccc",
    top: "calc(50% + -5px)",
    left: "630px",
  };

  const horizontalLineStyle3 = {
    content: "''",
    position: "absolute",
    width: " 15%",
    borderBottom: "1px solid #ccc",
    top: "calc(50% + -5px)",
    left: "995px",
  };

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //   });
  // }, []);

  return (
    <Grid
      container
      alignItems="center"
      textAlign="center"
      sx={{ background: "#F3F4F6", padding: "72px 50px 90px", margin: "0px" }}
    >
      <Grid item xs={12} md={12} lg={12}>
        <Typography
          variant="h6"
          fontWeight="500"
          fontSize="16px"
          m="15px"
          sx={{
            color: "#2b59ff",
            fontWeight: "500",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <Typography
          variant="h2"
          fontWeight="500"
          fontSize="45px"
          mb="55px"
          sx={{ color: "#262729" }}
          data-aos="fade-up"
          data-aos-duration="500"
        >
          Digital system for your company
        </Typography>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={{ ...gridStyle }}>
        <Card
          sx={{
            ...cardStyle,
          }}
        >
          <Avatar
            sx={{
              ...avatarStyle,
              backgroundColor: "#2b59ff ",
              boxShadow: "0px 12px 14px rgba(0, 0, 0, 0.2)",
            }}
          >
            1
          </Avatar>
          <Typography
            variant="h2"
            fontWeight="500"
            fontSize="21px"
            mb="45px"
            sx={{ color: colorHeading }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Describe your needs
          </Typography>
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            sx={{ color: colorText }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Tell us your technology requirements and describe your project using
            our contact form.
          </Typography>
          {/* <Hidden lgDown>
            <div style={horizontalLineStyle1} />
          </Hidden> */}
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={{ ...gridStyle }}>
        <Card
          sx={{
            ...cardStyle,
          }}
        >
          <Avatar
            sx={{
              ...avatarStyle,
              backgroundColor: "#FFB700 ",
              boxShadow: "0px 12px 14px rgba(255, 183, 0, 0.5)",
            }}
          >
            2
          </Avatar>

          <Typography
            variant="h2"
            fontWeight="500"
            fontSize="21px"
            mb="20px"
            sx={{ color: colorHeading }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Schedule meeting to align on goals
          </Typography>
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            sx={{ color: colorText }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            No one-size-fits-all. We alwayscreate a unique team augmentation
            startegy.
          </Typography>
          {/* <Hidden lgDown>
            <div style={horizontalLineStyle2} />
          </Hidden> */}
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={{ ...gridStyle }}>
        <Card
          sx={{
            ...cardStyle,
          }}
        >
          <Avatar
            sx={{
              ...avatarStyle,
              backgroundColor: "#2b59ff ",
              boxShadow: "0px 12px 14px rgba(0, 0, 0, 0.2)",
            }}
          >
            3
          </Avatar>
          <Typography
            variant="h2"
            fontWeight="500"
            fontSize="21px"
            mb="45px"
            sx={{ color: colorHeading }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Approve your team
          </Typography>
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            sx={{ color: colorText }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Our HR and tech leaders provide you CVs. You approve each candidate
            who will join your team.
          </Typography>
          {/* <Hidden lgDown>
            <div style={horizontalLineStyle3} />
          </Hidden> */}
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} md={3} lg={3} sx={{ ...gridStyle }}>
        <Card
          sx={{
            ...cardStyle,
          }}
        >
          <Avatar
            sx={{
              ...avatarStyle,

              backgroundColor: "#FFB700",
              boxShadow: "0px 12px 14px rgba(255, 183, 0, 0.5)",
            }}
          >
            4
          </Avatar>
          <Typography
            variant="h2"
            fontWeight="500"
            fontSize="21px"
            mb="20px"
            sx={{ color: colorHeading }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            Start your project with remote talent
          </Typography>
          <Typography
            variant="h2"
            fontWeight="400"
            fontSize="16px"
            lineHeight="24px"
            sx={{ color: colorText }}
            data-aos="fade-up"
            data-aos-duration="500"
          >
            We seal the deal with a contract and launch your remote team.
          </Typography>
        </Card>
      </Grid>

      <Grid item xs={12} md={12} lg={12} sx={{ padding: "0px 12px" }}>
        <Button
          variant="contained"
          sx={{
            minWidth: "172px",
            height: "50px",
            padding: "5px",
            marginY: "50px",
            background: "#2b59ff",
            textTransform: "none",
          }}
          data-aos="fade-up"
          data-aos-duration="500"
          easing="ease-in-out"
          onClick={handleOpenModal}
        >
          
          Contact Us
        </Button>
        <ModalComp onOpen={isModalOpen} onClose={handleCloseModal} />
      </Grid>
    </Grid>
  );
}
