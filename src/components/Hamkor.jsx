import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      .then((res) => setSecond(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <div className="BigContainer">
      <Top>
        <Title>Asosiy sahifa</Title>
        <img src={icon} />
        <Text>Hamkorlarimiz</Text>
      </Top>
      <div className="Container">
        {/* <CardWrapper> */}
        {second.map((value, index) => {
          return (
            <Link to="/partners/item">
              <div key={index} className="Card">
                <Img src={value.logo} />
              </div>
            </Link>
          );
        })}
        {/* </CardWrapper> */}
      </div>
    </div>
  );
};


export default Hamkor;
