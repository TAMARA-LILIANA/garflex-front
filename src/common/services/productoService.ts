import axios from "axios";
import {productoModel} from "../../types/productoModel";
import config from "../../config/config";

// Definimos la URL de la API
const url:string = config.baseApiUrl+"producto/";

// Función para obtener todos los productos desde la API
export const getAll = async () => {
    // Realizamos una petición GET para obtener todos los productos
    let result = await axios.get<productoModel[]>(url + "findall");
    return result;
}

// Función para obtener productos por ID de tipo desde la API
export const getIdType = async (id: number) => {
    // Realizamos una petición GET para obtener productos por ID de tipo
    let result = await axios.get<productoModel[]>(url + "findbyidtype",{params:{
    id:id    
    }});
    return result;
}

// Función para crear un nuevo producto en la API
export const create = async (data: productoModel, file:any) => {   
    // Creamos un objeto FormData para enviar los datos del producto junto con un archivo
    const formData = new FormData();
        formData.append('nombre', data.nombre);
        formData.append('descripcion', data.descripcion);
        formData.append('precio', data.precio.toString());
        formData.append('stock', data.precio.toString());
        formData.append('tipo', data.tipo.toString());
        formData.append('file', file);    

    // Realizamos una petición POST para crear el nuevo producto
    let result = await axios.post(url + "create",formData,
        {headers: 
            {
                'Content-Type': 'multipart/form-data'
            }
        }
    );
    return result;
}

// Función para eliminar un producto de la API
export const deleted = async (data: productoModel) => {
    console.log(data)

    // Realizamos una petición DELETE para eliminar el producto
    let result = await axios.delete(url + "delete", 
        {data}        
      );
    return result;
}