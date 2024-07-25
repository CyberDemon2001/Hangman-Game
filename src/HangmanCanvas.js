

import React from "react";

const HangmanCanvas = ({ mistakes }) => {
  const canvasWidth = 200;
  const canvasHeight = 200;
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    if (mistakes >= 1) {
      ctx.beginPath();
      ctx.moveTo(20, canvasHeight - 20);
      ctx.lineTo(canvasWidth - 20, canvasHeight - 20);
      ctx.stroke();
    }

    if (mistakes >= 2) {
      ctx.beginPath();
      ctx.arc(canvasWidth / 2, 50, 30, 0, 2 * Math.PI);
      ctx.stroke();
    }

    if (mistakes >= 2) {
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2, 80);
        ctx.lineTo(canvasWidth / 2, 140);
        ctx.stroke();
      }
  
      if (mistakes >= 3) {
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2, 100);
        ctx.lineTo(canvasWidth / 2 - 20, 120);
        ctx.stroke();
      }
  
      if (mistakes >= 4) {
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2, 100);
        ctx.lineTo(canvasWidth / 2 + 20, 120);
        ctx.stroke();
      }
  
      if (mistakes >= 5) {
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2, 140);
        ctx.lineTo(canvasWidth / 2 - 20, 160);
        ctx.stroke();
      }
  
    
      if (mistakes >= 6) {
        ctx.beginPath();
        ctx.moveTo(canvasWidth / 2, 140);
        ctx.lineTo(canvasWidth / 2 + 20, 160);
        ctx.stroke();
      }
    }, [mistakes]);

  return (
    <div className="hangman-canvas">
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
};

export default HangmanCanvas;
