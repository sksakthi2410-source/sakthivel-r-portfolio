export default function ResumeCta() {
  return (
    <section className="py-[88px]">
      <div
        className="reveal mx-[22px] rounded-[22px] p-12 md:p-12 text-center text-white"
        style={{ background: 'linear-gradient(120deg, #6C4CF1, #4A32C4)' }}
      >
        <h2 className="font-display text-[1.6rem] mb-3">Want to know more about my experience?</h2>
        <p className="text-white/85 max-w-[440px] mx-auto mb-[26px]">
          Download my resume to explore my education, technical skills, projects and
          certifications.
        </p>
        <a
          href="./assets/Sakthivel_R_Resume.pdf"
          download="Sakthivel_R_Resume.pdf"
          className="inline-block bg-white text-violet px-[26px] py-[13px] rounded-full font-semibold text-[0.94rem] transition-all hover:shadow-[0_12px_24px_rgba(0,0,0,0.2)]"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}
