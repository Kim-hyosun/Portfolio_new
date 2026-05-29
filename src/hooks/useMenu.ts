import { useEffect, useState } from 'react'

export function useMenu() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('noScroll', isOpen)
  }, [isOpen])

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }
}
