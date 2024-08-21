import './CoffeeBeans.scss';
import beanss from './image/Vector.svg';
import beansWhite from './image/coffee-beans-white.svg';
import beansBlack from './image/coffee-beans-black.svg';

const CoffeeBeans = ({ color = 'white' }) => {
    const beans = color === 'black' ? beansBlack : beansWhite;
    console.log(color);
    return (
        <div className='coffee-beans mb-5'>
            <div className='for-line'><hr /></div>
            <img src={beans} alt='Coffee beans' />
            <div className='for-line'><hr /></div>
        </div>
    )
}

export default CoffeeBeans;
