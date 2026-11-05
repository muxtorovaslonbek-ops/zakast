import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Globe,
  Search,
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Users,
  Star,
  Sparkles,
  GraduationCap,
  Award,
} from "lucide-react";
import { languagesData } from "@/data/languages";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/tillar/")({
  head: () => ({
    meta: [
      { title: "9 ta Xorijiy Til — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "Ingliz, Rus, Koreys, Nemis, Turk, Fransuz, Arab, Xitoy va Yapon tillarini alohida bosqichma-bosqich o‘rganish platformasi.",
      },
    ],
  }),
  component: TillarIndex,
});

export function TillarIndex() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const langsList = Object.values(languagesData);

  const filteredLangs = langsList.filter((lang) => {
    const matchesSearch =
      lang.name.toLowerCase().includes(search.toLowerCase()) ||
      lang.nativeName.toLowerCase().includes(search.toLowerCase()) ||
      lang.description.toLowerCase().includes(search.toLowerCase());

    if (!matchesSearch) return false;
    if (filter === "all") return true;
    if (filter === "east") return ["koreys", "xitoy", "yapon"].includes(lang.id);
    if (filter === "europe") return ["ingliz", "nemis", "fransuz", "rus"].includes(lang.id);
    if (filter === "turkic") return ["turk", "arab"].includes(lang.id);
    return true;
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
              <div>
                <h1 className="text-base sm:text-lg font-bold leading-tight flex items-center gap-2">
                  <Globe className="h-5 w-5 text-indigo-600" />9 ta Xorijiy Til Bo‘limi
                </h1>
                <p className="text-xs text-muted-foreground">
                  Navoiy shahar 8-maktab zamonaviy til ta’limi
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/sertifikatlar"
              className="hidden md:flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xs hover:bg-accent transition cursor-pointer"
            >
              <Award className="h-3.5 w-3.5 text-amber-500" />
              <span>Sertifikatlar</span>
            </Link>
            <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-muted-foreground">
              <span className="flex items-center gap-1.5 rounded-lg bg-indigo-50 px-3 py-1.5 text-indigo-700">
                <GraduationCap className="h-4 w-4" /> 9 ta til
              </span>
              <span className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700">
                <BookOpen className="h-4 w-4" /> 180+ darslar
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 pt-8 space-y-6">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-900 via-indigo-800 to-sky-900 p-6 sm:p-10 text-white shadow-xl">
          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-semibold tracking-wide text-indigo-200">
              <Sparkles className="h-3.5 w-3.5 text-indigo-300" />
              Kelajak tillari — bugun!
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-tight">
              O‘zingiz xohlagan tilni tanlang va mustaqil o‘rganing!
            </h2>
            <p className="mt-2 text-sm sm:text-base text-indigo-100/90 leading-relaxed">
              Har bir xorijiy til alifbodan tortib so‘zlashuv darajasigacha: interaktiv darslar,
              audio talaffuz, testlar va sun’iy intellekt ustoz bilan ta’minlangan.
            </p>
          </div>

          {/* Search and Category Filters */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Til nomini qidiring (masalan: Koreys, English, Nemis)..."
                className="w-full rounded-2xl bg-white text-slate-900 pl-10 pr-4 py-2.5 text-sm font-medium placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-indigo-400 shadow-md"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  filter === "all"
                    ? "bg-white text-indigo-900 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Barchasi (9)
              </button>
              <button
                onClick={() => setFilter("europe")}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  filter === "europe"
                    ? "bg-white text-indigo-900 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Yevropa tillari (4)
              </button>
              <button
                onClick={() => setFilter("east")}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  filter === "east"
                    ? "bg-white text-indigo-900 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Sharqiy Osiyo (3)
              </button>
              <button
                onClick={() => setFilter("turkic")}
                className={`rounded-2xl px-4 py-2 text-xs font-bold transition cursor-pointer ${
                  filter === "turkic"
                    ? "bg-white text-indigo-900 shadow-md"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                Turkiy & Yaqin Sharq (2)
              </button>
            </div>
          </div>
        </div>

        {/* 9 Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredLangs.map((lang) => (
            <Link
              key={lang.id}
              to="/tillar/$lang"
              params={{ lang: lang.id }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
            >
              <div>
                {/* Header row with Flag and Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://flagcdn.com/w80/${lang.code}.png`}
                      alt={lang.name}
                      className="h-10 w-14 rounded-lg object-cover shadow-sm border border-border transition-transform group-hover:scale-105"
                    />
                    <div>
                      <h3 className="text-xl font-extrabold text-foreground tracking-tight">
                        {lang.name}
                      </h3>
                      <p className="text-xs font-semibold text-muted-foreground">
                        {lang.nativeName}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200/50 px-2.5 py-1 text-xs font-bold">
                    {lang.level}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                  {lang.description}
                </p>

                {/* Stats indicators */}
                <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-muted/50 p-2.5 text-center text-xs">
                  <div>
                    <div className="font-bold text-foreground">{lang.stats.lessons} ta</div>
                    <div className="text-[11px] text-muted-foreground">Darslar</div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{lang.stats.words}+</div>
                    <div className="text-[11px] text-muted-foreground">Lug‘at</div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground flex items-center justify-center gap-1 text-amber-600">
                      <Star className="h-3 w-3 fill-amber-500" />
                      {lang.stats.rating}
                    </div>
                    <div className="text-[11px] text-muted-foreground">Baholash</div>
                  </div>
                </div>
              </div>

              {/* Action Button at bottom */}
              <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
                <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1.5">
                  <Users className="h-3.5 w-3.5" />
                  {lang.stats.learners} o‘quvchi
                </span>

                <span className="flex items-center gap-1 text-sm font-bold text-indigo-600 group-hover:text-indigo-700 transition">
                  O‘rganishni boshlash
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredLangs.length === 0 && (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center">
            <Globe className="mx-auto h-12 w-12 text-muted-foreground/60" />
            <h3 className="mt-3 text-lg font-bold">Hech narsa topilmadi</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Qidiruv so‘zini o‘zgartirib ko‘ring yoki barcha tillar bo‘limiga o‘ting.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setFilter("all");
              }}
              className="mt-4 rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow hover:bg-indigo-500"
            >
              Barcha 9 ta tilni ko‘rish
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
