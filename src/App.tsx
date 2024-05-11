import { Routes, Route} from "react-router-dom";
import { Init } from "./pages/init/init";
import { Contacto } from "./pages/contacto/contacto";
import { Main } from "./pages/main/main";
import { Usuario } from "./pages/usuario/usuarioForm";
import { Producto } from "./pages/producto/producto";
import { Nosotros } from "./pages/nosotros/nosotros";
import { ToastContainer }  from "./components/ToastContainer/toastContainer";
import { LoadingProvider } from "./common/context/loadingContext";



export default function App() {
  return (
    <div>    
      <LoadingProvider>
          <Routes>
            <Route path="/" element={<Init />}>
              <Route path="contacto" element={<Contacto />} />
              <Route index element={<Main />} />
              <Route path="usuario" element={<Usuario />} />
              <Route path="producto/:id" element={<Producto />} /> 
              <Route path="nosotros" element={<Nosotros />} />        
            </Route>
          </Routes>   
        <ToastContainer />        
      </LoadingProvider>
    </div>
  );
}
