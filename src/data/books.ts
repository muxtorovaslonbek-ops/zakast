export interface Book {
  id: string; // URL uchun: /kutubxona/ikki-eshik-orasi
  title: string; // Kitob nomi
  author: string; // Muallif
  description: string; // Qisqa ta'rif
  category: string; // Toifa
  cover: string; // Muqova rasmi: public/kitoblar/covers/ ichida
  file: string; // PDF fayl: public/kitoblar/ ichida
  accent: string; // Muqova yuklanmasa, fon rangi
}

export const books: Book[] = [
  {
    id: "odam-bolish-qiyin",
    title: "Odam bo‘lish qiyin",
    author: "O‘lmas Umarbekov",
    description: "Zamonaviy o‘zbek nasrining mashhur asari.",
    category: "Zamonaviy nasr",
    cover: "/kitoblar/covers/odam-bolish-qiyin.jpg",
    file: "/kitoblar/odam-bolish-qiyin.pdf",
    accent: "from-slate-600 to-slate-800",
  },
  {
    id: "ikki-eshik-orasi",
    title: "Ikki eshik orasi",
    author: "O‘tkir Hoshimov",
    description: "O‘tkir Hoshimovning o‘quvchilar sevib o‘qiydigan romani.",
    category: "Roman",
    cover: "/kitoblar/covers/ikki-eshik-orasi.jpg",
    file: "/kitoblar/ikki-eshik-orasi.pdf",
    accent: "from-sky-500 to-indigo-700",
  },
  {
    id: "kecha-va-kunduz",
    title: "Kecha va kunduz",
    author: "Abdulhamid Cho‘lpon",
    description: "O‘zbek adabiyotining klassik romani.",
    category: "Klassik",
    cover: "/kitoblar/covers/kecha-va-kunduz.jpg",
    file: "/kitoblar/kecha-va-kunduz.pdf",
    accent: "from-teal-500 to-emerald-700",
  },
  {
    id: "kichkina-shahzoda",
    title: "Kichkina shahzoda",
    author: "Antuan de Sent-Ekzyuperi",
    description: "Jahon adabiyotining sevimli ertak-qissasi.",
    category: "Jahon adabiyoti",
    cover: "/kitoblar/covers/kichkina-shahzoda.jpg",
    file: "/kitoblar/kichkina-shahzoda.pdf",
    accent: "from-orange-400 to-rose-600",
  },
];

export const getBook = (id: string) => books.find((b) => b.id === id);
