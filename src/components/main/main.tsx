import { Cards } from "../card/cards";
import { Carrusel } from "../carrusel/carrusel";
import { Informacion } from "../informacion/informacion";


export const Main = () => {
    return (
      <>
        <div className="main">
          <Carrusel />
          <Cards />
          <Informacion />
        </div>
      </>
    );
  }