const SKILL_GROUPS = [
  { title: 'Frontend', dot: 'bg-violet', chips: ['HTML5', 'CSS3', 'JavaScript'] },
  { title: 'Backend', dot: 'bg-teal', chips: ['PHP', 'Laravel'] },
  { title: 'Programming', dot: 'bg-amber', chips: ['Java', 'Python', 'Ruby', 'JavaScript'] },
  { title: 'Database', dot: 'bg-[#EF6C6C]', chips: ['MySQL', 'SQL', 'DBMS', 'Database Systems'] },
  {
    title: 'Core Concepts',
    dot: 'bg-[#3D8BF2]',
    chips: ['OOP', 'DSA', 'Software Design Principles'],
  },
  { title: 'Tools & Productivity', dot: 'bg-[#9B5DE5]', chips: ['MS Excel'] },
]

export default function Skills() {
  return (
    <section id="skills" className="py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="reveal mb-11">
          <span className="block font-mono text-[0.78rem] text-violet mb-2">// skills</span>
          <h2 className="font-display text-[1.9rem]">What I work with</h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-ink/10 rounded-card p-[22px] transition-all hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(20,19,34,0.08)]"
            >
              <h3 className="text-base mb-3.5 flex items-center gap-2 font-display font-semibold">
                <span className={`w-[9px] h-[9px] rounded-full inline-block ${group.dot}`} />
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-[0.82rem] px-3 py-1.5 rounded-lg bg-violetSoft text-violet font-medium"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
