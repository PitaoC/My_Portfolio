import React, { useState, useEffect, useRef } from "react";

function AnimatedCircularProgress({ value = 75, size = 160, stroke = 18, circleRatio = 0.75, trigger = 0 }) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const frameRef = useRef();

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const effectiveCircumference = circumference * circleRatio;

  // Calculate stroke offset based on animatedValue
  const offset = effectiveCircumference - (animatedValue / 100) * effectiveCircumference;

  // Rotation same as react-circular-progressbar (1/2 + 1/8)
  const rotationDeg = (1 / 2 + 1 / 8) * 220;

  useEffect(() => {
    setAnimatedValue(0); // reset when trigger changes
    let startTimestamp = null;

    function animate(ts) {
      if (!startTimestamp) startTimestamp = ts;
      const progress = Math.min((ts - startTimestamp) / 1000, 1); // 1s duration
      const currentValue = Math.round(progress * value);
      setAnimatedValue(currentValue);
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setAnimatedValue(value);
      }
    }

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [value, trigger]);

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg
        width={size}
        height={size}
        style={{ transform: `rotate(${rotationDeg}deg)` }}
      >
        {/* Background track (¾ circle) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          strokeLinecap="round"
          className="text-gray-800"
          fill="transparent"
          strokeDasharray={effectiveCircumference}
          strokeDashoffset={0}
        />
        {/* Progress arc (animated) */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={stroke}
          strokeLinecap="round"
          fill="transparent"
          strokeDasharray={effectiveCircumference}
          strokeDashoffset={offset}
          className="transition-all duration-100 ease-linear"
        />
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#5b1414" />
            <stop offset="100%" stopColor="#ff3232" />
          </linearGradient>
        </defs>
      </svg>
      {/* Animated number */}
      <span className="absolute font-roboto-mono text-3xl font-semibold text-white">
        {animatedValue}%
      </span>
    </div>
  );
}

export default AnimatedCircularProgress;
