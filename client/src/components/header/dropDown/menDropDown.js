import { Link, NavLink } from "react-router-dom";
import classes from "./dropDown.module.css";
const MenDropDown = () => {
  return (
    <div className={classes.dropdown}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="Men"
        end
      >
        Men
      </NavLink>
      <div className={classes["dropdown-content"]}>
        <span>Cloathing</span>
        <Link to="Men">All Clothing</Link>
        <Link to="Men/T-shirts">T-shirts</Link>
        <Link to="Men/Shoes">Shoes</Link>
        <Link to="Men/Track-suits">Track suits</Link>
      </div>
    </div>
  );
};
export default MenDropDown;
