'use client'
import React,{useEffect, useState} from "react";
import Link from "next/link";
import axios from "axios";
import uniqid from 'uniqid';



const Blogs = () => {
  const [blogs, setBlogs] = useState([])


  const fetchedBlog = async() =>{
try {
    const response = await axios.get('http://localhost:3000/api/users/blogpost')
    // console.log(response);
    setBlogs(response.data.allBlogData)
    // console.log(response.data.allBlogData)
} catch (error) {
  console.log(error);
  
}
 
  }

 useEffect(() => {
fetchedBlog()
 }, [])
 
  // console.log(uniqid)
  return (
    <>
    <h2 className=" text-center text-6xl underline mt-12 mb-12">Blogs</h2>
    <div className="md:grid grid-cols-3  content-center lg:grid-cols-4 justify-items-center mt-8 mb-8 ">
  {blogs.map((blog,index) =>{
    return (
   
        <Link  key={uniqid()} href="/blogs/learnNext">
          <div className=" max-w-sm border border-solid border-black mt-8  transition ease-in-out delay-15 hover:-translate-y-1 hover:scale-110 duration-300 rounded-[5px]">
            <div className="">
              <img
                src="https://imgs.search.brave.com/eL6922PWuxZt2YKIRPaz4z3YNveKpjAje28SE_7TGvA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9kZXNrdG9wLXNv/dXJjZS1jb2RlLXdh/bGxwYXBlci1ieS1j/b21wdXRlci1sYW5n/dWFnZS13aXRoLWNv/ZGluZy1wcm9ncmFt/bWluZ18zMzc3MS01/OTUuanBnP3NpemU9/NjI2JmV4dD1qcGc"
                alt="coding img"
              />
            </div>
            <div className="p-2">
              <div>
                <h3 className=" text-[20px] font-semibold">{blog.title}</h3>
              </div>
              <div>
                <p>
                 {blog.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
  
    )
  })}
      </div>

  
    </>
  );
};

export default Blogs;



{/* <div key={index}>
      <h1>{blog.title}</h1>
     </div> */}