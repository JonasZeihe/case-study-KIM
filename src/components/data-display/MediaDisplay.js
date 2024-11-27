import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { FaExpand, FaPlay, FaPause } from "react-icons/fa";
import Lightbox from "../common/Lightbox";
import Card from "./Card";

const MediaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing(4)};
  justify-content: center;
`;

const MediaContent = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.medium};
  }

  img,
  video,
  audio {
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borderRadius.medium};
    object-fit: cover;
  }
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
      <MediaGrid>
        {media.map((item, index) => (
          <Card key={index} layout={layout}>
            <MediaContent onClick={() => openLightbox(index)}>
              {item.type === "image" && <img src={item.src} alt={item.alt || `Media ${index + 1}`} />}
              {item.type === "video" && (
                <video controls>
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {item.type === "audio" && (
                <audio controls>
                  <source src={item.src} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              )}
              <FullscreenButton>
                <FaExpand />
              </FullscreenButton>
            </MediaContent>
          </Card>
        ))}
      </MediaGrid>
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
  layout: PropTypes.oneOf(["grid", "carousel"]), // Future-proofing for different layouts
};
