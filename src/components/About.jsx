const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I'm a recent BSc CSIT graduate from Tribhuvan University, Kathmandu with hands-on experience in Python, JavaScript, Machine Learning, and AI development.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              I completed an internship as a Full Stack Developer at Kathmandu Living Labs.I am currently doing Freelance projects.
            </p>
            
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects", value: "6+" },
              { label: "Technologies", value: "15+" },
              { label: "Experience", value: "1 Year" },
              { label: "Location", value: "Kathmandu, Nepal" },
            ].map(item => (
              <div key={item.label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
                <p className="text-3xl font-bold text-blue-400 mb-2">{item.value}</p>
                <p className="text-gray-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About