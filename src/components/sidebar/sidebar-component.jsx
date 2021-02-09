import React from 'react';
import './sidebar-style.scss';

class Sidebar extends React.Component {

    search = () => {
        const location = document.getElementById('location').value;
        if(location === "")
            alert('Please enter a location');
        else 
            this.props.searchByLocation(location);
    }

    render() {
        return (
            <div className={`sidebar ` + (this.props.isSidebarVisible ? ' visible' : ' ')}>
                <div className="close-btn">
                    <i onClick={() => {
                        this.props.hideSidebar();
                    }} className="size20 fas fa-times"></i>
                </div>
                <div className="form-region">
                    <input id='location' type="text" placeholder='Enter city name'/>
                    <br/>
                    <button onClick={() => {
                        this.search();
                    }}>Search location</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;