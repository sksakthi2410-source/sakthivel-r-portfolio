import { useEffect } from 'react'

export default function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.15 }
    )
    revealEls.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
