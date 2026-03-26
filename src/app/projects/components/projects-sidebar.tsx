"use client";

import { ProjectSwitcherCard } from "@/app/projects/components/project-switcher-card";
import type { ProjectItem } from "@/app/projects/types";

type ProjectsSidebarProps = {
  projects: ProjectItem[];
  selectedProjectId: ProjectItem["id"];
  onSelectProject: (projectId: ProjectItem["id"]) => void;
};

export function ProjectsSidebar({
  projects,
  selectedProjectId,
  onSelectProject,
}: ProjectsSidebarProps) {
  return (
    <aside className="flex h-full min-h-[34rem] flex-col rounded-2xl">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Project Switcher</p>
      <h1 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">Dashboard</h1>

      <div className="mt-5 flex-1 space-y-3 overflow-y-auto pr-2">
        {projects.map((project) => (
          <ProjectSwitcherCard
            key={project.id}
            project={project}
            isSelected={selectedProjectId === project.id}
            onSelect={onSelectProject}
          />
        ))}
      </div>
    </aside>
  );
}
