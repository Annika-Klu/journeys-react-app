import React from 'react';
import {Link } from 'react-router-dom';

function AllEntries ({entries, setIndex}) {
    console.log(entries);

    const onClick = (event, index) => {
        // event.preventDefault();
        setIndex(index);
        console.log(index);
    }

    return (
        entries.map((entry, index) => 
            <div key={index} className="entry-preview">
                <div className="entry-img-wrap">
                    <img alt={entry.title} src={entry.locationImg} className="entry-img"/>
                </div>
                <h2 className="title">
                {/*removed from a: href={`/post/${index+1}`} */}
                    <a onClick={onClick(index)} className="title-link"><Link to={`/post/${index+1}`}>{entry.title}</Link></a>
                </h2>
                <p>
                    {entry.visitDate} <br />
                   by {entry.author}
                </p>
                <br />
            </div>
        )
    )
}

export default AllEntries;