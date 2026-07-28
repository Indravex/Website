import React from 'react';

interface SeparatorProps {
  bottom?: string;
  bgColor?: string;
}

export default function Separator({ bottom = '-120px', bgColor = '#FFFFFF' }: SeparatorProps) {
  return (
    <>
      {/* SVG Clip Path Definition (objectBoundingBox coordinates 0 to 1) */}
      <svg style={{ width: 0, height: 0, position: 'absolute', pointerEvents: 'none' }}>
        <defs>
          <clipPath id="tab-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 0,0.083 L 0.438,0.167 C 0.453,0.167 0.458,0.267 0.474,0.267 L 0.526,0.267 C 0.542,0.267 0.547,0.167 0.563,0.167 L 1,0.083 L 1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Curved overlapping separator (shifted down, shallow tab) */}
      <div 
        className="absolute left-0 w-full leading-[0] z-20 pointer-events-none"
        style={{
          bottom: bottom,
          transform: 'translate3d(0,0,0)', // Hardware acceleration to prevent lag
          willChange: 'transform'
        }}
      >
        {/* Deep, heavy black-tinted drop shadows for realistic depth */}
        <div className="relative w-full h-[120px] filter drop-shadow-[0_32px_28px_rgba(0,0,0,0.55)] drop-shadow-[0_10px_12px_rgba(0,0,0,0.45)] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          {/* Clipped background matching the top page background with a feather mask at the top seam */}
          <div 
            style={{
              clipPath: 'url(#tab-clip)',
              width: '100%',
              height: '100%',
              backgroundColor: bgColor,
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, black 8px)',
              maskImage: 'linear-gradient(to bottom, transparent 0px, black 8px)',
            }}
          />
        </div>

        {/* 3D Grooved Edge Stroke SVG Layer */}
        <svg 
          viewBox="0 0 1920 120" 
          className="absolute bottom-0 left-0 w-full h-[120px] z-30 pointer-events-none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="fade-black" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 0, 0, 0)" />
              <stop offset="25%" stopColor="rgba(0, 0, 0, 0.08)" />
              <stop offset="42%" stopColor="rgba(0, 0, 0, 0.48)" />
              <stop offset="50%" stopColor="rgba(0, 0, 0, 0.55)" />
              <stop offset="58%" stopColor="rgba(0, 0, 0, 0.48)" />
              <stop offset="75%" stopColor="rgba(0, 0, 0, 0.08)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </linearGradient>
            <linearGradient id="fade-blue-glow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0, 20, 150, 0)" />
              <stop offset="25%" stopColor="rgba(0, 20, 150, 0.06)" />
              <stop offset="42%" stopColor="rgba(0, 20, 150, 0.38)" />
              <stop offset="50%" stopColor="rgba(0, 20, 150, 0.45)" />
              <stop offset="58%" stopColor="rgba(0, 20, 150, 0.38)" />
              <stop offset="75%" stopColor="rgba(0, 20, 150, 0.06)" />
              <stop offset="100%" stopColor="rgba(0, 20, 150, 0)" />
            </linearGradient>
            <linearGradient id="fade-main-line" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(6, 11, 38, 0)" />
              <stop offset="25%" stopColor="rgba(6, 11, 38, 0.1)" />
              <stop offset="42%" stopColor="rgba(6, 11, 38, 0.85)" />
              <stop offset="50%" stopColor="rgba(6, 11, 38, 0.95)" />
              <stop offset="58%" stopColor="rgba(6, 11, 38, 0.85)" />
              <stop offset="75%" stopColor="rgba(6, 11, 38, 0.1)" />
              <stop offset="100%" stopColor="rgba(6, 11, 38, 0)" />
            </linearGradient>
            <linearGradient id="fade-white-highlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
              <stop offset="25%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="42%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.9)" />
              <stop offset="58%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="75%" stopColor="rgba(255, 255, 255, 0.1)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
            </linearGradient>
          </defs>

          {/* 1. Deep Groove shadow (black crease depth) */}
          <path 
            d="M 0,10 L 840,20 C 870,20 880,32 910,32 L 1010,32 C 1040,32 1050,20 1080,20 L 1920,10" 
            fill="none" 
            stroke="url(#fade-black)" 
            strokeWidth="4" 
            transform="translate(0, 1.5)"
          />

          {/* 2. Soft Royal Blue Glow Outline */}
          <path 
            d="M 0,10 L 840,20 C 870,20 880,32 910,32 L 1010,32 C 1040,32 1050,20 1080,20 L 1920,10" 
            fill="none" 
            stroke="url(#fade-blue-glow)" 
            strokeWidth="2" 
            transform="translate(0, 0.5)"
          />

          {/* 3. Main Edge Line (crisp darkish royal rich blue) */}
          <path 
            d="M 0,10 L 840,20 C 870,20 880,32 910,32 L 1010,32 C 1040,32 1050,20 1080,20 L 1920,10" 
            fill="none" 
            stroke="url(#fade-main-line)" 
            strokeWidth="1.5" 
          />

          {/* 4. Top Specular Highlight (warm white edge reflection) */}
          <path 
            d="M 0,10 L 840,20 C 870,20 880,32 910,32 L 1010,32 C 1040,32 1050,20 1080,20 L 1920,10" 
            fill="none" 
            stroke="url(#fade-white-highlight)" 
            strokeWidth="1" 
            transform="translate(0, -1)"
          />
        </svg>
      </div>
    </>
  );
}
