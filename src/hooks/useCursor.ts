import { useEffect } from 'react'

export function useCursor() {
  useEffect(() => {
    const cursorParent = document.getElementById('mouseCursor')
    if (!cursorParent) return
    const cursorChild = cursorParent.firstElementChild as HTMLDivElement | null
    if (!cursorChild) return

    let scale = 1
    let stage = ''

    const onMove = (e: MouseEvent) => {
      const x = e.pageX - cursorParent.offsetWidth / 2
      const y = e.pageY - cursorParent.offsetHeight / 2
      cursorParent.style.transform = `translate3d(${x}px, ${y}px, 0)`

      const target = e.target as HTMLElement | null
      const cursorAttr = target?.getAttribute?.('data-cursor') ?? null

      switch (cursorAttr) {
        case 'click':
          if (stage === 'click') return
          scale = 2
          stage = 'click'
          cursorChild.setAttribute('data-name', '')
          cursorParent.className = ''
          break
        case 'link':
          if (stage === 'link') return
          scale = 3
          stage = 'link'
          cursorChild.setAttribute('data-name', target?.getAttribute('data-name') || '')
          cursorParent.className = 'cursor-text-mode'
          break
        default:
          if (stage === '') return
          scale = 1
          stage = ''
          cursorChild.setAttribute('data-name', '')
          cursorParent.className = ''
          break
      }
      cursorChild.style.setProperty('--cursor-scale', String(scale))
    }

    const onDown = () => {
      scale *= 0.8
      cursorChild.style.setProperty('--cursor-scale', String(scale))
    }
    const onUp = () => {
      scale *= 1.25
      cursorChild.style.setProperty('--cursor-scale', String(scale))
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])
}
