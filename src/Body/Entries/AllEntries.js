import React from 'react';

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
                    <a onClick={onClick(index)} href={index} className="title-link">{entry.title}</a>
                </h2>
                <p>{entry.visitDate}
                    <br />
                    by {entry.author}
                </p>
                <br />
            </div>
        )
    )
}

export default AllEntries;