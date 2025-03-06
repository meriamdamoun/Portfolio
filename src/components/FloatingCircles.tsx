import React from "react";

interface FloatingCircleProps {
  size?: number;
  delay?: number;
  duration?: number;
  left?: string;
}

const FloatingCircle: React.FC<FloatingCircleProps> = ({
  size = 20,
  delay = 0,
  duration = 25,
  left = "50%",
}) => {
  return (
    <div
      className="absolute bottom-[-150px] bg-white bg-opacity-20 rounded-full"
      style={{
        width: size,
        height: size,
        left: left,
        animation: `floatUp ${duration}s linear infinite`,
        animationDelay: `${delay}s`,
      }}
    />
  );
};

const FloatingCircles: React.FC = () => {
  const circles = [
    { size: 80, left: "25%", delay: 0, duration: 25 },
    { size: 20, left: "10%", delay: 2, duration: 12 },
    { size: 20, left: "70%", delay: 4, duration: 25 },
    { size: 60, left: "40%", delay: 0, duration: 18 },
    { size: 20, left: "65%", delay: 0, duration: 25 },
    { size: 110, left: "75%", delay: 3, duration: 25 },
    { size: 150, left: "35%", delay: 7, duration: 25 },
    { size: 25, left: "50%", delay: 15, duration: 45 },
    { size: 15, left: "20%", delay: 2, duration: 35 },
    { size: 150, left: "85%", delay: 0, duration: 11 },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <FloatingCircle key={index} {...circle} />
      ))}

      {/* Inject animation keyframes */}
      <style>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingCircles;
