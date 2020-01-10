import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
//import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

const DivMain = styled.div`  
  border: solid 1px black;
  align: center;
`;

const Title = styled.h1`
    color: #7c795d; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 4rem; 
    font-weight: 700; 
    line-height: 64px; 
    margin: 0 0 0;
    padding: 20px 30px; 
    text-align: center; 
    text-transform: uppercase;
    border: 2px solid palegoldenrod;

    &:hover {
        background-color: green;
      }
`;


const Date = styled.h2`
    color: #7c795d; 
    font-family: 'Open Sans Condensed', sans-serif; 
    font-size: 3rem; 
    font-weight: 300; 
    line-height: 64px; 
    margin: 0 0 0;
    padding: 20px 30px; 
    text-align: center;    
`;


const IMG = styled.img`  
  border-radius: 8px;
  width: 50%;
  height: 50vh;
  margin: 10px 0;
`;

const DateSelect = styled.div`  
font-size: 2.2rem;
font-family: Montserrat;
color: #7c795d;
align: center;
`;

const Input = styled.input`
    color: palevioletred;
    font-size: 1em;
    border: 2px solid #7c795d;
    border-radius: 3px;
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;

const Description = styled.p`  
font-size: 1.5rem;
font-family: Montserrat;
color: #4464ad;
border: 1px solid red;
width: 50%;
margin-left: 350px;
text-align: justify;
line-height: 45px; 
border: 0px solid palegoldenrod;
`;


const ShowNasaData = props => {
  return (
    <DivMain>      
        <Title>{props.title}</Title>
        <Date><Moment format="MM-DD-YYYY">{props.date}</Moment></Date>
        <DateSelect>Select Date:<Input type="date" onChange={props.onChange} min="2018-01-01" max="2020-01-09" size=".5em" /></DateSelect> 
                  
        <IMG src={props.imgUrl}></IMG>
        <Description align="center"> {props.description}</Description>    
    </DivMain>
  );
};
export default ShowNasaData;


      
