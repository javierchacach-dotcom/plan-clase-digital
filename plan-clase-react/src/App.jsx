
import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="contenedor-clase">
      <HeaderClase
        tituloTema="Microsoft Excel: fórmulas y funciones básicas"
        nombreDocente="Javier Pedro Quill Chacach"
        horario="40 minutos"
      />

      <main>
        <ObjetivosCard
          competencia="Utiliza las herramientas de Microsoft Excel para organizar datos y realizar cálculos mediante fórmulas y funciones básicas."
          indicadorLogro="Aplica correctamente las funciones SUMA, PROMEDIO, MAX y MIN en ejercicios prácticos."
        />

        <section className="seccion-actividades">
          <h2>Actividades de aprendizaje</h2>

          <ActividadItem
            actividad="Actividad 1: Conocer las fórmulas"
            descripcion="Identificar cómo se realizan operaciones básicas en Excel."
          />

          <ActividadItem
            actividad="Actividad 2: Practicar funciones"
            descripcion="Resolver ejercicios utilizando SUMA y PROMEDIO."
          />

          <ActividadItem
            actividad="Actividad 3: Analizar resultados"
            descripcion="Utilizar MAX y MIN para identificar valores mayores y menores."
          />
        </section>
      </main>

      <footer className="pie-clase">
        <p>Plan de Clase Digital Interactivo | Área de Computación</p>
      </footer>
    </div>
  );
}

export default App;
