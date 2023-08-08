import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Modal from "../UI/modal";
import { useModal } from "../../hooks/useModal";
import Filter from "./shopPage/filter";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import CartAlert from "../cartAlert/cartAlert";

const Root = () => {
  const { show, showAlert, toggleAlertModal, toggleModal } = useModal();
  const screenWidth = useSelector((state) => state.screenWidth.screenWidth);
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
