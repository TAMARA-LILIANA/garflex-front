import { carruselModel } from "../../types/carruselModel";

interface Props {
  item: carruselModel;
}
export const CarruselCard: React.FC<Props> = ({item}) => {

    return (
      <>
        <section>
          <label>{item.nombre} - {item.descripcion} </label>
          <img src={item.url} alt="" />
        </section>
      </>
    );
  }