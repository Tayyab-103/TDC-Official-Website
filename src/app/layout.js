import * as React from "react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import Box from "@mui/material/Box";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Head from "next/head";
const DRAWER_WIDTH = 240;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ThemeRegistry>
          <Navbar />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              bgcolor: "background.default",
              // ml: `${DRAWER_WIDTH}px`,
              mt: ["48px", "56px", "64px"],
              p: 3,
            }}
          ></Box>
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
