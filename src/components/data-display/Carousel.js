import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import Lightbox from '../common/Lightbox';
import Button from '../common/Button';

// Styled Components
const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${({ theme }) => theme?.breakpoints?.xl || '1200px'};
  margin: 0 auto;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(calc(${({ activeIndex }) => -activeIndex} * 100%));
`;

const Slide = styled.div`
  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: ${({ theme }) => (theme?.breakpoints?.md ? '400px' : '80vh')};
    border-radius: ${({ theme }) => theme?.borderRadius?.medium || '8px'};
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
  margin-top: ${({ theme }) => theme?.spacing?.(3) || '12px'};
  gap: ${({ theme }) => theme?.spacing?.(1) || '8px'};

  button {
    width: 10px;
    height: 10px;
    background: ${({ isActive, theme }) =>
      isActive
        ? theme?.colors?.primary?.main || '#007BFF'
        : theme?.colors?.neutral?.medium || '#CCCCCC'};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme?.colors?.primary?.dark || '#0056b3'};
    }
  }
`;

// Carousel Component
function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => setLightboxOpen(true);

  const navigate = (direction) => {
    setActiveIndex(
      (prev) => (prev + direction + slides.length) % slides.length
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => navigate(1),
    onSwipedRight: () => navigate(-1),
  });

  return (
    <>
      <Wrapper {...swipeHandlers}>
        <SlideContainer activeIndex={activeIndex}>
          {slides.map((slide, index) => (
            <Slide key={slide.id || `${slide.src}-${index}`}>
              <img
                src={slide.src}
                alt={slide.alt || `Slide ${index + 1}`}
                onClick={openLightbox}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openLightbox();
                }}
              />
            </Slide>
          ))}
        </SlideContainer>
        <Controls>
          <Button
            type="button"
            variant="icon"
            size="medium"
            onClick={() => navigate(-1)}
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </Button>
          <Button
            type="button"
            variant="icon"
            size="medium"
            onClick={() => navigate(1)}
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </Button>
        </Controls>
        <Dots>
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              isActive={index === activeIndex} // Prop statt "active"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
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
}

// Prop Types
Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Eindeutige ID für Schlüssel
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
