import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AllEntries from './Entries/AllEntries';
import EntryDetail from './Entries/EntryDetail';

import entries from '../test.json'

function Body() {

  const [showDetail, setDetailIndex] = useState(undefined);

  return (
    <>
      <Router>
        <div className="body-flex">
          
          {/* ENTRIES SECTION */}
          <div className="entry-wrap">
            <Switch>
              <Route 
              exact path='/' 
              render={() => (
                <AllEntries entries={entries} 
                setIndex={setDetailIndex} />
                )}
              />
              <Route 
                path={`/post/:id`}
                render={() => (
                  <EntryDetail entries={entries} 
                  detailPageIndex={showDetail} 
                  setIndex={setDetailIndex} />
                )}
              />
            </Switch>
            {/* { showDetail === undefined ?  
            <AllEntries entries={entries} setIndex={setDetailIndex} /> : 
            <EntryDetail entries={entries} detailPageIndex={showDetail} setIndex={setDetailIndex}/> } */}
          </div>
          
          {/* MAP SECTION */}
          <Route 
            exact path={`/`}
            render={() => (
              <div className="map-wrap">
                <div>map test</div>
              </div>
            )}
          />
            {/* below: previous content map component 
            { showDetail === undefined ?
            <h2 className="map-heading">Places you guys have been...</h2> : <div>test</div> } */}
                  
        {/*as it always confuses me, explanation: 
        now comes the "body-flex" div closing tag...*/}
        </div>

        {/* CONTACT SECTION */}
        <Route 
            exact path={`/contact`}
            render={() => (
              <div className="contact-page">
                <div>Hi</div>
              </div>
            )}
          />
      </Router>  
    </>
  );
}

export default Body;