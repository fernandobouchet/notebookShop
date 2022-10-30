import { articulos } from '../utils/articulos';
import Producto from './Producto';
import { Row } from 'react-bootstrap';

const Main = ({ carrito, modificarCarrito }) => {
  return (
    <>
      <Row xs={1} md={2} className="g-4">
        {articulos.map((articulo) => (
          <Producto
            key={articulo.id}
            producto={articulo}
            carrito={carrito}
            modificarCarrito={modificarCarrito}
          />
        ))}
      </Row>
    </>
  );
};

export default Main;
