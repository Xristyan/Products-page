import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../components/store/modalSlice";

export function useModal() {
  const show = useSelector((state) => state.modal.show);
  const showAlert = useSelector((state) => state.modal.showAlert);
  const dispatch = useDispatch();

  function toggleModal(bool) {
    dispatch(modalActions.toggleModal(bool));
  }
  function toggleAlertModal() {
    dispatch(modalActions.toggleCartAlert());
  }

  return { show, showAlert, toggleAlertModal, toggleModal };
}
