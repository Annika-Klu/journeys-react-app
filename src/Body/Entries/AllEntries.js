import React from 'react';
import { Link } from 'react-router-dom';

function AllEntries ({entries}) {
    
    console.log(entries);

    return (
        entries.map((entry, index) =>
            <div key={index} className="entry-preview box">
                <div className="entry-img-wrap">
                    <Link to={`/post/${index+1}`}>
                        <img alt={entry.title} src={entry.locationImg} className="entry-img"/>
                    </Link>
                </div>
                <div className='entry-preview-header'>
                    <h1 className="title">
                        <a className="title-link" href={`/post/${index+1}`}>{entry.title}</a>
                    </h1>
                    <div>
                        {entry.visitDate}
                    </div>
                </div>
                {/* {entry.visitDate} <br /> */}
                <div className='authorData'>
                    <img src={entry.authorImg} alt={entry.author} className='authorImg'/>     {entry.author}
                </div>
                
                <br />
            </div>
        )
    )
}

export default AllEntries;