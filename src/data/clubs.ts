export interface ClubModule {
  title: string;
  desc: string;
}

export interface ClubData {
  id: string;
  name: string;
  shortName: string;
  category: string;
  color: string;
  badgeColor: string;
  description: string;
  teacher: {
    name: string;
    role: string;
    experience: string;
    phone: string;
  };
  schedule: string[];
  room: string;
  targetAge: string;
  capacity: {
    current: number;
    total: number;
  };
  status: "Qabul ochiq" | "Joylar oz qoldi";
  benefits: string[];
  modules: ClubModule[];
}

export const clubsData: Record<string, ClubData> = {
  robototexnika: {
    id: "robototexnika",
    name: "Robototexnika to‘garagi",
    shortName: "Robototexnika",
    category: "Muhandislik va Texnologiya",
    color: "blue",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    description:
      "Zamonaviy muhandislik, LEGO Mindstorms, Arduino mikrokontrollerlari va intellektual robotlarni noldan loyihalash hamda dasturlash to‘garagi.",
    teacher: {
      name: "Otabek Rahimov",
      role: "Oliy toifali informatika va robototexnika ustozi",
      experience: "8 yillik amaliy tajriba, Respublika 'RoboUz' sovrindori",
      phone: "+998 90 123-45-67",
    },
    schedule: ["Seshanba: 14:30 — 16:00", "Payshanba: 14:30 — 16:00", "Shanba: 11:00 — 13:00"],
    room: "B-bino, 204-auditoriya (Zamonaviy STEM laboratoriyasi)",
    targetAge: "5 — 9-sinf o‘quvchilari",
    capacity: {
      current: 19,
      total: 25,
    },
    status: "Joylar oz qoldi",
    benefits: [
      "Arduino va Raspberry Pi platformalarida mustaqil qurilmalar yasash",
      "Sensorlar (masofa, harorat, yorug‘lik) bilan ishlashni o‘rganish",
      "Viloyat va Respublika robototexnika olimpiadalariga tayyorgarlik",
      "Maktabning yillik 'Innovatsion g‘oyalar' ko‘rgazmasida ishtirok etish",
    ],
    modules: [
      {
        title: "1-bosqich: Mexanika va konstruksiyalash",
        desc: "Robotlar kinematikasi, tishli g‘ildiraklar, motorlar va mustahkam korpuslarni yig‘ish.",
      },
      {
        title: "2-bosqich: Elektronika va datchiklar",
        desc: "Elektr zanjirlari, breadboard ustida ishlash, ultratovushli va optik sensorlarni ulash.",
      },
      {
        title: "3-bosqich: C++ va blokli dasturlash",
        desc: "Chiziq bo‘ylab harakatlanuvchi va to‘siqlarni aylanib o‘tuvchi aqlli algoritmlar.",
      },
    ],
  },

  "it-club": {
    id: "it-club",
    name: "IT Club (Dasturlash va Sun’iy Intellekt)",
    shortName: "IT Club",
    category: "Axborot Texnologiyalari",
    color: "cyan",
    badgeColor: "bg-cyan-50 text-cyan-700 border-cyan-200",
    description:
      "Web dasturlash (HTML, CSS, JavaScript), Python asoslari, kiberxavfsizlik va zamonaviy sun’iy intellekt vositalaridan to‘g‘ri foydalanish klubi.",
    teacher: {
      name: "Jasur Qodirov",
      role: "Dasturchi-muhandis, IT-Park Navoiy rezidenti",
      experience: "6 yillik dasturlash tajribasi, 'Bir million dasturchi' mentori",
      phone: "+998 91 234-56-78",
    },
    schedule: ["Dushanba: 15:00 — 16:30", "Chorshanba: 15:00 — 16:30", "Juma: 15:00 — 16:30"],
    room: "A-bino, 305-auditoriya (Kompyuter sinfi va multimedia zali)",
    targetAge: "6 — 11-sinf o‘quvchilari",
    capacity: {
      current: 22,
      total: 30,
    },
    status: "Qabul ochiq",
    benefits: [
      "Shaxsiy web-sayt va mini-o‘yinlar yaratish ko‘nikmasi",
      "Python dasturlash tili orqali algoritmlashni mukammal o‘zlashtirish",
      "Sun’iy intellekt (AI) prompt muhandisligi va avtomatlashtirish",
      "Xalqaro IT sertifikatlariga ega bo‘lish imkoniyati",
    ],
    modules: [
      {
        title: "1-bosqich: Kompyuter savodxonligi & Web asoslari",
        desc: "Internet tuzilishi, HTML5 va zamonaviy CSS bilan responsiv sahifalar yaratish.",
      },
      {
        title: "2-bosqich: JavaScript va interaktivlik",
        desc: "O‘zgaruvchilar, funksiyalar, DOM bilan ishlash va kichik brauzer o‘yinlari dasturlash.",
      },
      {
        title: "3-bosqich: Python va AI texnologiyalari",
        desc: "Mantiqiy masalalar yechish, ma'lumotlar tahlili va neyrotarmoqlar bilan tanishuv.",
      },
    ],
  },

  matematika: {
    id: "matematika",
    name: "Olimpiada Matematikasi va Mantiq",
    shortName: "Matematika",
    category: "Aniq Fanlar",
    color: "emerald",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    description:
      "Nostandart mantiqiy masalalar, xalqaro olimpiadalar (Kenguru, AMO, IMC)ga maqsadli tayyorgarlik va tanqidiy fikrlashni rivojlantirish to‘garagi.",
    teacher: {
      name: "Zulfiya Ergasheva",
      role: "Xalq ta’limi a’lochisi, Oliy toifali matematika fani o‘qituvchisi",
      experience: "15 yillik pedagogik tajriba, shogirdlari Respublika g‘oliblari",
      phone: "+998 93 345-67-89",
    },
    schedule: ["Seshanba: 14:00 — 15:30", "Juma: 14:00 — 15:30", "Shanba: 10:00 — 12:00"],
    room: "A-bino, 212-auditoriya (Matematika fani ixtisoslashgan xonasi)",
    targetAge: "4 — 10-sinf o‘quvchilari",
    capacity: {
      current: 24,
      total: 28,
    },
    status: "Joylar oz qoldi",
    benefits: [
      "Murakkab nostandart masalalarni tezkor va oson yechish usullari",
      "Xalqaro va tuman/viloyat olimpiadalarida yuqori natijalar",
      "Mantiqiy va analitik fikrlash qobiliyatini yuksaltirish",
      "Mental arifmetika va fazoviy tasavvur mashg‘ulotlari",
    ],
    modules: [
      {
        title: "1-bosqich: Kombinatorika va Dirixle prinsipi",
        desc: "Guruhlash, ehtimolliklar nazariyasi va mantiqiy xulosalar chiqarish qonuniyatlari.",
      },
      {
        title: "2-bosqich: Sonlar nazariyasi va bo‘linish qoidalari",
        desc: "Tub sonlar, EKUB va EKUK, qoldiqli bo‘lish va Diofant tenglamalari.",
      },
      {
        title: "3-bosqich: Olimpiada geometriyasi",
        desc: "Planimetriya, uchburchaklar tengsizligi, aylanalar va yuzalar bo‘yicha murakkab teoremalar.",
      },
    ],
  },

  sport: {
    id: "sport",
    name: "Sport va Jismoniy Tarbiya Klubi",
    shortName: "Sport",
    category: "Sport va Salomatlik",
    color: "orange",
    badgeColor: "bg-orange-50 text-orange-700 border-orange-200",
    description:
      "Shaxmat, voleybol, stol tennisi va basketbol to‘garaklari. O‘quvchilar salomatligini mustahkamlash, intizom va jamoaviy g‘alabalar maydoni.",
    teacher: {
      name: "Rustam Mirzayev",
      role: "Sport ustasi, Oliy toifali jismoniy tarbiya o‘qituvchisi",
      experience: "12 yillik murabbiylik tajribasi, 'Umid nihollari' chempioni",
      phone: "+998 94 456-78-90",
    },
    schedule: [
      "Dushanba: 16:00 — 17:30 (Voleybol/Basketbol)",
      "Chorshanba: 16:00 — 17:30 (Stol tennisi)",
      "Shanba: 14:00 — 16:00 (Shaxmat va musobaqalar)",
    ],
    room: "Maktab katta sport zali va shaxmat xonasi",
    targetAge: "1 — 11-sinf barcha o‘quvchilari",
    capacity: {
      current: 35,
      total: 45,
    },
    status: "Qabul ochiq",
    benefits: [
      "Jismoniy faollik, to‘g‘ri qad-qomat va sog‘lom turmush tarzi",
      "Shaxmat orqali strategik rejalashtirish va aql charxi",
      "Maktablararo sport musobaqalarida ishtirok etish va kuboklar yutish",
      "Jamoaviy hamjihatlik va yetakchilik fazilatlari",
    ],
    modules: [
      {
        title: "1-yo‘nalish: Aql charxi (Shaxmat va shashka)",
        desc: "Debyutlar, kombinatsiyalar, partiyalar tahlili va taktika.",
      },
      {
        title: "2-yo‘nalish: Jamoaviy o‘yinlar (Voleybol & Basketbol)",
        desc: "To‘p uzatish, hujum va himoya pozitsiyalari, sport odobi.",
      },
      {
        title: "3-yo‘nalish: Chidamlilik va umumiy jismoniy tayyorgarlik",
        desc: "Gimnastika elementlari, tezlik va chaqqonlik mashqlari.",
      },
    ],
  },
};
