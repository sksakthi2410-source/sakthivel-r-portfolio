import { useState } from 'react'
import profilePic from '../assets/profile.jpg'

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

const RESUME_PATH = './assets/Sakthivel_R_Resume.pdf'

export default function Header({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-paper/85 backdrop-blur-md border-b border-ink/10 transition-colors">
        <div className="max-w-wrap mx-auto px-[22px] py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2.5 font-display font-bold text-[1.05rem]">
            <img
              src={profilePic}
              alt="Sakthivel R"
              className="w-9 h-9 rounded-full object-cover border-2 border-violetSoft flex-shrink-0"
            />
            Sakthivel<span className="text-violet">R.</span>
          </a>

          <nav className="hidden md:block">
            <ul className="flex gap-[30px]">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className={`text-[0.93rem] font-medium relative py-1 transition-colors ${
                      activeSection === link.id ? 'text-ink' : 'text-muted hover:text-ink'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-0.5 bg-violet transition-all duration-300 ${
                        activeSection === link.id ? 'w-full' : 'w-0'
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={RESUME_PATH}
            download="Sakthivel_R_Resume.pdf"
            className="hidden md:inline-block bg-ink text-white px-[18px] py-[9px] rounded-full text-[0.86rem] font-semibold whitespace-nowrap transition-all hover:bg-violet hover:-translate-y-0.5"
          >
            Download Resume
          </a>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5 z-[1100]"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            <span
              className={`w-[22px] h-0.5 bg-ink transition-transform ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`w-[22px] h-0.5 bg-ink transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`w-[22px] h-0.5 bg-ink transition-transform ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-panel z-[1050] flex flex-col items-center justify-center gap-[26px] transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={closeMenu}
            className="text-white font-display text-2xl font-semibold"
          >
            {link.label}
          </a>
        ))}
        <a
          href={RESUME_PATH}
          download="Sakthivel_R_Resume.pdf"
          onClick={closeMenu}
          className="mt-2.5 bg-violet text-white px-[26px] py-[13px] rounded-full font-semibold"
        >
          Download Resume
        </a>
      </div>
    </>
  )
}
