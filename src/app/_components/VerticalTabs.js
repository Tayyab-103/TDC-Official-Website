import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row", // Arrange tabs and content side by side
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column", // On smaller screens, stack tabs and content vertically
    },
  },
  tabs: {
    flex: "0 0 auto",
    marginLeft: "180px",
    maxWidth: "250px", // Adjust this value as needed
  },
  tab: {
    width: "250px",
    height: "70px",
    borderRadius: "10px",
    padding: "0px 20px",
    marginBottom: "55px",
    fontWeight: "400",
    textTransform: "none",
    color: "#fff",
    "& i": {
      color: "#fff",
    },
    transition: "background 0.5s ease, color 0.5s ease",
    "&:hover": {
      background: "#fff",
      color: "rgb(43, 89, 255, 1)",
      "& i": {
        color: "#ff5722",
      },
    },
  },
  active: {
    background: "#fff",
    color: "rgb(43, 89, 255, 1)",
    "& i": {
      color: "#ff5722",
    },
  },
  content: {
    flex: 1,
    padding: theme.spacing(2),
  },
}));

const VerticalTabs = ({ tabs, selectedTab, handleChange }) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTabIndex(newValue);
  };

  const classes = useStyles();

  return (
    <Box
      sx={{
        background: "transparent",
        marginTop: "120px",
      }}
      className={classes.root}
    >
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        orientation="vertical"
        className={classes.tabs}
        sx={{
          background: "transparent",
          backgroundColor: "transparent",
          "& .MuiTabs-indicator": {
            display: "none", // Hide the indicator
          },
        }}
        data-aos="fade-left"
        data-aos-duration="300"
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            className={`${classes.tab} ${
              selectedTab === index ? classes.active : ""
            }`}
            // onClick={() => handleTabClick(index)} // Add click event handler
          />
        ))}
      </Tabs>
      <Box sx={{ backgroundColor: "transparent" }} className={classes.content}>
        {tabs.map((tab, index) => (
          <TabPanel key={index} value={selectedTab} index={index}>
            {tab.content}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
};

function TabPanel({ value, index, children }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default VerticalTabs;
