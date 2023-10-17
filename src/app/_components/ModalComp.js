"use client";
import * as React from "react";
import Modal from "@mui/material/Modal";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  MenuItem,
  Box,
  Icon,
  Paper,
} from "@mui/material";
import Image from "next/image";
import phone from "../../components/Images/phoneIcon.svg";
import email from "../../components/Images/email_icon.svg";
import useMediaQuery from "@mui/material/useMediaQuery";
import styles from "./ModalComp.module.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  background: "url(./modalBg.png)",
  backgroundRepeat: "no-repeat",
  borderRadius: "15px",
  backgroundSize: "cover",
  p: 4,
};

const ModalComp = ({ onOpen, onClose }) => {
  const [open, setOpen] = useState(false);
  const initialData = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    details: "Get In Touch",
  };
  const [contactData, setContactData] = useState(initialData);
  // console.log("STATE", contactData);

  const handleInputChange = (field, value) => {
    setContactData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit1 = (e) => {
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

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    onClose();
    setOpen(false);
  };

  const [selectedOption, setSelectedOption] = React.useState("");
  const matches = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setOpen(onOpen);
  }, [onOpen]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Grid container spacing={4}> */}
          {/* <Grid item xs={12} sm={12} md={6}> */}

          <Box
            className={styles.mainbox}
            sx={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Box className={styles.textfieldbox} sx={{ width: "50%" }}>
              <Typography
                className={styles.heading2}
                sx={{
                  fontSize: "40px",
                  fontWeight: 700,
                  "& span": { color: "#2B59FF" },
                  marginTop: "10px",
                }}
              >
                Get in <span>Touch</span>
              </Typography>
              <Box className={styles.description}>
                <Typography>
                  We have the tools to make your ideas into reality. We are
                  available to assist you and respond to your questions.
                </Typography>
              </Box>
              <Box className={styles.form} sx={{ marginTop: "20px" }}>
                <form onSubmit={handleSubmit}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    value={contactData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "8px" }}
                    required
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    value={contactData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "8px" }}
                    required
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    value={contactData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    fullWidth
                    sx={{ marginBottom: "8px" }}
                    required
                  />
                  <TextField
                    select
                    label="Select"
                    variant="outlined"
                    value={contactData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    fullWidth
                    sx={{ marginBottom: "8px" }}
                  >
                    <MenuItem value="IT Staff Augmentation">
                      IT Staff Augmentation
                    </MenuItem>
                    <MenuItem value="Software Development">
                      Software Development
                    </MenuItem>
                    <MenuItem value="Services For Startups">
                      Services For Startups
                    </MenuItem>
                  </TextField>
                  <TextField
                    label="Message Here"
                    variant="outlined"
                    value={contactData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    fullWidth
                    multiline
                    rows={2}
                    sx={{
                      marginBottom: "8px",
                      "& .MuiInputBase-input": { padding: "8px 12px" },
                    }}
                  />
                  <Button
                    variant="contained"
                    fullWidth
                    type="submit"
                    sx={{ backgroundColor: "#2B59FF", marginTop: "5px" }}
                    onClick={handleSubmit1}
                  >
                    Send
                  </Button>
                </form>
              </Box>
              <Box
                className={styles.contactbox}
                sx={{ display: "flex", marginTop: "10px", gap: 5 }}
              >
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box sx={{ pt: 1 }}>
                    <Image
                      src={phone}
                      width={28}
                      height={28}
                      alt="phone-icon"
                    />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#262729",
                        fontWeight: 600,
                      }}
                    >
                      PHONE
                    </Typography>
                    <Typography
                      className={styles.phone}
                      sx={{ fontSize: "12px" }}
                    >
                      +1 757 634 3579
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <Box sx={{ pt: 1 }}>
                    <Image
                      src={email}
                      width={28}
                      height={28}
                      alt="email-icon"
                    />
                  </Box>
                  <Box sx={{ gap: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "13px",
                        color: "#262729",
                        fontWeight: 600,
                      }}
                    >
                      EMAIL
                    </Typography>
                    <Typography
                      className={styles.email}
                      sx={{ fontSize: "12px" }}
                    >
                      info@thedevcorporate.com
                    </Typography>
                  </Box>
                </Box>
              </Box>
              {/* </Grid> */}
            </Box>

            {/* <Grid item xs={12} sm={6} md={6}> */}
            <Box className={styles.mapbox} sx={{ width: "40%" }}>
              <Paper elevation={3} sx={{ maxWidth: "545px", mt: 5 }}>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <iframe
                      title="Google Map"
                      src="https://maps.google.com/maps?q=the%20dev%20corporate&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                      frameBorder="0"
                      scrolling="no"
                      style={{ width: "100%", height: "550px" }}
                      className={styles.mapinner}
                    ></iframe>
                    <style className={styles.mapouter}>
                      {`.mapouter{position:relative;height:550px;width:100%;background:#fff;}
                        .gmap_canvas{overflow:hidden;height:700px;width:100%}
                        .gmap_canvas iframe{position:relative;z-index:2}`}
                    </style>
                  </div>
                </div>
              </Paper>
            </Box>
          </Box>
          {/* </Grid> */}
          {/* </Grid> */}
          <ToastContainer />
        </Box>
      </Modal>
    </div>
  );
};

export default ModalComp;
