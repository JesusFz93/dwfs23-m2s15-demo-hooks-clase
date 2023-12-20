import axios from "axios";
import { useState } from "react";

const MedicinesPage = () => {
  const [medicines, setMedicines] = useState([]);

  const obtenerMedicamentos = async () => {
    const resp = await axios.get(
      "https://dwfs-api.onrender.com/api/v1/medicines"
    );
    console.log(resp.data.data);
    setMedicines(resp.data.data);
  };
  return (
    <>
      <header className="row">
        <article className="col">
          <h1>Lista de medicamentos</h1>
          <button
            type="button"
            className="btn btn-info"
            onClick={obtenerMedicamentos}
          >
            Obtener medicamentos
          </button>
        </article>
      </header>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="col">
            <div className="card h-100">
              <img
                src={medicine.image}
                className="card-img-top"
                alt={medicine.name}
              />
              <div className="card-body">
                <h5 className="card-title">{medicine.name}</h5>
                <p className="card-text">{medicine.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MedicinesPage;
