import React from 'react'
import Image from "next/image";
import Link from "next/link";
const Hero = () => {
  return (
    <>
     <section className="flex flex-col md:flex-row justify-around items-center px-8 my-10 ">
          <div className="md:order-2  transition duration-300 ease-in-out transform   rounded-[20px] border-2 p-5  hover:border-transparent border-gray-400 ">
            <Image
              width={500}
              height={500}
              src="/code-background.avif"
              alt="coding img"
              className=" rounded-[20px] "
            />
          </div>
          <div className="md:order-1 md:max-w-[25rem] max-w-[30rem]">
            <h1 className="text-3xl font-semibold mb-4">
              Welcome to Your Blog
            </h1>
            <p className="text-gray-600">
              Welcome to my blog, dedicated to all things coding! Whether you're
              a seasoned programmer or just starting out, this is your go-to
              resource for simple and effective code snippets, tips, and
              tutorials. Join me on this coding journey and level up your
              programming skills.
            </p>
            <Link
              href="/blogs"
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Read Blogs
            </Link>
          </div>
        </section>
    </>
  )
}

export default Hero