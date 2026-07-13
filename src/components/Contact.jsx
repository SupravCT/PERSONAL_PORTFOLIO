import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, feel free to reach out!
        </p>

        <a href="mailto:supravchand2@gmail.com" className="inline-block bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors mb-12">
          Say Hello
        </a>

        <div className="flex justify-center gap-8 text-gray-400">
          <a href="https://github.com/SupravCT" target="_blank" className="hover:text-white transition-colors flex flex-col items-center gap-2">
            <FaGithub size={28} />
            <span className="text-sm">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/suprav-chand-b96811319/" target="_blank" className="hover:text-blue-400 transition-colors flex flex-col items-center gap-2">
            <FaLinkedin size={28} />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a href="mailto:supravchand2@gmail.com" className="hover:text-blue-400 transition-colors flex flex-col items-center gap-2">
            <FaEnvelope size={28} />
            <span className="text-sm">Email</span>
          </a>
        </div>

        <p className="text-gray-600 mt-16 text-sm">
          Designed & Built by Suprav Chand
        </p>
      </div>
    </section>
  )
}

export default Contact