// import Navigation from "./sections/Navication";

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Categorys.css";
import rasm1 from "../assets/imgs/rasm1.png";
import rasm2 from "../assets/imgs/rasm2.png";
import rasm3 from "../assets/imgs/rasm3.png";
import rasm4 from "../assets/imgs/rasm4.png";
import axios from "axios";

import {
  BodyCard,
  BodyWrapper,
  Container,
  Sahifa,
  SidebarWrapper,
  Top,
  TopWrapperone,
  TopWrappertwo,
  Wrapper,
  Card,
  SidebarItem,
  Img1,
  MiniText,
  Title,
  ImgWrapper,
  TitleWrapper,
} from "./CategorysStyle";

const Categories = () => {
  const [first, setFirst] = useState([]);
  useEffect(() => {
    getDrags();
  }, []);
  const getDrags = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/drug-list/?page=1&lan=uz")
      .then((res) => {
        setFirst(res.data.results);
      })
      .catch((errors) => {
        console.log("test error", errors);
      });
  };
  return (
    <>
      <Container>
        <Top>
          <TopWrapperone>Asosiy sahifa</TopWrapperone>
          <Sahifa />
          <TopWrappertwo>Akpharmdagi maxsulotlar katalogi</TopWrappertwo>
        </Top>
        <Wrapper>
          <SidebarWrapper>
            <NavLink
              exact
              className="nav"
              activeClassName="active"
              to="/category/type"
            >
              <SidebarItem>Barchasi</SidebarItem>
            </NavLink>
            <NavLink
              exact
              className="nav"
              activeClassName="active"
              to="/category/tibbiy"
            >
              <SidebarItem>Tibbiy asbob-uskunalar</SidebarItem>
            </NavLink>
            <NavLink
              exact
              className="nav"
              activeClassName="active"
              to="/category/gome"
            >
              <SidebarItem>Gomeopatik vositalar</SidebarItem>
            </NavLink>
            <NavLink
              exact
              className="nav"
              activeClassName="active"
              to="/category/otapedik"
            >
              <SidebarItem>Otapedik vositalar</SidebarItem>
            </NavLink>
            <NavLink
              exact
              className="nav"
              activeClassName="active"
              to="/category/:yopishqoq"
            >
              <SidebarItem>Yopishqoq vositalar va bintlar</SidebarItem>
            </NavLink>
          </SidebarWrapper>
          <BodyWrapper>
            <BodyCard>
              {first.map((value, index) => (
                <Card key={index}>
                  <ImgWrapper>
                    <Img1 src={value.image} alt="rasm"></Img1>
                  </ImgWrapper>
                  <TitleWrapper>
                    <MiniText>{value.name}</MiniText>
                    <Title>{value.category.name}</Title>
                  </TitleWrapper>
                </Card>
              ))}
            </BodyCard>
            <BodyCard>
              {first.map((value, index) => (
                <Card key={index}>
                  <ImgWrapper>
                    <Img1 src={value.image} alt="rasm"></Img1>
                  </ImgWrapper>
                  <TitleWrapper>
                    <MiniText>{value.name}</MiniText>
                    <Title>{value.category.name}</Title>
                  </TitleWrapper>
                </Card>
              ))}
            </BodyCard>
            <BodyCard>
              {first.map((value, index) => (
                <Card key={index}>
                  <ImgWrapper>
                    <Img1 src={value.image} alt="rasm"></Img1>
                  </ImgWrapper>
                  <TitleWrapper>
                    <MiniText>{value.name}</MiniText>
                    <Title>{value.category.name}</Title>
                  </TitleWrapper>
                </Card>
              ))}
            </BodyCard>
          </BodyWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
export default Categories;
