"use client";

import { motion, useSpring, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useEffect, useRef, useState, useMemo } from 'react';

/**
 * Micro-Interactions Library for T3000 Pitch Deck
 * Reusable animated components for enhanced UX
 */

// Animated Counter - counts up from 0 to target value
interface AnimatedCounterProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000 });
  const [displayValue, setDisplayValue] = useState('0');

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (nodeRef.current) {
        const formatted = latest.toFixed(decimals);
        setDisplayValue(formatted);
      }
    });

    return () => unsubscribe();
  }, [springValue, decimals]);

  return (
    <span ref={nodeRef} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

// Typewriter Effect - reveals text character by character
interface TypeWriterProps {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

export function TypeWriter({
  text,
  delay = 0,
  speed = 30,
  className = '',
  onComplete,
}: TypeWriterProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex === 0) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex(1);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }

    if (currentIndex > 0 && currentIndex <= text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex > text.length && onComplete) {
      onComplete();
    }
  }, [currentIndex, text, delay, speed, onComplete]);

  return <span className={className}>{displayText}</span>;
}

// Particle Field - ambient floating particles
interface ParticleFieldProps {
  count?: number;
  className?: string;
}

// Static deterministic particle positions (prevents hydration mismatch)
const STATIC_PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: (i * 123.456) % 100,
  top: (i * 789.012) % 100,
  duration: 3 + ((i + 1) * 34.567) % 2,
  delay: ((i + 2) * 45.678) % 2,
}));

export function ParticleField({ count = 20, className = '' }: ParticleFieldProps) {
  const particles = STATIC_PARTICLES.slice(0, count);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-data-neon-cyan/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// Holographic Card - 3D card with mouse tracking
interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
}

export function HolographicCard({ children, className = '' }: HolographicCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  const rotateX = (mousePosition.y - 0.5) * -20;
  const rotateY = (mousePosition.x - 0.5) * 20;

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      animate={{
        rotateX,
        rotateY,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Holographic glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-data-neon-cyan/20 via-data-neon-violet/20 to-transparent rounded-3xl pointer-events-none"
        style={{
          opacity: 0,
        }}
        animate={{
          opacity: mousePosition.x !== 0.5 ? 0.5 : 0,
        }}
      />
    </motion.div>
  );
}

// Morphing Shape - animated SVG shape transitions
interface MorphingShapeProps {
  className?: string;
  color?: string;
}

export function MorphingShape({ className = '', color = '#06b6d4' }: MorphingShapeProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={`${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        fill={color}
        animate={{
          d: [
            'M45.8,-55.7C57.3,-45.3,63.5,-29.5,65.4,-13.4C67.3,2.7,64.8,19,56.9,32.4C49,45.8,35.6,56.3,20.4,61.4C5.2,66.5,-11.8,66.3,-27.1,60.6C-42.4,54.9,-56.1,43.7,-63.3,29.1C-70.5,14.5,-71.2,-3.5,-66.3,-19.7C-61.4,-35.9,-50.9,-50.3,-37.7,-60.3C-24.5,-70.3,-8.7,-75.8,4.9,-81.8C18.5,-87.8,34.3,-66.1,45.8,-55.7Z',
            'M39.3,-52.1C49.8,-42.4,56.7,-28.9,60.2,-14.2C63.7,0.5,63.8,16.4,57.6,29.7C51.4,43,38.9,53.7,24.8,59.9C10.7,66.1,-5,67.8,-19.5,63.4C-34,59,-47.3,48.5,-55.9,35.1C-64.5,21.7,-68.4,5.4,-66.1,-10.1C-63.8,-25.6,-55.3,-40.3,-43.3,-49.6C-31.3,-58.9,-15.7,-62.8,-0.5,-62.2C14.7,-61.6,28.8,-61.8,39.3,-52.1Z',
            'M45.8,-55.7C57.3,-45.3,63.5,-29.5,65.4,-13.4C67.3,2.7,64.8,19,56.9,32.4C49,45.8,35.6,56.3,20.4,61.4C5.2,66.5,-11.8,66.3,-27.1,60.6C-42.4,54.9,-56.1,43.7,-63.3,29.1C-70.5,14.5,-71.2,-3.5,-66.3,-19.7C-61.4,-35.9,-50.9,-50.3,-37.7,-60.3C-24.5,-70.3,-8.7,-75.8,4.9,-81.8C18.5,-87.8,34.3,-66.1,45.8,-55.7Z',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </svg>
  );
}

// Glitch Effect - cyberpunk-style text glitch
interface GlitchEffectProps {
  children: string;
  className?: string;
}

export function GlitchEffect({ children, className = '' }: GlitchEffectProps) {
  return (
    <div className={`relative ${className}`}>
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute top-0 left-0 text-data-neon-cyan opacity-70"
        animate={{
          x: [0, -2, 2, -2, 0],
          opacity: [0.7, 0.4, 0.9, 0.4, 0.7],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute top-0 left-0 text-data-neon-violet opacity-70"
        animate={{
          x: [0, 2, -2, 2, 0],
          opacity: [0.7, 0.9, 0.4, 0.9, 0.7],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
          repeatDelay: 3,
          delay: 0.1,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
}

// Magnetic Button - button that attracts to cursor
interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, className = '', onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      setPosition({
        x: distanceX * 0.3,
        y: distanceY * 0.3,
      });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={buttonRef}
      className={className}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
