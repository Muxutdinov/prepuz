import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hamkor.css";
import icon from "../assets/icons/sahifa.svg";
import {
  Container,
  Title,
  Top,
  CardText,
  CardWrapper,
  Card,
  Text,
  Img,
} from "./HamkorStyle";

const Hamkor = () => {
  const [second, setSecond] = useState([]);
  useEffect(() => {
    getAxios();
  }, []);
  const getAxios = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/manufacturer-list/?page=1&lan=uz")
      .then((res) => console.log(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <Container>
      <Top>
        <Title>Asosiy sahifa</Title>
        <img src={icon} />
        <Text>Hamkorlarimiz</Text>
      </Top>
        <CardWrapper >
          <Card>
          </Card>
        </CardWrapper>
    </Container>
  );
};

export default Hamkor;
