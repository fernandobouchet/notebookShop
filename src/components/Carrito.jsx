import { Modal, Button, Row, Col } from 'react-bootstrap';

const Carrito = (props) => {
  const { carrito } = props;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Productos</h4>
          <Row xs={1} className="g-4">
            {carrito.map((producto) => (
              <Col key={producto.id}>
                <h6>{producto.cantidad}</h6>
                <img src={producto.imagen} alt={producto.titulo}></img>
                <h6>{producto.titulo}</h6>
                <h6>{producto.precio}</h6>
              </Col>
            ))}
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Carrito;
