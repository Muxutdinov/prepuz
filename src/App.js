import { Router } from "react-router-dom";
import "./App.css";
import Routers from "./routers/Routers";
import { createBrowserHistory } from "history";

const App = () => {
  const history = createBrowserHistory();
  return (
    <>
      <Router history={history}>
        <Routers />
      </Router>
    </>
  );
};

export default App;
