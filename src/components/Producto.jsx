import { Col, Card, Button } from 'react-bootstrap';

const Producto = ({ producto, carrito, modificarCarrito }) => {
  const { titulo, precio, imagen } = producto;

  const agregarProducto = (producto) => {
    modificarCarrito((prevState) => [...prevState, producto]);
  };

  return (
    <Col className="mw-10">
      <Card>
        <Card.Img variant="top" src={imagen} alt={titulo} />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <h6>${precio}</h6>
          <Button onClick={() => agregarProducto(producto)}>Comprar</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Producto;
