import { useEffect, useRef } from 'react'

// One full-screen slide. Reveals its content once and reports when it is the active slide.
export default function Slide({ id, className = '', onActive, children }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      el?.classList.add('in')
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        const seen = e.intersectionRect.height
        if (seen > 0.15 * Math.min(e.boundingClientRect.height, window.innerHeight)) el.classList.add('in')
        if (seen > 0.45 * window.innerHeight) onActive?.(id)
      },
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [id, onActive])

  return (
    <section id={id} ref={ref} className={`slide ${className}`.trim()}>
      {children}
    </section>
  )
}
