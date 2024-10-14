import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // นำเข้าโมดูล Autoplay
import 'swiper/swiper-bundle.css'; // นำเข้า CSS ของ Swiper
 

const images = ['https://i0.wp.com/www.mychiangmaitravel.com/wp-content/uploads/2017/11/doi-ang-khang08.jpg?ssl=1',
   'https://th.bing.com/th/id/OIP._tCNgLNyqYpicZxByMWNxgHaE7?pid=ImgDet&w=178&h=118&c=7&dpr=1.5', 
   'https://th.bing.com/th/id/OIP._tCNgLNyqYpicZxByMWNxgHaE7?pid=ImgDet&w=178&h=118&c=7&dpr=1.5']; // ใช้ตัวแปรที่ import เข้ามา

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
          <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ImageSlider;
