import './404-error-style.scss';
import image from '../../gallery/Scarecrow.png';

const Error404 = ({...props}) => {
    return (
        <div className="error-container">
            <div onClick={() => {
                props.remove404();
            }} id="back-btn">
                <h1 className='size16'>
                    <i className="fas mr-3 fa-chevron-left"></i>
                    <span className='text'> Go Back </span>
                </h1>
            </div>
            <img className='mb-5' src={image} alt="img"/>
            <h1 className='size40 mb-3'>404 ERROR :(</h1>
            <h1 className='size14'>Sorry, we could not find what you were looking for</h1>
        </div>
    )
}

export default Error404;