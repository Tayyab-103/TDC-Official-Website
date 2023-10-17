import { Box, Typography } from '@mui/material';
import React from 'react'
import styles from './BlogContent.module.scss'

const BlogContent = ({ heading, des, descript }) => {
  return (
    <>
      <Box className={styles.cbox1}>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#717084",
            marginBottom: "20px",
          }}
        >
          {descript}
        </Typography>
        <Typography
          sx={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            color: "#717084",
            marginBottom: "20px",
          }}
        >
          {des}
        </Typography>
      </Box>
    </>
  );
};

export default BlogContent