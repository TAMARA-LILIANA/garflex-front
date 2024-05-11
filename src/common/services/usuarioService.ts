import axios, { AxiosResponse } from "axios";
import {usuarioModel} from "../../types/usuarioModel";
import config from "../../config/config";

// Definimos la URL de la API
const url:string = config.baseApiUrl+"usuario/";

// Función para obtener todos los usuarios desde la API
export const getAll = async () => {
    // Realizamos una petición GET para obtener todos los usuarios
    let result = await axios.get<usuarioModel[]>(url + "findall");
    return result;
}

// Función para crear un nuevo usuario en la API
export const create = async (data: usuarioModel) => {    
    // Realizamos una petición POST para crear el nuevo usuario
    let result = await axios.post(url + "create",data);
    return result;
}

// Función para realizar el inicio de sesión de un usuario en la API
export const login = async (data: usuarioModel) => {   
    // Realizamos una petición GET para iniciar sesión 
    let result = await axios.get<any,AxiosResponse<usuarioModel>>(url + "login",{
        params:{email:data.email,contrasena:data.contrasena},
    });
    return result;
}

// Función para eliminar un usuario de la API
export const deleted = async (data: usuarioModel) => {
    console.log(data)
    // Realizamos una petición DELETE para eliminar el usuario
    let result = await axios.delete(url + "delete", 
        {data}        
      );
    return result;
}
