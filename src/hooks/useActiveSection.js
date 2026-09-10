import { useEffect, useState } from 'react'

export default function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const onScroll = () => {
      let current = sectionIds[0]
      sectionIds.forEach((id) => {
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop - 120
          if (window.scrollY >= top) current = id
        }
      })
      setActive(current)
    }
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds])

  return active
}
