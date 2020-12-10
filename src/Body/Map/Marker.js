import React from 'react';
import './Marker.css';

function Marker (key, props) {

    return (
        <React.Fragment>
        <div className='pin bounce'/>

        {key === props.activeMarker && (
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
        )}
        </React.Fragment>
    )
}

export default Marker;