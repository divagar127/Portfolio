import { useEffect, useMemo, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  Award,
  GraduationCap,
  Send,
  Download,
  Code2,
  FileText,
  CalendarDays,
  ArrowUp,
  Github,
  Linkedin,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import headshot from "@/assets/headshot.jpg.asset.json";
import { LINKS, skills, projects, research, education } from "@/lib/portfolio-data";
import { GlowCard, Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { downloadFile } from "@/lib/utils";

function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  sub?: string;
}) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">{eyebrow}</h2>
      <p className="mt-2 text-lg font-bold tracking-tight text-accent sm:text-xl">
        {title} {accent}
      </p>
      {sub && <p className="mt-3 text-sm text-muted-foreground">{sub}</p>}
    </Reveal>
  );
}


function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="font-mono text-lg font-semibold tracking-tight text-accent sm:text-xl">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse font-bold text-accent">|</span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: MouseEvent) => {
      setTilt({
        x: (e.clientX / window.innerWidth - 0.5) * 18,
        y: (e.clientY / window.innerHeight - 0.5) * 18,
      });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <section id="home" className="hero-glow pt-32 pb-24">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1.2fr_0.8fr]">
        <Stagger>
          <StaggerItem>
            <span className="chip inline-flex items-center gap-2 normal-case">
              <span className="size-2 animate-pulse rounded-full bg-accent" /> Available for AI/ML
              opportunities
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="mt-5 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Divagar <br />
              <span className="gradient-text">Senthamil Selvan</span>
            </h1>
          </StaggerItem>
          <StaggerItem>
            <div className="mt-3 flex min-h-[2rem] items-center">
              <Typewriter
                words={[
                  "Software Developer",
                  "AI & ML Engineer",
                  "NLP & Deep Learning Specialist",
                  "Full-Stack AI Builder",
                ]}
              />
            </div>
          </StaggerItem>
          <StaggerItem>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Motivated undergraduate at Amrita Vishwa Vidyapeetham with a strong interest in
              Artificial Intelligence and Deep Learning. Passionate about solving real-world
              problems using AI systems, scalable architectures, and modern research-driven
              approaches.
            </p>
          </StaggerItem>
        </Stagger>

        <motion.div
          className="relative mx-auto"
          animate={{ x: tilt.x, y: tilt.y }}
          transition={{ type: "spring", stiffness: 40, damping: 20 }}
        >
          <motion.div
            className="absolute inset-0 -m-6 rounded-full border border-dashed border-border"
            animate={reduce ? {} : { rotate: 360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
          <div className="group relative size-56 overflow-hidden rounded-full border-2 border-accent/70 shadow-[0_0_80px_-20px_var(--accent)] sm:size-72">
            <img
              src={headshot.url}
              alt="Portrait of Divagar Senthamil Selvan"
              className="size-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="About" title="Who I" accent="am." />
      <Reveal>
        <GlowCard className="p-7 text-lg leading-relaxed text-muted-foreground">
          I'm Divagar S, a final-year B.Tech Computer Science and Engineering (AI) student at Amrita
          Vishwa Vidyapeetham, Coimbatore. I specialize in AI/ML, NLP, and full-stack development,
          with hands-on experience building intelligent systems ranging from multilingual dialogue
          models to AI-powered healthcare platforms. I've published research papers at
          DravidianLangTech 2026 and IEEE RECCAP 2026, and I'm passionate about applying AI to solve
          real-world problems.
        </GlowCard>
      </Reveal>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="Education"
        title="Academic"
        accent="foundation."
        sub="Academic foundation in artificial intelligence and computer science."
      />
      <div className="relative pl-6">
        <span className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent via-violet to-transparent" />
        <Stagger className="grid gap-6">
          {education.map((e) => (
            <StaggerItem key={e.degree} className="relative">
              <span className="absolute -left-[1.6rem] top-8 size-3 rounded-full bg-accent shadow-[0_0_16px_var(--accent)]" />
              <GlowCard className="p-7">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 rounded-lg bg-accent/15 p-2 text-accent">
                    <GraduationCap className="size-4" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold leading-snug">{e.degree}</h3>
                    <p className="mt-1 text-accent">{e.school}</p>
                    <p className="mt-2 flex flex-wrap items-center gap-4 font-mono text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="size-3.5" /> {e.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="size-3.5" /> {e.location}
                      </span>
                    </p>
                    {e.description && (
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                        {e.description}
                      </p>
                    )}
                    <p className="mt-4 text-sm font-semibold">Key Achievements:</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {e.achievements.map((a) => (
                        <span key={a} className="chip normal-case tracking-normal">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Skills" title="Tools I build" accent="with." />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <StaggerItem key={group.title}>
            <GlowCard className="h-full p-6">
              <h3 className="mb-4 text-sm font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((i) => (
                  <span
                    key={i}
                    className="chip transition-colors hover:border-accent/60 hover:text-accent"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </GlowCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Projects" title="Things I've" accent="shipped." />
      <Stagger className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <StaggerItem key={p.title}>
            <GlowCard as="article" className="flex h-full flex-col justify-between p-7">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold tracking-tight">{p.title}</h3>
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${p.title} on GitHub`}
                      className="text-muted-foreground transition-colors hover:text-accent"
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {p.githubUrl && (
                <div className="mt-6 border-t border-border/40 pt-4">
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground transition-colors hover:text-accent"
                  >
                    <Github className="size-3.5" /> View on GitHub
                  </a>
                </div>
              )}
            </GlowCard>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Research" title="Published" accent="work." />
      <div className="space-y-8">
        {research.map((r) => (
          <Reveal key={r.venue}>
            <div className="grid gap-5 md:grid-cols-[220px_1fr]">
              <div className="md:pt-6">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  <Award className="size-4" /> {r.venue}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">Status: {r.status}</p>
                {r.url && (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-link mt-2 inline-flex items-center gap-1.5 text-sm text-accent"
                  >
                    Read paper <ExternalLink className="size-3.5" />
                  </a>
                )}
              </div>
              <GlowCard as="article" className="p-7">
                <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-accent">
                  <FileText className="size-4" /> Paper
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug">{r.title}</h3>
                {r.intro && <p className="mt-3 text-sm text-muted-foreground">{r.intro}</p>}
                <ul className="mt-4 space-y-2">
                  {r.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {r.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Experience" title="Where I've" accent="worked." />
      <Stagger className="grid gap-6 md:grid-cols-2">
        <StaggerItem>
          <GlowCard as="article" className="h-full p-7">
            <div className="flex items-start gap-4">
              <span className="rounded-xl bg-accent/15 p-3 text-accent">
                <Briefcase className="size-5" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-bold">Research Intern</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    Dec 2025 – Mar 2026
                  </span>
                </div>
                <p className="text-sm text-accent">Amrita Vishwa Vidyapeetham, Coimbatore</p>
                <p className="mt-3 text-sm text-muted-foreground">
                  Worked on EEG-based Brain Computer Interface applications including P300 speller
                  and motor imagery tasks. Gained hands-on experience in EEG signal acquisition
                  using Emotiv Epoch X and contributed to AI-driven BCI research.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["EEG", "BCI", "P300", "Motor Imagery", "Emotiv Epoch X"].map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </GlowCard>
        </StaggerItem>

        <StaggerItem>
          <GlowCard as="article" className="h-full p-7">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-accent/15 p-3 text-accent">
                <Award className="size-5" />
              </span>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Internship certificate
                </p>
                <h3 className="font-bold">Amrita Vishwa Vidyapeetham</h3>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Certificate of Internship awarded to Divagar Senthamil Selvan for EEG · BCI research
              work carried out during 2025–2026.
            </p>
            <a
              href="/Divagar-Internship-Certificate.pdf"
              download="Divagar-Internship-Certificate.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.preventDefault();
                downloadFile(
                  "/Divagar-Internship-Certificate.pdf",
                  "Divagar-Internship-Certificate.pdf",
                );
              }}
              className="btn-accent mt-6 inline-flex cursor-pointer items-center gap-2 px-4 py-2 text-sm"
            >
              <Download className="size-4" /> Download certificate
            </a>
          </GlowCard>
        </StaggerItem>
      </Stagger>
    </section>
  );
}

type Calendar = Record<string, number>;

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function useLeetcodeCalendar() {
  const [data, setData] = useState<Calendar | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    const parse = (raw: unknown): Calendar | null => {
      if (!raw) return null;
      if (typeof raw === "string") return JSON.parse(raw) as Calendar;
      if (typeof raw === "object") return raw as Calendar;
      return null;
    };

    const load = async () => {
      const sources = [
        "https://leetcode-api-faisalshohag.vercel.app/divagar_s",
        "https://alfa-leetcode-api.onrender.com/divagar_s/calendar",
      ];
      for (const url of sources) {
        try {
          const res = await fetch(url);
          const json = (await res.json()) as { submissionCalendar?: unknown };
          const cal = parse(json.submissionCalendar);
          if (cal && Object.keys(cal).length) {
            if (alive) setData(cal);
            return;
          }
        } catch {
          /* try next source */
        }
      }
      if (alive) setError(true);
    };

    void load();
    return () => {
      alive = false;
    };
  }, []);

  return { data, error };
}

function BarRow({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-14 shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </span>
      <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted/60">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "var(--gradient-accent)" }}
          initial={{ width: 0 }}
          whileInView={{ width: `${max ? Math.max((value / max) * 100, value ? 4 : 0) : 0}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <span className="w-8 shrink-0 text-right font-mono text-xs text-muted-foreground">
        {value}
      </span>
    </div>
  );
}

function LeetcodeHeatmap({ data }: { data: Record<string, number> }) {
  const { weeks, total, activeDays, maxStreak, monthLabels } = useMemo(() => {
    const counts = new Map<string, number>();
    for (const [ts, c] of Object.entries(data)) {
      const d = new Date(Number(ts) * 1000);
      const key = d.toISOString().slice(0, 10);
      counts.set(key, (counts.get(key) ?? 0) + c);
    }
    const end = new Date();
    end.setUTCHours(0, 0, 0, 0);
    const start = new Date(end);
    start.setUTCDate(start.getUTCDate() - 364);
    start.setUTCDate(start.getUTCDate() - start.getUTCDay());

    const weeks: { date: Date; key: string; count: number }[][] = [];
    const monthLabels: { index: number; label: string }[] = [];
    let total = 0;
    let activeDays = 0;
    let streak = 0;
    let maxStreak = 0;
    let lastMonth = -1;
    for (let d = new Date(start), w = 0; d <= end; w++) {
      const week: { date: Date; key: string; count: number }[] = [];
      for (let i = 0; i < 7; i++) {
        const date = new Date(d);
        const key = date.toISOString().slice(0, 10);
        const count = date >= start && date <= end ? (counts.get(key) ?? 0) : 0;
        if (date <= end && date >= start) {
          total += count;
          if (count > 0) {
            activeDays++;
            streak++;
            maxStreak = Math.max(maxStreak, streak);
          } else {
            streak = 0;
          }
        }
        week.push({ date, key, count });
        d.setUTCDate(d.getUTCDate() + 1);
      }
      const firstDay = week[0];
      if (firstDay && firstDay.date.getUTCMonth() !== lastMonth) {
        lastMonth = firstDay.date.getUTCMonth();
        monthLabels.push({ index: w, label: MONTHS[lastMonth] ?? "" });
      }

      weeks.push(week);
    }
    return { weeks, total, activeDays, maxStreak, monthLabels };
  }, [data]);

  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);

  const level = (c: number) => (c === 0 ? 0 : c < 2 ? 1 : c < 4 ? 2 : c < 7 ? 3 : 4);

  return (
    <div className="relative mt-6" data-hm-root>
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm">
          <span className="font-bold">{total}</span>{" "}
          <span className="text-muted-foreground">submissions in the past one year</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Total active days: <span className="text-foreground">{activeDays}</span> &nbsp; Max
          streak: <span className="text-foreground">{maxStreak}</span>
        </p>
      </div>

      <div className="mt-4 overflow-x-auto pb-1">
        <div className="inline-block min-w-full">
          <div className="flex gap-[3px]">
            {weeks.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day) => (
                  <div
                    key={day.key}
                    onMouseEnter={(e) => {
                      const r = (e.target as HTMLElement).getBoundingClientRect();
                      const p = (
                        e.currentTarget.closest("[data-hm-root]") as HTMLElement
                      )?.getBoundingClientRect();
                      setTip({
                        x: r.left - (p?.left ?? 0) + r.width / 2,
                        y: r.top - (p?.top ?? 0),
                        text: `${day.count} submission${day.count === 1 ? "" : "s"} on ${day.date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })}`,
                      });
                    }}
                    onMouseLeave={() => setTip(null)}
                    className="size-[11px] rounded-[3px] transition-transform hover:scale-125"
                    style={{
                      background:
                        level(day.count) === 0
                          ? "color-mix(in oklab, var(--foreground) 10%, transparent)"
                          : `color-mix(in oklab, var(--accent) ${level(day.count) * 24 + 20}%, transparent)`,
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="relative mt-2 h-4">
            {monthLabels.map((m) => (
              <span
                key={`${m.label}-${m.index}`}
                className="absolute font-mono text-[0.6rem] text-muted-foreground"
                style={{ left: m.index * 14 }}
              >
                {m.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {tip && (
        <div
          className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-lg border border-border bg-popover px-2.5 py-1.5 text-xs whitespace-nowrap text-popover-foreground shadow-lg"
          style={{ left: tip.x, top: tip.y - 6 }}
        >
          {tip.text}
        </div>
      )}
    </div>
  );
}

function LeetcodeReports() {
  const { data, error } = useLeetcodeCalendar();


  const { months, years } = useMemo(() => {
    if (!data) return { months: [], years: [] };
    const byMonth = new Map<string, number>();
    const byYear = new Map<string, number>();
    for (const [ts, count] of Object.entries(data)) {
      const d = new Date(Number(ts) * 1000);
      const mk = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
      byMonth.set(mk, (byMonth.get(mk) ?? 0) + count);
      const yk = String(d.getUTCFullYear());
      byYear.set(yk, (byYear.get(yk) ?? 0) + count);
    }
    const now = new Date();
    const months = Array.from({ length: 12 }, (_, i) => {
      const d = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - (11 - i), 1));
      const key = `${d.getUTCFullYear()}-${d.getUTCMonth()}`;
      return {
        label: `${MONTHS[d.getUTCMonth()]} ${String(d.getUTCFullYear()).slice(2)}`,
        value: byMonth.get(key) ?? 0,
      };
    });
    const years = [...byYear.entries()]
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([label, value]) => ({ label, value }));
    return { months, years };
  }, [data]);

  if (error) {
    return (
      <p className="mt-6 text-sm text-muted-foreground">
        Live LeetCode reports are temporarily unavailable — view the full profile for the latest
        stats.
      </p>
    );
  }

  if (!data) {
    return (
      <div className="mt-6 space-y-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-2.5 animate-pulse rounded-full bg-muted/60" />
        ))}
      </div>
    );
  }

  const maxM = Math.max(1, ...months.map((m) => m.value));
  const maxY = Math.max(1, ...years.map((y) => y.value));

  return (
    <>
    <LeetcodeHeatmap data={data} />
    <div className="mt-8 grid gap-8 sm:grid-cols-2">

      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Month-wise submissions
        </p>
        <div className="mt-4 space-y-2.5">
          {months.map((m) => (
            <BarRow key={m.label} label={m.label} value={m.value} max={maxM} />
          ))}
        </div>
      </div>
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          Year-wise submissions
        </p>
        <div className="mt-4 space-y-2.5">
          {years.map((y) => (
            <BarRow key={y.label} label={y.label} value={y.value} max={maxY} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}



export function Activity() {
  return (
    <section id="activity" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading
        eyebrow="LeetCode"
        title="Problem solving"
        accent="activity."
        sub="A live snapshot of my daily practice, with month-wise and year-wise reports."
      />
      <Reveal>
        <GlowCard className="p-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="rounded-xl bg-accent/15 p-3 text-accent">
                <Code2 className="size-5" />
              </span>
              <div>
                <h3 className="font-bold">LeetCode — divagar_s</h3>
                <p className="text-sm text-muted-foreground">Daily problem solving &amp; DSA practice</p>
              </div>
            </div>
            <a
              href={LINKS.leetcode}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost px-4 py-1.5 text-sm"
            >
              View profile
            </a>
          </div>
          <img
            src="https://leetcard.jacoblin.cool/divagar_s?theme=transparent&font=JetBrains%20Mono"
            alt="LeetCode solved problem stats for divagar_s"
            loading="lazy"
            className="mt-6 w-full max-w-md"
          />

          <LeetcodeReports />
        </GlowCard>
      </Reveal>
    </section>
  );
}

const WEB3FORMS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) ||
  "12052b6a-1df6-475a-ae98-897d769a110c";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");


  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
      <SectionHeading eyebrow="Contact" title="Let's build" accent="together." />
      <div className="grid gap-6 md:grid-cols-2">
        <Stagger className="grid content-start gap-4">
          {[
            { icon: Mail, label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}` },
            {
              icon: Phone,
              label: "Phone",
              value: LINKS.phone,
              href: `tel:${LINKS.phone.replace(/\s/g, "")}`,
            },
            { icon: MapPin, label: "Location", value: "Puducherry, India", href: "" },
          ].map((c) => (
            <StaggerItem key={c.label}>
              <a href={c.href || undefined} className="surface glow-card flex items-center gap-4 p-5">
                <span className="rounded-xl bg-accent/15 p-3 text-accent">
                  <c.icon className="size-4" />
                </span>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="text-sm font-medium">{c.value}</p>
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal>
          <form
            className="surface glow-card grid gap-4 p-7"
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              data.append("access_key", WEB3FORMS_KEY);
              data.append("from_name", "Portfolio contact form");
              setStatus("sending");
              try {
                const res = await fetch("https://api.web3forms.com/submit", {
                  method: "POST",
                  body: data,
                });
                const json = (await res.json()) as { success?: boolean };
                if (json.success) {
                  setStatus("sent");
                  form.reset();
                } else {
                  setStatus("error");
                }
              } catch {
                setStatus("error");
              }
            }}
          >

            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "subject", label: "Subject", type: "text" },
            ].map((f) => (
              <div key={f.name} className="grid gap-2">
                <label
                  htmlFor={f.name}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  required
                  className="rounded-lg border border-input bg-background/60 px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
                />
              </div>
            ))}
            <div className="grid gap-2">
              <label
                htmlFor="message"
                className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="rounded-lg border border-input bg-background/60 px-3 py-2 text-sm outline-none transition-colors focus:border-accent"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="btn-accent inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm disabled:opacity-60"
            >
              <Send className="size-4" /> {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "sent" && (
              <p className="text-sm text-accent">
                Thanks! Your message has been sent — I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please email {LINKS.email} directly.
              </p>
            )}

          </form>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 sm:flex-row">
        <div>
          <p className="text-lg font-extrabold tracking-tight">
            Divagar<span className="text-accent">.</span>
          </p>
          <p className="text-sm text-muted-foreground">Built with passion for AI &amp; innovation.</p>
        </div>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="btn-ghost inline-flex items-center gap-2 px-4 py-2 text-sm"
          aria-label="Back to top"
        >
          <ArrowUp className="size-4" /> Back to top
        </button>
        <p className="font-mono text-xs text-muted-foreground">© 2026 Divagar Senthamil Selvan.</p>
      </div>
    </footer>
  );
}
