import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col hover:border-blue-400 transition-colors duration-300">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full">
          {project.category}
        </span>
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
              <FaExternalLinkAlt size={16} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed flex-grow mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.tags.map(tag => (
          <span key={tag} className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProjectCard