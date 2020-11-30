import React, {useState} from 'react';

import AllEntries from './Entries/AllEntries';
import EntryDetail from './Entries/EntryDetail';

import entries from '../test.json'

function Body() {

  const [showDetail, setDetailIndex] = useState(undefined);

  return (
    <>
      <div className="body-flex">
        <div className="entry-wrap">
          {/* ------to condition rendering of Blog based on whether index is selected or not > show all entries or detail page */}
          { showDetail === undefined ?  
          <AllEntries entries={entries} setIndex={setDetailIndex} /> : 
          <EntryDetail entries={entries} detailPageIndex={showDetail} setIndex={setDetailIndex}/> }
        </div>
        <div className="map-wrap">
          {/* eventually replace below headers with map component */}
          { showDetail === undefined ?
          <h2 className="map-heading">Places you guys have been...</h2> : ""}
        </div>
    </div>
    </>
  );
}

export default Body;