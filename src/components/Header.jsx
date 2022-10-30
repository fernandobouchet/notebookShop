import { Button } from 'react-bootstrap';

const Header = ({ carrito, modificarMostrarCarrito }) => {
  return (
    <>
      <h1>Notebooks Store Arg</h1>
      <Button onClick={() => modificarMostrarCarrito(true)}></Button>
      <h2>{carrito.length}</h2>
    </>
  );
};

export default Header;
