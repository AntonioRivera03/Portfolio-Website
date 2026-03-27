"use client";

import type { ProjectItem } from "@/app/projects/types";
import { cn } from "@/lib/utils";

type ProjectSwitcherCardProps = {
  project: Pick<ProjectItem, "id" | "name" | "description">;
  isSelected: boolean;
  onSelect: (projectId: ProjectItem["id"]) => void;
};

export function ProjectSwitcherCard({
  project,
  isSelected,
  onSelect,
}: ProjectSwitcherCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(project.id)}
      className={cn(
        "w-full rounded-xl border border-border bg-card/75 px-4 py-3 text-left transition-all duration-200",
        "hover:translate-x-2 hover:border-[var(--chart-2)]/55 hover:bg-card",
        isSelected &&
          "border-[var(--chart-2)]/55 bg-card shadow-[0_0_0_1px_rgb(0_0_0_/_0.04)] dark:shadow-[0_0_0_1px_rgb(255_255_255_/_0.14)]",
      )}
      aria-pressed={isSelected}
    >
      <p className="text-sm font-semibold text-foreground">{project.name}</p>
      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{project.description}</p>
    </button>
  );
}
