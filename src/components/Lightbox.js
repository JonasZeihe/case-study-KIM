import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const LightboxOverlay = styled.div`
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

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.neutral.white};
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.accent.main};
  }
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: ${(props) => props.theme.spacing(3)};
`;

const Thumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${(props) => props.theme.borderRadius.small};
  box-shadow: ${(props) => props.theme.boxShadow.light};
  cursor: pointer;

  &:hover {
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  }
`;

// Lightbox Component
const Lightbox = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(null);

  const openLightbox = (image) => setCurrentImage(image);
  const closeLightbox = () => setCurrentImage(null);

  return (
    <>
      <ThumbnailGrid>
        {images.map((image, index) => (
          <Thumbnail
            key={index}
            src={image.src}
            alt={image.alt || `Thumbnail ${index + 1}`}
            onClick={() => openLightbox(image.src)}
          />
        ))}
      </ThumbnailGrid>

      {currentImage && (
        <LightboxOverlay onClick={closeLightbox}>
          <CloseButton onClick={closeLightbox} aria-label="Close Lightbox">
            &times;
          </CloseButton>
          <LightboxImage src={currentImage} alt="Lightbox Display" />
        </LightboxOverlay>
      )}
    </>
  );
};

// Prop Types
Lightbox.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default Lightbox;
