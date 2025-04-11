import React, { useEffect, useState } from "react";
import loadingImage from '../assets/loading.gif';
import TourCard from './TourCard';

function Gallery({ tours, setTours, removeTour }) {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        // I only added this timer to show the loading spinning wheel; else loading was too fast to show it
        setTimeout(() => {
            // fetch data from URL endpoint
            fetch('https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project')
                .then(response => {
                    // throw an error if response did not execute correctly
                    if (!response.ok) {
                        console.log(response);
                        throw new Error("Network response - Status: " + response.status);
                    }
                    return response.json();
                })
                .then(data => setTours(data))
                .catch((error) => {
                    handleError(error);
                });
            setIsLoading(false);
        }, 1000);
    }, []);

    // function to log error and set state to show error
    const handleError = (err) => {
        console.error("An error occured: ", err.message);
        setError(err.message);
    };

    // if still loading data, show loading image
    if (isLoading) return <img src={loadingImage} width="200"></img>;

    return (
        <div className="gallery">
            <h1>Your Tour Options</h1>

            {tours.map((tour) => (
                <TourCard key={tour.id} id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} />
            ))}
        </div>
    )
    
}

export default Gallery;