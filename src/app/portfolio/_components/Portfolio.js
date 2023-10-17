'use client';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SouthIcon from '@mui/icons-material/South';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  width: '100%',
  maxWidth: '710px',
  margin: '0 auto',
  mt: '40px',
  height: '80vh',
};

const textStyle = {
  fontSize: '50px',
  fontWeight: 800,
  lineHeight: '75px',
  textAlign: 'center',
};

const descriptionStyle = {
  fontSize: '24px',
  fontWeight: 500,
  lineHeight: '36px',
  textAlign: 'center',
};

const buttonStyle = {
  mt: '50px',
  borderRadius: '50%',
};

const iconStyle = {
  color: 'black',
  fontSize: 56,
};
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function Portfolio() {

  return (
    <Box sx={containerStyle}>
      <Typography sx={textStyle}>COMPANY PORTFOLIO</Typography>
      <Typography sx={descriptionStyle}>
        Our specialists support you at every stage of the software development life-cycle: from concept development to product deployment and support
      </Typography>
      <Button sx={buttonStyle}
      onClick={()=>{
        scrollToSection("portfolio")
      }}>
        <SouthIcon sx={iconStyle} />
      </Button>
    </Box>
  );
}

export default Portfolio;
