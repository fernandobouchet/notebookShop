import { Button, Badge } from 'react-bootstrap';

const Header = ({ carrito, modificarMostrarCarrito }) => {
  const cantidadDeItems = (carrito) => {
    return carrito.reduce((a, b) => a + b.cantidad, 0);
  };

  return (
    <>
      <h1>Notebooks Store Arg</h1>
      <Button onClick={() => modificarMostrarCarrito(true)}>
        <img src="../assets/icons/shopping-cart.svg" alt="" />
        <Badge bg="secondary">{cantidadDeItems(carrito)}</Badge>
      </Button>
    </>
  );
};

export default Header;
