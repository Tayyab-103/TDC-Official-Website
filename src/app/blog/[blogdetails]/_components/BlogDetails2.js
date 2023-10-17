import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "./BlogDetailes2.module.scss";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Image from "next/image";
import BlogCardPic from "../../../../components/Images/BlogDetails2CardBox.svg";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import BlogContent from "./BlogContent";

const BlogDetails2 = ({ content }) => {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.leftBox}>
          <Box className={styles.iconBox}>
            <Box>
              <Link
                href="https://www.facebook.com/thedevcorporate"
                target="_blank"
              >
                <IconButton size="medium">
                  <FacebookIcon
                    className={styles.subIcons}
                    sx={{ color: "black", fontSize: "35px" }}
                  />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://twitter.com/TheDevCorp?t=HICVK3-5QmqhyNX0yV1fGw&s=09"
                target="_blank"
              >
                <IconButton size="medium">
                  <TwitterIcon
                    className={styles.subIcons}
                    sx={{ color: "black", fontSize: "35px" }}
                  />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.instagram.com/thedevcorporate/"
                target="_blank"
              >
                <IconButton size="medium">
                  <InstagramIcon
                    className={styles.subIcons}
                    sx={{ color: "black", fontSize: "35px" }}
                  />
                </IconButton>
              </Link>
            </Box>
            <Box>
              <Link
                href="https://www.linkedin.com/company/the-dev-corporate/mycompany/"
                target="_blank"
              >
                <IconButton size="medium">
                  <LinkedInIcon
                    className={styles.subIcons}
                    sx={{ color: "black", fontSize: "35px" }}
                  />
                </IconButton>
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className={styles.centerBox}>
          {/* <BlogContent /> */}

          {content.map((post, index) => (
            <BlogContent key={index} {...post} />
          ))}
        </Box>
        <Box className={styles.rightBox}>
          <Box className={styles.cardContainer}>
            <Card className={styles.card1}>
              <Box className={styles.cardBox1}>
                <Image
                  className={styles.image}
                  alt="BlogCardPic"
                  src={BlogCardPic}
                />
              </Box>
              <Box className={styles.cardBox2}>
                <Box className={styles.subCardBox1}>
                  <Typography
                    sx={{
                      fontSize: "19px",
                      fontWeight: "700",
                      color: "#2B59FF",
                      paddingLeft: "10px",
                    }}
                  >
                    {" "}
                    Accelerate
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#162C6B",
                      paddingLeft: "10px",
                    }}
                  >
                    Your Software Development
                  </Typography>
                </Box>
                <Box className={styles.subCardBox2}>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      width: "250px",
                      pt: "20px",
                      paddingLeft: "10px",
                    }}
                  >
                    Searching for an on-demand technical leadership partner?
                  </Typography>
                </Box>
                <Box className={styles.subCardBox3}>
                  <Box sx={{ display: "flex" }}>
                    <IconButton sx={{ color: "blue" }}>
                      <TaskAltIcon />
                    </IconButton>
                    <Typography
                      sx={{
                        pt: "6px",
                        color: "#424242",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      See how we can help you
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <IconButton sx={{ color: "blue" }}>
                      <TaskAltIcon />
                    </IconButton>
                    <Typography
                      sx={{
                        pt: "6px",
                        color: "#424242",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Check clients value & trust
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex" }}>
                    <IconButton sx={{ color: "blue" }}>
                      <TaskAltIcon />
                    </IconButton>
                    <Typography
                      sx={{
                        pt: "6px",
                        color: "#424242",
                        fontSize: "16px",
                        fontWeight: "400",
                      }}
                    >
                      Schedule a free consultation
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.subCardBox4}>
                  <Button
                    sx={{
                      width: "240px",
                      height: "44px",
                      borderRadius: "10px",
                      backgroundColor: "#2B59FF",
                      fontSize: "14px",
                    }}
                    variant="contained"
                  >
                    <strong>Get a Free Quote</strong>
                  </Button>
                </Box>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BlogDetails2;
