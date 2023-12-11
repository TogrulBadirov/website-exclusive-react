import React from 'react'
import "./index.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
const Header = () => {
  return (
    <>
    <section id='header'>
        <div className="container">
        <div className="sub-nav">
            <ul>
                <li><a href="">Woman’s Fashion</a></li>
                <li><a href="">Men’s Fashion</a></li>
                <li><a href="">Electronics</a></li>
                <li><a href="">Home & Lifestyle</a></li>
                <li><a href="">Medicine</a></li>
                <li><a href="">Sports & Outdoor</a></li>
                <li><a href="">Baby’s & Toys</a></li>
                <li><a href="">Groceries & Pets</a></li>
                <li><a href="">Health & Beauty</a></li>
            </ul>
        </div>
        <div className="header-img">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide><img src="https://9to5mac.com/wp-content/uploads/sites/6/2021/04/ios-14.5-final.jpg?quality=82&strip=all" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
        </div>
        </div>
    </section>
    </>
  )
}

export default Header