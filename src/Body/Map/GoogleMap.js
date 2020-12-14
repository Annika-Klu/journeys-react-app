import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Theme from './Theme';

import Marker from './Marker';
import './Marker.css';

function GoogleMap ({ mapLocations, center }) {

    //console.log(mapLocations);

    const defaultZoom = 12;

    //-------------SHOWING MARKERS

    //new mapLocations array is the source the markers get rendered from

    const [markers, setMarkers] = useState([]);
    
    function renderMarkers () {
        let newMarkers = mapLocations.map((place, index) => (
            <Marker
                key={index+1}
                title={place.location}
                desc={place.description}
                lat={place.lat}
                lng={place.lng}
                activeMarker={activeMarker}
                closeWindow={closeInfoWindow}
            />
        ))
        setMarkers(newMarkers);
        console.log(`new Markers logged below:`);
        console.log(newMarkers);
        return markers;
    };

    // the renderMarkers funct gets called in <GoogleMapReact> component > after google API elements loaded

    //-------------INFO WINDOW

    // opening & closing functions for info window, connected to state that gets set to key value of element clicked.
    // it used to work, does not anymore and I could not figure out why

    const [activeMarker, setActiveMarker] = useState(null);

    function openInfoWindow (key, childprops) {
        setActiveMarker(parseInt(key));
        // below console.log statements reveal that the marker is set correctly corresponding to the key value.
        // (noticed: every time you first click on a particular marker again, the state value that gets logged 
        // still equals the the previously selected marker's key, but I think that's related to the computing process: 
        // script reading > logging is faster than state value change?)
        console.log(`activeMarker: ${activeMarker} ${typeof activeMarker}`);
        console.log(`key: ${key} ${typeof parseInt(key)} ${childprops.title}`);
    }

    function closeInfoWindow () {
        setActiveMarker(null);
    }

    //--------ACTUAL MAP

    return (
        <div style={{height: "100%", width: "100%"}}>

            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
                //defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                center={center}
                onChildClick={openInfoWindow}
                options={{styles: Theme}}
                onGoogleApiLoaded={renderMarkers}
            >

                {markers}

          </GoogleMapReact>
        </div>
    )
}

export default GoogleMap;