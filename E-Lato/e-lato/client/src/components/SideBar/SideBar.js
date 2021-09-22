import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
// import './_sidebar.scss';
// import Images from "../../assets/images.js";


export const SideBarData = [
    {
        title: 'Login',
        path: '/login',
        cName: 'nav-text'
    },
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Find A Class',
        path: '/students',
        icon:  <AiIcons.AiFillBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Be A Teacher',
        path: '/teachers',
        icon: <GiIcons.GiTeacher />,
        cName: 'nav-text'
    }
]