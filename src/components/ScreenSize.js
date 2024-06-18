import React, { useState, useEffect } from 'react';

const ScreenSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Añadir el event listener
    window.addEventListener('resize', handleResize);

    // Eliminar el event listener en la limpieza
    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que el effect solo se ejecute al montar y desmontar

  return (
    <div>
      <p>Width: {windowSize.width}px</p>
      <p>Height: {windowSize.height}px</p>
    </div>
  );
};

export default ScreenSize;