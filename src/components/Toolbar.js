import React, { useState, useEffect } from "react";

const Toolbar = () => {
  const [y, setY] = useState(0);
  const [hideToolbar, setHideToolbar] = useState(false);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      setHideToolbar(false);
    } else if (y < window.scrollY) {
      setHideToolbar(true);
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", (e) => handleNavigation(e));

    return () => {
      window.removeEventListener("scroll", (e) => handleNavigation(e));
    };
  }, [y]);
  return (
    <>
      <div className={`toolbar ${hideToolbar ? "" : ""}`}>
        <div className="toolbar-content">
          <div className="toolbar-left-item hide-on-small-screen">Logo</div>
          <div className="toolbar-right-item">
            <p className="clic">Home</p>
            <p className="clic">About</p>
            <p className="clic">Works</p>
            <p className="clic">Contact</p>
          </div>
        </div>
        <div className="toolbar-bottom-line"></div>
      </div>
    </>
  );
};

export default Toolbar;
