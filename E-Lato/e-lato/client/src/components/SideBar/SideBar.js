import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import English from '../../assets/images/logos/English-01.svg';
import Art from '../../assets/images/logos/Art-01.svg';
import Math from '../../assets/images/logos/Math-01.svg';
import Misc from '../../assets/images/logos/Misc-01.svg';
import Music from '../../assets/images/logos/Music-01.svg';
import Science from '../../assets/images/logos/Science-01.svg';
import './_sidebar.scss';


export const SideBarData = [
    {
        title: 'English',
        path: '/English',
        icon:  `${English}`,
        cName: 'nav-text'
    },
    {
        title: 'Math',
        path: '/Math',
        icon: `${Math}`,
        cName: 'nav-text'
    },
    {
        title: 'Music',
        path: '/Music',
        icon: `${Music}`,
        cName: 'nav-text'
    },
    {
        title: 'Science',
        path: '/Science',
        icon: `${Science}`,
        cName: 'nav-text'
    },
    {
        title: 'Art',
        path: '/Art',
        icon: `${Art}`,
        cName: 'nav-text'
    },
    {
        title: 'Misc',
        path: '/Misc',
        icon: `${Misc}`,
        cName: 'nav-text'
    },
]