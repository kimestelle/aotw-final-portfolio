import { useEffect, useRef, useState } from "react";

const SPRITE_SIZE = 100;
const SPEED = 7;
const STOP_THRESHOLD = 2; 

export default function Sprite() {
  const spriteRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [spritePos, setSpritePos] = useState({ x: window.innerWidth / 2 });
  const [targetPos, setTargetPos] = useState(spritePos);
  const [direction, setDirection] = useState(1); 
  const [edgeMargin, setEdgeMargin] = useState(window.innerWidth * 0.2);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  
  useEffect(() => {
    scrollContainerRef.current = document.querySelector(".scroll-container");
    const handleMouseMove = (event: MouseEvent) => {
      setTargetPos({ x: event.clientX });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const handleResize = () => setEdgeMargin(window.innerWidth * 0.2);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const moveSprite = () => {
      if (isPaused) {
        animationFrameId = requestAnimationFrame(moveSprite);
        return;
      }      
      const dx = targetPos.x - spritePos.x;
      const distance = Math.abs(dx);

      console.log(`Distance: ${distance}, Target X: ${targetPos.x}, Sprite X: ${spritePos.x}`);

      if (distance > STOP_THRESHOLD) {
        const moveX = Math.sign(dx) * Math.min(SPEED, distance); // Move step-by-step
        setSpritePos((prev) => ({ x: prev.x + moveX }));
        setDirection(dx > 0 ? 1 : -1);
      }

      //scroll if near edge of screen
      if (scrollContainerRef.current) {
        if (spritePos.x < edgeMargin) scrollContainerRef.current.scrollBy(-5, 0);
        if (spritePos.x > window.innerWidth - edgeMargin) scrollContainerRef.current.scrollBy(5, 0);
      }

      animationFrameId = requestAnimationFrame(moveSprite);
    };

    animationFrameId = requestAnimationFrame(moveSprite);

    return () => cancelAnimationFrame(animationFrameId);
  }, [spritePos, targetPos.x, isPaused, edgeMargin]);

  return (
    <div
      ref={spriteRef}
      className="sprite"
      style={{
        position: "fixed",
        left: spritePos.x - SPRITE_SIZE / 2,
        bottom: '5%',
        width: SPRITE_SIZE,
        height: SPRITE_SIZE * 0.7,
        backgroundImage: "url('/mouse.svg')",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none",
        transform: `scaleX(${direction})`, //flip sprite
        transition: "transform 0.1s linear",
        zIndex: 10,
      }}
    />
  );
}
