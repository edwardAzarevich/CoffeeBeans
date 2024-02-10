import React from 'react';
import NavBar from '../navBar/NavBar';

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
        <div
            style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/HeaderFon.svg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '30vh',
            }}>
            <NavBar />
        </div>
    );
};

export default MainPages;