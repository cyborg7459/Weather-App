import './info-style.scss';

import background from '../../gallery/Cloud-background.png';
import shower from '../../gallery/Shower.png';

const InfoBar = () => {
    return (
        <div className="infobar-container">
            <div className="top-section">
                <button>Search for places</button>
                <i className="fas fa-home"></i>
            </div>
            <div className="image-region">
                <img className ='bg-image' src={background} alt="shower"/>
                <img className = 'weather-image'  src={shower} alt=""/>
            </div>
            <div className="info-region">
                <h1 className='size50 mb-4'>15 C</h1>
                <h1>Shower</h1>
            </div>
            <div className="location-region">
                <p className='py-1'>Today &nbsp;&nbsp;|&nbsp;&nbsp; Tuesday, 9 February</p>
                <p>
                    <i className="mr-3 fas fa-map-marker-alt"></i>
                    New Delhi
                </p>
            </div>
        </div>
    )
}

export default InfoBar;