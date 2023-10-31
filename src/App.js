import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Tours from './components/Tours';
import data from './data';

function App() {
  const [tours, setTours] = useState(data);
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }
  function refreshHandler(){
    setTours(data);
  }
  if(tours.length === 0){
    return(
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1>Page is empty</h1>
        <button className='border' onClick={refreshHandler}>Refresh</button>
      </div>
    )
  }
  return (

    <>
      <div>
        <Tours tours={tours} removeTour={removeTour} />
      </div>

    </>
  );
}

export default App;
