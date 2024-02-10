import React from 'react';
import NavBar from '../navBar/NavBar';
import './styles/mainStyles.scss';
import CoffeeBeans from '../CoffeeBeans/CoffeeBeans';

const part1AdoutUs = `
    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
    Afraid at highly months do things on at.Situation recommend objection do intention
    so questions.As greatly removed calling pleased improve an.Last ask him cold feel
    met spot shy want.Children me laughing we prospect answered followed.At it went
    is song that held help face.`;

const part2AdoutUs = `Now residence dashwoods she excellent you. Shade being under his bed her, Much
    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
    horrible but confined day end marriage. Eagerness furniture set preserved far
    recommend. Did even but nor are most gave hope. Secure active living depend son
    repair day ladies now.`;

const MainPages = () => {
    return (
        <>
            <div
                className='text-white'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/HeaderFon.svg)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '40vh',
                }}>
                <NavBar />
                <h1 className='fonts text-center text-4xl mb-5'>Everything you love About Coffee</h1>
                <CoffeeBeans />
                <h2 className='fonts text-center text-2xl mb-5'>We makes every day full of energy and taste</h2>
                <h2 className='fonts text-center text-2xl mb-5'>Want to try our beans?</h2>
                <div className='flex justify-center'>
                    <button
                        className="drop-shadow-2xl active:bg-white active:text-black border text-white font-bold py-1 px-10 rounded transition duration-100 ease-in-out transform hover:opacity-70 hover:shadow-md">
                        More
                    </button>
                </div>
            </div>
        </>
    );
};

export default MainPages;