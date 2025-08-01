'use client'

export default function Education() {
  return (
    <section id="timeline" className="section-padding section-gradient">
      <div className="max-w-5xl mx-auto container-padding">
        <div className="text-center mb-16">
          <span className="text-purple-400 font-semibold text-sm tracking-wide uppercase">Education & Certifications</span>
          <h2 className="heading-lg text-white mb-6">Academic <span className="gradient-text">Journey</span></h2>
          <p className="text-zinc-400 body-md max-w-3xl mx-auto">
            A foundation built on formal education and continuous professional development
          </p>
        </div>
        <div className="space-y-12">
          {/* Degree */}
          <div className="glass-stronger rounded-2xl p-8 mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Bachelor of Technology in Information Technology</h3>
            <p className="text-purple-400 font-medium mb-2">
  <a href="https://www.marwadiuniversity.ac.in" target="_blank" rel="noopener noreferrer" className="hover:underline">
    Marwadi University
  </a>
</p>
            <p className="text-zinc-300">Studied advanced programming, algorithms, and software engineering.</p>
          </div>
          {/* Cert */}
          <div className="glass-stronger rounded-2xl p-8 mb-6">
            <h3 className="text-xl font-semibold text-white mb-2">Certifications I’ve earned along my learning journey <span className="text-xs text-purple-300">(Present)</span></h3>
            <p className="text-zinc-400 mb-2">Comprehensive training across core areas of software engineering, combining theoretical knowledge with hands-on application. Developed certified skills in programming,:</p>
            <ul className="text-zinc-400 list-disc list-inside mb-4">
              <li><b>AWS Academy Machine Learning Foundations</b>: Intro to ML concepts, supervised learning, and AWS tools.</li>
              <li><b>Python</b>: Covered Python fundamentals including variables, control flow, functions, and file handling.</li>
              <li><b>Cisco Networking Essentials</b>: Basics of IP addressing, LAN/WAN, and network setup.</li>
              <li><b>Software Engineering Basics</b>: Covered SDLC, design models, and software testing.</li>
              <li><b>NDG Linux Essentials (Red Hat Linux)</b>: Learned Linux command-line fundamentals, file system navigation.</li>
              <li><b>IBM Data Scienc</b>: Python, data analysis, and Jupyter Notebook basics.</li>
              <li><b> Oracle SQL</b>: Gained practical skills in SQL querying, data modeling, joins, constraints, and database normalization with Oracle tools.</li>
            </ul>
            <a href="https://drive.google.com/drive/folders/1riCLURc_1yGziWw0mMc5kPNSbl_Xyom7" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-purple-400 underline hover:text-purple-300">View Certificate</a>
          </div>
        </div>
      </div>
    </section>
  )
}
