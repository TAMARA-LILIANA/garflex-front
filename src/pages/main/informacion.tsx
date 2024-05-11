// Importación de hook useState y componentes necesarios
import { useState } from "react";
import { InformacionModal } from "./informacionModal";
import { InformacionList } from "./informacionList";

// Definición del componente de Informacion
export const Informacion = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [isReload, setisReload] = useState<boolean>(true);  
  let user = localStorage.getItem('user');

  // Función para abrir el modal
  const openModal = () => {
    console.log("Entro a ca");
    setIsOpen(true);
  };

  // Función para cerrar el modal y recargar la lista de información
  const closeModal = () => {
    setIsOpen(false);    
    setisReload(!isReload);
  };

  // Renderización del componente Informacion
  return (
    <>
      <div className="informacion"> 
        <header> 
          {/* Botón para crear nueva información si el usuario está autenticado */}         
          <h1><b></b></h1>       
          {
            user != null && user === 'true'? 
            (
              <button onClick={openModal}>Crear</button>
            ) : 
            (
              <label></label>
            )
          }            
        </header> 

        {/* Componente para mostrar la lista de información */}        
        <div>
          <InformacionList reload={isReload} />          
        </div>

        {/* Componente modal para crear nueva información */}
          <InformacionModal id={1} isOpen={isOpen} onClose={closeModal}/>
      </div>
    </>
  );
}