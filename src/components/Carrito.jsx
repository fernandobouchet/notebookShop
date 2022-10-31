import { Modal, Button, Row, Col } from 'react-bootstrap';

const Carrito = (props) => {
  const { carrito, modificarCarrito, ...others } = props;

  const eliminarProducto = (producto) => {
    modificarCarrito(carrito.filter((item) => item.id !== producto.id));
  };

  const totalPreciosCarrito = () => {
    return carrito
      .reduce((a, b) => a + parseFloat(b.precio) * parseFloat(b.cantidad), 0)
      .toFixed(3);
  };

  const eliminarTodosLosProductos = () => {
    modificarCarrito([]);
  };

  return (
    <>
      <Modal
        id="modal"
        {...others}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {carrito.length === 0 ? (
            <>
              <p className="text-center">
                Aún no agregaste producto al carrito!
              </p>
            </>
          ) : (
            <>
              <Row className="text-center">
                <Col xs={1}>Cant.</Col>
                <Col xs={11}>Producto</Col>
              </Row>
              {carrito.map((producto) => (
                <Row className="text-center" key={producto.id}>
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
                  <Col xs={5}>
                    <h6>{producto.titulo}</h6>
                  </Col>
                  <Col xs={2}>
                    <h6>${producto.precio}</h6>
                  </Col>
                  <Col xs={2}>
                    <button
                      id="delete-button"
                      onClick={() => eliminarProducto(producto)}
                    >
                      <img src="../assets/icons/trash.svg" alt="" />
                    </button>
                  </Col>
                </Row>
              ))}
              <Row id="total" className="text-center">
                <Col xs={6}>Total</Col>
                <Col xs={6}>${totalPreciosCarrito()}</Col>
              </Row>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Salir</Button>
          {carrito.length > 0 && (
            <Button
              variant="success"
              onClick={() => {
                eliminarTodosLosProductos();
                props.onHide();
              }}
            >
              Comprar
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Carrito;
