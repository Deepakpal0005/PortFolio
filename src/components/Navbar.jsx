import React, { useState } from 'react'
import pic from "/photo.avif";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
function Navbar() {
    const [menu, setMenu] = useState(false);
    const navItems = [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"PortFolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contacts"
        },
    ]
  return (
    <>
    <div className='max-w screen-2xl container mx-auto shadow-md h-16 px-4 md:px-20 fixed top-0 left-0 right-0 bg-white z-50'> 
        <div className='flex justify-between items-center h-16'>
            <div className='flex space-x-2'>
                <img src={pic} className="h-12 w-12 rounded-full " alt="" />
                <h1 className='font-semibold text-xl cursor-pointer'>Deepa<span className='text-red-500 text-2xl'>k</span>
                <p className='text-sm'>Web Developer</p>
                </h1>
            </div>

            {/* Desktop navbar */}
            <div>
                <ul className='hidden md:flex space-x-8'>
                    {
                        navItems.map(({id,text})=> (
                            <li key={id}>
                                
                                <Link to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    >{text}
                                
                                </Link>
                                
                            </li>
                        ))
                    }
                </ul>
                <div onClick={()=>setMenu(!menu)} className='md:hidden'>
                    {menu ? <IoClose />  :  <TiThMenu />}
                </div>
            </div>
        </div>

        {/* Mobile Nav Bar */}
        {
            menu && (
        <div className='bg-white'>
            <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl'>
                    {
                        navItems.map(({id,text})=> (
                            <li key={id}>
                                
                                <Link
                                    onClick={() => setMenu(!menu)} 
                                    to={text}
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    activeClass='active'
                                    >{text}
                                
                                </Link>
                            
                             </li>
                        ))
                    }
            </ul>
        </div>
        )}
    </div>
    
    </>
  )
}

export default Navbar
