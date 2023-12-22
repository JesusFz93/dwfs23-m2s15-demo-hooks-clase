import { useEffect, useState } from "react";

const EfectosPage = () => {
  const [contador, setContador] = useState(0);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  useEffect(() => {
    console.log("Componente creado");
    return () => {
      console.log("Componente destruido");
    };
  }, []);

  useEffect(() => {
    console.log("Cambio de valor a " + contador);
  }, [contador]);

  useEffect(() => {
    console.log("Se detecto un cambio");
  });

  return (
    <>
      <header className="row col">
        <h1>Pagina de efectos</h1>
      </header>
      <main className="row">
        <article className="col">
          <button
            type="button"
            className="btn btn-success"
            onClick={aumentarContador}
          >
            Incrementar valor
          </button>
          <h2>{contador}</h2>
        </article>
      </main>
    </>
  );
};

export default EfectosPage;
