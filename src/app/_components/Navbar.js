"use client";
import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import Image from "next/image";
import styles from "./Navbar.module.css";
import DrawerComp from "./DrawerComp";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/navigation";
import ModalComp from "./ModalComp";

// const PAGES = ["Home", "Services", "Portfolio", "Blog", "Contact Us"];

const Navbar = () => {
  const [value, setValue] = useState(0);
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // const theme = useTheme();
  const isMatch = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const router = useRouter();

  const handleNavigateHome = () => {
    router.push("/");
  };

  const handleNavigateServices = () => {
    router.push("/services");
  };

  const handleNavigatePortfolio = () => {
    router.push("/portfolio");
  };

  const handleNavigateBlog = () => {
    router.push("/blog");
  };

  const handleNavigateContactUs = () => {
    router.push("/contactus");
  };
  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <React.Fragment>
      <AppBar
        sx={{
          background: "white",
          boxShadow: "0",
          p: "2px",
          paddingTop: "10px",
        }}
      >
        <Toolbar className={styles.image1}>
          <Image
            alt="logo"
            className={(styles.lightversionlogo, styles.tdclogo)}
            src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112162/tdc_circle_logo_zv5lrw.png"}
            width={50}
            height={50}
          />
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs
                value={value}
                onChange={handleTabChange}
                textColor="primary"
                sx={{
                  marginLeft: "40px",
                }}
              >
                {/* {
                    PAGES.map((page,index)=>(
                        <Tab key={index} label={page} />

                    ))
                } */}
                <Tab
                  label="Home"
                  onClick={handleNavigateHome}
                  value={0}
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    opacity: 1,
                    fontSize: "17px",
                    textTransform: "none",
                    "&:hover": { color: "#2B59FF" },
                  }}
                />
                
                {/* <Tab
                  value={1}
                  label={
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <ListItemText primary="Services" />
                      <ListItemIcon sx={{ paddingLeft: "8px" }}>
                        <i
                          className="fa fa-angle-down"
                          aria-hidden="true"
                          style={{ fontWeight: "bolder", fontSize: "18px" }}
                        ></i>
                      </ListItemIcon>
                    </Box>
                  }
                  onClick={handleMenuOpen}
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    opacity: 1,
                    fontSize: "17px",
                    textTransform: "none",
                    paddingRight: "0px",
                    "&:hover": { color: "#2B59FF" },
                  }}
                /> */}
                <Tab
                  label="Portfolio"
                  onClick={handleNavigatePortfolio}
                  value={2}
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    opacity: 1,
                    fontSize: "17px",
                    textTransform: "none",
                    "&:hover": { color: "#2B59FF" },
                  }}
                />
                <Tab
                  value={3}
                  label="Blog"
                  onClick={handleNavigateBlog}
                  sx={{
                    color: "#000",
                    opacity: 1,
                    fontWeight: 400,
                    fontSize: "17px",
                    textTransform: "none",
                    "&:hover": { color: "#2B59FF" },
                  }}
                />
                <Tab
                  value={4}
                  onClick={handleNavigateContactUs}
                  label="Contact Us"
                  sx={{
                    color: "#000",
                    fontWeight: 400,
                    opacity: 1,
                    fontSize: "17px",
                    textTransform: "none",
                    "&:hover": { color: "#2B59FF" },
                  }}
                />
              </Tabs>
              {/* Submenu for Services */}
              {/* <Menu
                anchorEl={menuAnchorEl}
                open={Boolean(menuAnchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>
                  Project Management
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                  IT Staff Augmentation
                </MenuItem>
                <MenuItem onClick={handleMenuClose}>Data Engineering</MenuItem>
                <MenuItem onClick={handleMenuClose}>AI/ML Specialists</MenuItem>
              </Menu> */}

              <Button
                className={styles.btn1}
                sx={{
                  marginLeft: "auto",
                  marginRight: "100px",
                  minWidth: "180px",
                  height: "50px",
                  borderRadius: "5px",
                  backgroundColor: "#2B59FF",
                  fontSize: "17px",
                  textTransform: "none",
                  boxShadow: "none",
                }}
                variant="contained"
                onClick={() => setModalOpen(true)}
              >
                Hire Now
              </Button>
              <ModalComp onOpen={isModalOpen} onClose={handleClose} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Navbar;
