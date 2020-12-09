import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Marker.css';
import Theme from './Theme';

import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

let test = [
    {
        "location" : "Hamburg",
        lat: 53.551085,
        lng: 9.993682,
        "description": "Wonderful hanseatic city"
    },
    {
        "location" : "Lübeck",
        lat : 53.86546735,
        lng : 10.6865593,
        "description": "Ich liebe Marzipan."
    },
    {
      "location" : "Hannover",
      lat : 52.3758916,
      lng : 9.7320104,
      "description": "Let's see..."
  }
]

const Marker = props => (

    <React.Fragment>
      <div
        className='pin bounce'
      />
      {/* if show is set to true > additional div as iinfo window */}
      {props.show && (
        <div className='infoWindow'>
          <div 
            onClick={props.exit}
            className='closeWindow'
          >
            x
          </div> <br/>
          <h3>{props.title}</h3> <br/>
          {props.desc}
        </div>
      )}
    </React.Fragment>
)
 
class GoogleMap extends Component {
    constructor(props) {
      super(props)
      this.state = {
        center: {
          lat: 53.551085,
          lng: 9.993682
        },
        zoom: 12,
        show: false
      }
    }
    
    _onChildClick = (key) => {
      this.setState({show: true});
      console.log(key);
    }

    closeWindow = () => this.setState({show: false})
  
    render() {
      return (

        <div style={{height: "100vh", width: "100%"}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
                defaultCenter={this.state.center}
                center={this.props.currentCenter}
                defaultZoom={this.state.zoom}
                onChildClick={this._onChildClick}
                options={{styles: Theme}}
            >

                {test.map(place => (
                    <Marker
                        key={place.location}
                        title={place.location}
                        desc={place.description}
                        lat={place.lat}
                        lng={place.lng}
                        show={this.state.show}
                        exit={this.closeWindow}
                    />
                ))}

            </GoogleMapReact>
        </div>
      )
    }
  }

  export default GoogleMap;