const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["Python", "JavaScript"]
    },
    {
      category: "ML & AI",
      items: ["PyTorch", "scikit-learn", "HuggingFace", "Pandas", "NumPy", "Librosa"]
    },
    {
      category: "LLM & RAG",
      items: ["LangChain", "Groq API", "ChromaDB", "HuggingFace Embeddings", "Prompt Engineering"]
    },
    {
      category: "Web Frameworks",
      items: ["React", "Node.JS", "Express.JS", "Flask", "Streamlit"]
    },
    {
      category: "Databases",
      items: ["MongoDB", "MySQL"]
    },
    {
      category: "Tools",
      items: ["Git", "Kaggle", "Google Colab", "VS Code"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <div key={skill.category} className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h3 className="text-blue-400 font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map(item => (
                  <span
                    key={item}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills