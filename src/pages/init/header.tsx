import { Link } from 'react-router-dom';
import logo from '../../assets/img/Logo.png';
import { Theme } from './theme';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp,  } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom'; 

// Declara el componente Header
export const Header = () => {
    const navigate  = useNavigate();
    let user = localStorage.getItem('user');

    const salir = async () => {
      localStorage.removeItem('user');
      navigate('/'); 
    }
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

                {
                  user != null && user === 'true' ? (                  
                      <button className='button' onClick={() => salir()}>Salir</button>                    
                  ) : (
                    <Link to="/usuario">
                      {/* Botón para iniciar sesión */}
                      <button className='button'>Iniciar Sesión</button>
                    </Link>
                  )
                }

                
              </li>
              <li>
                {/* Componente para cambiar el tema */}
                <Theme />
              </li>
            </ul>
          </div>
        </div>

        <div>
          <a href="https://api.whatsapp.com/send?phone=3195241431&text=Quiero%20mas%20info" target="blank" className="what">
            <FontAwesomeIcon icon={faWhatsapp} className="whats"/>
          </a>
        </div>
      </>
    );
  }