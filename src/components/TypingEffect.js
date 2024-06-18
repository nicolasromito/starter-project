import React, { useState, useEffect } from "react";
import UseInterval from './UseInterval.js'


// Efecto de maquina de escribir 
// 1 = h1
// 2 = h2
export const TypingEffect = ({ text, speed, type, initialDelay }) => {
    const [index, setIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);
  
    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setStartTyping(true);
      }, initialDelay);
  
      return () => clearTimeout(timeoutId);
    }, [initialDelay]);
  
    UseInterval(
      () => {
        if (startTyping && index < text.length) {
          setIndex((prev) => prev + 1);
        }
      },
      startTyping ? speed : null
    );
  
    if (type === 1) {
      return (
        <h1 style={{ color: "rgb(38, 145, 202)" }}>{text.slice(0, index)}</h1>
      );
    } else if (type === 2) {
      return <h2>{text.slice(0, index)}</h2>;
    }
  };