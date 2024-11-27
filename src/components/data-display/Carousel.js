import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Lightbox from "../common/Lightbox";
import Button from "../common/Button";
import { useSwipeable } from "react-swipeable";

// Styled Components
const Wrapper = styled.div`
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
    max-height: ${({ theme }) => theme.breakpoints.md ? "400px" : "80vh"};
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
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => theme.spacing(3)};
  gap: ${({ theme }) => theme.spacing(1)};

  button {
    width: 10px;
    height: 10px;
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

const Carousel = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigate(1),
    onSwipedRight: () => navigate(-1),
  });

  const navigate = (direction) => {
    setActiveIndex((prev) => (prev + direction + slides.length) % slides.length);
  };

  return (
    <>
      <Wrapper {...swipeHandlers}>
        <SlideContainer activeIndex={activeIndex}>
          {slides.map((slide, index) => (
            <Slide key={index}>
              <img
                src={slide.src}
                alt={slide.alt}
                onClick={openLightbox}
              />
            </Slide>
          ))}
        </SlideContainer>
        <Controls>
          <Button variant="icon" size="medium" onClick={() => navigate(-1)}>
            <FaChevronLeft />
          </Button>
          <Button variant="icon" size="medium" onClick={() => navigate(1)}>
            <FaChevronRight />
          </Button>
        </Controls>
        <Dots>
          {slides.map((_, index) => (
            <button
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </Dots>
      </Wrapper>
      {lightboxOpen && (
        <Lightbox
          media={slides}
          currentIndex={activeIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
