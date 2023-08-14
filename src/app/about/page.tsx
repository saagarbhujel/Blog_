import React from 'react'

const About = () => {
  return (
   <>
   <div className=" text-gray-800 font-sans mt-[6rem]">
    <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>

        <p className="mb-6">
            <strong>Hello, fellow learners and coding enthusiasts!</strong>
        </p>

        <p className="mb-6">
            Welcome to my corner of the internet, where I strive to simplify the complex world of coding through insightful and engaging tutorials. I'm <em>Your Name</em>, your friendly guide on this coding journey. Whether you're a beginner taking your first steps into the world of programming or a seasoned developer looking to expand your skill set, you're in the right place.
        </p>

        <h2 className="text-2xl font-semibold mb-4">Why I'm Here</h2>

        <p className="mb-6">
            Coding has the power to shape the future, and I'm here to help you unlock that potential. As a passionate coder myself, I understand the challenges that often accompany learning how to code. The abundance of resources, languages, and frameworks can be overwhelming, and that's where my blog comes in. I've been through the ups and downs of coding, and I'm excited to share what I've learned along the way.
        </p>

        {/* <!-- More content... --> */}

        <h2 className="text-2xl font-semibold mb-4">Let's Connect</h2>

        <p className="mb-6">
            Beyond the tutorials, I'm an advocate for collaboration and continuous improvement. You can find me on social media platforms, where I share coding tips, industry news, and insights into my coding journey. Don't hesitate to reach out, whether you want to discuss a tutorial, suggest a topic, or just geek out about coding.
        </p>

        <p className="mb-6">
            Thank you for joining me on this coding expedition. Let's embark on this journey together, one line of code at a time.
        </p>

        <p className="italic">Happy coding!</p>

        <p className="mt-6"><em>Easy Coding</em></p>
    </div>
</div>
   </>
  )
}

export default About