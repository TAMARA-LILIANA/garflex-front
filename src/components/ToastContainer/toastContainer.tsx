import { ToastContainer as ReactToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Función para mostrar una notificación
export const showToast = (message:string) => {
  
  toast(message); // Muestra la notificación con el mensaje recibido como parámetro
};

// Componente ToastContainer que renderiza el ToastContainer de react-toastify
export const ToastContainer = () => {

  return (
    <>
      <ReactToastContainer /> {/* Renderiza el ToastContainer de react-toastify */}
    </>
  );
}

