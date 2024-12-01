import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Lightbox from '../common/Lightbox';

// Styled Components
const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
  margin: 0 auto;
`;

const MediaItem = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  img,
  video {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }
`;

const MediaCaption = styled.div`
  margin-top: ${({ theme }) => theme.spacing(2)};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.fontSize.small};
  color: ${({ theme }) => theme.colors.neutral.medium};
`;

export default function MediaDisplay({ media }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <MediaGrid>
        {media.map(
          ({ type, src, alt, caption, trackSrc, trackLang }, index) => (
            <MediaItem
              key={src}
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
                    src={trackSrc || ''}
                    kind="captions"
                    srcLang={trackLang || 'en'}
                    label={trackLang ? `${trackLang} subtitles` : 'English'}
                    default={!trackSrc} // Markiere den Dummy-Track als Standard
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
      type: PropTypes.oneOf(['image', 'video']).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
      caption: PropTypes.string,
      trackSrc: PropTypes.string, // Optional: Pfad zu den Untertitel-Dateien
      trackLang: PropTypes.string, // Optional: Sprache der Untertitel
    })
  ).isRequired,
};
