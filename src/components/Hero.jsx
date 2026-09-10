import profilePic from '../assets/profile.jpg'

const BADGES = [
  { label: 'PHP', color: 'bg-violet' },
  { label: 'Laravel', color: 'bg-teal' },
  { label: 'JavaScript', color: 'bg-amber' },
  { label: 'HTML5', color: 'bg-[#EF6C6C]' },
  { label: 'CSS3', color: 'bg-[#3D8BF2]' },
  { label: 'MySQL', color: 'bg-[#9B5DE5]' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-[150px] pb-[90px] md:pt-[150px]"
      style={{
        background:
          'radial-gradient(circle at 78% 15%, rgba(108,76,241,0.16), transparent 55%), radial-gradient(circle at 10% 90%, rgba(32,178,166,0.14), transparent 50%)',
      }}
    >
      <div className="max-w-wrap mx-auto px-[22px] flex flex-col-reverse md:flex-row items-center justify-between gap-11 md:gap-[60px] text-center md:text-left">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 font-mono text-[0.78rem] text-violet bg-violetSoft px-[14px] py-1.5 rounded-full mb-[22px] before:content-['●'] before:text-[0.6rem]">
            Open to Full Stack Developer roles
          </span>
          <h1 className="font-display text-[2.4rem] md:text-[3.4rem] leading-[1.12] mb-[14px]">
            Hi, I'm <span className="text-violet">Sakthivel R</span>
          </h1>
          <p className="text-[1.05rem] text-muted font-medium mb-[18px]">
            Full Stack Developer · PHP &amp; Laravel Specialist
          </p>
          <p className="text-muted max-w-[520px] mx-auto md:mx-0 mb-[30px]">
            Full Stack Developer and MCA graduate passionate about building practical web
            applications and technology-driven solutions. I enjoy working across the stack, from
            creating clean user interfaces to developing backend logic and database-driven
            applications.
          </p>
          <div className="flex gap-3.5 justify-center md:justify-start flex-wrap mb-9">
            <a
              href="#projects"
              className="bg-violet text-white px-[26px] py-[13px] rounded-full font-semibold text-[0.94rem] transition-all hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(108,76,241,0.32)]"
            >
              View My Projects
            </a>
            <a
              href="#contact"
              className="bg-transparent text-ink border-[1.5px] border-ink/10 px-[26px] py-[13px] rounded-full font-semibold text-[0.94rem] transition-all hover:border-violet hover:text-violet hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
          <div className="flex gap-2.5 flex-wrap justify-center md:justify-start">
            {BADGES.map((badge) => (
              <span
                key={badge.label}
                className={`font-mono text-[0.76rem] font-medium text-white px-[14px] py-[7px] rounded-full ${badge.color}`}
              >
                {badge.label}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-[190px] h-[190px] md:w-[280px] md:h-[280px] flex-shrink-0">
          <div
            className="absolute -inset-2.5 rounded-full opacity-90"
            style={{
              background:
                'conic-gradient(from 120deg, #6C4CF1, #20B2A6, #F5A623, #6C4CF1)',
            }}
          />
          <img
            src={profilePic}
            alt="Sakthivel R"
            className="relative w-full h-full rounded-full object-cover border-[5px] border-paper"
          />
        </div>
      </div>
    </section>
  )
}
