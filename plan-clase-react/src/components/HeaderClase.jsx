
function HeaderClase({ tituloTema, nombreDocente, horario }) {
  return (
    <header className="encabezado-clase">
      <p className="etiqueta">CLASE DE COMPUTACIÓN</p>

      <h1>{tituloTema}</h1>

      <p>
        <strong>Docente:</strong> {nombreDocente}
      </p>

      <p>
        <strong>Horario:</strong> {horario}
      </p>

      <span className="icono-excel"> Aprendamos con Excel</span>
    </header>
  );
}

export default HeaderClase;
