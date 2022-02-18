import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "../../styles.css";
import { Box, Image } from "@chakra-ui/react";

const Slider = () => {
  return (
    <>
      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
        }}
        modules={[Autoplay, Pagination, EffectFade]}
        className='mySwiper'
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Box>
            <Image src='slider\gift-sm.png' />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src='slider\pixel-sm.png' />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src='slider\redmi-sm.png' />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image src='slider\mi-sm.png' />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
