import React, {useState} from "react";
import '../styles/styles.css';

function TourCard({id, name, price, image, info, onRemoveTour}) {
    return (
        // create tour card
        <div className="tour-card">
          <h2>{name}</h2>
          <p>${price}</p>
          <img src={image} width="360"></img>
        </div>
     );
}

export default TourCard;