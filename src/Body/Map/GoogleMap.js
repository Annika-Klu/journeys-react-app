import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import './Marker.css';
import Theme from './Theme';

//how do I pass props here so I can pass down the entries from body component
//import blogdata from '../../test.json'

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

// eslint-disable-next-line
{/* marker with show attribute. If activemarker corresponds to item's key > additional div as info window */}
const Marker = (props) => (
    <React.Fragment>
      <div className='pin bounce'/>

      {props.markerKey === props.activeMarker && (
        <div className='infoWindow'>
          <div 
            onClick={props.exit}
            className='closeWindow'
          >
            x
          </div> <br/>
          <h3>{props.title}</h3><br/>
          {props.desc}
        </div>
      )}

    </React.Fragment>
)

//Getting lat and lng for each entry, creating new array with only the object keys that are relevant for markers
//any way to control execution of data fetch code 
//e. g. if combined with a state that serves to re-set the map center?
//------------------------------------------------
// let mapLocations = [];
// blogdata.map(entry => (
//   Geocode.fromAddress(entry.location).then(
//     response => {
//       const { lat, lng } = response.results[0].geometry.location;
//       console.log(lat, lng);
//       let newLocation = {
//         "title" : entry.title,
//         "location" : entry.location,
//         "country" : entry.country,
//         "lat" : lat,
//         "lng" : lng,
//         "author" : entry.author,
//         "description" : entry.description
//       }
//       mapLocations.push(newLocation);
//     },
//     error => {
//       console.error(error);
//     }
//   )
// ))
// console.log(mapLocations)

class GoogleMap extends Component {

  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 53.551085,
        lng: 9.993682
      },
      zoom: 12,
      activeMarker: null
    }
  }
  
  _onChildClick = (key, childprops) => {
    this.setState({activeMarker: parseInt(key)});
    console.log('The key value ascribed to item as a child of GoogleMap component: ' + key);
    console.log('current value of activemarker state: ' + this.state.activeMarker);
    console.log('markerKey prop of pin:' + childprops.markerKey);
  }
   
  closeInfoWindow = () => this.setState({activeMarker: null}); 

  render() {
    return (

      <div style={{height: "100%", width: "100%"}}>
          <GoogleMapReact
              bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
              defaultCenter={this.state.center}
              //center={this.props.currentCenter}
              defaultZoom={this.state.zoom}
              onChildClick={this._onChildClick}
              options={{styles: Theme}}
          >

            {
            //after data fetch: conditional render -- mapLocations &&
              test.map((place, index) => (
                  <Marker
                      key={index+1}
                      markerKey={index+1}
                      title={place.location}
                      desc={place.description}
                      lat={place.lat}
                      lng={place.lng}
                      show={this.state.show}
                      activeMarker={this.state.activeMarker}
                      exit={this.closeInfoWindow}
                  />
            ))}

          </GoogleMapReact>
        </div>
      )
    }
  }

  export default GoogleMap;