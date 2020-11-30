import React from 'react';
import {Link } from 'react-router-dom';

//removed from props bc of removing hook: setIndex
function AllEntries ({entries}) {
    
    console.log(entries);

    // const onClick = (event, index) => {
    //     // event.preventDefault();
    //     setIndex(index);
    //     console.log(index);
    // }

    return (
        entries.map((entry, index) =>
            <div key={index} className="entry-preview box">
                <div className="entry-img-wrap">
                <Link to={`/post/${index}`}>
                    <img alt={entry.title} src={entry.locationImg} className="entry-img"/>
                    </Link>
                </div>
                <h2 className="title">
                    <a className="title-link" href={`/post/${index+1}`}>{entry.title}</a>
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