import React from "react";
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';


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
        path: '/classes',
        icon:  <AiIcons.AiFillBook/>,
        cName: 'nav-text'
    },
    {
        title: 'Be A Teacher',
        path: '/login',
        icon: <GiIcons.GiTeacher />,
        cName: 'nav-text'
    }
]