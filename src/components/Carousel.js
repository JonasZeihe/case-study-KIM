import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled Components
const CarouselWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: ${(props) => props.theme.breakpoints.xl};
  margin: ${(props) => props.theme.spacing(4)} auto;
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.boxShadow.medium};
  background: ${(props) => props.theme.colors.background.light};
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
    max-height: 500px;
    border-radius: ${(props) => props.theme.borderRadius.medium};
    cursor: pointer;
    box-shadow: ${(props) => props.theme.boxShadow.light};
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

  button {
    pointer-events: all;
    background: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.neutral.white};
    border: none;
    border-radius: 50%;
    padding: ${(props) => props.theme.spacing(2)};
    cursor: pointer;
    font-size: 1.5rem;
    box-shadow: ${(props) => props.theme.boxShadow.medium};
    transition: background 0.3s ease, transform 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.primary.dark};
      transform: scale(1.1);
    }
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${(props) => props.theme.spacing(4)};
  gap: ${(props) => props.theme.spacing(2)};
  button {
    width: 12px;
    height: 12px;
    background: ${(props) =>
      props.active ? props.theme.colors.primary.main : props.theme.colors.neutral.medium};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${(props) => props.theme.colors.primary.dark};
    }
  }
`;

// Carousel Component
export default function Carousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 4000);
    return () => clearInterval(autoplay);
  }, []);

  return (
    <CarouselWrapper>
      <SlideContainer activeIndex={activeIndex}>
        {slides.map((slide, index) => (
          <Slide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              onClick={() => window.open(slide.src, "_blank")} // Open in new tab
            />
          </Slide>
        ))}
      </SlideContainer>
      <Controls>
        <button onClick={prevSlide} aria-label="Previous Slide">
          ◀
        </button>
        <button onClick={nextSlide} aria-label="Next Slide">
          ▶
        </button>
      </Controls>
      <Dots>
        {slides.map((_, index) => (
          <button
            key={index}
            active={activeIndex === index}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </Dots>
    </CarouselWrapper>
  );
}
