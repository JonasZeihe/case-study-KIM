import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Lightbox from "../common/Lightbox";
import Carousel from "../data-display/Carousel";

// Styled Components
const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: center;
`;

const MediaItem = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  img,
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  video {
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

const MediaCaption = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.body};
  color: ${({ theme }) => theme.colors.neutral.dark};
`;

export default function MediaDisplay({ media, layout = "grid" }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  if (!media || media.length === 0) {
    console.error("MediaDisplay: No media provided.");
    return null;
  }

  return (
    <>
      {layout === "grid" && (
        <MediaGrid>
          {media.map((item, index) => (
            <MediaItem key={index} onClick={() => openLightbox(index)}>
              {item.type === "image" && (
                <img src={item.src} alt={item.alt || `Media ${index + 1}`} />
              )}
              {item.type === "video" && (
                <video controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {item.caption && <MediaCaption>{item.caption}</MediaCaption>}
            </MediaItem>
          ))}
        </MediaGrid>
      )}

      {layout === "carousel" && (
        <Carousel slides={media} />
      )}

      {lightboxOpen && (
        <Lightbox
          media={media}
          currentIndex={currentIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}

MediaDisplay.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video"]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string, // Optional for additional context
    })
  ).isRequired,
  layout: PropTypes.oneOf(["grid", "carousel"]),
};
