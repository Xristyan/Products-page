import { useSelector } from "react-redux";
import CartIcon from "../icons/cartIcon";
import classes from "./cartButton.module.css";
import { useState, useEffect } from "react";
const CartButton = (props) => {
  const [btnBump, setBtnBump] = useState(false);
  const productsCount = useSelector((state) => state.cart.productsCount);
  useEffect(() => {
    setBtnBump(true);

    setTimeout(() => {
      setBtnBump(false);
    }, 300);
  }, [productsCount]);
  return (
    <button className={`${classes.button} ${btnBump && classes.bump}`}>
      <span className={classes.amount}>
        <span className={classes.badge}>{productsCount}</span>
        <CartIcon />
      </span>
    </button>
  );
};
export default CartButton;
