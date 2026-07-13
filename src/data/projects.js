const projects = [
  {
    id: 1,
    title: "Nepali Legal Document Assistant",
    description: "RAG-based legal document assistant that analyzes uploaded Nepali legal documents to generate plain-language summaries, extract key clauses, flag risky terms with severity levels, and answer questions via multi-turn chat.",
    github: "https://github.com/SupravCT/nepali-legal-assistant",
    demo: "https://your-streamlit-link.streamlit.app",
    tags: ["LangChain", "RAG", "ChromaDB", "Streamlit", "Pydantic"],
    category: "AI/ML"
  },
  {
    id: 2,
    title: "CV and Job Match Assistant",
    description: "RAG application that analyzes a candidate's CV against job descriptions to generate match scores, tailored cover letters, and skill gap analysis using semantic retrieval and structured LLM output.",
    github: "https://github.com/SupravCT/Job_Assistant_helper",
    demo: "https://jobassistantapper-c8wfj5up6vagappt8finex.streamlit.app/",
    tags: ["LangChain", "ChromaDB", "HuggingFace", "Streamlit"],
    category: "AI/ML"
  },
  {
    id: 3,
    title: "Football Player Scouting System",
    description: "End-to-end football player scouting web application that recommends similar players using cosine similarity and clustering on real player statistics with interactive visualizations.",
    github: "https://github.com/SupravCT/FOOTBALL_PLAYER_SCOUTING",
    demo: "https://football-player-scouting.onrender.com/",
    tags: ["Python", "scikit-learn", "Flask", "Plotly", "t-SNE"],
    category: "ML"
  },
  {
    id: 4,
    title: "Heart Disease Prediction System",
    description: "End-to-end heart disease prediction web application using Random Forest and PyTorch Neural Network trained on real clinical data with dual-model predictions and confidence scores.",
    github: "https://github.com/SupravCT/HEART_BEAT_PREDICT",
    demo: "https://heart-beat-predict.onrender.com/",
    tags: ["PyTorch", "scikit-learn", "Flask", "Python"],
    category: "ML"
  },
  {
    id: 5,
    title: "Movie Review Sentiment Analyzer",
    description: "Sentiment classification system fine-tuned BERT transformer on 50,000 IMDB reviews with custom PyTorch Dataset pipeline and HuggingFace Transformers.",
    github: "https://github.com/SupravCT/MOVIE_REVIEWER_ANALYZER",
    demo: "",
    tags: ["PyTorch", "BERT", "HuggingFace", "Python"],
    category: "ML"
  },
  {
    id: 6,
    title: "Hospital Management System",
    description: "Full-stack hospital management system with appointment scheduling, patient management, JWT authentication, role-based authorization, and Esewa payment gateway integration.",
    github: "https://github.com/SupravCT/Hospital-Management-System",
    demo: "",
    tags: ["React", "Node.JS", "MongoDB", "Express", "JWT"],
    category: "Web"
  },
  {
  id: 7,
  title: "Kathmandu School Insights",
  description: "Interactive web application that visualizes all schools in Kathmandu on an OpenGL map, allowing users to explore school locations, view detailed school information, and calculate distances between any two schools or locations across the city.",
  github: "https://github.com/SupravCT/Kathmandu_School_Insights",
  demo: "https://kathmandu-school-insights.vercel.app/",
  tags: ["React", "TypeScript", "Node.JS", "OpenGL Maps"],
  category: "Web"
},
]

export default projects