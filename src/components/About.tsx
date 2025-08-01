'use client'

const skills = [
  'AI & ML',
  'UI/UX Design',
  'Full Stack',
  'JAVA, PYTHON, C, C#',
  'API Integration',
  'Problem Solving',
  'Database (SQL, Mongo)',
  'VS Code, Jupyter Notebook, Git.',
  'Network Security',
  'Project Management',
  'QA Engineer',
  'Cloud Platforms (AWS/Azure)'
]

export default function About() {
  return (
    <section id="about" className="section-padding section-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">About Me</span>
              <h2 className="heading-lg text-white">Professional Background<span className="gradient-text"> & Focus</span></h2>
            </div>
            <div className="space-y-6 text-zinc-300 body-md leading-relaxed">
              <p>Hi, I'm <b className="text-white">Vikash Kumar kushwaha </b> — a versatile Software Developer and IT Specialist with a degree in Computer Information Technology from Marwadi University. I specialize in building secure, user-friendly applications and maintaining the technical systems that power them.</p>
              <p>With experience in software engineering, desktop support, and system administration, I thrive in hybrid roles where troubleshooting, innovation, and user satisfaction come together. I've developed modern web and mobile apps using React, Flutter, and Python, while also managing real-world issues like system configurations, hardware/software troubleshooting, and secure network operations.</p>
              <p>As i'm <b className="text-purple-400">Software Engineer, </b>I’ve explored manything from designing user experiences to writing backend logic and experimenting with machine learning. I believe in building things that are not only functional but intuitive, secure, and future-ready. Right now, I’m focused on sharpening my design thinking, learning how great software is tested, and exploring how AI can make everyday tools smarter.</p>
            </div>
          </div>
          {/* Skills List */}
          <div className="space-y-8">
            <div className="glass-stronger rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Core Skills</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-zinc-300">
                {skills.map(skill => (
                  <li key={skill} className="before:content-['•'] before:mr-2 before:text-purple-400">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
