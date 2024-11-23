import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const GalleryContainer = styled.div`
  display: grid;
  gap: ${(props) => props.theme.spacing(4)};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin: ${(props) => props.theme.spacing(4)} 0;
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${(props) => props.theme.boxShadow.medium};
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const LightboxOverlay = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LightboxImage = styled.img`
  max-width: 90%;
  max-height: 80%;
  border-radius: ${(props) => props.theme.borderRadius.medium};
  box-shadow: ${(props) => props.theme.boxShadow.heavy};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.neutral.white};
  cursor: pointer;
`;

// ImageGallery Component
const ImageGallery = ({ images }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  return (
    <>
      <GalleryContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index} onClick={() => openLightbox(image.src)}>
            <img src={image.src} alt={image.alt || `Gallery Image ${index + 1}`} />
          </ImageWrapper>
        ))}
      </GalleryContainer>
      <LightboxOverlay isOpen={lightboxOpen} onClick={closeLightbox}>
        <CloseButton onClick={closeLightbox}>&times;</CloseButton>
        {selectedImage && <LightboxImage src={selectedImage} alt="Lightbox Image" />}
      </LightboxOverlay>
    </>
  );
};

// Prop Types
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
};

export default ImageGallery;
