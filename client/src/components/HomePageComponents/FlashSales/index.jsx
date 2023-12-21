import "./index.scss";

// Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import Product from "../Product";

const FlashSales = ({title}) => {
  return (
    <section id="flash-sales">
      <div className="container">
        <h5>Today</h5>
        <div className="flash-sales-countdown">
          <h3>{title}</h3>
          <span>03:</span>
          <span>23:</span>
          <span>19:</span>
          <span>56</span>
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
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
          <SwiperSlide>
            <Product />
          </SwiperSlide>
        </Swiper>
      <div className="view-more">
        <button>View All Products</button>
      </div>
      </div>
    </section>
  );
};

export default FlashSales;
