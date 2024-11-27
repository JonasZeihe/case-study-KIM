import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PropTypes from "prop-types";

// Keyframes for Animations
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

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
`;

// Styled Components
const Overlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease;
`;

const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.boxShadow.heavy};
  padding: ${({ theme }) => theme.spacing(6)};
  max-width: 600px;
  width: 90%;
  position: relative;
  animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: 90%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing(2)};
  right: ${({ theme }) => theme.spacing(2)};
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.neutral.dark};
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const ModalContent = styled.div`
  max-height: 70vh;
  overflow-y: auto;
`;

// React Component
const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="Close Modal">
          &times;
        </CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

// PropTypes
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
