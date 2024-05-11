// Importación de React y los componentes y módulos necesarios de Swiper
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

// Importación de estilos de Swiper y otros archivos necesarios
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Importación de servicios y tipos necesarios
import * as carruselService from '../../common/services/carruselService';
import { carruselModel } from '../../types/carruselModel';

// Importación de componentes personalizados
import { CarruselModal } from './carruselModal';
import { CarruselCard } from './carruselCard';

// Definición del componente Carrusel
export const Carrusel = () => {
    
    // Estado para almacenar las imágenes del carrusel
    const [carruseles, setCarruseles] = useState<carruselModel[]>([]);  
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isReload, setisReload] = useState<boolean>(true);
    let user = localStorage.getItem('user');

    // Función que se ejecuta al montar el componente para obtener la lista de imágenes del carrusel
    useEffect( () =>{ getListCarrusel(); },[]);

    // Función para obtener la lista de imágenes del carrusel
    const getListCarrusel = async () =>{
      const rest = await carruselService.getAll(); 
      setCarruseles(rest.data);
    }

    useEffect(() => {
      getListCarrusel();
    }, [isReload]);

    // Función que se ejecuta cuando se elimina una imagen del carrusel
    const onDelete = () => {      
      setisReload(!isReload);
    };

    // Función para abrir el modal
    const openModal = () => {
      console.log("Entro a ca");
      setIsOpen(true);
    };

    // Función para cerrar el modal y recargar los datos del carrusel
    const closeModal = () => {
      setIsOpen(false);
      setisReload(!isReload);
    };
  

    return (
      <>
      {/* Encabezado con botón para crear una nueva imagen del carrusel */}
        <header>
          {
            user != null && user === 'true'? 
            (
              <button onClick={openModal}>Crear</button>
            ) : 
            (
              <label></label>
            )
          }
        </header>
        <div className='carrusel'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={3}
            loop={true}
            navigation={true}
            centeredSlides={true}
            spaceBetween={0}
            autoplay={{ delay: 2000, disableOnInteraction: true}}
            coverflowEffect={{ rotate:6, stretch: -25, depth: 40, modifier:7, slideShadows: true }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {/* Renderización de las imágenes del carrusel */}
            {
              carruseles.map( (i,index) => 
                (
                  <SwiperSlide key={i.id}>
                    <CarruselCard item={i} onDelete={onDelete}/>
                  </SwiperSlide>      
                )                
              )
            }
          </Swiper>
        </div> 
        {/* Renderización del modal */}
        <div>
          <CarruselModal id={1} isOpen={isOpen} onClose={closeModal}></CarruselModal> 
        </div>    
        
      </>
    );
  }