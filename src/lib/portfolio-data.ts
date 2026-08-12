export const LINKS = {
  github: "https://github.com/divagar127",
  leetcode: "https://leetcode.com/u/divagar_s/",
  linkedin: "https://www.linkedin.com/in/divagar-s",
  email: "div27122005@gmail.com",
  phone: "+91 94876 71796",
};

export const skills = [
  { title: "Programming", items: ["C++", "Python", "Data Structures & Algorithms"] },
  {
    title: "AI / ML",
    items: [
      "ML",
      "DL",
      "NLP",
      "RAG",
      "LLMs",
      "Transformers",
      "AI Agents",
      "LangChain & LangGraph",
      "MCP",
      "n8n",
    ],
  },
  {
    title: "ML / DL Frameworks",
    items: ["PyTorch", "TensorFlow", "Hugging Face", "Scikit-learn", "Keras"],
  },
  { title: "CS Fundamentals", items: ["OOP", "DBMS", "OS", "Networking"] },
  { title: "Backend & Databases", items: ["Django/FastAPI", "REST APIs", "SQL", "PostgreSQL"] },
  {
    title: "DevOps & Cloud",
    items: ["Git", "GitHub", "Docker", "Kubernetes", "Linux", "AWS", "Vercel / Render"],
  },
];

export const projects = [
  {
    title: "NLP Telugu Multi-Turn Dialogue System",
    githubUrl: "https://github.com/divagar127/NLP_Telugu-Multi-Turn-Dialogue",
    description:
      "Domain-specialized prompting framework for Telugu multi-turn dialogue using Gemma 3 and Sarvam-1 on the IndicDialogue corpus.",
    highlights: ["99% semantic fidelity (BERTScore)", "10,000+ dialogue samples", "MuRIL + FAISS Vector DB"],
    tags: ["Python", "Transformers", "Gemma 3", "FAISS", "Hugging Face"],
  },
  {
    title: "Bluesky Sentiment Analysis Pipeline",
    githubUrl: "https://github.com/divagar127/Bluesky-sentiment-Analysis",
    description:
      "Scalable real-time sentiment analysis using Kafka, Spark, HDFS, and RoBERTa with sub-2s latency.",
    highlights: ["Sub-2s latency", "Real-time visualization", "Grafana + Superset dashboards"],
    tags: ["Kafka", "Spark", "HDFS", "RoBERTa", "Docker", "Airflow"],
  },
  {
    title: "SQL Fitness Tracker",
    githubUrl: "https://github.com/divagar127/Fitness-Tracker",
    description:
      "Calorie and nutrition tracking platform with AI-powered recommendations and analytics dashboards.",
    highlights: ["AI nutrition assistant", "Interactive analytics", "Optimized backend APIs"],
    tags: ["React.js", "Node.js", "PostgreSQL", "NLP"],
  },
  {
    title: "AI Skin Doctor Master",
    githubUrl: "https://github.com/divagar127/AI-skin-doctor-master",
    description:
      "Multimodal AI healthcare platform integrating Computer Vision and LLM-based medical assistance for skin disease analysis.",
    highlights: [
      "ResNet18 + Attention U-Net hybrid diagnostics",
      "Gemini & Azure OpenAI medical chat",
      "Real-time WebSocket consultations",
      "Dockerized Azure deployment, A100 HPC training",
    ],
    tags: ["FastAPI", "ResNet18", "Attention U-Net", "Gemini", "Azure OpenAI", "Docker", "Slurm"],
  },
];

export const research = [
  {
    venue: "DravidianLangTech 2026",
    status: "Published",
    url: "https://aclanthology.org/2026.dravidianlangtech-1.5/",
    title:
      "LIMP: Linguistically-Informed Multi-Strategy Prompting for Telugu Multi-Turn Dialogue Generation",
    intro: "",
    points: [
      "Engineered Rasa-Guided Framework: Developed a domain-specialized prompting architecture for Telugu multi-turn dialogue, integrating classical Indian aesthetic theory and Chain-of-Thought scaffolds to encode cultural nuances.",
      "Built High-Fidelity ML Pipeline: Constructed an end-to-end system utilizing Gemma 3, MuRIL embeddings, and FAISS Vector DB to achieve 99% semantic fidelity across 10,000+ dialogue samples.",
      'Validated Model Performance: Produced an ACL-format paper identifying "semantic–lexical dissociation," proving that small models (1B-2B) can outperform larger, non-specialized systems in low-resource language tasks.',
    ],
    tags: ["NLP", "LLM Prompting", "Low-Resource Languages"],
  },
  {
    venue: "IEEE RECCAP 2026",
    status: "Accepted",
    url: "",
    title:
      "Multi-Level Domain Adaptation for Subject-Independent ERP Classification Using Domain Adversarial Neural Networks",
    intro:
      "Real-world ERP-based BCIs often require lengthy calibration due to inter-subject variability. To address this, we propose a Multi-Level Domain Adversarial Neural Network (ML-DANN) for zero-calibration, cross-subject classification.",
    points: [
      "Challenge: Overcomes inter-subject variability in ERP-based BCIs by eliminating subject-specific calibration.",
      "Methodology: Uses ML-DANN with CNN-LSTM-Attention architectures, GRL for domain invariance, and Supervised Contrastive Learning for class-wise clustering.",
      "Results: Outperforms Vanilla DANN and Deep CORAL on the GIB-UVA dataset, achieving a 0.8294 mean accuracy.",
    ],
    tags: ["BCI", "Domain Adaptation", "Deep Learning"],
  },
];

export const education = [
  {
    degree: "B.Tech Computer Science and Engineering (AI)",
    school: "Amrita Vishwa Vidyapeetham",
    period: "2023 - 2027",
    location: "Ettimadai, Coimbatore",
    description:
      "I am basically a philomath \u2014 a passionate and driven individual with a keen interest in technology and innovation. I enjoy exploring AI, coding, and building practical solutions to real-world problems. With a blend of creativity and technical skills, I thrive in collaborative environments and continuously seek opportunities to grow and make a positive impact.",
    achievements: ["CGPA 7.75/10"],
  },
  {
    degree: "12th grade",
    school: "Petit Seminaire Hr. Sec School",
    period: "2023",
    location: "Puducherry",
    description: "",
    achievements: ["I have completed my 12th grade with a score of 83.5%"],
  },
  {
    degree: "10th grade",
    school: "Petit Seminaire Hr. Sec School",
    period: "2021",
    location: "Puducherry",
    description: "",
    achievements: ["I have completed my 10th grade with a score of 100%"],
  },
];
