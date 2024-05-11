// Importación de icono y componente necesarios de FontAwesome y React
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

// Definición de un componente
export const Theme = () => {
  // Estado para controlar el tema (true: claro, false: oscuro)
  const [theme, setTheme] = useState<boolean>(true);
  
  // Función para cambiar entre el tema claro y oscuro
  const changeTheme = () => {      
    setTheme(!theme)
    let style = theme ? 'light' : 'dark';
    document.body.setAttribute('data-theme', style);
  };

  // Renderización del icono que permite cambiar el tema
  return (
    <>
      <FontAwesomeIcon icon={faCircleHalfStroke} onClick={changeTheme}/>
    </>
  );
}