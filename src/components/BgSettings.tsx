import { useEffect, useState } from "react";
import { X, Check, Palette } from "lucide-react";

const STORAGE_KEY = "bg-theme";

type Bg = { id: string; name: string; page: string; accent: string };

export const bgPresets: Bg[] = [
  { id: "default", name: "Asosiy", page: "oklch(0.95 0.02 265)", accent: "oklch(0.93 0.04 260)" },
  { id: "sky", name: "Moviy", page: "#f0f9ff", accent: "#bae6fd" },
  { id: "green", name: "Yashil", page: "#f0fdf4", accent: "#bbf7d0" },
  { id: "pink", name: "Pushti", page: "#fdf2f8", accent: "#fbcfe8" },
  { id: "purple", name: "Binafsha", page: "#faf5ff", accent: "#e9d5ff" },
  { id: "orange", name: "To‘q sariq", page: "#fff7ed", accent: "#fed7aa" },
  { id: "yellow", name: "Sariq", page: "#fefce8", accent: "#fef08a" },
  { id: "gray", name: "Kulrang", page: "#f8fafc", accent: "#e2e8f0" },
];

function applyBg(bg: Pick<Bg, "page" | "accent">) {
  const s = document.documentElement.style;
  s.setProperty("--page", bg.page);
  s.setProperty("--page-accent", bg.accent);
}

function loadBg(): Bg | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Bg) : null;
  } catch {
    return null;
  }
}

/** Saqlangan rangni sahifa ochilganda qo'llaydi (__root.tsx da chaqiriladi) */
export function useSavedBg() {
  useEffect(() => {
    const saved = loadBg();
    if (saved) applyBg(saved);
  }, []);
}

export function BgSettings({ onClose }: { onClose: () => void }) {
  const [current, setCurrent] = useState<string>("default");
  const [custom, setCustom] = useState("#dbeafe");

  useEffect(() => {
    const saved = loadBg();
    if (saved) setCurrent(saved.id);
  }, []);

  const choose = (bg: Bg) => {
    applyBg(bg);
    setCurrent(bg.id);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(bg));
    } catch {
      /* localStorage ishlamasa ham rang o'zgaradi */
    }
  };

  const chooseCustom = (hex: string) => {
    setCustom(hex);
    choose({
      id: "custom",
      name: "O‘zim tanlagan",
      page: hex,
      accent: `color-mix(in oklch, ${hex} 80%, white)`,
    });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-6 text-ink shadow-soft"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <h2 className="flex items-center gap-2 text-xl font-extrabold">
            <Palette className="h-5 w-5 text-brand" />
            Orqa fon rangi
          </h2>
          <button
            onClick={onClose}
            className="rounded-full p-1 transition hover:bg-black/5 cursor-pointer"
            aria-label="Yopish"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-4 gap-3">
          {bgPresets.map((p) => (
            <button
              key={p.id}
              onClick={() => choose(p)}
              className="group flex flex-col items-center gap-1.5 cursor-pointer"
            >
              <span
                className={`relative flex h-14 w-14 items-center justify-center rounded-xl border-2 transition group-hover:scale-105 ${
                  current === p.id ? "border-brand" : "border-transparent"
                }`}
                style={{ background: `radial-gradient(circle at 70% 0%, ${p.accent}, ${p.page} 70%)` }}
              >
                {current === p.id && <Check className="h-5 w-5 text-brand" />}
              </span>
              <span className="text-[11px] font-semibold">{p.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between rounded-xl bg-black/5 px-4 py-3">
          <span className="text-sm font-semibold">O‘zim tanlayman</span>
          <input
            type="color"
            value={custom}
            onChange={(e) => chooseCustom(e.target.value)}
            className="h-9 w-14 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />
        </div>

        <button
          onClick={() => choose(bgPresets[0]!)}
          className="mt-4 w-full rounded-xl py-2 text-sm font-semibold text-brand transition hover:bg-brand/10 cursor-pointer"
        >
          Asosiy rangga qaytarish
        </button>
      </div>
    </div>
  );
}
