import React, {useState, useEffect} from 'react';
import Match from './Match';
import './App.css';

  function App() {
    const [heroes, setHeroes]=useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
      fetch("https://api.opendota.com/api/heroes")
        .then(res => res.json())
        .then(
          (result) => {
            setHeroes(result);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setError(error);
          }
        )
    }, [])
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    else {
      return (
        <div className="app">
          <h1>Match</h1>
          <Match heroes={heroes}/>
        </div>
      );
    }
  }

export default App;