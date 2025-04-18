import React, { useEffect, useState } from "react";
import loadingImage from '../assets/loading.gif';
import TourCard from './TourCard';

function Gallery({ tours, setTours, removeTour }) {

    const [isLoading, setIsLoading] = useState(true);   // loading state to show spinner
    const [error, setError] = useState(null);           // error state to show any type of error

    useEffect(() => {
        setIsLoading(true);

        // I only added this timer (1 second) to show the loading spinning wheel; else loading was too fast to show it
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

    // function to remove tour when button is clicked; this calls method provided by App.js
    const handleRemoveTour = (id) => {
        console.log('handleRemoveTour called: ' + id);
        removeTour(id);
    };

    // if error occurred, show error message
    if (error) return <div className="error">{error}</div>;

    // if still loading data, show loading spinner
    if (isLoading) return <img src={loadingImage} width="200"></img>;

    // show empty tours list message
    if (tours.length === 0) return <div className="no-tours">No tours to display</div>;

    return (
        <div className="gallery">
            

            {tours.map((tour) => (
                <TourCard key={tour.id} id={tour.id} name={tour.name} info={tour.info} image={tour.image} price={tour.price} onRemoveTour={handleRemoveTour} />
            ))}
        </div>
    )
}

export default Gallery;