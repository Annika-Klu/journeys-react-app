import React from 'react';
import { Link, useParams } from 'react-router-dom';

// detailPageIndex
function EntryDetail ({entries, setIndex}) {

    let { id } = useParams();

    const onClick = (event) => {
        event.preventDefault();
        setIndex(undefined);
    }

    return (
            <div className="entry-detail">
                <h2 className="title">{entries[id].author}'s experience</h2>
                <p>Lorem ipsum blablabla</p>
                <button onClick={onClick}><Link to={`/`} className='view-all-link'>View all entries</Link></button>
            </div>
        )
}

export default EntryDetail;