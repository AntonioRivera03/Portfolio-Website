import type { ProjectItem } from "@/app/projects/types";

export const projects: ProjectItem[] = [
  {
    id: "projects-hub",
    name: "Projects Hub",
    description: "A central dashboard to browse, preview, and launch each project.",
    intent:
      "Acts as the command center where users switch context between projects and immediately open each product demo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    demoHref: "/projects",
  },
  {
    id: "ops-console",
    name: "Ops Console",
    description: "An operational panel for monitoring deployments and service health.",
    intent:
      "Gives teams a live environment to inspect status, triage incidents, and execute routine maintenance actions.",
    stack: ["Next.js", "PostgreSQL", "Prisma"],
    demoHref: "#",
  },
  {
    id: "analytics-studio",
    name: "Analytics Studio",
    description: "A reporting workspace that turns raw data into actionable insights.",
    intent:
      "Helps users explore trends in an interactive workspace instead of reading static reports.",
    stack: ["React", "D3", "Node.js"],
    demoHref: "#",
  },
  {
    id: "workflow-builder",
    name: "Workflow Builder",
    description: "A visual editor for automating recurring business processes.",
    intent:
      "Lets users design and test process flows quickly with immediate visual feedback.",
    stack: ["TypeScript", "tRPC", "Redis"],
    demoHref: "#",
  },
  {
    id: "life-dashboard",
    name: "Borealis",
    description: "Dashboard for viewing self-progress on life goals.",
    intent: "Let users view my progress on specific information and view historical data on these items.",
    stack: ["Typescript", "go", "Python"],
    demoHref: "#"

  },
  {
    id: "gpt-overlay",
    name: "Orbit",
    description: "Overlay for asking AI questions while doing other tasks.",
    intent: "Allows for users to, on wake word, ask AI questions while multi-tasking and receive answers through TTS.",
    stack: ["Electron", "HTML/CSS", "JS", "Python"],
    demoHref: "#"
  }, 
  {
    id: "livedMatch",
    name: "LivedMatch",
    description: "Helping trials and researchers find PWLEs.",
    intent: "SaaS for helping research organizations and trials find potential applicants through a non-biased algorithm.",
    stack: ["Typescript", "Prisma", "BetterAuth", "Next.JS"],
    demoHref: "#"
    
  }
];
