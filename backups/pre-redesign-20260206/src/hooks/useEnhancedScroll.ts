"use client";

import { useEffect, useRef, useState, useCallback } from 'react';

const WHEEL_DELTA_THRESHOLD = 50; // pixels for trackpad sensitivity
const TRANSITION_COOLDOWN = 800; // ms to prevent rapid scrolling

export function useEnhancedScroll(totalSlides: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const deltaAccumulator = useRef(0);
  const lastTransitionTime = useRef(0);
  const containerRef = useRef<HTMLElement | null>(null);

  // Normalize wheel delta across browsers
  const normalizeDelta = useCallback((event: WheelEvent): number => {
    let delta = 0;

    // Firefox uses LINES, Chrome uses PIXELS
    if (event.deltaMode === 1) {
      // LINE mode (Firefox)
      delta = event.deltaY * 40; // Convert lines to approximate pixels
    } else {
      // PIXEL mode (Chrome, Safari)
      delta = event.deltaY;
    }

    return delta;
  }, []);

  // Smooth scroll to specific slide
  const scrollToSlide = useCallback((index: number) => {
    if (index < 0 || index >= totalSlides) return;

    const container = containerRef.current;
    if (!container) return;

    const slideHeight = window.innerHeight;
    const targetScroll = index * slideHeight;

    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    setCurrentSlide(index);
  }, [totalSlides]);

  // Handle wheel events with threshold detection
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const now = Date.now();

      // Prevent action during cooldown
      if (now - lastTransitionTime.current < TRANSITION_COOLDOWN) {
        event.preventDefault();
        return;
      }

      const normalizedDelta = normalizeDelta(event);
      deltaAccumulator.current += normalizedDelta;

      // Check if threshold exceeded
      if (Math.abs(deltaAccumulator.current) >= WHEEL_DELTA_THRESHOLD) {
        event.preventDefault();

        const direction = deltaAccumulator.current > 0 ? 1 : -1;
        const nextSlide = currentSlide + direction;

        if (nextSlide >= 0 && nextSlide < totalSlides) {
          setIsTransitioning(true);
          scrollToSlide(nextSlide);
          lastTransitionTime.current = now;

          // Reset transition state after animation
          setTimeout(() => {
            setIsTransitioning(false);
          }, TRANSITION_COOLDOWN);
        }

        // Reset accumulator
        deltaAccumulator.current = 0;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, [currentSlide, totalSlides, scrollToSlide, normalizeDelta]);

  // Track active slide with IntersectionObserver
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const slideIndex = parseInt(
            entry.target.getAttribute('data-slide-index') || '0',
            10
          );
          setCurrentSlide(slideIndex);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: [0.5],
    });

    const container = containerRef.current;
    if (container) {
      const slides = container.querySelectorAll('[data-slide-index]');
      slides.forEach((slide) => observer.observe(slide));
    }

    return () => observer.disconnect();
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isTransitioning) return;

      switch (event.key) {
        case 'ArrowDown':
        case 'PageDown':
          event.preventDefault();
          scrollToSlide(currentSlide + 1);
          break;
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault();
          scrollToSlide(currentSlide - 1);
          break;
        case 'Home':
          event.preventDefault();
          scrollToSlide(0);
          break;
        case 'End':
          event.preventDefault();
          scrollToSlide(totalSlides - 1);
          break;
        default:
          // Number keys 1-9 for direct navigation
          if (event.key >= '1' && event.key <= '9') {
            const slideIndex = parseInt(event.key, 10) - 1;
            if (slideIndex < totalSlides) {
              event.preventDefault();
              scrollToSlide(slideIndex);
            }
          }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides, isTransitioning, scrollToSlide]);

  return {
    currentSlide,
    scrollToSlide,
    isTransitioning,
    containerRef,
  };
}
