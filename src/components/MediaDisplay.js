import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaExpand, FaPlay, FaPause } from "react-icons/fa";
import Lightbox from "./Lightbox";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: center;
`;

const MediaContainer = styled.div`
  position: relative;
  width: ${({ layout }) => (layout === "grid" ? "calc(33.33% - 1rem)" : "100%")};
  max-width: ${({ layout }) => (layout === "grid" ? "300px" : "none")};
  aspect-ratio: 16 / 9;
  background: ${({ theme }) => theme.colors.neutral.light};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.boxShadow.light};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }
`;

const MediaElement = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
`;

const AudioElement = styled.audio`
  width: 100%;
  height: auto;
`;

const FullscreenButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  background: ${({ theme }) => theme.colors.accent.main};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.neutral.white};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.accent.dark};
  }
`;

export default function MediaDisplay({ media, layout = "grid" }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const openLightbox = (index) => {
    setActiveMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <Wrapper>
        {media.map((item, index) => (
          <MediaContainer
            key={index}
            layout={layout}
            onClick={() => openLightbox(index)}
          >
            {item.type === "image" && (
              <MediaElement
                src={item.src}
                alt={item.alt || `Media ${index + 1}`}
                loading="lazy"
              />
            )}
            {item.type === "video" && (
              <VideoElement controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </VideoElement>
            )}
            {item.type === "audio" && (
              <AudioElement controls>
                <source src={item.src} type="audio/mpeg" />
                Your browser does not support the audio element.
              </AudioElement>
            )}
            <FullscreenButton>
              <FaExpand />
            </FullscreenButton>
          </MediaContainer>
        ))}
      </Wrapper>
      {lightboxOpen && (
        <Lightbox
          images={media.filter((item) => item.type === "image")}
          currentIndex={activeMediaIndex}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}

MediaDisplay.propTypes = {
  media: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.oneOf(["image", "video", "audio"]).isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string,
    })
  ).isRequired,
  layout: PropTypes.oneOf(["grid", "carousel"]),
};
