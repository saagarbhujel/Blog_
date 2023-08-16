import React from 'react'
import Image from "next/image";
const Testimonial = () => {
  return (
   <>
    <section className="flex flec-col md:flex-row justify-center  items-center   mt-8 mb-8 lg:gap-[4rem] xl:gap-[6rem]">
          <div className="border w-[16rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[36rem] p-4 mb-6 hover:border-black  transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300 rounded-[5px]">
            <div className="flex items-center mb-4">
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src="/code-background.avif"
                alt="Avatar"
                width={30}
                height={20}
              />
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-gray-600">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &ldquo;I&apos;ve been using Tailwind CSS for my projects, and
              it has significantly improved my development workflow. The
              utility-first approach allows me to create responsive and
              attractive designs quickly.&ldquo;
            </p>
          </div>
          <div className="border   w-[16rem] lg:w-[25rem] xl:w-[30rem] 2xl:w-[36rem] p-4 mb-6 hover:border-black transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300 rounded-[5px]">
            <div className="flex items-center mb-4  ">
              <Image
                className="w-12 h-12 rounded-full mr-4"
                src="/code-background.avif"
                alt="Avatar"
                width={30}
                height={20}
              />
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-gray-600">Software Developer</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              &ldquo;I&apos;ve been using Tailwind CSS for my projects, and
              it has significantly improved my development workflow. The
              utility-first approach allows me to create responsive and
              attractive designs quickly.&ldquo;
            </p>
          </div>
       </section>
   </>
  )
}

export default Testimonial