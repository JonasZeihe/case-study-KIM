import React from "react";
import PropTypes from "prop-types";

/**
 * SmoothScroller - A reusable component for smooth scrolling to a specific section.
 *
 * Props:
 * - `targetId` (string): The ID of the section to scroll to.
 * - `children` (node): The content inside the scroll trigger, e.g., a button or link.
 * - `className` (string, optional): Additional classes for styling.
 */
const SmoothScroller = ({ targetId, children, className }) => {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={className} onClick={handleClick} role="button" tabIndex={0} onKeyPress={handleClick}>
      {children}
    </div>
  );
};

SmoothScroller.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default SmoothScroller;
