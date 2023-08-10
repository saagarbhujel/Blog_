'use client'

import axios from "axios";


import React,{useState, useEffect} from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [blog, setBlog] = useState({
    title:'',
    content:''
  })

  const fetchedBlogitem = async()=>{
  try {
    const response = await axios.get(`http://localhost:3000/api/users/getblog?slug=${params.slug}`)
    // console.log(response.data);
    setBlog(response.data)
  } catch (error:any) {
    console.log(error.message)
  }
  }
  useEffect(()=>{
    fetchedBlogitem()
  },[])
  return (
    <>
      <div className="relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:py-10 gap-x-6 md:flex-row">
        <article className=" m-[0 auto]  ">
          <h1 className=" text-[clamp(28px,5vw,48px)!important] text-center mb-[48px] underline underline-offset-8">
            Title: {blog && blog.title}
          </h1>
          <hr />
          <div className="mt-[48px]">
            <p className="pl-6 pr-6">
              {blog && blog.content}
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Page;
