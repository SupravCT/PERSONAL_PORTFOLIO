import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = ['About', 'Skills', 'Projects', 'Contact']

  return (
    <nav className="fixed top-0 w-full bg-gray-950/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-400">Suprav Chand</span>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-blue-400 transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button className="md:hidden text-gray-300" onClick={() => setOpen(!open)}>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-gray-950">
          {links.map(link => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-blue-400" onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Navbar