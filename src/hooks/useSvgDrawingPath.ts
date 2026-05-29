import { useEffect, type RefObject } from 'react'

function calcDashoffset(scrollY: number, element: HTMLElement, length: number) {
  const ratio = (scrollY - element.offsetTop) / element.offsetHeight
  const value = length - length * ratio
  if (value < 0) return 0
  if (value > length) return length
  return value
}

export function useSvgDrawingPath(
  wrapRef: RefObject<HTMLElement | null>,
  pathRef: RefObject<SVGPathElement | null>,
  scrollOffsetRatio: number,
) {
  useEffect(() => {
    const wrap = wrapRef.current
    const path = pathRef.current
    if (!wrap || !path) return

    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = String(pathLength)
    path.style.strokeDashoffset = String(
      calcDashoffset(window.innerHeight - wrap.offsetTop, wrap, pathLength),
    )

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY + window.innerHeight * scrollOffsetRatio
        path.style.strokeDashoffset = String(calcDashoffset(scrollY, wrap, pathLength))
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [wrapRef, pathRef, scrollOffsetRatio])
}
