import { useEffect, useRef, useState } from 'react'

const LazyVideo = ({ src, poster, className, ...props }) => {
  const videoRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible && videoRef.current) {
      videoRef.current.load()
    }
  }, [isVisible])

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      onLoadedData={() => setIsLoaded(true)}
      style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.5s ease' }}
      {...props}
    >
      {isVisible && <source src={src} type="video/mp4" />}
    </video>
  )
}

export default LazyVideo
