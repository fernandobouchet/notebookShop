import { Container } from 'react-bootstrap';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import Carrito from '../components/Carrito';

const Home = ({
  carrito,
  modificarCarrito,
  mostrarCarrito,
  modificarMostrarCarrito,
}) => {
  return (
    <Container>
      <Header
        carrito={carrito}
        modificarCarrito={modificarCarrito}
        modificarMostrarCarrito={modificarMostrarCarrito}
      />
      <Main carrito={carrito} modificarCarrito={modificarCarrito} />
      <Carrito
        carrito={carrito}
        show={mostrarCarrito}
        onHide={() => modificarMostrarCarrito(false)}
      />
      <Footer />
    </Container>
  );
};

export default Home;
