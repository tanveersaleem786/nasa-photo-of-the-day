import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import ShowNasaData from "./ShowNasaData";


export default function GetNasaData()
{

  const [nasaData, setNasaData] = useState('');

  useEffect(() => {

    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      // Which we then set to state
      .then(res => setNasaData(res.data))
      // Always include error handling
      .catch(err => console.log(err));
    }, []);

  return (
    <Container className="film">
      <Row>
        <ShowNasaData
          title={nasaData.title}
          date={nasaData.date}
          imgUrl={nasaData.hdurl}
          description={nasaData.explanation}
        />
      </Row>
    </Container>
  );
}

