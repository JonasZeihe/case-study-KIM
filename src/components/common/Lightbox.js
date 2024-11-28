import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
  z-index: 9999;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, opacity 0.3s ease;

  img {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    img {
      max-height: 70vh;
    }
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === "left" ? "left: 1rem;" : "right: 1rem;")}
  z-index: 10000;
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => theme.spacing(3)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10000;
  background: ${({ theme }) => theme.colors.secondary.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => theme.spacing(3)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary.dark};
  }
`;

// Lightbox Component
const Lightbox = ({ media, currentIndex = 0, onClose }) => {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  const navigate = useCallback(
    (direction) => {
      setActiveIndex((prevIndex) =>
        (prevIndex + direction + media.length) % media.length
      );
    },
    [media.length]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") navigate(-1);
      if (e.key === "ArrowRight") navigate(1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, navigate]);

  if (!media || media.length === 0) {
    console.error("Lightbox: No media provided or invalid media.");
    return null;
  }

  const activeMedia = media[activeIndex];

  return (
    <Overlay onClick={onClose}>
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <FaTimes size={24} />
        </CloseButton>
        <img src={activeMedia.src} alt={activeMedia.alt || "Lightbox media"} />
        {media.length > 1 && (
          <>
            <NavigationButton
              onClick={() => navigate(-1)}
              direction="left"
            >
              <FaChevronLeft size={20} />
            </NavigationButton>
            <NavigationButton
              onClick={() => navigate(1)}
              direction="right"
            >
              <FaChevronRight size={20} />
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
