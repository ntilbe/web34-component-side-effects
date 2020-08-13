import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Header from './Components/Header'
import Main from './Components/Main'
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [photo, setPhoto] = useState([])
  const [date, setDate] = useState("2020-05-26")
  // const [formData, setFormData] = useState("")

  // Add an effect hook to handle the API call side effect.
  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`) 
    .then( res => {
      console.log("works") // console.log the response
      setPhoto(res.data)
    })
    .catch(() => {
      console.log("Failure to launch")
    })
  }, [date])
  
  return (
    <div className="App">
      <div>
      <Header/>
      
      <Main
        photo = {photo}
      />
      </div>
      
      
    </div>

  );
}

export default App;
