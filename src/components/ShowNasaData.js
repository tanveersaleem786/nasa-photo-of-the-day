import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardImg } from "reactstrap";

const ShowNasaData = props => {
  return (
    <Card>
      <CardBody className="film-list">
        <CardTitle>{props.title}</CardTitle>
        <CardSubtitle>{props.date}</CardSubtitle>
        <CardImg src={props.imgUrl} height="500" width="1200"></CardImg>
        <CardText>{props.description}</CardText>
      </CardBody>
    </Card>
  );
};
export default ShowNasaData;


      
