import React from 'react'
import image1 from '../images/prf.jpg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



const Sidebar = () => {

    const navigations = [
        { name: "create-group", path: "/create-group", svg: <><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></> },
        { name: "friends", path: "/friends", svg: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></> },
        { name: "chats", path: "/", svg: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></> },
        { name: "notifications", path: "/notifications", svg: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></> }
    ]

    const renderedNavs = navigations.map((n) => {
        let activeLinkClass;
        return (
        <li>
            <NavLink key={n.name} to={n.path} className={({ isActive }) => {
                return ('flex items-center h-24 w-24 justify-center' + (isActive ? " text-regal-blue" : " text-gray-icons"))
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">{n.svg}</svg>
            </NavLink>
        </li>
        )
    })

  return (
    <div className='flex flex-col items-center w-24 bg-white h-screen pt-5'>

        <Link to='/' className='flex items-center justify-center '>
            <svg className='fill-real-blue' version="1.1" width="46px" height="46px" fill="currentColor" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 46 46" enable-background="new 0 0 46 46" >
                <polygon opacity="0.7" points="45,11 36,11 35.5,1 "></polygon>
                <polygon points="35.5,1 25.4,14.1 39,21 "></polygon>
                <polygon opacity="0.4" points="17,9.8 39,21 17,26 "></polygon>
                <polygon opacity="0.7" points="2,12 17,26 17,9.8 "></polygon>
                <polygon opacity="0.7" points="17,26 39,21 28,36 "></polygon>
                <polygon points="28,36 4.5,44 17,26 "></polygon>
                <polygon points="17,26 1,26 10.8,20.1 "></polygon>
            </svg>
        </Link>

        <ul className='flex flex-col space-y-2 mt-auto'>

            {renderedNavs}
             
            
        </ul>


        <div>
            <Link to='/user-profile' className='flex items-center h-24 w-24 justify-center'>
                <img src={image1} alt="profile" className='w-11 h-11 rounded-full'/>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar