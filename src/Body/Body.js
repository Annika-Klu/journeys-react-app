import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AllEntries from './Entries/AllEntries';
import GoogleMap from './Map/GoogleMap';
import EntryDetail from './Entries/EntryDetail';
import Contact from './Contact/Contact';
import NewPost from './Newpost/NewPost';

import defaultEntries from '../test.json'
let entries = defaultEntries.sort((a, b) => b.visitDate.localeCompare(a.visitDate));
//To keep in mind here: as of now, I'm not handling data in a JS date format.
//The date in my hard coded blog sample is a string. When using actual date, I might have to check if sorting works correctly.
//also, I'd preferably move the sorting function to server-side if connected to a backend.

function Body () {

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
                  <GoogleMap entries={entries}/>
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