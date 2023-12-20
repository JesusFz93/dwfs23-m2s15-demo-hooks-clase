import { useState } from "react";

const StatePage = () => {
  const [numero, setNumero] = useState(0);
  const [cargando, setCargando] = useState(false);

  // let numero = 0;

  const aumentarContador = () => {
    // console.log((numero = numero + 1));
    setNumero(numero + 1);
  };

  const cargandoDatos = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
    }, 2000);
  };

  return (
    <>
      <header className="row">
        <article className="col">
          <h1>Pagina de estados</h1>
        </article>
      </header>
      <main className="row">
        <article className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={aumentarContador}
          >
            Aumentar contador
          </button>
        </article>
        <article className="col">{numero}</article>
      </main>
      <section className="row">
        <article className="col">
          <button
            type="button"
            className="btn btn-primary"
            onClick={cargandoDatos}
          >
            {cargando ? "Cargando..." : "Cargar datos"}
          </button>
        </article>
      </section>
    </>
  );
};

export default StatePage;
