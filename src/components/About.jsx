import React from 'react'

const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">

<div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-left pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#f6c33c]'>
              About
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hey. I'm Shrey, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>
              I am skilled in JavaScript and React.
        I have interned at Koders as a Web Developer. 
        I like to explore and learn new web technologies so I have made some projects using MERN Stack.
        I’m also a part of various online communities where I have been a Batch Leader and responsible for reviewing projects.
    </p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About