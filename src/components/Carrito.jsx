import { Fragment } from 'react';
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
          <Row>
            <Col xs={1}>Cant.</Col>
            <Col xs={11}>Producto</Col>
          </Row>
          {carrito.map((producto) => (
            <Row key={producto.id}>
              <Col xs={1}>
                <h6>{producto.cantidad}</h6>
              </Col>
              <Col xs={2}>
                <img
                  width="50px"
                  src={producto.imagen}
                  alt={producto.titulo}
                ></img>
              </Col>
              <Col xs={7}>
                <h6>{producto.titulo}</h6>
              </Col>
              <Col xs={2}>
                <h6>{producto.precio}</h6>
              </Col>
            </Row>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Carrito;
