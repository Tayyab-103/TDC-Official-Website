import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import "font-awesome/css/font-awesome.min.css";
import { Box, Grid } from "@mui/material";
import ClutchWidget from "@/app/_components/ClutchWidget";
import Image from "next/image";
import clutch from "../../../components/Images/HomepageSliderImages/clutch.png";
import Head from "next/head";

export default function Review() {
  // useEffect(() => {
  //   Aos.init({
  //     duration: 400,
  //     easing: "ease-in-out",
  //   });
  // }, []);

  const cardStyles = {
    width: "67vh",
    marginRight: "20px",
    padding: "30px",
    background: "#F3F4F6",
    borderRadius: "20px",
    boxShadow: "none",
    "&:hover": {
      background: "#2b59ff",
      transition: "background-color 0.3s",
      "& .text": {
        color: "#fff",
        transition: "color 0.3s",
      },
      "& .quote-icon:before": {
        color: "#fff",
        transition: "color 0.3s",
      },
    },
  };

  const cardsData = [
    {
      name: "Jeff Trickket",
      position: "President Insource Pro",
      content:
        "TDC completed and delivered the project within the given timeframe, much to the client's satisfaction. The team was efficient from a workflow standpoint, and internal stakeholders were particularly impressed with the vendor's vast.",
    },
    {
      name: "Jorn Stempahl",
      position: "VP of Engineering XenGuard",
      content:
        "TDC completed and delivered the project within the given timeframe, much to the client's satisfaction. The team was efficient from a workflow standpoint, and internal stakeholders were particularly impressed with the vendor's vast.",
    },
    {
      name: "Manzoor Abdul Rehman Al",
      position: "Managing Director - Saudi Hadid",
      content:
        "TDC developed a fully operational ERP system with support, maintenance, and training programs for a large steel manufacturer. The team also provided QA, supply chain management, and BI optimization.",
    },
    {
      name: "Tiana Dokidis",
      position: "One year with us",
      content:
        "TDC completed and delivered the project within the given timeframe, much to the client's satisfaction. The team was efficient from a workflow standpoint, and internal stakeholders were particularly impressed with the vendor's vast.",
    },
    {
      name: "Tiana Dokidis",
      position: "One year with us",
      content:
        "TDC completed and delivered the project within the given timeframe, much to the client's satisfaction. The team was efficient from a workflow standpoint, and internal stakeholders were particularly impressed with the vendor's vast.",
    },
    {
      name: "Tiana Dokidis",
      position: "One year with us",
      content:
        "TDC completed and delivered the project within the given timeframe, much to the client's satisfaction. The team was efficient from a workflow standpoint, and internal stakeholders were particularly impressed with the vendor's vast.",
    },
  ];

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://widget.clutch.co/static/js/widget.js"
          async
          onload="() => console.log('Script has loaded successfully!')"
        ></script>
      </Head>
      <Box sx={{ minHeight: "100vh", padding: "100px 0px 50px" }}>
        <Grid
          container
          alignItems="center"
          spacing={2}
          justifyContent="space-between"
          sx={{ paddingX: { xs: "10px", lg: "140px" }, marginBottom: "70px" }}
        >
          <Grid item xs={12} md={4} lg={4}>
            <Typography
              variant="h6"
              fontWeight="500"
              fontSize="16px"
              mb="15px"
              sx={{ color: "#2b59ff" }}
              data-aos="fade-up"
              data-aos-duration="500"
            >
              Client Value & Trust
            </Typography>
            <Typography
              variant="h2"
              fontWeight="600"
              data-aos="fade-up"
              data-aos-duration="500"
              sx={{
                marginTop: { xs: "10px" },
                marginBottom: { xs: "25px" },
                fontSize: { xs: "30px", lg: "45px" },
              }}
            >
              Don't Just Take Our Words For It
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} lg={3.5} sx={{ textAlign: "center" }}>
            <Image src={clutch} alt="Clucth Widget" />
            {/* <ClutchWidget /> */}
          </Grid>
        </Grid>

        <Grid
          container
          alignItems="center"
          textAlign="start"
          sx={{
            marginTop: "10px",
            overflowX: "scroll",
            scrollbarWidth: "none", // For Firefox
            msOverflowStyle: "none", // For Internet Explorer/Edge
            "&::-webkit-scrollbar": {
              width: "0px",
              display: "none", // For Chrome, Safari, and Opera
            },
          }}
          // data-aos="fade-left"
          data-aos-duration="500"
        >
          <div style={{ display: "flex" }}>
            {cardsData.map((card, index) => (
              <Card key={index} sx={cardStyles}>
                <CardHeader
                  avatar={
                    <Avatar
                      sx={{ bgcolor: red[500] }}
                      aria-label="recipe"
                      src="https://mui.com/static/images/avatar/1.jpg"
                      alt="User"
                    />

                    // </Avatar>
                  }
                  action={
                    <i
                      className="fa fa-quote-left quote-icon"
                      style={{ color: "#2b59ff", fontSize: "36px" }}
                    />
                  }
                  title={
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        color: "inherit",
                      }}
                      className="text"
                    >
                      {card.name}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="subtitle1"
                      sx={{ color: "inherit" }}
                      className="text"
                    >
                      {card.position}
                    </Typography>
                  }
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="text"
                  >
                    {card.content}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  {[1, 2, 3, 4, 5].map((star) => (
                    <i
                      key={star}
                      className="fa fa-star star-icon"
                      style={{
                        color: "#ff971d",
                        fontSize: "35px",
                        marginRight: "5px",
                      }}
                    >
                      <style>
                        {`
                        .star-icon:hover::before {
                          color: #0041ff;
                        }
                      `}
                      </style>
                    </i>
                  ))}
                </CardActions>
              </Card>
            ))}
          </div>
        </Grid>
      </Box>
    </>
  );
}
