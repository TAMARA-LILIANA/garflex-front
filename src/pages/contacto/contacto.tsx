import { ContactoForm } from "./contactoForm";

// Definición del componente Contacto
export const Contacto = () => {
  return (
    <>
      <div className="contact">          
        <ContactoForm/>
        <div>
          <h2>Ubicación</h2>
          <br></br>
          <iframe title="Mapa de Ubicación" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d994.2041506762384!2d-74.17019290062986!3d4.62678632062792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sco!4v1712552505202!5m2!1ses-419!2sco" width="600" height="450"  loading="lazy"></iframe>
        </div>
      </div>
    </>
  );
}