import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AllEntries from './Entries/AllEntries';
import GoogleMap from './Map/GoogleMap';
import TestMap from './Map/TestMap';
import EntryDetail from './Entries/EntryDetail';
import Contact from './Contact/Contact';

import entries from '../test.json'

//sorting function!

function Body() {

  return (
    <>
      <Router>
        <div className="body-wrap">
          
          {/* ALL ENTRIES + MAP */}
            <Route 
            exact path='/' 
            render={() => (
              <>
                <div className='all-entries-wrap'>
                  <AllEntries entries={entries}/>
                </div>
                <div className='map-wrap'>
                  {/* <GoogleMap/> */}
                  <TestMap entries={entries}/>
                </div>
              </>
              )}
            />

            {/* ENTRY DETAIL PAGE */}
            <Route 
              exact path={`/post/:id`}
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
      </Router>  
    </>
  );
}

export default Body;