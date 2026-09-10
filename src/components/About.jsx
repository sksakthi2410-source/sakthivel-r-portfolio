const STATS = [
  { num: 'MCA — 2025', label: "Master's Degree" },
  { num: 'Full Stack', label: 'Development Focus' },
  { num: 'PHP & Laravel', label: 'Core Backend Stack' },
  { num: 'IoT Projects', label: 'Hardware Experience' },
]

export default function About() {
  return (
    <section id="about" className="bg-panel text-white py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="reveal mb-11">
          <span className="block font-mono text-[0.78rem] text-amber mb-2">// about</span>
          <h2 className="font-display text-[1.9rem]">Who I am</h2>
        </div>
        <div className="reveal flex flex-col md:flex-row items-center gap-9">
          <div className="md:flex-[1.2] space-y-4">
            <p className="text-mutedLt">
              Sakthivel R is a Full Stack Developer and recent MCA graduate (2025) with an
              interest in building practical solutions for real-world problems.
            </p>
            <p className="text-mutedLt">
              His academic projects include both web development and IoT-based systems, giving
              him exposure to software development, hardware integration and enterprise web
              frameworks.
            </p>
            <p className="text-mutedLt">
              He enjoys working across the development stack — designing functional interfaces,
              developing application logic and working with databases — and is currently looking
              for opportunities where he can contribute his technical skills, learn new
              technologies and grow as part of a collaborative development team.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3.5 md:flex-1 w-full">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-panel2 border border-white/10 rounded-card p-5 transition-all hover:-translate-y-1 hover:border-violet"
              >
                <div className="font-display text-[1.1rem] font-bold text-teal mb-1">
                  {stat.num}
                </div>
                <div className="text-[0.85rem] text-mutedLt">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
