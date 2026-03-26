"use client";

import Link from "next/link";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type ProjectItem = {
  id: string;
  name: string;
  description: string;
  intent: string;
  stack: string[];
  demoHref: string;
};

const projects: ProjectItem[] = [
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
];

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState(projects[0]?.id ?? "");
  const selectedProject =
    projects.find((project) => project.id === selectedId) ?? projects[0];

  return (
    <main className="flex flex-1 px-3 py-3 sm:px-4 sm:py-4 lg:px-5 lg:py-5">
      <section className="mx-auto grid min-h-[calc(100vh-1.5rem)] w-full max-w-none grid-cols-1 gap-5 rounded-3xl border border-white/15 bg-black/40 p-3 backdrop-blur-md md:grid-cols-[340px_1fr] md:p-4">
        <aside className="flex h-full min-h-[34rem] flex-col rounded-2xl bg-black p-4 md:p-5">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Project Switcher
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
            Dashboard
          </h1>

          <div className="mt-5 flex-1 space-y-3 overflow-y-auto pr-2">
            {projects.map((project) => {
              const isSelected = selectedProject?.id === project.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedId(project.id)}
                  className={cn(
                    "w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-left transition-all duration-200",
                    "hover:border-white/30 hover:bg-zinc-800 hover:translate-x-2",
                    isSelected &&
                      "border-white/35 bg-zinc-800 shadow-[0_0_0_1px_rgb(255_255_255/0.16)]",
                  )}
                  aria-pressed={isSelected}
                >
                  <p className="text-sm font-semibold text-foreground">{project.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </button>
              );
            })}
          </div>
        </aside>

        <article className="relative min-h-[34rem] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 p-5 sm:p-7">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/5 to-transparent" />
          <div className="relative flex h-full min-h-[30rem] flex-col">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
              Main View
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {selectedProject.name}
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">
              {selectedProject.intent}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {selectedProject.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-6 flex-1 rounded-xl border border-dashed border-white/20 bg-zinc-900/70 p-4 sm:p-6">
              <p className="text-sm font-medium text-foreground">Demo workspace</p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                This area is reserved for the interactive project experience so users
                can test each product without leaving the dashboard.
              </p>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={selectedProject.demoHref}
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11")}
              >
                Open Demo
              </Link>
              <Link
                href="/"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 border-white/30 bg-white/5 hover:bg-white/10",
                )}
              >
                Back Home
              </Link>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
