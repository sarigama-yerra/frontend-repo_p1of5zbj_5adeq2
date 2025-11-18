import { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onMove = (e) => {
      const { clientX: x, clientY: y } = e
      const rect = el.getBoundingClientRect()
      const rx = (x - rect.left) / rect.width
      const ry = (y - rect.top) / rect.height
      el.style.setProperty('--mx', rx)
      el.style.setProperty('--my', ry)
    }

    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-0"
      style={{
        background:
          'radial-gradient(600px 300px at calc(var(--mx,0.5)*100%) calc(var(--my,0.5)*100%), rgba(37,99,235,0.08), transparent 60%)',
        transition: 'background 0.2s ease-out',
      }}
    />
  )
}
