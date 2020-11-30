import React from 'react';
import { Link, useParams } from 'react-router-dom';

//removed from props bc of removing hook: detailPageIndex, setIndex
function EntryDetail ({entries}) {

    let { id } = useParams();

    return (
            <div className='entry-detail box'>
                <img src={`${entries[id].locationImg}`} className="entry-img detail-img"/>
                <h2 className='title detail-title'>{entries[id].author}'s experience</h2>
                <p className='detail-text'>Lorem ipsum blablabla</p>
                <button className='view-all-btn'>
                    <Link to={`/`} className='view-all-link'>View all entries</Link>
                </button>
            </div>
        )
}

export default EntryDetail;