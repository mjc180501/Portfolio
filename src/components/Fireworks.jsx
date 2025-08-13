import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js';

const FireworksComponent = ({ onFinish }) => {
  const containerRef = useRef(null);
  const fireworksRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        intensity: 50,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 0,
          max: 360
        },
        delay: {
          min: 30,
          max: 60
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        speed: 2,
        decay: {
          min: 0.01,
          max: 0.03
        }
      });
      fireworksRef.current = fireworks;
      fireworks.start();

      // Automatically stop after a few seconds
      const timer = setTimeout(() => {
        fireworks.stop();
        onFinish();
      }, 5000);
      return () => {
        fireworks.stop();
        clearTimeout(timer);
      };
    }
  }, [onFinish]);

  return (
    <div ref={containerRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 9999, pointerEvents: 'none' }}>
    </div>
  );
};

export default FireworksComponent;