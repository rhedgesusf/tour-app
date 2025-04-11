import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery';

function App() {

  const [tours, setTours] = useState([]);      // track tours state for reactive app

  // remove tour by specified id from tour list
  const removeTour = (id) => {
    console.log('Item removed: ' + id);
    setTours((prevTours) => prevTours.filter((tour) => tour.id !== id));
  };

  return (
    <>
      <h1>Your Tour Options</h1>
      <Gallery tours={tours} setTours={setTours} removeTour={removeTour}/>
    </>
  )
}

export default App;
