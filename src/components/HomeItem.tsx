import React from 'react'
import Hero from './Hero';
import Testimonial from './Testimonial';
import LatestBlog from './LatestBlog';

const HomeItem = ({response}:any) => {
  return (
    <>
      <div className="mt-[8rem]">
       <Hero/>
        <hr />
       {/* LATEST BLOG------------------------ */}

        <LatestBlog/>
       
        <hr />

        {/* TESTIMONIAL--------------------------- */}
        <Testimonial/>
       

        <hr />

       
      </div>
    </>
  )
}

export default HomeItem