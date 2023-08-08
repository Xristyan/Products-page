import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Modal from "../UI/modal";
import { useModal } from "../../hooks/useModal";
import Filter from "./shopPage/filter";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import CartAlert from "../cartAlert/cartAlert";
import { useEffect } from "react";

const Root = () => {
  const { show, showAlert, toggleAlertModal, toggleModal } = useModal();
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showAlert) {
        toggleAlertModal();
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [showAlert, toggleAlertModal]);
  return (
    <>
      {showAlert && <CartAlert onClose={toggleAlertModal} />}
      {show && screenWidth <= 1000 && (
        <Modal
          onClose={() => {
            toggleModal(false);
          }}
        >
          <Filter />
        </Modal>
      )}

      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default Root;
