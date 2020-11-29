import React from 'react';

function EntryDetail ({entries, detailPageIndex, setIndex}) {

    const onClick = (event) => {
        event.preventDefault();
        setIndex(undefined);
    }

    return (
            <div className="entry-preview">
                <h2 className="title">{entries[detailPageIndex].author}'s experience</h2>
                <p>Lorem ipsum blablabla</p>
                <button onClick={onClick}>View all entries</button>
            </div>
        )
}

export default EntryDetail;