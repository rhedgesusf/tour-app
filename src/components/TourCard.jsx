import React, { useState } from "react";
import '../styles/styles.css';

function TourCard({ id, name, price, image, info, onRemoveTour }) {

    const [moreDetails, setMoreDetails] = useState(false);    // toggle state for showing tour details

    // function to toggle show/hide details
    const toggleDetails = () => {
        setMoreDetails(!moreDetails);
    };

    // function to remove tour on button press
    const removeTour = () => {
        onRemoveTour(id);
    };

    return (
        // create tour card
        <div className="tour-card">
            <h2>{name}</h2>
            <p>${price}</p>
            <img src={image} width="360"></img>

            {/* create text that toggles hide/show logic for tour details */}
            <div className='detail' onClick={toggleDetails}>{moreDetails ? 'Less details' : 'More details'}</div>

            {/* show tour details if flag is set */}
            {moreDetails && (<p>{info}</p>)}

            {/* button to remove item from tour list */}
            <button className="remove-btn" onClick={() => removeTour()}>Remove</button>
        </div>
    );
}

export default TourCard;