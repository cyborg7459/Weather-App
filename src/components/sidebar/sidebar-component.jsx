import React from 'react';
import './sidebar-style.scss';

class Sidebar extends React.Component {
    render() {
        return (
            <div className={`sidebar ` + (this.props.isSidebarVisible ? ' visible' : ' ')}>
                <div className="close-btn">
                    <i onClick={() => {
                        this.props.hideSidebar();
                    }} className="size20 fas fa-times"></i>
                </div>
                <div className="form-region">
                    <input type="text" placeholder='Enter city name'/>
                    <br/>
                    <button>Search location</button>
                </div>
            </div>
        )
    }
}

export default Sidebar;