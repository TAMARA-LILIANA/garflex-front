import axios from "axios";
import { carruselModel } from "../../types/carruselModel";



const url:string = "http://localhost:8092/api/v1/carrusel/";

export const getAll = async () => {
        let result = await axios.get<carruselModel[]>(url + "findall");
        return result;
    }

export const getById = async () => {
        let result = await axios.get<carruselModel>(url + "findbyid",{ params: { id: 1 } });
        return result;
    }    



