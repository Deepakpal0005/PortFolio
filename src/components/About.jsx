import React from 'react'

function About() {
  return (
    <>
    <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
        <h1 className='text-3xl font-bold mb-5'>About</h1>
        <p>
        Hello, I'm Deepak Pal, a passionate Web developer with a keen eye for MERN Stack . With a background in IT, I strive to create impactful and visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>
            Education & Training
        </h1>
        <span className='pt-2'>
            [Bachelor of Technology], [Dr. A.P.J. Abdul Kalam Technical University], [2020-2024].
        </span>
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>
             Skills & Expertise
        </h1>
        <ul className='list-disc pl-5 space-y-3 pt-2'>
            
            <li className='text-justify'>Full-Stack Development (MERN): Proficient in building scalable and responsive web applications using MongoDB, Express.js, React, and Node.js. Expertise in both front-end and back-end development, ensuring a seamless and optimized user experience.</li>
            <li>Front-End Development with React: Extensive experience creating dynamic, user-friendly interfaces with React.js, utilizing hooks, state management, and component-based architecture for high performance and maintainability.</li>
            <li>Back-End Development with Node.js & Express: Skilled in building robust, RESTful APIs and handling server-side logic with Node.js and Express. Knowledgeable in managing data flow, authentication, and server optimizations.</li>
            <li>Database Management with MongoDB: Adept at designing and managing NoSQL databases, optimizing data models, and ensuring efficient querying and performance with MongoDB.</li>
            <li>Version Control & Collaboration: Proficient in Git and GitHub for version control, collaborative workflows, and managing project dependencies. Experienced in Agile environments and using tools like Jira for task tracking.</li>
            <li>Responsive Web Design: Ability to create responsive, mobile-first designs that ensure cross-platform compatibility and optimal performance across devices.</li>
            <li>RESTful APIs & Web Services: Expertise in designing and consuming RESTful APIs for smooth interaction between the client-side and server-side, including user authentication and data manipulation.</li>
            
        </ul>
        {/* <span>
            Proficient in [Programming Languages] Experienced with [Software Tools/Technologies] Strong grasp of [Design Principles/Concepts] Excellent problem-solving skills Effective communicator and collaborator
        </span> */}
        <br />
        <br />
        <h1 className='text-green-500 font-semibold text-xl'>
            Mission Statement
        </h1>
        <span className='pt-2'>
            My mission is to leverage my skills and creativity to deliver innovative solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.        
        </span>

    </div>
    </>
  )
}

export default About
