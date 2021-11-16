import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home";
import Categorys from "../components/Categorys";
import Brands from "../components/Brands";
import BrandView from "../components/BrandView";
import Barchasi from "../components/CatigorysItems/Barchasi";
// import Gome from "../components/CatigorysItems/Gome";
// import Ortopedik from "../components/CatigorysItems/Ortopedik";
// import Tibbiy from "../components/CatigorysItems/Tibbiy";
// import Yopishqoq from "../components/CatigorysItems/Yopishqoq";
import Drugs from "../components/Drugs";
import Hamkor from "../components/Hamkor";
import PartnersItem from "../components/PartnersItem";

const Routers = () => {
  return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect
          from="/category"
          to="/categories"
          exact
          component={Categorys}
        />
        <Route path="/categories" exact component={Categorys} />
        <Route path="/brands" exact component={Hamkor} />
        <Route path="/brand-view/:slug/price/:id" exact component={BrandView} />
        <Route path="/category/:type" exact component={Barchasi} />
        <Route path="/drugs" exact component={Drugs} />
        <Route path="/partners" exact component={Hamkor} />
        {/* <Route path="/partners/:item" exact component={PartnersItem} /> */}
        {/* <Route path="/item" exact component={PartnersItem} /> */}
        {/* <Redirect
        from="/categories/tibiy"
        to="/categories/tibbiy"
        exact
        component={Tibbiy}
      /> */}
        <Route path="/partners/:item" exact component={PartnersItem} />
      </Switch>
  );
};
export default Routers;
