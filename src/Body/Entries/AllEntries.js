import React from 'react';
import { Link } from 'react-router-dom';

function AllEntries ({entries}) {

    let entryURL = entries.map((entry) => {
        let entryTitle = entry.title;
        return entryTitle.replace(/\s+/g, '-').toLowerCase();

    });
    console.log(entryURL);

    return (
        entries.map((entry, index) =>
            <div key={index} className='entry-preview box'>
                <div className='entry-img-wrap'>
                    <Link to={`/post/${index+1}/${entryURL[index]}`}>
                        <img 
                            alt={entry.title} 
                            src={entry.locationImg}
                            className='entry-preview-img'
                        />
                    </Link>
                </div>
                <div className='entry-preview-header'>
                    <h1 className='title sub-title'>
                        <a 
                            className='title-link' 
                            href={`/post/${index+1}/${entryURL[index]}`}
                        >
                            {entry.title}
                        </a>
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