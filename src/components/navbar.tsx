import { useEffect, useState } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { ThemeToggle } from "./theme";
import { LINKS } from "@/lib/portfolio-data";
import { downloadFile } from "@/lib/utils";

const nav = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Experience", href: "#experience" },
  { label: "Activity", href: "#activity" },
];

export function SocialRail() {
  const items = [
    { href: LINKS.github, icon: Github, label: "GitHub" },
    { href: LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: "#contact", icon: Mail, label: "Contact me" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-3 xl:flex"
    >
      {items.map((s) => (
        <a
          key={s.label}
          href={s.href}
          aria-label={s.label}
          title={s.label}
          {...(s.href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          className="icon-rail-btn size-11"
        >
          <s.icon className="size-4" />
        </a>
      ))}
      <span className="mx-auto h-16 w-px bg-gradient-to-b from-border to-transparent" />
    </motion.div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", ...nav.map((n) => n.href.slice(1))];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.2, 0.6] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 mx-auto max-w-5xl px-4"
    >
      <div
        className={`flex h-14 items-center justify-between px-6 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-accent/35 bg-background/45 backdrop-blur-2xl shadow-[0_10px_38px_-10px_rgba(0,0,0,0.5)] border-solid"
            : "border-border/50 bg-background/30 backdrop-blur-xl shadow-lg"
        }`}
      >
        <a href="#home" className="text-base font-extrabold tracking-tight">
          Divagar<span className="text-accent">.</span>
        </a>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`nav-link text-xs font-medium tracking-wide transition-colors hover:text-accent ${
                active === n.href ? "text-accent font-semibold" : "text-muted-foreground"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="/Divagar-S-Resume.pdf"
            download="Divagar-S-Resume.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={(e) => {
              e.preventDefault();
              downloadFile("/Divagar-S-Resume.pdf", "Divagar-S-Resume.pdf");
            }}
            className="btn-accent hidden cursor-pointer items-center gap-1.5 px-3.5 py-1.5 text-xs sm:inline-flex"
          >
            <Download className="size-3.5" /> Resume
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="btn-ghost flex size-8 items-center justify-center lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-2 animate-fade-in rounded-3xl border border-border/60 bg-background/95 px-5 py-4 backdrop-blur-2xl shadow-xl lg:hidden">
          <div className="grid gap-1 pt-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-accent"
              >
                {n.label}
              </a>
            ))}
            <a
              href="/Divagar-S-Resume.pdf"
              download="Divagar-S-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                downloadFile("/Divagar-S-Resume.pdf", "Divagar-S-Resume.pdf");
              }}
              className="btn-accent mt-2 inline-flex cursor-pointer items-center justify-center gap-2 px-4 py-2 text-sm"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={LINKS.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="icon-rail-btn size-10"
              >
                <Github className="size-4" />
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="icon-rail-btn size-10"
              >
                <Linkedin className="size-4" />
              </a>
              <a href="#contact" aria-label="Contact me" className="icon-rail-btn size-10">
                <Mail className="size-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
}
