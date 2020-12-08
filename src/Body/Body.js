import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AllEntries from './Entries/AllEntries';
import EntryDetail from './Entries/EntryDetail';
import Contact from './Contact/Contact';

import defaultEntries from '../test.json'
let entries = defaultEntries.sort((a, b) => b.visitDate.localeCompare(a.visitDate));

//sorting function!

function Body() {

  return (
    <>
      <Router>
        <div className="body-wrap">
          
          {/* ENTRIES SECTION */}
            <Route 
            exact path='/' 
            render={() => (
                <div className='all-entries-wrap'>
                <AllEntries entries={entries}/>
                </div>
              )}
            />
      
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
          
          {/* MAP SECTION */}
          <Route 
            exact path={`/`}
            component={() => (
              <div className='map-wrap'>
                <div>map test</div>
              </div>
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