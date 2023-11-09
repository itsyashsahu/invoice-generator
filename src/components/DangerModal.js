// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ConfirmModal({ show, setShow, Heading, msg, handleSave, variant = "danger", btnText = "Submit" }) {
  // use states like this in the parent component 
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{Heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant={variant} onClick={() => { handleSave(); handleClose(); }}>
            {btnText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;