import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';

import AllEntries from './Entries/AllEntries';
import EntryDetail from './Entries/EntryDetail';
import Contact from './Contact/Contact';

import entries from '../test.json'

function Body() {

  // const [showDetail, setDetailIndex] = useState(undefined);

  return (
    <>
      <Router>
        <div className="body-wrap">
          
          {/* ENTRIES SECTION */}
          
            <Route 
            exact path='/' 
            render={() => (
                <div className='all-entries-wrap'>
                <AllEntries entries={entries} 
                // setIndex={setDetailIndex} 
                />
                </div>
              )}
            />
      
            <Route 
              exact path={`/post/:id`}
              render={() => (
                <>
                  <div className='single-entry-wrap'>
                    <EntryDetail entries={entries} 
                    // detailPageIndex={showDetail} 
                    // setIndex={setDetailIndex} 
                    />
                  </div>
                </>
              )}
            />

          {/* { showDetail === undefined ?  
          <AllEntries entries={entries} setIndex={setDetailIndex} /> : 
          <EntryDetail entries={entries} detailPageIndex={showDetail} setIndex={setDetailIndex}/> } */}
          
          {/* MAP SECTION */}

          
          <Route 
            exact path={`/`}
            component={() => (
              <div className='map-wrap'>
                <div>map test</div>
              </div>
            )}
          />

            {/* below: previous content map component 
            { showDetail === undefined ?
            <h2 className="map-heading">Places you guys have been...</h2> : <div>test</div> } */}
                  
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