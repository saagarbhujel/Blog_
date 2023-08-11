

import axios,{AxiosError} from "axios";
import React from "react";
import Image from "next/image";

type Params = {
  params: {
    slug: string;
  };
};

const fetchedBlogitem = async ( {params}:Params) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/users/getblog?slug=${params.slug}`
    );
    return response.data;
  } catch (error) {
    const err = error as AxiosError
    return error;
  }
};

const Page = async (params:Params) => {
  const blog = await fetchedBlogitem(params);
  // console.log(blog);
  

 
  return (
    <>
      <div className=" flex justify-center items-center relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:py-10 gap-x-6 md:flex-row mt-[6rem]">
        <article className=" m-[0 auto]  ">
          <h1 className=" text-[clamp(28px,5vw,48px)!important] text-center mb-[48px] underline underline-offset-8">
            {blog && blog.title}
          </h1>
          <hr />
          <Image
            className=" m-auto mt-10"
            width={500}
            height={500}
            src="/code-background.avif"
            alt="coding img"
          />
          <div className="mt-[48px] max-w-2xl">
            <p className="pl-6 pr-6 ">{blog && blog.content}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Page;
