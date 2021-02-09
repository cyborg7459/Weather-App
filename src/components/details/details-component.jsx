import './details-style.scss';
import { Row, Col, ProgressBar } from 'react-bootstrap';
import WeatherCard from '../weather-card/weather-card-component';

const DetailsSection = ({...props}) => {
    return (
        <div className="details-container">
            <div className="details-inner">
                <Row className='weather-cards'>
                    <Col className='px-0' sm={6} lg={4} xl={2}>
                        <WeatherCard />
                    </Col>
                    <Col className='px-0' sm={6} lg={4} xl={2}>
                        <WeatherCard />
                    </Col>
                    <Col className='px-0' sm={6} lg={4} xl={2}>
                        <WeatherCard />
                    </Col>
                    <Col className='px-0' sm={6} lg={4} xl={2}>
                        <WeatherCard />
                    </Col>
                    <Col className='px-0' sm={6} lg={4} xl={2}>
                        <WeatherCard />
                    </Col>
                </Row>
                <h1 className='mt-5 text-left size17'>Today's Highlights</h1>
                <Row className='highlights-row'>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Wind Status</h1>
                        <h1 className='size40'>7 <span className='size25'> mph </span></h1>
                    </Col>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Humidity</h1>
                        <h1 className='size40'>84 <span className='size25'> % </span></h1>
                        <ProgressBar className='progress' now={84} />
                    </Col>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Visibility</h1>
                        <h1 className='size40'>6,4 <span className='size25'> miles </span></h1>
                    </Col>
                    <Col className='highlight' md={5}>
                        <h1 className='size13'>Air pressure</h1>
                        <h1 className='size40'>998 <span className='size25'> mb </span></h1>
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