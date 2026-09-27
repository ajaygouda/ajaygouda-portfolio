export interface ClientEngagement {
  client: string;
  subtext: string;
  narrative: string;
  technologies?: string[];
}

export interface ExperienceProject {
  id: string;
  name: string;
  client: string;
  duration: string;
  role: string;
  description: string;
  technologies: string[];
  highlights: string[];
  impactMetric?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  numberTag: string; // e.g. "01", "02"
  dateEmployerTag: string; // e.g. "DEC 2024 — PRESENT / EMPLOYER"
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  keyClients: string[];
  bulletPoints: string[];
  technologies: string[];
  engagements: ClientEngagement[];
  projects: ExperienceProject[];
}

export interface Project {
  id: string;
  title: string;
  clientOrContext: string;
  category:
    | "Full-Stack & Cloud"
    | "AI & LLM"
    | "Fintech & Dashboards"
    | "CMS & Enterprise";
  timeframe: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  architectureHighlights: string[];
  techStack: string[];
  metrics: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Proficient";
    highlight?: string;
  }[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  text: string;
  avatarText: string;
}

export const PERSONAL_INFO = {
  name: "Ajay Gouda",
  title: "Senior Software Engineer / Full Stack Engineer",
  subRole: "UI/UX & Frontend Architecture Specialist",
  experienceYears: "12+",
  phone: "+91 98210 17345",
  email: "ajaygouda10@gmail.com",
  location: "Bengaluru / Mumbai, India",
  linkedin: "https://www.linkedin.com/in/ajay-gouda-2b992348/",
  github: "https://github.com/ajaygouda",
  website: "https://ajaygouda.github.io/",
  razorpayPaymentUrl: "https://pages.razorpay.com/buy-ajay-coffee",
  upiId: "ajaygouda10@okhdfcbank",
  summary:
    "Senior Software Engineer with 12+ years of experience engineering high-velocity, scalable frontend and full-stack applications. Deep expertise in JavaScript (ES6+), React.js, Next.js, Angular, and TypeScript, backed by robust state architectures (Redux, Zustand) and accessible design systems. Proven track record across Global Enterprise clients (Adobe, Code and Theory, Infosys, ABB), high-frequency Financial Dashboards, Adobe Experience Manager (AEM / HTL), Edge Delivery Services (EDS), and production GenAI / RAG pipelines.",
  stats: [
    {
      label: "Engineering Experience",
      value: "12+ Years",
      detail: "Frontend, Full Stack, AEM, AI",
    },
    {
      label: "Enterprise Clients Served",
      value: "3+ Major",
      detail: "Adobe, Infosys, ABB",
    },
    {
      label: "Industries Delivered",
      value: "4+ Sectors",
      detail: "Finance, Retail, E-commerce, CRM/HCM",
    },
    {
      label: "Technical Range",
      value: "Full-Stack + AI",
      detail: "React, Angular, Node, Python, CMS, LLM Integration",
    },
  ],
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "lead-architect",
    author: "Senior Engineering Director",
    role: "Digital Practice Head",
    company: "Vation Digital / Adobe Client Engagements",
    text: "Ajay possesses that rare combination of architectural discipline and execution speed. His work implementing AEM Edge Delivery Services and integrating headless retail endpoints was instrumental in delivering unprecedented sub-second page loads for our global retail clients.",
    avatarText: "SD",
  },
  {
    id: "fintech-lead",
    author: "Principal Systems Architect",
    role: "VP of Engineering",
    company: "Orion Innovation Financial Services",
    text: "When we needed to handle high-density streaming trade data across virtualized AG Grid matrices with zero frame drops, Ajay led the frontend design. His TypeScript interfaces and memory profiling kept our financial portals rock-solid.",
    avatarText: "PA",
  },
  {
    id: "design-director",
    author: "Head of Product Design",
    role: "UI/UX Practice Lead",
    company: "PM AM Corporation",
    text: "Ajay translates complex user flows into clean, elegant, tactile user interfaces effortlessly. He bridges the gap between design vision and pixel-perfect production code better than almost anyone I have worked with.",
    avatarText: "HP",
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    id: "vation-digital",
    numberTag: "01",
    dateEmployerTag: "MAR 2025 — PRESENT / EMPLOYER",
    role: "Senior Consultant · Fullstack Engineer",
    company: "Vation Digital",
    location: "Bengaluru, India",
    period: "MAR 2025 – Present",
    isCurrent: true,
    summary:
      "Leading front-end architecture, AEM enterprise solutions, and GenAI system implementations for tier-1 global clients.",
    keyClients: ["Adobe", "Code and Theory", "Infosys", "ABB"],
    bulletPoints: [
      "Working knowledge of Adobe Experience Manager (AEM) front-end development using HTL (Sightly), creating reusable modular components for content-driven enterprise applications.",
      "Build scalable front-end applications with React, Angular, JavaScript, TypeScript, SCSS, Styled Components, Storybook, and Tailwind CSS.",
      "Architected enterprise-grade POCs including AEM Edge Delivery Services (EDS), headless e-commerce (Strapi on Render, Cloudinary, Next.js on Vercel), and real-time airport kiosk systems.",
      "Created an enterprise RAG pipeline using FastAPI for routing, FAISS for vector search, LangChain orchestration, HuggingFace embeddings, and LLMs for intelligent query answering.",
      "Developed AI-driven test case generation workflows using LLMs to automate component verification.",
      "Delivered enterprise-scale solutions for high-profile clients including Adobe, Code and Theory, Infosys, and ABB.",
      "Integrated REST APIs ensuring 100% cross-browser compatibility and fully responsive mobile-first design.",
      "Optimized Core Web Vitals and collaborated in fast-paced Agile environments using Jira.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Headless CMS",
      "Strapi",
      "Contentful",
      "AEM / HTL",
      "AEM EDS",
      "TypeScript",
      "FastAPI",
      "FAISS",
      "LangChain",
      "Tailwind CSS",
      "Storybook",
      "WebSocket",
      "GraphQL",
    ],
    engagements: [
      {
        client: "Adobe",
        subtext: "ABB — AEM UI",
        narrative:
          "Worked on the ABB website (abb.com), building reusable components with Storybook and Styled Components, integrating existing Web Components for product details, maintaining the existing theme system following Atomic Design principles, implementing a global cookie consent solution using a third-party library, integrating Google Analytics tags, and contributing to global search functionality — with performance and Core Web Vitals in view.",
        technologies: [
          "React",
          "Storybook",
          "Styled Components",
          "Web Components",
          "HTL",
          "Core Web Vitals",
          "Atomic Design",
          "WCAG Guidelines",
        ],
      },
      {
        client: "Code and Theory",
        subtext: "Twist Bioscience — AEM UI",
        narrative:
          "Built reusable React and AEM components for the Twist Bioscience platform, integrated DAM-backed asset workflows, and established SCSS/BEM conventions for consistency across the site.",
        technologies: [
          "React",
          "AEM Components",
          "HTL",
          "DAM",
          "SCSS / BEM",
          "Core Web Vitals",
          "WCAG Guidelines",
        ],
      },
    ],
    projects: [
      {
        id: "aem-eds-portal",
        name: "Enterprise AEM Front-End & Edge Delivery Services (EDS)",
        client: "Adobe & Modern Retail",
        duration: "2024 - 2025",
        role: "Lead Frontend Architect",
        description:
          "Engineered ultra-fast content distribution blocks using Adobe Experience Manager (AEM) HTL (Sightly) and AEM Edge Delivery Services (EDS), achieving near-instant static publishing.",
        technologies: [
          "AEM",
          "HTL / Sightly",
          "AEM EDS",
          "JavaScript ES6+",
          "HTML5/CSS3",
          "Vercel",
        ],
        highlights: [
          "Developed modular HTL component library integrated with AEM content fragments",
          "Engineered edge rendering blocks reducing Largest Contentful Paint (LCP) to 0.4s",
          "Established automated preview workflow from GitHub to edge nodes",
        ],
        impactMetric: "0.4s LCP Edge Performance",
      },
      {
        id: "genai-rag-pipeline",
        name: "Enterprise GenAI Knowledge Retrieval (RAG) System",
        client: "Code and Theory / Enterprise Clients",
        duration: "2025",
        role: "Full-Stack AI Engineer",
        description:
          "Built end-to-end Retrieval-Augmented Generation (RAG) pipeline querying proprietary technical documentation with sub-15ms vector search.",
        technologies: [
          "FastAPI",
          "Python",
          "FAISS",
          "LangChain",
          "HuggingFace",
          "React",
          "TypeScript",
          "REST APIs",
        ],
        highlights: [
          "Implemented FAISS vector index with L2 distance matching under 15ms retrieval time",
          "Built asynchronous FastAPI gateway with streaming server-sent responses",
          "Engineered zero-retention data privacy controls for strict corporate compliance",
        ],
        impactMetric: "<15ms Semantic Vector Search",
      },
    ],
  },
  {
    id: "orion-innovation",
    numberTag: "02",
    dateEmployerTag: "MAY 2022 — FEB 2025 / EMPLOYER",
    role: "Senior Software Engineer · UI Specialist",
    company: "Orion Innovation",
    location: "Mumbai, India",
    period: "May 2022 – FEB 2025",
    summary:
      "Spearheaded front-end development of high-scale financial dashboards and trading platforms with complex telemetry.",
    keyClients: ["Tier-1 Global Financial Services", "BDMP", "Auvnir"],
    bulletPoints: [
      "Developed scalable front-end applications for major financial projects including BDMP, Auvnir, and client trade portals using JavaScript, TypeScript, React, Angular, HTML5, CSS3, SCSS, MUI, and AG Grid.",
      "Integrated REST APIs and built responsive, cross-browser financial dashboards capable of handling thousands of real-time rows with zero jank.",
      "Worked extensively in Azure cloud environments implementing DevOps best practices, CI/CD pipelines, and pull request quality gates.",
      "Customized Material UI (MUI) design systems and typography hierarchies according to stringent client branding requirements.",
      "Built generic, type-safe API utilities for reusable and resilient data fetching across micro-teams.",
      "Defined strong TypeScript data models and interfaces to guarantee contract safety across frontend and backend boundaries.",
    ],
    technologies: [
      "React.js",
      "Angular",
      "JavScript",
      "TypeScript",
      "AG Grid",
      "MUI",
      "Azure Cloud",
      "Azure DevOps",
      "REST APIs",
      "SCSS",
    ],
    engagements: [
      {
        client: "Auvnir",
        subtext:
          "Auvnir - Cloud-Based Client Engagement & Financial Reporting Platform",
        narrative:
          "Built performant, cross-browser financial dashboards for BDMP using Angular, with RxJS-driven reactive state management, lazy-loaded modular components, and OnPush change detection for optimized rendering. Enabled deep data drill-downs, dynamic column grouping, and smooth performance across 100k+ AG Grid rows for real-time trading and reporting workflows.",
        technologies: [
          "React",
          "JavaScript",
          "TypeScript",
          "SCSS",
          "MUI",
          "AG Grid",
          "REST APIs",
          "Azure DevOps",
        ],
      },
      {
        client: "Global Financial Services (BDMP)",
        subtext:
          "BDMP — Cloud-Based Client Engagement & Financial Reporting Platform",
        narrative:
          "Built performant, cross-browser financial dashboards for BDMP using Angular, enabling deep data drill-downs, dynamic column grouping, and smooth rendering across 100k+ virtualized AG Grid rows for real-time trading and reporting workflows.",
        technologies: [
          "Angular",
          "JavaScript",
          "TypeScript",
          "AG Grid",
          "MUI",
          "Azure",
          "Azure DevOps",
          "REST APIs",
        ],
      },
    ],
    projects: [
      {
        id: "bdmp-financial-grid",
        name: "BDMP Enterprise Financial Analytics Grid",
        client: "Global Financial Services",
        duration: "2022 - 2024",
        role: "Senior Frontend Engineer",
        description:
          "High-throughput financial grid application rendering tens of thousands of trade executions with real-time websocket ticks.",
        technologies: [
          "React.js",
          "TypeScript",
          "AG Grid Enterprise",
          "MUI",
          "WebSocket",
          "Azure",
        ],
        highlights: [
          "Implemented DOM virtualization supporting 100k+ rows without frame drop",
          "Custom multi-column sorting, grouping, and pinned pivot capabilities",
          "Sub-16ms render refresh cycles during high volatility market open hours",
        ],
        impactMetric: "100k+ Rows Virtualized at 60 FPS",
      },
    ],
  },
  {
    id: "pmam-corporation",
    numberTag: "03",
    dateEmployerTag: "MAY 2021 — MAY 2022 / EMPLOYER",
    role: "Senior UI/UX Developer",
    company: "PM AM Corporation",
    location: "Mumbai, India",
    period: "May 2021 – May 2022",
    summary:
      "Bridged the gap between product design and engineering across enterprise CRM, HCM, and Retail web applications.",
    keyClients: ["PM AM Healthcare", "Enterprise Retail Accounts"],
    bulletPoints: [
      "Built front-end solutions for CRM, Human Capital Management (HCM), and Retail applications using HTML, SCSS, JavaScript, jQuery, and React.",
      "Designed wireframes, rapid interactive prototypes, and high-fidelity mock-ups in Figma to streamline multi-step user workflows.",
      "Ensured comprehensive cross-browser compatibility and fully responsive layouts across mobile, tablet, and desktop viewports.",
      "Leveraged modern UI/UX design methodologies to significantly boost app performance, usability metrics, and user retention.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Figma",
      "HTML5",
      "SCSS",
      "jQuery",
      "UI/UX Design",
      "Wireframing",
    ],
    engagements: [
      {
        client: "PMAM In-house Products",
        subtext: "Enterprise HCM & CRM suite",
        narrative:
          "Worked on in-house products of PMAM's HCM and CRM applications using React and SCSS, translating new design specs into production front-ends. Built a review/ratings system for e-commerce products, and used Figma to audit and modify the existing design system as part of the redesign effort.",
        technologies: ["React", "JavaScript", "SCSS", "Figma", "REST APIs"],
      },
    ],
    projects: [
      {
        id: "pmam-crm-hcm",
        name: "Enterprise HCM & Workforce Management Platform",
        client: "PM AM Healthcare & Corporate",
        duration: "2021 - 2022",
        role: "UI/UX Developer",
        description:
          "Modular enterprise management platform for employee onboarding, shift scheduling, and compliance certifications.",
        technologies: ["React", "JavaScript", "SCSS", "Figma", "REST APIs"],
        highlights: [
          "Redesigned scheduling workflow reducing staff shift-booking time by 35%",
          "Created modular design system in Figma with 120+ interactive components",
          "Built responsive UI supporting desktop, tablet, and mobile field workers",
        ],
        impactMetric: "35% Faster Shift Booking",
      },
    ],
  },
  {
    id: "pioneer-informatics",
    numberTag: "04",
    dateEmployerTag: "NOV 2015 — MAY 2021 / EMPLOYER",
    role: "UI/UX Developer",
    company: "Pioneer Informatics India Pvt. Ltd.",
    location: "Mumbai, India",
    period: "Nov 2015 – May 2021",
    summary:
      "Designed and developed multi-platform digital experiences across in-house ERP, Retail, Restaurant, Hospitality, e-Commerce, Healthcare, and Kiosk product suites.",
    keyClients: [
      "Retail Chains",
      "Restaurant & Hospitality Brands",
      "Healthcare Networks",
      "Kiosk Operators",
    ],
    bulletPoints: [
      "Worked across in-house product lines — PERPS (Enterprise Resource Planning) and Stellar (Retail, Hospitality, e-Com & Marketplace Solutions) — covering both UI/UX design and front-end development.",
      "Designed and built backend admin/management interfaces enabling business users to manage retail, restaurant, and e-commerce solution data end-to-end.",
      "Built customer-facing applications including e-commerce platforms, self-service kiosks, POS and mobile POS systems, and high-traffic static websites.",
      "Designed the UI/UX for a Doctor–Patient appointment and consultation app, focusing on intuitive booking flows and accessible healthcare interactions.",
      "Utilized HTML5, CSS3, JavaScript, jQuery, Bootstrap, and SCSS with responsive media queries to build, maintain, and continuously optimize web applications across devices.",
    ],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "SCSS",
      "Responsive / Media Queries",
      "Figma",
      "Kiosk Platforms",
    ],
    engagements: [
      {
        client: "PERPS — Enterprise Resource Planning",
        subtext: "Enterprise Portal, Projects, Manufacturing & HR modules",
        narrative:
          "Contributed to PERPS, an in-house Enterprise Resource Planning suite covering the Enterprise Portal, Projects, Manufacturing Lite, HR, and Mobility modules. Designed and developed responsive admin interfaces enabling business users to manage projects, manufacturing operations, HR workflows, and enterprise data across desktop and mobile. Also designed the UI/UX for the HRMS mobile app, covering both web and mobile experiences for employee self-service, HR workflows, and management dashboards.",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "SCSS",
          "Adobe XD",
          "Web UI/UX",
          "Mobile UI/UX",
        ],
      },
      {
        client: "Stellar — Retail, Hospitality & e-Com Platforms",
        subtext: "POS, self-service kiosks & marketplace solutions",
        narrative:
          "Designed and developed UI/UX for the Stellar product suite spanning Retail, Hospitality, and e-Com & Marketplace solutions — including Central Back Office, POS and mobile POS, in-store self-checkout, table ordering, contactless dining, and e-commerce/marketplace platforms for retail and restaurant clients. Also designed UI/UX for companion mobile and tablet applications, ensuring consistent interaction patterns and visual design across web, mobile, and tablet form factors.",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "Touch Events",
          "Adobe XD",
          "Web UI/UX",
          "Mobile UI/UX",
          "Tablet UI/UX",
        ],
      },
      {
        client: "Hospitality & QSR Chains",
        subtext: "Self-service restaurant POS & touchscreen kiosks",
        narrative:
          "Designed and developed user-centric features for touchscreen self-service kiosk applications across restaurant point-of-sale systems, reducing customer ordering queue times by 40% with offline order buffering. Also designed UI/UX for companion mobile and tablet applications, ensuring consistent interaction patterns and visual design across kiosk, mobile, and tablet form factors.",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "jQuery",
          "Bootstrap",
          "Touch Events",
          "Adobe XD",
          "Web UI/UX",
          "Mobile UI/UX",
          "Tablet UI/UX",
        ],
      },
      {
        client: "Healthcare Network",
        subtext: "Doctor Appointment App (UI/UX)",
        narrative:
          "Designed the UI/UX for a Doctor–Patient appointment app using Adobe XD, from wireframes through high-fidelity interactive prototypes shared with clients for review and sign-off. Maintained structured design version control across iterations.",
        technologies: ["Adobe XD", "UI/UX Design", "Prototyping"],
      },
      {
        client: "6 Degree",
        subtext: "Event Management & e-Commerce Platform (UI/UX)",
        narrative:
          "Designed the UI/UX for 6 Degree, an event management and e-commerce platform, using Adobe XD — from wireframes through high-fidelity interactive prototypes shared with clients for review and sign-off. Designed the customer-facing website enabling users to browse and book events, along with the backend management system for administering events and e-commerce operations. Also designed the UI/UX for the companion mobile app, maintaining structured design version control across iterations.",
        technologies: [
          "HTML5",
          "CSS3",
          "JavaScript",
          "JQuery",
          "Adobe XD",
          "UI/UX Design",
          "Prototyping",
          "Mobile UI/UX",
        ],
      },
    ],
    projects: [
      {
        id: "restaurant-pos-kiosk",
        name: "Self-Service Restaurant POS & Order Kiosk",
        client: "Stellar — Hospitality & QSR Chains",
        duration: "2018 - 2021",
        role: "UI/UX Engineer",
        description:
          "Touchscreen self-ordering kiosk interface optimized for rapid customer order customization and checkout.",
        technologies: [
          "JavaScript",
          "HTML5 Canvas",
          "CSS3",
          "Bootstrap",
          "Touch Events",
        ],
        highlights: [
          "Engineered high-contrast, large-hit-target touchscreen user interface",
          "Reduced average line wait time by 40% across pilot restaurant locations",
          "Built offline fallback buffer for uninterrupted POS operation",
        ],
        impactMetric: "40% Line Wait Time Reduction",
      },
    ],
  },
  {
    id: "arigel-software",
    numberTag: "05",
    dateEmployerTag: "JUL 2014 — OCT 2015 / EMPLOYER",
    role: "UI/UX Designer",
    company: "Arigel Software",
    location: "Navi Mumbai, India",
    period: "July 2014 – Oct 2015",
    summary:
      "Foundational product design, user research, wireframing, and interactive prototyping for client web applications.",
    keyClients: ["Regional SMBs", "Commercial Startups"],
    bulletPoints: [
      "Translated client business requirements and user pain points into engaging, highly usable digital product interfaces.",
      "Collaborated directly with engineering teams to enhance usability, consistency, and visual polish.",
      "Conducted user testing sessions, refined navigation hierarchies, and established visual interface guidelines.",
    ],
    technologies: [
      "UI Design",
      "UX Research",
      "Wireframing",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Prototyping",
    ],
    engagements: [
      {
        client: "Commercial SMBs & Startups",
        subtext: "Brand web applications & interactive prototypes",
        narrative:
          "Created wireframes, user testing frameworks, and interactive prototypes for client digital platforms, translating client business requirements into engaging, high-usability interfaces.",
        technologies: [
          "UI Design",
          "UX Research",
          "Wireframing",
          "Photoshop",
          "Illustrator",
        ],
      },
    ],
    projects: [
      {
        id: "arigel-commerce-prototypes",
        name: "E-Commerce & Brand Showcase Web Portals",
        client: "Commercial Retail Clients",
        duration: "2014 - 2015",
        role: "UI/UX Designer",
        description:
          "Crafted interactive wireframes, vector assets, and responsive landing page layouts for early e-commerce businesses.",
        technologies: [
          "Photoshop",
          "Illustrator",
          "HTML",
          "CSS",
          "Wireframing",
        ],
        highlights: [
          "Developed brand style guides, iconography, and responsive layouts",
          "Delivered interactive clickable prototypes for executive stakeholder sign-off",
        ],
        impactMetric: "100% Client Approval Rate",
      },
    ],
  },
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "enterprise-rag-search",
    title: "Enterprise GenAI Knowledge Retrieval (RAG) System",
    clientOrContext: "Code and Theory / Enterprise Clients",
    category: "AI & LLM",
    timeframe: "2025",
    description:
      "Production Retrieval-Augmented Generation (RAG) system utilizing vector embeddings to query complex technical documentation with sub-15ms vector search.",
    longDescription:
      "Engineered an end-to-end enterprise RAG pipeline allowing users to query extensive corporate document stores with grounded citations. Built an asynchronous FastAPI routing layer, FAISS vector index with L2 distance matching, LangChain execution chains, and HuggingFace transformer embeddings. Features multi-tenant document chunking, prompt safety filters, and zero data-retention controls.",
    imageSrc: "/src/assets/images/project_rag_ai_1790271455810.jpg",
    architectureHighlights: [
      "FastAPI asynchronous router handling multi-tenant query traffic",
      "FAISS index with L2 distance matching under 15ms retrieval time",
      "LangChain execution chains orchestrating document chunking and LLM calls",
      "Zero-retention data privacy controls for enterprise compliance",
    ],
    techStack: [
      "FastAPI",
      "Python",
      "FAISS",
      "LangChain",
      "HuggingFace",
      "React",
      "TypeScript",
      "Vector Embeddings",
    ],
    metrics: [
      "<15ms Vector Search",
      "Zero Hallucination Guardrails",
      "Multi-tenant Document Chunking",
    ],
    githubUrl: "https://github.com/ajaygouda",
    featured: true,
  },
  {
    id: "fintech-analytics-dashboard",
    title: "BDMP & Auvnir Enterprise Financial Dashboards",
    clientOrContext: "Orion Innovation / Global Financial Services",
    category: "Fintech & Dashboards",
    timeframe: "2022 - 2025",
    description:
      "High-throughput financial analytics web applications featuring virtualized AG Grid tables, reactive market metrics, and custom accessible typography across complex trade datasets.",
    longDescription:
      "Engineered scalable financial front-ends for BDMP and Auvnir projects. Delivered responsive cross-browser dashboards supporting deep data drill-downs, dynamic column grouping, real-time WebSocket tick updates, and sub-16ms render cycles. Created reusable generic data fetching utilities in TypeScript and established unified MUI theme token architectures adopted across multi-functional development squads.",
    imageSrc: "/src/assets/images/project_fintech_1790271471346.jpg",
    architectureHighlights: [
      "AG Grid Enterprise integration with virtual scrolling for 100k+ rows",
      "Custom MUI design system with financial color science",
      "Generic REST API client with request deduplication and TypeScript type guards",
      "Automated CI/CD validation on Azure Cloud with zero-regression gating",
    ],
    techStack: [
      "React.js",
      "Angular",
      "TypeScript",
      "AG Grid",
      "MUI",
      "SCSS",
      "Azure DevOps",
      "REST APIs",
    ],
    metrics: [
      "100k+ Rows Virtualized",
      "60 FPS Render Performance",
      "Azure CI/CD Zero-Downtime",
    ],
    githubUrl: "https://github.com/ajaygouda",
    featured: true,
  },
  {
    id: "headless-ecommerce-eds",
    title: "Ultra-Fast Headless E-Commerce & AEM EDS Architecture",
    clientOrContext: "Vation Digital / Adobe & Modern Retail",
    category: "CMS & Enterprise",
    timeframe: "2025",
    description:
      "High-velocity headless commerce storefront integrating Adobe Experience Manager Edge Delivery Services (EDS), Strapi on Render, Cloudinary CDN, and Next.js deployed on Vercel.",
    longDescription:
      "Engineered a production-ready headless retail POC benchmarking sub-second Largest Contentful Paint (LCP). Leveraged AEM Edge Delivery Services (EDS) for near-instant static content distribution paired with dynamic Next.js App Router endpoints for inventory, cart state, and checkout flows. Strapi acts as the headless editorial backend while Cloudinary serves responsive WebP/AVIF imagery on demand.",
    imageSrc: "/src/assets/images/project_ecommerce_1790271484114.jpg",
    architectureHighlights: [
      "AEM Edge Delivery Services (EDS) integration for edge-rendered static content blocks",
      "Next.js App Router on Vercel handling dynamic cart state and payments",
      "Strapi Headless CMS deployed on Render with automated webhook cache invalidation",
      "Cloudinary CDN with automated responsive WebP and AVIF asset optimization",
    ],
    techStack: [
      "Next.js",
      "AEM EDS",
      "AEM HTL",
      "Strapi",
      "Cloudinary",
      "TypeScript",
      "Tailwind CSS",
    ],
    metrics: [
      "Sub-second LCP on Edge",
      "100% Core Web Vitals",
      "Automated Image Optimization",
    ],
    githubUrl: "https://github.com/ajaygouda",
    featured: true,
  },
  {
    id: "realtime-chat-collaboration",
    title: "Real-Time Chat & Collaboration Engine",
    clientOrContext: "Full-Stack Enterprise POC",
    category: "Full-Stack & Cloud",
    timeframe: "2025",
    description:
      "High-concurrency chat and collaborative workspace platform powered by WebSockets, Next.js, and MongoDB, complete with live user presence and secure JWT authentication.",
    longDescription:
      "Built an enterprise-grade messaging service showcasing robust WebSocket event pipelines. Users can create private groups, share media attachments hosted via Cloudinary, and communicate with sub-30ms round-trip latency. Features optimistic message dispatching, unread count badge synchronization, and server-side authentication using HTTP-only cookies.",
    imageSrc: "/src/assets/images/project_chat_1790271497217.jpg",
    architectureHighlights: [
      "WebSocket bidirectional event pipeline with connection keep-alive & reconnect logic",
      "MongoDB capped collections & indexing for low-latency chat history pagination",
      "Cloudinary integration for inline image and attachment uploads",
      "Secure JWT auth flow using HTTP-only cookies and CSRF double-submit protection",
    ],
    techStack: [
      "Next.js",
      "WebSocket",
      "MongoDB",
      "Cloudinary",
      "JWT Auth",
      "TypeScript",
      "Tailwind",
    ],
    metrics: [
      "<30ms Message Latency",
      "Secure HTTP-only Auth",
      "Zero XSS Exposure",
    ],
    githubUrl: "https://github.com/ajaygouda",
  },
  {
    id: "mern-graphql-virtualized",
    title: "MERN Stack POC with GraphQL & Virtual Scrolling",
    clientOrContext: "Independent Research & Enterprise Benchmarks",
    category: "Full-Stack & Cloud",
    timeframe: "2024 - 2025",
    description:
      "High-density data viewer built with Node, Express, MongoDB, and React, utilizing GraphQL queries and virtual windowing for buttery smooth rendering of vast datasets.",
    longDescription:
      "Developed to demonstrate how high-cardinality collections can be queried efficiently without over-fetching. Implemented custom GraphQL resolvers with cursor-based pagination, paired with virtual list windowing in React to maintain a steady 60fps scrolling experience even when handling 50,000+ records in the client cache.",
    imageSrc: "/src/assets/images/project_fintech_1790271471346.jpg",
    architectureHighlights: [
      "Cursor-based GraphQL pagination eliminating deep skip overhead",
      "DOM virtualization rendering only visible rows within viewport window",
      "Token refresh rotation via HTTP-only cookie handlers",
      "Optimistic UI updates for instant interaction feedback",
    ],
    techStack: [
      "React.js",
      "GraphQL",
      "Node.js",
      "Express",
      "MongoDB",
      "TypeScript",
    ],
    metrics: [
      "50k+ Records Virtualized",
      "60 FPS Consistent Scroll",
      "Zero Over-fetching",
    ],
    githubUrl: "https://github.com/ajaygouda",
  },
  {
    id: "ai-testcase-generation",
    title: "AI-Driven Automated Test Case Generator",
    clientOrContext: "Enterprise Productivity POC",
    category: "AI & LLM",
    timeframe: "2025",
    description:
      "Automated developer tooling using LLMs to parse UI component contracts and specifications, synthesizing rigorous unit and integration test assertions.",
    longDescription:
      "Engineered an intelligent testing utility that inspects TypeScript component interfaces and generates comprehensive Jest and React Testing Library suites. The system identifies edge cases, prop boundaries, accessibility criteria (ARIA), and error states, slashing boilerplate test authoring time by over 60%.",
    imageSrc: "/src/assets/images/project_rag_ai_1790271455810.jpg",
    architectureHighlights: [
      "AST analysis of TypeScript types and prop signatures",
      "Prompt engineering chain enforcing strict testing conventions and AAA pattern",
      "Automated ARIA and keyboard navigation assertion generation",
      "CLI integration directly with Git pre-commit hooks",
    ],
    techStack: [
      "LLMs",
      "TypeScript",
      "Node.js",
      "Jest",
      "React Testing Library",
      "Prompt Engineering",
    ],
    metrics: [
      "60% Reduction in Test Authoring Time",
      "Automated ARIA Assertions",
      "AST Type Parsing",
    ],
    githubUrl: "https://github.com/ajaygouda",
  },
];

export const SKILL_CATEGORIES: SkillGroup[] = [
  {
    category: "Frontend & UI Architecture",
    description:
      "Modern component architectures, micro frontends, reactive states, and responsive styling systems.",
    skills: [
      {
        name: "React.js / Next.js",
        level: "Expert",
        highlight: "App Router, SSR/SSG, Server Actions",
      },
      {
        name: "TypeScript",
        level: "Expert",
        highlight: "Strict type safety, generic utilities, data contracts",
      },
      {
        name: "JavaScript (ES6+)",
        level: "Expert",
        highlight: "Async patterns, memory profiling, event loops",
      },
      {
        name: "Angular & Angular Material",
        level: "Advanced",
        highlight: "Enterprise modules, reactive forms",
      },
      {
        name: "Tailwind CSS & SCSS",
        level: "Expert",
        highlight: "Design tokens, utility-first systems",
      },
      {
        name: "MUI & Styled Components",
        level: "Expert",
        highlight: "Theme engines, typography systems",
      },
      {
        name: "AG Grid",
        level: "Expert",
        highlight: "High-density virtualized financial grids",
      },
      {
        name: "Redux & State Architecture",
        level: "Expert",
        highlight: "Redux Toolkit, Context, predictable flows",
      },
      {
        name: "Storybook",
        level: "Advanced",
        highlight: "Design system component catalogs",
      },
      {
        name: "Micro Frontends (Module Fed.)",
        level: "Advanced",
        highlight: "Distributed decoupled UI modules",
      },
    ],
  },
  {
    category: "Full Stack, APIs & Backend",
    description:
      "Scalable backend services, real-time protocols, database management, and authentication pipelines.",
    skills: [
      {
        name: "Node.js & Express",
        level: "Advanced",
        highlight: "REST endpoints, middleware, microservices",
      },
      {
        name: "Python & FastAPI",
        level: "Proficient",
        highlight: "REST endpoints, middleware, AI pipelines",
      },
      {
        name: "MERN Full Stack",
        level: "Expert",
        highlight: "Production-ready web application stacks",
      },
      {
        name: "GraphQL & REST APIs",
        level: "Advanced",
        highlight: "Apollo schemas, virtual scrolling queries",
      },
      {
        name: "MongoDB",
        level: "Advanced",
        highlight: "Schema design, aggregation, indexing",
      },
      {
        name: "WebSocket & Realtime",
        level: "Advanced",
        highlight: "Bidirectional chat & streaming data",
      },
      {
        name: "JWT & OAuth 2.0",
        level: "Expert",
        highlight: "HTTP-only cookie security, session control",
      },
    ],
  },
  {
    category: "Enterprise CMS & Cloud Deployments",
    description:
      "Modern content management systems, edge delivery architectures, and DevOps CI/CD pipelines.",
    skills: [
      {
        name: "Adobe Experience Manager (AEM UI)",
        level: "Advanced",
        highlight: "HTL (Sightly), reusable content components",
      },
      {
        name: "AEM Edge Delivery Services (EDS)",
        level: "Advanced",
        highlight: "High-speed edge publishing POCs",
      },
      {
        name: "Strapi & Contentful",
        level: "Advanced",
        highlight: "Headless CMS content modeling",
      },
      {
        name: "Cloudinary CDN",
        level: "Advanced",
        highlight: "Adaptive media transformations & storage",
      },
      {
        name: "Vercel & Netlify",
        level: "Expert",
        highlight: "Serverless edge functions, preview pipelines",
      },
      {
        name: "Azure Cloud & DevOps",
        level: "Advanced",
        highlight: "CI/CD pipelines, automated testing, releases",
      },
      {
        name: "Docker & Containerization",
        level: "Proficient",
        highlight: "Consistent local & staging environments",
      },
    ],
  },
  {
    category: "Generative AI, UI/UX & Testing",
    description:
      "Applied generative AI, UX research, performance optimization, and rigorous automated testing.",
    skills: [
      {
        name: "GenAI & RAG Pipelines",
        level: "Advanced",
        highlight: "LangChain, FAISS, vector databases, prompt eng.",
      },
      {
        name: "UI/UX & Wireframing",
        level: "Expert",
        highlight: "Figma, user journeys, design systems",
      },
      {
        name: "Jest & React Testing Library",
        level: "Advanced",
        highlight: "Unit testing, accessibility verification",
      },
      {
        name: "Core Web Vitals Optimization",
        level: "Expert",
        highlight: "Sub-second LCP, CLS < 0.1, FID/INP tuning",
      },
      {
        name: "Agile, Jira & Git Workflows",
        level: "Expert",
        highlight: "Sprint planning, code review governance",
      },
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Yashwantrao Chavan Maharashtra Open University",
    period: "Graduated",
    focus:
      "Software Engineering, Database Management, Data Structures & Web Architecture",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Frotnend Developer",
    issuer: "Infinitech Training Institute",
    description:
      "Frontend web standards, responsive design, JavaScript programming, and cross-browser techniques.",
  },
  {
    title: "Graphic Design",
    issuer: "St. Angelo's COMPUTER EDUCATION",
    description:
      "Visual design principles, typography, vector illustration, and digital layout systems.",
  },
];

export const INTERESTS = [
  {
    name: "Cricket & Volleyball",
    type: "Sports & Team Dynamics",
    description:
      "Staying active through competitive team sports helps build communication, rapid strategic decision-making, and collective focus under pressure.",
  },
  {
    name: "Emerging Computing & AI",
    type: "Continuous Learning",
    description:
      "Keen interest in exploring breakthroughs in the computer world—from edge runtimes to local LLMs—which keeps curiosity and craft razor sharp.",
  },
];
