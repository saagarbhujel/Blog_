import React from "react";
import Link from "next/link";
import axios, { AxiosError } from "axios";
import uniqid from "uniqid";
import Image from "next/image";

type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

const fetchBlog = async () => {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/users/blogpost"
    );
    // console.log(response.data);
    return response.data.allBlogData;
  } catch (err) {
    const error = err as AxiosError;
    return error.message;
  }
};
const LatestBlog = async () => {
  const blogs = await fetchBlog();
  const latestBlogs = blogs.slice(0, 3);
  return (
    <>
      <h2 className="text-center text-4xl underline  mt-6 mb-6 cursor-default">
        Popular Blogs
      </h2>
      <section className="flex flex-col md:flex-row items-center justify-center gap-4 md:p-8 md:gap-[2rem] mt-4 mb-12 ">
        {latestBlogs.map((blog: Blog) => {
          return (
            <Link key={uniqid()} href={`/blogs/${blog.slug}`}>
              <div className=" max-w-[20rem] lg:max-w-[18rem] xl:max-w-[20rem] 2xl:max-w-[25rem] border border-solid border-black mt-8  transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300 rounded-[5px]">
                <div className="">
                  <Image
                    width={500}
                    height={500}
                    src="/code-background.avif"
                    alt="coding img"
                  />
                </div>
                <section className="p-2">
                  <div>
                    <h3 className="text-[20px] font-semibold">{blog.title}</h3>
                  </div>
                  <div>
                    <p>{blog.description}</p>
                  </div>
                </section>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
};

export default LatestBlog;
