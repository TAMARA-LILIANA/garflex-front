import { useState } from "react";
import { ProductoModal } from "./productoModal";
import { ProductoList } from "./productoList";

export const Producto = () => {
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
      <div className="product">
        <header>
          <h1> </h1>

          {
            user != null && user === 'true' ? 
            (
              <button onClick={openModal}>Crear</button>
            ) : 
            (
              <label></label>
            )
          }
          
        </header>
        <div>
          <ProductoList reload={isReload} />
        </div>
          <ProductoModal id={1} isOpen={isOpen} onClose={closeModal} />
      </div>
    </>
  );
}

