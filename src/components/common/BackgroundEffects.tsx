import React, { useEffect, useRef, useState } from 'react';

export const BackgroundEffects: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridSpotlightRef = useRef<HTMLDivElement>(null);
  
  const targetPos = useRef({ x: -1000, y: -1000 });
  const currentPos = useRef({ x: -1000, y: -1000 });
  const isVisible = useRef(false);
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable mouse-following on devices with fine pointer (mouse/trackpad)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsDesktop(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    mediaQuery.addEventListener('change', handleMediaChange);

    if (!mediaQuery.matches) {
      return () => {
        mediaQuery.removeEventListener('change', handleMediaChange);
      };
    }

    // Initialize position to center of screen once on load
    targetPos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 3
    };
    currentPos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 3
    };

    const onMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible.current) {
        isVisible.current = true;
        if (glowRef.current) glowRef.current.style.opacity = '1';
        if (gridSpotlightRef.current) gridSpotlightRef.current.style.opacity = '1';
      }
    };

    const onMouseLeave = () => {
      isVisible.current = false;
      if (glowRef.current) glowRef.current.style.opacity = '0.35';
      if (gridSpotlightRef.current) gridSpotlightRef.current.style.opacity = '0.2';
    };

    const onMouseEnter = () => {
      isVisible.current = true;
      if (glowRef.current) glowRef.current.style.opacity = '1';
      if (gridSpotlightRef.current) gridSpotlightRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    // High performance animation loop (Lerp 0.12 for smooth, fluid motion)
    const render = () => {
      const ease = 0.12;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      const x = Math.round(currentPos.current.x);
      const y = Math.round(currentPos.current.y);

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${x - 350}px, ${y - 350}px, 0)`;
      }

      if (gridSpotlightRef.current) {
        const maskValue = `radial-gradient(450px circle at ${x}px ${y}px, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 70%)`;
        gridSpotlightRef.current.style.maskImage = maskValue;
        gridSpotlightRef.current.style.webkitMaskImage = maskValue;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      mediaQuery.removeEventListener('change', handleMediaChange);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* 1. Base Static Subtle Grid (Always present on all devices, very low opacity) */}
      <div
        className="absolute inset-0 cyber-grid opacity-70"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(16, 185, 129, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(16, 185, 129, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '36px 36px'
        }}
      />

      {/* 2. Interactive Grid Layer (Gently reveals crisper grid lines under mouse cursor) */}
      {isDesktop && (
        <div
          ref={gridSpotlightRef}
          className="absolute inset-0 transition-opacity duration-700 ease-out opacity-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 255, 102, 0.09) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 255, 102, 0.09) 1px, transparent 1px)
            `,
            backgroundSize: '36px 36px'
          }}
        />
      )}

      {/* 3. Mouse-Following Green Glow / Spotlight */}
      {isDesktop && (
        <div
          ref={glowRef}
          className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full transition-opacity duration-700 ease-out opacity-0"
          style={{
            background: `radial-gradient(circle, rgba(0, 255, 102, 0.075) 0%, rgba(16, 185, 129, 0.035) 40%, rgba(8, 12, 10, 0) 70%)`,
            filter: 'blur(45px)',
            willChange: 'transform',
            transform: 'translate3d(-1000px, -1000px, 0)'
          }}
        />
      )}
    </div>
  );
};
