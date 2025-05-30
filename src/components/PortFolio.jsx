import React from 'react'
import java from "/java.png";
import python from "/python.webp";
import mongoDB from "/mongodb.jpg";
import express from "/express.png";
import reactjs from "/reactjs.png";
import nodejs from "/node.png";

function PortFolio() {
    const cardItem = [
        {
          id: 1,
          logo: mongoDB,
          name: "MongoDB",
        },
        {
          id: 2,
          logo: express,
          name: "Express",
        },
        {
          id: 3,
          logo: reactjs,
          name: "ReactJS",
        },
        {
          id: 4,
          logo: nodejs,
          name: "NodeJS",
        },
        {
          id: 5,
          logo: python,
          name: "Python",
        },
        {
          id: 6,
          logo: java,
          name: "Java",
        },
      ];
  return (
    <div name="PortFolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10'>
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline font-semibold'>Featured Projects</span>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 gap-3 my-5'>
        {
            cardItem.map(({id,logo,name})=>(
                <div className='md:w-[300px] has-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                    <img src={logo} alt=''  className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"/>
                    <div>
                        <div className='font-bold text-xl mb-2 px-2'>{name}</div>
                        <p className='px-2 text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='px-6 py-6 flex justify-between'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Video</button>
                        <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                    </div>
                </div>
            
            ))


        }
      </div>

    </div>
  )
}

export default PortFolio
