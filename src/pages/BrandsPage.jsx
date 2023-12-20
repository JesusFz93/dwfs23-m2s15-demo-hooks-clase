import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import brandsJSON from "../data/brands.json";

// const marcas = [
//   {
//     id: "1",
//     name: "Mercedez",
//   },
//   {
//     id: "2",
//     name: "Toyota",
//   },
//   {
//     id: "3",
//     name: "Tesla",
//   },
// ];

const BrandsPage = () => {
  const [brands, setBrands] = useState([]);

  const obtenerMarcas = async () => {
    const resp = await axios.get("https://dwfs-api.onrender.com/api/v1/brands");
    console.log(resp.data.data);
    setBrands(resp.data.data);
    // setBrands(brandsJSON);

    // const resp = await fetch("https://dwfs-api.onrender.com/api/v1/brands");
    // const json = await resp.json();
    // console.log(json.data);
    // setBrands(json.data);
  };

  return (
    <>
      <header className="row col">
        <h1>Pagina de marcas</h1>
        <button className="btn btn-info" onClick={obtenerMarcas}>
          Obtener marcas
        </button>
      </header>
      <main className="row">
        <article className="col">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Desde</th>
                <th scope="col">Imagen</th>
                <th scope="col">Opciones</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((brand) => {
                return (
                  <tr key={brand.id}>
                    <th scope="row">{brand.id}</th>
                    <td>{brand.nombre}</td>
                    <td>{brand.desde}</td>
                    <td>
                      <img
                        className="img-fluid"
                        src={brand.imagen}
                        alt={brand.nombre}
                        width={120}
                      />
                    </td>
                    <td>
                      <NavLink
                        className="btn btn-secondary"
                        to={`/brands/${brand.id}`}
                      >
                        Ver mas...
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </article>
      </main>
    </>
  );
};

export default BrandsPage;
