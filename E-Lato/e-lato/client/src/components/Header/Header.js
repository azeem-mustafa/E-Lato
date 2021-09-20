import './_header.scss';
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from '../SideBar/SideBar';

function Header(){
    const [sidebar, setSidebar] = useState(false)

    const showSiderbar = () => setSidebar(!sidebar)

    return (
      <header className='header'>
          <div className='header__nav'>
          <Link to='#' className='header__nav-menu'>
       <FaIcons.FaBars onClick={showSiderbar}/>
       </Link>
       </div>

       <nav className={sidebar ? 'header__sidebar active' : 'header__sidebar'}>
           <ul className='header__sidebar-items' onClick={showSiderbar}>
               <li className='header__sidebar-toggle'>
                   <Link to='#' className='header__sidebar-menu-item'>
                   <AiIcons.AiOutlineClose/>
                   </Link>
               </li>
               {SideBarData.map((item, index) => {
                   return (
                       <li key={index} className={item.cName}>
                           <Link to={item.path}>
                               <img src={item.icon}/>
                               <span>{item.title}</span>
                           </Link>
                           </li>

                   )
               })}
           </ul>
       </nav>

      </header>
    );
  }


export default Header;