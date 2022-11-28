import Inicio from "./pages/Inicio"
import Nosotros from "./pages/Nosotros"
import Producto from "./pages/Producto"
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Tecnologia from "./pages/Tecnologia"
import { useParams } from "react-router";
import Camion from "./pages/Camion"
import Cabezal from "./pages/Cabezal"

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
          <Route path="/tecnologia" element={<Tecnologia/>} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App