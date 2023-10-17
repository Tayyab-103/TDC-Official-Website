"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { Box, Typography, Hidden } from "@mui/material";
import { blogsData } from "./BlogCards";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/navigation";
import Autocomplete from "@mui/material/Autocomplete";

const titleGradientStyle = {
  background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
  position: "absolute",
  zIndex: "100",
  fontSize: "30px",
  color: "white",
  fontWeight: "900",
  marginTop: "240px",
  marginLeft: "20px",
  textShadow: "5px 5px 5px black",
};

function BlogPost({ image, imgTitle, tag, title, description, id }) {
  const router = useRouter();
  return (
    <Grid
      container
      spacing={5}
      textAlign="center"
      marginTop="15px"
      onClick={() => {
        router.push(`/blog/${id}`);
      }}
    >
      <Grid
        item
        lg={1}
        md={1}
        xs={1}
        sx={{ display: { xs: "none", lg: "block" } }}
      ></Grid>
      <Grid item lg={5} md={6} xs={2}>
        <Box
          sx={{
            width: { xs: "350px", md: "460px", lg: "537px" },
            height: { xs: "200px", md: "280px", lg: "302px" },
            marginLeft: { xs: "5px", md: "10px", lg: "35px" },
            borderRadius: "10px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Image
              src={image}
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
            />

            <Typography sx={titleGradientStyle}>{imgTitle}</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item lg={5} md={6} xs={12} sx={{ textAlign: "start" }}>
        <Box
          sx={{
            marginLeft: { xs: "5px", md: "10px", lg: "20px" },
            marginTop: { xs: "0px", md: "0px", lg: "0px" },
          }}
        >
          <Box
            sx={{
              backgroundColor: "#2B59FF",
              width: "300.25px",
              paddingRight: "22.25px",
              paddingLeft: "16px",
              color: "white",
              marginBottom: { xs: "20px" },
            }}
          >
            {tag}
          </Box>
          <Box
            sx={{
              fontSize: { xs: "20px", md: "25px", lg: "32px" },
              fontWeight: "700",
              lineHeight: "38.4px",
              marginTop: "-8px",
              marginBottom: "10px",
            }}
          >
            {title}
          </Box>
          <Box
            sx={{
              fontSize: { xs: "10px", md: "15px", lg: "15px" },
              fontWeight: "400",
              lineHeight: "28px",
              width: { xs: "350px", md: "430px", lg: "92%" },
              textAlign: "start",
            }}
          >
            {description}
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        lg={1}
        md={1}
        xs={1}
        sx={{ display: { xs: "none", lg: "block" } }}
      ></Grid>
    </Grid>
  );
}

function Blog() {
  const [showData, setShowData] = useState(blogsData);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = blogsData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(showData?.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const options = blogsData
    ? Array.from(new Set(blogsData.map((option) => option.tag))).map((tag) => ({
        label: `${tag}`,
        value: `${tag}`,
      }))
    : [];

  const handleSelect = (event, selectedOption) => {
    if (selectedOption) {
      const filteredData = blogsData.filter(
        (blog) => blog.tag === selectedOption.value
      );
      setShowData(filteredData);
    } else {
      setShowData(blogsData);
    }
  };

  const handleSelectName = (event, selectedOption) => {
    if (selectedOption) {
      const filteredData = blogsData.filter(
        (blog) => blog.tilte == selectedOption.value
      );
      setShowData(filteredData);
    } else {
      setShowData(blogsData);
    }
  };

  function prePage() {
    if (currentPage !== firstIndex + 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function changeCpage(id) {
    setCurrentPage(id);
  }
  function nextPage() {
    if (currentPage === numbers.length) {
      return;
    }
    if (currentPage !== firstIndex + 2) {
      setCurrentPage(currentPage + 1);
    }
  }

  const activePageStyle = {
    margin: "0 5px",
    color: "blue",
  };

  const inactivePageStyle = {
    margin: "0 5px",
  };

  const [search, setSearch] = useState("");
  const filterSearch = () => {
    const data = blogsData.filter((data) => {
      return search.toLowerCase() === ""
        ? data
        : data.tilte.toLowerCase().includes(search);
    });
    setShowData(data);
  };

  return (
    <div style={{ backgroundColor: "#F3F4F6", minHeight: "100vh" }}>
      <Grid container alignItems="center" spacing={2} paddingTop="40px">
        <Grid item xs={0} lg={1.6} md={1.6}></Grid>
        <Grid item xs={4} lg={3.5} md={3.5} sx={{ marginLeft: "10px" }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={options ? options : []}
            onChange={handleSelect}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField {...params} label="Search Member" />
            )}
          />
        </Grid>
        <Grid item xs={4} lg={3.5} md={3.5}>
          <TextField
            variant="outlined"
            placeholder="Search By tiltle"
            fullWidth
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </Grid>
        <Grid item xs={3} lg={1.8} md={1.8}>
          <Button
            variant="contained"
            onClick={filterSearch}
            sx={{
              backgroundColor: "#007bff",
              color: "#fff",
              padding: "15px",
              width: "100%",
              textTransform: "none",
              borderRadius: "10px",
              fontSize: { xs: "12px", md: "14px", lg: "17px" },
            }}
          >
            Search
          </Button>
        </Grid>
        <Grid item xs={0} lg={1.6} md={1.6}></Grid>
      </Grid>

      {showData
        ?.filter(
          (blog, index) =>
            index >= (currentPage - 1) * 10 && index <= currentPage * 10 - 1
        )
        .map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      {/* {showData
        ?.slice(
          (currentPage - 1) * recordsPerPage,
          currentPage * recordsPerPage
        )
        .map((post, index) => (
          <BlogPost key={index} {...post} />
        ))} */}
      <nav style={{ textAlign: "center" }}>
        <ul
          className="pagination"
          style={{
            display: "flex",
            justifyContent: "end",
            marginRight: "20px",
            marginBottom: "-16px",
            paddingBottomL: "20px",
            listStyleType: "none", // Remove list bullet points
            // padding: 0, // Remove default list padding
          }}
        >
          <li
            style={{
              marginRight: "10px",
              fontSize: "16px",
              fontWeight: "200px",
            }}
          >
            Pages:
          </li>
          <li className="page-item" style={{ margin: "0 1px" }}>
            <span
              className="page-link"
              onClick={prePage}
              style={{ color: "#007bff", color: "#fff", cursor: "pointer" }}
            >
              <ArrowBackIosIcon style={{ color: "#007bff" }} />
            </span>
          </li>
          {numbers.map((post, index) => (
            // <li className={`page-item ${currentPage === post ? 'active' :''}`}key={index}>
            <span
              className={`page-item ${currentPage === post ? "active" : ""}`}
              key={index}
              style={currentPage === post ? activePageStyle : inactivePageStyle}
            >
              <a
                className="page-link"
                onClick={() => changeCpage(post)}
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  // color: "#000",
                }}
              >
                {post}
              </a>
            </span>
          ))}
          <li className="page-item" style={{ margin: "0 1px" }}>
            <span
              href="#"
              className="page-link"
              onClick={nextPage}
              style={{ color: "#fff" }}
            >
              <ArrowForwardIosIcon
                style={{ color: "#007bff", cursor: "pointer" }}
              />
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Blog;
