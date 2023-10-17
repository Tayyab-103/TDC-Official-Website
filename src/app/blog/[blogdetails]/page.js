"use client";
import React from "react";
import BlogDetails2 from "./_components/BlogDetails2";
import Blogdetails1 from "./_components/Blogdetails1";
import { blogsData } from "../_components/BlogCards";
// import { usePathname, useSearchParams, useRouter } from "next/navigation";

const BlogDetails = (props) => {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  const id = props.params.blogdetails;
  const [filter] = blogsData.filter((data) => data.id === id);
  return (
    <>
      <Blogdetails1
        image={filter.image}
        title={filter.title}
        time={filter.time}
        authorName={filter.authorName}
      />

      <BlogDetails2 content={filter.content} />
    </>
  );
};

export default BlogDetails;
