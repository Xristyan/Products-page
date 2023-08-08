import { useDispatch } from "react-redux";
import CartIcon from "../../icons/cartIcon";
import classes from "./productCard.module.css";
import { cartActions } from "../../store/cartSlice";
import { useModal } from "../../../hooks/useModal";
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { toggleAlertModal } = useModal();
  const addItem = () => {
    dispatch(
      cartActions.addProduct({ image: props.image, title: props.title })
    );
    toggleAlertModal();
  };

  return (
    <div className={`${classes.card} ${classes.stacked}`}>
      <img className={classes.image} src={`/images/${props.image}`} />

      <div className={classes.content}>
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.priceContent}>
          <p
            className={`${classes.price} ${
              props.discount > 0 && classes.discounted
            }`}
          >
            {props.price}$
          </p>{" "}
          {props.discount > 0 && (
            <span>
              {(props.price - props.price * (props.discount / 100)).toFixed(2)}$
            </span>
          )}
        </div>
        <div className={classes.starsContainer}>
          {[...Array(5)].map((star, i) => {
            let width;
            if (props.rating - (i + 1) >= 0) {
              width = { width: "100%" };
            } else {
              const percentage =
                (props.rating - Math.floor(props.rating)) * 100;
              width =
                i + 1 - props.rating >= 1
                  ? { width: `0%` }
                  : { width: `${percentage}%` };
            }

            return (
              <div key={i + 1} className={classes.star}>
                <div style={width} className={classes.starContent}></div>
              </div>
            );
          })}
        </div>
        <button onClick={addItem}>
          <CartIcon />
          <span className={classes.plus}>+</span>
        </button>
      </div>
    </div>
  );
};
export default ProductCard;
