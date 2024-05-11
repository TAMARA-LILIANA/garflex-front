import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { nosotrosModel } from "../../types/nosotrosModel";
import * as nosotrosService from '../../common/services/nosotrosService';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../common/context/loadingContext";

interface ListProps {
  reload: boolean,
}
export const NosotrosList: React.FC<ListProps> = ({ reload }) => {
  let user = localStorage.getItem('user');
  const { setIsVisible } = useLoading();
  const [nosotross, setNosotros] = useState<nosotrosModel[]>([]);

  useEffect(() => {
    getListNosotros();
  }, [reload]);

  const getListNosotros = async () => {
    setIsVisible(true);
    const rest = await nosotrosService.getAll();
    setNosotros(rest.data);
    setIsVisible(false);
  }

  const deleteNosotros = async (nosotros: nosotrosModel) => {
    setIsVisible(true);
    await nosotrosService.deleted(nosotros);
    getListNosotros();
    setIsVisible(false);
  }

  return (
    <>
      {
        nosotross.map((i, index) =>
        (
          <main key={i.id}>
            <div className='puntos'>
              {
                user != null && user === 'true' ? (
                  <div className='puntos'>
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteNosotros(i)} />
                  </div>
                ) : (
                  <div className='puntos'>

                  </div>
                )
              }
              
            </div>
            <div>
              <img src={i.url} alt="" />
            </div>
            <div>
              <h4>{i.nombre}</h4>
            </div>
            <div>
              <p>{i.descripcion}</p>
            </div>
            <div>
              <Link to="/nosotros"><button className='button'>Mas Información</button></Link>
            </div>
          </main>
        )
        )
      }
    </>
  );
}