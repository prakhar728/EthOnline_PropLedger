import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Box, Image, Text } from "@chakra-ui/react";

const SlideShow = () => {
  const slides = [
    {
      id: 1,
      image: "./houseForSale.svg",
      text: "Slide 1 Text",
    },
    {
      id: 2,
      image: "./houseForSale.svg",
      text: "Slide 2 Text",
    },
    {
      id: 3,
      image: "./houseForSale.svg",
      text: "Slide 3 Text",
    },
    // Add more slides as needed
  ];

  return (
    <Swiper
      spaceBetween={7}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      style={{"position":"relative"}}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Box
            bg="transparent"
            p={4}
            textAlign="center"
            display={"flex"}
            alignItems={"center"}
          >
            <Image src={slide.image} alt={`Slide ${slide.id}`} boxSize={"600px"} />
            <Text mt={2}>{slide.text}</Text>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SlideShow;
