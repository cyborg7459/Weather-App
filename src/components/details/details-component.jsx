import './details-style.scss';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import WeatherCard from '../weather-card/weather-card-component';

const DetailsSection = ({...props}) => {

    const city = props.city;
    const details = city.consolidated_weather[0];
    const next5days = city.consolidated_weather.slice(1,6);

    return (
        <div className="details-container">
            <div className="details-inner">
                <Row className='weather-cards'>
                    {
                        next5days.map((day, idx) => {
                            return (
                                <Col className='px-0' sm={6} lg={4} xl={2}>
                                    <WeatherCard details= {day} key={idx} unit={props.unit} />
                                </Col>
                            )
                        })
                    }
                </Row>
                <h1 className='mt-5 text-left size17'>Today's Highlights</h1>
                <Row className='highlights-row'>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Wind Status</h1>
                        <h1 className='size40'> {details.wind_speed.toFixed(0)} <span className='size25'> mph </span></h1>
                    </Col>
                    <Col className='highlight' md={5}>
                        <h1 className='mb-0 size13'>Humidity</h1>
                        <h1 className='mb-0 size40'> {details.humidity} <span className='size25'> % </span></h1>
                        <ProgressBar className='progress' now={`${details.humidity}`} />
                    </Col>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Visibility</h1>
                        <h1 className='size40'> {details.visibility.toFixed(2)} <span className='size25'> miles </span></h1>
                    </Col>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Air pressure</h1>
                        <h1 className='size40'> {details.air_pressure} <span className='size25'> mb </span></h1>
                    </Col>
                </Row>
            </div>
            <div className="footer text-muted">
                Designed & Developed by Shreyash Kumar Singh
            </div>
        </div>
    )
}

export default DetailsSection;