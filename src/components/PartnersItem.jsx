import React, { useState, useEffect } from "react";
import "./PartnersItem.css";
import axios from "axios";
import icon from "../assets/icons/sahifa.svg";

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
      <div className="Container">
        <div className="Wrapper">
          <div className="Top">
            <div className="item1">Asosiy sahifa</div>
            <img src={icon} />
            <div className="item2">Hamkorlarimiz</div>
            <img src={icon} />
            <div className="item3">HEBU MEDICAL</div>
          </div>
          {loading_pro ? (
            <>Loading...</>
          ) : (
            <>
              <div className="Body">
                <div className="left">
                  <div className="Cards">
                    <img
                      src={third.logo}
                      alt="Rasm"
                      width="60%"
                      className="CardImg"
                    />
                  </div>
                </div>
                <div className="right">
                  <div className="Title">
                    {third.name}
                    {/* {third.name ? third.name : <h1>Loading...</h1>} */}
                    <div className="Text">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: third.description,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {setLoading_pros ? (
            <div className="BtnTitle">Kompaniya mahsulotlari</div>
          ) : (
            ""
          )}
          <div className="ButtonWrapper">
            {loading_pros ? (
              <>Loading...</>
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnersItem;