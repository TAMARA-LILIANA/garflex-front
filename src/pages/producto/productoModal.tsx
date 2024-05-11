import { useState } from "react";
import Modal from 'react-modal';
import { productoModel } from "../../types/productoModel";
import * as productoService from "../../common/services/productoService";
import { styleModal, tipoProducto } from "../../config/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useLoading } from "../../common/context/loadingContext";
import { showToast } from "../../components/ToastContainer/toastContainer";

interface ModalProps {
  id: number, 
  isOpen:boolean,
  onClose: () => void; 
}

export const ProductoModal: React.FC<ModalProps> = ({ id,isOpen,onClose }) => {  
  const { setIsVisible } = useLoading();
  const [file, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState<productoModel>({
    id:0,
    nombre: '',        
    descripcion: '', 
    precio: 0,
    stock: 0,
    tipo:0,
    url: '',
    nombreArchivo:'',
    file:''
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
  await productoService.create(formData,file);
  clearForm();
  onClose()
  setIsVisible(false);
  showToast("Creado Exitosamente");
};

const clearForm = () => {
  setFormData(
    {
      id:0,
      nombre: '',        
      descripcion: '', 
      precio: 0,
      stock: 0,
      tipo:0,
      url: '',
      nombreArchivo:'',
      file:''
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
              <h2>Ingreso de Productos</h2>
            </header>
            <form onSubmit={handleSubmit}>                    
              <section>
                <label>Nombre</label>
                  <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" />                                                        
              </section>                    
              <section>
                <label>Precio</label>
                <input type="number" name="precio" value={formData.precio} onChange={handleInputChange} placeholder="Precio"/>                            
              </section>                                        
              <section>
                <label>Stock</label>
                <input type="number" name="stock" value={formData.stock} onChange={handleInputChange} placeholder="Stock"/>                            
              </section>
              <section>
                <label>Tipo</label>
                  <select title="tipo" name="tipo" value={formData.tipo} onChange={handleInputChange}>                            
                    <option value={0} disabled>Selecciona una opción</option>
                    {tipoProducto.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>                        
              </section>
              <section>
                <label>Foto</label>
                <input type="file" name="file" accept=".jpg,.jpeg,.png" value={formData.file} onChange={handleFileChange} placeholder="file"/>                            
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