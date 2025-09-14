// src/components/animations/LottieSafe.jsx
import React from 'react'
import Lottie from 'lottie-react'

export default function LottieSafe({
  data,
  className = '',
  loop = true,
  autoplay = true,
  rendererSettings = { preserveAspectRatio: 'xMidYMid meet' },
  fallback = null,
  ...rest
}) {
  const isValid =
    data &&
    typeof data === 'object' &&
    Array.isArray(data.layers) && // Valid Lottie must have layers[]
    typeof data.w === 'number' &&
    typeof data.h === 'number'

  if (!isValid) {
    console.error('Invalid Lottie JSON. Expected a "layers" array and w/h numbers.', data)
    return fallback || (
      <div className="w-full h-64 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center text-white">
        Animation failed to load
      </div>
    )
  }

  return (
    <Lottie
      animationData={data}
      loop={loop}
      autoplay={autoplay}
      className={className}
      rendererSettings={rendererSettings}
      {...rest}
    />
  )
}