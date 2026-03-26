import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export default function ExperiencePage() {
  return (
    <main className="flex flex-1 items-center justify-center px-6 py-24">
      <section className="mx-auto w-full max-w-4xl rounded-2xl border border-white/15 bg-black/45 p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Experience
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          Experience timeline in progress.
        </h1>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
          This route is now dedicated to your work history, roles, and impact.
        </p>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "mt-8 h-12 min-w-44 border-white/30 bg-white/5 hover:bg-white/10",
          )}
        >
          Back Home
        </Link>
      </section>
    </main>
  );
}
