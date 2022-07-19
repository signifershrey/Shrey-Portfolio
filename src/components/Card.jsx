import React from "react";


const Card = ({title,decription,demo,code}) => {
  return (
    <>
      <div className="p-1 ">
        <div className="h-full bg-[#a8bbd7] bg-opacity-75 px-8 pt-10 pb-10 rounded-lg overflow-hidden text-center relative">
          <h1 className="title-font sm:text-4xl text-xl font-medium text-gray-900 mb-4">
            {title}
          </h1>
          <div className="">
          <p  className="text-gray-900 leading-relaxed mb-3"> {decription}</p>
          <div className="pt-8 text-center ">
            <a href={demo} target="_blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href={code} target="_blank">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
