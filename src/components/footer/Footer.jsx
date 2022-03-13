import { useNavigate } from "react-router-dom";
import Modal from '../modal/modal.jsx';
import { useModal } from "../modal/useModal.jsx";
import TermsAndConditions from '../termsAndConditions/TermsAndConditions'

export default () => {
  const navigate = useNavigate();
  const [isOpenDetail, openDetail, isCloseDetails] = useModal(false);
  return (
    <footer className='footer'>
      <button className="boton_footer" onClick={() => navigate('/')}>Home</button>
      <button className="boton_footer" onClick={openDetail}>Terms & Conditions</button>
      <Modal isOpen={isOpenDetail} closeModal={isCloseDetails}>
        <TermsAndConditions/>
      </Modal>
    </footer>
  );
}