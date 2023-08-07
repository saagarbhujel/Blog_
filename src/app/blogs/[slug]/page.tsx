import React from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="relative max-w-screen-xl px-4 py-10 mx-auto md:flex md:py-10 gap-x-6 md:flex-row">
        <article className=" m-[0 auto]  ">
          <h1 className=" text-[clamp(28px,5vw,48px)!important] text-center mb-[48px] underline underline-offset-8">
            Title:{params.slug}
          </h1>
          <hr />
          <div className="mt-[48px]">
            <p className="pl-6 pr-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              dicta repellendus tenetur, laboriosam assumenda modi blanditiis
              aliquam eaque est vitae quasi inventore illum ab harum
              consequuntur sequi, itaque nihil eligendi! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Deleniti fugit harum
              recusandae illum rerum quos temporibus, repellendus accusantium
              ratione, suscipit autem ullam pariatur fugiat a veniam delectus
              dolorum. Dolore, illum. Saepe incidunt, consequatur laudantium
              cumque autem ut adipisci sint quas aut voluptate laborum facere
              accusantium.
            </p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Page;
