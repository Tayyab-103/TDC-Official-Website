import * as React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ellipse from "../../../../components/Images/Ellipse 1.svg";
import timer from "../../../../components/Images/image.png";
import { Container } from "@mui/material";

const Blogdetails1 = ({ image, time, authorName, title, id }) => {
  return (
    <Container>
      <Grid
        container
        spacing={-4}
        sx={{
          minHeight: "80vh",
          background: "#FFFFFF",
          alignContent: "center",
        }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ pt: 4, pl: 2 }}>
            <Typography
              sx={{
                width: "100%",
                fontWeight: { xs: 600, sm: 700, md: 700, lg: 700 },
                fontSize: { xs: "30px", sm: "32px", md: "42px", lg: "48px" },
                lineHeight: "44px",
                color: "#262729",
              }}
            >
              {title}
            </Typography>
            <Box sx={{ display: "flex", gap: 2, pt: 3 }}>
              <Image src={timer} width={20} height={20} alt="time-img" />
              <Typography
                sx={{
                  color: "#616161",
                }}
              >
                {time}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, pt: 3 }}>
              <Image src={ellipse} width={50} height={50} alt="Joseph-cole" />
              <Typography
                sx={{
                  pt: 2,
                  fontSize: "20px",
                  fontWeight: 600,
                  lineHeight: "20px",
                  color: "#162C6B",
                }}
              >
                {authorName}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* <Box sx={{ pt: { xs: 3, md: 0 } }}>
            <Image
              src={image}
              width={538}
              height={350}
              alt="custom-Software-image"
              objectFit="cover"
            />
          </Box> */}

          <Box
            sx={{
              width: { xs: "460px", lg: "537px" },
              height: { xs: "280px", lg: "302px" },
              marginLeft: { xs: "50px", lg: "35px" },
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Image src={image} alt="Picture of the author" layout="fill" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Blogdetails1;
