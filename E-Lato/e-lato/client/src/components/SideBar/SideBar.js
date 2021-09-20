import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import './_sidebar.scss';
import Images from "../../assets/images";


export const SideBarData = [
    {
        title: 'English',
        path: '/English',
        icon:  `${Images[0].English}`,
        cName: 'nav-text'
    },
    {
        title: 'Math',
        path: '/Math',
        icon: `${Images[0].Math}`,
        cName: 'nav-text'
    },
    {
        title: 'Music',
        path: '/Music',
        icon: `${Images[0].Music}`,
        cName: 'nav-text'
    },
    {
        title: 'Science',
        path: '/Science',
        icon: `${Images[0].Science}`,
        cName: 'nav-text'
    },
    {
        title: 'Art',
        path: '/Art',
        icon: `${Images[0].Art}`,
        cName: 'nav-text'
    },
    {
        title: 'Misc',
        path: '/Misc',
        icon: `${Images[0].Misc}`,
        cName: 'nav-text'
    },
]