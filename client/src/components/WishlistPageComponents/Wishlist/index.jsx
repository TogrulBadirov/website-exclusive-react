import "./index.scss"
import "./index.scss";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Product from "../../HomePageComponents/Product";
import WishlistProduct from "../WishlistProduct";

const WishlistSection = () => {
  return (
    <section id="wishlist">
    <div className="container">
      <div className="wishlist-header">
      <h6>Wishlist (4)</h6>
      <button>Move All To Bag</button>
      </div>
      
      <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <WishlistProduct />
          </SwiperSlide>
          <SwiperSlide>
            <WishlistProduct />
          </SwiperSlide>
          <SwiperSlide>
            <WishlistProduct />
          </SwiperSlide>
          <SwiperSlide>
            <WishlistProduct />
          </SwiperSlide>
          <SwiperSlide>
            <WishlistProduct />
          </SwiperSlide>
          
        </Swiper>

    </div>
    </section>
  )
}

export default WishlistSection