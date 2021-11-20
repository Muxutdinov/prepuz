import React, { useState, useEffect } from "react";
// import "./PartnersItem.css";
import axios from "axios";
import icon from "../assets/icons/sahifa.svg";
import {
  Card,
  Container,
  Item1,
  Item2,
  Item3,
  Right,
  Title,
  Top,
  Wrapper,
  Body,
  Left,
  Text,
  CardImgs,
  BtnTitle,
  ButtonWrapper,
  BtnCardWrapper,
  BtnCard,
  ImgWrapper,
  BtnTextCard,
  BtnTitleCard,
  BtnCardAllWrap,
} from "./PartnersItemStyle";

const PartnersItem = () => {
  const [third, setThird] = useState([]);
  const [thirds, setThirds] = useState([]);
  const [loading_pro, setLoading_pro] = useState(false);
  const [loading_pros, setLoading_pros] = useState(false);
  useEffect(() => {
    getThird();
    getThirds();
  }, []);

  const getThird = () => {
    setLoading_pro(true);
    axios
      .get(
        "https://api.akpharm.uz/api/v1/manufacturer-list/hebu_medical/?lan=uz"
      )
      .then((res) => {
        setThird(res.data);
        setLoading_pro(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading_pro(false);
      });
  };

  const getThirds = () => {
    setLoading_pros(true);
    axios
      .get(
        "https://api.akpharm.uz/api/v1/drug-list/?page=1&manufacturer=hebu_medical&lan=uz"
      )
      .then((res) => {
        setThirds(res.data.results);
        setLoading_pros(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading_pros(false);
      });
  };
  return (
    <>
      <Container>
        <Wrapper>
          <Top>
            <Item1>Asosiy sahifa</Item1>
            <img src={icon} />
            <Item2>Hamkorlarimiz</Item2>
            <img src={icon} />
            <Item3>HEBU MEDICAL</Item3>
          </Top>
          {loading_pro ? (
            <>Loading...</>
          ) : (
            <>
              <Body>
                <Left>
                  <Card>
                    <img
                      src={third.logo}
                      alt="Rasm"
                      width="60%"
                      className="CardImg"
                    />
                  </Card>
                </Left>
                <Right>
                  <Title>
                    {third.name}
                    {/* {third.name ? third.name : <h1>Loading...</h1>} */}
                    <Text>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: third.description,
                        }}
                      />
                    </Text>
                  </Title>
                </Right>
              </Body>
            </>
          )}
          {setLoading_pros ? <BtnTitle>Kompaniya mahsulotlari</BtnTitle> : ""}
          <ButtonWrapper>
            {loading_pros ? (
              <>Loading...</>
            ) : (
              <>
                <BtnCardAllWrap>
                  {thirds.map((value, index) => {
                    return (
                      <>
                        <BtnCardWrapper>
                          <BtnCard>
                            <ImgWrapper>
                              <CardImgs src={value.image} />
                            </ImgWrapper>
                            <BtnTextCard>{value.slug}</BtnTextCard>
                            <BtnTitleCard>{value.name}</BtnTitleCard>
                          </BtnCard>
                        </BtnCardWrapper>
                      </>
                    );
                  })}
                </BtnCardAllWrap>
              </>
            )}
          </ButtonWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default PartnersItem;
