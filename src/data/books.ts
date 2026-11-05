export interface Book {
  id: string; // URL uchun: /kutubxona/kitob-1
  title: string;
  author: string;
  category: string;
  description: string;
  pages?: number;
  cover: string; // /kitoblar/covers/... (public papkasida)
  file: string; // /kitoblar/... .pdf (public papkasida)
}

// Har bir kitobni shu yerda o'zgartirasiz. Fayl nomlari public/kitoblar/ ichidagi
// fayllar bilan AYNAN bir xil bo'lishi kerak (katta-kichik harf ham muhim).
export const books: Book[] = [
  {
    id: "kitob-1",
    title: "1-kitob nomi",
    author: "Muallif ismi",
    category: "Badiiy adabiyot",
    description: "Kitob haqida 1-2 gaplik qisqa tavsif.",
    pages: 200,
    cover: "/kitoblar/covers/kitob-1.jpg",
    file: "/kitoblar/kitob-1.pdf",
  },
  {
    id: "kitob-2",
    title: "2-kitob nomi",
    author: "Muallif ismi",
    category: "Darslik",
    description: "Kitob haqida 1-2 gaplik qisqa tavsif.",
    pages: 150,
    cover: "/kitoblar/covers/kitob-2.jpg",
    file: "/kitoblar/kitob-2.pdf",
  },
  {
    id: "kitob-3",
    title: "3-kitob nomi",
    author: "Muallif ismi",
    category: "Qo‘llanma",
    description: "Kitob haqida 1-2 gaplik qisqa tavsif.",
    pages: 120,
    cover: "/kitoblar/covers/kitob-3.jpg",
    file: "/kitoblar/kitob-3.pdf",
  },
  {
    id: "kitob-4",
    title: "4-kitob nomi",
    author: "Muallif ismi",
    category: "Ilmiy-ommabop",
    description: "Kitob haqida 1-2 gaplik qisqa tavsif.",
    pages: 180,
    cover: "/kitoblar/covers/kitob-4.jpg",
    file: "/kitoblar/kitob-4.pdf",
  },
];
