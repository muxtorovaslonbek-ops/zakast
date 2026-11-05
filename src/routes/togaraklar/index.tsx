import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  Users,
  Cpu,
  Monitor,
  Calculator,
  Dumbbell,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  HelpCircle,
} from "lucide-react";
import { clubsLearningData, type ClubLearningData } from "@/data/clubsLearning";
import logo from "@/assets/logo.png";
import students from "@/assets/students.jpg";

export const Route = createFileRoute("/togaraklar/")({
  head: () => ({
    meta: [
      { title: "To‘garaklar — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "Robototexnika, IT Club, Olimpiada Matematikasi va Sport to‘garaklari. Interaktiv darslar, amaliy loyihalar va testlar.",
      },
    ],
  }),
  component: TogaraklarIndex,
});

const clubIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  robototexnika: Cpu,
  "it-club": Monitor,
  matematika: Calculator,
  sport: Dumbbell,
};

const clubGradients: Record<string, { bg: string; border: string; glow: string; text: string }> = {
  robototexnika: {
    bg: "from-blue-500/10 via-blue-500/5 to-transparent",
    border: "border-blue-200 dark:border-blue-900/40",
    glow: "bg-blue-500/10 text-blue-600",
    text: "text-blue-600",
  },
  "it-club": {
    bg: "from-cyan-500/10 via-cyan-500/5 to-transparent",
    border: "border-cyan-200 dark:border-cyan-900/40",
    glow: "bg-cyan-500/10 text-cyan-600",
    text: "text-cyan-600",
  },
  matematika: {
    bg: "from-emerald-500/10 via-emerald-500/5 to-transparent",
    border: "border-emerald-200 dark:border-emerald-900/40",
    glow: "bg-emerald-500/10 text-emerald-600",
    text: "text-emerald-600",
  },
  sport: {
    bg: "from-orange-500/10 via-orange-500/5 to-transparent",
    border: "border-orange-200 dark:border-orange-900/40",
    glow: "bg-orange-500/10 text-orange-600",
    text: "text-orange-600",
  },
};

export function TogaraklarIndex() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const clubsList = Object.values(clubsLearningData);

  const filteredClubs = clubsList.filter((club) => {
    const matchesSearch =
      club.title.toLowerCase().includes(search.toLowerCase()) ||
      club.shortName.toLowerCase().includes(search.toLowerCase()) ||
      club.category.toLowerCase().includes(search.toLowerCase()) ||
      club.description.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;
    if (selectedCategory === "all") return true;
    return club.id === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-app font-sans text-ink pb-16">
      {/* Top Banner / Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md px-4 sm:px-8 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Bosh sahifa</span>
            </Link>

            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Logo"
                className="h-9 w-9 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
              <div className="hidden sm:block">
                <h1 className="text-sm font-bold tracking-tight">Navoiy shahar 8-maktab</h1>
                <p className="text-xs text-muted-foreground">Maktab To‘garaklari Markazi</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/tillar"
              className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
              <span>9 ta Xorijiy Til</span>
            </Link>
            <Link
              to="/sertifikatlar"
              className="hidden md:flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-sm transition hover:bg-accent cursor-pointer"
            >
              <Award className="h-3.5 w-3.5 text-amber-500" />
              <span>Sertifikatlar</span>
            </Link>
            <Link
              to="/ai-ustoz"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-3.5 py-2 text-xs font-bold text-white shadow-md transition hover:scale-105 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Ustoz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 space-y-8">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-indigo-900/10 via-card to-background p-6 sm:p-10 shadow-lg">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-100/80 px-3 py-1 text-xs font-bold text-orange-700">
                <Users className="h-3.5 w-3.5" />
                <span>Navoiy 8-maktab Amaliy To‘garaklari</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                To‘garaklar — Bilim, Amaliyot va Kelajak Kasblari!
              </h2>
              <p className="max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
                Robototexnika, IT Club, Olimpiada Matematikasi va Sport yo‘nalishlaridan birini
                tanlang. Har bir yo‘nalishda nazariy darslar, bosqichma-bosqich amaliy loyihalar va
                test sinovlari mavjud.
              </p>

              {/* Fast Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                  <div className="flex items-center gap-2 text-blue-600 text-xs font-semibold">
                    <BookOpen className="h-4 w-4" />
                    <span>Darslar</span>
                  </div>
                  <div className="mt-1 text-xl font-bold">53+ ta</div>
                  <div className="text-[11px] text-muted-foreground">Bosqichma-bosqich</div>
                </div>

                <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                  <div className="flex items-center gap-2 text-cyan-600 text-xs font-semibold">
                    <Layers className="h-4 w-4" />
                    <span>Loyihalar</span>
                  </div>
                  <div className="mt-1 text-xl font-bold">23 ta</div>
                  <div className="text-[11px] text-muted-foreground">Haqiqiy amaliyot</div>
                </div>

                <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-semibold">
                    <HelpCircle className="h-4 w-4" />
                    <span>Testlar</span>
                  </div>
                  <div className="mt-1 text-xl font-bold">70+ savol</div>
                  <div className="text-[11px] text-muted-foreground">Viktorina & tushuntirish</div>
                </div>

                <div className="rounded-2xl border border-border bg-background/60 p-3 shadow-xs">
                  <div className="flex items-center gap-2 text-orange-600 text-xs font-semibold">
                    <Clock className="h-4 w-4" />
                    <span>Hajmi</span>
                  </div>
                  <div className="mt-1 text-xl font-bold">140+ soat</div>
                  <div className="text-[11px] text-muted-foreground">Interaktiv dastur</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 relative flex justify-center">
              <div className="relative overflow-hidden rounded-2xl border border-border shadow-md max-w-sm">
                <img
                  src={students}
                  alt="Navoiy 8-maktab o‘quvchilari"
                  className="h-60 w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                  <p className="text-xs font-semibold text-orange-300">Bizning jamoa</p>
                  <p className="text-sm font-bold">
                    8-maktab iqtidorli yoshlari bilan birga o‘rganing!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-brand text-white shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              Barcha To‘garaklar (4)
            </button>
            <button
              onClick={() => setSelectedCategory("robototexnika")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedCategory === "robototexnika"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              Robototexnika
            </button>
            <button
              onClick={() => setSelectedCategory("it-club")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedCategory === "it-club"
                  ? "bg-cyan-600 text-white shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              IT Club
            </button>
            <button
              onClick={() => setSelectedCategory("matematika")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedCategory === "matematika"
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              Matematika
            </button>
            <button
              onClick={() => setSelectedCategory("sport")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                selectedCategory === "sport"
                  ? "bg-orange-600 text-white shadow-sm"
                  : "border border-border bg-card text-muted-foreground hover:bg-accent"
              }`}
            >
              Sport
            </button>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="To‘garak yoki mavzuni qidirish..."
              className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2 text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
            />
          </div>
        </div>

        {/* 4 Directions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredClubs.map((club) => {
            const Icon = clubIcons[club.id] ?? Users;
            const style = clubGradients[club.id] ?? clubGradients["robototexnika"]!;

            return (
              <div
                key={club.id}
                className={`group relative overflow-hidden rounded-3xl border ${style.border} bg-card bg-gradient-to-br ${style.bg} p-6 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between`}
              >
                <div className="space-y-4">
                  {/* Header info */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.glow} shadow-inner transition group-hover:scale-110`}
                      >
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <span className={`inline-block text-[11px] font-bold ${style.text}`}>
                          {club.category}
                        </span>
                        <h3 className="text-xl font-extrabold tracking-tight">{club.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {club.description}
                  </p>

                  {/* Quote / Highlight */}
                  <div className="rounded-xl border border-border/80 bg-background/60 p-3 text-xs italic text-foreground/80">
                    “{club.heroQuote}”
                  </div>

                  {/* Outcomes bullets */}
                  <div className="space-y-1.5 pt-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      O‘rganiladigan asosiy ko‘nikmalar:
                    </p>
                    <ul className="space-y-1 text-xs">
                      {club.overview.outcomes.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${style.text}`} />
                          <span className="line-clamp-1">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats Badges */}
                  <div className="grid grid-cols-4 gap-2 pt-2 border-t border-border/60">
                    <div className="text-center p-2 rounded-lg bg-background/50">
                      <div className="text-xs font-extrabold">{club.stats.lessons} ta</div>
                      <div className="text-[10px] text-muted-foreground">Dars</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-background/50">
                      <div className="text-xs font-extrabold">{club.stats.projects} ta</div>
                      <div className="text-[10px] text-muted-foreground">Loyiha</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-background/50">
                      <div className="text-xs font-extrabold">{club.stats.quizzes} ta</div>
                      <div className="text-[10px] text-muted-foreground">Test</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-background/50">
                      <div className="text-xs font-extrabold">{club.stats.hours}</div>
                      <div className="text-[10px] text-muted-foreground">Hajm</div>
                    </div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-6">
                  <Link
                    to="/togaraklar/$club"
                    params={{ club: club.id }}
                    className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 px-4 text-sm font-bold shadow-md transition duration-200 cursor-pointer ${
                      club.id === "robototexnika"
                        ? "bg-blue-600 hover:bg-blue-700 text-white"
                        : club.id === "it-club"
                          ? "bg-cyan-600 hover:bg-cyan-700 text-white"
                          : club.id === "matematika"
                            ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                            : "bg-orange-600 hover:bg-orange-700 text-white"
                    }`}
                  >
                    <span>{club.shortName} yo‘nalishiga kirish</span>
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Feature Banner */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h4 className="text-lg font-bold flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              To‘garaklar bo‘yicha savolingiz bormi?
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl">
              AI Ustoz orqali istalgan to‘garak mavzusida qo‘shimcha yordam oling, savollaringizni
              bering yoki yangi amaliy topshiriqlar yarating.
            </p>
          </div>
          <Link
            to="/ai-ustoz"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Ustozdan so‘rash</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
