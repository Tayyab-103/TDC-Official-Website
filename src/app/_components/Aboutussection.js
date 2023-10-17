"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import styles from "./Aboutussection.module.scss";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import Container from "@mui/material/Container";

const Aboutussection = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <Container>
      <Box
        className={styles.responsive}
        sx={{ display: "flex", justifyContent: "space-around", gap: 18, pt: 8 }}
      >
        <Box className ={styles.walpaper}
         sx={{ pt: 11, maxWidth: "100%", height: "auto" }}
          data-aos="fade-right"
          data-aos-duration="300"
        >
          <Image
            src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112170/aboutus_mzbw6e.png"}
            width={550}
            height={580}
            alt="about-us.png"
            layout="responsive"
          />
        </Box>
        <Box className={styles.maintextbox}
          sx={{
            width: "800px",
            pt: 12,
            fontFamily: "sans-serif",
          }}
        >
          <Typography
            className={styles.headers}
            sx={{
              color: "blue",
              fontWeight: 500,
              fontSize: "17px",
              lineHeight: "26px",
            }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Who Are We
          </Typography>
          <Typography
            className={styles.headingbold}
            sx={{ fontSize: "50px", fontWeight: 500, pt: 2 }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Speed up development and innovation with us
          </Typography>
          <Typography
            className={styles.grid}
            sx={{ fontSize: "18px", lineHeight: 2, fontWeight: 400 }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            Start-ups and SMEs enlist our services to execute software projects
            or supplement their teams with business and technology leaders. We
            assist them in designing and constructing data-oriented cloud-based
            software solutions, from the conceptualization stage to the finished
            product.
          </Typography>
          <Grid className={styles.numberingparts}>
          <Box
            className={styles.numbersof}
            sx={{
              display: "flex",
              gap: 10,
              pt: 4,
              fontSize: "44px",
              fontWeight: 600,
            }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
              delay={2000}
            >
              <Box
                sx={{ display: "flex", gap: 5 }}
                data-aos="fade-up"
                data-aos-duration="300"
              >
                <Box>
                  {counterOn && (
                    <CountUp start={0} end={50} duration={1} delay={0} />
                  )}
                  +
                </Box>

                <Divider orientation="vertical" flexItem />
                <Box>
                  {counterOn && (
                    <CountUp start={0} end={40} duration={1} delay={0} />
                  )}
                  +
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={{ display: "flex" }}>
                  {counterOn && (
                    <CountUp start={0} end={20} duration={1} delay={0} />
                  )}
                  <Typography sx={{ pt: "30px", fontWeight: "500" }}>
                    Days
                  </Typography>
                </Box>
              </Box>
            </ScrollTrigger>
          </Box>
          <Box
            className={styles.numbersof2}
            sx={{ display: "flex", gap: 5 }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ fontSize: "15px" }}>happy</Typography>
              <Typography sx={{ color: "#2B59FF", fontSize: "15px" }}>
                clients
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ fontSize: "15px" }}>IT</Typography>
              <Typography sx={{ color: "#2B59FF", fontSize: "15px" }}>
                professionals
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography sx={{ fontSize: "15px" }}>to</Typography>
              <Typography sx={{ color: "#2B59FF", fontSize: "15px" }}>
                launch a team
              </Typography>
            </Box>
          </Box>
          </Grid>
        </Box>
      </Box>
    </Container>

  );
};

export default Aboutussection;
