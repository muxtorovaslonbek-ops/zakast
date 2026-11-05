import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, BookOpen, Search, ChevronRight, Library } from "lucide-react";
import { books, type Book } from "@/data/books";
import logo from "@/assets/logo.png";

export const Route = createFileRoute("/kutubxona/")({
  head: () => ({
    meta: [
      { title: "Kutubxona — Navoiy shahar 8-maktab" },
      {
        name: "description",
        content: "Navoiy 8-maktab onlayn kutubxonasi: kitoblarni saytning o‘zida bemalol o‘qing.",
      },
    ],
  }),
  component: KutubxonaPage,
});

function BookCover({ book, className }: { book: Book; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 p-4 text-center text-sm font-bold text-white ${className ?? ""}`}
      >
        {book.title}
      </div>
    );
  }
  return (
    <img
      src={book.cover}
      alt={book.title}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className ?? ""}`}
    />
  );
}

function KutubxonaPage() {
  const [search, setSearch] = useState("");
  const q = search.toLowerCase();
  const filtered = books.filter(
    (b) =>
      b.title.toLowerCase().includes(q) ||
      b.author.toLowerCase().includes(q) ||
      b.category.toLowerCase().includes(q),
  );

  return (
    <div className="min-h-screen bg-app pb-16 font-sans text-ink">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 px-4 py-4 backdrop-blur-md sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center gap-4">
          <Link
            to="/"
            className="flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Bosh sahifa</span>
          </Link>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-9 w-9" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold tracking-tight">Navoiy shahar 8-maktab</h1>
              <p className="text-xs text-muted-foreground">Onlayn kutubxona</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 px-4 pt-8 sm:px-8">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-indigo-900/10 via-card to-background p-6 shadow-lg sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-100/80 px-3 py-1 text-xs font-bold text-indigo-700">
            <Library className="h-3.5 w-3.5" />
            <span>{books.length} ta kitob</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Kutubxona</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
            Kitobni tanlang va to‘g‘ridan-to‘g‘ri saytda o‘qing. Xohlasangiz, yuklab ham olishingiz
            mumkin.
          </p>
        </div>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kitob yoki muallifni qidirish..."
            className="w-full rounded-xl border border-border bg-card py-2 pl-10 pr-4 text-xs outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
          />
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">Kitob topilmadi.</p>
        ) : (
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((book) => (
              <Link
                key={book.id}
                to="/kutubxona/$book"
                params={{ book: book.id }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-md transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <BookCover book={book} className="aspect-[3/4] w-full" />
                <div className="flex flex-1 flex-col gap-1 p-4">
                  <span className="text-[11px] font-bold text-indigo-600">{book.category}</span>
                  <h3 className="line-clamp-2 text-base font-extrabold leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                  <span className="mt-auto flex items-center gap-1 pt-3 text-xs font-bold text-brand">
                    <BookOpen className="h-4 w-4" />
                    O‘qish
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
