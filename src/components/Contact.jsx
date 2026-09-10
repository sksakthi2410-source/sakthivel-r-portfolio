import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="py-[88px]">
      <div className="max-w-wrap mx-auto px-[22px]">
        <div className="reveal mb-11">
          <span className="block font-mono text-[0.78rem] text-violet mb-2">// contact</span>
          <h2 className="font-display text-[1.9rem]">Let's build something together</h2>
        </div>
        <div className="reveal flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <p className="text-muted max-w-[400px]">
              I'm currently open to opportunities as a Full Stack Developer, Web Developer or
              related entry-level software development roles.
            </p>
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-violetSoft text-violet flex items-center justify-center text-lg flex-shrink-0">
                  ✉
                </div>
                <a href="mailto:sksakthi2410@gmail.com" className="text-[0.95rem] font-medium">
                  sksakthi2410@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-violetSoft text-violet flex items-center justify-center text-lg flex-shrink-0">
                  ☎
                </div>
                <a href="tel:+918056943891" className="text-[0.95rem] font-medium">
                  8056943891
                </a>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-violetSoft text-violet flex items-center justify-center text-lg flex-shrink-0">
                  📍
                </div>
                <span className="text-[0.95rem] font-medium">Tiruchirappalli, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-3.5">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-violetSoft text-violet flex items-center justify-center text-lg flex-shrink-0">
                  in
                </div>
                <a
                  href="https://www.linkedin.com/in/sakthivelr24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.95rem] font-medium"
                >
                  linkedin.com/in/sakthivelr24
                </a>
              </div>
            </div>
          </div>

          <div className="flex-[1.2]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
              <div className="flex flex-col md:flex-row gap-3.5">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-[13px] rounded-[10px] border-[1.5px] border-ink/10 text-[0.95rem] bg-white focus:outline-none focus:border-violet transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-[13px] rounded-[10px] border-[1.5px] border-ink/10 text-[0.95rem] bg-white focus:outline-none focus:border-violet transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={form.subject}
                onChange={handleChange}
                className="w-full px-4 py-[13px] rounded-[10px] border-[1.5px] border-ink/10 text-[0.95rem] bg-white focus:outline-none focus:border-violet transition-colors"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                value={form.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-[13px] rounded-[10px] border-[1.5px] border-ink/10 text-[0.95rem] bg-white focus:outline-none focus:border-violet transition-colors resize-y min-h-[110px]"
              />
              <button
                type="submit"
                className="bg-violet text-white px-[26px] py-[13px] rounded-full font-semibold text-[0.94rem] transition-all hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(108,76,241,0.32)] self-start"
              >
                Send Message
              </button>
              <p className="text-[0.8rem] text-muted mt-1">
                Note: this form isn't connected to an email backend yet — messages won't actually
                be sent until that's set up.
              </p>
              {submitted && (
                <p className="text-[0.88rem] font-semibold text-teal mt-2.5">
                  Form captured locally — connect a backend (e.g. Formspree/EmailJS) to actually
                  deliver messages.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
