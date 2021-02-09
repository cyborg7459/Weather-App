import './weather-card-style.scss';
import thunderstorm from '../../gallery/Thunderstorm.png';

const WeatherCard = () => {
    return (
        <div className="weather-card">
            <h1 className='mb-0 size12'>Tomorrow</h1>
            <img src={thunderstorm} alt="img"/>
            <div className="temperatures">
                <span>15 C</span>
                <span>24 C</span>
            </div>
        </div>
    )
}

export default WeatherCard;