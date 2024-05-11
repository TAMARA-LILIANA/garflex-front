import { useState } from "react";
import Modal from 'react-modal';
import { informacionModel } from "../../types/informacionModel";
import * as informacionService from "../../common/services/informacionService";
import { styleModal } from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLoading } from "../../common/context/loadingContext";
import { showToast } from "../../components/ToastContainer/toastContainer";

interface ModalProps {
  id: number, 
  isOpen:boolean,
  onClose: () => void; 
}

export const InformacionModal: React.FC<ModalProps> = ({ id,isOpen,onClose }) => {  
  const { setIsVisible } = useLoading();
  const [file, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState<informacionModel>({
    id:0,
    titulo: '',        
    descripcion: '', 
    url: '',
    nombreArchivo:""
  });

    
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {  
    const { name, value } = event.target;
    const inputValue = value;

    setFormData({
      ...formData,
      [name]: inputValue
    });
  };

  const handleFileChange = (event:any) => {
    const { name, value } = event.target;
    const inputValue = value;
    
    setFormData({...formData,[name]: inputValue});
    setSelectedFile(event.target.files[0]);
  };


  const handleSubmit = async (event: React.FormEvent) => {
    setIsVisible(true);
    event.preventDefault();
    await informacionService.create(formData,file);
    clearForm();
    onClose()
    setIsVisible(false);
    showToast("Creado Exitosamente");
  };

  const clearForm = () => {
    setFormData(
      {
        id:0,
        titulo: '',        
        descripcion: '', 
        url: '',
        nombreArchivo:""
      }
    )
  }

    

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}     
        style={styleModal}
      >
        <FontAwesomeIcon icon={faXmark} size="2xl" onClick={onClose} />          
        
        <div className="form">
          <header>
            <h2>Ingreso de Informacion</h2>
          </header>
          <form onSubmit={handleSubmit}>                    
            <section>
              <label>Titulo</label>
                <input type="text" name="titulo" value={formData.titulo} onChange={handleInputChange} placeholder="Titulo" />                                                        
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
    </>
  );
}