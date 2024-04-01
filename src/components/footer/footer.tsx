import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../assets/img/Logo.png"
import { faFacebook, faGoogle, faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";

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
              <li>9:00 am - 12:00am</li>
            </ul>
          </div>
          <div>
            <section>
              <FontAwesomeIcon icon={faFacebook} size="2xl" />
              <FontAwesomeIcon icon={faGoogle} size="2xl" />
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
              <FontAwesomeIcon icon={faXTwitter} size="2xl" />
            </section>            
          </div>
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

                <p>Derechos reservados &COPY;GenTrek</p>

        </aside>
      </div>
    </>
  );
}