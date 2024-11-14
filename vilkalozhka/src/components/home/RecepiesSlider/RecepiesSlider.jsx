import Card from "../../Card/Card";
import Container from "../../Сontainer/Сontainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";

import "swiper/css/scrollbar";

import "../RecepiesSlider/recepiesSlider.scss";

const RecepiesSlider = () => {
  const slides = Array.from({ length: 12 }, (_, i) => (
    <SwiperSlide key={i}><Card/> </SwiperSlide>
  ));
  return (
    <Container>
      <div className="recipesSlider__inner">
        <h2>
          Найдите для себя что-то <span>новое</span>
        </h2>
        <div>
        <Swiper
          modules={[ Scrollbar]}
          spaceBetween={24}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="recipes"
        >
          {slides}
          {/* <SwiperSlide>1111</SwiperSlide>
          <SwiperSlide>222</SwiperSlide> */}
          
        </Swiper>
        </div>
        {/* <div className="slider__items">
          <Card />
        </div> */}
      </div>
    </Container>
  );
};

export default RecepiesSlider;
