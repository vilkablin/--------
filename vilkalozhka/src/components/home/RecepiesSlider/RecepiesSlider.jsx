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
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            680: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            900:{
              slidesPerView: 4,
              spaceBetween: 40
            }
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="recipes"
        >
          {slides}
        

          
        </Swiper>
        </div>

      </div>
    </Container>
  );
};

export default RecepiesSlider;
