import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { books } from "@/data/books";

export const Route = createFileRoute("/kutubxona/$book")({
  head: ({ params }) => {
    const book = books.find((b) => b.id === params.book);
    return {
      meta: [
        { title: book ? `${book.title} — Kutubxona` : "Kitob — Kutubxona" },
        {
          name: "description",
          content: book ? `${book.title} (${book.author}) — onlayn o‘qish.` : "Onlayn kutubxona",
        },
      ],
    };
  },
  component: BookReaderPage,
});

function BookReaderPage() {
  const { book: bookId } = Route.useParams();
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-app px-4 text-ink">
        <p className="text-lg font-bold">Kitob topilmadi</p>
        <Link
          to="/kutubxona"
          className="rounded-xl bg-brand px-5 py-2.5 text-sm font-bold text-white"
        >
          Kutubxonaga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="flex h-screen flex-col bg-app font-sans text-ink">
      <header className="flex shrink-0 flex-wrap items-center justify-between gap-3 border-b border-border bg-background/90 px-4 py-3 backdrop-blur-md sm:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            to="/kutubxona"
            className="flex shrink-0 cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold shadow-sm transition hover:bg-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Kutubxona</span>
          </Link>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-bold">{book.title}</h1>
            <p className="truncate text-xs text-muted-foreground">{book.author}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={book.file}
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-xs font-semibold shadow-sm transition hover:bg-accent"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Yangi oynada
          </a>
          <a
            href={book.file}
            download
            className="flex cursor-pointer items-center gap-1.5 rounded-xl bg-brand px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:scale-105"
          >
            <Download className="h-3.5 w-3.5" />
            Yuklab olish
          </a>
        </div>
      </header>

      <div className="min-h-0 flex-1">
        <iframe
          src={book.file}
          title={book.title}
          className="h-full w-full border-0 bg-white"
        />
      </div>
      <p className="shrink-0 bg-background/90 px-4 py-2 text-center text-[11px] text-muted-foreground sm:hidden">
        Telefonda kitob ochilmasa, “Yangi oynada” tugmasini bosing.
      </p>
    </div>
  );
}
