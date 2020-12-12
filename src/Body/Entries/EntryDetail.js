import React from 'react';
import { Link, useParams } from 'react-router-dom';

function EntryDetail ({ entries }) {

    //using the post's id parameter (index + 1) from the URL 
    //in order to display correct entry array item
    let { id } = useParams();
    id--;
    console.log(id);

    let entryImageSource = {
        backgroundImage: `url(${entries[id].locationImg})`,
    }
    
    return (
        <div className='entry-detail box'>
            <div style={entryImageSource} className='entry-detail-img'>
                <h2 className='title entry-detail-title'>
                    A journey to 
                    <br/>
                    {entries[id].location}, {entries[id].country}
                </h2>
            </div>           
            <div className='entry-detail-text'>
                <h2>{entries[id].title}</h2>
                <span>{entries[id].author}</span>
                <p>{entries[id].description}</p>
            </div>
            <button>
                <Link to={`/`} className='view-all-link'>
                    <img
                        alt='back to all entries'
                        src="https://s.svgbox.net/hero-solid.svg?ic=arrow-narrow-left&fill=1b86aa80" width="32" height="32"/>
                </Link>
            </button>
        </div>
    )
}

export default EntryDetail;