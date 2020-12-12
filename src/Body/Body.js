import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AllEntries from './Entries/AllEntries';
import GoogleMap from './Map/GoogleMap';
import EntryDetail from './Entries/EntryDetail';
import Contact from './Contact/Contact';
import NewPost from './Newpost/NewPost';

//import defaultEntries from '../test.json'
//let entries = defaultEntries.sort((a, b) => b.visitDate.localeCompare(a.visitDate));

//Above was before I added backend. The sorting now happens in the backend

function Body () {

  const [entries, setEntries] = useState(null)

  const getData = () =>
    fetch(`/all`)
      .then((res) => res.json())
      .then((data) => setEntries(data))
      .catch((err) => console.log(err))

  useEffect(() => {

    getData();

    //timer. Every minute the data gets fetched > entries updated
    const interval=setInterval(()=>{
      getData()
     },60000)
       
     return()=>clearInterval(interval)
  }, [])

  if (entries === null) {
    return (<div>loading...</div>)
  } 
  
  else return (
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