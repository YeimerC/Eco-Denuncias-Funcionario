import Denuncias1 from "../pages/Denuncias1.jsx";
import Asignadas from "../pages/Asignadas.jsx";
import Detalles from "../pages/Detalles.jsx";
import Resultados from "../pages/Resultados.jsx";
import Observaciones from "../pages/Observaciones.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SolicitudesAsignadas from "../pages/SolicitudesAsignadas.jsx";
import DetallesSolicitudes from "../pages/DetallesSolicitudes.jsx";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/denuncias" element={<Denuncias1 />} />
        <Route path="/asignadas" element={<Asignadas />} />
        <Route path="/SolicitudesAsignadas" element={<SolicitudesAsignadas />} />
        <Route path="/detalles" element={<Detalles />} />
        <Route path="/DetallesSolicitudes" element={<DetallesSolicitudes />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/observaciones" element={<Observaciones />} />
        
      </Routes>
    </Router>
  );
}

export default App;
