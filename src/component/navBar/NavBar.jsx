import React from 'react';
import { tabsRoutes } from '../../App';
import '../pages/styles/mainStyles.scss';
const NavBar = () => {
    return (
        <>
            <nav className='fonts flex justify-start space-x-4 pl-10 pt-10 mb-10'>
                <a href={`${tabsRoutes.home}`} >Coffe house</a>
                <a href={`${tabsRoutes.outCoffee}`}>Our coffee</a>
                <a href={`${tabsRoutes.pleassure}`}>For your pleasure</a>
            </nav>
        </>
    );
};

export default NavBar;