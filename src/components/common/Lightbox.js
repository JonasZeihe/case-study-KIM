import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../common/Button";

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

const NavigationButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === "left" ? "left: 1rem;" : "right: 1rem;")}
  z-index: 1001;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1001;
`;

// Lightbox Component
const Lightbox = ({ media, currentIndex = 0, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose]);

  const navigate = (direction) => {
    setActiveIndex((prevIndex) =>
      (prevIndex + direction + media.length) % media.length
    );
  };

  if (!media.length) {
    console.error("Lightbox: media prop is empty or invalid");
    return null;
  }

  const activeMedia = media[activeIndex];

  return (
    <Overlay onClick={onClose}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton variant="icon" size="large" onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <img src={activeMedia.src} alt={activeMedia.alt || "Lightbox Media"} />
        {media.length > 1 && (
          <>
            <NavigationButton
              variant="icon"
              size="large"
              onClick={() => navigate(-1)}
              direction="left"
            >
              <FaChevronLeft />
            </NavigationButton>
            <NavigationButton
              variant="icon"
              size="large"
              onClick={() => navigate(1)}
              direction="right"
            >
              <FaChevronRight />
            </NavigationButton>
          </>
        )}
      </ContentWrapper>
    </Overlay>
  );
};

Lightbox.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
