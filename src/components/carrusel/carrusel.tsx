import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import * as carruselService from '../../common/services/carruselService';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


import { carruselModel } from '../../types/carruselModel';
import { CarruselCard } from './carruselCard';

export const Carrusel = () => {
    
    const [carruseles, setCarruseles] = useState<carruselModel[]>([]);  

    useEffect( () =>{ getListCarrusel(); },[]);

    const getListCarrusel = async () =>{
      const rest = await carruselService.getAll(); 
      setCarruseles(rest.data);
    }

    return (
      <>
        <div className='carrusel'>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            slidesPerView={3}
            loop={true}
            navigation={true}
            centeredSlides={true}
            spaceBetween={0}
            autoplay={{ delay: 3000, disableOnInteraction: true}}
            coverflowEffect={{ rotate:6, stretch: -20, depth: 40, modifier:10, slideShadows: true }}
            pagination={{ clickable: true }}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {
              carruseles.map( (i,index) => 
                (
                  <SwiperSlide>
                    <CarruselCard item={i}/>
                  </SwiperSlide>      
                )                
              )
            }
          </Swiper>
        </div>        
      </>
    );
  }