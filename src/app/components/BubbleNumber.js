import React, { useId } from "react";

export function BubbleNumber({ number }) {
  const gradientId = useId();
  return (
    <svg width="25" height="25" viewBox="0 0 200 200">
      <defs>
        <linearGradient id={`solanaGradient-${gradientId}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9945FF" />
          <stop offset="50%" stopColor="#00FFA3" />
          <stop offset="100%" stopColor="#00D1FF" />
        </linearGradient>
      </defs>
      <circle
        cx="100"
        cy="100"
        r="90"
        fill="none"
        stroke={`url(#solanaGradient-${gradientId})`}
        strokeWidth="10"
      />
      <text
        x="100"
        y="100"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={`url(#solanaGradient-${gradientId})`}
        stroke={`url(#solanaGradient-${gradientId})`}
        strokeWidth="4"
        fontSize="100"
        fontFamily="sans-serif"
      >
        {number}
      </text>
    </svg>
  );
}
