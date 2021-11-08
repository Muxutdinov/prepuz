import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./sections/Navication";

const Home = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [yechims, setYechims] = useState(0);

  const Fancfirst = (e) => {
    setFirst(e.target.value);
  };
  const FancSecond = (e) => {
    setSecond(e.target.value);
  };
  const FancThird = (e) => {
    setThird(e.target.value);
  };
  const yechim = () => {
    let Data = +parseInt(first) + parseInt(second) + parseInt(third);
  };
  return (
    <>
      {/* <div> */}
        <Navigation />
        {/* <input type="number" value={first} onChange={Fancfirst} />
        <input type="number" value={second} onChange={FancSecond} />
        <input type="number" value={third} onChange={FancThird} />
        <button onClick={yechim}>Yechimni korish</button>
        <h1>{yechims}</h1>
      </div> */}
    </>
  );
};
export default Home;
