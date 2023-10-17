import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";
import heroimage from "../../../components/Images/HomepageSliderImages/blockImg.svg";
import styles from "./Blog.module.scss";

export default function Blog_Herosection() {
  return (
    <Container>
      <Box className={styles.container}>
        <Box className={styles.mainText}>
          <Typography
            variant="h1"
            sx={{
              color: "#262729",
              fontSize: "64.54px",
              fontWeight: "800",
              "& span": {
                color: "#2B59FF",
              },
              "& span1": { color: "#FFB700" },
            }}
          >
            We continuously <span>learn</span> <span>new</span> things and share
            those things with <span1>you</span1>
          </Typography>
        </Box>

        <Box>
          <Image
            src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112171/blockImg_cigqmg.svg"}
            width={450}
            height= {590}
            alt="Hero-Image"
          />
        </Box>
      </Box>
    </Container>
  );
}
  