import { Link } from "@tanstack/react-router";
import {
  Search,
  Home,
  Globe,
  Bot,
  Users,
  Award,
  BookOpen,
  Settings,
  ArrowRight,
  Target,
  TrendingUp,
  Sparkles,
  Crown,
  Cpu,
  Monitor,
  Calculator,
  Dumbbell,
  Play,
} from "lucide-react";
import teacher from "@/assets/teacher.png";
import students from "@/assets/students.jpg";
import books from "@/assets/books.png";
import chat from "@/assets/chat.png";
import gift from "@/assets/gift.png";
import logo from "@/assets/logo.png";

/**
 * Telefon (< 768px) uchun bosh sahifa.
 * Kompyuter varianti (index.tsx) ga tegmaydi — u alohida ishlaydi.
 */

const tabs = [
  { icon: Home, label: "Bosh", to: "/" },
  { icon: Globe, label: "Tillar", to: "/tillar" },
  { icon: Bot, label: "AI Ustoz", to: "/ai-ustoz" },
  { icon: Users, label: "To‘garak", to: "/togaraklar" },
  { icon: BookOpen, label: "Kitob", to: "/kutubxona" },
  { icon: Award, label: "Sertifikat", to: "/sertifikatlar" },
] as const;

const langs = [
  { id: "ingliz", name: "Ingliz", code: "gb", bg: "bg-indigo-100/70" },
  { id: "rus", name: "Rus", code: "ru", bg: "bg-sky-100/70" },
  { id: "koreys", name: "Koreys", code: "kr", bg: "bg-cyan-100/70" },
  { id: "nemis", name: "Nemis", code: "de", bg: "bg-orange-100/70" },
  { id: "turk", name: "Turk", code: "tr", bg: "bg-indigo-100/70" },
  { id: "fransuz", name: "Fransuz", code: "fr", bg: "bg-blue-100/70" },
  { id: "arab", name: "Arab", code: "sa", bg: "bg-emerald-100/70" },
  { id: "xitoy", name: "Xitoy", code: "cn", bg: "bg-rose-100/70" },
  { id: "yapon", name: "Yapon", code: "jp", bg: "bg-slate-100/70" },
];

const clubs = [
  { id: "robototexnika", icon: Cpu, label: "Robototexnika", c: "text-blue-600" },
  { id: "it-club", icon: Monitor, label: "IT Club", c: "text-cyan-600" },
  { id: "matematika", icon: Calculator, label: "Matematika", c: "text-emerald-600" },
  { id: "sport", icon: Dumbbell, label: "Sport", c: "text-orange-500" },
];

export function MobileHome({
  onOpenIntro,
  onOpenSettings,
}: {
  onOpenIntro: () => void;
  onOpenSettings: () => void;
}) {
  return (
    <div className="relative z-10 min-h-[100dvh] w-full max-w-full overflow-x-hidden bg-app font-sans text-ink">
      {/* Yuqori panel */}
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-border bg-background/85 px-4 pb-3 pt-[calc(env(safe-area-inset-top)+0.75rem)] backdrop-blur-md">
        <img src={logo} alt="Logo" width={816} height={816} className="h-10 w-10 shrink-0" />
        <p className="min-w-0 flex-1 text-sm font-extrabold leading-tight">
          Navoiy shahar
          <br />
          8-maktab
        </p>
        <button
          onClick={onOpenIntro}
          className="flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-brand px-3 text-xs font-bold text-primary-foreground shadow-soft active:scale-95"
          aria-label="Intro video"
        >
          <Play className="h-4 w-4 fill-white" />
          Intro
        </button>
        <button
          onClick={onOpenSettings}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background shadow-soft active:scale-95"
          aria-label="Sozlamalar"
        >
          <Settings className="h-5 w-5" />
        </button>
      </header>

      <main className="space-y-4 px-4 pb-[calc(env(safe-area-inset-bottom)+6rem)] pt-4">
        {/* Qidiruv */}
        <div className="flex w-full items-center gap-3 rounded-2xl glass-card px-4 py-3 shadow-soft focus-within:ring-2 focus-within:ring-brand">
          <Search className="h-5 w-5 shrink-0" />
          <input
            placeholder="Til, dars yoki mavzuni qidirish..."
            className="w-full min-w-0 bg-transparent text-base outline-none placeholder:text-ink/70"
          />
        </div>

        {/* Salomlashuv */}
        <section className="relative overflow-hidden rounded-2xl hero-anim p-5 text-primary-foreground shadow-soft">
          <div className="flex items-end justify-between gap-2">
            <div className="min-w-0 flex-1 pb-1">
              <h1 className="text-2xl font-extrabold leading-tight">
                Salom, o‘quvchilar!{" "}
                <span className="inline-block animate-[floaty_1.5s_ease-in-out_infinite]">👋</span>
              </h1>
              <p className="mt-1 text-sm">Yangi bilimlar sari bir qadam oldinda!</p>
            </div>
            <img
              src={teacher}
              alt="Ustoz"
              width={1024}
              height={1024}
              className="-mb-5 -mr-2 h-28 w-auto shrink-0"
            />
          </div>

          <div className="mt-4 flex items-center gap-3">
            <div
              className="relative h-16 w-16 shrink-0 rounded-full p-1.5"
              style={{
                background: "conic-gradient(var(--brand-glow) 92%, oklch(1 0 0 / .2) 0)",
              }}
            >
              <div className="flex h-full w-full items-center justify-center rounded-full bg-navy-2 text-lg font-bold">
                92<span className="text-[10px]">%</span>
              </div>
            </div>
            <div className="min-w-0 flex-1 rounded-xl bg-primary-foreground/10 p-3 backdrop-blur">
              <div className="flex justify-between gap-2 text-xs">
                <span className="truncate">Umumiy o‘zlashtirish</span>
                <span className="flex shrink-0 items-center text-emerald-300">
                  <TrendingUp className="h-4 w-4" />
                  +5%
                </span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-primary-foreground/20">
                <div className="h-full w-[80%] animate-grow rounded-full bg-progress" />
              </div>
            </div>
          </div>

          <div className="relative mt-3 overflow-hidden rounded-2xl glass-card p-4 text-ink">
            <p className="flex items-center gap-2 text-sm">
              <Target className="h-5 w-5 text-red-500" />
              Kunlik maqsad
            </p>
            <p className="mt-1 text-xl font-bold">5 ta dars</p>
            <div className="mt-2 flex items-center gap-2 text-xs font-semibold">
              <div className="h-2 w-24 rounded-full bg-muted">
                <div className="h-full w-[60%] animate-grow rounded-full bg-progress" />
              </div>
              3 / 5
            </div>
            <img
              src={gift}
              alt=""
              width={816}
              height={816}
              className="absolute bottom-1 right-2 h-16 w-16 animate-floaty"
            />
          </div>
        </section>

        {/* Tillar */}
        <section className="rounded-2xl glass-card p-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="flex items-center gap-2 text-lg font-extrabold">
              <Globe className="h-5 w-5" />9 ta Xorijiy Til
            </h2>
            <Link
              to="/tillar"
              className="flex shrink-0 items-center gap-1 text-xs font-bold text-indigo-600"
            >
              Barchasi <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2.5">
            {langs.map((l) => (
              <Link
                key={l.code}
                to="/tillar/$lang"
                params={{ lang: l.id }}
                className={`${l.bg} flex min-h-[84px] flex-col items-center justify-center gap-2 rounded-xl border border-background p-2 text-center text-xs font-semibold transition active:scale-95`}
              >
                <img
                  src={`https://flagcdn.com/w80/${l.code}.png`}
                  alt=""
                  loading="lazy"
                  className="h-7 w-10 rounded-sm object-cover shadow"
                />
                {l.name}
              </Link>
            ))}
          </div>
        </section>

        {/* AI suhbat */}
        <section className="relative overflow-hidden rounded-2xl glass-card p-4">
          <div className="flex items-center gap-3">
            <div className="min-w-0 flex-1">
              <h2 className="flex items-center gap-2 text-lg font-extrabold">
                <Sparkles className="h-6 w-6 shrink-0 text-brand-glow" />
                AI Suhbat
              </h2>
              <p className="mt-2 text-sm font-semibold">Istalgan tilda jonli suhbat qiling!</p>
            </div>
            <img
              src={chat}
              alt=""
              loading="lazy"
              width={1024}
              height={1024}
              className="h-24 w-24 shrink-0 animate-floaty"
            />
          </div>
          <Link
            to="/ai-ustoz"
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 font-semibold text-primary-foreground transition active:scale-[0.98]"
          >
            <Bot className="h-4 w-4" />
            Suhbatni boshlash
          </Link>
        </section>

        {/* To'garaklar */}
        <section className="rounded-2xl glass-card p-4">
          <h2 className="flex items-center gap-2 text-lg font-extrabold">
            <Users className="h-6 w-6 text-orange-500" />
            To‘garaklar
          </h2>
          <p className="text-sm">Maktab to‘garaklariga yoziling!</p>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {clubs.map((c) => (
              <Link
                key={c.label}
                to="/togaraklar/$club"
                params={{ club: c.id }}
                className="flex min-w-0 flex-col items-center gap-1 rounded-xl bg-background/60 px-1 py-2.5 text-center text-[10px] font-semibold transition active:scale-95"
              >
                <c.icon className={`h-7 w-7 ${c.c}`} />
                <span className="w-full truncate">{c.label}</span>
              </Link>
            ))}
          </div>
          <div className="relative mt-3 overflow-hidden rounded-xl">
            <img
              src={students}
              alt="O‘quvchilar"
              loading="lazy"
              width={1088}
              height={608}
              className="h-36 w-full object-cover"
            />
            <Link
              to="/togaraklar"
              className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-background px-3 py-1.5 text-sm font-semibold shadow-soft"
            >
              Barchasi <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Kutubxona */}
        <section className="relative overflow-hidden rounded-2xl glass-card p-4">
          <h2 className="flex items-center gap-2 font-extrabold">
            <Crown className="h-5 w-5 text-yellow-500" />
            Faol kutubxona
          </h2>
          <p className="mt-2 w-[60%] text-sm">Darsliklar, qo‘llanmalar va foydali materiallar</p>
          <Link
            to="/kutubxona"
            className="mt-3 flex w-fit items-center gap-2 rounded-lg bg-background px-4 py-2 text-sm font-semibold shadow-soft"
          >
            O‘tish <ArrowRight className="h-4 w-4" />
          </Link>
          <img
            src={books}
            alt=""
            loading="lazy"
            width={1024}
            height={1024}
            className="absolute bottom-0 right-0 h-28 w-28 animate-floaty"
          />
        </section>
      </main>

      {/* Pastki navigatsiya */}
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md">
        <ul className="grid grid-cols-6">
          {tabs.map((t, i) => (
            <li key={t.label} className="min-w-0">
              <Link
                to={t.to}
                className={`flex flex-col items-center gap-0.5 px-0.5 py-2 text-[10px] font-semibold ${
                  i === 0 ? "text-brand" : "text-ink/70"
                }`}
              >
                <t.icon className="h-5 w-5" />
                <span className="w-full truncate text-center">{t.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
