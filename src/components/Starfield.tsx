import { useEffect, useState } from 'react';

export default function Starfield() {
  const [stars, setStars] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newStars = Array.from({ length: 100 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 3 + 2,
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="stars-container">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
      <div className="prism-flare bg-electric w-[500px] h-[500px] top-[-10%] left-[-10%]" />
      <div className="prism-flare bg-violet-glow w-[600px] h-[600px] bottom-[-20%] right-[-10%]" />
      <div className="prism-flare bg-cyan-glow w-[400px] h-[400px] top-[40%] right-[20%] opacity-10" />
    </div>
  );
}
