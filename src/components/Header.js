/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from "react";
import { Parallax, useParallax } from "react-scroll-parallax";
import("./Header.css");

const Header = (props) => {
  const canvasRef = useRef(null);
  const width = window.innerWidth;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = 1000;

    //Animation
    let factor = 0;
    let angle = 0;
    const size = 20;
    ctx.lineWidth = 0.5;
    ctx.translate(width / 2, 325);

    const draw = () => {
      ctx.strokeStyle = "white";
      ctx.rotate((angle * Math.PI) / 180);
      ctx.strokeRect(0, 0, size + factor, size + factor);
      angle += 0 + Math.floor(Math.random() * 1.5);
      factor += 0.2 + Math.floor(Math.random());
    };

    const interval = setInterval(() => {
      draw();
      if (factor > 250) {
        clearInterval(interval);
      }
    }, 1);
  }, []);

  const parallax = useParallax({ speed: 5 });

  return (
    <div className="header">
      <h1 ref={parallax.ref} className="heading">
        Kosmorama
      </h1>
      <Parallax speed={-5}>
        <canvas id="canvas" ref={canvasRef}></canvas>
      </Parallax>
    </div>
  );
};

export default Header;
