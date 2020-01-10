import React from "react";
import GetNasaData from "./components/GetNasaData";
import styled, { css } from "styled-components";
import "./App.css";

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

function App() {

  return (
    <Wrapper>
      <div className="App">     
        <GetNasaData /> 
      </div>
    </Wrapper>
  );
}

export default App;

