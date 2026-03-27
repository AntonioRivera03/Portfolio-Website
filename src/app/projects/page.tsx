"use client";

import Link from "next/link";
import { useState } from "react";

import { ProjectsSidebar } from "@/app/projects/components/projects-sidebar";
import { projects } from "@/app/projects/projects-data";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [selectedId, setSelectedId] = useState(() => projects[0]?.id ?? "");
  const selectedProject =
    projects.find((project) => project.id === selectedId) ?? projects[0];

  if (!selectedProject) {
    return null;
  }

  return (
    <main className="flex flex-1 overflow-hidden px-3 pt-3 pb-1 sm:px-4 sm:pt-4 sm:pb-2 lg:px-5 lg:pt-5 lg:pb-2">
      <section className="mx-auto grid h-[calc(100dvh-1rem)] min-h-0 w-full max-w-none grid-cols-1 gap-2 overflow-hidden rounded-3xl border border-border bg-card/55 p-3 shadow-[0_14px_36px_rgb(0_0_0_/_0.07)] backdrop-blur-md [background-image:linear-gradient(rgb(120_120_120/0.1)_1px,transparent_1px),linear-gradient(90deg,rgb(120_120_120/0.1)_1px,transparent_1px)] [background-size:42px_42px] sm:h-[calc(100dvh-1.5rem)] lg:h-[calc(100dvh-1.75rem)] md:grid-cols-[340px_1fr] md:p-4">
        <div
          className="opacity-0 [animation:projects-fade-up_800ms_ease-out_forwards] motion-reduce:opacity-100 motion-reduce:[animation:none]"
        >
          <ProjectsSidebar
            projects={projects}
            selectedProjectId={selectedProject.id}
            onSelectProject={setSelectedId}
          />
        </div>

        <article
          className="relative min-h-[34rem] overflow-hidden rounded-2xl border border-border bg-background/80 p-5 opacity-0 [animation:projects-fade-up_800ms_ease-out_forwards] [animation-delay:420ms] sm:p-7 motion-reduce:opacity-100 motion-reduce:[animation:none]"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/35 to-transparent" />
          <div className="pointer-events-none absolute right-0 bottom-0 h-40 w-40 rounded-full bg-[var(--chart-2)]/10 blur-3xl" />
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
                  className="rounded-full border border-border bg-card/75 px-3 py-1 text-xs text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-6 flex-1 rounded-xl border border-dashed border-border bg-card/70 p-4 sm:p-6">
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
                  "h-11 border-border bg-card/65 hover:bg-card",
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
