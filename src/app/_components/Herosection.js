"use client";

import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import Image from "next/image";
import Typed from "typed.js";
import ModalComp from "./ModalComp";
import { Noto_Sans_Osage } from "next/font/google";

const Herosection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Faster.", "Easier.", "Cheaper."],
      typeSpeed: 100,
      backSpeed: 100,
      delaySpeed: 100,
      loop: true,
      showCursor: false,
      
    });

    // Cleanup the typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []); // Empty de
  return (
    <Container sx={{ minHeight: "90vh", marginTop: "20px" }}>
      <Grid container spacing={3}>
        {/* Image on the left (for small screens) */}
        <Grid item xs={12} md={6} sx={{ display: { xs: "block", md: "none" } }}>
        <div sx={{ width: { md: "300px", sm: "200px" }, height: { md: "300px", sm: "200px" } }}>
  <Image 
    src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112171/blockImg_cigqmg.svg"}
    alt="Description"
    width={409}  // The original dimensions of the image.
    height={542}
    layout="responsive"
  />
</div>
        </Grid>
        {/* Text on the left (for medium and larger screens) */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{ padding: "10px", marginTop: "10px", marginRight: "10px" }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                // fontFamily: 'Rubik',
                fontSize: { sm: "40px" , md: "63px",lg: "70px" ,xs :'40px'},
                fontWeight: 500,
                color: "#ffb700",
                "& span": {
                  color: "rgb(43, 89, 255)",
                },
              }}
            >
              Hiring Global tech teams
              <br /> Made <span className="multiple-text"></span>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.3125rem",
                color: "rgb(38, 39, 41, 0.7)",
                mb: "53px",
              }}
            >
              Rigorously pre-vetted remote engineers,
              <br />
              ready to join your team within 24 hours.
            </Typography>
            <form
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-email"
                placeholder="Email"
                variant="outlined"
                sx={{
                  width: { xs: "100%", sm: "342px", md: "342px" },
                  pb: "30px",
                  borderRadius: "10px",
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#2b59ff",
                  ml: { xs: "0", sm: "7px", md: "7px" },
                  mt: { xs: "10px", sm: "0", md: "0" }, // Give some top margin on xs for spacing between TextField and Button
                  pt: "15px",
                  pb: "15px",
                  width: { xs: "100%", sm: "400px", md: "172px" },
                  height: "56px",
                  textTransform: "none",
                }}
                onClick={handleOpenModal}
              >
                Hire Now
              </Button>
              <ModalComp onOpen={isModalOpen} onClose={handleCloseModal} />
            </form>
          </Paper>
        </Grid>
        {/* Image on the right (for medium and larger screens) */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: {
              xs: "none",
              md: "block",
              textAlign: "right",
              // marginRight: "-20px",
            },
          }}
        >
          <Image src={"https://res.cloudinary.com/dxzarochq/image/upload/v1697112171/blockImg_cigqmg.svg"} alt="Description" width="460" height="600" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Herosection;
