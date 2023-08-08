import { NavLink } from "react-router-dom";
import classes from "./footer.module.css";
import FaceBookIcon from "../icons/socialIcons/facebookIcon";
import InstagramIcon from "../icons/socialIcons/InstagramIcon";
import YoutubeIcon from "../icons/socialIcons/youtubeIcon";
const Footer = () => {
  return (
    <>
      <footer className={classes.footerConatiner}>
        <nav className={classes.socialIcons}>
          <NavLink>
            <FaceBookIcon />
          </NavLink>
          <NavLink>
            <InstagramIcon />
          </NavLink>

          <NavLink>
            <YoutubeIcon />
          </NavLink>
        </nav>
        <nav className={classes.footerNav}>
          <ul>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>New</NavLink>
            </li>
            <li>
              <NavLink>About</NavLink>
            </li>
            <li>
              <NavLink>Contact us</NavLink>
            </li>
            <li>
              <NavLink>Our Team</NavLink>
            </li>
          </ul>
        </nav>
      </footer>
      <div className={classes.footerBottom}>
        <p>
          Copyright &copy;{new Date().getFullYear()}; Designed by{" "}
          <span className={classes.designer}>Hristian</span>
        </p>
      </div>
    </>
  );
};
export default Footer;
