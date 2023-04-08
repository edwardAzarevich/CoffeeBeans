import './Header.scss';
import NavList from '../NavBar/ListNavBar';
import CoffeeBeans from '../CoffeeBeans/CoffeeBeans';

const Header = () => {
    const params = ['Coffee house', 'Our coffee', 'For your pleasure'],
        pathForIconeCoffee = "desk-791178_1920.svg";

    return (
        <div className="main-Header">
            <NavList params={params} />
            <div className="name-title"><i>Everything You Love About Coffee</i></div>
            <CoffeeBeans />
            <div className="info"><i>We makes every day full of energy and taste</i></div>
            <div className="info"><i>Want to try our beans?</i></div>
            <div className="info" ><button><i>More</i></button></div>
        </div >
    )
}

export default Header;