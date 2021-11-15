import React, { useState, useEffect } from "react";
import "./PartnersItem.css";
import axios from "axios";
import icon from "../assets/icons/sahifa.svg";

const PartnersItem = () => {
  const [third, setThird] = useState([]);
  const [thirds, setThirds] = useState([]);
  useEffect(() => {
    getThird();
    getThirds();
  }, []);

  const getThird = () => {
    axios
      .get(
        "https://api.akpharm.uz/api/v1/manufacturer-list/hebu_medical/?lan=uz"
      )
      .then((res) => setThird(res.data))
      .catch((err) => console.log(err));
  };
  const getThirds = () => {
    axios
      .get(
        "https://api.akpharm.uz/api/v1/drug-list/?page=1&manufacturer=hebu_medical&lan=uz"
      )
      .then((res) => setThirds(res.data.results))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="Container">
        <div className="Wrapper">
          <div className="Top">
            <div className="item1">Asosiy sahifa</div>
            <img src={icon} />
            <div className="item2">Hamkorlarimiz</div>
            <img src={icon} />
            <div className="item3">HEBU MEDICAL</div>
          </div>
          <div className="Body">
            <div className="left">
              <div className="Cards">
                <img src={third.logo} alt="Rasm" className="CardImg" />
              </div>
            </div>
            <div className="right">
              <div className="Title">{third.name}</div>
              {/* <div className="Text">{value}</div> */}
            </div>
          </div>
          <div className="BtnTitle">Kompaniya mahsulotlari</div>
          <div className="ButtonWrapper">
            {thirds.map((value, index) => {
              return (
                <>
                  <div className="BtnCardWrapper">
                    <div className="BtnCard">
                      <div className="ImgWrapper">
                        <img src={value.image} className="CardImgs" />
                      </div>
                      <div className="BtnTextCard">{value.slug}</div>
                      <div className="BtnTitleCard">{value.name}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersItem;
