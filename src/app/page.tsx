import Link from "next/link";

import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="relative flex min-h-screen items-center justify-center px-6 py-24">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent via-background/80 to-background" />
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-start gap-5 rounded-2xl border border-white/15 bg-black/30 p-8 backdrop-blur-md sm:p-12">
          <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
            Antonio Rivera
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Building focused products with clean engineering.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore my experience and jump into the projects hub.
          </p>
        </div>
      </section>

      <section className="relative flex items-center justify-center px-6 py-8 sm:py-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
        <div className="relative grid w-full max-w-2xl grid-cols-1 place-items-center gap-8 sm:grid-cols-2 sm:gap-24">
          <Link
            href="/experience"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "h-12 w-52 border-white/30 bg-white/5 text-foreground hover:bg-white/10",
            )}
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "default", size: "lg" }),
              "h-12 w-52",
            )}
          >
            Projects
          </Link>
        </div>
      </section>
    </main>
  );
}
