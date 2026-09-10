const CERTS = [
  { icon: 'SQL', color: 'bg-violet', title: 'SQL Certification', desc: 'Database querying & management' },
  { icon: 'XL', color: 'bg-teal', title: 'Excel Certification', desc: 'Spreadsheets & data handling' },
  { icon: 'DA', color: 'bg-amber', title: 'Data Analyst Certification', desc: 'Data analysis fundamentals' },
  { icon: 'PG', color: 'bg-[#EF6C6C]', title: 'PGDCA', desc: 'Post Graduate Diploma in Computer Applications' },
  {
    icon: 'TW',
    color: 'bg-[#3D8BF2]',
    title: 'English Typewriting — Higher Grade',
    desc: 'Completed with Distinction',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="reveal mb-11">
          <span className="block font-mono text-[0.78rem] text-violet mb-2">// certifications</span>
          <h2 className="font-display text-[1.9rem]">Certifications</h2>
        </div>
        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {CERTS.map((cert) => (
            <div
              key={cert.title}
              className="bg-white border border-ink/10 rounded-xl px-5 py-[18px] flex items-center gap-3.5 transition-all hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(20,19,34,0.07)]"
            >
              <div
                className={`w-10 h-10 rounded-[10px] flex items-center justify-center font-display font-bold text-white flex-shrink-0 text-base ${cert.color}`}
              >
                {cert.icon}
              </div>
              <div>
                <h4 className="text-[0.98rem] font-display font-semibold mb-0.5">{cert.title}</h4>
                <p className="text-[0.83rem] text-muted">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
