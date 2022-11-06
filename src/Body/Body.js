import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

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

function Body () {

  //-----GETTING DATA FROM BACKEND TO DEFINE ENTRIES
  // Backend repo (private): /annika-klu/journeys-react-backend
  // there is also a version deployed to Heroku but I will stick with the locally hosted one

  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(null);
  
  async function getData () {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BE_URL}/all`)
    if (res.status === 200) {
      setEntries(res.data)
    }
    } catch (error) {
      setError(`a problem occurred when loading the data: ${error}`)
      console.error(error.message)
    }
  }


  useEffect(() => {

    getData();

    // timer. Every 5 minutes the data gets fetched > entries updated
    // maybe introduce useState hook for newPost instead.
    const interval = setInterval(()=>{
      getData()
     },300000)

     return()=>clearInterval(interval)

  }, [])
  
  // ------------ DEFINING MAP LOCATIONS

  // placing marker requires lat and lng, that's the job of AddGeoData funct. 
  // Result: new array 'mapLocations'.
  
  const [mapLocations, setMapLocations] = useState(null);

  function defineMapLocations (entries) {
      let mapLocations = [];
      if (entries != null) {
        entries.map((entry) => (
          AddGeoData(entry)
          .then((response => mapLocations.push(response)))
        ));
      }
      setMapLocations(mapLocations);
      return mapLocations;
  }

  //------------SETTING MAP CENTER

  const [center, setCenter] = useState(undefined);

  async function setCenterFunct () {
      if (entries !== null) {
        let centerEntry = await AddGeoData(entries[0]);
        setCenter({lat : centerEntry.lat, lng: centerEntry.lng});
      }
  }

  //------------USE EFFECT > Map Locations & Map Center defined if value of 'entries' changes

  useEffect(() => {
      setCenterFunct();
      defineMapLocations(entries);
      //console.log(mapLocations);
  }, [entries]);

  // ***** EXPERIMENT: ONLY ONE USEFFECT FOR DATA AND MARKERS

  // Tried using just one useEffect that fetches entries and, after that, defines new markers
  // It did not work, 'mapLocations' was always passed as empty array. I'm thinking it's because the 
  // async funct waits for code of getData to execute but does not actually wait for 'entries' state update. Here's my attempt:
  
  // useEffect(() => {

  //   async function onLoad() {
  //     await getData();
  //     return defineMapLocations(entries);
  //   }

  //   onLoad();

  //   //TIMER HERE
  // }, [])

  // ***** END EXPERIMENT USEEFFECT

  // ----------RENDERING DATA

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
                  {mapLocations && <GoogleMap mapLocations={mapLocations} center={center}/> }
                </div>
              </>
              )}
            />

            {/* ENTRY DETAIL PAGE */}
            <Route 
              exact path={`/post/:id/:entryURL`}
              render={() => (
                <>
                  <div className='entry-detail-wrap'>
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