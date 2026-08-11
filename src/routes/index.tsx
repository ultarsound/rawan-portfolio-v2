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
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow transition-transform hover:-translate-y-1"
              >
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer — moved outside the last section for correct semantic structure */}
      <footer className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} · {profile.role}
      </footer>
    </main>
  );
}
