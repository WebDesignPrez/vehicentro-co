import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Producto from "./pages/Producto"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Tecnologia from "./pages/Tecnologia"
import { useParams } from "react-router";
import Camion from "./pages/Camion"
import Cabezal from "./pages/Cabezal"
import Concesionarios from "./pages/Concesionarios"
import Excavadora from "./pages/Excavadora"
import Volqueta from "./pages/Volqueta"


function App() {
/*   
  <BrowserRouter basename="/reactjs/">
  */
  return (
    
    <BrowserRouter >
      <main>
        <Routes>
          <Route path="/" element={<Inicio/>} />
          <Route path="/nosotros" element={<Nosotros/>} />
          <Route path="/producto" element={<Producto name="Camion_10_toneladas"/>}  />
          <Route path="/camiones/:id" element={<Camion/>} />
          <Route path="/cabezales/:id" element={<Cabezal/>} />
          <Route path="/excavadoras/:id" element={<Excavadora/>} />
          <Route path="/tecnologia" element={<Tecnologia/>} />
          <Route path="/concesionarios" element={<Concesionarios/>} />
          <Route path="/volquetas/:id" element={<Volqueta/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App