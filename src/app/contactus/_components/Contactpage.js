"use client";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Container, { containerClasses } from "@mui/material/Container";
import React, { useState } from "react";
import styles from "./Contactuspage.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Checkbox from "@mui/material/Checkbox";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactpage = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const initialData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    details: "Contact Us",
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
  // const isValidEmailPattern =
  //   /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(contactData.email);
  // const isGmail = /^[a-zA-Z0-9_.+-]+@gmail\.com$/.test(contactData.email);
  // const emailError =
  //   contactData.email && !isValidEmailPattern
  //     ? "Please enter a valid email address."
  //     : contactData.email && !isGmail
  //     ? "Please enter a valid Gmail address."
  //     : "";

  // Handler function to update isCheckboxChecked
  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Box className={styles.mainBox}>
      <Container sx={{ paddingTop: "50px", paddingBottom: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                color: "#2b59ff",
                fontWeight: "600",
                display: "block",
                paddingBottom: "10px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h2"
              sx={{ fontSize: "30px", fontWeight: "600" }}
            >
              Send A Message
            </Typography>
            <Typography
              sx={{
                paddingTop: "20px",
                fontSize: "16px",
                fontWeight: "400",
                color: "rgba(38, 39, 41, 0.7)",
                lineHeight: "2.5",
              }}
            >
              We have the tools to make your ideas into reality.
              <Typography sx={{ display: "block", paddingBottom: "30px" }}>
                We are available to assist you and respond to your questions.
              </Typography>
            </Typography>

            <form>
              <Grid container spacing={2} className={styles.mainemail}>
                <Grid item md={6}>
                  <TextField
                    placeholder="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={contactData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    sx={{
                      border: "1px solid rgba(38, 39, 41, 0.1)",
                      // height: "46px",

                      backgroundColor: "white",
                      borderRadius: "500px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "unset",
                      },
                    }}
                  />
                </Grid>
                <Grid item md={6}>
                  <TextField
                    placeholder="Phone number"
                    type="tel"
                    variant="outlined"
                    value={contactData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    // fullWidth
                    sx={{
                      border: "1px solid rgba(38, 39, 41, 0.1)",
                      // height: "46px",
                      width: "100%",
                      marginBottom: "10px",
                      backgroundColor: "white",
                      borderRadius: "500px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "unset",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Subject"
                    variant="outlined"
                    fullWidth
                    border="none"
                    value={contactData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    sx={{
                      border: "1px solid rgba(38, 39, 41, 0.1)",
                      // height: "46px",
                      backgroundColor: "white",
                      borderRadius: "500px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "unset",
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Your Message Here "
                    multiline
                    rows={4}
                    variant="outlined"
                    value={contactData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    fullWidth
                    sx={{
                      border: "1px solid rgba(38, 39, 41, 0.1)",
                      backgroundColor: "white",
                      borderRadius: "10px",
                      height: "180px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "unset",
                      },
                    }}
                  />
                </Grid>
              </Grid>
              <Box className={styles.checkboxBlock}>
                <Box sx={{ display: "flex" }}>
                  <Box>
                    <Checkbox {...label} defaultChecked />
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: "13px", color: "#25373FB3" }}>
                      Your email address will not be published. Required fields
                      are marked
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                    sx={{
                      borderRadius: "55px",
                      minWidth: "180px",
                      fontSize: "15px",
                      height: "56px",
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Box>
            </form>
          </Grid>
          <Grid item md={6} sx={{ width: "100%" }}>
            {/* right side start */}
            <Box className={styles.rightmainpages}>
              {/* right main page start */}
              <Typography
                variant="h2"
                sx={{
                  fontSize: "32px",
                  fontWeight: "500",
                  color: "white",
                  display: "block",
                  paddingLeft: "25px",
                  paddingBottom: "17px",
                }}
              >
                Get In Touch
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "white",
                  paddingLeft: "25px",
                  paddingBottom: "20px",
                  lineHeight: "30PX",
                }}
              >
                Contact us and we will show you why
                <Typography>you should trust us!</Typography>
              </Typography>
              <Box
                sx={{
                  borderBottom: "  1px  solid rgba(255, 255, 255, 0.2)",
                  marginLeft: "25px",
                  marginRight: "50px",
                }}
              ></Box>
              {/* vist strat */}
              <Box className={styles.mainvist}>
                <Box className={styles.leftvistbg}>
                  <Box className={styles.mainicon}>
                    <LocationOnIcon />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    className={styles.visithover}
                    variant="h3"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "white",
                      paddingBottom: "10px",
                      paddingTop: "45px",
                      paddingLeft: "15px",
                    }}
                  >
                    Visit Us:
                  </Typography>{" "}
                  {/* vsit tytpography end */}
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#ffffff",
                      opacity: "0.7",
                      paddingLeft: "15px",
                    }}
                  >
                    4445 Corporation Ln
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#ffffff",
                      opacity: "0.7",
                      paddingLeft: "15px",
                    }}
                  >
                    STE 264 Virginia Beach VA
                    <Typography
                      sx={{
                        fontSize: "13px",
                        fontWeight: "400",
                        color: "#ffffff",
                        opacity: "0.7",
                      }}
                    >
                      23462 USA
                    </Typography>
                  </Typography>
                </Box>
              </Box>
              {/* vist end */}
              {/* Mail us strat */}
              <Box className={styles.mainvist}>
                <Box className={styles.leftvistbg}>
                  <Box className={styles.mainicon}>
                    <EmailIcon />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    className={styles.visithover}
                    variant="h3"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "white",
                      paddingBottom: "10px",
                      paddingTop: "45px",
                      paddingLeft: "15px",
                    }}
                  >
                    Mail Us:
                  </Typography>
                  {/* mail us tytpography end */}
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#ffffff",
                      opacity: "0.7",
                      paddingBottom: "20px",
                      paddingLeft: "15px",
                    }}
                  >
                    info@thedevcorporate.com
                  </Typography>
                </Box>
              </Box>

              {/* Mail us strat end */}
              {/* Contact Us strat */}
              <Box className={styles.mainvist}>
                <Box className={styles.leftvistbg}>
                  <Box className={styles.mainicon}>
                    <PhoneIcon />
                  </Box>
                </Box>
                <Box>
                  <Typography
                    className={styles.visithover}
                    variant="h3"
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                      color: "white",
                      paddingBottom: "10px",
                      paddingTop: "45px",
                      paddingLeft: "15px",
                    }}
                  >
                    Contact Us:
                  </Typography>
                  {/* mail us tytpography end */}
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "400",
                      color: "#ffffff",
                      opacity: "0.7",
                      paddingBottom: "20px",
                      paddingLeft: "15px",
                    }}
                  >
                    +1 757 634 3579
                  </Typography>
                </Box>
              </Box>

              {/* Contact Us end */}
            </Box>
            {/* right main page end */}
          </Grid>{" "}
          {/* right side end */}
        </Grid>
      </Container>
      <ToastContainer></ToastContainer>
    </Box>
  );
};

export default Contactpage;
