import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  BookOpen,
  Layers,
  HelpCircle,
  BookMarked,
  CheckCircle2,
  Clock,
  Sparkles,
  RotateCcw,
  Copy,
  Check,
  Award,
  Users,
  Cpu,
  Monitor,
  Calculator,
  Dumbbell,
  Lightbulb,
} from "lucide-react";
import { clubsLearningData, type ClubLearningData, type ClubLesson } from "@/data/clubsLearning";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/togaraklar/$club")({
  head: ({ params }) => {
    const club = clubsLearningData[params.club];
    const title = club
      ? `${club.title} — Navoiy shahar 8-maktab`
      : "To‘garak — Navoiy shahar 8-maktab";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: club
            ? `${club.shortName} to‘garagi: interaktiv darslar, amaliy loyihalar va testlar.`
            : "Maktab to‘garaklari o‘quv platformasi",
        },
      ],
    };
  },
  component: ClubDetailPage,
});

const clubIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  robototexnika: Cpu,
  "it-club": Monitor,
  matematika: Calculator,
  sport: Dumbbell,
};

const clubThemes: Record<
  string,
  {
    primary: string;
    primaryBg: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    heroGradient: string;
  }
> = {
  robototexnika: {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    primaryBg: "bg-blue-600 text-white",
    border: "border-blue-200 dark:border-blue-900/40",
    badgeBg: "bg-blue-100 dark:bg-blue-950/60",
    badgeText: "text-blue-700 dark:text-blue-300",
    heroGradient: "from-blue-600/15 via-blue-500/5 to-transparent",
  },
  "it-club": {
    primary: "bg-cyan-600 hover:bg-cyan-700 text-white",
    primaryBg: "bg-cyan-600 text-white",
    border: "border-cyan-200 dark:border-cyan-900/40",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/60",
    badgeText: "text-cyan-700 dark:text-cyan-300",
    heroGradient: "from-cyan-600/15 via-cyan-500/5 to-transparent",
  },
  matematika: {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    primaryBg: "bg-emerald-600 text-white",
    border: "border-emerald-200 dark:border-emerald-900/40",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    heroGradient: "from-emerald-600/15 via-emerald-500/5 to-transparent",
  },
  sport: {
    primary: "bg-orange-600 hover:bg-orange-700 text-white",
    primaryBg: "bg-orange-600 text-white",
    border: "border-orange-200 dark:border-orange-900/40",
    badgeBg: "bg-orange-100 dark:bg-orange-950/60",
    badgeText: "text-orange-700 dark:text-orange-300",
    heroGradient: "from-orange-600/15 via-orange-500/5 to-transparent",
  },
};

export function ClubDetailPage() {
  const { club: clubParam } = Route.useParams();
  const club: ClubLearningData =
    clubsLearningData[clubParam] ?? clubsLearningData["robototexnika"]!;

  const [activeTab, setActiveTab] = useState<"lessons" | "projects" | "quiz" | "terms">("lessons");
  const [selectedLessonIdx, setSelectedLessonIdx] = useState(0);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [completedProjects, setCompletedProjects] = useState<Record<string, boolean>>({});
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [copiedCodeIdx, setCopiedCodeIdx] = useState<number | null>(null);
  const [termsSearch, setTermsSearch] = useState("");

  const theme = clubThemes[club.id] ?? clubThemes["robototexnika"]!;
  const Icon = clubIcons[club.id] ?? Users;

  const currentLesson: ClubLesson | undefined = club.lessons[selectedLessonIdx] ?? club.lessons[0];

  const toggleLessonComplete = (lessonId: string) => {
    setCompletedLessons((prev) => ({
      ...prev,
      [lessonId]: !prev[lessonId],
    }));
  };

  const toggleProjectComplete = (projectId: string) => {
    setCompletedProjects((prev) => ({
      ...prev,
      [projectId]: !prev[projectId],
    }));
  };

  const handleSelectAnswer = (questionId: string, optionIdx: number) => {
    setQuizAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx,
    }));
  };

  const resetQuiz = () => {
    setQuizAnswers({});
  };

  const handleCopyCode = (code: string, idx: number) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedCodeIdx(idx);
      setTimeout(() => setCopiedCodeIdx(null), 2000);
    }
  };

  const quizCorrectCount = club.quizzes.reduce((acc, q) => {
    return quizAnswers[q.id] === q.answer ? acc + 1 : acc;
  }, 0);

  const filteredTerms = club.terms.filter(
    (t) =>
      t.term.toLowerCase().includes(termsSearch.toLowerCase()) ||
      t.definition.toLowerCase().includes(termsSearch.toLowerCase()) ||
      t.example.toLowerCase().includes(termsSearch.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-app font-sans text-ink pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/togaraklar"
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xs transition hover:bg-accent cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>To‘garaklar</span>
            </Link>

            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
              <span className="hidden sm:inline-block font-bold text-sm tracking-tight">
                {club.shortName}
              </span>
            </div>
          </div>

          {/* Quick direction switchers */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {Object.values(clubsLearningData).map((c) => {
              const isCurrent = c.id === club.id;
              const CIcon = clubIcons[c.id] ?? Users;
              return (
                <Link
                  key={c.id}
                  to="/togaraklar/$club"
                  params={{ club: c.id }}
                  className={`flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-bold transition cursor-pointer ${
                    isCurrent
                      ? `${theme.badgeBg} ${theme.badgeText} ring-1 ring-inset ring-current`
                      : "text-muted-foreground hover:bg-card hover:text-foreground"
                  }`}
                >
                  <CIcon className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">{c.shortName}</span>
                </Link>
              );
            })}

            <Link
              to="/ai-ustoz"
              className="ml-2 hidden sm:flex items-center gap-1.5 rounded-xl bg-brand px-3 py-1.5 text-xs font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Ustoz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 pt-6 space-y-6">
        {/* Club Hero Banner */}
        <section
          className={`relative overflow-hidden rounded-3xl border ${theme.border} bg-card bg-gradient-to-br ${theme.heroGradient} p-6 sm:p-8 shadow-sm`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-extrabold ${theme.badgeBg} ${theme.badgeText}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {club.category}
                </span>
                <span className="rounded-full border border-border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
                  Auditoriya: {club.overview.targetAudience}
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{club.title}</h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
                {club.description}
              </p>

              <div className="rounded-xl border border-border/80 bg-background/60 p-3 text-xs italic text-foreground/80">
                “{club.heroQuote}”
              </div>

              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="font-semibold text-muted-foreground">Talab:</span>
                <span className="text-foreground">{club.overview.prerequisites}</span>
              </div>
            </div>

            {/* Quick Stats Box */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-border bg-card/90 backdrop-blur p-4 shadow-sm space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  To‘garak ko‘rsatkichlari
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{club.stats.lessons} ta</div>
                    <div className="text-[11px] text-muted-foreground">Interaktiv dars</div>
                  </div>
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{club.stats.projects} ta</div>
                    <div className="text-[11px] text-muted-foreground">Amaliy loyiha</div>
                  </div>
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{club.stats.quizzes} ta</div>
                    <div className="text-[11px] text-muted-foreground">Viktorina savoli</div>
                  </div>
                  <div className="rounded-xl bg-background p-2.5 border border-border/60">
                    <div className="text-lg font-extrabold">{club.stats.hours}</div>
                    <div className="text-[11px] text-muted-foreground">O‘quv soati</div>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span>O‘zlashtirish jarayoni</span>
                    <span className="font-bold">
                      {Object.keys(completedLessons).length} / {club.lessons.length} dars
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${theme.primaryBg}`}
                      style={{
                        width: `${
                          club.lessons.length > 0
                            ? (Object.keys(completedLessons).length / club.lessons.length) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="flex border-b border-border gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setActiveTab("lessons")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === "lessons"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4" />
            <span>Darslar ({club.lessons.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === "projects"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Amaliy Loyihalar ({club.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("quiz")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === "quiz"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <HelpCircle className="h-4 w-4" />
            <span>Test & Viktorina ({club.quizzes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("terms")}
            className={`flex items-center gap-2 border-b-2 px-4 py-2.5 text-xs sm:text-sm font-bold transition cursor-pointer whitespace-nowrap ${
              activeTab === "terms"
                ? `border-current ${theme.badgeText}`
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <BookMarked className="h-4 w-4" />
            <span>Terminlar ({club.terms.length})</span>
          </button>
        </div>

        {/* Tab 1: Lessons */}
        {activeTab === "lessons" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Lessons List (Left Column) */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Mavzular ro‘yxati
              </h3>
              <div className="space-y-2">
                {club.lessons.map((lesson, idx) => {
                  const isSelected = selectedLessonIdx === idx;
                  const isDone = completedLessons[lesson.id];

                  return (
                    <button
                      key={lesson.id}
                      onClick={() => setSelectedLessonIdx(idx)}
                      className={`w-full text-left rounded-2xl border p-4 transition-all duration-200 cursor-pointer flex items-start justify-between gap-3 ${
                        isSelected
                          ? `${theme.border} bg-card shadow-md ring-1 ring-current ${theme.badgeText}`
                          : "border-border bg-card/60 hover:bg-card hover:border-border/80"
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-muted-foreground">
                            {idx + 1}-dars
                          </span>
                          <span className="rounded-md bg-background px-2 py-0.5 text-[10px] font-bold text-muted-foreground">
                            {lesson.duration}
                          </span>
                        </div>
                        <h4 className="text-sm font-bold line-clamp-1">{lesson.title}</h4>
                        <p className="text-xs text-muted-foreground line-clamp-1">
                          {lesson.description}
                        </p>
                      </div>

                      <div className="pt-1">
                        {isDone ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                        ) : (
                          <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30 shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Lesson Content (Right Column) */}
            <div className="lg:col-span-8">
              {currentLesson ? (
                <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
                  {/* Lesson Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                        <span className="rounded-md bg-accent px-2 py-0.5">
                          {currentLesson.level}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3.5 w-3.5" />
                          {currentLesson.duration}
                        </span>
                      </div>
                      <h2 className="mt-2 text-xl sm:text-2xl font-extrabold tracking-tight">
                        {currentLesson.title}
                      </h2>
                    </div>

                    <button
                      onClick={() => toggleLessonComplete(currentLesson.id)}
                      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition cursor-pointer shrink-0 ${
                        completedLessons[currentLesson.id]
                          ? "bg-emerald-600 text-white"
                          : "border border-border bg-background hover:bg-accent text-foreground"
                      }`}
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      <span>
                        {completedLessons[currentLesson.id]
                          ? "O‘zlashtirildi ✓"
                          : "O‘zlashtirdim deb belgilash"}
                      </span>
                    </button>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {currentLesson.description}
                  </p>

                  {/* Lesson Topics */}
                  <div className="space-y-6">
                    {currentLesson.topics.map((topic, topicIdx) => (
                      <div
                        key={topicIdx}
                        className="rounded-2xl border border-border/80 bg-background/50 p-5 space-y-3"
                      >
                        <h4 className="text-base font-bold flex items-center gap-2">
                          <span className={`h-2 w-2 rounded-full ${theme.primaryBg}`} />
                          {topic.title}
                        </h4>

                        <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                          {topic.explanation}
                        </p>

                        {/* Code snippet if available */}
                        {topic.codeSnippet && (
                          <div className="relative rounded-xl bg-slate-950 p-4 font-mono text-xs text-slate-100 overflow-x-auto shadow-inner">
                            <button
                              onClick={() => handleCopyCode(topic.codeSnippet!, topicIdx)}
                              className="absolute top-3 right-3 flex items-center gap-1 rounded-lg bg-slate-800 px-2.5 py-1 text-[11px] text-slate-300 hover:bg-slate-700 transition cursor-pointer"
                            >
                              {copiedCodeIdx === topicIdx ? (
                                <>
                                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                                  <span>Nusxalandi</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="h-3.5 w-3.5" />
                                  <span>Nusxa olish</span>
                                </>
                              )}
                            </button>
                            <pre className="pr-16">{topic.codeSnippet}</pre>
                          </div>
                        )}

                        {/* Tips */}
                        {topic.tips && topic.tips.length > 0 && (
                          <div className="rounded-xl border border-amber-200/60 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30 p-3 space-y-1">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 dark:text-amber-400">
                              <Lightbulb className="h-3.5 w-3.5" />
                              <span>Foydali maslahat & eslatma:</span>
                            </div>
                            <ul className="space-y-1 text-xs text-foreground/80 list-disc list-inside">
                              {topic.tips.map((tip, tipI) => (
                                <li key={tipI}>{tip}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Navigation between lessons */}
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <button
                      disabled={selectedLessonIdx === 0}
                      onClick={() => setSelectedLessonIdx((prev) => Math.max(0, prev - 1))}
                      className="rounded-xl border border-border bg-card px-4 py-2 text-xs font-bold transition hover:bg-accent disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                    >
                      ← Oldingi dars
                    </button>

                    <button
                      disabled={selectedLessonIdx === club.lessons.length - 1}
                      onClick={() =>
                        setSelectedLessonIdx((prev) => Math.min(club.lessons.length - 1, prev + 1))
                      }
                      className={`rounded-xl px-4 py-2 text-xs font-bold transition disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${theme.primary}`}
                    >
                      Keyingi dars →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">Dars topilmadi</div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Practical Projects */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">Amaliy Loyihalar</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Har bir darsni mustahkamlash uchun mustaqil bajariladigan real loyihalar.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold">
                <Layers className="h-4 w-4 text-brand" />
                <span>
                  Bajarildi: {Object.keys(completedProjects).length} / {club.projects.length}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {club.projects.map((project, pIdx) => {
                const isProjectDone = completedProjects[project.id];

                return (
                  <div
                    key={project.id}
                    className={`rounded-3xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                      isProjectDone ? "ring-2 ring-emerald-500/40" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span
                            className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${theme.badgeBg} ${theme.badgeText}`}
                          >
                            {project.level}
                          </span>
                          <h4 className="mt-1.5 text-lg font-bold">{project.title}</h4>
                        </div>

                        <button
                          onClick={() => toggleProjectComplete(project.id)}
                          className={`flex h-8 w-8 items-center justify-center rounded-full transition cursor-pointer shrink-0 ${
                            isProjectDone
                              ? "bg-emerald-500 text-white"
                              : "border border-border bg-background hover:bg-accent text-muted-foreground"
                          }`}
                          title={isProjectDone ? "Bajarilgan" : "Bajarildi deb belgilash"}
                        >
                          <Check className="h-4 w-4" />
                        </button>
                      </div>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Requirements */}
                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          Kerakli vositalar & jihozlar:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.requirements.map((req, rIdx) => (
                            <span
                              key={rIdx}
                              className="rounded-lg bg-background border border-border/80 px-2.5 py-1 text-[11px] font-medium"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Steps */}
                      <div className="space-y-2 pt-2 border-t border-border/60">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                          Bajarish bosqichlari:
                        </span>
                        <ol className="space-y-1.5 text-xs text-foreground/90">
                          {project.steps.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <span
                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${theme.badgeBg} ${theme.badgeText}`}
                              >
                                {sIdx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Expected Result */}
                      <div className="rounded-xl border border-emerald-200/50 bg-emerald-50/40 dark:bg-emerald-950/20 dark:border-emerald-900/30 p-3 text-xs">
                        <span className="font-bold text-emerald-700 dark:text-emerald-400">
                          Kutilayotgan natija:{" "}
                        </span>
                        <span className="text-foreground/90">{project.expectedResult}</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-2">
                      <button
                        onClick={() => toggleProjectComplete(project.id)}
                        className={`w-full rounded-xl py-2.5 text-xs font-bold transition cursor-pointer flex items-center justify-center gap-2 ${
                          isProjectDone
                            ? "bg-emerald-600 text-white"
                            : "border border-border bg-background hover:bg-accent text-foreground"
                        }`}
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>
                          {isProjectDone
                            ? "Loyiha topshirildi ✓"
                            : "Loyihani yakunladim deb belgilash"}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 3: Quizzes */}
        {activeTab === "quiz" && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {club.shortName} Sinov Viktorinasi
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Mavzular bo‘yicha bilimlaringizni sinab ko‘ring va tezkor tushuntirishlarni
                  o‘qing.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold">
                  Natija:{" "}
                  <span className="text-emerald-600 font-extrabold">{quizCorrectCount}</span> /{" "}
                  {club.quizzes.length}
                </div>
                <button
                  onClick={resetQuiz}
                  className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-1.5 text-xs font-bold hover:bg-accent transition cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Qayta boshlash</span>
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
              {club.quizzes.map((quiz, qIdx) => {
                const userSelected = quizAnswers[quiz.id];
                const hasAnswered = userSelected !== undefined;
                const isCorrect = userSelected === quiz.answer;

                return (
                  <div
                    key={quiz.id}
                    className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${theme.primaryBg}`}
                      >
                        {qIdx + 1}
                      </span>
                      <h4 className="text-sm sm:text-base font-bold text-foreground">
                        {quiz.question}
                      </h4>
                    </div>

                    {/* Options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                      {quiz.options.map((opt, optIdx) => {
                        let btnStyle =
                          "border-border bg-background hover:bg-accent text-foreground";

                        if (hasAnswered) {
                          if (optIdx === quiz.answer) {
                            btnStyle =
                              "border-emerald-500 bg-emerald-500/10 text-emerald-700 font-bold dark:text-emerald-300";
                          } else if (userSelected === optIdx) {
                            btnStyle =
                              "border-red-500 bg-red-500/10 text-red-700 font-bold dark:text-red-300";
                          } else {
                            btnStyle = "opacity-50 border-border bg-background";
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectAnswer(quiz.id, optIdx)}
                            className={`rounded-2xl border p-3 text-left text-xs sm:text-sm transition-all duration-200 cursor-pointer flex items-center justify-between gap-2 ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {hasAnswered && optIdx === quiz.answer && (
                              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {hasAnswered && (
                      <div
                        className={`rounded-2xl p-3 text-xs leading-relaxed ${
                          isCorrect
                            ? "bg-emerald-50 text-emerald-800 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-900 dark:text-emerald-200"
                            : "bg-amber-50 text-amber-800 border border-amber-200 dark:bg-amber-950/30 dark:border-amber-900 dark:text-amber-200"
                        }`}
                      >
                        <span className="font-bold">
                          {isCorrect ? "To‘g‘ri javob! " : "Eslatma: "}
                        </span>
                        {quiz.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 4: Terminology */}
        {activeTab === "terms" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {club.shortName} Terminlar Lug‘ati
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Yo‘nalish bo‘yicha asosiy tushunchalar, ta’riflar va kundalik misollar.
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  value={termsSearch}
                  onChange={(e) => setTermsSearch(e.target.value)}
                  placeholder="Terminni qidirish..."
                  className="w-full rounded-xl border border-border bg-card px-4 py-2 text-xs outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTerms.map((term, tIdx) => (
                <div
                  key={tIdx}
                  className="rounded-2xl border border-border bg-card p-5 shadow-xs space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${theme.primaryBg}`} />
                      <h4 className="text-base font-extrabold">{term.term}</h4>
                    </div>
                    <p className="text-xs text-foreground/80 leading-relaxed">{term.definition}</p>
                  </div>

                  <div className="rounded-xl bg-background/80 border border-border/60 p-2.5 text-[11px] text-muted-foreground">
                    <span className="font-bold text-foreground">Misol: </span>
                    {term.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ask AI Ustoz CTA Card */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-bold">
              <Award className="h-5 w-5 text-amber-500" />
              <span>{club.shortName} bo‘yicha qo‘shimcha mashg‘ulot kerakmi?</span>
            </div>
            <p className="text-xs text-muted-foreground max-w-xl">
              AI Ustoz sizga yangi darslarni tushuntiradi, kod xatolarini tuzatadi, mantiqiy
              masalalar tuzib beradi va savollaringizga real vaqtda javob qaytaradi.
            </p>
          </div>

          <Link
            to="/ai-ustoz"
            className="shrink-0 flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>AI Ustoz bilan suhbatlashish</span>
          </Link>
        </section>
      </main>
    </div>
  );
}
