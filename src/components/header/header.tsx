import logo from '../../assets/img/Logo.png';
import { Theme } from '../theme/theme';

export const Header = () => {
    return (
      <>
        <div className="header">
          <div>
            <ul>
	            <li>
                <a >Inicio</a>
              </li>
	            <li>
                <a >Productos</a>
              </li>
              <li>
                <a >Pedidos</a>
              </li>
            </ul>
          </div>
          <div>
            <img src={logo} alt="" className="logo" />
          </div>
          <div>
            <ul>              
	            <li>
                <a >Contactenos</a>
              </li>
              <li>
                <button className='button'>Iniciar Sesión</button>
              </li>
              <li>
                <Theme />
              </li>
              
            </ul>
          </div>
        </div>
      </>
    );
  }