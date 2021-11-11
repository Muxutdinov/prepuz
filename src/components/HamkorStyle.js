import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Top = styled.div`
  margin-right: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Title = styled.div`
  height: 18px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #1f2022;
  flex: none;
  margin: 0px 8px;
`;
export const Text = styled.div`
  width: 138px;
  height: 18px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 100%;
  color: #70798b;
  flex: none;
  order: 4;
  margin: 0px 8px;
`;
export const CardWrapper = styled.div`
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 100%;
  background: transparent;
`;

export const Card = styled.div`
  margin-top: 20px;
  height: 120px;
  width: 200px;
  /* background: #ffffff; */
  background-color: gray;
  border-radius: 27.4451px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CardText = styled.div`
  font-size: 15px;
  height: 20px;
`;
export const Img = styled.img`
  height: 20%;
  width: 20%;
`;
