import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery';

function App() {
  const [tours, setTours] = useState([]);

  return (
    <>
      <Gallery tours={tours} setTours={setTours} />
    </>
  )
}

export default App
