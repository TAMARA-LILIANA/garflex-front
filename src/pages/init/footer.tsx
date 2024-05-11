import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/img/Logo.png"
import { faFacebook, faGoogle, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

// Declara el componente Footer
export const Footer = () => {
  return (
    <>
      <div className="footer">
        <header>
          <img className="logo" src={Logo} alt="Logo tipo" />
        </header>
        <main>
          <label>No dudes en contactarnos durante nuestro horario laboral para recibir atención profesional y oportuna.</label>
        </main>
        <footer>
          <div>
            <h3><b><i>Horarios de atención</i></b></h3>
            <ul>
              <li><b>Lunes a viernes</b></li>
              <li>8:00 am - 5:00 pm</li>
            </ul>
            <ul>
              <li><b>Sabados</b></li>
              <li>9:00 am - 12:00pm</li>
            </ul>
          </div>

            {/* Sección de iconos de redes sociales */}
          <div className="social-">
              <a href="https://directorio-empresas.einforma.co/informacion-empresa/etiquetas-garflex-sas" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
              <a href="https://www.facebook.com/etiquetasgarflexsas/" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/etiquetasgarflex/?hl=es" className="icon"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://x.com/garflex2018?s=20" className="icon"><i className="fa-brands fa-twitter"></i></a>
          </div>

            {/* Sección de información de contacto */}
          <div>
            <h3><b><i>Información</i></b></h3>
            <ul>
              <li><b>Dir:</b> Kr 82 # 43sur -35 </li>
            </ul>
            <ul>
              <li><b>Tel:</b> 319 5241431</li>
            </ul>
            <ul>
              <li><b>Email:</b> etiquetasgarflex@gmail.com</li>
            </ul>
          </div>
        </footer>
        <aside>
          <p>Derechos reservados &copy;GenTrek</p> {/* Mensaje de derechos reservados */}
        </aside>
      </div>
    </>
  );
}