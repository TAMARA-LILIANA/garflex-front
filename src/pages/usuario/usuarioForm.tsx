import React, { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useLoading } from "../../common/context/loadingContext";
import * as usuarioService from "../../common/services/usuarioService";
import { usuarioModel } from "../../types/usuarioModel";
import { showToast } from "../../components/ToastContainer/toastContainer";
import { useNavigate } from 'react-router-dom'; 

export const Usuario = () => {
  const { setIsVisible } = useLoading();
  const navigate  = useNavigate();
  const [isLeft, setIsLeft] = useState<boolean>(true);
  const [formData, setFormData] = useState<usuarioModel>({
    id:0,
    nombre: '',        
    email: '', 
    contrasena: '',
    isAdmin:false
});

  const togglePanel = () => {
    console.log()
    setIsLeft(!isLeft);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> ) => {  
    const { name, value } = event.target;
    const inputValue = value;
    debugger
    setFormData({
      ...formData,
      [name]: inputValue
    });
  };

  const handleSubmitRegister = async (event: React.FormEvent) => {
    setIsVisible(true);
    event.preventDefault();
    await usuarioService.create(formData);
    setIsVisible(false);
    showToast("Creado Exitosamente");
    setIsLeft(!isLeft);
  };

  const handleSubmitLogin = async (event: React.FormEvent) => {
    setIsVisible(true);
    event.preventDefault();
    let user = await usuarioService.login(formData);
    setIsVisible(false);
    ValidacionUsuario(user.data);        
  };

  const ValidacionUsuario = (usuario: usuarioModel) => {
    if(usuario){
        showToast("Usuario autenticado correctamente");
        localStorage.setItem('user',usuario.isAdmin.toString());
        navigate('/'); 
    }     else{
        localStorage.removeItem('user');
        showToast("Usuario fallido");
    }
  };
  
  return (
    <>
      <div className="container" id="container">
        <div className="form-container sign-in">
          <form  onSubmit={handleSubmitLogin}>
            <h2>Iniciar Sesión</h2>
            <div className="social-icons">
              <a href="https://directorio-empresas.einforma.co/informacion-empresa/etiquetas-garflex-sas" ><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="https://www.facebook.com/etiquetasgarflexsas/" ><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/etiquetasgarflex/?hl=es" ><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/garflex2018?s=20" ><i className="fa-brands fa-twitter"></i></a>
            </div>
                    
            <span><b> ! </b> Utiliza tu contraseña de correo electrónico <b> ¡ </b></span>
                    
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="contrasena" value={formData.contrasena} onChange={handleInputChange} placeholder="Contraseña" />
            <a href="/forgot-password">¿Olvidaste tu contraseña?</a>
                    
            <button className="button" type="submit">Iniciar sesión</button>
          </form>
        </div>
        <div className="form-container sign-up">
          <form onSubmit={handleSubmitRegister}>
            <h2>Registrarse</h2>
                    
            <div className="social-icons">
              <a href="https://directorio-empresas.einforma.co/informacion-empresa/etiquetas-garflex-sas" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="https://www.facebook.com/etiquetasgarflexsas/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/etiquetasgarflex/?hl=es" className="icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/garflex2018?s=20" className="icon"><i className="fa-brands fa-twitter"></i></a>
            </div>

            <span><b> ! </b> Utilice su correo electrónico para registrarse <b> ¡ </b></span>
                    
            <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} placeholder="Nombre" />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="contrasena" value={formData.contrasena} onChange={handleInputChange} placeholder="Contraseña" />
            <button className="button" type="submit">Suscribirse</button>
          </form>
        </div>               
        <div className={`toggle-container ${isLeft ? "toggle-right" : "toggle-left" }`}>
          <div className="toggle">
            {
              isLeft ? 
              <div className="toggle-panel toggle-right">
                <h1>¡ HOLA !</h1>
                <p>Regístrese con sus datos personales para utilizar todas las funciones del sitio</p>
                <button className="button" type="button" onClick={togglePanel}>
                  {"Suscribirse"}
                </button>
              </div> 
              :<div className="toggle-panel toggle-left" style={{ marginLeft: '29rem' }}>
                <h1>¡Bienvenido de nuevo!</h1>
                <p>Ingrese sus datos personales para utilizar todas las funciones del sitio</p>
                <button className="button" type="button" onClick={togglePanel}>
                  {"Iniciar sesión"}
                </button>
              </div>
            }                                       
          </div>
        </div>
      </div>
    </>
  );
};