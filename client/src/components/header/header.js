import { Link } from "react-router-dom";
import classes from "./header.module.css";
import ProfileIcon from "../icons/profileIcon";
import CartButton from "./cartButton";
import MenDropDown from "./dropDown/menDropDown";
import WomenDropDown from "./dropDown/womenDropDown";
const Header = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navigationContainer}>
        <Link to="">
          <img className={classes.image} src="/logo.png" />
        </Link>
        <ul className={classes.list}>
          <li>
            <MenDropDown />
          </li>
          <li>
            <WomenDropDown />
          </li>
        </ul>
        <div className={classes.buttonContainer}>
          <ProfileIcon />
          <CartButton />
        </div>
      </nav>
    </header>
  );
};
export default Header;
