import React from 'react'

const letters = [
  { char: 'K', size: 78 },
  { char: 'A', size: 76 },
  { char: 'R', size: 74 },
  { char: 'T', size: 72 },
  { char: 'H', size: 70 },
  { char: 'I', size: 70 },
  { char: 'K', size: 72 },
  { char: 'B', size: 72 },
  { char: 'H', size: 70 },
  { char: 'A', size: 70 },
  { char: 'R', size: 72 },
  { char: 'A', size: 74 },
  { char: 'T', size: 76 },
  { char: 'A', size: 78 },
  { char: 'P', size: 80 },
  { char: 'U', size: 82 },
]

const NetflixLogo = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <svg viewBox="0 0 900 300" className="w-full max-w-[900px]">
        {letters.map((item, index) => {
          const angle = -16 + index * 2
          const radius = 240
          const centerX = 450
          const centerY = 260

          const x =
            centerX + radius * Math.sin((angle * Math.PI) / 180)
          const y =
            centerY - radius * Math.cos((angle * Math.PI) / 180)

          return (
            <text
              key={index}
              x={x}
              y={y}
              fill="#e50914"
              fontSize={item.size}
              fontWeight="900"
              textAnchor="middle"
              dominantBaseline="middle"
              transform={`rotate(${angle}, ${x}, ${y})`}
              style={{ fontFamily: 'Arial Black, Helvetica, sans-serif' }}
            >
              {item.char}
            </text>
          )
        })}
      </svg>
    </div>
  )
}

export default NetflixLogo
