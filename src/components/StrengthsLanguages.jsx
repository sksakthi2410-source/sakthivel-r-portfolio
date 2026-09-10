const STRENGTHS = [
  { icon: '💪', label: 'Self-confidence' },
  { icon: '🤝', label: 'Teamwork' },
  { icon: '🌱', label: 'Easily adaptable' },
  { icon: '💬', label: 'Strong communication' },
  { icon: '🧩', label: 'Problem-solving mindset' },
  { icon: '🎯', label: 'Attention to detail' },
]

const LANGUAGES = [
  { flag: '🇬🇧', label: 'English' },
  { flag: '🇮🇳', label: 'Tamil' },
]

export default function StrengthsLanguages() {
  return (
    <section id="strengths-lang" className="py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px] reveal grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-14">
        <div>
          <div className="mb-6">
            <span className="block font-mono text-[0.78rem] text-violet mb-2">// strengths</span>
            <h2 className="font-display text-[1.9rem]">What I bring</h2>
          </div>
          <div className="grid grid-cols-2 gap-3.5">
            {STRENGTHS.map((s) => (
              <div key={s.label} className="bg-violetSoft rounded-xl p-4 text-center">
                <div className="text-2xl mb-2">{s.icon}</div>
                <p className="text-[0.85rem] font-semibold text-ink">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-6">
            <span className="block font-mono text-[0.78rem] text-violet mb-2">// languages</span>
            <h2 className="font-display text-[1.9rem]">Languages</h2>
          </div>
          <div className="flex gap-3">
            {LANGUAGES.map((lang) => (
              <div
                key={lang.label}
                className="flex-1 bg-white border border-ink/10 rounded-xl p-[22px] text-center"
              >
                <div className="text-[1.6rem] mb-2">{lang.flag}</div>
                <p className="font-semibold">{lang.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
