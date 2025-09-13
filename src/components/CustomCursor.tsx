import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.tagName === 'BUTTON' || 
                           target.tagName === 'A' || 
                           !!target.closest('button') || 
                           !!target.closest('a') ||
                           target.style.cursor === 'pointer';
      setIsHovering(isInteractive);
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.body.style.cursor = 'auto';
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Outer circle */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full border border-primary/30 transition-all duration-300 ${
          isHovering ? 'w-12 h-12' : 'w-8 h-8'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          left: position.x - (isHovering ? 24 : 16),
          top: position.y - (isHovering ? 24 : 16),
          background: `radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)`,
          opacity: 0.6,
        }}
      />
      
      {/* Inner dot */}
      <div
        className={`fixed pointer-events-none z-[9999] rounded-full bg-primary transition-all duration-100 ${
          isClicking ? 'w-2 h-2' : 'w-1 h-1'
        }`}
        style={{
          left: position.x - (isClicking ? 4 : 2),
          top: position.y - (isClicking ? 4 : 2),
        }}
      />
      
      {/* Ripple effect on click */}
      {isClicking && (
        <div
          className="fixed pointer-events-none z-[9998] rounded-full border border-primary/50 animate-ping"
          style={{
            left: position.x - 8,
            top: position.y - 8,
            width: '16px',
            height: '16px',
          }}
        />
      )}
    </>
  );
};

export default CustomCursor;