import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaTimes, FaPlus, FaMinus, FaExpand, FaCompress, FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Styled Components
const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const LightboxContent = styled.div`
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
    transform: scale(${({ scale }) => scale});
    transition: transform 0.3s ease;
    cursor: ${({ scale }) => (scale > 1 ? "grab" : "zoom-in")};
  }

  video {
    max-width: 100%;
    max-height: 80vh;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};
  background: ${({ theme }) => theme.colors.accent.main};
  color: ${({ theme }) => theme.colors.neutral.white};
  border: none;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing(2)};
  z-index: 1001;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.dark};
  }
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(6)};
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  z-index: 1001;

  button {
    background: ${({ theme }) => theme.colors.primary.main};
    border: none;
    border-radius: 50%;
    color: ${({ theme }) => theme.colors.neutral.white};
    padding: ${({ theme }) => theme.spacing(2)};
    font-size: 1.5rem;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

export default function Lightbox({ media, currentIndex, onClose }) {
  const [scale, setScale] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(currentIndex || 0);

  const activeMedia = media[activeIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prevMedia();
      if (e.key === "ArrowRight") nextMedia();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, onClose]);

  const handleZoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.5, 3));
  const handleZoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.5, 1));
  const resetZoom = () => setScale(1);

  const toggleFullscreen = () => setFullscreen((prev) => !prev);

  const prevMedia = () => setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  const nextMedia = () => setActiveIndex((prev) => (prev + 1) % media.length);

  if (!media || media.length === 0) {
    console.error("Lightbox: Invalid media data");
    return null;
  }

  return (
    <LightboxOverlay onClick={onClose}>
      <LightboxContent
        scale={scale}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: fullscreen ? "100%" : "auto",
          height: fullscreen ? "100%" : "auto",
        }}
      >
        <CloseButton onClick={onClose} aria-label="Schließen">
          <FaTimes />
        </CloseButton>
        {activeMedia.type === "image" && (
          <img
            src={activeMedia.src}
            alt={activeMedia.alt || "Lightbox Media"}
          />
        )}
        {activeMedia.type === "video" && (
          <video controls>
            <source src={activeMedia.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        <ZoomControls>
          <button onClick={prevMedia} aria-label="Vorheriges Medium">
            <FaChevronLeft />
          </button>
          <button onClick={handleZoomOut} aria-label="Verkleinern">
            <FaMinus />
          </button>
          <button onClick={handleZoomIn} aria-label="Vergrößern">
            <FaPlus />
          </button>
          <button onClick={resetZoom} aria-label="Zoom zurücksetzen">
            ⟳
          </button>
          <button onClick={toggleFullscreen} aria-label="Vollbild umschalten">
            {fullscreen ? <FaCompress /> : <FaExpand />}
          </button>
          <button onClick={nextMedia} aria-label="Nächstes Medium">
            <FaChevronRight />
          </button>
        </ZoomControls>
      </LightboxContent>
    </LightboxOverlay>
  );
}

Lightbox.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  currentIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};
