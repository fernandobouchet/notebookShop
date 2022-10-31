import { Toast } from 'react-bootstrap';

const ToastCompra = ({ show, setShow }) => {
  return (
    <>
      <Toast
        id="toast"
        onClose={() => setShow(false)}
        show={show}
        delay={2000}
        autohide
      >
        <Toast.Body>Producto agregado al carrito!</Toast.Body>
      </Toast>
    </>
  );
};

export default ToastCompra;
