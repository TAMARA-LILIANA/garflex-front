// Importaciones necesarias
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { informacionModel } from "../../types/informacionModel";
import * as informacionService from '../../common/services/informacionService';
import { useEffect, useState } from "react";
import { useLoading } from "../../common/context/loadingContext";


// Definición de la interfaz ListProps para el componente InformacionList
interface ListProps {  
  reload:boolean,  
}

// Definición del componente InformacionList como una función de componente React
export const InformacionList: React.FC<ListProps> = ({reload}) => {
    let user = localStorage.getItem('user');
    const { setIsVisible } = useLoading();    
    const [informacions, setInformacion] = useState<informacionModel[]>([]);      

    // Efecto que se ejecuta cuando se monta el componente o cambia el estado de recarga
    useEffect( () =>{ 
      getListInformacion(); 
    },[reload]);
    
    // Función para obtener la lista de información
    const getListInformacion = async () =>{
      setIsVisible(true);
      const rest = await informacionService.getAll(); 
      setInformacion(rest.data);
      setIsVisible(false);      
    }
    
    // Función para eliminar un elemento de información
    const deleteInformacion = async (informacion : informacionModel) =>{
      setIsVisible(true);
      await informacionService.deleted(informacion); 
      getListInformacion();
      setIsVisible(false);      
    }

    


    // Renderización del componente InformacionList
    return (
      <>
        {/* Mapeo de la lista de información */}
        {
          informacions.map( (i,index) => 
            (
              <main key={i.id}> 
                {/* Renderización del icono de eliminar si el usuario está autenticado */}
                {
                  user != null && user === 'true'? (
                    <div className='infor'>
                      <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteInformacion(i)}/>
                    </div>
                  ) : (
                    <div className=''>

                    </div>
                  )
                }

                {/* Sección para mostrar el título de la información */}
                <div>
                  <h1>{i.titulo}</h1>
                </div>
                <div className='informa'>
                  <div>
                    <img src={i.url} alt="" />
                  </div>
                  <div>
                    <p>{i.descripcion}</p>
                  </div>
                </div>
              </main>
            )                
          )
        }
      </>
    );
  }