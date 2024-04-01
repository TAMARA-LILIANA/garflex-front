import { useEffect, useState } from "react";

import * as informacionService from '../../common/services/informacionService';
import { informacionModel } from "../../types/informacionModel";
export const Informacion = () => {

    const [informaciones, setInformaciones] = useState<informacionModel[]>([]);  


    const getListInformacion = async () =>{
      const rest = await informacionService.getAll(); 
      setInformaciones(rest.data);
    }

    useEffect( () =>{ getListInformacion(); },[]);
    return (
      <>
        <div className="informacion">
          {
              informaciones.map( (i,index) => 
                (
                  <div>
                    <img src={i.url} alt={i.nombreArchivo} />
                    <section>
                      <h1>{i.titulo}</h1>
                      <label>{i.descripcion}</label>
                    </section>                                                          
                  </div>                  
                )                
              )
            }
        </div>
      </>
    );
  }