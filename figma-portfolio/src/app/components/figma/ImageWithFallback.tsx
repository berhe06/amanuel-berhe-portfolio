import { useState } from 'react'

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  fallback?: string
}

export function ImageWithFallback({ src, alt, fallback, ...props }: Props) {
  const [error, setError] = useState(false)
  return (
    <img
      {...props}
      src={error ? (fallback || '') : src}
      alt={alt}
      onError={() => setError(true)}
    />
  )
}
