import { useSelector } from "react-redux";
import Modal from "../UI/modal";
import classes from "./cartAlert.module.css";
import { useModal } from "../../hooks/useModal";
const CartAlert = (props) => {
  const addedItem = useSelector((state) => state.cart.currentItem);
  const { toggleAlertModal } = useModal();
  return (
    <Modal onClose={props.onClose} className={"alertModal"}>
      <section className={classes.cartAlert}>
        <button onClick={toggleAlertModal}>X</button>
        <p>Item is successfully added</p>
        <div className={classes.itemContainer}>
          <img src={`/images/${addedItem.image}`} />
          <span>{addedItem.title}</span>
        </div>
      </section>
    </Modal>
  );
};
export default CartAlert;
