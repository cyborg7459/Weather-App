import './info-style.scss';

import background from '../../gallery/Cloud-background.png';

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

const InfoBar = ({...props}) => {
    
    const city = props.city;
    const details = city.consolidated_weather[0];
    const temp = (details.the_temp).toFixed(0);
    const weatherImg = images[details.weather_state_name]
    const curDate = new Date();
    const date = curDate.getDate();
    const month = monthMap[curDate.getMonth()];
    const day = dayMap[curDate.getDay()];
    
    return (
        <div className="infobar-container">
            <div className="top-section">
                <button onClick={() => {
                    props.showSidebar()
                }}>Search for places</button>
                <i onClick={() => (
                    props.fetchHomeData()
                )} className="fas fa-home"></i>
            </div>
            <div className="image-region">
                <img className ='bg-image' src={background} alt="shower"/>
                <img className = 'weather-image'  src={weatherImg} alt=""/>
            </div>
            <div className="info-region">
                <h1 className='size50 mb-4'>{temp} {props.unit}</h1>
                <h1>{details.weather_state_name}</h1>
            </div>
            <div className="location-region">
                <p className='py-1'>Today &nbsp;&nbsp;|&nbsp;&nbsp; {day}, {date} {month}</p>
                <p>
                    <i className="mr-3 fas fa-map-marker-alt"></i>
                    {city.title}
                </p>
            </div>
        </div>
    )
}

export default InfoBar;