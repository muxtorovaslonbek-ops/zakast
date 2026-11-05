import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  ArrowLeft,
  Award,
  Sparkles,
  CheckCircle2,
  BookOpen,
  Users,
  Calendar,
  ShieldCheck,
  GraduationCap,
  Download,
  Printer,
  ChevronRight,
  ExternalLink,
  Target,
  FileText,
  Clock,
  QrCode,
  Flame,
} from "lucide-react";
import logo from "@/assets/logo.png";
import { languagesData } from "@/data/languages";
import { clubsLearningData } from "@/data/clubsLearning";

export const Route = createFileRoute("/sertifikatlar")({
  head: () => ({
    meta: [
      { title: "Sertifikatlar — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content:
          "9 ta xorijiy til va 4 ta to‘garak bo‘yicha eng yaxshi o‘zlashtirgan o‘quvchilar Navoiy shahar 8-maktab ma’muriyati tomonidan rasmiy sertifikatlar bilan taqdirlanadi.",
      },
    ],
  }),
  component: SertifikatlarPage,
});

interface DirectionItem {
  id: string;
  type: "til" | "togarak";
  title: string;
  category: string;
  badge: string;
  minScore: string;
  projectRequirement: string;
  link: string;
  iconBg: string;
}

const directionsList: DirectionItem[] = [
  // 9 Foreign Languages
  {
    id: "ingliz",
    type: "til",
    title: "Ingliz tili (English)",
    category: "Xorijiy Til",
    badge: "bg-indigo-100 text-indigo-700 border-indigo-200",
    minScore: "85%+",
    projectRequirement: "Barcha lug‘atlarni o‘rganish, jonli dialog va CEFR A1-A2 test sinovi",
    link: "/tillar/ingliz",
    iconBg: "bg-indigo-600",
  },
  {
    id: "rus",
    type: "til",
    title: "Rus tili (Русский язык)",
    category: "Xorijiy Til",
    badge: "bg-sky-100 text-sky-700 border-sky-200",
    minScore: "85%+",
    projectRequirement: "Grammatika, ravon talaffuz va matn tahlili bo‘yicha yakuniy diktant",
    link: "/tillar/rus",
    iconBg: "bg-sky-600",
  },
  {
    id: "koreys",
    type: "til",
    title: "Koreys tili (한국어)",
    category: "Xorijiy Til",
    badge: "bg-cyan-100 text-cyan-700 border-cyan-200",
    minScore: "85%+",
    projectRequirement: "Hangul alifbosi, boshlang‘ich TOPIK 1 leksikasi va tanishtiruv monologi",
    link: "/tillar/koreys",
    iconBg: "bg-cyan-600",
  },
  {
    id: "nemis",
    type: "til",
    title: "Nemis tili (Deutsch)",
    category: "Xorijiy Til",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    minScore: "85%+",
    projectRequirement:
      "Goethe A1 mezonlaridagi artikllar, kundalik so‘zlashuv va tinglab tushunish",
    link: "/tillar/nemis",
    iconBg: "bg-orange-600",
  },
  {
    id: "turk",
    type: "til",
    title: "Turk tili (Türkçe)",
    category: "Xorijiy Til",
    badge: "bg-red-100 text-red-700 border-red-200",
    minScore: "85%+",
    projectRequirement: "Uyg‘unlik qoidalari, fe’l zamonlari va TÖMER A1 talablari",
    link: "/tillar/turk",
    iconBg: "bg-red-600",
  },
  {
    id: "fransuz",
    type: "til",
    title: "Fransuz tili (Français)",
    category: "Xorijiy Til",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    minScore: "85%+",
    projectRequirement: "DELF Prim/A1 talablari, fonetika va qisqa insho yozish",
    link: "/tillar/fransuz",
    iconBg: "bg-blue-600",
  },
  {
    id: "arab",
    type: "til",
    title: "Arab tili (العربية)",
    category: "Xorijiy Til",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    minScore: "85%+",
    projectRequirement: "Arab harflari, maxraj qoidalari va boshlang‘ich dialog amaliyoti",
    link: "/tillar/arab",
    iconBg: "bg-emerald-600",
  },
  {
    id: "xitoy",
    type: "til",
    title: "Xitoy tili (中文)",
    category: "Xorijiy Til",
    badge: "bg-rose-100 text-rose-700 border-rose-200",
    minScore: "85%+",
    projectRequirement: "Pinyin ohanglari, 150 ta asosiy iyeroglif (HSK 1) va hisoblash",
    link: "/tillar/xitoy",
    iconBg: "bg-rose-600",
  },
  {
    id: "yapon",
    type: "til",
    title: "Yapon tili (日本語)",
    category: "Xorijiy Til",
    badge: "bg-slate-100 text-slate-700 border-slate-200",
    minScore: "85%+",
    projectRequirement: "Xiragana, Katakana alifbolari va JLPT N5 boshlang‘ich tushunchalari",
    link: "/tillar/yapon",
    iconBg: "bg-slate-700",
  },

  // 4 Clubs
  {
    id: "robototexnika",
    type: "togarak",
    title: "Robototexnika va Mikrokontrollerlar",
    category: "Amaliy To‘garak",
    badge: "bg-blue-100 text-blue-700 border-blue-200",
    minScore: "85%+",
    projectRequirement: "To‘siqlardan qochuvchi robot yoki avtomatlashtirilgan aqlli xona maketi",
    link: "/togaraklar/robototexnika",
    iconBg: "bg-blue-600",
  },
  {
    id: "it-club",
    type: "togarak",
    title: "IT Club — Dasturlash va Web",
    category: "Amaliy To‘garak",
    badge: "bg-cyan-100 text-cyan-700 border-cyan-200",
    minScore: "85%+",
    projectRequirement: "Mustaqil web-sayt, portfolio yoki JavaScript/Python interaktiv dasturi",
    link: "/togaraklar/it-club",
    iconBg: "bg-cyan-600",
  },
  {
    id: "matematika",
    type: "togarak",
    title: "Olimpiada Matematikasi va Mantiq",
    category: "Amaliy To‘garak",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    minScore: "85%+",
    projectRequirement: "Nostandart mantiqiy masalalar to‘plamini yechish va Kenguru sinovi",
    link: "/togaraklar/matematika",
    iconBg: "bg-emerald-600",
  },
  {
    id: "sport",
    type: "togarak",
    title: "Sport va Sog‘lom Turmush",
    category: "Amaliy To‘garak",
    badge: "bg-orange-100 text-orange-700 border-orange-200",
    minScore: "85%+",
    projectRequirement:
      "Shaxmat partiyasi tahlili va 14 kunlik sog‘lom turmush normativi topshirish",
    link: "/togaraklar/sport",
    iconBg: "bg-orange-600",
  },
];

export function SertifikatlarPage() {
  const [filterType, setFilterType] = useState<"all" | "til" | "togarak">("all");
  const [studentName, setStudentName] = useState("Azizbek Karimov");
  const [studentGrade, setStudentGrade] = useState("7-'A' sinf");
  const [selectedDirection, setSelectedDirection] = useState<string>("ingliz");
  const certificateRef = useRef<HTMLDivElement>(null);

  const filteredDirections = directionsList.filter((item) => {
    if (filterType === "all") return true;
    return item.type === filterType;
  });

  const activeDirection =
    directionsList.find((d) => d.id === selectedDirection) ?? directionsList[0]!;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-app font-sans text-ink pb-20">
      {/* Top Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md px-4 sm:px-8 py-3.5 print:hidden">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xs transition hover:bg-accent cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Bosh sahifa</span>
            </Link>

            <div className="flex items-center gap-2 pl-2 border-l border-border">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-8 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
              />
              <div className="hidden sm:block">
                <span className="font-bold text-sm tracking-tight">Navoiy shahar 8-maktab</span>
                <span className="text-[11px] block text-muted-foreground">
                  Rasmiy Sertifikatlash Markazi
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/tillar"
              className="hidden md:flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xs hover:bg-accent transition cursor-pointer"
            >
              <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
              <span>9 ta Til</span>
            </Link>
            <Link
              to="/togaraklar"
              className="hidden md:flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-xs hover:bg-accent transition cursor-pointer"
            >
              <Users className="h-3.5 w-3.5 text-orange-500" />
              <span>To‘garaklar</span>
            </Link>
            <Link
              to="/ai-ustoz"
              className="flex items-center gap-1.5 rounded-xl bg-brand px-3.5 py-2 text-xs font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>AI Ustoz</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-8 pt-6 space-y-8">
        {/* Official School Announcement Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-amber-200 dark:border-amber-900/40 bg-gradient-to-br from-amber-500/10 via-card to-background p-6 sm:p-10 shadow-lg print:hidden">
          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 dark:border-amber-800 bg-amber-100/90 dark:bg-amber-950/80 px-3.5 py-1 text-xs font-extrabold text-amber-800 dark:text-amber-300">
              <Award className="h-4 w-4" />
              <span>Navoiy shahar 8-maktab ma’muriyati rasmiy e’loni</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Iqtidorli O‘quvchilarni Maktab Ma’muriyati Sertifikati bilan Taqdirlash
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Platformadagi <span className="font-bold text-foreground">9 ta Xorijiy Til</span> va{" "}
              <span className="font-bold text-foreground">4 ta Amaliy To‘garak</span> yo‘nalishlari
              bo‘yicha darslarni mukammal o‘zlashtirgan, amaliy loyihalarni namunali topshirgan
              hamda sinov testlarida yuqori natija ko‘rsatgan o‘quvchilar{" "}
              <span className="font-bold text-amber-600 dark:text-amber-400">
                Navoiy shahar 8-maktab ma’muriyati
              </span>{" "}
              tomonidan rasmiy muhrli va QR-kodli sertifikatlar hamda maxsus esdalik sovg‘alari
              bilan tantanali taqdirlanadi!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="rounded-2xl border border-border bg-card/80 p-3.5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-100 text-indigo-700">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">9 ta Xorijiy Til</div>
                  <div className="text-[11px] text-muted-foreground">A1-A2 & CEFR standarti</div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/80 p-3.5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">4 ta To‘garak</div>
                  <div className="text-[11px] text-muted-foreground">
                    Muhandislik, IT, Fan, Sport
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card/80 p-3.5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs font-bold">Rasmiy Tasdiq</div>
                  <div className="text-[11px] text-muted-foreground">
                    Maktab muhri & direktori imzosi
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Preparation Roadmap (How to get the certificate) */}
        <section className="space-y-4 print:hidden">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600">
                <Target className="h-4 w-4" />
                <span>Bosqichma-bosqich tayyorgarlik</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Sertifikatni Qanday Olish Mumkin?
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              O‘quvchi sertifikatga ega bo‘lishi uchun quyidagi 5 ta bosqichni ketma-ket
              muvaffaqiyatli yakunlashi talab etiladi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Step 1 */}
            <div className="rounded-3xl border border-border bg-card p-5 space-y-3 relative flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-600 text-white font-extrabold text-xs">
                    01
                  </span>
                  <BookOpen className="h-4 w-4 text-indigo-500" />
                </div>
                <h3 className="text-sm font-bold">Darslarni To‘liq O‘rganish</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Platformada tanlagan tilingiz yoki to‘garagingizdagi barcha interaktiv darslarni
                  boshidan oxirigacha ko‘rib chiqing va o‘zlashtiring.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-indigo-600">100% mavzular</div>
            </div>

            {/* Step 2 */}
            <div className="rounded-3xl border border-border bg-card p-5 space-y-3 relative flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-600 text-white font-extrabold text-xs">
                    02
                  </span>
                  <FileText className="h-4 w-4 text-cyan-500" />
                </div>
                <h3 className="text-sm font-bold">Amaliy Ish & Loyiha</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Har bir yo‘nalish bo‘yicha kamida 1 ta mustaqil amaliy loyihani (masalan, dastur
                  kodi, robot maketi, insho yoki hisobot) bajaring.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-cyan-600">Amaliy topshiriq</div>
            </div>

            {/* Step 3 */}
            <div className="rounded-3xl border border-border bg-card p-5 space-y-3 relative flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-600 text-white font-extrabold text-xs">
                    03
                  </span>
                  <Flame className="h-4 w-4 text-emerald-500" />
                </div>
                <h3 className="text-sm font-bold">85%+ Sinov Testi</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Yo‘nalish viktorinasi va nazorat testlaridan kamida 85% to‘g‘ri javob to‘plang.
                  Xatolarni AI Ustoz yordamida tahlil qiling.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-emerald-600">Minimal 85 ball</div>
            </div>

            {/* Step 4 */}
            <div className="rounded-3xl border border-border bg-card p-5 space-y-3 relative flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-600 text-white font-extrabold text-xs">
                    04
                  </span>
                  <GraduationCap className="h-4 w-4 text-amber-500" />
                </div>
                <h3 className="text-sm font-bold">Maktabda Himoya</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Navoiy shahar 8-maktab fan o‘qituvchisi va to‘garak rahbariga o‘z bilimingiz va
                  tayyorlagan ishingizni taqdim eting.
                </p>
              </div>
              <div className="text-[11px] font-semibold text-amber-600">Ustoz tavsiyanomasi</div>
            </div>

            {/* Step 5 */}
            <div className="rounded-3xl border border-amber-300 dark:border-amber-800 bg-amber-500/10 p-5 space-y-3 relative flex flex-col justify-between shadow-xs">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-extrabold text-xs">
                    05
                  </span>
                  <Award className="h-4 w-4 text-amber-600" />
                </div>
                <h3 className="text-sm font-bold text-amber-900 dark:text-amber-200">
                  Tantanali Taqdirlash
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Maktab ma’muriyati tomonidan rasmiy ro‘yxatga olingan, maxsus seriya raqamli
                  sertifikat bilan taqdirlanasiz!
                </p>
              </div>
              <div className="text-[11px] font-bold text-amber-600">Maktab Faxriy Sertifikati</div>
            </div>
          </div>
        </section>

        {/* Interactive Certificate Previewer / Simulator */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4 print:hidden">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Interaktiv Prevyu</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Sertifikat Namunasi va Uni Ko‘rish
              </h2>
              <p className="text-xs text-muted-foreground">
                Ism-familiyangiz va yo‘nalishni tanlang hamda rasmiy sertifikat qanday ko‘rinishda
                bo‘lishini jonli tarzda tomosha qiling!
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 rounded-xl bg-brand px-4 py-2 text-xs font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer"
              >
                <Printer className="h-3.5 w-3.5" />
                <span>Namuna sifatida chop etish / PDF</span>
              </button>
            </div>
          </div>

          {/* Form Inputs for Simulator */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 print:hidden">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                O‘quvchining Ism va Familiyasi:
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Masalan: Sardor Aliyev"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Sinfi:
              </label>
              <input
                type="text"
                value={studentGrade}
                onChange={(e) => setStudentGrade(e.target.value)}
                placeholder="Masalan: 8-'B' sinf"
                className="w-full rounded-xl border border-border bg-background px-3.5 py-2 text-xs font-semibold outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
              />
            </div>

            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Muvaffaqiyatli topshirilgan yo‘nalish:
              </label>
              <select
                value={selectedDirection}
                onChange={(e) => setSelectedDirection(e.target.value)}
                className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-semibold outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition"
              >
                <optgroup label="9 ta Xorijiy Til">
                  {directionsList
                    .filter((d) => d.type === "til")
                    .map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.title}
                      </option>
                    ))}
                </optgroup>
                <optgroup label="4 ta Amaliy To‘garak">
                  {directionsList
                    .filter((d) => d.type === "togarak")
                    .map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.title}
                      </option>
                    ))}
                </optgroup>
              </select>
            </div>
          </div>

          {/* Actual Certificate Document Visual */}
          <div className="overflow-x-auto pb-4 flex justify-center">
            <div
              ref={certificateRef}
              className="relative w-[780px] min-h-[520px] bg-white text-slate-900 border-[10px] border-double border-amber-600/80 rounded-2xl p-8 sm:p-12 shadow-2xl flex flex-col justify-between"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(251, 191, 36, 0.05) 0%, transparent 70%)",
              }}
            >
              {/* Corner Ornaments */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-amber-600" />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-amber-600" />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-amber-600" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-amber-600" />

              {/* Certificate Top Header */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-3">
                  <img
                    src={logo}
                    alt="8-maktab"
                    className="h-14 w-14 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]"
                  />
                  <div>
                    <h3 className="text-xs font-bold tracking-widest uppercase text-slate-600">
                      O‘zbekiston Respublikasi Maktabgacha va Maktab Ta’limi Vazirligi
                    </h3>
                    <h2 className="text-sm font-extrabold tracking-wider uppercase text-amber-800">
                      Navoiy Shahar 8-Sonli Umumiy O‘rta Ta’lim Maktabi
                    </h2>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-amber-700 block">
                    RASMIY TAQDIRLASH HUJJATI
                  </span>
                  <h1 className="text-4xl font-serif font-black tracking-wide text-slate-900 mt-1 uppercase">
                    SERTIFIKAT
                  </h1>
                  <p className="text-[11px] text-slate-500 font-mono tracking-widest mt-0.5">
                    SERIYA: NM8-2026-{activeDirection.id.toUpperCase().slice(0, 3)}-089
                  </p>
                </div>
              </div>

              {/* Certificate Body */}
              <div className="text-center my-6 space-y-3">
                <p className="text-xs text-slate-600 italic">
                  Ushbu sertifikat Navoiy shahar 8-maktab ma’muriyati tomonidan munosib deb topildi:
                </p>

                <div className="py-2">
                  <div className="text-3xl font-extrabold text-indigo-950 border-b-2 border-amber-500/60 inline-block px-8 pb-1 tracking-tight">
                    {studentName || "O‘quvchining Ismi"}
                  </div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">
                    {studentGrade || "Maktab o‘quvchisi"}
                  </div>
                </div>

                <p className="text-xs text-slate-700 max-w-lg mx-auto leading-relaxed">
                  Navoiy shahar 8-maktabning ta’lim platformasida{" "}
                  <strong className="text-slate-900 font-bold underline decoration-amber-500">
                    "{activeDirection.title}"
                  </strong>{" "}
                  yo‘nalishi bo‘yicha belgilangan barcha o‘quv darslarini a’lo darajada
                  o‘zlashtirgani, amaliy loyihalar va sinov testlarida 85%+ yuqori natijaga
                  erishgani uchun berildi.
                </p>
              </div>

              {/* Certificate Signatures & Official Seals */}
              <div className="grid grid-cols-3 items-end pt-4 border-t border-slate-200 text-xs">
                {/* Director */}
                <div className="text-left space-y-1">
                  <div className="font-serif italic text-slate-700 text-sm">O. Sh. Qodirov</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Maktab Direktori
                  </div>
                  <div className="text-[9px] text-slate-400">Navoiy shahar 8-maktab</div>
                </div>

                {/* Stamp & Seal */}
                <div className="flex flex-col items-center justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-dashed border-red-700/80 bg-red-50 text-center text-red-800 rotate-[-8deg] shadow-inner">
                    <div className="text-[8px] font-black uppercase leading-tight">
                      ★ TASDIQLANDI ★<br />
                      8-MAKTAB
                      <br />
                      MA’MURIYATI
                    </div>
                  </div>
                </div>

                {/* QR Code & Teacher */}
                <div className="text-right space-y-1 flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <div className="p-1 border border-slate-300 rounded bg-white">
                      <QrCode className="h-8 w-8 text-slate-800" />
                    </div>
                    <div className="text-left">
                      <div className="text-[9px] font-mono text-slate-600">Tekshirish kodi:</div>
                      <div className="text-[9px] font-bold text-amber-700">VERIFIED-8-SCH</div>
                    </div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                    Fan va To‘garak Rahbari
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements and Criteria for All 13 Directions */}
        <section className="space-y-6 print:hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600">
                <GraduationCap className="h-4 w-4" />
                <span>Barcha 13 ta yo‘nalish mezonlari</span>
              </div>
              <h2 className="text-2xl font-extrabold tracking-tight">
                Yo‘nalishlar va Sertifikat Talablari
              </h2>
              <p className="text-xs text-muted-foreground">
                Har bir til va to‘garak bo‘yicha kerakli ballar, amaliy ish mezonlari va
                to‘g‘ridan-to‘g‘ri o‘quv darslariga o‘tish.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-card p-1">
              <button
                onClick={() => setFilterType("all")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  filterType === "all"
                    ? "bg-brand text-white shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Barchasi (13)
              </button>
              <button
                onClick={() => setFilterType("til")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  filterType === "til"
                    ? "bg-indigo-600 text-white shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                9 ta Til
              </button>
              <button
                onClick={() => setFilterType("togarak")}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition cursor-pointer ${
                  filterType === "togarak"
                    ? "bg-orange-600 text-white shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                4 ta To‘garak
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredDirections.map((item) => (
              <div
                key={item.id}
                className="rounded-3xl border border-border bg-card p-5 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition duration-200"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-white font-extrabold text-sm ${item.iconBg}`}
                      >
                        {item.type === "til" ? "TIL" : "TO‘G"}
                      </span>
                      <div>
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] font-bold border ${item.badge}`}
                        >
                          {item.category}
                        </span>
                        <h4 className="text-base font-extrabold mt-0.5">{item.title}</h4>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1 text-xs">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-background border border-border/60">
                      <span className="text-muted-foreground">Minimal test bali:</span>
                      <span className="font-extrabold text-emerald-600">{item.minScore}</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-background border border-border/60 space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                        Amaliy talab & loyiha:
                      </span>
                      <p className="text-[11px] text-foreground/90 leading-tight">
                        {item.projectRequirement}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <Link
                    to={item.link}
                    className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-primary text-primary-foreground py-2 px-3 text-xs font-bold transition hover:opacity-90 cursor-pointer"
                  >
                    <span>Darslarga o‘tish</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </Link>

                  <button
                    onClick={() => {
                      setSelectedDirection(item.id);
                      window.scrollTo({ top: 750, behavior: "smooth" });
                    }}
                    className="flex items-center justify-center rounded-xl border border-border bg-background hover:bg-accent p-2 text-xs font-bold transition cursor-pointer"
                    title="Prevyuni ko‘rish"
                  >
                    <Award className="h-4 w-4 text-amber-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* AI Ustoz Preparation Advice & FAQ Banner */}
        <section className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6 print:hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand">
                <Sparkles className="h-4 w-4" />
                <span>Sertifikat imtihoniga tayyorgarlikda AI Yordamchi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
                Tayyorlanishda qiynalayapsizmi? AI Ustoz bilan shug‘ullaning!
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Har qanday xorijiy til yoki to‘garak yo‘nalishi bo‘yicha AI Ustoz bilan test
                savollarini yeching, lug‘at boyligingizni tekshiring, kodlaringizni tahlil qiling va
                85%+ natijaga erishish uchun bepul repetitor sifatida foydalaning.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/ai-ustoz"
                className="flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-sm font-bold text-white shadow-soft transition hover:scale-105 cursor-pointer"
              >
                <Sparkles className="h-4 w-4" />
                <span>AI Ustoz bilan tayyorlanish</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
