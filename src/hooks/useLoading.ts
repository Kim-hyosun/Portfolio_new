import { useEffect, useState } from 'react'

export function useLoading(delayMs = 1400) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleLoaded = () => {
      window.setTimeout(() => {
        setIsVisible(false)
        document.body.classList.remove('noScroll')
      }, delayMs)
    }

    if (document.readyState === 'complete') {
      handleLoaded()
      return
    }
    window.addEventListener('load', handleLoaded)
    return () => window.removeEventListener('load', handleLoaded)
  }, [delayMs])

  return isVisible
}
