import React, {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import Theme from './Theme';

import Marker from './Marker';
import './Marker.css';

//Elements for using Geocode API
import AddGeoData from './AddGeoData';
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

function GoogleMap ({ entries }) {

    const defaultZoom = 12;

    // ------------DEFAULT CENTER
    // the map's defaultCenter value needs to be there from the start and can't be changed.
    // Therefore I can't set the value via useState
    // I tried to get default center data from Geocode API in the body component and pass it from there, 
    // but still encountered the same problem as described below at --SETTING CENTER

    let defaultCenter = {
        lat: 30.4277547,
        lng: -9.5981072
    }

    //-------------GETTING LNG/LAT DATA FOR EACH ENTRY

    // as placing marker for each location requires latitude and longitude,
    // the function AddGeoData (see imports) uses Geocode API to create new entry object that also includes lat/lng
    // it is applied in the useEffect below.

    //-------------SETTING CENTER TO LATEST ENTRY

    // NOT IN USE. PROBLEM: map does center like it's supposed to,
    // but seemingly interferance with onGoogleAPIloaded? > markers not rendered anymore
    
    // since entries are received sorted by date, the latest entry would be the one at index pos. 1
    // I tried to grab this the data for the center from useEffect > mapLocations array but could not make it work.
    // so below there is a function to define the center.

    // const [center, setCenter] = useState(undefined);

    // async function setCenterFunct () {
    //     let centerEntry = await addGeoData(entries[1]);
    //     console.log('centerentry ' + centerEntry);
    //     setCenter({lat : centerEntry.lat, lng: centerEntry.lng});
    // }

    //--- specifying MAP LOCATIONS
    // in below useEffect, each entry is transformed via addGeoData funct,
    // then added to a new array 'mapLocations'.
    // (useEffect > supposed to fetch data again if the value of 'entries' changes
    // but not triggered again every time the DOM renders again, e. g. when a state gets updated)
  
    let mapLocations = [];

    useEffect(() => {
        //setCenterFunct();
        if (entries != null) {
        entries.map(entry => (
            AddGeoData(entry)
            .then((response => mapLocations.push(response)))),
            //console.log('mapLocatoins:'),
            //console.log(mapLocations)
        );
        return mapLocations}
        
    }, [entries]);

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

    return (
        <div style={{height: "100%", width: "100%"}}>

            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_API_KEY}}
                defaultCenter={defaultCenter}
                defaultZoom={defaultZoom}
                //center={center}
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