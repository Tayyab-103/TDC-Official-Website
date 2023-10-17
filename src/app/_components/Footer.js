"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  IconButton,
  TextField,
  Button,
  Box,
  List,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../components/Images/tdc_circle_logo.png";
import Image from "next/image";
import styles from "./Footer.module.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Divider from "@mui/material/Divider";
import Link from "next/link";
import Clutch from "../../components/Images/Clutch.png";
import ModalComp from "./ModalComp";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const PAGES = ["About Us", "Portfolio", "Contact"];
const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    details: "News Letter",
  };
  const [contactData, setContactData] = useState(initialData);
  // console.log("STATE", contactData);

  const handleInputChange = (field, value) => {
    setContactData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://tdc-website-backend-16139a1f3254.herokuapp.com/contact-us",
        contactData
      )
      .then((res) => {
        toast.success(res.data.message);
        setContactData(initialData);
      })
      .catch((error) => {
        toast.error("Error Occoured");
      });
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Box sx={{ background: "#F3F4F6" }}>
      <Box
        sx={{
          paddingTop: "80px",
          paddingBottom: "70px",
        }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingLeft: "100px",
            paddingRight: "90px",
          }}
        >
          {/* Left Section */}
          <Grid item xs={12} sm={8} md={3} sx={{ marginBottom: "50px" }}>
            <Image
              width={160}
              height={160}
              alt="logo"
              src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112162/tdc_circle_logo_zv5lrw.png"}
              className={styles.logo2}
            />

            <div
              className={styles.ftext1}
              sx={{ color: "#262729B3", fontSize: "16px", pt: 3 }}
            >
              Resource augmentation company to
              <Typography
                sx={{ pt: "6px", color: "#262729B3", fontSize: "16px" }}
              >
                simplify your tech hiring process.
              </Typography>
            </div>

            <Box sx={{ pt: 5 }}>
              <Link
                href="https://www.facebook.com/thedevcorporate"
                target="_blank"
              >
                <IconButton size="small">
                  <FacebookIcon
                    className={styles.subIcons}
                    sx={{
                      color: "black",
                      fontSize: "17px",
                      marginRight: "15px",
                    }}
                  />
                </IconButton>
              </Link>

              <Link
                href="https://twitter.com/TheDevCorp?t=HICVK3-5QmqhyNX0yV1fGw&s=09"
                target="_blank"
              >
                <IconButton size="small">
                  <TwitterIcon
                    className={styles.subIcons}
                    sx={{
                      color: "black",
                      fontSize: "17px",
                      marginRight: "15px",
                    }}
                  />
                </IconButton>
              </Link>
              <Link
                href="https://www.instagram.com/thedevcorporate/"
                target="_blank"
              >
                <IconButton size="small">
                  <InstagramIcon
                    className={styles.subIcons}
                    sx={{
                      color: "black",
                      fontSize: "17px",
                      marginRight: "15px",
                    }}
                  />
                </IconButton>
              </Link>
              <Link
                href="https://www.linkedin.com/company/the-dev-corporate/mycompany/"
                target="_blank"
              >
                <IconButton size="small">
                  <LinkedInIcon
                    className={styles.subIcons}
                    sx={{
                      color: "black",
                      fontSize: "17px",
                      marginRight: "15px",
                    }}
                  />
                </IconButton>
              </Link>
            </Box>
          </Grid>

          {/* Contact Details */}
          <Grid item xs={12} sm={8} md={3} sx={{ marginBottom: "50px" }}>
            <Typography
              sx={{ marginBottom: "20px", fontSize: "16px" }}
              variant="h6"
            >
              Contact Details
            </Typography>
            <Box sx={{ width: "200px" }}>
              <Box sx={{ display: "flex" }}>
                <IconButton sx={{ color: "blue" }}>
                  <LocationOnIcon />
                </IconButton>
                <Typography
                  sx={{
                    paddingTop: "10px",
                    color: "#262729B3",
                    fontSize: "15px",
                  }}
                >
                  Address:
                </Typography>
              </Box>

              <Typography
                sx={{
                  marginLeft: "30px",
                  marginBottom: "23px",
                  color: "#262729B3",
                  fontSize: "15px",
                }}
              >
                4445 Corporation Ln. STE 264 Virginia Beach VA 23462 USA
              </Typography>
              <Box sx={{ display: "flex", color: "#262729B3" }}>
                <IconButton sx={{ color: "blue" }}>
                  <LocalPhoneIcon />
                </IconButton>
                <Typography sx={{ paddingTop: "10px", fontSize: "15px" }}>
                  Phone:
                </Typography>
              </Box>
              <Typography
                sx={{
                  marginLeft: "30px",
                  color: "#262729B3",
                  marginBottom: "23px",
                  fontSize: "15px",
                  fontSize: "15px",
                }}
              >
                +1 757 634 3579
              </Typography>
              <Box sx={{ display: "flex" }}>
                <IconButton sx={{ color: "blue" }}>
                  <EmailIcon />
                </IconButton>
                <Typography
                  value={contactData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  sx={{
                    paddingTop: "10px",
                    color: "#262729B3",
                    fontSize: "15px",
                  }}
                >
                  Email:
                </Typography>
              </Box>
              <Typography
                sx={{
                  marginLeft: "30px",
                  color: "#262729B3",
                  fontSize: "15px",
                }}
              >
                info@thedevcorporate.com
              </Typography>
            </Box>
          </Grid>

          {/* About Us */}
          <Grid className={styles.company2} item xs={12} sm={8} md={2}>
            <Box className={styles.company2}>
              <Typography variant="h6" sx={{ fontSize: "16px" }}>
                Company
              </Typography>

              <List>
                <Typography
                  sx={{ lineHeight: 3, color: "#262729B3", fontSize: "15px" }}
                >
                  About us
                </Typography>
                <Typography
                  sx={{ lineHeight: 3, color: "#262729B3", fontSize: "15px" }}
                >
                  Portfolios
                </Typography>
                <Typography
                  sx={{ lineHeight: 3, color: "#262729B3", fontSize: "15px" }}
                >
                  Contact
                </Typography>
              </List>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4} sx={{ marginBottom: "40px" }}>
            <Typography
              sx={{ marginBottom: "20px", fontSize: "16px", pt: 2 }}
              variant="h6"
            >
              Newsletter
            </Typography>
            <Typography
              sx={{
                marginBottom: "20px",
                fontSize: "15px",
                color: "#262729B3",
              }}
              variant="body2"
            >
              Get the latest trends and updates right at your inbox.
            </Typography>
            <TextField
              sx={{ background: "white", marginBottom: "20px" }}
              label="Your Enter Email"
              value={contactData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              variant="outlined"
              fullWidth
              margin="dense"
            />

            <Button
              sx={{
                minWidth: "160px",
                height: "48px",
                borderRadius: "5px",
                backgroundColor: "#2B59FF",
                fontSize: "15px",
                float: "right",
                textTransform: "none",
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              <strong>Hire Now</strong>
            </Button>

            <Image
              className={styles.image}
              alt="BlogCardPic"
              src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697192917/Clutch_iqoyrk.webp"}
              width={200}
              height={90}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Divider />

        <Typography
          sx={{
            textAlign: "center",
            pt: "20px",
            paddingBottom: "20px",
            color: "#262729B3",
            fontSize: "13px",
          }}
        >
          © 2023 The Dev Corporate. All Rights Reserved
        </Typography>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default Footer;