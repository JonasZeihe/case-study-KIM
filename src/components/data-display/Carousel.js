import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight, FaExpand } from "react-icons/fa";
import Lightbox from "../common/Lightbox";
import { useSwipeable } from "react-swipeable";

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.xl};
  margin: 0 auto;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${({ activeIndex }) => -activeIndex * 100}%);
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: ${({ isDesktop }) => (isDesktop ? "500px" : "80vh")};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
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
  pointer-events: none;
`;

const ControlButton = styled.button`
  pointer-events: all;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: 50%;
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(2)};

  button {
    width: 12px;
    height: 12px;
    background: ${({ active, theme }) =>
      active ? theme.colors.primary.main : theme.colors.neutral.medium};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export default function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
  });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
          <ControlButton onClick={prevSlide} aria-label="Vorheriges Bild">
            <FaChevronLeft />
          </ControlButton>
          <ControlButton onClick={nextSlide} aria-label="Nächstes Bild">
            <FaChevronRight />
          </ControlButton>
        </Controls>
        <Dots>
          {slides.map((_, index) => (
            <button
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              aria-label={`Bild ${index + 1}`}
            />
          ))}
        </Dots>
      </CarouselWrapper>
      {lightboxOpen && (
        <Lightbox
          images={slides}
          currentIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
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
