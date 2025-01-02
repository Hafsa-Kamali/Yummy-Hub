import Image from 'next/image'
import React from 'react'

export default function AuthorCard() {
  return (
    <div className='bg-[#3B1C32] shadow-lg  p-6'>
      <div className='flex items-center animation-fadeIn'>

        <Image src="/assets/hafsa (2).png" alt="Author" 
        width={100} height={100}
        className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-orange-400' />

<div>
  <h3 className='text-3xl font-semibold text-white font-family'>Hafsa Kamali</h3>
<p className='text-md text-[#FAB12F] font-family'>
  {" "}
  Full Stack Developer | Python Developer | UI/UX Designer | Graphic Designer | Multimedia Artist
  </p>

</div>
      </div>

      <p className='text-md text-white font-family mt-4 leading-relaxed'>
 {" "}
 Hafsa Kamali is a passionate and creative individual with a diverse background in software development, design, and multimedia arts. She is a full-stack developer with expertise in Python, and has a strong foundation in UI/UX design. Her passion for graphic design and multimedia arts has led her to create visually stunning and interactive digital experiences.
      </p>

      <div className="flex space-x-4 mt-4">
        <a
          href="#"
          className="px-6 py-2 rounded-md border-2 border-[#FAB12F] text-white
          relative overflow-hidden group transition-all duration-300
          hover:scale-105 transform hover:shadow-lg"
        >
          <span className="relative z-10 group-hover:text-[#3B1C32] transition-colors duration-300">
            LinkedIn
          </span>
          <div className="absolute inset-0 bg-[#FAB12F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>

        <a
          href="#"
          className="px-6 py-2 rounded-md border-2 border-[#FAB12F] text-white
          relative overflow-hidden group transition-all duration-300
          hover:scale-105 transform hover:shadow-lg"
        >
          <span className="relative z-10 group-hover:text-[#3B1C32] transition-colors duration-300">
            Github
          </span>
          <div className="absolute inset-0 bg-[#FAB12F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>

        <a
          href="#"
          className="px-6 py-2 rounded-md border-2 border-[#FAB12F] text-white
          relative overflow-hidden group transition-all duration-300
          hover:scale-105 transform hover:shadow-lg"
        >
          <span className="relative z-10 group-hover:text-[#3B1C32] transition-colors duration-300">
            Twitter
          </span>
          <div className="absolute inset-0 bg-[#FAB12F] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </a>
      </div>
    </div>
  )
}
