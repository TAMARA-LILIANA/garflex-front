import axios from "axios";
import { informacionModel } from "../../types/informacionModel";



const url:string = "http://localhost:8092/api/v1/informacion/";

export const getAll = async () => {
        let result = await axios.get<any[]>(url + "findall");
        return result;
    }

