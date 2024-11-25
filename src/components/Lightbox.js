import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
    transform: scale(${(props) => props.scale});
    transition: transform 0.3s ease;
    cursor: ${(props) => (props.scale > 1 ? "grab" : "zoom-in")};
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.colors.accent.main};
  color: ${(props) => props.theme.colors.neutral.white};
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  padding: ${(props) => props.theme.spacing(2)};
  z-index: 1001;

  &:hover {
    background: ${(props) => props.theme.colors.accent.dark};
  }
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: ${(props) => props.theme.spacing(3)};
  z-index: 1001;

  button {
    background: ${(props) => props.theme.colors.accent.main};
    border: none;
    border-radius: 50%;
    color: ${(props) => props.theme.colors.neutral.white};
    padding: ${(props) => props.theme.spacing(2)};
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.colors.accent.dark};
    }
  }
`;

export default function Lightbox({ image, onClose }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleZoomIn = () => setScale((prevScale) => Math.min(prevScale + 0.5, 3));
  const handleZoomOut = () => setScale((prevScale) => Math.max(prevScale - 0.5, 1));
  const resetZoom = () => setScale(1);

  if (!image || !image.src) {
    console.error("Lightbox: Invalid image data");
    return null;
  }

  return (
    <LightboxOverlay onClick={onClose}>
      <LightboxContent
        scale={scale}
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <img
          src={image.src}
          alt={image.alt || "Lightbox Image"}
        />
        <ZoomControls>
          <button onClick={handleZoomOut} aria-label="Zoom Out">
            -
          </button>
          <button onClick={handleZoomIn} aria-label="Zoom In">
            +
          </button>
          <button onClick={resetZoom} aria-label="Reset Zoom">
            ⟳
          </button>
        </ZoomControls>
      </LightboxContent>
    </LightboxOverlay>
  );
}

Lightbox.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
