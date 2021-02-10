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
    0 : "Jan",
    1 : "Feb",
    2 : "Mar",
    3 : "Apr",
    4 : "May", 
    5 : "Jun",
    6 : "Jul",
    7 : "Aug",
    8 : "Sept",
    9 : "Oct",
    10 : "Nov",
    11 : "Dec"
}

const dayMap = {
    0 : "Sun",
    1 : "Mon",
    2 : "Tues",
    3 : "Wed",
    4 : "Thurs",
    5 : "Fri",
    6 : "Sat"
}

const WeatherCard = ({...props}) => {

    const details = props.details;
    const cur_date = new Date();
    const today = cur_date.getDate();
    const card_date = new Date(details.applicable_date);
    const date = card_date.getDate();
    const month = monthMap[card_date.getMonth()];
    const day = dayMap[card_date.getDay()];
    let date_output;
    if(date === today+1)
        date_output = 'Tommorrow';
    else 
        date_output = `${day}, ${date} ${month}`

    return (
        <div className="weather-card">
            <h1 className='mb-0 size12'>{date_output}</h1>
            <img src={images[details.weather_state_name]} alt="img"/>
            <div className="temperatures">
                <span>{details.min_temp.toFixed(1)} {props.unit}</span>
                <span>{details.max_temp.toFixed(1)} {props.unit}</span>
            </div>
        </div>
    )
}

export default WeatherCard;