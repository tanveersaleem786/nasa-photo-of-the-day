import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row } from "reactstrap";
import ShowNasaData from "./ShowNasaData";


export default function GetNasaData()
{

  const [nasaData, setNasaData] = useState(''); 
  const [date, setDate] = useState('2020-01-09');
 
  useEffect(() => {
    callPhotoApi(date);
  }, []);

  const onChange = (e) => {
    e.persist();
    callPhotoApi(e.target.value);
  }

  const callPhotoApi = (date) => {
    axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=C6BvOZo5wjyDGsOwH95hiGHpGuM0pS1zBEzzQwes&date=${date}`)
        // Which we then set to state
        .then(res => setNasaData(res.data))
        // Always include error handling
        .catch(err => console.log(err));
  };

  return (
    <Container className="film">
      <Row>
        <ShowNasaData
          title={nasaData.title}
          date={nasaData.date}
          imgUrl={nasaData.hdurl}
          description={nasaData.explanation}
          onChange={onChange}
        />
      </Row>
    </Container>
  );
}

