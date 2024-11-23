import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Styled Components
const Overlay = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: ${(props) => props.theme.colors.neutral.white};
  border-radius: ${(props) => props.theme.borderRadius.large};
  box-shadow: ${(props) => props.theme.boxShadow.heavy};
  padding: ${(props) => props.theme.spacing(6)};
  max-width: 500px;
  width: 90%;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: ${(props) => props.theme.spacing(2)};
  right: ${(props) => props.theme.spacing(2)};
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.neutral.dark};
  cursor: pointer;
`;

const ModalContent = styled.div`
  max-height: 70vh;
  overflow-y: auto;
`;

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <Overlay isOpen={isOpen} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ModalContent>{children}</ModalContent>
      </ModalContainer>
    </Overlay>
  );
};

// Prop Types
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
