import './_header.scss';
import React from "react";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SideBarData } from '../SideBar/SideBar';






function Header({token}) {
    const [sidebar, setSidebar] = useState(false)
    const [page, setPage] = useState(1)

    console.log('token', token)
    

    const showSiderbar = () => setSidebar(!sidebar)

  

    


    return (
        

        <header className='header'>
            <div className='header__nav'>

                <Link to='#' className='header__nav-menu'>
                    <FaIcons.FaBars onClick={showSiderbar} />
                </Link>

                <Link to='/' className='header__logo-box'>
                    <h2 className='header__logo'>E-Lato</h2>
                </Link>
                {token ? 
                    <Link to='/profile' className='header__right-box'>
                  <h2>Profile</h2>
                  </Link> : 
                  <Link to='/login' className='header__right-box'>
                 <h2>Login</h2>
             </Link> }
               

            </div>

            <nav className={sidebar ? 'header__sidebar active' : 'header__sidebar'}>
                <ul className='header__sidebar-items' onClick={showSiderbar}>
                    <li className='header__sidebar-toggle'>
                        <Link to='#' className='header__sidebar-menu-item'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
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