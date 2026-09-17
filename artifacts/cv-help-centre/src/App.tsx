import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Download,
  Edit3,
  FileText,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Palette,
  PencilLine,
  Phone,
  Printer,
  RotateCcw,
  Sparkles,
  Target,
  UserRound,
  X,
} from 'lucide-react';

type ThemeKey = 'tide' | 'terracotta' | 'saffron' | 'ink';

const themes: Record<ThemeKey, { label: string; note: string; primary: string; soft: string; ink: string }> = {
  tide: { label: 'Tidal green', note: 'Calm + considered', primary: '164 36% 36%', soft: '157 42% 65%', ink: '205 28% 19%' },
  terracotta: { label: 'Soft terracotta', note: 'Warm + expressive', primary: '12 57% 49%', soft: '12 57% 72%', ink: '19 29% 20%' },
  saffron: { label: 'Golden hour', note: 'Bright + optimistic', primary: '35 70% 42%', soft: '36 80% 68%', ink: '31 30% 19%' },
  ink: { label: 'Blue graphite', note: 'Quiet + precise', primary: '205 48% 39%', soft: '205 44% 68%', ink: '211 32% 18%' },
};

const experience = [
  {
    company: 'Miro',
    role: 'Senior Product Designer',
    dates: '2022 — Present',
    location: 'Remote · London',
    detail: 'Led the end-to-end design of collaborative planning tools used by 18M+ people. Partnered with product and research to make complex workflows feel generous and clear.',
    wins: ['Shaped a new canvas experience that lifted weekly activation by 24%.', 'Built a content design practice across three product squads.'],
  },
  {
    company: 'Monzo',
    role: 'Product Designer',
    dates: '2020 — 2022',
    location: 'London, UK',
    detail: 'Designed everyday money moments for a fast-growing customer base, from first deposit to confident investing.',
    wins: ['Simplified the savings journey, reducing support contacts by 17%.', 'Ran discovery with customers across four UK regions.'],
  },
  {
    company: 'Studio North',
    role: 'Designer',
    dates: '2018 — 2020',
    location: 'Manchester, UK',
    detail: 'Worked across brand, digital products and service design for early-stage teams who needed a clear point of view.',
    wins: ['Delivered 12 launches across health, culture and education.', 'Introduced a shared design system that cut handoff time in half.'],
  },
];

const skills = ['Product strategy', 'Interaction design', 'Design systems', 'Research synthesis', 'Prototyping', 'Workshop facilitation'];

function SectionHeading({ icon: Icon, children }: { icon: typeof BriefcaseBusiness; children: string }) {
  return (
    <div className="mb-5 flex items-center gap-3 border-b border-[hsl(var(--border))] pb-2">
      <Icon size={16} strokeWidth={1.8} className="text-[hsl(var(--primary))]" />
      <h2 className="font-mono text-[10px] font-medium uppercase tracking-[0.22em] text-[hsl(var(--primary))]">{children}</h2>
    </div>
  );
}

function Editable({ value, onChange, className = '', multiline = false, testId }: { value: string; onChange: (value: string) => void; className?: string; multiline?: boolean; testId: string }) {
  const Tag = multiline ? 'textarea' : 'input';
  return (
    <Tag
      data-testid={testId}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className={`border-b border-dashed border-[hsl(var(--primary)/.35)] bg-transparent outline-none transition-colors focus:border-[hsl(var(--primary))] ${multiline ? 'min-h-20 resize-none' : ''} ${className}`}
    />
  );
}

function App() {
  const [themeKey, setThemeKey] = useState<ThemeKey>('tide');
  const [showThemePanel, setShowThemePanel] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Ayesha Naveed',
    title: 'Product Designer',
    location: 'London, UK',
    email: 'ayesha.naveed@email.com',
    phone: '+44 7700 900 284',
    intro: 'Product designer with 7 years of experience turning complex systems into products people understand and enjoy. I care about the space between a sharp strategy and a generous experience.',
  });
  const theme = themes[themeKey];

  useEffect(() => {
    document.documentElement.style.setProperty('--primary', theme.primary);
    document.documentElement.style.setProperty('--accent', theme.soft);
    document.documentElement.style.setProperty('--foreground', theme.ink);
    document.documentElement.style.setProperty('--ring', theme.soft);
  }, [theme]);

  const updateProfile = (key: keyof typeof profile, value: string) => {
    setProfile((current) => ({ ...current, [key]: value }));
    setSaved(false);
  };

  const saveChanges = () => {
    setSaved(true);
  };

  return (
    <div className="grain min-h-[100dvh] bg-background text-foreground">
      <aside className={`no-print fixed inset-y-0 left-0 z-40 flex w-[268px] flex-col bg-[hsl(var(--sidebar))] px-5 py-6 text-[hsl(var(--sidebar-foreground))] transition-transform duration-300 lg:translate-x-0 ${mobileMenu ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-xl bg-[hsl(var(--sidebar-primary))] text-[hsl(var(--sidebar-primary-foreground))]">
              <Sparkles size={17} />
            </div>
            <div>
              <p className="font-serif text-lg leading-none">draftwell</p>
              <p className="mt-1 font-mono text-[9px] uppercase tracking-[.2em] text-[hsl(var(--sidebar-foreground)/.52)]">career companion</p>
            </div>
          </div>
          <button data-testid="button-close-menu" onClick={() => setMobileMenu(false)} className="rounded-lg p-2 text-[hsl(var(--sidebar-foreground)/.6)] hover:bg-[hsl(var(--sidebar-accent))] lg:hidden"><X size={17} /></button>
        </div>

        <div className="mt-12">
          <p className="px-3 font-mono text-[9px] uppercase tracking-[.2em] text-[hsl(var(--sidebar-foreground)/.42)]">Your document</p>
          <nav className="mt-3 space-y-1">
            <a data-testid="link-cv-document" href="#cv-document" className="flex items-center gap-3 rounded-xl bg-[hsl(var(--sidebar-accent))] px-3 py-3 text-sm text-[hsl(var(--sidebar-foreground))]">
              <FileText size={16} className="text-[hsl(var(--sidebar-primary))]" /> CV template <span className="ml-auto text-[hsl(var(--sidebar-foreground)/.38)]">01</span>
            </a>
            <button data-testid="button-edit-document" onClick={() => setShowCustomize(true)} className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm text-[hsl(var(--sidebar-foreground)/.66)] transition-colors hover:bg-[hsl(var(--sidebar-accent))] hover:text-[hsl(var(--sidebar-foreground))]">
              <PencilLine size={16} /> Quick edit
            </button>
          </nav>
        </div>

        <div className="mt-10">
          <p className="px-3 font-mono text-[9px] uppercase tracking-[.2em] text-[hsl(var(--sidebar-foreground)/.42)]">Helpful next steps</p>
          <div className="mt-3 space-y-1">
            <a data-testid="link-cv-tips" href="#tips" className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[hsl(var(--sidebar-foreground)/.66)] hover:bg-[hsl(var(--sidebar-accent))]"><Target size={16} /> Make it memorable</a>
            <a data-testid="link-contact" href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-[hsl(var(--sidebar-foreground)/.66)] hover:bg-[hsl(var(--sidebar-accent))]"><CircleHelp size={16} /> Ask for a second pair of eyes</a>
          </div>
        </div>

        <div className="mt-auto rounded-2xl border border-[hsl(var(--sidebar-border))] bg-[hsl(var(--sidebar-accent)/.54)] p-4">
          <div className="flex items-start justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[.15em] text-[hsl(var(--sidebar-primary))]">A small reminder</p>
            <Sparkles size={14} className="text-[hsl(var(--sidebar-primary))]" />
          </div>
          <p className="mt-3 font-serif text-lg leading-snug text-[hsl(var(--sidebar-foreground))]">Your experience is already the interesting part.</p>
          <p className="mt-2 text-xs leading-relaxed text-[hsl(var(--sidebar-foreground)/.55)]">Use this template as a clear frame — not a script.</p>
        </div>
      </aside>

      <main className="min-h-[100dvh] lg:pl-[268px]">
        <header className="no-print sticky top-0 z-30 border-b border-border/70 bg-[hsl(var(--background)/.9)] px-4 py-4 backdrop-blur-md sm:px-8 lg:px-12">
          <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button data-testid="button-open-menu" onClick={() => setMobileMenu(true)} className="rounded-lg p-2 hover:bg-[hsl(var(--muted))] lg:hidden"><Menu size={19} /></button>
              <div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-[hsl(var(--primary))] animate-soft-pulse" />
                  <p className="font-mono text-[10px] uppercase tracking-[.18em] text-muted-foreground">CV help centre</p>
                </div>
                <h1 className="mt-1 font-serif text-xl text-foreground sm:text-2xl">A polished starting point</h1>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <button data-testid="button-theme-picker" onClick={() => setShowThemePanel((current) => !current)} className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-medium text-foreground transition-transform hover:-translate-y-0.5">
                  <Palette size={15} className="text-[hsl(var(--primary))]" /><span className="hidden sm:inline">Style</span><ChevronDown size={13} className="text-muted-foreground" />
                </button>
                {showThemePanel && (
                  <div data-testid="panel-theme-picker" className="absolute right-0 top-12 z-50 w-64 rounded-2xl border border-border bg-card p-3 shadow-xl animate-rise-in">
                    <p className="px-2 pb-2 font-mono text-[9px] uppercase tracking-[.18em] text-muted-foreground">Choose an accent</p>
                    {(Object.keys(themes) as ThemeKey[]).map((key) => (
                      <button data-testid={`button-theme-${key}`} key={key} onClick={() => { setThemeKey(key); setShowThemePanel(false); }} className="flex w-full items-center gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-muted">
                        <span className="size-7 rounded-lg" style={{ background: `hsl(${themes[key].soft})` }} />
                        <span className="flex-1"><span className="block text-sm font-medium">{themes[key].label}</span><span className="block text-[11px] text-muted-foreground">{themes[key].note}</span></span>
                        {themeKey === key && <Check size={15} className="text-[hsl(var(--primary))]" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button data-testid="button-print-cv" onClick={() => window.print()} className="flex items-center gap-2 rounded-xl bg-[hsl(var(--primary))] px-3.5 py-2.5 text-xs font-semibold text-[hsl(var(--primary-foreground))] shadow-sm transition-transform hover:-translate-y-0.5 sm:px-4">
                <Download size={15} /><span className="hidden sm:inline">Save as PDF</span><span className="sm:hidden">Save</span>
              </button>
            </div>
          </div>
        </header>

        <div className="mx-auto grid max-w-[1320px] gap-10 px-4 py-8 sm:px-8 sm:py-10 lg:grid-cols-[minmax(0,1fr)_250px] lg:px-12 lg:py-14">
          <div>
            <div className="no-print mb-7 flex animate-rise-in items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary))]">Template 01</p>
                <p className="mt-1 text-sm text-muted-foreground">A clear, human CV for thoughtful product people.</p>
              </div>
              <button data-testid="button-customize-cv" onClick={() => setShowCustomize((current) => !current)} className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs font-semibold text-[hsl(var(--primary))] hover:bg-[hsl(var(--muted))]"><Edit3 size={14} /> Customize</button>
            </div>

            {showCustomize && (
              <div data-testid="panel-customize-cv" className="no-print mb-7 rounded-2xl border border-[hsl(var(--primary)/.25)] bg-[hsl(var(--card))] p-5 shadow-sm animate-rise-in">
                <div className="flex items-start justify-between gap-4">
                  <div><p className="font-serif text-xl">Make it yours</p><p className="mt-1 text-xs text-muted-foreground">These details update the preview instantly. Keep the good bits, replace the rest.</p></div>
                  <button data-testid="button-close-customize" onClick={() => setShowCustomize(false)} className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted"><X size={16} /></button>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="text-xs font-medium">Full name<Editable testId="input-profile-name" value={profile.name} onChange={(value) => updateProfile('name', value)} className="mt-1.5 block w-full py-1.5 text-sm" /></label>
                  <label className="text-xs font-medium">Role / headline<Editable testId="input-profile-title" value={profile.title} onChange={(value) => updateProfile('title', value)} className="mt-1.5 block w-full py-1.5 text-sm" /></label>
                  <label className="text-xs font-medium">Location<Editable testId="input-profile-location" value={profile.location} onChange={(value) => updateProfile('location', value)} className="mt-1.5 block w-full py-1.5 text-sm" /></label>
                  <label className="text-xs font-medium">Email<Editable testId="input-profile-email" value={profile.email} onChange={(value) => updateProfile('email', value)} className="mt-1.5 block w-full py-1.5 text-sm" /></label>
                  <label className="text-xs font-medium sm:col-span-2">Short introduction<Editable testId="input-profile-intro" multiline value={profile.intro} onChange={(value) => updateProfile('intro', value)} className="mt-1.5 block w-full py-2 text-sm leading-relaxed" /></label>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{saved ? 'Saved in this browser session' : 'Changes are local to this document'}</span>
                  <div className="flex gap-2">
                    <button data-testid="button-reset-profile" onClick={() => setProfile({ name: 'Ayesha Naveed', title: 'Product Designer', location: 'London, UK', email: 'ayesha.naveed@email.com', phone: '+44 7700 900 284', intro: 'Product designer with 7 years of experience turning complex systems into products people understand and enjoy. I care about the space between a sharp strategy and a generous experience.' })} className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium text-muted-foreground hover:bg-muted"><RotateCcw size={13} /> Reset</button>
                    <button data-testid="button-save-profile" onClick={saveChanges} className="rounded-lg bg-[hsl(var(--primary))] px-3 py-2 text-xs font-semibold text-[hsl(var(--primary-foreground))]">Done editing</button>
                  </div>
                </div>
              </div>
            )}

            <article id="cv-document" data-testid="cv-document" className="cv-paper paper-shadow animate-rise-in overflow-hidden rounded-[2px]">
              <div className="p-7 sm:p-12 lg:p-[68px]">
                <header className="border-b-[3px] border-[hsl(var(--primary))] pb-8">
                  <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
                    <div>
                      <p data-testid="text-cv-kicker" className="font-mono text-[10px] uppercase tracking-[.24em] text-[hsl(var(--primary))]">Curriculum vitae</p>
                      <h2 data-testid="text-profile-name" className="mt-4 font-serif text-5xl leading-[.9] tracking-[-.045em] text-[hsl(var(--foreground))] sm:text-6xl">{profile.name}</h2>
                      <p data-testid="text-profile-title" className="mt-4 text-sm font-semibold tracking-[.08em] text-[hsl(var(--primary))]">{profile.title}</p>
                    </div>
                    <div className="space-y-2 text-left text-xs text-[hsl(var(--muted-foreground))] sm:text-right">
                      <a data-testid="link-profile-email" href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-[hsl(var(--primary))] sm:justify-end"><Mail size={12} /> {profile.email}</a>
                      <a data-testid="link-profile-phone" href={`tel:${profile.phone.replaceAll(' ', '')}`} className="flex items-center gap-2 hover:text-[hsl(var(--primary))] sm:justify-end"><Phone size={12} /> {profile.phone}</a>
                      <span data-testid="text-profile-location" className="flex items-center gap-2 sm:justify-end"><MapPin size={12} /> {profile.location}</span>
                      <a data-testid="link-profile-linkedin" href="https://linkedin.com" className="flex items-center gap-2 hover:text-[hsl(var(--primary))] sm:justify-end"><Linkedin size={12} /> linkedin.com/in/ayesha</a>
                    </div>
                  </div>
                </header>

                <section className="grid gap-8 border-b border-[hsl(var(--border))] py-8 sm:grid-cols-[120px_1fr]">
                  <SectionHeading icon={UserRound}>Profile</SectionHeading>
                  <p data-testid="text-profile-intro" className="max-w-2xl text-[13px] leading-[1.75] text-[hsl(var(--foreground)/.78)]">{profile.intro}</p>
                </section>

                <section className="border-b border-[hsl(var(--border))] py-8">
                  <SectionHeading icon={BriefcaseBusiness}>Experience</SectionHeading>
                  <div className="space-y-8">
                    {experience.map((item, index) => (
                      <div data-testid={`experience-item-${index}`} key={item.company} className="grid gap-2 sm:grid-cols-[120px_1fr] sm:gap-8">
                        <div className="font-mono text-[10px] leading-relaxed text-[hsl(var(--muted-foreground))]"><p>{item.dates}</p><p className="mt-1">{item.location}</p></div>
                        <div>
                          <div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-[15px] font-bold">{item.role}</h3><span className="font-mono text-[10px] uppercase tracking-[.12em] text-[hsl(var(--primary))]">{item.company}</span></div>
                          <p className="mt-2 text-[12px] leading-[1.7] text-[hsl(var(--foreground)/.7)]">{item.detail}</p>
                          <ul className="mt-3 space-y-1.5 text-[12px] leading-relaxed text-[hsl(var(--foreground)/.8)]">{item.wins.map((win) => <li key={win} className="flex gap-2"><span className="mt-[7px] size-1 shrink-0 rounded-full bg-[hsl(var(--accent))]" />{win}</li>)}</ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="grid gap-8 border-b border-[hsl(var(--border))] py-8 sm:grid-cols-[120px_1fr]">
                  <SectionHeading icon={Layers3}>Capabilities</SectionHeading>
                  <div className="flex flex-wrap content-start gap-2">{skills.map((skill) => <span data-testid={`skill-${skill.toLowerCase().replaceAll(' ', '-')}`} key={skill} className="rounded-full border border-[hsl(var(--primary)/.35)] px-3 py-1.5 text-[11px] font-medium text-[hsl(var(--primary))]">{skill}</span>)}</div>
                </section>

                <section className="grid gap-8 pt-8 sm:grid-cols-[120px_1fr]">
                  <SectionHeading icon={GraduationCap}>Education</SectionHeading>
                  <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
                    <div><h3 className="text-[15px] font-bold">MA Interaction Design</h3><p className="mt-1 text-[12px] text-[hsl(var(--muted-foreground))]">Royal College of Art · London</p></div>
                    <p className="font-mono text-[10px] text-[hsl(var(--muted-foreground))]">2016 — 2018</p>
                    <div><h3 className="text-[15px] font-bold">BA Graphic Design</h3><p className="mt-1 text-[12px] text-[hsl(var(--muted-foreground))]">University of Leeds</p></div>
                  </div>
                </section>
              </div>
              <footer className="flex items-center justify-between bg-[hsl(var(--primary))] px-7 py-3 font-mono text-[9px] uppercase tracking-[.16em] text-[hsl(var(--primary-foreground)/.72)] sm:px-12 lg:px-[68px]">
                <span>Ready when you are</span><span>01 / 01</span>
              </footer>
            </article>
          </div>

          <aside className="no-print hidden space-y-7 lg:block">
            <div className="sticky top-28">
              <div className="mb-8">
                <p className="font-mono text-[10px] uppercase tracking-[.18em] text-[hsl(var(--primary))]">A little guidance</p>
                <h2 className="mt-2 font-serif text-2xl leading-tight">Make the blank page less intimidating.</h2>
              </div>
              <div id="tips" className="space-y-3">
                {[
                  ['01', 'Lead with your point of view', 'A good profile says what you notice and how you work — not only what you have done.'],
                  ['02', 'Give the reader somewhere to look', 'Short sections, generous margins and specific outcomes make the story easier to follow.'],
                  ['03', 'Keep one version close', 'Save a plain-text copy too. It is useful for applications, forms and recruiter portals.'],
                ].map(([number, title, body]) => (
                  <div data-testid={`tip-${number}`} key={number} className="rounded-2xl border border-border bg-card p-4 transition-transform hover:-translate-y-1">
                    <div className="flex gap-3"><span className="font-mono text-[10px] text-[hsl(var(--primary))]">{number}</span><div><h3 className="text-xs font-bold">{title}</h3><p className="mt-2 text-[11px] leading-relaxed text-muted-foreground">{body}</p></div></div>
                  </div>
                ))}
              </div>
              <button data-testid="button-print-sidebar" onClick={() => window.print()} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[hsl(var(--primary)/.35)] py-3 text-xs font-semibold text-[hsl(var(--primary))] transition-colors hover:bg-[hsl(var(--secondary))]"><Printer size={14} /> Print-ready preview</button>
            </div>
          </aside>
        </div>

        <footer className="no-print mx-auto flex max-w-[1320px] items-center justify-between border-t border-border/70 px-4 py-7 text-[11px] text-muted-foreground sm:px-8 lg:px-12">
          <span className="flex items-center gap-2"><Sparkles size={13} className="text-[hsl(var(--primary))]" /> A calm place to start.</span>
          <span className="flex items-center gap-1">Built for better first drafts <ArrowUpRight size={12} /></span>
        </footer>
      </main>
    </div>
  );
}

export default App;
