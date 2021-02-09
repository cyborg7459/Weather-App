import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Loader from './components/loader/loader.component';
import InfoBar from './components/info/info-component';
import DetailsSection from './components/details/details-component';

class App extends React.Component {
  
  state = {
    isLoading : false,
    homeID : 0,
    currentCity : null,
    show404 : false
  }

  componentDidMount() {
    if(this.state.homeID === 0)
      this.getHomeLocation();
    else 
      this.fetchData(this.state.homeID);
  }

  getHomeLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
    } else {
      alert('Geolocation is not supported by this browser');
    }
  }

  geoSuccess = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    axios.get(`https://obscure-mesa-98003.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`)
    .then(res => {
      this.setState({
        homeID : res.data[0].woeid
      }, () => {
        this.fetchData(this.state.homeID);
      })
    })
  } 

  geoError = () => {
    this.setState({
      homeID: 28743736
    }, () => {
      this.fetchData(this.state.homeID);
    })
  }

  fetchData = (id) => {
    axios.get(`https://obscure-mesa-98003.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
    .then((res) => {
      this.setState({
        currentCity : res.data
      });
    })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isLoading ? <Loader text='Fetching weather details' /> : null
        }
        <Row className='main'>
          <Col className = 'px-0' lg={4} xl={3}>
            <InfoBar city = {this.state.currentCity}/>
          </Col>
          <Col className = 'px-0' lg={8} xl={9}>
            <DetailsSection />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;