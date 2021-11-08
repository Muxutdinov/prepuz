import axios from "axios";
import { useEffect, useState } from "react";




const Drugs = () => {
  const [drugs, setDrugs] = useState([]);
  useEffect(() => {
    getDrugs();
  }, []);
  const getDrugs = () => {
    axios
      .get("https://api.akpharm.uz/api/v1/drug-list/?page=1&lan=uz")
      .then((res) => {
        setDrugs(res.data.results);
      })
      .catch((e) => {
        console.log("err", e);
      });
  };
  return (
    <div>
      {drugs.map((item, index) => (
        <div key={index}>
          <img alt="" src={item.image} />
          <h2>{item.name}</h2>
          <p>{item.category.name}</p>
          <p>{item.manufacturer.name}</p>
        </div>
      ))}
    </div>
  );
};
export default Drugs;
