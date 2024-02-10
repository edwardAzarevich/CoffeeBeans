import React from 'react';
import { tabsRoutes } from '../../App';
import './navBar.scss';
const NavBar = () => {
    return (
        <>
            <nav className='fonts flex justify-start space-x-4 pl-20 pt-20 text-white'>
                <a href={`${tabsRoutes.home}`} >Coffe house</a>
                <a href={`${tabsRoutes.outCoffee}`}>Our coffee</a>
                <a href={`${tabsRoutes.pleassure}`}>For your pleasure</a>
            </nav>
        </>
    );
};

export default NavBar;