import { Box } from "@chakra-ui/react"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CarouselItem } from "./CarouselItem"

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export function Carousel() {

  return (
    <Box
      h="28.125rem"
      pr="100px"
      pl="100px">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable": true
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <CarouselItem
            imageSrc="/images/carousel_background/north_america.jpg"
            title="América do Norte"
            description="O continente mais antigo."
            linkTo="/continent/north-america"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            imageSrc="/images/carousel_background/south_america.jpg"
            title="América do Sul"
            description="O continente mais antigo."
            linkTo="/continent/south-america"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            imageSrc="/images/carousel_background/asia.jpg"
            title="Ásia"
            description="O maior continente."
            linkTo="/continent/asia"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            imageSrc="/images/carousel_background/africa.jpg"
            title="África"
            description="O continente mais antigo."
            linkTo="/continent/africa"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            imageSrc="/images/carousel_background/europe.jpg"
            title="Europa"
            description="O continente mais antigo."
            linkTo="/continent/europe"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CarouselItem
            imageSrc="/images/carousel_background/oceania.jpg"
            title="Oceania"
            description="O continente mais antigo."
            linkTo="/continent/oceania"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}