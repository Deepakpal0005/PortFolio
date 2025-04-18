import React from "react";
import html from "/html.png";
import css from "/css.jpg";
import react from "/reactjs.png";
import node from "/node.png";
import express from "/express.png";
import mongodb from "/mongodb.jpg";
import javascript from "/javascript.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: react,
      name: "ReactJS",
    },
    {
      id: 5,
      logo: node,
      name: "Node",
    },
    {
      id: 6,
      logo: express,
      name: "Express",
    },
    {
        id: 7,
        logo: mongodb,
        name: "MongoDB",
      },
  ];
  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="  ">
        I have been working with these technologies for almost a year.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;