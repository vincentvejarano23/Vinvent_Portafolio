import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { StylusIcon } from './icons/StylusIcon';

// HACK: Workaround for framer-motion type errors.
const m = motion as any;

// A single particle component
const Particle = ({ x, y }: { x: number, y: number }) => (
  <m.div
    className="w-2 h-2 bg-lime-400 rounded-full absolute"
    style={{
      top: 0,
      left: 0,
      x: x - 4,
      y: y - 4,
    }}
    initial={{ opacity: 1, scale: 1 }}
    animate={{ opacity: 0, scale: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  />
);

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [angle, setAngle] = useState(0);
  const [particles, setParticles] = useState<{ id: number, x: number, y: number }[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const lastPositionRef = useRef({ x: -100, y: -100 });
  const lastTimeRef = useRef(Date.now());
  const particleId = useRef(0);
  const requestRef = useRef<number | null>(null);

  const onMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });

    const target = e.target as HTMLElement;
    if (target.closest('a, button, [data-interactive="true"]')) {
      setIsHovering(true);
    } else {
      setIsHovering(false);
    }
  }, []);

  useEffect(() => {
    const onMouseEnter = () => setVisible(true);
    const onMouseLeave = () => setVisible(false);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [onMouseMove]);

  useEffect(() => {
    const animate = () => {
      const lastPos = lastPositionRef.current;
      const dx = position.x - lastPos.x;
      const dy = position.y - lastPos.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        setAngle(Math.atan2(dy, dx) * (180 / Math.PI) + 45); // +45 to orient the stylus
        lastPositionRef.current = position;
        
        const now = Date.now();
        if (now - lastTimeRef.current > 16) { // Throttle particle creation
          setParticles((prev) => [
            ...prev.slice(-20), // Keep max 20 particles
            { id: particleId.current++, x: position.x, y: position.y }
          ]);
          lastTimeRef.current = now;
        }
      }
      
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if(requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [position]);

  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 1,
      filter: "drop-shadow(0 0 2px rgba(163, 230, 53, 0.4))",
    },
    hover: {
      scale: 1.2,
      opacity: 1,
      filter: "drop-shadow(0 0 8px rgba(163, 230, 53, 0.8))",
    }
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999]"
      style={{ display: visible ? 'block' : 'none' }}
    >
      {/* Particle Trail */}
      {particles.map((p) => (
        <Particle key={p.id} x={p.x} y={p.y} />
      ))}
      
      {/* Stylus Cursor */}
      <m.div
        variants={cursorVariants}
        animate={isHovering ? 'hover' : 'default'}
        style={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 40 }}
        className="fixed top-0 left-0"
      >
        <m.div
          className="-translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: angle }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <StylusIcon className="w-6 h-6 text-lime-400" />
        </m.div>
      </m.div>
    </div>
  );
};

export default CustomCursor;