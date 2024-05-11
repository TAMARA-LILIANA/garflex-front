import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { productoModel } from "../../types/productoModel";
import * as productoService from '../../common/services/productoService';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLoading } from "../../common/context/loadingContext";

interface ListProps {
  reload: boolean,
}
export const ProductoList: React.FC<ListProps> = ({ reload }) => {

  let { id } = useParams();
  let user = localStorage.getItem('user');

  const { setIsVisible } = useLoading();
  const [productos, setProducto] = useState<productoModel[]>([]);

  useEffect(() => {
    getListProducto();
  }, [reload]);


  useEffect(() => {
    getListProducto();
  }, [id]);  

  const getListProducto = async () => {
    setIsVisible(true);
    const rest = await productoService.getIdType(Number(id));
    setProducto(rest.data);
    setIsVisible(false);
  }

  const deleteProduct = async (product: productoModel) => {
    setIsVisible(true);
    await productoService.deleted(product);
    getListProducto();
    setIsVisible(false);
  }

  return (
    <>
      {
        productos.map((i, index) =>
        (
          <main key={i.id}>
            <div className='puntos'>

            </div>
            {
              user != null && user === 'true' ? (
                <div className='puntos'>
                  <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteProduct(i)} />
                </div>
              ) : (
                <div className='puntos'>

                </div>
              )
            }

            <div>
              <img src={i.url} alt="" />
            </div>
            <div>
              <h4>{i.nombre}</h4>
            </div>
            <div>
              <label><b>$ {i.precio}</b></label>
            </div>
            <div>
              <p>{i.descripcion}</p>
            </div>
            <div>
              <Link to="/producto"><button className='button'>Mas Información</button></Link>
            </div>
          </main>
        )
        )
      }
    </>
  );
}