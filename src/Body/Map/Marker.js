import React from 'react';
import './Marker.css';

function Marker (key, props) {

    return (
        <>
            <div className='pin bounce'>{props.title}</div>
    
            {/* infoWindow that is supposed to render if the value of 'activeMarker' corresponds to key of clicked item */}
            { props.activeMarker === key && (
                <div className='infoWindow'>
                    <div 
                        className='closeWindow'
                        onClick={props.closeWindow}
                    >
                        x
                    </div> 
                    <br/>
                    <h3>{props.title}</h3>
                    <br/>
                    {props.desc}
                </div>
            ) }
        </>
    )
}

export default Marker;