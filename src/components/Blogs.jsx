import React from "react";

const Blogs = () => {
  return (
    <div name='blog'  className="bg-[#0A192F]  flex flex-col justify-center items-center w-full h-full pt-14">
      <div className="max-w-[1000px] w-full text-gray-300">
      <div className='sm:text-left pb-8 pl-4'>
            <p className=' text-4xl font-bold inline border-b-4 mb-10 border-[#f6c33c]'>
              Blogs
            </p>
            <p className="mt-4">I have recently started working on some technical and non technical blogs.Here you can find some of the blogs written by me.</p>
          </div>
        <div className="sm:flex flex-wrap justify-center items-center text-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6  shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h4 className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Time-Space Trade-Off in Algorithms
            </h4>
            <a className="text-indigo-500 inline-flex items-center"
            href="https://www.geeksforgeeks.org/time-space-trade-off-in-algorithms/" target="_blank"
            >Read More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h4 className="text-md text-gray-500 dark:text-gray-300 py-4">
            Introduction to jQuery - Begineer's Guide
            </h4>
            <a className="text-indigo-500 inline-flex items-center"
            href="https://shreyxcodes.hashnode.dev/introduction-to-jquery" target="_blank"
            >Read More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg dark:bg-gray-800">
            <div className="flex-shrink-0">
              <div className="flex items-center mx-auto justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h4 className="text-md  text-gray-500 dark:text-gray-300 py-4">
            Web Hosting your web application on Netlify
            </h4>
            <a className="text-indigo-500 inline-flex items-center">Comming Soon
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
