import './modal.css';
import {AiFillCloseCircle} from 'react-icons/ai';

const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalDataClick = (event) => event.stopPropagation();

    return (

        <div className={`modal-container ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-data bg-blue-50 rounded" onClick={handleModalDataClick}>
                <button className="modal-close" onClick={closeModal}><AiFillCloseCircle/></button>
                {children}
            </div>
        </div>
    )
}

export default Modal;