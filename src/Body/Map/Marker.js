import React from 'react';
import './Marker.css';

function Marker (key, props) {

    //I replaced the && operator in the return statement with the if/else below
    //to see if the error was in my return statement's conditional rendering. Still no info window > issue somewhere else

    //let infoWindow;

    // if (props.ActiveMarker === key) {
    //     infoWindow = 
    //         <div className='infoWindow'>
    //             <div 
    //                 className='closeWindow'
    //                 onClick={props.closeWindow}
    //             >
    //                 x
    //             </div> 
    //             <br/>
    //             <h3>{props.title}</h3>
    //             <br/>
    //             {props.desc}
    //         </div>
    // }

    return (
        <>
            <div className='pin bounce'/>
            {/* line 31 is for the above approach, commmenting out 32 to 45 - it did not work.
            <div>{infoWindow}</div> */}
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