import { useEffect, useState } from "react";
import { obtenerProductosApi } from "../apis/productsApi";

const ProductsPage = () => {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    const products = await obtenerProductosApi();
    setProductos(products);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <>
      <header className="row col">
        <h1>Lista de productos</h1>
      </header>
      <main className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">UPC</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto) => {
                return (
                  <tr key={producto.id}>
                    <th scope="row">{producto.id}</th>
                    <td>{producto.name}</td>
                    <td>{producto.upc}</td>
                    <td>{producto.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </main>
      <section className="row">
        <article className="col">
          <ul className="list-group">
            {productos.map((producto) => {
              return (
                <li key={producto.id} className="list-group-item">
                  {producto.id} - {producto.name}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </>
  );
};

export default ProductsPage;
