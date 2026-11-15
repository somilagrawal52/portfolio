export type Project = {
  slug: string;
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  href: string;
  visual: "health" | "review" | "chat" | "game" | "rag" | "skills" | "rental";
  focus: string;
  overview: string;
  built: string[];
  decisions: string[];
  status: string;
};

export const projects: Project[] = [
  {
    slug: "onelife",
    number: "01",
    name: "OneLife",
    category: "Healthcare platform · 2025–26",
    description: "Appointments, clinician schedules, payments, and video visits in one care coordination platform.",
    tags: ["Node.js", "Express", "MongoDB", "EJS", "Gemini"],
    href: "https://github.com/somilagrawal52/hospital-management",
    visual: "health",
    focus: "A connected path from finding a doctor to follow-up care.",
    overview: "OneLife brings patient booking, doctor availability, virtual consultations, payment handling, and hospital administration into a single application. The repository includes separate patient, doctor, and admin experiences built around shared care workflows.",
    built: ["Patient appointment discovery, booking, rescheduling, waitlists, and invoices.", "Clinician schedules with weekly availability and date-specific exceptions, plus video consultation requests.", "Administrative tools for doctor onboarding, appointment oversight, and patient support."],
    decisions: ["Fee calculation and payment verification happen on the server, with webhook reconciliation for payment outcomes.", "Role boundaries, signed CSRF protection, and a separately guarded staging environment protect sensitive workflows.", "The AI triage flow escalates urgent symptoms before generating a routine answer."],
    status: "The repository includes 45 passing offline and integration tests. Real healthcare deployment still requires configured providers, operational review, and production data safeguards.",
  },
  {
    slug: "codesage-ai",
    number: "02",
    name: "CodeSage AI",
    category: "Developer tools · 2026",
    description: "Structured pull-request feedback across security, bugs, performance, maintainability, and tests.",
    tags: ["Next.js", "FastAPI", "SQLite / PostgreSQL", "OpenAI"],
    href: "https://github.com/somilagrawal52/AI-code-review",
    visual: "review",
    focus: "Make AI code review explainable and useful inside a developer workflow.",
    overview: "CodeSage pairs a Next.js review dashboard with a FastAPI service. It gathers a bounded pull-request diff, coordinates specialist review roles, validates structured findings, and computes a deterministic code-health score.",
    built: ["Repository, pull-request, review history, findings, and settings screens.", "Diff filtering that skips generated, binary, lock, minified, and oversized files while reporting coverage.", "GitHub OAuth/App boundaries and signature-verified, idempotent webhook handling."],
    decisions: ["Application code owns the scoring rules so a model response cannot silently change the score.", "A credential-free Demo Mode labels sample data and makes the full UI inspectable.", "The README separates the implemented MVP from a production queue and live integration setup."],
    status: "Demo Mode works without external credentials. Live GitHub and model workflows require configuration and a durable worker for meaningful traffic.",
  },
  {
    slug: "chat-app",
    number: "03",
    name: "Chat App",
    category: "Real-time product · 2025",
    description: "Direct messaging with live presence, media sharing, and authenticated conversations.",
    tags: ["React", "Socket.IO", "MongoDB", "JWT"],
    href: "https://github.com/somilagrawal52/Chat-APP",
    visual: "chat",
    focus: "Keep a conversation responsive across the interface and the server.",
    overview: "The chat product uses a React client, Express API, MongoDB persistence, and Socket.IO events for direct messaging. Its documented local work also covers richer conversation tools and optional AI assistance.",
    built: ["Authenticated profiles and message history with real-time delivery.", "Media handling through Cloudinary and responsive conversation layouts.", "Socket-driven online state and message updates."],
    decisions: ["The README calls out that Socket.IO needs a long-running backend; a serverless API alone cannot guarantee durable connections.", "Optional AI suggestions require a clear consent step because message text is sent to the model provider."],
    status: "The linked repository covers the core messaging experience. No public live demo is currently linked.",
  },
  {
    slug: "skill-swap",
    number: "04",
    name: "SkillSwap",
    category: "Community platform · 2026",
    description: "A peer learning marketplace built around reciprocal skill matching and a complete exchange flow.",
    tags: ["React", "Express", "MongoDB", "Tailwind"],
    href: "https://github.com/somilagrawal52/skill-swap",
    visual: "skills",
    focus: "Help two people find a useful exchange, then carry it through to completion.",
    overview: "SkillSwap connects what members can teach with what they want to learn. The app ranks reciprocal matches and supports proposals, coordination notes, completion, reviews, and notifications.",
    built: ["Dual-skill profiles, marketplace filters, and reciprocal match ranking.", "Proposal and exchange lifecycle with incoming, sent, active, and completed views.", "Reviews, reputation summaries, and an in-app notification center."],
    decisions: ["Matching distinguishes a two-way barter from a one-way complementary match.", "The API checks ownership and role-sensitive actions during the exchange lifecycle.", "Demo seed data makes the interaction easier to evaluate locally."],
    status: "The updated repository is under Somil’s GitHub account. Its API and swap lifecycle tests and frontend build pass locally.",
  },
  {
    slug: "driveluxe",
    number: "05",
    name: "DriveLuxe",
    category: "Booking platform · 2026",
    description: "A car rental experience connecting vehicle discovery, authenticated booking, and fleet management.",
    tags: ["React", "Redux Toolkit", "Express", "MongoDB"],
    href: "https://github.com/somilagrawal52/Car-Rental-App",
    visual: "rental",
    focus: "Make the path from browsing a vehicle to managing a reservation feel simple.",
    overview: "DriveLuxe pairs a React storefront with an Express and MongoDB service. Visitors can explore cars and details, while authenticated flows handle bookings, profiles, and fleet administration.",
    built: ["Vehicle catalog and detail pages, account screens, and booking interface.", "Booking APIs that validate date ranges and calculate the total on the server.", "Administrative car and reservation routes with role checks."],
    decisions: ["The server calculates booking cost from the selected dates and vehicle price rather than trusting a client total.", "Booking details are checked against the current user before being returned.", "Redux Toolkit keeps shared catalog state organized across the React views."],
    status: "The frontend builds locally and the source is public. A hosted end-to-end demo has not been verified.",
  },
  {
    slug: "connect-four",
    number: "06",
    name: "Connect Four",
    category: "Real-time systems · 2026",
    description: "Multiplayer gameplay with matchmaking, bot fallback, reconnect support, and event analytics.",
    tags: ["Node.js", "Socket.IO", "Kafka", "MongoDB"],
    href: "https://github.com/somilagrawal52/emitrr-backend-project",
    visual: "game",
    focus: "Make a small game feel dependable when players join, leave, and reconnect.",
    overview: "This backend-focused Connect Four project combines an Express and EJS interface with Socket.IO gameplay, a matchmaking queue, a fallback bot, MongoDB leaderboards, and Kafka gameplay events.",
    built: ["Matchmaking and turn-based real-time game state.", "A bot fallback when another player is unavailable, plus reconnect behavior.", "Persistent leaderboard data and GAME_STARTED, MOVE_PLAYED, and GAME_ENDED events."],
    decisions: ["Gameplay rules live in dedicated board and rule modules rather than the Socket.IO transport.", "Analytics events are published separately from the interactive game flow."],
    status: "The repository documents local MongoDB and Kafka setup. It does not yet include the planned analytics consumer or a hosted demo.",
  },
  {
    slug: "gemini-rag",
    number: "07",
    name: "Gemini RAG Q&A",
    category: "Applied AI · 2025",
    description: "Document-grounded question answering with session history and query analytics.",
    tags: ["Next.js", "Gemini", "Prisma", "Tailwind"],
    href: "https://github.com/somilagrawal52/AI-Customer-Support-Bot-Specific-for-Solarpanel-Company-main",
    visual: "rag",
    focus: "Give a support answer that stays tied to the supplied document.",
    overview: "A Next.js and Prisma application that stores document chunks, sessions, questions, context, answers, and processing time. Gemini extracts relevant context and generates a response from it.",
    built: ["Document loading and query APIs with persisted session history.", "Context grounding, retry logic, and error tracking.", "Analytics views for unanswered questions and feedback."],
    decisions: ["The model key remains on the server side of the application.", "The system records context alongside responses so results can be inspected and improved."],
    status: "The source is available, but no hosted demo has been verified. Provider configuration and content evaluation would be needed before real support use.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
