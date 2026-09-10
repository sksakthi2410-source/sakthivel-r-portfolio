const TIMELINE = [
  {
    year: '2023 – 2025',
    title: 'Master of Computer Applications (MCA)',
    school: 'M.A.M. College of Engineering, Trichy',
    pct: '83%',
  },
  {
    year: '2019 – 2022',
    title: 'Bachelor of Computer Applications (BCA)',
    school: 'Bishop Heber College, Trichy',
    pct: '84%',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="reveal mb-11">
          <span className="block font-mono text-[0.78rem] text-violet mb-2">// education</span>
          <h2 className="font-display text-[1.9rem]">Academic background</h2>
        </div>
        <div className="reveal relative pl-[26px] border-l-2 border-violetSoft">
          {TIMELINE.map((item, idx) => (
            <div
              key={item.title}
              className={`relative ${idx === TIMELINE.length - 1 ? 'pb-0' : 'pb-[34px]'}`}
            >
              <span className="absolute -left-[32px] top-1 w-3 h-3 rounded-full bg-violet border-[3px] border-violetSoft" />
              <span className="block font-mono text-[0.78rem] text-violet mb-1.5">
                {item.year}
              </span>
              <h3 className="text-[1.08rem] font-display font-semibold mb-1">{item.title}</h3>
              <div className="text-muted text-[0.92rem] mb-1.5">{item.school}</div>
              <span className="inline-block text-[0.8rem] font-semibold text-teal bg-teal/10 px-2.5 py-0.5 rounded-full">
                {item.pct}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
