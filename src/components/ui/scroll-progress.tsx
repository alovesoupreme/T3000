"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

interface ScrollProgressProps {
  totalSlides: number;
  currentSlide: number;
  onSlideClick: (index: number) => void;
}

export function ScrollProgress({ totalSlides, currentSlide, onSlideClick }: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const progressHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
      {/* Progress bar background */}
      <div className="relative w-0.5 h-64 bg-white/10 rounded-full overflow-hidden">
        {/* Active progress */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-data-neon-cyan to-data-neon-violet rounded-full"
          style={{
            height: progressHeight,
          }}
        />
      </div>

      {/* Slide indicators */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col gap-4 h-64 justify-between py-1">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => onSlideClick(index)}
            className="group relative w-3 h-3 flex items-center justify-center"
            aria-label={`Go to slide ${index + 1}`}
          >
            {/* Dot */}
            <motion.div
              className={`w-2 h-2 rounded-full border transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-data-neon-cyan border-data-neon-cyan scale-125'
                  : 'bg-transparent border-white/30 group-hover:border-white/60 group-hover:scale-110'
              }`}
              animate={{
                scale: currentSlide === index ? 1.25 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            />

            {/* Glow effect on active slide */}
            {currentSlide === index && (
              <motion.div
                className="absolute inset-0 w-2 h-2 rounded-full bg-data-neon-cyan opacity-50 blur-sm"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            {/* Tooltip on hover */}
            <span className="absolute left-full ml-4 px-2 py-1 bg-deep-void border border-white/10 rounded text-xs text-white/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              Slide {index + 1}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
