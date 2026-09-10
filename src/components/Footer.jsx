export default function Footer() {
  return (
    <footer className="bg-ink text-mutedLt py-11 pb-[26px] text-center">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="font-display font-bold text-white mb-1.5">Sakthivel R</div>
        <p className="text-[0.88rem] mb-5">Full Stack Developer | PHP &amp; Laravel Specialist</p>
        <div className="flex gap-4 justify-center mb-[22px]">
          <a
            href="https://www.linkedin.com/in/sakthivelr24"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-[38px] h-[38px] rounded-full border border-white/10 flex items-center justify-center text-white text-[0.9rem] transition-colors hover:bg-violet hover:border-violet"
          >
            in
          </a>
          <a
            href="mailto:sksakthi2410@gmail.com"
            aria-label="Email"
            className="w-[38px] h-[38px] rounded-full border border-white/10 flex items-center justify-center text-white text-[0.9rem] transition-colors hover:bg-violet hover:border-violet"
          >
            ✉
          </a>
          <a
            href="tel:+918056943891"
            aria-label="Phone"
            className="w-[38px] h-[38px] rounded-full border border-white/10 flex items-center justify-center text-white text-[0.9rem] transition-colors hover:bg-violet hover:border-violet"
          >
            ☎
          </a>
        </div>
        <p className="text-[0.78rem] text-mutedLt/70">© 2026 Sakthivel R. All rights reserved.</p>
      </div>
    </footer>
  )
}
