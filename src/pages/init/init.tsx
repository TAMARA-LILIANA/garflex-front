// Importación de componentes necesarios de React y React Router
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";



// Definición de un componente llamado Init
export const Init = () =>{ 
  return (
    <>  
      <Header /> {/* Renderización del componente Header */}   
      <Outlet /> {/* Renderización del componente Outlet, que es un punto de salida para el enrutamiento */}
      <Footer /> {/* Renderización del componente Footer */}
    </>
  );
}

