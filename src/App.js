import Home from './pages/Home';
import { useEffect, useState } from 'react';

function App() {
  const [carrito, modificarCarrito] = useState([]);
  const [mostrarCarrito, modificarMostrarCarrito] = useState(false);

  useEffect(() => {
    const productos = JSON.parse(localStorage.getItem('carrito'));
    if (productos.length > 0) {
      modificarCarrito(productos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  return (
    <Home
      carrito={carrito}
      modificarCarrito={modificarCarrito}
      mostrarCarrito={mostrarCarrito}
      modificarMostrarCarrito={modificarMostrarCarrito}
    />
  );
}

export default App;
