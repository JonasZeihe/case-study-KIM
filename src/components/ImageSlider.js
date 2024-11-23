import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// Styled Components
const SliderContainer = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.md};
  margin: 0 auto;

  .swiper {
    padding: ${(props) => props.theme.spacing(4)};
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${(props) => props.theme.colors.primary.main};
  }

  .swiper-pagination-bullet {
    background: ${(props) => props.theme.colors.primary.main};
  }
`;

const SlideImage = styled.img`
  width: 100%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.light};
`;

// ImageSlider Component
const ImageSlider = ({ images }) => {
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        loop
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SlideImage src={image.src} alt={image.alt || `Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderContainer>
  );
};

// Prop Types
ImageSlider.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default ImageSlider;
