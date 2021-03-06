import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

import Loader from './components/loader/loader.component';
import InfoBar from './components/info/info-component';
import DetailsSection from './components/details/details-component';
import Sidebar from './components/sidebar/sidebar-component';
import Error404 from './components/404-error/404-error-component';

class App extends React.Component {
  
  state = {
    isLoading : true,
    homeID : 0,
    currentCity : null,
    show404 : false,
    tempUnit : 'C',
    activeScale : 1,
    isSidebarVisible : false
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

  fetchHomeData = () => {
    this.fetchData(this.state.homeID);
  }

  fetchData = (id) => {
    this.setState({
      isLoading : true
    })
    axios.get(`https://obscure-mesa-98003.herokuapp.com/https://www.metaweather.com/api/location/${id}/`)
    .then((res) => {
      this.setState({
        currentCity : res.data
      }, () => {
        this.setState({
          isLoading : false,
          isSidebarVisible : false,
          tempUnit : 'C',
          activeScale : 1
        })
      });
    })
  }

  searchByLocation = (location) => {
    this.setState({
      isLoading : true
    })
    axios.get('https://obscure-mesa-98003.herokuapp.com/https://www.metaweather.com/api/location/search/', {
      params : {
        query : location
      }
    })
    .then(res => {
      if(res.data.length === 0) {
        this.setState({
          show404 : true,
          isLoading: false
        })
      }
      else {
        this.fetchData(res.data[0].woeid);
      }
    })
  }

  convertToKelvin = () => {
    if(this.state.activeScale === 2) return;
    if(this.state.activeScale === 3)
      this.convertToCelcius();
    let city = this.state.currentCity;
    city.consolidated_weather = city.consolidated_weather.map(day => {
      return {
        ...day,
        max_temp : day.max_temp+273,
        min_temp : day.min_temp+273,
        the_temp : day.the_temp +273
      }
    })
    this.setState({
      currentCity : city,
      activeScale : 2,
      tempUnit : 'K'
    });
  }

  convertToCelcius = () => {
    if(this.state.activeScale === 1) return;
    let city = this.state.currentCity;
    if(this.state.activeScale === 2) {
      city.consolidated_weather = city.consolidated_weather.map(day => {
        return {
          ...day,
          max_temp : day.max_temp-273,
          min_temp : day.min_temp-273,
          the_temp : day.the_temp-273
        }
      })
      this.setState({
        currentCity : city,
        activeScale : 1,
        tempUnit : 'C'
      });
    }
    else if(this.state.activeScale === 3) {
      city.consolidated_weather = city.consolidated_weather.map(day => {
        return {
          ...day,
          max_temp : (day.max_temp-32)*5/9,
          min_temp : (day.min_temp-32)*5/9,
          the_temp : (day.the_temp-32)*5/9
        }
      })
      this.setState({
        currentCity : city,
        activeScale : 1,
        tempUnit : 'C'
      });
    }
  }

  convertToFahrenheit = () => {
    if(this.state.activeScale === 3) return;
    if(this.state.activeScale === 2)
      this.convertToCelcius();
    let city = this.state.currentCity;
    city.consolidated_weather = city.consolidated_weather.map(day => {
      return {
        ...day,
        max_temp : (day.max_temp*9/5)+32,
        min_temp : (day.min_temp*9/5)+32,
        the_temp : (day.the_temp*9/5)+32
      }
    })
    this.setState({
      currentCity : city,
      activeScale : 3,
      tempUnit : 'F'
    });
  }

  showSidebar = () => {
    this.setState({
      isSidebarVisible : true
    })
  }

  hideSidebar = () => { 
    this.setState({
      isSidebarVisible : false
    })
  }

  remove404 = () => {
    this.setState({
      show404 : false
    })
  }

  render() {
    if(this.state.show404) {
      return (
        <div className='App'>
          <Error404 remove404={this.remove404} />
        </div>
      )
    }
    else if(this.state.isLoading) {
      return (
        <div className="App">
          <Loader text='Fetching weather details' />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Sidebar 
            searchByLocation={this.searchByLocation}
            isSidebarVisible={this.state.isSidebarVisible}
            hideSidebar={this.hideSidebar}
          />
          <Row className='main'>
            <Col className = 'px-0' lg={4} xl={3}>
              <InfoBar 
                showSidebar={this.showSidebar}
                fetchHomeData={this.fetchHomeData}
                unit={this.state.tempUnit} 
                city={this.state.currentCity}
              />
            </Col>
            <Col className = 'px-0' lg={8} xl={9}>
              <DetailsSection 
                convertToKelvin = {this.convertToKelvin}
                convertToCelcius = {this.convertToCelcius}
                convertToFahrenheit = {this.convertToFahrenheit}
                activeScale={this.state.activeScale} 
                unit={this.state.tempUnit} 
                city={this.state.currentCity} 
              />
            </Col>
          </Row>
        </div>
      )
    }
  }
}

export default App;