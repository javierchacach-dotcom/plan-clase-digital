
import { useState } from "react";

function ActividadItem({ actividad, descripcion }) {
  const [completada, setCompletada] = useState(false);

  function cambiarEstado() {
    setCompletada(!completada);
  }

  return (
    <article className={`actividad-item ${completada ? "completada" : "pendiente"}`}>
      <div>
        <h3>{actividad}</h3>
        <p>{descripcion}</p>

        <span className="estado-actividad">
          Estado: {completada ? "Completada" : "Pendiente"}
        </span>
      </div>

      <button onClick={cambiarEstado}>
        {completada ? "Marcar como pendiente" : "Completar actividad"}
      </button>
    </article>
  );
}

export default ActividadItem;
