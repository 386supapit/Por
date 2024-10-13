import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // นำเข้าโมดูล Autoplay
import 'swiper/swiper-bundle.css'; // นำเข้า CSS ของ Swiper

const images = [
  'https://th.bing.com/th/id/OIP.q7qOkpMuvA19fhj7qJzWkgHaEK?rs=1&pid=ImgDetMain',
  'https://f.ptcdn.info/653/064/000/ptlxrdvxcsyOMvUtA6G-o.jpg',
  'https://f.ptcdn.info/653/064/000/ptlxrdvxcsyOMvUtA6G-o.jpg',
];


function ImageSlider() {
  return (
    
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]} // ใช้โมดูล Autoplay
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 1, // แสดง 1 รูป
          },
          768: {
            slidesPerView: 1, // แสดง 1 รูป
          },
          1024: {
            slidesPerView: 1, // แสดง 1 รูป
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index}`} className="w-full h-96 object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    
  );
}

export default ImageSlider;
