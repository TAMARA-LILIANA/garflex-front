import axios from "axios"; // Importamos Axios para realizar peticiones HTTP
import { informacionModel } from "../../types/informacionModel"; // Importamos el modelo de datos para la información
import config from "../../config/config"; // Importamos la configuración de la API

// Definimos la URL base de la API para las operaciones de información
const url:string = config.baseApiUrl+"informacion/";

// Función para obtener toda la información
export const getAll = async () => {  
    // Realizamos una petición GET a la API para obtener toda la información  
    let result = await axios.get<informacionModel[]>(url + "findall");
    return result;
}

// Función para crear nueva información
export const create = async (data: informacionModel, file: any) => {
    console.log(data);
    const formData = new FormData();

    // Añadimos los campos de título, descripción y archivo a formData
    formData.append('titulo', data.titulo);
    formData.append('descripcion', data.descripcion);
    formData.append('url', file);    
    
    // Realizamos una petición POST a la API para crear nueva información
    let result = await axios.post(url + "create",formData,
        {headers: 
            {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return result;
}

// Función para eliminar información
export const deleted = async (data: informacionModel) => {
    // Realizamos una petición DELETE a la API para eliminar información
    let result = await axios.delete(url + "delete", 
        {data}        
      );
    return result;
}

