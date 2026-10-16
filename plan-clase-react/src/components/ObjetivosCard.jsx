
function ObjetivosCard({ competencia, indicadorLogro }) {
  return (
    <section className="tarjeta-objetivo">
      <h2>Objetivos de aprendizaje</h2>

      <div className="objetivo">
        <h3>Competencia</h3>
        <p>{competencia}</p>
      </div>

      <div className="objetivo">
        <h3>Indicador de logro</h3>
        <p>{indicadorLogro}</p>
      </div>
    </section>
  );
}

export default ObjetivosCard;
