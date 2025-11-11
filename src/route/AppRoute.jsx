import Denuncias1 from "../components/Denuncias1.jsx";
import Asignadas from "../components/Asignadas.jsx";
import Detalles from "../components/Detalles.jsx";
import Resultados from "../components/Resultados.jsx";
import Observaciones from "../components/Observaciones.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/asignadas" element={<Asignadas />} />
        <Route path="/denuncias" element={<Denuncias1 />} />
        <Route path="/detalle" element={<Detalles />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/observaciones" element={<Observaciones />} />
      </Routes>
    </Router>
  );
}

export default App;
