"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import uniqid from "uniqid";
import Image from "next/image";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchedBlog = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/users/blogpost"
      );
      // console.log(response);
      setBlogs(response.data.allBlogData);
      // console.log(response.data.allBlogData)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedBlog();
  }, []);

  // console.log(uniqid)
  return (
    <>
      <h2 className=" text-center text-6xl underline mt-12 mb-12">Blogs</h2>
      <div className="md:grid grid-cols-3  content-center lg:grid-cols-4 justify-items-center mt-8 mb-8 ">
        {blogs.map((blog, index) => {
          return (
            <Link key={uniqid()} href={`/blogs/${blog.slug}`}>
              <div className=" max-w-sm border border-solid border-black mt-8  transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[5px]">
                <div className="">
                  <Image
                    width={500}
                    height={500}
                    src="/code-background.avif"
                    alt="coding img"
                  />
                </div>
                <div className="p-2">
                  <div>
                    <h3 className=" text-[20px] font-semibold">{blog.title}</h3>
                  </div>
                  <div>
                    <p>{blog.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;

{
  /* <div key={index}>
      <h1>{blog.title}</h1>
     </div> */
}
