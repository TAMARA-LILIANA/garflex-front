import axios from "axios";
import { carruselModel } from "../../types/carruselModel";
import config from "../../config/config";

// Definimos la URL base de la API para las operaciones del carrusel
const url:string = config.baseApiUrl+"carrusel/";

// Función para obtener todos los elementos del carrusel
export const getAll = async () => {

    // Realizamos una petición GET a la API para obtener todos los elementos del carrusel
    let result = await axios.get<carruselModel[]>(url + "findall");
    return result;
}

// Función para obtener un elemento del carrusel por su ID
export const getById = async () => {
    // Realizamos una petición GET a la API para obtener un elemento del carrusel por su ID
    let result = await axios.get<carruselModel>(url + "findbyid",{ params: { id: 1 } });
    return result;
}

// Función para eliminar un elemento del carrusel
export const deleted = async (data: carruselModel) => {
    console.log(data)
    // Realizamos una petición DELETE a la API para eliminar un elemento del carrusel
    let result = await axios.delete(url + "delete", 
        {data}        
        );
    return result;
}

// Función para crear un nuevo elemento del carrusel
export const create = async (data: carruselModel, file: any) => {
  const formData = new FormData();
  formData.append('nombre', data.nombre);
  formData.append('descripcion', data.descripcion);
  formData.append('file', file); 

  // Realizamos una petición POST a la API para crear un nuevo elemento del carrusel
  let result = await axios.post(url + "create",formData,
      {headers: 
          {
              'Content-Type': 'multipart/form-data'
          }
      }
  );

  // Devolvemos el resultado de la petición
  return result;
}