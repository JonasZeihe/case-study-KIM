import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Lightbox from '../lightbox/Lightbox';

// Styled Components
const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing(2)};
  justify-content: center;
  width: 100%; /* Ensures the grid spans the Wrapper */
`;

const MediaItem = styled.div`
  cursor: ${({ isClickable }) => (isClickable ? 'pointer' : 'default')};
  border: none;
  background: ${({ theme }) => theme.colors.background.light};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: ${({ isClickable }) =>
      isClickable ? 'translateY(-5px)' : 'none'};
    box-shadow: ${({ theme, isClickable }) =>
      isClickable ? theme.boxShadow.medium : theme.boxShadow.light};
  }

  img,
  video {
    display: block; /* Ensures no extra space around media */
    width: 100%;
    height: 100%; /* Ensures the media fills the container */
    object-fit: cover; /* Crops if necessary to maintain aspect ratio */
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  video::-webkit-media-controls {
    opacity: 1; /* Ensures video controls are always visible */
  }
`;

const MediaCaption = styled.div`
  margin-top: ${({ theme }) => theme.spacing(3)};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.medium};
`;

export default function MediaDisplay({ media }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    if (media[index].type === 'image') {
      setCurrentIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <MediaGrid>
        {media.map(
          (
            { type, src, alt, caption, trackSrc = '', trackLang = 'en' },
            index
          ) => (
            <MediaItem
              key={src}
              isClickable={type === 'image'}
              onClick={() => openLightbox(index)}
              aria-label={`Open ${type === 'image' ? 'image' : 'video'} ${alt || `Media ${index + 1}`}`}
            >
              {type === 'image' && (
                <img src={src} alt={alt || `Media ${index + 1}`} />
              )}
              {type === 'video' && (
                <video controls aria-label={alt || `Video ${index + 1}`}>
                  <source src={src} type="video/mp4" />
                  <track
                    src={trackSrc}
                    kind="captions"
                    srcLang={trackLang}
                    label={`${trackLang} subtitles`}
                    default
                  />
                  Your browser does not support this video format.
                </video>
              )}
              {caption && <MediaCaption>{caption}</MediaCaption>}
            </MediaItem>
          )
        )}
      </MediaGrid>

      {lightboxOpen && (
        <Lightbox
          media={media.filter(({ type }) => type === 'image')} // Only show images in Lightbox
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
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
      trackSrc: PropTypes.string, // Optional: Pfad zu den Untertitel-Dateien
      trackLang: PropTypes.string, // Optional: Sprache der Untertitel
    })
  ).isRequired,
};
