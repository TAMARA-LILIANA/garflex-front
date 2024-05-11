import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
import { Theme } from './theme';

// Declara el componente Header
export const Header = () => {
    // Inicia la sección del header 
    return (
      <>
        <div className="header">
          <div>
            <ul>
	            <li>
                <Link to="/">Inicio</Link>
              </li>
	            <li>
                <a>Productos</a> {/* Menú desplegable de productos */}
                <ul >
                  <li className="pro-duct"><Link to="/producto/1">ETIQUETAS GARFLEX</Link></li>
                  <li className="pro-duct"><Link to="/producto/2">Impresoras de Etiquetas</Link></li>
                  <li className="pro-duct"><Link to="/producto/3">Papel Termico Pos</Link></li>
                </ul>
              </li>
              <li>
                {/* Enlace a la página Nosotros */}
              <Link to="/nosotros">Nosotros</Link>
              </li>
            </ul>
          </div>
          <div>
            {/* Sección del logo */}
            <img src={logo} alt="" className="logo" />
          </div>
          <div>
            <ul>              
	            <li>
                {/* Enlace a la página de contacto */}
                <Link to="/contacto">Contactenos</Link>                
              </li>
              <li>
                <Link to="/usuario">
                  {/* Botón para iniciar sesión */}
                  <button className='button'>Iniciar Sesión</button>
                </Link>
              </li>
              <li>
                {/* Componente para cambiar el tema */}
                <Theme />
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }