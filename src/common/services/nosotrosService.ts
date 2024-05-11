import axios from "axios";
import { nosotrosModel } from "../../types/nosotrosModel";
import config from "../../config/config";

// Definimos la URL de la API para la entidad "nosotros"
const url:string = config.baseApiUrl+"nosotros/";

// Función para obtener todos los datos de la entidad "nosotros" desde la API
export const getAll = async () => {  
    // Realizamos una petición GET para obtener todos los datos  
    let result = await axios.get<nosotrosModel[]>(url + "findall");
    return result;
}

// Función para crear un nuevo registro en la entidad "nosotros"
export const create = async (data: nosotrosModel, file:any) => {   
    // Creamos un objeto FormData para enviar los datos junto con un archivo
    const formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('descripcion', data.descripcion);
        formData.append('file', file);    

    // Realizamos una petición POST para crear el nuevo registro
    let result = await axios.post(url + "create",formData,
        {headers: 
            {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return result;
}

// Función para eliminar un registro de la entidad "nosotros"
export const deleted = async (data: nosotrosModel) => {
    console.log(data)
    // Realizamos una petición DELETE para eliminar el registro
    let result = await axios.delete(url + "delete", 
        {data}        
      );

    // Devolvemos el resultado de la petición
    return result;
}