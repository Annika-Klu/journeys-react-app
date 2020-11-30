import React from 'react';
import {Link } from 'react-router-dom';

function AllEntries ({entries}) {
    
    console.log(entries);

    return (
        entries.map((entry, index) =>
            <div key={index} className="entry-preview box">
                <div className="entry-img-wrap">
                    <Link to={`/post/${index}`}>
                        <img alt={entry.title} src={entry.locationImg} className="entry-img"/>
                    </Link>
                </div>
                <h2 className="title">
                    <a className="title-link" href={`/post/${index}`}>{entry.title}</a>
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