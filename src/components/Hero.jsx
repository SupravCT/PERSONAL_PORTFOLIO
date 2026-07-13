import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="text-center max-w-3xl">
        <p className="text-blue-400 text-lg mb-4">Hi, I'm</p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Suprav Chand
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-400 mb-6">
          AI/ML Engineer & Full Stack Developer
        </h2>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          BSc CSIT Graduate from Tribhuvan University, Kathmandu.
          Building intelligent applications with LangChain, PyTorch, and modern web technologies.
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <a href="https://github.com/SupravCT" target="_blank" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/suprav-chand-b96811319/" target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="/SUPRAV_RESUME.pdf" download className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-colors">
            Download CV
          </a>
        </div>

        <div className="flex gap-6 justify-center text-gray-400">
          <a href="mailto:supravchand2@gmail.com" className="hover:text-blue-400 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero