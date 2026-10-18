export const experience = [
  {
    id: "aganitha",
    org: "Aganitha Cognitive Solutions",
    role: "AI Engineer | Jan 2026 - Present | Onsite | Full-time (Jr Developer Intern, Sep 2025 - Dec 2025)",
    logo: "/assets/aganitha.png",
    logoAlt: "Aganitha Logo",
    url: "https://www.aganitha.ai",
    highlights: [
      "Split serving from the dossier build pipeline of an AI platform for pharma R&D: shipped a read-only FastAPI service (async I/O, Redis cache keyed by file version) that shrank the image from 11.3 GB to 0.8 GB.",
      "Cut over with zero regressions: replayed 6,900+ recorded requests against both backends with 0 content differences in exports; 28 requests/s at 16 clients with 0 errors; slowest export 472 s to 31 s.",
      "Built the LLM summarization module (BAML + Gemini) for 52 endpoints, using schema-aware projectors instead of RAG (largest payload 313K to 17K tokens).",
      "Moved data fetching out of the monolith into stateless CLI tools and AI agent skills, chosen over MCP so agents load only the commands they need.",
      "Secured and deployed the platform: default-deny auth middleware, LDAP over TLS, per-customer data catalogs, multi-instance Docker deployment, versioned S3 storage for report decks.",
      "Built the Research Watcher agent (Google ADK) with Google Scholar, PubMed and bioRxiv connectors, human-in-the-loop queries and subscription digests over a Redis job queue.",
      "Contributed to the internal platform: job manager, event bus, and the atk and sp CLIs that ship our tools and skill packs. Now designing a durable build job queue.",
    ],
  },
  {
    id: "iit-dharwad",
    org: "IIT Dharwad",
    role: "ML Research Intern | Jan 2025 - May 2025 | Hybrid | Internship",
    logo: "/assets/iit.png",
    logoAlt: "IIT Dharward",
    url: "https://www.iitdh.ac.in/",
    highlights: [
      "Developed a 2FA voice authentication system with a React frontend and real-time audio processing.",
      "Fine-tuned ECAPA-TDNN and Titanet-L on Indian speech datasets, improving EER and minDCF.",
      "Improved model robustness across cross-sensor and cross-lingual variations.",
    ],
  },
  {
    id: "samsung-prism",
    org: "Samsung Prism",
    role: "Project Intern | Sep 2023 - Aug 2024 | Remote | Internship",
    logo: "/assets/prism.jpg",
    logoAlt: "PRISM Logo",
    url: "https://www.samsungprism.com/",
    highlights: [
      "Built a bias detection model for LLM-generated summaries of news articles, using BERT for classification and BART for correction on the WNC dataset.",
      "Formulated 2 novel evaluation metrics for style transfer and content preservation that outperformed BLEU.",
    ],
  },
];

export default experience;
