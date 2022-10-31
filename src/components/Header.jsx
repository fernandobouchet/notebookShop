import { Button, Badge } from 'react-bootstrap';

const Header = ({ carrito, modificarMostrarCarrito }) => {
  const cantidadDeItems = (carrito) => {
    return carrito.reduce((a, b) => a + b.cantidad, 0);
  };

  return (
    <header>
      <h1>Notebooks Store Arg</h1>
      <Button variant="dark" onClick={() => modificarMostrarCarrito(true)}>
        <img src="../assets/icons/shopping-cart.svg" alt="icono carrito" />
        <Badge bg="secondary">{cantidadDeItems(carrito)}</Badge>
      </Button>
    </header>
  );
};

export default Header;
