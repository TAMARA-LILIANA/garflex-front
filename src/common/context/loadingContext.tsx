import React, { createContext, useState, useContext } from 'react';
import { Loading } from '../../components/loading/loading';

// Definimos el tipo de datos que contendrá nuestro contexto de carga
interface LoadingContextType {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

// Creamos el contexto de carga con un valor inicial que indica que la pantalla de carga no está visible y una función que no hace nada inicialmente
const LoadingContext = createContext<LoadingContextType>({
  isVisible: false,
  setIsVisible: () => {},
});

// Creamos un componente proveedor que envuelve a toda la aplicación y proporciona la información de carga a sus componentes hijos
export const LoadingProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Proporcionamos el valor del estado de visibilidad y la función para cambiarlo a los componentes hijos
  return (
    <LoadingContext.Provider value={{ isVisible, setIsVisible }} >
        {children}
        {isVisible && <Loading/>}
    </LoadingContext.Provider>
  );
};

// Creamos un hook personalizado para acceder al contexto de carga en cualquier parte de la aplicación
export const useLoading = () => {

  // Obtenemos el contexto de carga
  const context = useContext(LoadingContext);

  // Si no hay ningún contexto, lanzamos un error
  if (!context) {
    throw new Error('La carga debe usarse dentro de un proveedor de carga');
  }

  // Devolvemos el contexto de carga
  return context;
};
