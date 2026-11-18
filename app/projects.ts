export type ProjectFilter = "all" | "fullstack" | "ai-ml" | "realtime";

export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  filter: "fullstack" | "ai-ml" | "realtime";
  metric: string;
  description: string;
  tags: string[];
  href: string;
  liveHref?: string;
  visual: "health" | "pos" | "review" | "clinic" | "chat" | "skills" | "rental" | "game" | "rag";
  focus: string;
  overview: string;
  architecture: string;
  built: string[];
  decisions: string[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: "onelife",
    number: "01",
    name: "OneLife",
    category: "AI Healthcare Platform · 2025–26",
    filter: "fullstack",
    metric: "20+ REST APIs · 100+ Users · AI Triage",
    description: "Full-stack healthcare coordination platform with patient booking, doctor scheduling, video consultations, and Gemini AI triage.",
    tags: ["Node.js", "Express", "MongoDB", "WebSockets", "Gemini API", "JWT", "AWS"],
    href: "https://github.com/somilagrawal52/hospital-management",
    visual: "health",
    focus: "Connecting patients to clinical care, telemedicine, and intelligent triage.",
    overview: "OneLife is an end-to-end healthcare management platform supporting multi-role access (patient, doctor, admin). It features 20+ secure REST APIs, real-time video consultation requests powered by WebSockets, and an intelligent triage chatbot powered by Gemini API that handled 300+ automated symptom queries and cut average request handling time by 30%.",
    architecture: "Express.js REST & WebSocket gateway backed by MongoDB with Mongoose schemas for patients, clinicians, slots, invoices, and triage sessions. Deployed with Docker containers and CI/CD pipelines.",
    built: [
      "Patient appointment discovery, real-time booking, slot rescheduling, waitlists, and automated invoices.",
      "Clinician schedule manager with weekly availability, exception blocks, and WebSocket-driven video consultations.",
      "AI triage chatbot with Gemini API handling 300+ automated symptom checks with emergency escalation triggers.",
      "Hospital administrative portal for doctor credential onboarding, audit trails, and revenue oversight."
    ],
    decisions: [
      "Separated medical triage from standard booking so high-urgency symptoms trigger hospital escalation workflows immediately.",
      "Server-side fee calculation with cryptographic signature verification and webhook reconciliation for payment integrity.",
      "Role-based access control (RBAC) with signed CSRF tokens and sanitized session handling to protect sensitive health records."
    ],
    status: "Production-ready architecture with 45 passing unit and integration tests. Dockerized deployment with AWS CI/CD pipelines."
  },
  {
    slug: "aurapos",
    number: "02",
    name: "AuraPOS",
    category: "Enterprise Restaurant POS & KDS · 2026",
    filter: "fullstack",
    metric: "Multi-Tenant · KDS & TMS · BOM Inventory",
    description: "Multi-tenant restaurant point-of-sale, kitchen display system (KDS), table management, and inventory costing engine.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "Node.js", "Express", "MongoDB", "Framer Motion"],
    href: "https://github.com/somilagrawal52/restaurant-pos-system",
    visual: "pos",
    focus: "High-speed restaurant operations with zero room for order friction or inventory loss.",
    overview: "AuraPOS is an enterprise restaurant operating system uniting real-time POS ordering, Kitchen Display Systems (KDS), visual Table Management (TMS), Bill of Materials (BOM) inventory depletion, and cashier shift reconciliation across multi-unit restaurant properties.",
    architecture: "React 18 + Vite frontend with TanStack Query and Framer Motion for optimistic sub-100ms UI updates, paired with an Express and MongoDB backend managing multi-tenant restaurant properties and worker queues.",
    built: [
      "High-velocity POS order terminal with modifier trees, split billing, tax rates (CGST/SGST/VAT), and bar tabs.",
      "Kitchen Display System (KDS) showing active order tickets, course timing, priority cues, and station routing.",
      "Visual Table Management (TMS) with live occupancy statuses, merge/transfer capabilities, and server assignment.",
      "Inventory & Recipe Costing (BOM) engine that automatically deducts raw ingredient stocks upon ticket settlement.",
      "Cash shift manager tracking float counts, cash-in/cash-out, shift audits, and end-of-day discrepancy reports."
    ],
    decisions: [
      "Implemented optimistic client state updates with TanStack Query so cashiers can ring orders without waiting for network roundtrips.",
      "Designed a strict multi-tenant database schema ensuring complete data isolation between different restaurant properties.",
      "Calculated recipe ingredient depletion via transactional backend workers to prevent inventory race conditions during peak rushes."
    ],
    status: "Fully functional frontend and backend codebase with complete database schema (DB_SCHEMA.md), role-based middleware, and vitest test suite."
  },
  {
    slug: "codesage-ai",
    number: "03",
    name: "CodeSage AI",
    category: "Autonomous PR Review Platform · 2026",
    filter: "ai-ml",
    metric: "5 Specialist Agents · 100-Point Scorer · Zero-Config Demo",
    description: "Autonomous GitHub pull-request review platform coordinating 5 specialist agents to compute deterministic code-health scores.",
    tags: ["Next.js", "FastAPI", "Python", "SQLAlchemy", "PostgreSQL", "OpenAI", "Pydantic", "Tailwind CSS"],
    href: "https://github.com/somilagrawal52/AI-code-review",
    visual: "review",
    focus: "Making AI code review deterministic, auditable, and seamlessly integrated into developer workflows.",
    overview: "CodeSage AI coordinates 5 specialized AI review agents (Security, Bugs, Performance, Maintainability, Testing) across GitHub PR diffs. It parses structured Pydantic findings, filters binary and minified noise, and computes a transparent 100-point code health score.",
    architecture: "Next.js dark-first review dashboard communicating with a FastAPI service via async SQLAlchemy models, Alembic migrations, GitHub App token services, and HMAC-verified webhook listeners.",
    built: [
      "Dark-first responsive SaaS dashboard: repositories, PR reviews, diff previews, findings breakdown, and settings.",
      "Bounded diff context builder that skips lockfiles, generated binaries, and vendor scripts while calculating coverage.",
      "Concurrent coordination of 5 specialist review personas parsing structured findings with Pydantic validation.",
      "Deterministic scoring algorithm: reviews begin at 100; critical, high, medium, and low findings deduct 30, 15, 7, and 3 points.",
      "Credential-free interactive Demo Mode with realistic repositories and synthetic PR findings for instant evaluation."
    ],
    decisions: [
      "Deterministic code-health scoring owned entirely by application code to eliminate AI hallucination or score drift.",
      "Diff filtering enforces strict file bounds to keep LLM context windows focused on high-signal application logic.",
      "Idempotent webhook pipeline verifies GitHub cryptographic signatures before queuing review jobs."
    ],
    status: "Complete MVP with interactive Demo Mode, comprehensive API schemas, async database models, and local test runners."
  },
  {
    slug: "disease-detection",
    number: "04",
    name: "Clinical Risk Intelligence",
    category: "Clinical ML & Disease Screening · 2026",
    filter: "ai-ml",
    metric: "98.25% ML Accuracy · Multi-Disease Suite · FastAPI",
    description: "AI-assisted clinical screening platform combining validated ML models with evidence-based ADA/WHO guidelines for cardiometabolic & oncology risk.",
    tags: ["Python", "FastAPI", "scikit-learn", "Pydantic", "NumPy", "Pandas", "JavaScript", "CSS3"],
    href: "https://github.com/somilagrawal52/disease-detection",
    visual: "clinic",
    focus: "Bridging statistical machine learning with clinical guidelines for early preventative screening.",
    overview: "A production-grade clinical screening platform featuring multi-disease engines: a calibrated Linear SVM for Diabetes Mellitus with ADA biomarker classifications, a Framingham 10-Year ASCVD Cardiovascular engine calculating vascular heart age, and a Wisconsin FNA cytology classifier achieving 98.25% test accuracy for breast oncology.",
    architecture: "FastAPI REST microservice with interactive OpenAPI Swagger docs, Pydantic v2 schemas, automated test suite, and a zero-dependency responsive clinical dashboard.",
    built: [
      "Diabetes Mellitus Engine with calibrated Linear SVM and PIMA population standard scaling delivering 0–100% risk probabilities.",
      "Cardiovascular (10-Year ASCVD) Engine utilizing the Framingham model to compute vascular age vs. biological age and lipid atherogenic ratios.",
      "Breast Cytology Classifier trained on Wisconsin Clinical FNA cell nuclear morphometry with 98.25% validated test accuracy.",
      "Consolidated Multi-System Health Scorecard generating an overall cardiometabolic grade (A–D) with printable medical record format.",
      "Production FastAPI microservice with Pydantic v2 validation, CLI terminal screening interface, and automated test suite."
    ],
    decisions: [
      "Engineered a critical machine learning fix: legacy code passed raw unscaled data to standard-scaled SVMs causing false positives; introduced standardized Pipeline scaling.",
      "Implemented a cross-version serialization shim resolving NumPy 2.x to 1.x pickle loading conflicts.",
      "Strict separation of clinical decision rules (ADA/WHO/ACC) from ML models to ensure transparency and prevent ungrounded diagnoses."
    ],
    status: "17 automated unit tests covering ML accuracy, mathematical equivalence, and API endpoints with a 100% pass rate."
  },
  {
    slug: "chat-app",
    number: "05",
    name: "Chat-App",
    category: "Real-Time Messaging Platform · 2025",
    filter: "realtime",
    metric: "50+ Concurrent Users · Sub-Second Delivery · Socket.IO",
    description: "Low-latency direct and group messaging platform featuring live presence, media streaming, and authenticated conversation channels.",
    tags: ["React", "Socket.IO", "Node.js", "Express", "MongoDB", "Cloudinary", "JWT", "Tailwind CSS"],
    href: "https://github.com/somilagrawal52/Chat-APP",
    visual: "chat",
    focus: "Low-latency real-time communication with persistent history and resilient connection state.",
    overview: "Engineered a real-time messaging application with Socket.IO supporting 50+ concurrent users with sub-second message delivery. Features 8+ core backend APIs for chat rooms, media sharing via Cloudinary, live typing indicators, online presence detection, and secure JWT session management.",
    architecture: "React frontend with Tailwind CSS and Socket.IO client connected to an Express.js WebSocket and REST server, persisting chats and user states in MongoDB with Cloudinary media integration.",
    built: [
      "Real-time bidirectional event pipeline for instant message dispatch, receipt confirmations, and typing broadcasts.",
      "User presence detection showing live online/offline statuses and connection recovery upon network interruption.",
      "Cloudinary media upload pipeline supporting rich images and document sharing within chat channels.",
      "Secured session architecture with optimized JWT session and token refresh handling, reducing login failures by 25%."
    ],
    decisions: [
      "Architected with dedicated WebSocket event rooms per conversation to minimize broadcast overhead across unrelated clients.",
      "Optimized JWT refresh token rotation with HTTP-only cookies, eliminating frequent session timeouts and repeated logins.",
      "Decoupled media storage to Cloudinary so backend memory remains unburdened during concurrent file uploads."
    ],
    status: "Verified local and staging deployment with active real-time socket connections and responsive UI."
  },
  {
    slug: "skill-swap",
    number: "06",
    name: "SkillSwap",
    category: "Peer Learning Marketplace · 2026",
    filter: "fullstack",
    metric: "Reciprocal Matching Algorithm · Two-Way Barter",
    description: "A collaborative peer-learning platform built around reciprocal skill matching, structured proposals, and barter exchanges.",
    tags: ["React", "Express", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
    href: "https://github.com/somilagrawal52/skill-swap",
    visual: "skills",
    focus: "Enabling people to barter practical knowledge through structured exchange workflows.",
    overview: "SkillSwap connects what individuals can teach with what they want to learn. It ranks reciprocal two-way barter matches, facilitates structured swap proposals, coordinates exchange milestones, and aggregates user reputation and reviews.",
    architecture: "React SPA with responsive Tailwind styling backed by an Express REST API and MongoDB schema supporting users, skill inventories, proposals, and exchange lifecycles.",
    built: [
      "Dual-skill profile system pairing 'Skills I Can Teach' with 'Skills I Want to Learn'.",
      "Reciprocal matching engine that identifies two-way complementary synergies between users.",
      "Exchange lifecycle manager handling pending proposals, counter-offers, active exchange tracking, and completion sign-offs.",
      "Reputation and feedback system with verified reviews, star ratings, and notification dispatch."
    ],
    decisions: [
      "Distinguished two-way direct barter from one-way complementary learning matches to maximize swap conversion rates.",
      "Strict ownership verification at the API layer for proposal acceptance and exchange milestone completions.",
      "Built-in mock seed generator allowing seamless local onboarding and demonstration of match algorithms."
    ],
    status: "Local integration and lifecycle test suite passing; frontend builds cleanly with complete API routes."
  },
  {
    slug: "driveluxe",
    number: "07",
    name: "DriveLuxe",
    category: "Vehicle Booking Platform · 2026",
    filter: "fullstack",
    metric: "Server-Validated Pricing · Fleet Management",
    description: "A premium car rental platform connecting vehicle discovery, date-based booking calculations, and fleet administration.",
    tags: ["React", "Redux Toolkit", "Express", "Node.js", "MongoDB", "JWT", "Tailwind CSS"],
    href: "https://github.com/somilagrawal52/Car-Rental-App",
    visual: "rental",
    focus: "Making vehicle reservation transparent, fast, and protected against pricing manipulation.",
    overview: "DriveLuxe pairs an intuitive car rental storefront with an Express and MongoDB backend. Customers can browse vehicles by category, filter by transmission and fuel type, select date ranges with instant server-calculated totals, and manage active reservations.",
    architecture: "React frontend utilizing Redux Toolkit for centralized catalog and cart state, integrated with an Express.js API enforcing server-side date validation and role-based vehicle administration.",
    built: [
      "Dynamic vehicle catalog with responsive filtering (luxury, SUV, electric), spec breakdowns, and date availability checks.",
      "Server-side booking calculation engine that validates reservation windows and computes total rates independently of client inputs.",
      "Customer reservation dashboard showing past, current, and upcoming vehicle bookings with cancellation policies.",
      "Administrative fleet control panel for creating, updating, and toggling vehicle availability."
    ],
    decisions: [
      "Enforced server-side pricing recalculation based on authenticated dates to prevent client-side price tampering.",
      "Used Redux Toolkit slices to maintain clean synchronization between car filters, selected dates, and booking previews.",
      "Protected admin vehicle management routes with strict JWT role validation middleware."
    ],
    status: "Public GitHub repository with passing frontend build and functional REST endpoints."
  },
  {
    slug: "connect-four",
    number: "08",
    name: "Connect Four Distributed",
    category: "Distributed Real-Time Game · 2026",
    filter: "realtime",
    metric: "Apache Kafka Events · Matchmaking Queue · Bot Fallback",
    description: "Real-time multiplayer Connect Four game with WebSocket matchmaking, automated bot fallback, and Apache Kafka event streaming.",
    tags: ["Node.js", "Socket.IO", "Apache Kafka", "MongoDB", "Express", "EJS"],
    href: "https://github.com/somilagrawal52/emitrr-backend-project",
    visual: "game",
    focus: "Architecting fault-tolerant multiplayer state and decoupled event streaming.",
    overview: "A distributed multiplayer game engine engineered with Node.js and Socket.IO. Features a matchmaking queue, intelligent bot fallback for disconnected opponents, session reconnect handling, persistent leaderboards, and decoupled event publishing via Apache Kafka.",
    architecture: "Node.js backend with Socket.IO room coordination, MongoDB persistence for leaderboard metrics, and Kafka producer broadcasting GAME_STARTED, MOVE_PLAYED, and GAME_ENDED events to an analytics pipeline.",
    built: [
      "Real-time turn-based game loop with authoritative server-side win-condition and illegal-move validation.",
      "Matchmaking queue pairing live players with seamless heuristic bot fallback when no opponents are available.",
      "Session reconnection logic preserving board state during momentary mobile network drops.",
      "Decoupled event streaming emitting move telemetry and game outcomes into Apache Kafka topics."
    ],
    decisions: [
      "Decoupled game board evaluation logic from the network transport layer for pure unit testability.",
      "Emitted gameplay telemetry asynchronously through Kafka, ensuring game latency remains unaffected by database or analytics overhead."
    ],
    status: "Backend architecture and game loop implemented with MongoDB persistence and Kafka event emission."
  },
  {
    slug: "gemini-rag",
    number: "09",
    name: "Gemini RAG Support Bot",
    category: "Applied AI & Document Retrieval · 2025",
    filter: "ai-ml",
    metric: "Document Grounding · Session Persistence · Prisma",
    description: "Document-grounded question-answering assistant utilizing Gemini API for domain-specific customer support with citation tracking.",
    tags: ["Next.js", "Gemini API", "Prisma ORM", "SQLite / PostgreSQL", "Tailwind CSS"],
    href: "https://github.com/somilagrawal52/AI-Customer-Support-Bot-Specific-for-Solarpanel-Company-main",
    visual: "rag",
    focus: "Preventing hallucination in customer-facing AI through strict document grounding.",
    overview: "A specialized AI assistant developed for technical product support. Uses Gemini API with document chunking and prompt engineering to deliver answers grounded strictly in uploaded specifications, tracking session history and citation sources.",
    architecture: "Next.js application with server-side API routes querying Prisma ORM models, orchestrating Gemini context prompts and logging latency and question analytics.",
    built: [
      "Document ingestion and chunking pipeline parsing technical manuals and product warranty policies.",
      "Grounding query service that feeds relevant document contexts to Gemini, enforcing strict citation constraints.",
      "Persistent conversation session history allowing follow-up context and user feedback scoring.",
      "Analytics logging for unanswered questions, average response latency, and sentiment indicators."
    ],
    decisions: [
      "Kept AI credentials strictly on the backend Next.js API routes with rate-limiting middleware.",
      "Stored raw retrieved context alongside answers in the database to enable continuous retrieval evaluation."
    ],
    status: "Functional application with document indexing, context grounding, and session management."
  }
];

export const archiveWork = [
  {
    name: "SecureKYC AI",
    kind: "Applied AI / Identity Verification",
    summary: "AI-powered identity verification application with Google Gemini, multi-access verification, voice assistance, and WhatsApp alerts.",
    stack: "React · Google Generative AI · Node.js · Express",
    href: "https://github.com/somilagrawal52/KYC-main",
    badge: "AI Powered"
  },
  {
    name: "Food Delivery Platform",
    kind: "Full-Stack Commerce",
    summary: "Complete restaurant ordering system featuring category discovery, cart state, order placement, and vendor menu dashboard.",
    stack: "React · Express · Node.js · MongoDB",
    href: "https://github.com/somilagrawal52/Food-APP",
    badge: "Full Stack"
  },
  {
    name: "C++ Chess Game Engine",
    kind: "Systems / Object-Oriented Programming",
    summary: "Modular terminal chess engine with polymorphic piece classes, move validity matrices, board display, and turn logic.",
    stack: "C++ · OOP · Pointers · Algorithms",
    href: "https://github.com/somilagrawal52",
    badge: "C++ Engine"
  },
  {
    name: "AI Mock Interviews",
    kind: "Voice AI / Developer Preparation",
    summary: "Voice-driven technical mock interview platform integrating real-time speech evaluation and personalized feedback.",
    stack: "Next.js · Firebase · Gemini / Vapi",
    href: "https://github.com/somilagrawal52/ai_mock_interviews-main",
    badge: "Voice AI"
  },
  {
    name: "Web Scraping Automation",
    kind: "Data Engineering / Automation",
    summary: "Automated data harvesting pipeline utilizing Puppeteer and Cheerio for dynamic DOM parsing and structured JSON extraction.",
    stack: "Node.js · Puppeteer · Cheerio · Express",
    href: "https://github.com/somilagrawal52/web-scraping",
    badge: "Automation"
  },
  {
    name: "Netflix Streaming Clone",
    kind: "Frontend / Media Streaming",
    summary: "Responsive entertainment catalog with TMDB API integration, dynamic trailer modals, and genre carousels.",
    stack: "React · TMDB API · Tailwind CSS",
    href: "https://github.com/somilagrawal52/Neflix-Clone",
    badge: "Frontend"
  }
];

export const certifications = [
  {
    title: "Meta Front-End Development Professional Certificate",
    issuer: "Meta",
    date: "2024",
    skills: ["React.js", "JavaScript (ES6+)", "UI/UX Architecture", "Version Control", "Responsive Web Design"],
    href: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    credentialId: "META-FED-2024"
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "2024",
    skills: ["JavaScript Algorithms", "Async / Await", "DOM Manipulation", "OOP & Functional JS", "Unit Testing (Jest)"],
    href: "https://www.coursera.org/learn/programming-with-javascript",
    credentialId: "META-JS-2024"
  },
  {
    title: "Full Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication & Security", "Postman"],
    href: "https://www.udemy.com/",
    credentialId: "UDEMY-FSWD-2024"
  }
];

export const achievements = [
  {
    stat: "700+",
    label: "DSA Problems Solved",
    sub: "LeetCode, GeeksforGeeks, CodeChef · 1400+ rating across platforms."
  },
  {
    stat: "20%",
    label: "API Latency Reduction",
    sub: "Achieved at Birlasoft via query optimization and middleware refactoring."
  },
  {
    stat: "98.25%",
    label: "ML Test Accuracy",
    sub: "Validated on Wisconsin Clinical FNA cytology dataset for oncology screening."
  },
  {
    stat: "100-Day",
    label: "Coding Streak",
    sub: "Shared daily algorithmic solutions and technical builds publicly on LinkedIn."
  },
  {
    stat: "8.05",
    label: "CGPA at VIT",
    sub: "B.Tech Computer Science Engineering, Vellore Institute of Technology ('26)."
  }
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
