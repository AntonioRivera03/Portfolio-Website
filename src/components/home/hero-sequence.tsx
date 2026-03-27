import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Code2,
  Cpu,
  Dumbbell,
  GitBranch,
  Heart,
  Lightbulb,
  Mountain,
  MonitorPlay,
  Rocket,
  Terminal,
  ShieldCheck,
  Sparkles,
  Target,
  TestTube2,
  User,
  Zap,
} from "lucide-react";

import { RevealOnScroll } from "@/components/home/reveal-on-scroll";
import { buttonVariants } from "@/components/ui/button-variants";
import { cn } from "@/lib/utils";

type SkillCard = {
  title: string;
  tools: string[];
  icon: LucideIcon;
};

type ProjectSpotlight = {
  name: string;
  description: string;
  stack: string[];
  demoHref: string;
  sourceHref: string;
  showGithubButton: boolean;
};

type ValueCard = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

type WorkflowStep = {
  title: string;
  detail: string;
  tools: string[];
  icon: LucideIcon;
};

type HobbyCard = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

const aboutPhotoPath = "/self.jpeg";

const skillCards: SkillCard[] = [
  {
    title: "Frontend Development",
    tools: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    icon: Code2,
  },
  {
    title: "Backend Development",
    tools: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Java", "C#", "PHP", "SQL"],
    icon: MonitorPlay,
  },
  {
    title: "UI/UX Design",
    tools: ["Figma", "System Design", "Prototyping", "Research"],
    icon: Sparkles,
  },
  {
    title: "Mobile Development",
    tools: ["React Native", "iOS", "Kotlin"],
    icon: Rocket,
  },
  {
    title: "Performance",
    tools: ["Optimization", "Web Vitals", "Caching", "CDN"],
    icon: Target,
  },
  {
    title: "DevOps & Cloud",
    tools: ["AWS", "Docker", "CI/CD", "Kubernetes", "Git"],
    icon: GitBranch,
  },
];

const topProjects: ProjectSpotlight[] = [
  {
    name: "LivedMatch",
    description:
      "SaaS for helping research organizations and trials find potential applicants through a non-biased algorithm.",
    stack: ["React", "Typescript", "Next.JS", "BetterAuth", "Prisma", "PostgreSQL", "Google Auth"],
    demoHref: "https://www.livedmatch.com",
    sourceHref: "#",
    showGithubButton: false,
  },
  {
    name: "Borealis",
    description:
      "View my high level progress on life goals and get historical statistics on my consistancy.",
    stack: ["TypeScript", "Next.JS", "Go", "MCP", "AI", "Tooling", "iOS", "Next.JS"],
    demoHref: "/projects",
    sourceHref: "#",
    showGithubButton: true,
  },
  {
    name: "Orbit",
    description:
      "Allows for users to, on wake word, ask AI questions while multi-tasking and receive answers through TTS.",
    stack: ["Electron", "TypeScript", "WebSockets", "Python"],
    demoHref: "/projects",
    sourceHref: "#",
    showGithubButton: true,
  },
];

const aboutValues: ValueCard[] = [
  {
    title: "Excellence",
    detail: "I focus on reliable delivery, thoughtful details, and maintainable systems.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    detail: "I explore modern tooling and new approaches to move products forward.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    detail: "I enjoy partnering with teams to turn complex ideas into clear outcomes.",
    icon: User,
  },
  {
    title: "Passion",
    detail: "I genuinely love building software that solves practical, human problems.",
    icon: Heart,
  },
];

const workflowSteps: WorkflowStep[] = [
  {
    title: "Design",
    detail: "Define goals, map user journeys, and shape interaction models before implementation.",
    tools: ["Figma", "Sketch"],
    icon: Sparkles,
  },
  {
    title: "Development",
    detail: "Build responsive interfaces and robust APIs with emphasis on clarity and maintainability.",
    tools: ["React", "TypeScript", "Next.js", "Tailwind"],
    icon: Code2,
  },
  {
    title: "Version Control",
    detail: "Manage iterative delivery through structured branches, reviews, and disciplined commits.",
    tools: ["Git", "GitHub", "Gitlab"],
    icon: GitBranch,
  },
  {
    title: "Testing",
    detail: "Validate product quality through unit tests, integration checks, and real-use scenarios.",
    tools: ["Selenium", "Playwright", "PHPUnit"],
    icon: TestTube2,
  },
  {
    title: "Deployment",
    detail: "Ship stable releases with automation, observability, and rollback-ready workflows.",
    tools: ["Vercel", "Docker", "GitHub Actions"],
    icon: Rocket,
  },
  {
    title: "Optimization",
    detail: "Measure performance continuously and improve speed, accessibility, and developer velocity.",
    tools: ["Lighthouse", "Web Vitals", "Analytics"],
    icon: Target,
  },
];

const hobbies: HobbyCard[] = [
  {
    title: "Bouldering",
    detail: "Working on strength, technique, and problem-solving while destressing.",
    icon: Mountain,
  },
  {
    title: "Building Systems",
    detail:
      "Designing personal tools like Borealis to manage life progression and goals.",
    icon: Cpu,
  },
  {
    title: "Optimization",
    detail: "Always looking for ways to make applications faster, cleaner, and easier to maintain.",
    icon: Zap,
  },
  {
    title: "Terminal & Tooling",
    detail: "Tweaking my Neovim and Arch setup, WSL, and workflows that make development smoother.",
    icon: Terminal,
  },
  {
    title: "Learning",
    detail: "Exploring new concepts, languages, and ideas just to see how things work.",
    icon: Brain,
  },
  {
    title: "Being Active",
    detail: "Staying consistent with workouts, climbing, and getting outside when I can.",
    icon: Dumbbell,
  },
];

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
}) {
  return (
    <header>
      {
        eyebrow != "" && <p className="inline-flex rounded-sm border border-border bg-card/70 px-3 py-1 text-xs tracking-[0.22em] text-muted-foreground uppercase">
        {eyebrow}
      </p> || eyebrow == "" && <p className="py-3">{""}</p>
      }

      <h2 className="mt-4 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
        {title}
        <span className="block text-[var(--chart-2)]">{accent}</span>
      </h2>
      {description ? (
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  );
}

export function HeroSequence() {
  return (
    <main className="relative flex min-h-screen flex-1 justify-center overflow-hidden px-5 pb-24 pt-24 sm:px-8 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 opacity-55 [background-image:linear-gradient(rgb(120_120_120/0.12)_1px,transparent_1px),linear-gradient(90deg,rgb(120_120_120/0.12)_1px,transparent_1px)] [background-size:40px_40px]" />

      <div className="relative z-10 w-full max-w-6xl space-y-24">
        <header className="relative flex min-h-[68vh] items-start justify-center pt-20 text-center sm:min-h-[72vh]">
          <p className="intro-name pointer-events-none absolute left-1/2 z-20 whitespace-nowrap px-4 text-[clamp(2rem,8vw,5rem)] font-semibold tracking-[0.14em] text-foreground uppercase">
            ANTONIO RIVERA
          </p>

          <div className="intro-content relative z-10 mx-auto max-w-4xl space-y-4 pt-3 sm:pt-10">
            <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
              Software Developer
            </p>
            <h1 className="text-4xl font-semibold tracking-[0.08em] text-foreground sm:text-6xl">
              Building Clean, Enterprise Level Software
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
              Performance focused, clean architecture, and scalable systems.            </p>
          </div>
        </header>

        <RevealOnScroll>
          <section className="space-y-10">
          <SectionHeading
            eyebrow="Expertise"
            title="Skillsets &"
            accent="Capabilities"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillCards.map((skill) => {
              const Icon = skill.icon;
              return (
                <article
                  key={skill.title}
                  className="group rounded-2xl border border-border bg-card/70 p-5 shadow-[0_10px_28px_rgb(0_0_0_/_0.07)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex rounded-md border border-border bg-background/60 p-3 text-[var(--chart-2)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground">{skill.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {skill.tools.map((tool) => (
                      <span
                        key={`${skill.title}-${tool}`}
                        className="rounded-sm border border-border bg-background/60 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="space-y-10">
          <SectionHeading
            eyebrow="Featured Work"
            title="Top Three"
            accent="Projects"
            description="Showcasing impactful products across design, development, and operational delivery."
          />

          <div className="space-y-8">
            {topProjects.map((project, index) => {
              const isEven = index % 2 === 0;
              return (
                <article
                  key={project.name}
                  className="grid items-center gap-5 rounded-2xl border border-border bg-card/60 p-4 shadow-[0_12px_34px_rgb(0_0_0_/_0.07)] sm:p-6 md:grid-cols-2"
                >
                  <div
                    className={cn(
                      "relative min-h-52 overflow-hidden rounded-xl border border-border bg-gradient-to-br from-background via-accent/25 to-secondary/45",
                      !isEven && "md:order-2",
                    )}
                  >
                    <div className="absolute -top-10 -left-8 h-36 w-36 rounded-full bg-[var(--chart-4)]/30 blur-3xl" />
                    <div className="absolute -right-8 -bottom-8 h-36 w-36 rounded-full bg-[var(--chart-2)]/25 blur-3xl" />
                    <p className="absolute right-4 bottom-2 text-6xl font-semibold text-foreground/20">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div className={cn("space-y-4", !isEven && "md:order-1")}>
                    <h3 className="text-3xl font-semibold text-foreground">{project.name}</h3>
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tool, toolIndex) => (
                        <span
                          key={`${project.name}-${tool}-${toolIndex}`}
                          className="rounded-sm border border-border bg-background/70 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 pt-1">
                      <Link
                        href={project.demoHref}
                        className={cn(buttonVariants({ variant: "default", size: "lg" }), "h-11")}
                        target={project.demoHref.startsWith("http") ? "_blank" : undefined}
                        rel={project.demoHref.startsWith("http") ? "noreferrer" : undefined}
                      >
                        View Live
                      </Link>
                      {project.showGithubButton ? (
                        <Link
                          href={project.sourceHref}
                          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11")}
                        >
                          GitHub
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="space-y-4">
            <p className="inline-flex rounded-sm border border-border bg-card/70 px-3 py-1 text-xs tracking-[0.22em] text-muted-foreground uppercase">
              About Me
            </p>
            <div className="relative min-h-[25rem] overflow-hidden rounded-2xl border border-border bg-card/80 p-6 shadow-[0_10px_28px_rgb(0_0_0_/_0.08)]">
              <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/20 to-secondary/30" />
              <div className="relative h-full overflow-hidden rounded-xl border border-border bg-background/55">
                <div
                  role="img"
                  aria-label="Portrait of Antonio Rivera"
                  className="h-full min-h-[28rem] w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${aboutPhotoPath})` }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-transparent dark:from-black/28" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["3", "Years Experience"],
                ["30+", "Projects Completed"],
                ["3", "Companies"],
                ["10+", "Technologies"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-card/70 p-4 text-left transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-4xl font-semibold text-[var(--chart-2)]">{value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <SectionHeading
              eyebrow=""
              title="Passionate About"
              accent="My Craft"
            />
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I am a full-stack developer focused on creating intuitive,
                high-performing software. My work blends product strategy,
                modern design, and reliable engineering.
              </p>
              <p>
                From frontend architecture to backend systems, I prioritize clarity,
                scalability, and collaboration. I believe in clean code with modern solutions.              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {aboutValues.map((value) => {
                const Icon = value.icon;
                return (
                  <article
                    key={value.title}
                    className="rounded-xl border border-border bg-card/70 p-4 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Icon className="size-5 text-[var(--chart-2)]" aria-hidden="true" />
                    <h3 className="mt-3 text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {value.detail}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="space-y-10">
          <SectionHeading
            eyebrow="Process + Tools"
            title="Development"
            accent="Workflow"
            description="A systematic approach from concept to deployment with quality gates at every stage."
          />

          <div className="space-y-4">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const reverse = index % 2 === 1;
              return (
                <article
                  key={step.title}
                  className={cn(
                    "grid items-center gap-4 md:grid-cols-2",
                    reverse && "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1",
                  )}
                >
                  <div className="rounded-xl border border-border bg-card/75 p-5">
                    <div className="inline-flex rounded-md border border-border bg-background/60 p-2 text-[var(--chart-2)]">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.detail}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {step.tools.map((tool) => (
                        <span
                          key={`${step.title}-${tool}`}
                          className="rounded-sm border border-border bg-background/65 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-24 rounded-xl border border-dashed border-border bg-card/40">
                    <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgb(120_120_120/0.13)_1px,transparent_1px),linear-gradient(90deg,rgb(120_120_120/0.13)_1px,transparent_1px)] [background-size:24px_24px]" />
                    <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-md border border-border bg-background/60 text-sm font-semibold text-[var(--chart-2)]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          </section>
        </RevealOnScroll>

        <RevealOnScroll>
          <section className="space-y-10">
          <SectionHeading
            eyebrow="Interests + Passions"
            title="Beyond"
            accent="The Screen"
            description="When I am not coding, I spend time on creative and active hobbies that keep perspective fresh."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;
              return (
                <article
                  key={hobby.title}
                  className="rounded-2xl border border-border bg-card/70 p-6 shadow-[0_10px_28px_rgb(0_0_0_/_0.07)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex rounded-md border border-border bg-background/65 p-3 text-[var(--chart-2)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold text-foreground">{hobby.title}</h3>
                  <p className="mt-2 text-lg leading-relaxed text-muted-foreground">{hobby.detail}</p>
                </article>
              );
            })}
          </div>
          </section>
        </RevealOnScroll>
      </div>
    </main>
  );
}
