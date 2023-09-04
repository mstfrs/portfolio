import Image from 'next/image'
import React from 'react'

const PortfolioCard = ({title,image,github,demo,techs}) => {
  return (
    <div className="   ">
    <div class="relative flex w-96 flex-col rounded-xl bg-white  bg-clip-border text-gray-700 shadow-md">
      <div class="relative  items-center flex justify-center mx-4 mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <Image
          src={image}
          alt="img-blur-shadow"
          layout="fill"
          className=""
        />
        
        
      </div>
      <div class="p-6">
        <div className="flex items-center  justify-between">
        <h5 class="mb-2 block font-sans text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          <a >{title}</a>
          
        </h5>
        <div >
          <a href={github} target="_blank"><button className="hover:scale-110 transition-all hover:bg-opacity-100 ml-2 px-4 py-1 text-sm border-slate-300 border-2 rounded-3xl bg-blue-300 bg-opacity-80 ">Github</button></a>
        <a href={demo} target="_blank"> <button className="hover:scale-110 transition-all hover:bg-opacity-100  ml-2 px-4 py-1 text-sm border-slate-300 border-2 rounded-3xl bg-blue-300 bg-opacity-80 ">Demo</button>
</a>
        </div>
     
        </div>
       
        <div className="flex gap-4 mt-5 text-blue-600 font-medium text-sm">
          {techs.map((tech)=>
            <p key={tech.id}>{tech}</p>
          )}
          
          
        </div>
      </div>
     
    </div>
  </div>
  )
}

export default PortfolioCard