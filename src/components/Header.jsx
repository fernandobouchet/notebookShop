import { Button } from 'react-bootstrap';

const Header = ({ carrito, modificarMostrarCarrito }) => {
  const cantidadDeItems = (carrito) => {
    return carrito.reduce((a, b) => a + b.cantidad, 0);
  };
  return (
    <>
      <h1>Notebooks Store Arg</h1>
      <Button onClick={() => modificarMostrarCarrito(true)}></Button>
      <h2>{cantidadDeItems(carrito)}</h2>
    </>
  );
};

export default Header;
