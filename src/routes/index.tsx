import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Search,
  Home,
  Globe,
  Bot,
  Users,
  Award,
  BookOpen,
  Settings,
  ChevronRight,
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
import { Intro } from "@/components/Intro";
import { BgSettings } from "@/components/BgSettings";
import { MobileHome } from "@/components/MobileHome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bosh sahifa — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "9 ta xorijiy til, AI ustoz, to‘garaklar va kutubxona — Navoiy shahar 8-maktab platformasi.",
      },
      { property: "og:title", content: "Navoiy shahar 8-maktab" },
      {
        property: "og:description",
        content: "Tillar, AI suhbat, to‘garaklar va kutubxona bir joyda.",
      },
    ],
  }),
  component: Index,
});

const nav = [
  { icon: Home, label: "Bosh sahifa", path: "/" },
  { icon: Globe, label: "Tillar", path: "/tillar" },
  { icon: Bot, label: "AI Ustoz", path: "/ai-ustoz" },
  { icon: Users, label: "To‘garaklar", path: "/togaraklar" },
  { icon: Award, label: "Sertifikatlar", path: "/sertifikatlar" },
  { icon: BookOpen, label: "Kutubxona", path: "/kutubxona" },
  { icon: Settings, label: "Sozlamalar" },
];

const langs = [
  { id: "ingliz", name: "Ingliz tili", code: "gb", bg: "bg-indigo-100/70" },
  { id: "rus", name: "Rus tili", code: "ru", bg: "bg-sky-100/70" },
  { id: "koreys", name: "Koreys tili", code: "kr", bg: "bg-cyan-100/70" },
  { id: "nemis", name: "Nemis tili", code: "de", bg: "bg-orange-100/70" },
  { id: "turk", name: "Turk tili", code: "tr", bg: "bg-indigo-100/70" },
  { id: "fransuz", name: "Fransuz tili", code: "fr", bg: "bg-blue-100/70" },
  { id: "arab", name: "Arab tili", code: "sa", bg: "bg-emerald-100/70" },
  { id: "xitoy", name: "Xitoy tili", code: "cn", bg: "bg-rose-100/70" },
  { id: "yapon", name: "Yapon tili", code: "jp", bg: "bg-slate-100/70" },
];

const clubs = [
  { id: "robototexnika", icon: Cpu, label: "Robototexnika", c: "text-blue-600" },
  { id: "it-club", icon: Monitor, label: "IT Club", c: "text-cyan-600" },
  { id: "matematika", icon: Calculator, label: "Matematika", c: "text-emerald-600" },
  { id: "sport", icon: Dumbbell, label: "Sport", c: "text-orange-500" },
];

function Index() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [intro, setIntro] = useState(false);
  const [settings, setSettings] = useState(false);
  useEffect(() => {
    const f = () => setZoom(Math.min(window.innerWidth / 1280, 1.5));
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);
  return (
    <>
      {intro && <Intro onClose={() => setIntro(false)} />}
      {settings && <BgSettings onClose={() => setSettings(false)} />}
      <span className="bg-blob left-[30%] top-[10%] h-72 w-72 bg-brand" />
      <span className="bg-blob right-[5%] bottom-[5%] h-80 w-80 bg-brand-glow [animation-delay:-5s]" />
      {/* Telefon (< 768px) */}
      <div className="md:hidden">
        <MobileHome onOpenIntro={() => setIntro(true)} onOpenSettings={() => setSettings(true)} />
      </div>
      {/* Kompyuter (>= 768px) — avvalgidek */}
      <div className="hidden md:block">
      <div
        className="flex min-h-screen w-[1280px] bg-app font-sans text-ink"
        style={{ zoom, minHeight: `${100 / zoom}vh` }}
      >
        <aside className="sticky top-0 flex min-h-[720px]  w-[175px] overflow-hidden shrink-0 flex-col items-center bg-sidebar-grad px-2 py-6 text-primary-foreground rounded-r-2xl">
          <img
            src={logo}
            alt="Logo"
            width={816}
            height={816}
            className="h-20 w-20 animate-floaty drop-shadow-[0_0_18px_oklch(0.7_0.2_240/.6)]"
          />
          <p className="mt-3 text-center text-lg font-semibold leading-tight">
            Navoiy shahar
            <br />
            8-maktab
          </p>
          <nav className="mt-8 w-full space-y-2">
            {nav.map((n, i) => {
              if (n.path) {
                return (
                  <Link
                    key={n.label}
                    to={n.path}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition duration-300 hover:translate-x-1 cursor-pointer ${
                      active === i
                        ? "bg-brand shadow-soft font-semibold"
                        : "hover:bg-primary-foreground/10"
                    }`}
                  >
                    <n.icon className="h-5 w-5" />
                    {n.label}
                  </Link>
                );
              }
              return (
                <button
                  key={n.label}
                  onClick={() => {
                    setActive(i);
                    if (n.label === "Sozlamalar") setSettings(true);
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition duration-300 hover:translate-x-1 cursor-pointer ${
                    active === i
                      ? "bg-brand shadow-soft font-semibold"
                      : "hover:bg-primary-foreground/10"
                  }`}
                >
                  <n.icon className="h-5 w-5" />
                  {n.label}
                </button>
              );
            })}
          </nav>
          <button
            onClick={() => setIntro(true)}
            className="shine mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-3 py-2.5 text-sm font-bold shadow-soft animate-pulse-glow transition hover:scale-105 cursor-pointer"
            title="AI Darslar video tanishtiruvi"
          >
            <Play className="h-4 w-4 fill-white" />
            Intro video
          </button>
        </aside>

        <main className="relative z-10 min-w-0 flex-1 space-y-3 p-5">
          <div className="flex w-full max-w-[420px] animate-rise items-center gap-3 rounded-2xl glass-card transition focus-within:ring-2 focus-within:ring-brand px-4 py-2.5 shadow-soft">
            <Search className="h-5 w-5" />
            <input
              placeholder="Til, dars yoki mavzuni qidirish..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink/70"
            />
          </div>

          <section className="relative flex h-[200px] animate-rise items-center overflow-hidden rounded-2xl hero-anim px-8 text-primary-foreground shadow-soft">
            <div className="z-10">
              <h1 className="text-4xl font-extrabold">
                Salom, o‘quvchilar!{" "}
                <span className="inline-block animate-[floaty_1.5s_ease-in-out_infinite]">👋</span>
              </h1>
              <p className="mt-1">Yangi bilimlar sari bir qadam oldinda!</p>
              <div className="mt-4 flex items-center gap-4">
                <div
                  className="relative h-20 w-20 rounded-full p-1.5"
                  style={{
                    background: "conic-gradient(var(--brand-glow) 92%, oklch(1 0 0 / .2) 0)",
                  }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-navy-2 text-xl font-bold">
                    92<span className="text-xs">%</span>
                  </div>
                </div>
                <div className="w-64 rounded-xl bg-primary-foreground/10 backdrop-blur p-3">
                  <div className="flex justify-between text-sm">
                    <span>Umumiy o‘zlashtirish</span>
                    <span className="flex items-center text-emerald-300">
                      <TrendingUp className="h-4 w-4" />
                      +5%
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-primary-foreground/20">
                    <div className="h-full w-[80%] animate-grow rounded-full bg-progress" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-[40%] top-10 z-20 animate-floaty rounded-xl bg-background px-3 py-2 text-xs font-semibold text-ink shadow-soft">
              Bugun ingliz tilida
              <br />5 yangi so‘z o‘rganing!
            </div>
            <img
              src={teacher}
              alt="Ustoz"
              width={1024}
              height={1024}
              className="absolute bottom-0 left-[52%] h-[210px] w-auto animate-rise [animation-delay:.3s]"
            />
            <span className="absolute left-[58%] top-4 text-3xl font-bold opacity-80 animate-floaty">
              A
            </span>
            <span className="absolute left-[69%] top-8 text-3xl font-bold opacity-80 animate-floaty [animation-delay:1s]">
              한
            </span>
            <span className="absolute left-[69%] top-24 text-3xl font-bold opacity-80 animate-floaty [animation-delay:2s]">
              文
            </span>
            <div className="absolute right-4 z-10 h-[150px] w-[280px] rounded-2xl glass-card p-4 text-ink">
              <p className="flex items-center gap-2 text-sm">
                <Target className="h-5 w-5 text-red-500" />
                Kunlik maqsad
              </p>
              <p className="mt-3 text-2xl font-bold">5 ta dars</p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold">
                <div className="h-2 w-28 rounded-full bg-muted">
                  <div className="h-full w-[60%] animate-grow rounded-full bg-progress" />
                </div>
                3 / 5
              </div>
              <img
                src={gift}
                alt=""
                width={816}
                height={816}
                className="absolute bottom-3 right-2 h-20 w-20 animate-floaty"
              />
            </div>
          </section>

          <div className="grid grid-cols-[1fr_240px] gap-3">
            <section className="rounded-2xl glass-card p-4 animate-rise [animation-delay:.15s]">
              <div className="flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-xl font-extrabold">
                  <Globe className="h-6 w-6" />9 ta Xorijiy Til
                </h2>
                <Link
                  to="/tillar"
                  className="flex items-center gap-1 text-xs font-bold text-indigo-600 hover:text-indigo-800 transition cursor-pointer"
                >
                  Barcha tillar <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
              <div className="mt-3 grid grid-cols-5 gap-3">
                {langs.map((l, i) => (
                  <Link
                    key={l.code}
                    to="/tillar/$lang"
                    params={{ lang: l.id }}
                    className={`${l.bg} group shine flex h-[88px] animate-rise flex-col justify-between rounded-xl border border-background p-3 text-left transition duration-300 hover:-translate-y-1 hover:shadow-soft cursor-pointer`}
                    style={{ animationDelay: `${0.2 + i * 0.06}s` }}
                  >
                    <img
                      src={`https://flagcdn.com/w80/${l.code}.png`}
                      alt=""
                      className="h-7 w-10 rounded-sm object-cover shadow transition group-hover:scale-110"
                    />
                    <span className="flex items-center justify-between text-sm font-semibold">
                      {l.name}
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-background shadow-soft transition group-hover:translate-x-1 group-hover:bg-brand group-hover:text-primary-foreground">
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
            <section className="relative overflow-hidden rounded-2xl glass-card p-4 animate-rise [animation-delay:.15s]">
              <h2 className="flex items-center gap-2 text-xl font-extrabold">
                <Sparkles className="h-7 w-7 text-brand-glow" />
                AI Suhbat
              </h2>
              <p className="mt-3 text-sm font-semibold">
                Istalgan tilda jonli
                <br />
                suhbat qiling!
              </p>
              <img
                src={chat}
                alt=""
                loading="lazy"
                width={1024}
                height={1024}
                className="ml-auto h-32 w-32 animate-floaty"
              />
              <Link
                to="/ai-ustoz"
                className="mt-2 flex w-full items-center justify-center gap-2 shine animate-pulse-glow rounded-xl bg-brand py-2.5 font-semibold text-primary-foreground transition hover:scale-[1.02] cursor-pointer"
              >
                <Bot className="h-4 w-4" />
                Suhbatni boshlash
              </Link>
            </section>
          </div>

          <div className="grid grid-cols-[1fr_320px] gap-3">
            <section className="flex gap-3 rounded-2xl glass-card p-4 animate-rise [animation-delay:.15s]">
              <div className="flex-1">
                <h2 className="flex items-center gap-2 text-lg font-extrabold">
                  <Users className="h-6 w-6 text-orange-500" />
                  To‘garaklar
                </h2>
                <p className="ml-8 text-sm">Maktab to‘garaklariga yoziling!</p>
                <div className="mt-3 grid grid-cols-4 gap-2">
                  {clubs.map((c) => (
                    <Link
                      key={c.label}
                      to="/togaraklar/$club"
                      params={{ club: c.id }}
                      className="flex flex-col items-center gap-1 rounded-xl bg-background/60 py-2 text-[11px] font-semibold transition hover:-translate-y-1 hover:shadow-soft cursor-pointer text-ink hover:text-orange-600"
                    >
                      <c.icon className={`h-7 w-7 ${c.c}`} />
                      {c.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="relative w-[280px] shrink-0 overflow-hidden rounded-xl">
                <img
                  src={students}
                  alt="O‘quvchilar"
                  loading="lazy"
                  width={1088}
                  height={608}
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />
                <Link
                  to="/togaraklar"
                  className="absolute bottom-2 right-2 flex items-center gap-1 rounded-lg bg-background px-3 py-1.5 text-sm font-semibold shadow-soft hover:bg-accent transition cursor-pointer"
                >
                  Barchasi <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
            <section className="relative overflow-hidden rounded-2xl glass-card p-4 animate-rise [animation-delay:.15s]">
              <h2 className="flex items-center gap-2 font-extrabold">
                <Crown className="h-5 w-5 text-yellow-500" />
                Faol kutubxona
              </h2>
              <p className="mt-2 w-44 text-sm">Darsliklar, qo‘llanmalar va foydali materiallar</p>
              <Link
                to="/kutubxona"
                className="mt-3 flex w-fit items-center gap-2 rounded-lg bg-background px-4 py-1.5 text-sm font-semibold shadow-soft cursor-pointer"
              >
                O‘tish <ArrowRight className="h-4 w-4" />
              </Link>
              <img
                src={books}
                alt=""
                loading="lazy"
                width={1024}
                height={1024}
                className="absolute bottom-0 right-0 h-32 w-32 animate-floaty"
              />
            </section>
          </div>
        </main>
      </div>
      </div>
    </>
  );
}
