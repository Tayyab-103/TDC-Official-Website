import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const portfolioData = [
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112134/Logo_-_Kronolizer_zynd35.svg",
    logoWidth: 90,
    logoHeight: 90,
    logoTitle: "MOBILE APP",
    appTitle: 'Kronolizer',
    appDescription:
      'A mobile application that allows businesses to track their employees work activities and hours. A time tracker is added in it where employees can CheckIn and CheckOut. They can also specify their daily schedule.',
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112171/Group_1160444262_tpnb1q.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112061/background1_ps7tsy.svg",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112148/SenticsIcon-Dark_fhgq9v.svg",
    logoWidth: 92,
    logoHeight: 92,
    logoTitle: "MOBILE APP",
    appTitle: 'Sentics',
    appDescription:
      "Sentics is used to make research easy in an experience you deserve. Swipe through trending stocks and track how people across the internet feel about a particular stock.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112176/Group_1160444261_ilyhbx.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112063/background2_qztffc.png",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112151/Shwipe_Logo_1_wtandv.svg",
    logoWidth: 200,
    logoHeight: 105,
    logoTitle: "MOBILE APP",
    appTitle: 'Shwipe',
    appDescription:
      "Sentics is used to make research easy in an experience you deserve. Swipe through trending stocks and track how people across the internet feel about a particular stock.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112098/Group_1160444260_srkt43.png",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112063/background3_jt7zda.svg",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112123/image_31_d8wrra.svg",
    logoWidth: 92,
    logoHeight: 92,
    logoTitle: "MOBILE APP",
    appTitle: 'BringFresh',
    appDescription:
      "With the free BringFresh app, you have the entire weekly market at hand at all times & order the best regional offers to your home. User can do shopping for household products, drugstores and cosmetic products",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112173/Group_1160444259_jp0a6g.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112064/background4_yf6mub.png",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112122/image_29_ag9d23.svg",
    logoWidth: 92,
    logoHeight: 92,
    logoTitle: "SHOPIFY WEB APP",
    appTitle: 'HexaWallet',
    appDescription:
      "HexaWallet is a Bitcoin exchange app.  Hexa has multiple accounts for different purposes. The Checking Account, Savings Account, Swan Account and a special account i.e: Donation Account.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112096/Group_5311_zkbkgq.png",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112065/background5_jzoiog.svg",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112099/Group_1160444264_caeveg.svg",
    logoWidth: 200,
    logoHeight: 100,
    logoTitle: "WEB APP",
    appTitle: 'Uptok',
    appDescription:
      "A web platform that helps users to communicate via video chat on a Shopify store.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112136/Macbook_Pro_uet4qk.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112067/background6_frwqh4.png",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112095/Group_5227.png",
    logoWidth: 220,
    logoHeight: 60,
    logoTitle: "WEB APP",
    appTitle: 'Chex.AI',
    appDescription:
      "Chex.AI is an AI-based car inspection platform, that helps companies like UBER, ZUM and LYFT to speed up the process of registration (for drivers).",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112174/Group_1160444263_jmeork.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112065/background7_sundeh.svg",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112124/image_34_f9dbxl.svg",
    logoWidth: 220,
    logoHeight: 75,
    logoTitle: "HR PLATFORM",
    appTitle: 'Readii',
    appDescription:
      "It is an engaging and automated HR Management system. It ensures everyday human resources processes are manageable and easy to access.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112100/Group_5321_xaxclg.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112067/background8_xauqki.png",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112124/image_37_zqt1lw.png",
    logoWidth: 250,
    logoHeight: 50,
    logoTitle: "WEBSITE",
    appTitle: 'Apex',
    appDescription:
      "APEX: E3 is a London based finTech organization building an institutional grade market intelligence platform for retail traders and institutions.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112046/15__Macbook_Pro_Flying_Mockup_gmpc4e.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112067/background9_i98pgm.svg",
  },
  {
    logoSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112093/fresha-com_njlblf.svg",
    logoWidth: 300,
    logoHeight: 60,
    logoTitle: "SAAS PLATFORM",
    appTitle: 'FRESHA',
    appDescription:
      "Fresha is a SaaS Platform where users can easily book salons and spas nearby. Every Spa or a Salon is given rating by the customer and a customer can also comment.",
    phoneImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112102/iMac_Pro_Front_View_Mockup_vkvyc0.svg",
    backgroundImgSrc: "https://res.cloudinary.com/dxzarochq/image/upload/v1697112068/background10_n1ejtb.png",
  },
];

const backgroundStyle = (backgroundImgSrc) => ({
  backgroundImage: `url(${backgroundImgSrc})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  width: "100%",
  minHeight: "70vh",
  gap: 0,
  margin: 0,
  padding: 0,
});
const boxContainerStyle = {
  display: 'flex',
  flexDirection: ['column', 'column', 'row'],
  gap: 0,
  justifyContent: "center",
  alignItems: "center"
};

const leftBoxStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: ['center', 'center', 'flex-start'],
  padding: '80px',
  justifyContent: 'center',

};

const logoTitleStyle = {
  fontSize: "14px",
  pt: 3,
  color: "white",
};

const appTitleStyle = {
  fontSize: "36px",
  color: "white",
  fontWeight: 700,
};

const appDescriptionStyle = {
  width: "80%",
  fontSize: "18px",
  pt: 1,
  color: "white",
  fontWeight: 500,
};

const rightBoxStyle = {
  flex: 1,
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  marginTop: ["0px", "0px", "80px"],
  marginBottom: ["50px", "60px", "40px"],
};

function Portfolio2() {
  return (
    <Grid sx={{}} id="portfolio">
      {portfolioData.map((item, index) => (
        <Grid item xs={12} key={index} sx={backgroundStyle(item.backgroundImgSrc)}>
          <Box
            sx={boxContainerStyle}
          >

            <Box
              sx={leftBoxStyle}
            >
              <Box>
                <Image
                  src={item.logoSrc}
                  width={item.logoWidth}
                  height={item.logoHeight}
                  alt={`Logo - ${item.appTitle}`}
                />
              </Box>
              <Typography sx={logoTitleStyle}>
                {item.logoTitle}
              </Typography>
              <Typography sx={appTitleStyle}>
                {item.appTitle}
              </Typography>
              <Typography sx={appDescriptionStyle}>
                {item.appDescription}
              </Typography>
            </Box>
            <Box
              sx={rightBoxStyle}
            >
              <Image
                src={item.phoneImgSrc}
                width={550}
                height={450}
                alt={`iphone_img_icon-${index}`}
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default Portfolio2;
