import React, {useState, useEffect} from "react";
import axios from 'axios';
import "./App.css";

function useFetchNasaData()
{

  const [nasaData, setNasaData] = useState('');

  useEffect(() => {

    const fetchNasaData = () => {
      // This axios GET request will return a single image
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        // Which we then set to state
        .then(res => setNasaData(res.data))
        // Always include error handling
        .catch(err => console.log(err));
    }

    fetchNasaData();
  }, []);

  return nasaData;
}


function App() {

  const nasaData = useFetchNasaData();

  return (
    <div className="App">{console.log(nasaData)}
      <h1>{nasaData.title}</h1>
      <h4>{nasaData.date}</h4>
      <img src={nasaData.hdurl} height="400" width="1200"></img>
      <p>
        {nasaData.explanation}
      </p>
    </div>
  );
}

export default App;