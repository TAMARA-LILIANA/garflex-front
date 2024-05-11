// Importación de tipos y componentes necesarios
import { carruselModel } from "../../types/carruselModel";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Importación de contexto y servicios necesarios
import { useLoading } from "../../common/context/loadingContext";
import * as carruselService from '../../common/services/carruselService';

// Definición de la interfaz Props para el componente
interface Props {
  item: carruselModel;
  // Función para manejar la eliminación del elemento
  onDelete: () => void; 
}

// Función para manejar la eliminación del elemento
export const CarruselCard: React.FC<Props> = ({item,onDelete}) => {
  // Obtiene el usuario de localStorage
  let user = localStorage.getItem('user');
  
  const { setIsVisible } = useLoading();  

  // Función para eliminar una tarjeta del carrusel
  const deleteCard = async (item:carruselModel) =>{
    setIsVisible(true);
    await carruselService.deleted(item); 
    onDelete();    
    setIsVisible(false);      
  }

  // Renderización del componente CarruselCard
    return (
      <>
        {/* Sección de la tarjeta del carrusel */}
        <section id='{item.id}'>

          {/* Renderización del ícono de eliminación si el usuario está autenticado */}
            {
              user != null && user === 'true'? (
                <div className='carousel'>
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteCard(item)}/>
                </div>
              ) : (
                <div className='carousel'>

                </div>
              )
            }

            {/* Sección para mostrar el nombre del elemento */}
          <div>
            <label>{item.nombre} </label>
          </div>

          {/* Sección para mostrar la imagen del elemento */}
          <div>
            <img src={item.url} alt="" />
          </div>
        </section>
      </>
    );
  }