import '../Header/_header.scss';
import React from "react";
import { useState } from 'react';
import { Link } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import ELogo from '../../assets/images/icons/logos/elatologo_svg-02.svg'
import { SideBarData } from '../NavSideBar/NavSideBar'

function HeaderTwo({ token }) {
    const [sidebar, setSidebar] = useState(false)
    const showSiderbar = () => setSidebar(!sidebar)

    return (

        <header className='header'>
            <div className='header__nav'>
                <div className='header__nav-leftside'>
                    <Link to='#' className='header__nav-menu'>
                        <FaIcons.FaBars onClick={showSiderbar} />
                    </Link>

                    <Link to='/' className='header__logo-box'>
                        <img src={ELogo} alt='E-Logo' />
                    </Link>
                </div>
                {token ?
                    <Link to='/profile' className='header__right-box'>
                        <h2>Profile</h2>
                    </Link> :
                    <Link to='/login' className='header__right-box'>
                        <h2>Login</h2>
                    </Link>}
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

export default HeaderTwo;