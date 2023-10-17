import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import styles from "./Providedservices.module.scss";
import AOS from "aos";
import "aos/dist/aos.css";

const Providedservices = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 400,
  //     easing: "ease-in-out",
  //   });
  // }, []);

  return (
    <Grid className={styles.techstack} sx={{ pt: 13, backgroundColor: "#A9D2FF1A", minHeight: "970px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#2B59FF",
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Tech Stack
      </Box>
      <Box className={styles.header} data-aos="fade-up" data-aos-duration="300">
        Provided Services
      </Box>
      <Box
        className={styles.firstbox}
        sx={{ display: "flex", justifyContent: "center", gap: 3, pt: 6 }}
      >
        {/* /////////////////////////    CARD 1     ///////////////////////// */}
        <Box>
          <Card
            className={styles.cards}
            sx={{
              pl: 2, width: "350px", borderRadius: "20px", transition: "box-shadow 0.5s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
              }
            }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <Box sx={{ display: "flex", gap: 2, pt: 3 }}>
              <Box>
                <Image
                  src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112162/typescript-icon_xlzl4a.svg"}
                  width={25}
                  height={25}
                  alt="typescript-icon"
                />
              </Box>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112142/react-icon_gpqaor.svg"} width={25} height={25} alt="react-icon" />
              </Box>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112139/next-js_vocuxj.svg"} width={25} height={25} alt="next-icon" />
              </Box>
              <Box>
                <Image
                  src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112059/angular-icon_xdg3h2.png"}
                  width={25}
                  height={25}
                  alt="angular-icon"
                />
              </Box>
            </Box>
            <Box>
              <Typography
                className={styles.heading}
                sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 3 }}
              >
                Front-end Development
              </Typography>
              <Typography className={styles.details}>
                {" "}
                Develop powerful and immensely interactive web applications
                with exceptional quality standards in a prompt and efficient
                manner.
              </Typography>
            </Box>
          </Card>
          {/* /////////////////////////    CARD 2     ///////////////////////// */}
          <Box sx={{ pt: 3 }}>
            <Card
              className={styles.cards}
              sx={{
                pl: 2, width: "350px", borderRadius: "20px", transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }
              }}
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <Box sx={{ display: "flex", gap: 2, pt: 3, pl: 1 }}>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112133/kubernets_nds5gx.svg"}
                    width={25}
                    height={25}
                    alt="kubernets-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112093/google-cloud_dy3cni.svg"}
                    width={25}
                    height={25}
                    alt="cloud-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112078/docker-icon_mqpffq.svg"}
                    width={25}
                    height={25}
                    alt="docker-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697178709/amazon-web-services_uewtaf.svg"}
                    width={25}
                    height={25}
                    alt="amazon-web-services-icon"
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  className={styles.heading}
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 3 }}
                >
                  DevOps Consulting
                </Typography>
                <Typography className={styles.details}>
                  {" "}
                  Improve your software delivery speed and stability while
                  ensuring reliable infrastructure with our expert DevOps
                  consulting services, designed to help your business stay
                  ahead in the competitive market.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>

        <Box className={styles.secondcoloumn} sx={{ pt: 5 }}>
          {/* /////////////////////////    CARD 3     ///////////////////////// */}

          <Card
            className={styles.cards}
            sx={{
              pl: 2, width: "350px", borderRadius: "20px", transition: "box-shadow 0.5s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
              }
            }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <Box sx={{ display: "flex", gap: 2, pt: 3, pl: 1 }}>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112137/mysql-logo_y4yuew.svg"} width={25} height={25} alt="mysql-icon" />
              </Box>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112137/nestjs_lz94jr.svg"} width={25} height={25} alt="nest-icon" />
              </Box>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112140/nodejs-icon_wlvoav.svg"} width={25} height={25} alt="node-icon" />
              </Box>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112130/java_qx2czx.svg"} width={25} height={25} alt="java-icon" />
              </Box>
            </Box>
            <Box>
              <Typography
                className={styles.heading}
                sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 3 }}
              >
                Back-end Development
              </Typography>
              <Typography className={styles.details}>
                Empower your digital ecosystem with our expert back-end
                development services, ensuring seamless performance and
                security.
              </Typography>
            </Box>
          </Card>

          {/* /////////////////////////    CARD 4     ///////////////////////// */}

          <Box sx={{ pt: 3 }}>
            <Card
              className={styles.cards}
              sx={{
                pl: 2, width: "350px", borderRadius: "20px", transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }
              }}
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <Box sx={{ display: "flex", gap: 2, pt: 3, pl: 1 }}>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112059/apache-airflow_s8nssa.png"}
                    width={25}
                    height={25}
                    alt="apache-airflow-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112142/python-icon_zcxvas.png"}
                    width={25}
                    height={25}
                    alt="python-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112060/apache-spark-5_xnbl4m.png"}
                    width={25}
                    height={25}
                    alt="apache-spark-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112132/kafka_bpuyl3.svg"}
                    width={25}
                    height={25}
                    alt="kafka-icon"
                  />
                </Box>
              </Box>
              <Box>
                <Typography
                  className={styles.heading}
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 3 }}
                >
                  Data Engineering Experts
                </Typography>
                <Typography className={styles.details}>
                  Unlock the full potential of your data with our team of
                  expert data engineering specialists, who can help you design
                  and implement robust data pipelines and analytics solutions
                  that drive business growth and success.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>

        <Box>
          {/* /////////////////////////    CARD 5     ///////////////////////// */}
          <Card
            className={styles.cards}
            sx={{
              pl: 2, width: "350px", borderRadius: "20px", transition: "box-shadow 0.5s ease-in-out",
              "&:hover": {
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
              }
            }}
            data-aos="fade-up"
            data-aos-duration="300"
          >
            <Box sx={{ display: "flex", gap: 2, pt: 3, pl: 1 }}>
              <Box>
                <Image
                  src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112052/adobe_photoshop_cjpadu.png"}
                  width={25}
                  height={25}
                  alt="Photoshop-icon"
                />
              </Box>
              <Box>
                <Image
                  src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112051/adobe-ai-icon_utsjex.png"}
                  width={25}
                  height={25}
                  alt="adobe-ai-icon"
                />
              </Box>
              <Box>
                <Image
                  src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112053/adobe-xd-2_xh3qsm.svg"}
                  width={25}
                  height={25}
                  alt="adobe-xd-icon"
                />
              </Box>
              <Box>
                <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112082/figma-icon_cjmhxo.svg"} width={25} height={25} alt="figma-icon" />
              </Box>
            </Box>
            <Box>
              <Typography
                className={styles.heading}
                sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 3 }}
              >
                Graphic Designing
              </Typography>
              <Typography className={styles.details}>
                With our professional graphic designing services, we can help
                optimize your online presence for search engines, making it
                more visually appealing and easier to find for your target
                audience.{" "}
              </Typography>
            </Box>
          </Card>

          {/* /////////////////////////    CARD 6     ///////////////////////// */}

          <Box sx={{ pt: 3 }}>
            <Card
             className={styles.lastcard} 
              sx={{
                pl: 2, width: "350px", borderRadius: "20px", transition: "box-shadow 0.5s ease-in-out",
                "&:hover": {
                  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)"
                }
              }}
              data-aos="fade-up"
              data-aos-duration="300"
            >
              <Box sx={{ display: "flex", gap: 2, pt: 3, pl: 1 }}>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112148/selenium-icon_sfddsy.png"}
                    width={25}
                    height={25}
                    alt="selenium-icon"
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112073/clickup-icon_zddk3a.png"}
                    width={25}
                    alt="clickup-icon"
                    height={25}
                  />
                </Box>
                <Box>
                  <Image
                    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112060/asana-logo_fauecy.svg"}
                    width={25}
                    height={25}
                    alt="asana-logo"
                  />
                </Box>
                <Box>
                  <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112131/jira-1_h0sdxd.svg"} width={25} height={25} alt="jira-icon" />
                </Box>
              </Box>
              <Box>
                <Typography
                  className={styles.heading}
                  sx={{ fontSize: "18px", fontWeight: 600, lineHeight: 3 }}
                >
                  QA & PM Services
                </Typography>
                <Typography className={styles.details}>
                  {" "}
                  Ensure seamless project delivery and high-quality software
                  with our comprehensive QA/PM services, designed to
                  streamline the development process and optimize your
                  product's performance, reliability, and user experience.
                </Typography>
              </Box>
            </Card>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Providedservices;
