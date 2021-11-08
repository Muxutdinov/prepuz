import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div>
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/categories">
          Kategory
        </Link>
        <Link className="nav" to="/brands">
          brands
        </Link>
        <Link className="nav" to="/brand-view">
          view
        </Link>
      </div>
      <div>
        <NavLink exact className="nav" activeClassName="active-nav" to="/">
          Home
        </NavLink>
        <NavLink
          exact
          className="nav"
          activeClassName="active-nav"
          to="/categories"
        >
          Kategory
        </NavLink>
        <NavLink
          exact
          className="nav"
          activeClassName="active-nav"
          to="/brands"
        >
          brands
        </NavLink>
        <NavLink
          exact
          className="nav"
          activeClassName="active-nav"
          to="/brand-view"
        >
          view
        </NavLink>
      </div>
    </>
  );
};
export default Navigation;
