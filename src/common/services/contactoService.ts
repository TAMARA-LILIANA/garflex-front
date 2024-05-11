import axios from "axios"; // Importamos axios para realizar peticiones HTTP
import {contactoModel} from "../../types/contactoModel"; // Importamos el modelo de datos para los contactos
import config from "../../config/config"; // Importamos la configuración de la API

// Definimos la URL base de la API para las operaciones de contacto
const url:string = config.baseApiUrl+"contacto/";

// Función para obtener todos los contactos
export const getAll = async () => {
    // Realizamos una petición GET a la API para obtener todos los contactos
    let result = await axios.get<contactoModel[]>(url + "findall");
    return result;
}

// Función para crear un nuevo contacto
export const create = async (data: contactoModel) => {    
    // Realizamos una petición POST a la API para crear un nuevo contacto
    let result = await axios.post(url + "create",data);
    return result;
}

