import React from 'react';
import { Link, useParams } from 'react-router-dom';

function EntryDetail ({entries}) {

    let { id } = useParams();
    id--;
    console.log(id);
    
    return (
        <div className='entry-detail box'>
            <img src={`${entries[id].locationImg}`} className="entry-img detail-img"/>
            <h2 className='title detail-title'>
                A journey to 
                <br/>
                {entries[id].location}, {entries[id].country}
            </h2>
            <div className='detail-text'>
                <h2>{entries[id].title}</h2>
                <span>{entries[id].author}</span>
                <p>{entries[id].description}</p>
            </div>
            <button className='view-all-btn'>
                <Link to={`/`} className='view-all-link'>View all entries</Link>
            </button>
        </div>
    )
}

export default EntryDetail;