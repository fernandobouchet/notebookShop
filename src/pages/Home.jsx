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
    <>
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
    </>
  );
};

export default Home;
