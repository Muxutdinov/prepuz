import Navigation from "./sections/Navication";
import { NavLink } from "react-router-dom";
import "./Categorys.css";
import rasm1 from "../assets/imgs/rasm1.png";
import rasm2 from "../assets/imgs/rasm2.png";
import rasm3 from "../assets/imgs/rasm3.png";
import rasm4 from "../assets/imgs/rasm4.png";

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
  return (
    <Container>
      {/* <Navigation /> */}
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
            <Card>
              <ImgWrapper>
                <Img1 src={rasm1} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText>MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm2} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm3} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
          </BodyCard>
          <BodyCard>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm4} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm3} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm1} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
          </BodyCard>
          <BodyCard>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm3} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm1} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
            <Card>
              <ImgWrapper>
                <Img1 src={rasm2} alt="rasm"></Img1>
              </ImgWrapper>
              <TitleWrapper>
                <MiniText> MİXTA MEDİKAL</MiniText>
                <Title>Ultrasonik tozalovchi hisoblagich</Title>
              </TitleWrapper>
            </Card>
          </BodyCard>
        </BodyWrapper>
      </Wrapper>
    </Container>
  );
};
export default Categories;
