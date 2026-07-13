import { useState } from 'react'
import ProjectCard from './PorjectCard.jsx'
import projects from '../data/projects'

const Projects = () => {
  const [filter, setFilter] = useState('All')
  const categories = ['All', 'AI/ML', 'ML', 'Web']

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">
          Things I've built
        </p>

        {/* Filter buttons */}
        <div className="flex gap-3 justify-center mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-colors ${
                filter === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects