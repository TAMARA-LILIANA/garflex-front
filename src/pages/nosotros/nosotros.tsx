import { useState } from "react";
import { NosotrosModal } from "./nosotrosModal";
import { NosotrosList } from "./nosotrosList";


export const Nosotros = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false); 
  const [isReload, setisReload] = useState<boolean>(true);  
  let user = localStorage.getItem('user');

  const openModal = () => {
    console.log("Entro a ca");
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);    
    setisReload(!isReload);
  };

  
  return (
    <>
      <div className="informacion"> 
        <header>          
            {
              user != null && user === 'true' ? (
                <div className='puntos'>
                  <button onClick={openModal}>Crear</button>            
                </div>
              ) : (
                <div className='puntos'>

                </div>
              )
            }      
          
        </header>         
        <div>
          <NosotrosList reload={isReload} />          
        </div>
        <NosotrosModal id={1} isOpen={isOpen} onClose={closeModal}/>
      </div>
    </>
  );
}