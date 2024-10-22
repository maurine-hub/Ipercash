'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';
import { images } from '../lib/images';

import { FaDownload, FaStar, FaGoodreads } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Checkout() {
  return (
    <div className="flex flex-col items-center py-16 px-6 md:p-20 ">
      
      <div className="flex flex-col text-center md:w-1/2">
          <h1 className="uppercase font-bold pb-6 text-3xl text-neutral-700">Checkout our app interface look</h1>
          <p className="hidden font-meduim text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis autem soluta dicta culpa hic illum sint accusamus doloremque! Tenetur voluptates dolorem illo perspiciatis perferendis, quos corporis in ab consequuntur ducimus?</p>
          <p className="md:hidden font-meduim text-neutral-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis autem soluta dicta culpa hic illum sint accusamus doloremque! Tenet</p>
      </div>


      <div className="relative w-full h-64 md:h-[500px] mt-20">
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={3}
          spaceBetween={-100}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-[90%] h-full mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index} className="swiper-slide">
              <div className="relative w-full h-full">
                <Image 
                  src={image.src}
                  alt={`Nature ${index + 1}`}
                  width={500}
                  height={300}
                  className="transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Boutons de navigation personnalisés */}
        <div className="max-sm:hidden sm:hidden custom-prev absolute left-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
          <FaChevronLeft/>
        </div>
        <div className="max-sm:hidden sm:hidden custom-next absolute right-2 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center border-2 border-white cursor-pointer">
          <FaChevronRight/>
        </div>

      </div>

      <div className='flex max-sm:flex-col mt-10 md:mt-24 w-full '>
          <div className='flex flex-col md:w-1/2'>
            <h1 className='uppercase font-semibold text-2xl md:text-3xl text-neutral-700'>download app now</h1>
            <p className='text-lg font-meduim text-neutral-500 py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex unde adipisci eligendi soluta tenetur quia fugit iste minus nihil laborum quas rem voluptates eaque alias, ducimus, suscipit autem blanditiis quasi.</p>
            <div className='flex items-center'>
              <div>
                <Image
                  src={images[4].src}
                  alt=''
                  width={200}
                  height={300}
                />
              </div>
              <div>
                <Image
                  src={images[5].src}
                  alt=''
                  width={200}
                  height={300}
                />
              </div>
            </div>
          </div>

          <div className='w-[40%] ml-28'>
            <Image
              src={images[2].src}
              alt=''
              width={400}
              height={300}
            />
          </div>

      </div>
    </div>
    
  );
}