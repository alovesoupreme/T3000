import { Variants } from "framer-motion";

/**
 * Global Animation System for T3000 Pitch Deck
 * Reusable Framer Motion variants for consistent animations
 */

// Fade in from bottom with customizable delay
export const fadeInUp = (delay: number = 0, duration: number = 0.6): Variants => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuad
    }
  },
});

// Fade in from left
export const slideInFromLeft = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
});

// Fade in from right
export const slideInFromRight = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  },
});

// Scale in for emphasis elements
export const scaleIn = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.34, 1.56, 0.64, 1], // easeOutBack
    }
  },
});

// Pop in with bounce
export const popIn = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 15,
      delay,
    }
  },
});

// Stagger container for child elements
export const staggerContainer = (
  staggerDelay: number = 0.1,
  delayChildren: number = 0
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// Hover lift effect for interactive cards
export const hoverLift: Variants = {
  rest: {
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    }
  },
};

// Glow pulse effect
export const glowPulse: Variants = {
  initial: {
    boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)",
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(6, 182, 212, 0.3)",
      "0 0 40px rgba(6, 182, 212, 0.6)",
      "0 0 20px rgba(6, 182, 212, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }
  },
};

// Rotate in animation
export const rotateIn = (delay: number = 0): Variants => ({
  hidden: {
    opacity: 0,
    rotate: -180,
    scale: 0,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.34, 1.56, 0.64, 1],
    }
  },
});

// Draw line animation (for SVG paths)
export const drawLine: Variants = {
  hidden: {
    pathLength: 0,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut" },
      opacity: { duration: 0.5 },
    }
  },
};

// Parallax scroll-linked motion values
export const parallaxConfig = {
  // Background elements move slower (0.5x)
  backgroundSlow: {
    inputRange: [0, 1],
    outputRange: ['0%', '50%'],
  },
  // Foreground elements move faster (1.5x)
  foregroundFast: {
    inputRange: [0, 1],
    outputRange: ['0%', '150%'],
  },
  // Opacity fade based on scroll
  fadeOnScroll: {
    inputRange: [0, 0.5, 1],
    outputRange: [1, 0.5, 0],
  },
  // Scale on scroll
  scaleOnScroll: {
    inputRange: [0, 0.5, 1],
    outputRange: [1, 1.1, 1.2],
  },
};

// Typewriter effect config
export const typewriterConfig = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

export const typewriterChar: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

// Progress bar fill animation
export const progressFill = (delay: number = 0): Variants => ({
  hidden: {
    width: "0%",
  },
  visible: {
    width: "100%",
    transition: {
      duration: 1.5,
      delay,
      ease: "easeOut",
    }
  },
});

// Card flip animation
export const cardFlip: Variants = {
  front: {
    rotateY: 0,
    transition: { duration: 0.6 },
  },
  back: {
    rotateY: 180,
    transition: { duration: 0.6 },
  },
};

// Shimmer effect for loading states
export const shimmer: Variants = {
  initial: {
    backgroundPosition: "-200% 0",
  },
  animate: {
    backgroundPosition: "200% 0",
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    }
  },
};

// Ripple effect from center
export const ripple: Variants = {
  initial: {
    scale: 0,
    opacity: 1,
  },
  animate: {
    scale: 2,
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  },
};
