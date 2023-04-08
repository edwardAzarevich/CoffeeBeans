import './CoffeeBeans.scss';
import beans from './image/Vector.svg';
import beansWhite from './image/coffee-beans-white.svg';

const CoffeeBeans = () => {
    return (
        <div className='coffee-beans'>
            <div className='for-line'><hr /></div>
            <img src={beans} alt='Coffee beans' />
            <div className='for-line'><hr /></div>
        </div>
    )
}

export default CoffeeBeans;