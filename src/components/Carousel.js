import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSwipeable } from "react-swipeable";
import Lightbox from "./Lightbox";

const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl};
  margin: auto;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => -props.activeIndex * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: ${(props) => (props.isDesktop ? "500px" : "80vh")};
    border-radius: ${(props) => props.theme.borderRadius.medium};
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  justify-content: space-between;
  width: 100%;
  transform: translateY(-50%);
`;

const ControlButton = styled.button`
  background: ${(props) => props.theme.colors.primary.main};
  color: ${(props) => props.theme.colors.neutral.white};
  border: none;
  border-radius: 50%;
  padding: ${(props) => props.theme.spacing(2)};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.primary.dark};
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing(3)};
  gap: ${(props) => props.theme.spacing(1)};

  button {
    width: 12px;
    height: 12px;
    background: ${(props) =>
      props.active ? props.theme.colors.primary.main : props.theme.colors.neutral.medium};
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.primary.dark};
    }
  }
`;

export default function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setActiveIndex((prev) => (prev + 1) % slides.length),
    onSwipedRight: () =>
      setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length),
  });

  return (
    <>
      <CarouselWrapper {...swipeHandlers}>
        <SlideContainer activeIndex={activeIndex}>
          {slides.map((slide, index) => (
            <Slide key={index} isDesktop={window.innerWidth >= 768}>
              <img
                src={slide.src}
                alt={slide.alt}
                onClick={openLightbox}
              />
            </Slide>
          ))}
        </SlideContainer>
        <Controls>
          <ControlButton onClick={() => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)}>
            ◀
          </ControlButton>
          <ControlButton onClick={() => setActiveIndex((prev) => (prev + 1) % slides.length)}>
            ▶
          </ControlButton>
        </Controls>
        <Dots>
          {slides.map((_, index) => (
            <button
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </Dots>
      </CarouselWrapper>
      {lightboxOpen && (
        <Lightbox
        image={slides[activeIndex]} // Übergabe des aktuellen Bildes
        onClose={() => setLightboxOpen(false)} // Schließen
      />
      
      
      )}
    </>
  );
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};
