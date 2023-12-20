import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BrandPage = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState({});

  const obtenerMarca = async () => {
    const resp = await axios.get(
      `https://dwfs-api.onrender.com/api/v1/brands/${id}`
    );
    console.log(resp.data.data);
    setBrand(resp.data.data);
  };

  return (
    <>
      <header>
        <h1>Brand Page</h1>
        <button className="btn btn-info" onClick={obtenerMarca}>
          Obtener info
        </button>
      </header>
      <main className="row">
        <article className="col">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={brand.imagen}
                  className="img-fluid rounded-start"
                  alt={brand.nombre}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{brand.nombre}</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">{brand.desde}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BrandPage;
