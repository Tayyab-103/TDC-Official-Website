"use client";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
  Avatar,
} from "@mui/material";

import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  // useEffect(() => {
  //   AOS.init({
  //     duration: 5000, // Set your custom animation duration in milliseconds
  //   });
  //   // AOS.refresh(); // Reset AOS
  // }, []);
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ backgroundColor: "#f3f4f6", paddingX: "30px" }}
    >
      <Grid item xs={12}>
        <Box sx={{ width: "100% auto" }}> </Box>
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant="standard"
            sx={{
              "& .MuiTabs-flexContainer": {
                justifyContent: "space-evenly",
                pt: "80px",
                flexWrap: { xs: "wrap", lg: "nowrap" }, // Enable flex wrapping for xs and md breakpoints, but nowrap for larger screens
              },
              "& .MuiTabs-flexContainer > :nth-of-type(3)": {
                // Target the third tab and push it to a new line for xs and md breakpoints
                order: { xs: "1", lg: "0" },
                flexGrow: { xs: "1", lg: "0" },
                width: { xs: "100%", lg: "auto" },
              },
              "& .MuiTab-label": {
                color: "#000",
                textTransform: "none",
              },
              "& .Mui-selected": {
                color: "#000",
              },
              "& .MuiTabs-indicator": {
                color: "#000",
                backgroundColor: "#FFB700",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#000",
              },
              "& .MuiTab-root.Mui-selected .MuiTab-wrapper": {
                color: "#000",
              },
            }}
          >
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              label="IT Staff Augmentation"
              {...a11yProps(0)}
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              label="Software Development"
              {...a11yProps(1)}
            />
            <Tab
              sx={{
                textTransform: "none",
                fontSize: "18px",
                color: "#000",
                marginBottom: "12px",
              }}
              data-aos="fade-up"
              data-aos-duration="300"
              label="Services For Startups"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Grid>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ width: "50%", m: "auto" }}>
          <Typography
            textAlign={"center"}
            mb={12.5}
            sx={{
              justifyContent: "center",
              marginRight: { xs: "50px" },
              color: "rgba(38, 39, 41, 0.7)",
              fontSize: { xs: "16px", md: "16px", lg: "16px" },
              width: { xs: "200px", md: "100%" },
              lineHeight: "22px",
              letterSpacing: "normal",
            }}
            data-aos="fade-up"
          >
            Gain entry to the finest engineering professionals that you require.
            Our specialists will fully integrate themselves into your
            organization's culture, allowing you to expedite your project
            without making any sacrifices.{" "}
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={9} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Image
                src={
                  "https://res.cloudinary.com/dxzarochq/image/upload/v1697112129/IT-staff-augmentation_et6eq8.png"
                }
                alt="it staff augmentation"
                width={554}
                height={446}
                layout="responsive"
                data-aos="fade-up"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-up"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    minWidth: "69px",
                    maxWidth: "69px",
                    minHeight: "69px",
                    maxHeight: "69px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffb700",
                    marginRight: "30px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112129/IT_Staff_Augmentation_logo_wltzne.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    IT Staff Augmentation
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Our remote-first approach helps us to attract the best
                    talent in Asia and scale your team on demand.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Box
                  sx={{
                    minWidth: "69px",
                    maxWidth: "69px",
                    minHeight: "69px",
                    maxHeight: "69px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#6a26da",
                    marginRight: "30px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112077/Data_Engineering_Experts_logo_uqtdz7.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    Data Engineering Experts
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Looking for Data engineers to augment in your team? We’ll
                    seamlessly join your next projects and deliver efficient &
                    fast.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Box
                  sx={{
                    minWidth: "69px",
                    maxWidth: "69px",
                    minHeight: "69px",
                    maxHeight: "69px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fd346e",
                    marginRight: "30px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112057/Ai_and_ML_Specialists_logo_vmkkrb.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    AI/ML Specialists
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Leverage the power of Artificial Intelligence and Machine
                    Learning with our team of experienced specialists, dedicated
                    to delivering innovative...
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <Box sx={{ width: "50%", m: "auto" }}>
          <Typography
            textAlign={"center"}
            mb={12.5}
            sx={{
              justifyContent: "center",
              marginRight: { xs: "50px" },
              color: "rgba(38, 39, 41, 0.7)",
              fontSize: { xs: "16px", md: "16px", lg: "16px" },
              width: { xs: "200px", md: "100%" },
              lineHeight: "22px",
              letterSpacing: "normal",
            }}
            data-aos="fade-up"
          >
            With a skilled team of engineers, designers, and product leaders who
            comprehend the significance of achieving tangible results, expedite
            the process of converting your concepts into software solutions.{" "}
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={9} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Image
                src={
                  "https://res.cloudinary.com/dxzarochq/image/upload/v1697112156/tab2_my0iz3.png"
                }
                alt="it staff augmentation"
                width={554}
                height={446}
                layout="responsive"
                data-aos="fade-up"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-up"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    minWidth: "69px",

                    maxWidth: "69px",

                    minHeight: "69px",

                    maxHeight: "69px",

                    borderRadius: "50%",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    background: "#ffb700",

                    marginRight: "30px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112156/tab2icon1_gsr9ua.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    UX/UI Design Services
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Enhance your enterprise by providing an immersive UX.
                    Construct a digital product that fulfills user requirements
                    and offers an exceptional experience.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Box
                  sx={{
                    minWidth: "69px",

                    maxWidth: "69px",

                    minHeight: "69px",

                    maxHeight: "69px",

                    borderRadius: "50%",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    background: "#6a26da",

                    marginRight: "30px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112156/tab2icon2_zptmfq.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    Custom Web App Development
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Utilize the potential of software to gain a competitive
                    advantage. Create and develop a sturdy custom application
                    within a matter of weeks instead of months.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Box
                  sx={{
                    minWidth: "69px",
                    maxWidth: "69px",
                    minHeight: "69px",
                    maxHeight: "69px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fd346e",
                    marginRight: "30px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112157/tab2icon3_p2l4as.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    Custom Mobile App Development
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Our leaders in product and engineering will assist you in
                    creating applications that are user-focused and
                    cost-efficient while also aligning with your objectives.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Box sx={{ width: "50%", m: "auto" }}>
          <Typography
            textAlign={"center"}
            mb={12.5}
            sx={{
              justifyContent: "center",
              marginRight: { xs: "50px" },
              color: "rgba(38, 39, 41, 0.7)",
              fontSize: { xs: "16px", md: "16px", lg: "16px" },
              width: { xs: "200px", md: "100%" },
              lineHeight: "22px",
              letterSpacing: "normal",
            }}
            data-aos="fade-up"
          >
            We have tailored our MVP development procedure to cater specifically
            to startups, enabling you to promptly transform your product concept
            into a functional software product that is prepared for your initial
            users and defines potential to investors.
          </Typography>
        </Box>
        <Container>
          <Grid container spacing={9} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={6}>
              <Image
                src={
                  "https://res.cloudinary.com/dxzarochq/image/upload/v1697112159/tab3_ct2fj7.png"
                }
                alt="it staff augmentation"
                width={554}
                height={446}
                layout="responsive"
                data-aos="fade-up"
                data-aos-duration="500"
              />
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              data-aos="fade-up"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    minWidth: "69px",
                    maxWidth: "69px",
                    minHeight: "69px",
                    maxHeight: "69px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffb700",
                    marginRight: "20px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112159/tab3icon1_onihvx.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    MVP Development for Startups
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Our streamlined MVP product development approach expedites
                    the time it takes for your startup concept to enter the
                    market, ultimately saving you both time and money.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                {" "}
                <Box
                  sx={{
                    minWidth: "69px",
                    maxWidth: "69px",
                    minHeight: "69px",
                    maxHeight: "69px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#6a26da",
                    marginRight: "20px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112160/tab3icon2_px35vg.png"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    SAAS Application Development Services
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Rely on SaaS development professionals to construct a
                    successful product in a shorter timeframe and at a lower
                    cost. These experts prioritize providing value right from
                    the outset.
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: "flex", marginTop: "30px" }}>
                <Box
                  sx={{
                    minWidth: "69px",

                    maxWidth: "69px",

                    minHeight: "69px",

                    maxHeight: "69px",

                    borderRadius: "50%",

                    display: "flex",

                    alignItems: "center",

                    justifyContent: "center",

                    background: "#fd346e",

                    marginRight: "20px",
                  }}
                >
                  <Image
                    src={
                      "https://res.cloudinary.com/dxzarochq/image/upload/v1697112161/tab3icon3_k315jr.svg"
                    }
                    alt="it staff augmentation"
                    width={34}
                    height={34}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    fontSize={21}
                    fontWeight={500}
                    sx={{ marginTop: "-10px", marginBottom: "8px" }}
                  >
                    CTO as a Service
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: "rgba(38, 39, 41, 0.7)" }}
                  >
                    Obtain tech leadership as needed, which encompasses the
                    entirety of the development process, ranging from product
                    design to the establishment of engineering standards.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CustomTabPanel>
    </Grid>
  );
}
