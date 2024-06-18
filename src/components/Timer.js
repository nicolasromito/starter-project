import React, { useState, useEffect } from "react";

// Efecto de maquina de escribir
// delay = el tiempo antes de cambiar la clase
// children = la etiqueta que se va a mostrar
// animationClass1 = la clase luego del timer
// animationClass2 = la clase antes del timer
export const Timer = ({ delay, children, animationClass1, animationClass2 }) => {
  const [showContent, setShowContent] = useState(false);

  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const imageTimer = setTimeout(() => {
      setShowImage(true);
    }, delay);

    return () => {
      clearTimeout(imageTimer);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowContent(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return <div className={showImage ? animationClass1 : animationClass2}>{showContent ? children : null}</div>;
};
