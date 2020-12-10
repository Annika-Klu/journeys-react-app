import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Theme from './Theme';

import Marker from './Marker';
import './Marker.css';

import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

const defaultCenter = {
      lat: 53.551085,
      lng: 9.993682
    }

const defaultZoom = 12;

//-----------test data--------------
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
//----------------------------------


function TestMap ({entries}) {
    
    let mapLocations = [];

    //useEffect to make sure the data fetch only runs again if the entries array changes
    //but is not triggered again every time the DOM renders again, e. g. when a state gets updated
    useEffect(() => {
        entries.map(entry => (
        Geocode.fromAddress(entry.location).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                let newLocation = {
                    "title" : entry.title,
                    "location" : entry.location,
                    "country" : entry.country,
                    "lat" : lat,
                    "lng" : lng,
                    "author" : entry.author,
                    "description" : entry.description
                }
                mapLocations.push(newLocation);
            },
            error => {
                console.error(error);
            }
        )))
        console.log(mapLocations);
    }, [entries]);

    const [activeMarker, setActiveMarker] = useState(null);

    function openInfoWindow (key, childprops) {
        setActiveMarker(parseInt(key));
        console.log('activeMarker: ' + activeMarker)
        console.log('key:' + key + ' ' + childprops.title);
    }

    function closeInfoWindow () {
        setActiveMarker(null);
    }

    // const [center, setCenter] = useState(null);
    // if (center != null) {
    //     setCenter(
    //         {
    //             lat: mapLocations[0].lat,
    //             lng : mapLocations[0].lng
    //         }
    //     );
    //     console.log(center);
    // };

    return (
        <div style={{height: "100%", width: "100%"}}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                //center={center} // add hook here? But don't create a loop... :)
                onChildClick={openInfoWindow}
                options={{styles: Theme}}
            >

                {
                    test.map((place, index) => (
                        <Marker
                            key={index+1}
                            test={index+1}
                            title={place.location}
                            desc={place.description}
                            lat={place.lat}
                            lng={place.lng}
                            activeMarker={activeMarker}
                            closeWindow={closeInfoWindow}
                        />
                ))}

          </GoogleMapReact>
        </div>
    )
}

export default TestMap;