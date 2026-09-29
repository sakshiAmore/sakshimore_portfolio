// Portfolio content transcribed from Sakshi More's resume.
export const profile = {
  name: 'Sakshi More',
  roles: 'Data Science • AI/ML Engineer • Generative AI • Data Analyst',
  tagline: 'Building and evaluating machine-learning models, LLM-powered applications, and data analytics that turn complex information into actionable insight.',
  location: 'Panvel, Maharashtra',
  phone: '+91 8454866503',
  email: 'sakshi.more2404@gmail.com',
  github: 'https://github.com/sakshiAmore',
  linkedin: 'https://www.linkedin.com/in/sakshi-more-223a44299',
  about: [
    'Analytical, research-driven early-career data scientist with hands-on experience across machine learning, deep learning, Generative AI (LLMs, RAG, and prompt engineering), and applied data analytics. Builds and evaluates ML models and LLM-powered applications, translating data into actionable business insights.',
    'Strong foundation in statistical analysis, feature engineering, model evaluation, responsible AI, and risk-focused problem solving. Proficient in Python and SQL, with experience using Scikit-learn, LangChain, Flask, Power BI, and data pipelines.',
  ],
};

export const skills = {
  'Machine Learning / AI': ['Logistic Regression', 'Linear Regression', 'Decision Trees', 'Random Forest', 'SVM', 'KNN', 'Gradient Boosting', 'Clustering', 'Isolation Forest', 'Model Evaluation & Tuning'],
  'Generative AI / NLP': ['LangChain', 'LangChain Agents', 'ReAct Agent', 'RAG', 'Prompt Engineering', 'FAISS', 'Groq Llama 3.3-70B'],
  'Languages & Frameworks': ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'SQL', 'PySpark (familiar)', 'Hive (familiar)', 'Flask'],
  'Cloud & Tools': ['AWS S3 (familiar)', 'EC2 (familiar)', 'IAM (familiar)', 'Lambda (familiar)', 'CloudWatch (familiar)', 'AWS certification in progress', 'Power BI', 'Git', 'MySQL', 'MongoDB'],
  'Core Concepts': ['Statistical Analysis', 'Feature Engineering', 'Data Visualization', 'Exploratory Data Analysis', 'Data Pipelines', 'Responsible AI Practices'],
};

export const projects = [
  {
    title: 'AML Fraud Detection System',
    description: 'Machine-learning system for flagging suspicious transactions.',
    points: [
      'Compared Logistic Regression, SVM, and Gradient Boosting, achieving 90–95% accuracy and 0.72 ROC-AUC.',
      'Improved precision and recall with feature engineering, hyperparameter tuning, and robust evaluation.',
    ],
    tags: ['Python', 'Scikit-learn', 'Machine Learning', 'AML'],
    link: '#',
  },
  {
    title: 'LLM-Based AI Chatbot',
    description: 'Context-aware document Q&A with a retrieval-augmented generation pipeline.',
    points: [
      'Built with LangChain, Groq Llama 3.3-70B, and FAISS for semantic document retrieval and context-aware answers.',
      'Designed a LangChain agent with custom retrieval and calculator tools for multi-turn conversations and mathematical reasoning.',
      'Deployed Flask REST APIs with MongoDB for conversation history, session management, and dynamic prompt construction.',
    ],
    tags: ['Python', 'Flask', 'LangChain', 'FAISS', 'Groq', 'MongoDB', 'RAG'],
    link: '#',
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Machine-learning model to identify customers at risk of leaving.',
    points: [
      'Built a churn prediction model with approximately 90% accuracy.',
      'Evaluated precision, recall, F1-score, and ROC-AUC, and identified churn drivers to inform retention strategies.',
    ],
    tags: ['Python', 'Machine Learning', 'Model Evaluation'],
    link: '#',
  },
  {
    title: 'Sales Analytics Dashboard',
    description: 'Interactive Power BI dashboards for KPI tracking and business insights.',
    points: ['Automated weekly reporting workflows.'],
    tags: ['Power BI', 'Data Analytics', 'Reporting'],
    link: '#',
  },
];

export const experience = [
  {
    role: 'Data Scientist Intern – AML Department',
    company: 'IDBI Intech',
    period: 'Dec 2025 – Apr 2026',
    points: [
      'Built Isolation Forest anomaly-detection models for transaction monitoring, improving fraud detection accuracy by 10–12%.',
      'Reduced false positives by 12–15% through model tuning, improving compliance-monitoring efficiency.',
      'Processed 100K+ transactions with SQL and Python using RFM-based data pipelines.',
      'Automated reporting workflows with Python, reducing manual effort by 40%.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Unified Mentor',
    period: 'May 2024 – Jul 2024',
    points: [
      'Analyzed 100K+ records with Python and SQL to extract actionable business insights.',
      'Developed Power BI dashboards for KPI tracking and performance monitoring.',
      'Automated reporting pipelines, saving 10+ hours per week.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'AoT Solutions',
    period: 'Jul 2022 – Aug 2022',
    points: ['Optimized SQL queries, improving execution time by 20% and backend data-retrieval performance.'],
  },
];

export const education = [
  { qualification: 'B.Tech in Computer Engineering', institution: 'Pillai College of Engineering', period: '2023 – 2026' },
  { qualification: 'Diploma in Computer Technology', institution: 'Bharati Vidyapeeth', period: '2020 – 2023' },
];

export const certifications = [
  'IBM – Python 101 for Data Science (Cognitive Class)',
  'Deloitte – Data Analytics Simulation',
  'Google Cloud – Career Launchpad Data Analytics',
  'Quantium – Data Analytics Simulation',
];
