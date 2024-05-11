import axios from "axios"; // Importamos Axios para realizar peticiones HTTP
import config from "../../config/config"; // Importamos la configuración de la API

// Creamos una instancia de Axios con la configuración base de la API
const api = axios.create({
    baseURL: config.baseApiUrl, // Establecemos la URL base de la API
});

// Interceptor para las peticiones HTTP antes de enviarlas al servidor
api.interceptors.request.use(
    (config) => {        
        return config;
    },
    (error) => {        
        return null
    }
  );

// Interceptor para las respuestas HTTP recibidas del servidor
api.interceptors.response.use(
    (response) => {                      
        return response;
    },
    (error) => {        
        return null;
    });

// Exportamos la instancia de Axios para su uso en otros archivos
export default api;