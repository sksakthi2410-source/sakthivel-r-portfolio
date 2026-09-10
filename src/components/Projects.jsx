const PROJECTS = [
  {
    title: 'Farm Animal Location Tracking System using GPS',
    category: 'IoT · GPS',
    desc: 'Developed a system to help shepherds track grazing animals and improve animal safety. The system integrates GPS and vibration sensors to provide real-time location information and safety alerts.',
    chips: ['GPS', 'Vibration Sensors', 'NodeMCU', 'IoT', 'Hardware Integration'],
    features: [
      'Real-time animal location tracking',
      'GPS-based monitoring',
      'Vibration-based safety alerts',
      'Practical hardware–software integration',
    ],
  },
  {
    title: 'Task Management Application',
    category: 'Web · Full Stack',
    desc: 'Built a web-based task management application using PHP and Laravel to simplify task tracking, project organization and team collaboration.',
    chips: ['PHP', 'Laravel', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
    features: [
      'Task tracking & organization',
      'Workflow management',
      'Team collaboration',
      'Database-driven web application',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-panel text-white py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="reveal mb-11">
          <span className="block font-mono text-[0.78rem] text-teal mb-2">// projects</span>
          <h2 className="font-display text-[1.9rem]">Things I've built</h2>
        </div>

        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="reveal bg-panel2 border border-white/10 rounded-[18px] p-7 mb-[22px] transition-all hover:-translate-y-1.5 hover:border-teal"
          >
            <div className="flex justify-between items-start md:items-center gap-3.5 mb-3">
              <h3 className="text-xl font-display font-semibold">{project.title}</h3>
              <span className="font-mono text-[0.72rem] text-amber bg-amber/10 px-2.5 py-1 rounded-full whitespace-nowrap">
                {project.category}
              </span>
            </div>
            <p className="text-mutedLt text-[0.95rem] mb-4">{project.desc}</p>
            <div className="flex flex-wrap gap-2">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className="text-[0.82rem] px-3 py-1.5 rounded-lg bg-violet/20 text-[#C9B8FF] font-medium"
                >
                  {chip}
                </span>
              ))}
            </div>
            <ul className="my-4 space-y-1.5">
              {project.features.map((feature) => (
                <li key={feature} className="text-[0.9rem] text-mutedLt pl-5 relative before:content-['▹'] before:absolute before:left-0 before:text-teal">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-2.5 mt-[18px] flex-wrap">
              <span className="text-[0.85rem] font-semibold px-4 py-2 rounded-full border border-white/10 text-mutedLt cursor-default">
                GitHub — coming soon
              </span>
              <span className="text-[0.85rem] font-semibold px-4 py-2 rounded-full border border-white/10 text-mutedLt cursor-default">
                Demo — coming soon
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
