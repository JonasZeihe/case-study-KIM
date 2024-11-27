import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * SmoothScroller - Smoothly scrolls to a section of the page by ID.
 * Props:
 * - `targetId` (string): The ID of the target element to scroll to.
 * - `children` (node): The content of the scroller, e.g., a button or link.
 * - `className` (string, optional): Additional classes for styling.
 * - `scrollOffset` (number, optional): Optional offset for fine-tuning the scroll position.
 */
const SmoothScroller = ({ targetId, children, className, scrollOffset = 0 }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const yOffset = scrollOffset;
      const yPosition =
        target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  return (
    <ScrollerWrapper
      className={className}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') handleClick(e);
      }}
    >
      {children}
    </ScrollerWrapper>
  );
};

SmoothScroller.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  scrollOffset: PropTypes.number,
};

export default SmoothScroller;

// Optional Styled Wrapper for additional styling
const ScrollerWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  color: inherit;
  &:focus {
    outline: 2px solid ${({ theme }) => theme.colors.accent.main};
  }
`;
