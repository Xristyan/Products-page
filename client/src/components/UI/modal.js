import classes from "./modal.module.css";
import React from "react";
import ReactDOM from "react-dom";
const BackDrop = (props) => {
  return <div onClick={props.onClose} className={classes.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={props.className ? classes[props.className] : classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElemetn = document.querySelector("#overlays");
const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        portalElemetn
      )}
      {ReactDOM.createPortal(
        <ModalOverlay className={props.className}>
          {props.children}
        </ModalOverlay>,
        portalElemetn
      )}
    </React.Fragment>
  );
};
export default Modal;
