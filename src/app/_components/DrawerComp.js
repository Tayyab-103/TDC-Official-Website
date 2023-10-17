"use client"
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Paper, // Import Paper from Material-UI
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const PAGES = ["Home", "Services", "Portfolio", "Blog", "Contact Us"];

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleTabClick = (page) => {
    setActiveTab(page);
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer
        sx={{ width: "244px" }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          onClick={() => setOpenDrawer(false)}
          sx={{
            position: "relative",
            width: "40px",
            height: "20px",
            marginTop: "20px",
            marginLeft: "300px",
            zIndex:"100"
          }}
        >
          <Paper elevation={1} sx={{ padding: "8px" }}>
            {/* Wrap the CloseIcon in a Paper */}
            <CloseIcon />
          </Paper>
        </Box>

        <List sx={{ paddingTop: "30px" }}>
          {PAGES.map((page, index) => (
            <Paper key={index} elevation={1} sx={{ marginBottom: "8px" }}>
              {/* Wrap the ListItemButton in a Paper */}
              <ListItemButton
                onClick={() => handleTabClick(page)}
                sx={{
                  backgroundColor: activeTab === page ? "lightgray" : "white",
                }}
              >
                <ListItemIcon>
                  <ListItemText
                    sx={{
                      color: activeTab === page ? "blue" : "black",
                    }}
                  >
                    {page}
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </Paper>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "black" }}
        onClick={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
