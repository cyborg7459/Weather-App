import './weather-card-style.scss';

import snow from '../../gallery/Snow.png';
import sleet from '../../gallery/Sleet.png';
import hail from '../../gallery/Hail.png';
import thunderstorm from '../../gallery/Thunderstorm.png';
import heavyRain from '../../gallery/HeavyRain.png';
import lightRain from '../../gallery/LightRain.png';
import shower from '../../gallery/Shower.png';
import heavyCloud from '../../gallery/HeavyCloud.png';
import lightCloud from '../../gallery/LightCloud.png';
import clear from '../../gallery/Clear.png';

const images = {
    "Snow" : snow,
    "Sleet" : sleet,
    "Hail" : hail,
    "Thunderstorm" : thunderstorm,
    "Heavy Rain" : heavyRain,
    "Light Rain" : lightRain,
    "Showers" : shower,
    "Heavy Cloud" : heavyCloud,
    "Light Cloud" : lightCloud,
    "Clear" : clear
}

const monthMap = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May", 
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December"
}

const dayMap = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
}

const WeatherCard = ({...props}) => {

    const details = props.details;

    return (
        <div className="weather-card">
            <h1 className='mb-0 size12'>Tomorrow</h1>
            <img src={images[details.weather_state_name]} alt="img"/>
            <div className="temperatures">
                <span>{details.min_temp.toFixed(1)} {props.unit}</span>
                <span>{details.max_temp.toFixed(1)} {props.unit}</span>
            </div>
        </div>
    )
}

export default WeatherCard;