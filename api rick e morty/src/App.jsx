import { useState, useEffect } from "react"
import './App.css'

function App() {

  const fetchCharacters = (name) => {   

    const [character, setCharacters] = useState(null)
    
    setLoading(true);
       fetch(`https://rickandmortyapi.com/api/character/?name=${name}`)
         .then(response => response.json())
         .then(data => {
           setCharacters(data.results || []);
           setLoading(false);
         })
         .catch(error => {
           setError(error);
           setLoading(false);
         });
     };
    
    return (
    <>
    <h1>hdg9f</h1>
    </>
  )
}

export default App
