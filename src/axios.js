import React, { useState } from "react";
import axios from "axios";

const Axios = () => {
  const [state, setState] = useState("");
  const FancAxios = () => {
    axios
      .get(axios.get(`https://jsonplaceholder.typicode.com/users`))
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {/* <div></div> */}
      <button onClick={FancAxios}>axios</button>
    </>
  );
};

export default Axios;
