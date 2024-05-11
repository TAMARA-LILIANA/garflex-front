// Importación de hooks y componentes necesarios
import { useState } from "react";
import Modal from 'react-modal';
import { carruselModel } from "../../types/carruselModel";
import * as carruselService from "../../common/services/carruselService";
import { styleModal } from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLoading } from "../../common/context/loadingContext";
import { showToast } from "../../components/ToastContainer/toastContainer";

// Definición de la interfaz ModalProps para el componente CarruselModal
interface ModalProps {
  id: number, 
  isOpen:boolean,
  onClose: () => void; 
}

// Definición del componente CarruselModal como una función de componente React
export const CarruselModal: React.FC<ModalProps> = ({ id,isOpen,onClose }) => {  
  const { setIsVisible } = useLoading();

  // Estado para almacenar el archivo seleccionado
  const [file, setSelectedFile] = useState(null);

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<carruselModel>({
    id:0,
    nombre: '',        
    descripcion: '', 
    url: '',
    nombreArchivo:""
  });
  
  // Función para manejar el cambio en los campos de texto del formulario
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {  
    const { name, value } = event.target;
    const inputValue = value;

    setFormData({
      ...formData,
      [name]: inputValue
    });
  };

  // Función para manejar el cambio en el campo de archivo del formulario
  const handleFileChange = (event:any) => {
    const { name, value } = event.target;
    const inputValue = value;
    
    setFormData({...formData,[name]: inputValue});
    setSelectedFile(event.target.files[0]);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (event: React.FormEvent) => {
    setIsVisible(true);
    event.preventDefault();
    await carruselService.create(formData,file);
    clearForm();
    onClose()
    setIsVisible(false);
    showToast("Creado Exitosamente");
  };

  // Función para limpiar el formulario
  const clearForm = () => {
    setFormData(
      {
        id:0,
        nombre: '',        
        descripcion: '', 
        url: '',
        nombreArchivo:""
      }
    )
  }

  // Renderización del componente CarruselModal
  return (
    <div className="ejemplo">
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}     
        style={styleModal}
      >
        {/* Icono para cerrar el modal */}
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={onClose} />          
        
        {/* Formulario para ingresar información del carrusel */}
        <div className="form">
          <header>
            <h2>Ingreso de Carrusel</h2>
          </header>
          <form onSubmit={handleSubmit}>                    
            <section>
              <label>Nombre</label>
                <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" />                                                        
            </section>                 
            <section>
              <label>Foto</label>
              <input type="file" name="url" accept=".jpg,.jpeg,.png" value={formData.url} onChange={handleFileChange} placeholder="url"/>                            
            </section>   
            <section>
              <label>Descripcion</label>
              <textarea name="descripcion" value={formData.descripcion} onChange={handleInputChange} placeholder="Descripcion"/>                                                        
            </section>                    
            <button type="submit" >Crear</button>                             
          </form> 
        </div>               
      </Modal>
    </div>
  );
}