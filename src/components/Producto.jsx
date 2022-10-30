import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import ToastCompra from './Toast';

const Producto = ({ producto, carrito, modificarCarrito }) => {
  const { titulo, precio, imagen } = producto;

  const [show, setShow] = useState(false);

  const agregarProducto = (producto) => {
    if (carrito.some((item) => item.id === producto.id))
      modificarCarrito(
        carrito.map((articulo) => {
          if (articulo.id === producto.id)
            return {
              ...articulo,
              cantidad: articulo.cantidad + 1,
            };
          return articulo;
        })
      );
    else {
      producto.cantidad = 1;
      modificarCarrito((prevState) => [...prevState, producto]);
    }
    setShow(true);
  };

  return (
    <>
      <Col>
        <Card>
          <Card.Img variant="top" src={imagen} alt={titulo} />
          <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <h6>${precio}</h6>
            <Button onClick={() => agregarProducto(producto)}>
              Agregar Al Carrito
            </Button>
          </Card.Body>
        </Card>
      </Col>
      <ToastCompra show={show} setShow={setShow} />
    </>
  );
};

export default Producto;
