import { useEffect, useRef } from 'react'
import { useSvgDrawingPath } from '../../hooks/useSvgDrawingPath'
import { PATH_DRAW1, PATH_DRAW2, PATH_MAIN } from './paths'

export function BgMain() {
  const pathRef = useRef<SVGPathElement>(null)

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    path.style.setProperty('--length', String(path.getTotalLength()))
  }, [])

  return (
    <div className="bg">
      <svg viewBox="0 0 1316 505" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={pathRef} id="mainpath" d={PATH_MAIN} stroke="black" strokeWidth={2} />
      </svg>
    </div>
  )
}

export function BgDraw1() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  useSvgDrawingPath(wrapRef, pathRef, 0.6)

  return (
    <div className="bg1" ref={wrapRef}>
      <svg viewBox="0 0 1922 3458" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={pathRef} id="drowingIMG1" d={PATH_DRAW1} stroke="black" strokeWidth={2} />
      </svg>
    </div>
  )
}

export function BgDraw2() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const pathRef = useRef<SVGPathElement>(null)
  useSvgDrawingPath(wrapRef, pathRef, 0.7)

  return (
    <div className="bg2" ref={wrapRef}>
      <svg viewBox="0 0 1614 2403" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path ref={pathRef} id="drowingIMG2" d={PATH_DRAW2} stroke="black" strokeWidth={2} />
      </svg>
    </div>
  )
}
