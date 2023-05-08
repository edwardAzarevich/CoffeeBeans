import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import CoffeeBeans from './component/CoffeeBeans/CoffeeBeans';

function App() {

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
    return (
        <div >
            <Header />
            <div className='about-info' >
                <i>About Us</i>
                <CoffeeBeans color={'black'} />
            </div>
            <div className='about-us'>
                <p className='for-parts'>
                    {part1AdoutUs}
                </p >

                <p className='for-parts'>
                    {part2AdoutUs}
                </p>

            </div>
        </div>
    );
}

export default App;
