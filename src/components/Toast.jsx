import { Toast } from 'react-bootstrap';

const ToastCompra = ({ show, setShow }) => {
  return (
    <>
      <Toast
        onClose={() => setShow(false)}
        show={show}
        delay={3000}
        autohide
        style={{ position: 'absolute', top: '80%', left: '35%', zIndex: '1' }}
      >
        <Toast.Body>Producto agregado al carrito!</Toast.Body>
      </Toast>
    </>
  );
};

export default ToastCompra;
