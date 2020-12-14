import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import AllEntries from './Entries/AllEntries';
import GoogleMap from './Map/GoogleMap';
import EntryDetail from './Entries/EntryDetail';
import Contact from './Contact/Contact';
import NewPost from './Newpost/NewPost';

//Elements for using Geocode API
import AddGeoData from './Map/AddGeoData';
import Geocode from 'react-geocode';
Geocode.setApiKey(process.env.REACT_APP_API_KEY);

//------BEFORE BACKEND WAS ADDED
//import defaultEntries from '../test.json'
//let entries = defaultEntries.sort((a, b) => b.visitDate.localeCompare(a.visitDate));
//----is OUTDATED. The sorting now also happens in the backend

//BACKEND REPO: PRIVATE /annika-klu/journeys-react-backend
//there is also a version deployed to Heroku but I will stick with the local one so I can update entries

function Body () {

  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(null);
  const [mapLocations, setMapLocations] = useState(null);

  const getData = () =>
    fetch(`/all`)
      .then((res) => {
        if (!res.ok) {
        setError(`a problem ocurred when loading the data: ${res.statusText}`);
        }
        return res.json()})
      .then((data) => setEntries(data))
      .catch((err) => console.log(err))

  useEffect(() => {

    getData();

    //timer. Every 5 minutes the data gets fetched > entries updated
    // const interval=setInterval(()=>{
    //   getData()
    //  },300000)
      
    //  return()=>clearInterval(interval)
  }, [])

  // ------NOTE ON MAP LOCATIONS
  // Using Geocode, I tried to create mapLocations array (containing lat/lng) here so that I could pass it directly
  // to GoogleMap Component, rendering the GoogleMap conditionally only if "mapLocations" was not null
  // but I could not resolve the synchronity issue and kept getting the message that "mapLocations is null"
  
  //--- from GOOGLEMAP // specifying MAP LOCATIONS
    // in below useEffect, each entry is transformed via addGeoData funct,
    // then added to a new array 'mapLocations'.
    // (useEffect > supposed to fetch data again if the value of 'entries' changes
    // but not triggered again every time the DOM renders again, e. g. when a state gets updated)
  
    // let mapLocations = [];

    function defineMapLocations (entries) {
        let mapLocations = [];
        if (entries != null) {
          entries.map(entry => (
            AddGeoData(entry)
            .then((response => mapLocations.push(response)))
            // TRIED: updating state step by step with syntax (response => setMapLocations([...mapLocations, response]))) (setting mapLocations default to []), 
            // PROBLEM: markers are not rendered anymore (Reason: GoogleMap Component rendered already while mapLocations is just empty array?)
            // if I alter the conditional render, e. g. to say that mapLocations needs to have specific length, the map does not load at all.
            // console.log('mapLocatoins:'),
            // console.log(mapLocations)
          ));
        }
        setMapLocations(mapLocations);
        return mapLocations;
    }

    useEffect(() => {
        //setCenterFunct();
        defineMapLocations(entries);
        console.log(mapLocations);
    }, [entries]);

  // ------RENDERED DATA
  // as long as there is no value for entries, the user will be shown a 'loading message'
  // if entries cannot be fetched, it will be an error message

  if (entries === null) {
    return (
      error ? <div className='user-msg'>{error}</div> : <div className='user-msg'>loading...</div>
    )
  } else return (
    <>
      <Router>
        <div className='flex-wrap'>
          
          {/* ALL ENTRIES + MAP */}
            <Route 
            exact path='/' 
            render={() => (
              <>
                <div className='all-entries-wrap'>
                  <AllEntries entries={entries}/>
                </div>
                <div className='map-wrap'>
                  {mapLocations && <GoogleMap mapLocations={mapLocations}/> }
                </div>
              </>
              )}
            />

            {/* ENTRY DETAIL PAGE */}
            <Route 
              exact path={`/post/:id/:entryURL`}
              render={() => (
                <>
                  <div className='single-entry-wrap'>
                    <EntryDetail entries={entries}/>
                  </div>
                </>
              )}
            />         
        {/*as it always confuses me, reminder: below is "body-wrap" div closing tag...*/}
        </div>

        {/* CONTACT SECTION */}
        <Route 
            exact path={`/contact`}
            component={Contact}
          />

          {/* NEW POST */}

        <Route 
            exact path={`/new`}
            component={NewPost}
          />
      </Router>  
    </>
  );
}

export default Body;