// config.ts
// Interfaz que define la estructura de la configuración de la aplicación
interface AppConfig {
    baseApiUrl: string;
}

// Objeto que contiene la configuración de la aplicación
const config: AppConfig = {
  baseApiUrl: 'http://localhost:8092/api/v1/',
    
};

// Estilos para los modales
 export const styleModal = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-10%',      
    transform: 'translate(-50%, -50%)',
    borderRadius: '2rem',
    border: '0.01rem solid var(--color-primary)',
    background:'var(--color-background)',
    boxShadow: 'var(--box-shadow-down)'       
  },
};

// Array de objetos que representan los tipos de producto
export const tipoProducto = [
  { value: 1, label: 'Etiquetas Garflex' },
  { value: 2, label: 'Impresoras de etiqueta' },
  { value: 3, label: 'Papel termico pos' }
];

// Exporta la configuración de la aplicación
export default config;
  