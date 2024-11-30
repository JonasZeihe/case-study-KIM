import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Keyframes für Animationen
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled Components
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  animation: ${fadeIn} 0.3s ease;

  img,
  video {
    max-width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    img,
    video {
      max-height: 70vh;
    }
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'left' ? 'left: 1rem;' : 'right: 1rem;')}
  z-index: 10000;
  background: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.8);
  color: ${({ theme }) => theme.colors.primary.dark};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  padding: ${({ theme }) => theme.spacing(2)};
  cursor: pointer;
  transition:
    background 0.3s ease,
    transform 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    transform: scale(1.1);
  }
`;

// Lightbox Component
function Lightbox({ media, currentIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);
  const closeButtonRef = useRef();

  const navigate = useCallback(
    (direction) => {
      setActiveIndex(
        (prevIndex) => (prevIndex + direction + media.length) % media.length
      );
    },
    [media.length]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, navigate]);

  useEffect(() => {
    document.body.style.overflow = 'hidden'; // Blockiert Scrollen der Webseite
    return () => {
      document.body.style.overflow = ''; // Wiederherstellen
    };
  }, []);

  const activeMedia = media[activeIndex];

  return ReactDOM.createPortal(
    <Overlay onClick={onClose} aria-modal="true" role="dialog">
      <ContentWrapper onClick={(e) => e.stopPropagation()}>
        <CloseButton
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close Lightbox"
        >
          <FaTimes size={20} />
        </CloseButton>
        {activeMedia.type === 'image' ? (
          <img
            src={activeMedia.src}
            alt={activeMedia.alt || 'Lightbox media'}
          />
        ) : (
          <video src={activeMedia.src} controls>
            <track kind="captions" srcLang="en" label="English" default />
          </video>
        )}
        {media.length > 1 && (
          <>
            <NavigationButton
              onClick={() => navigate(-1)}
              direction="left"
              aria-label="Previous"
            >
              <FaChevronLeft size={18} />
            </NavigationButton>
            <NavigationButton
              onClick={() => navigate(1)}
              direction="right"
              aria-label="Next"
            >
              <FaChevronRight size={18} />
            </NavigationButton>
          </>
        )}
      </ContentWrapper>
    </Overlay>,
    document.body // Hier wird die Lightbox direkt in den Body gerendert
  );
}

Lightbox.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

Lightbox.defaultProps = {
  currentIndex: 0,
};

export default Lightbox;
