
import React from "react";
import Link from "next/link";
import axios,{AxiosError} from "axios";
import uniqid from "uniqid";
import Image from "next/image";

type Blog = {
  slug: string;
  title: string;
  description: string;
  content: string;
};
 const fetchBlog=async()=> {
try {
   const response = await axios.get("http://localhost:3000/api/users/blogpost");

  //  console.log(response.data);
   return response.data.allBlogData;
} catch (err) {
  const error = err as AxiosError;
  return error.message;
}
}
 
const Blogs = async() => {
  const blogs = await fetchBlog()

  
  
  return (
    <>
      <h2 className=" text-center text-6xl underline  mb-12 mt-[6rem] cursor-default ">
        Blogs
      </h2>
      <section className=" grid md:grid-cols-2  content-center lg:grid-cols-3 xl:grid-cols-4   justify-items-center mt-8 mb-8 ">
        {blogs.map((blog: Blog) => {
          return (
            <Link key={uniqid()} href={`/blogs/${blog.slug}`}>
              <div className=" max-w-[20rem] lg:max-w-[18rem] xl:max-w-[20rem] xl:mr-3 xl:ml-3 2xl:max-w-[25rem] border border-solid border-black mt-8  transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300 rounded-[5px]">
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
      </section>
    </>
  );
};



export default Blogs;

