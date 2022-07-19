import React from "react";
import projectdata from "./projects";
import Card from "./Card";

const Work = () => {
  return (
    <div name="work" className="w-md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-16">
          <p className="text-4xl m font-bold inline border-b-4 text-gray-300 border-[#f6c33c]">
            Work
          </p>
          <p className="py-4">Check out some of my recent work</p>
        </div>

        <section className="text-gray-600 body-font">
          <div className="container px-5  mx-auto bg-[#0a192f]">
            <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3">
              {projectdata.map((data) => {
                // console.log(data);
                return (
                  <Card
                    key={data.id}
                    title={data.title}
                    decription={data.decription}
                    demo={data.demo}
                    code={data.code}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Work;
