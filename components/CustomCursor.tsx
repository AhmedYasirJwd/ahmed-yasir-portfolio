'use client';

import { useRef, useEffect, useState } from 'react';

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (ringRef.current) {
        ringRef.current.style.left = e.clientX + 'px';
        ringRef.current.style.top = e.clientY + 'px';
      }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
        style={{
          width: isHovering ? '48px' : '32px',
          height: isHovering ? '48px' : '32px',
          border: `2px solid ${isHovering ? '#06b6d4' : '#0ea5e9'}`,
          borderRadius: '50%',
          opacity: isHovering ? 0.8 : 0.6,
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: '6px',
          height: '6px',
          backgroundColor: isHovering ? '#06b6d4' : '#0ea5e9',
          boxShadow: `0 0 12px ${isHovering ? '#06b6d4' : '#0ea5e9'}`,
        }}
      />
    </>
  );
}
