import React from "react";
import PropTypes from "prop-types";

const SmoothScroller = ({ targetId, children }) => {
  const handleClick = (e) => {
    e.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) {
      console.error(`SmoothScroller: Kein Element mit ID "${targetId}" gefunden.`);
      return;
    }

    // Einfacher Fallback zu `scrollIntoView`
    if ("scrollIntoView" in target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn("scrollIntoView nicht unterstützt, normales Scrollen wird verwendet.");
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick(e);
      }}
    >
      {children}
    </div>
  );
};

SmoothScroller.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default SmoothScroller;
