import { Link, NavLink } from "react-router-dom";
import classes from "./dropDown.module.css";
const WomenDropDown = () => {
  return (
    <div className={classes.dropdown}>
      <NavLink
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        to="Women"
        end
      >
        Women
      </NavLink>
      <div className={classes["dropdown-content"]}>
        <span>Cloathing</span>
        <Link to="Women">All Clothing</Link>
        <Link to="Women/T-shirts">T-shirts</Link>
        <Link to="Women/Shoes">Shoes</Link>
        <Link to="Women/Track-suits">Track suits</Link>
      </div>
    </div>
  );
};
export default WomenDropDown;
