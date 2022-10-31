import { articulos } from '../utils/articulos';
import Producto from './Producto';
import { Container, Row } from 'react-bootstrap';

const Main = ({ carrito, modificarCarrito }) => {
  return (
    <Container>
      <Row xs={2} md={3} xl={4} className="g-4">
        {articulos.map((articulo) => (
          <Producto
            key={articulo.id}
            producto={articulo}
            carrito={carrito}
            modificarCarrito={modificarCarrito}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Main;
