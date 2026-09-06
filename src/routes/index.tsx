import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import {
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/lib/portfolio-data";
import { buildJsonLdScripts, buildSeoMeta, seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const { meta, links } = buildSeoMeta({
      title: seo.defaultTitle,
      description: seo.defaultDescription,
    });

    return {
      meta,
      links,
      scripts: buildJsonLdScripts(),
    };
  },
  component: Portfolio,
});

const navItems = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const marqueeWords = [
  "Flutter",
  "Dart",
  "BLoC",
  "GetX",
  "Firebase",
  "Supabase",
  "REST APIs",
  "Clean Architecture",
];

function Portfolio() {
  return (
    <main className="relative overflow-x-hidden">
      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50">
        <nav className="mx-auto mt-4 flex w-[min(1100px,92vw)] items-center justify-between rounded-full surface-card px-5 py-3">
          <a href="#top" className="font-display text-sm font-bold tracking-tight">
            RT<span className="text-primary">.</span>
          </a>
          <ul className="hidden gap-6 text-sm text-muted-foreground md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-primary">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Hire me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative hero-aura">
        <div className="mx-auto grid w-[min(1100px,92vw)] items-center gap-12 pt-36 pb-24 md:grid-cols-[1.2fr_0.8fr] md:pt-44">
          <Reveal>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs tracking-[0.2em] text-primary uppercase">
              <span className="size-1.5 rounded-full bg-primary" />
              Flutter Developer
            </p>
            <h1 className="font-display text-5xl leading-[0.95] font-bold md:text-7xl">
              Rawan <span className="text-gradient">Tharwat</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              {profile.taglineEn}
            </p>
            <p dir="rtl" className="mt-3 max-w-xl text-sm text-muted-foreground/80">
              {profile.tagline}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-1"
              >
                View projects
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="relative mx-auto w-full max-w-xs">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-primary/10 blur-2xl" />
              <div className="relative float-slow overflow-hidden rounded-[2rem] surface-card">
                <SmartImage
                  src={profile.photo}
                  alt={`${profile.name} — Flutter Developer portfolio photo`}
                  label="ضيفي صورتك هنا"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-4 flex justify-between text-xs text-muted-foreground">
                <span>{profile.location}</span>
                <span>CS · Tanta University</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Marquee */}
        <div className="border-y border-border/60 py-4">
          <div className="flex w-max marquee-track gap-10 pr-10 text-sm tracking-[0.25em] text-muted-foreground uppercase">
            {[...marqueeWords, ...marqueeWords].map((word, i) => (
              <span key={`${word}-${i}`} className="flex items-center gap-10">
                {word}
                <span className="size-1 rounded-full bg-accent" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About + stats */}
      <section id="about" className="mx-auto w-[min(1100px,92vw)] py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            About <span className="text-gradient">me</span>
          </h2>
          <p className="mt-6 max-w-3xl text-muted-foreground">
            Flutter Developer with a solid foundation in building mobile applications using Flutter,
            BLoC, GetX and Clean Architecture. Experienced in developing full-featured personal and
            team projects integrating Firebase services, REST APIs and local/cloud databases.
            Passionate about writing clean, scalable code and delivering intuitive user experiences.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="rounded-3xl surface-card p-6 transition-transform hover:-translate-y-1">
                <p className="font-display text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-2 text-xs tracking-widest text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto w-[min(1100px,92vw)] py-16">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Selected <span className="text-gradient">projects</span>
          </h2>
        </Reveal>

        <div className="mt-14 space-y-20">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article
                className={`grid items-center gap-8 md:grid-cols-2 ${
                  index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="grid grid-cols-2 gap-3">
                  {project.images.map((img, i) => (
                    <div
                      key={`${project.slug}-img-${i}`}
                      className={`overflow-hidden rounded-2xl surface-card transition-transform duration-500 hover:-translate-y-2 ${
                        i === 1 ? "translate-y-6" : ""
                      }`}
                    >
                      <SmartImage
                        src={img}
                        alt={`${project.title} screen ${i + 1}`}
                        label={`صورة ${i + 1}`}
                        className="aspect-[3/4] w-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-display text-sm text-accent">
                    0{index + 1}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.subtitle}</p>
                  <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                    {project.points.map((point, i) => (
                      <li key={`${project.slug}-point-${i}`} className="flex gap-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto w-[min(1100px,92vw)] py-24">
        <Reveal>
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Skills & <span className="text-gradient">tools</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 80}>
              <div className="h-full rounded-3xl surface-card p-6 transition-colors hover:border-primary/60">
                <h3 className="text-sm tracking-widest text-accent uppercase">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Experience / education */}
      <section id="experience" className="mx-auto w-[min(1100px,92vw)] py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Experience</h2>
            </Reveal>
            <div className="mt-8 space-y-6">
              {experience.map((item, i) => (
                <Reveal key={`${item.role}-${item.org}-${i}`}>
                  <div className="relative rounded-3xl surface-card p-6">
                    <h3 className="font-display text-lg font-bold">{item.role}</h3>
                    <p className="text-sm text-primary">{item.org}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.period}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.points.map((p, pi) => (
                        <li key={`${item.role}-point-${pi}`} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
              <Reveal>
                <div className="rounded-3xl surface-card p-6">
                  <h3 className="font-display text-lg font-bold">{education.degree}</h3>
                  <p className="text-sm text-primary">{education.school}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{education.meta}</p>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Languages: {education.languages.join(" · ")}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Certifications</h2>
            </Reveal>
            <div className="mt-8 space-y-4">
              {certifications.map((cert, i) => (
                <Reveal key={`${cert.title}-${i}`} delay={i * 90}>
                  <div className="rounded-3xl surface-card p-6 transition-transform hover:-translate-y-1">
                    <h3 className="font-display text-base font-bold">{cert.title}</h3>
                    <p className="text-sm text-primary">{cert.org}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.meta}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative hero-aura mt-16">
        <div className="mx-auto w-[min(1100px,92vw)] py-24 text-center">
          <Reveal>
            <h2 className="font-display text-4xl font-bold md:text-6xl">
              Let's build something <span className="text-gradient">great</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Open to Flutter roles and freelance projects. The fastest way to reach me is email.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {/* Email Button */}
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-1"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                Email
              </a>

              {/* WhatsApp Button */}
              <a
                href={profile.whatsapp || `https://wa.me/20${profile.phone}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.031 2c-5.517 0-9.993 4.476-9.993 9.993 0 1.763.459 3.483 1.332 5.002L2 22l5.12-1.343c1.474.804 3.138 1.226 4.911 1.226 5.517 0 9.993-4.476 9.993-9.993C22.024 6.476 17.548 2 12.031 2zm0 18.271c-1.503 0-2.977-.404-4.264-1.168l-.306-.182-3.167.83.845-3.087-.2-.318c-.838-1.334-1.282-2.879-1.282-4.463 0-4.562 3.712-8.274 8.274-8.274 4.562 0 8.274 3.712 8.274 8.274 0 4.562-3.712 8.274-8.274 8.274zm4.536-6.196c-.249-.125-1.472-.727-1.7-.81-.228-.083-.394-.125-.56.125-.166.249-.643.81-.788.976-.145.166-.291.187-.54.062-.249-.125-1.053-.388-2.006-1.238-.742-.662-1.242-1.48-1.387-1.729-.145-.249-.015-.384.109-.508.112-.112.249-.291.374-.436.125-.145.166-.249.249-.415.083-.166.042-.311-.021-.436-.062-.125-.56-1.349-.768-1.847-.203-.486-.41-.42-.56-.428l-.478-.009c-.166 0-.436.062-.664.311-.228.249-.871.851-.871 2.075 0 1.224.892 2.407 1.016 2.573.125.166 1.756 2.681 4.254 3.76.594.257 1.058.41 1.42.526.597.19 1.14.163 1.569.099.478-.071 1.472-.602 1.68-1.183.208-.581.208-1.079.145-1.183-.062-.104-.228-.166-.477-.291z" />
                </svg>
                WhatsApp
              </a>

              {/* LinkedIn Button */}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                <svg className="size-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · {profile.role}
      </footer>
    </main>
  );
}
