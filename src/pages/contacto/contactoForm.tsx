import { useState } from "react";
import { showToast } from '../../components/ToastContainer/toastContainer';
import { contactoModel } from "../../types/contactoModel";
import * as contactoService from "../../common/services/contactoService";
import "react-toastify/dist/ReactToastify.css";
import { useLoading } from "../../common/context/loadingContext";

// Obtiene la función setIsVisible del contexto de carga
export const ContactoForm = () => {
    const { setIsVisible } = useLoading();
    const [formData, setFormData] = useState<contactoModel>({
        id:0,
        titulo: '',
        nombre: '',
        email: '',        
        mensaje: ''
    });
    
    // Maneja el cambio de valores en los campos del formulario
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = event.target;
      const inputValue = value;

      setFormData({
        ...formData,
        [name]: inputValue
      });
    };
    
    // Maneja el envío del formulario
    const handleSubmit = async (event: React.FormEvent) => {
        setIsVisible(true);
        event.preventDefault();
        await contactoService.create(formData);
        clearForm();        
        setIsVisible(false);
        showToast("Success Notification !");
    };
    
    // Limpia los valores del formulario
    const clearForm = () => {
        setFormData(
          {
            id:0,
            titulo: '',
            nombre: '',
            email: '',        
            mensaje: ''
          }
        )
    }

    {/* Contenedor principal del formulario */}
    return (
        <>                  
            <div className="form">
                <header>
                    <h2>Contactenos</h2>
                </header>
                <form onSubmit={handleSubmit}>                    
                    <section>
                        <label>Titulo</label>
                        <input type="text" name="titulo" value={formData.titulo} onChange={handleInputChange} placeholder="Titulo" />                                                        
                    </section>
                    <section>
                        <label>Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre"/>                                                        
                    </section>                    
                    <section>
                        <label>Email</label>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email"/>                            
                    </section>
                    <section >
                        <label>Mensaje</label>
                        <textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} placeholder="Mensaje"/>                            
                    </section>                    
                    <button type="submit">Enviar</button>                                                                
                </form> 
            </div>     
            
        </>          
    );
  }