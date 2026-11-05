export interface ClubLessonTopic {
  title: string;
  explanation: string;
  codeSnippet?: string;
  tips?: string[];
}

export interface ClubLesson {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  topics: ClubLessonTopic[];
}

export interface PracticalProject {
  id: string;
  title: string;
  level: string;
  description: string;
  requirements: string[];
  steps: string[];
  expectedResult: string;
}

export interface ClubQuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface ClubTerminology {
  term: string;
  definition: string;
  example: string;
}

export interface ClubLearningData {
  id: "robototexnika" | "it-club" | "matematika" | "sport";
  title: string;
  shortName: string;
  category: string;
  color: string;
  accentBadge: string;
  description: string;
  heroQuote: string;
  stats: {
    lessons: number;
    projects: number;
    quizzes: number;
    hours: string;
  };
  overview: {
    targetAudience: string;
    prerequisites: string;
    outcomes: string[];
  };
  lessons: ClubLesson[];
  projects: PracticalProject[];
  quizzes: ClubQuizQuestion[];
  terms: ClubTerminology[];
}

export const clubsLearningData: Record<string, ClubLearningData> = {
  robototexnika: {
    id: "robototexnika",
    title: "Robototexnika va Mikrokontrollerlar",
    shortName: "Robototexnika",
    category: "Muhandislik va Avtomatika",
    color: "blue",
    accentBadge: "bg-blue-100 text-blue-700 border-blue-200",
    description:
      "Elektronika, Arduino, sensorlar va aqlli robotlarni mustaqil loyihalash, yasash hamda dasturlash to‘garagi.",
    heroQuote: "Robotlarni yaratish orqali kelajak texnologiyalarini boshqaring!",
    stats: {
      lessons: 12,
      projects: 6,
      quizzes: 15,
      hours: "36 soat",
    },
    overview: {
      targetAudience: "5 — 9-sinf o‘quvchilari",
      prerequisites: "Boshlang‘ich kompyuter savodxonligi va qiziquvchanlik",
      outcomes: [
        "Elektr zanjirlari va elektron komponentlarni (rezistor, diod, tranzistor) tushunish",
        "Arduino platasiga sensor va aktuatorlarni mustaqil ulash",
        "C++ va blokli dasturlashda robotlar harakat algoritmlarini yozish",
        "Olimpiada va tanlovlar uchun amaliy robot loyihalarini tayyorlash",
      ],
    },
    lessons: [
      {
        id: "rob-1",
        title: "1-dars: Robototexnika asoslari va Arduino mikrokontrolleri",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Robot nima? U qanday qismlardan (miya, sezgi a'zolari, mushaklar) tashkil topgan?",
        topics: [
          {
            title: "Robotning asosiy arxitekturasi",
            explanation:
              "Har qanday robot 3 ta asosiy tizimdan iborat: 1. Sensorlar (Kirish ma'lumoti), 2. Mikrokontroller/Miya (Qaror qabul qilish), 3. Aktuatorlar/Motorlar (Harakat).",
            tips: [
              "Arduino Uno platasi — robotning eng qulay 'miyasi' hisoblanadi.",
              "Plata USB kabel orqali kompyuterga ulanadi va 5V kuchlanishda ishlaydi.",
            ],
          },
          {
            title: "Arduino pinlari va elektr ta'minoti",
            explanation:
              "Raqamli (Digital) pinlar (0-13) faqat HIGH (5V) yoki LOW (0V) holatida ishlaydi. Analog pinlar (A0-A5) esa o‘zgaruvchan kuchlanishni (0 dan 1023 gacha) o‘qiydi.",
            codeSnippet: `void setup() {
  pinMode(13, OUTPUT); // 13-pinni chiquvchi qilib belgilaymiz
}
void loop() {
  digitalWrite(13, HIGH); // Chiroqni yoqamiz
  delay(1000);            // 1 soniya kutamiz
  digitalWrite(13, LOW);  // Chiroqni o'chiramiz
  delay(1000);
}`,
            tips: ["setup() funksiyasi 1 marta ishga tushadi, loop() esa cheksiz takrorlanadi."],
          },
        ],
      },
      {
        id: "rob-2",
        title: "2-dars: Datchiklar va Atrof-muhitni his qilish",
        duration: "25 daqiqa",
        level: "A1 Elementar",
        description: "Ultrasonik masofa o‘lchagich (HC-SR04) va chiziq datchiklari bilan ishlash.",
        topics: [
          {
            title: "HC-SR04 ultratovushli masofa sensori",
            explanation:
              "Sensor ultratovush to‘lqinini yuboradi (Trig) va to‘siqdan qaytgan aks-sadoni (Echo) qabul qiladi. To‘lqinning borib-kelish vaqti orqali masofa aniqlanadi: Masofa = (Vaqt * 0.034) / 2.",
            tips: [
              "Sensor 2 sm dan 400 sm gacha masofadagi to‘siqlarni aniq o‘lchay oladi.",
              "To‘siqlardan qochuvchi robotlar aynan shu sensor asosida yaratiladi.",
            ],
          },
        ],
      },
      {
        id: "rob-3",
        title: "3-dars: Motorlar va g‘ildirakli robot harakati",
        duration: "30 daqiqa",
        level: "O‘rta",
        description: "L298N drayveri yordamida ikkita DC motorni boshqarish.",
        topics: [
          {
            title: "Motor drayveri nima uchun kerak?",
            explanation:
              "Arduino platasi motorlarni to‘g‘ridan-to‘g‘ri aylantirish uchun yetarli tok bera olmaydi. L298N drayveri batareyadan keladigan kuchli tokni motorlarga xavfsiz uzatadi.",
            tips: [
              "Oldinga harakat: ikkala motor bir tomonga aylanadi.",
              "Burilish: bitta motor to‘xtaydi yoki teskari aylanadi.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        id: "p1",
        title: "Loyiha 1: Aqlli xona yoritgichi (LDR fotorezistor)",
        level: "Boshlang‘ich",
        description:
          "Qorong‘u tushganda avtomatik ravishda chiroqni yoquvchi, yorug‘ bo‘lganda o‘chiruvchi aqlli tizim.",
        requirements: [
          "Arduino Uno",
          "LDR fotorezistor",
          "10k Om rezistor",
          "LED chiroq",
          "Breadboard",
        ],
        steps: [
          "Fotorezistorni 10k Om rezistor bilan bo‘lgich qilib A0 piniga ulang.",
          "LED chiroqning musbat oyog‘ini 9-pinga ulang.",
          "AnalogRead(A0) qiymati 500 dan past bo‘lsa, LEDni yoqing.",
        ],
        expectedResult: "Sensor ustini qo‘l bilan yopganingizda LED chiroq darhol yonadi.",
      },
      {
        id: "p2",
        title: "Loyiha 2: To‘siqlardan qochuvchi robot (Obstacle Avoider)",
        level: "Amaliy",
        description:
          "Yo‘lidagi devor yoki to‘siqni ko‘rib, avtomatik ravishda orqaga buriluvchi 2 g‘ildirakli robot.",
        requirements: [
          "2 g‘ildirakli shassi",
          "Arduino Uno",
          "L298N motor drayver",
          "HC-SR04 datchigi",
          "Batareya",
        ],
        steps: [
          "HC-SR04 sensorini robotning old qismiga o‘rnating.",
          "Masofa 20 sm dan kam bo‘lsa, motorlarni to‘xtatib o‘ngga buriling.",
          "Aks holda to‘g‘riga harakatlanishda davom eting.",
        ],
        expectedResult: "Robot xona bo‘ylab to‘siqlarga urilmasdan erkin harakatlanadi.",
      },
    ],
    quizzes: [
      {
        id: "rq1",
        question: "Arduino mikrokontrollerida kod cheksiz takrorlanadigan asosiy funksiya qaysi?",
        options: ["setup()", "loop()", "pinMode()", "delay()"],
        answer: 1,
        explanation: "loop() funksiyasi elektr quvvati bor ekan, uzluksiz takroriy ishlaydi.",
      },
      {
        id: "rq2",
        question: "HC-SR04 ultratovush sensori qanday maqsadda ishlatiladi?",
        options: [
          "Haroratni o‘lchash",
          "Masofa va to‘siqlarni aniqlash",
          "Chiroq yoqish",
          "Ovoz chiqarish",
        ],
        answer: 1,
        explanation:
          "HC-SR04 ultratovush to‘lqinlari orqali masofani aniqlash uchun xizmat qiladi.",
      },
      {
        id: "rq3",
        question: "Robotda harakatni ta'minlovchi asosiy qism qanday ataladi?",
        options: ["Sensor", "Aktuator / Motor", "Rezistor", "Kondensator"],
        answer: 1,
        explanation:
          "Aktuatorlar (motorlar, servolar) robotni harakatga keltiruvchi 'mushak' vazifasini o‘taydi.",
      },
    ],
    terms: [
      {
        term: "Mikrokontroller",
        definition: "Bitta mikrosxemada joylashgan kichik kompyuter.",
        example: "Arduino platasidagi ATmega328P chipi.",
      },
      {
        term: "Aktuator",
        definition: "Elektr energiyasini mexanik harakatga aylantiruvchi qurilma.",
        example: "DC motor yoki servoprivod.",
      },
      {
        term: "Fotorezistor (LDR)",
        definition: "Yorug‘lik tushish darajasiga qarab qarshiligi o‘zgaruvchi sensor.",
        example: "Ko‘cha chiroqlarini kechasi avtomatik yoqish.",
      },
    ],
  },

  "it-club": {
    id: "it-club",
    title: "IT Club — Dasturlash va Sun’iy Intellekt",
    shortName: "IT Club",
    category: "Dasturlash va Zamonaviy IT",
    color: "cyan",
    accentBadge: "bg-cyan-100 text-cyan-700 border-cyan-200",
    description:
      "Web dasturlash (HTML, CSS, JavaScript), Python asoslari, algoritmlar va sun’iy intellektdan unumli foydalanish amaliyoti.",
    heroQuote: "Dasturlash — bu o‘z g‘oyalaringizni haqiqatga aylantirish san’ati!",
    stats: {
      lessons: 15,
      projects: 8,
      quizzes: 20,
      hours: "40 soat",
    },
    overview: {
      targetAudience: "6 — 11-sinf o‘quvchilari",
      prerequisites: "Kompyuterdan foydalana olish va mantiqiy fikrlash",
      outcomes: [
        "O‘zining shaxsiy portfolio va web-saytini yaratish ko‘nikmasi",
        "JavaScript orqali interaktiv elementlar va kalkulyatorlar yasash",
        "Python tilida masalalar yechish va ma'lumotlar bilan ishlash",
        "Sun’iy intellekt (AI) prompt muhandisligi va dasturlashda AI yordamchilari",
      ],
    },
    lessons: [
      {
        id: "it-1",
        title: "1-dars: Web dasturlash asosi — HTML5 va CSS3",
        duration: "25 daqiqa",
        level: "Boshlang‘ich",
        description: "Web sahifaning skeleti (HTML) va dizayni (CSS) qanday ishlaydi?",
        topics: [
          {
            title: "HTML teglari va sahifa tuzilishi",
            explanation:
              "HTML — gipermatnli belgilash tili. <h1> sarlavha, <p> matn xatboshi, <button> tugma, <a> havola yasash uchun ishlatiladi.",
            codeSnippet: `<!DOCTYPE html>
<html>
  <head>
    <title>Navoiy 8-maktab IT Club</title>
  </head>
  <body>
    <h1>Mening birinchi saytim!</h1>
    <p>Men IT Clubda web dasturlashni o'rganyapman.</p>
    <button>Batafsil</button>
  </body>
</html>`,
            tips: ["Har bir ochilgan teg yopilishi kerak: <p>...</p>."],
          },
          {
            title: "CSS orqali saytni bezash",
            explanation:
              "CSS saytga rang, shrift, soya va chiroyli animatsiyalar beradi. Masalan: color: blue; background: #f0f0f0; border-radius: 12px;.",
            tips: ["CSS klasslar nuqta (.) bilan boshlanadi, masalan: .card { padding: 16px; }."],
          },
        ],
      },
      {
        id: "it-2",
        title: "2-dars: JavaScript — Saytga jon bag‘ishlash",
        duration: "30 daqiqa",
        level: "A1 Elementar",
        description: "O‘zgaruvchilar, funksiyalar va tugma bosilganda harakat bajarish (DOM).",
        topics: [
          {
            title: "O‘zgaruvchilar va hodisalar (Events)",
            explanation:
              "JavaScript yordamida tugma bosilganda matnni o‘zgartirish, hisob-kitob qilish va sahifani yangilamasdan ma'lumot yuklash mumkin.",
            codeSnippet: `function sayHello() {
  const name = prompt("Ismingiz nima?");
  alert("Xush kelibsiz, " + name + "! IT Club sizni qutlaydi.");
}`,
            tips: [
              "addEventListener yordamida har qanday tugmaga bosish harakatini bog'lash mumkin.",
            ],
          },
        ],
      },
      {
        id: "it-3",
        title: "3-dars: Python — Eng mashhur dasturlash tili",
        duration: "35 daqiqa",
        level: "O‘rta",
        description:
          "Nima uchun butun dunyo Pythonni tanlamoqda? Sun'iy intellekt va sodda sintaksis.",
        topics: [
          {
            title: "Python sintaksisi va shartlar (if/else)",
            explanation:
              "Python juda o‘qimishli til: unda jingalak qavslar o‘rniga bo‘sh joylar (indentation) ishlatiladi.",
            codeSnippet: `yosh = int(input("Yoshingizni kiriting: "))
if yosh >= 14:
    print("Siz Navoiy 8-maktab IT Clubining yuqori guruhiga qabul qilindingiz!")
else:
    print("Siz boshlang'ich guruhda dasturlashni boshlaysiz.")`,
            tips: ["Python sun'iy intellekt va data science sohasida 1-o'rinda turadi."],
          },
        ],
      },
    ],
    projects: [
      {
        id: "it-p1",
        title: "Loyiha 1: Shaxsiy interaktiv viza kartochkasi (Web Card)",
        level: "Boshlang‘ich",
        description:
          "O‘zingiz haqingizdagi ma'lumotlar, qiziqishlaringiz va fotosuratingiz aks etgan chiroyli web sahifa.",
        requirements: ["HTML", "CSS", "Matn muharriri (VS Code yoki onlayn muharrir)"],
        steps: [
          "HTMLda <div> konteyner yasang va unga rasm, ism va qisqa bio kiriting.",
          "CSS bilan gradient fon, dumaloq burchaklar va yumshoq soya bering.",
          "Tugma qo‘shib, unga bosilganda 'Bog‘lanish' xabari chiqaradigan qiling.",
        ],
        expectedResult: "Brauzerda ochiladigan shaxsiy professional biznes-kartochka.",
      },
      {
        id: "it-p2",
        title: "Loyiha 2: Aqlli kalkulyator dasturi (JavaScript)",
        level: "Amaliy",
        description:
          "Qo‘shish, ayirish, ko‘paytirish va bo‘lish amallarini bajaruvchi to‘laqonli kalkulyator.",
        requirements: [
          "HTML tugmalar tarmog‘i",
          "CSS Grid dizayn",
          "JavaScript hisoblash funksiyalari",
        ],
        steps: [
          "0 dan 9 gacha raqamlar va amallar (+, -, *, /) tugmalarini yarating.",
          "JavaScriptda natijani ekranga chiqaruvchi funksiya yozing.",
          "Nolga bo‘lish xatosini tekshiruvchi himoya qo‘shing.",
        ],
        expectedResult: "Har qanday matematik misolni tezkor hisoblovchi interaktiv dastur.",
      },
    ],
    quizzes: [
      {
        id: "itq1",
        question: "Web sahifada asosiy sarlavha yaratish uchun qaysi HTML tegidan foydalaniladi?",
        options: ["<p>", "<h1>", "<div>", "<span>"],
        answer: 1,
        explanation: "<h1> (Heading 1) web sahifaning eng asosiy birinchi darajali sarlavhasidir.",
      },
      {
        id: "itq2",
        question: "JavaScriptda konsolga ma'lumot chiqarish buyrug‘i qaysi?",
        options: ["print()", "console.log()", "echo", "System.out.println()"],
        answer: 1,
        explanation:
          "JavaScriptda xatoliklarni tekshirish va ma'lumot chiqarish uchun console.log() qo‘llaniladi.",
      },
      {
        id: "itq3",
        question:
          "Sun’iy intellekt (AI) va ma'lumotlar tahlilida eng ko‘p qo‘llaniladigan til qaysi?",
        options: ["Python", "PHP", "Pascal", "HTML"],
        answer: 0,
        explanation:
          "Python boy kutubxonalari (TensorFlow, PyTorch) tufayli sun'iy intellekt yetakchisidir.",
      },
    ],
    terms: [
      {
        term: "Frontend",
        definition: "Foydalanuvchi ko‘radigan va bosadigan web-sahifaning ko‘rinish qismi.",
        example: "Tugmalar, rasmlar, matnlar.",
      },
      {
        term: "Backend",
        definition: "Serverda ishlaydigan ma'lumotlar bazasi va mantiqiy qism.",
        example: "Foydalanuvchi parolini tekshirish.",
      },
      {
        term: "Algoritm",
        definition:
          "Muayyan vazifani bajarish uchun berilgan aniq ketma-ket ko‘rsatmalar to‘plami.",
        example: "Choy damlash ketma-ketligi.",
      },
    ],
  },

  matematika: {
    id: "matematika",
    title: "Olimpiada Matematikasi va Mantiq",
    shortName: "Matematika",
    category: "Aniq Fanlar va Mantiq",
    color: "emerald",
    accentBadge: "bg-emerald-100 text-emerald-700 border-emerald-200",
    description:
      "Nostandart mantiqiy masalalar, xalqaro olimpiadalar sirlari, tezkor hisoblash texnikalari va fazoviy tasavvur.",
    heroQuote: "Matematika — aqlning eng buyuk gimnastikasi va barcha fanlar podshohidir!",
    stats: {
      lessons: 14,
      projects: 5,
      quizzes: 20,
      hours: "35 soat",
    },
    overview: {
      targetAudience: "4 — 10-sinf o‘quvchilari",
      prerequisites: "Maktab arifmetikasi va qiziqish",
      outcomes: [
        "Murakkab nostandart masalalarni bir necha usul bilan yechish",
        "Kombinatorika, Dirixle va qoldiqli bo‘lish usullarini o‘zlashtirish",
        "Kenguru va boshqa xalqaro musobaqalarda yuqori natijaga erishish",
        "Mantiqiy zanjirlarni tezkor qurish va analitik xulosa chiqarish",
      ],
    },
    lessons: [
      {
        id: "mat-1",
        title: "1-dars: Dirixle prinsipi va quyonlar masalasi",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Agar n ta qafasga n+1 ta quyon joylashtirilsa, kamida bitta qafasda 2 ta quyon bo‘ladi!",
        topics: [
          {
            title: "Prinsipning mohiyati",
            explanation:
              "Dirixle prinsipi murakkab ko‘ringan ko‘plab isbot talab qiluvchi masalalarni oson yechishga yordam beradi. Masalan: 13 kishi yig‘ilgan joyda kamida 2 kishi bir xil oyda tug‘ilgan bo‘ladi, chunki yilda 12 oy bor.",
            tips: [
              "Quyonlar — elementlar soni, qafaslar — xususiyatlar soni.",
              "Agar elementlar soni xususiyatlardan ko‘p bo‘lsa, kamida bitta xususiyat takrorlanadi.",
            ],
          },
        ],
      },
      {
        id: "mat-2",
        title: "2-dars: Tezkor hisoblash sirlari (Mental Matematika)",
        duration: "25 daqiqa",
        level: "A1 Elementar",
        description:
          "5 ga tugaydigan sonlarni kvadratga ko‘tarish, 11 ga ko‘paytirishning mo‘jizaviy usullari.",
        topics: [
          {
            title: "5 ga tugovchi sonlar kvadrati",
            explanation:
              "Masalan, 35²: birinchi raqam (3) o‘zidan keyingi raqamga (4) ko‘paytiriladi (3*4 = 12), oxiriga 25 yoziladi: 1225! Xuddi shunday 75² = (7*8)va25 = 5625.",
            tips: [
              "Ushbu usul 15, 25, 35, 45, ..., 95 gacha bo'lgan barcha sonlar uchun 100% ishlaydi!",
            ],
          },
        ],
      },
      {
        id: "mat-3",
        title: "3-dars: Kombinatorika — Tanlash va joylashtirish",
        duration: "30 daqiqa",
        level: "O‘rta",
        description: "Faktorial, o‘rin almashtirish va ehtimolliklar nazariyasi.",
        topics: [
          {
            title: "Ko‘paytirish qoidasi",
            explanation:
              "Agar birinchi ishni m usulda, ikkinchi ishni n usulda bajarish mumkin bo‘lsa, ikkala ishni ketma-ket bajarish usullari soni m * n ga teng.",
            tips: [
              "3 ta xil ko‘ylak va 4 ta xil shimdan jami 3 * 4 = 12 xil kiyim komplekti tuzish mumkin.",
            ],
          },
        ],
      },
    ],
    projects: [
      {
        id: "mat-p1",
        title: "Loyiha 1: Qiziqarli sehrli kvadrat (Magic Square) yaratish",
        level: "Boshlang‘ich",
        description:
          "3x3 katakdagi raqamlar yig‘indisi har tomonga (gorizontal, vertikal, diagonal) 15 ga teng bo‘lgan jadval tuzish.",
        requirements: ["1 dan 9 gacha raqamlar", "Qog‘oz va qalam"],
        steps: [
          "Markaziy katakka 5 raqamini qo‘ying.",
          "Burchaklarga juft sonlarni (2, 4, 6, 8) joylashtiring.",
          "Qolgan o‘rtadagi kataklarga toq sonlarni (1, 3, 7, 9) moslang.",
        ],
        expectedResult: "Har bir qator va ustundagi yig‘indi aynan 15 ga teng bo‘ladi.",
      },
    ],
    quizzes: [
      {
        id: "mq1",
        question: "35 sonining kvadrati (35²) nechiga teng?",
        options: ["1025", "1125", "1225", "1325"],
        answer: 2,
        explanation: "3 * (3+1) = 12, ketidan 25 yoziladi -> 1225.",
      },
      {
        id: "mq2",
        question:
          "Qafasda tovuqlar va quyonlar bor. Ularning jami 10 ta boshi va 28 ta oyog‘i bor. Nechta quyon bor?",
        options: ["2 ta", "4 ta", "6 ta", "8 ta"],
        answer: 1,
        explanation:
          "Agar barchasi tovuq bo‘lsa: 10*2 = 20 oyoq. Ortiqcha 8 ta oyoq: 8 / 2 = 4 ta quyon bor.",
      },
    ],
    terms: [
      {
        term: "Faktorial (n!)",
        definition: "1 dan n gacha bo‘lgan barcha natural sonlar ko‘paytmasi.",
        example: "5! = 1 * 2 * 3 * 4 * 5 = 120.",
      },
      {
        term: "Tub son",
        definition: "Faqat 1 ga va o‘ziga bo‘linadigan 1 dan katta son.",
        example: "2, 3, 5, 7, 11, 13...",
      },
    ],
  },

  sport: {
    id: "sport",
    title: "Sport va Sog‘lom Turmush Tarzi",
    shortName: "Sport",
    category: "Jismoniy Tarbiya va Shaxmat",
    color: "orange",
    accentBadge: "bg-orange-100 text-orange-700 border-orange-200",
    description:
      "Shaxmat strategiyalari, stol tennisi, voleybol va har kungi to‘g‘ri badantarbiya mashg‘ulotlari.",
    heroQuote: "Sog‘lom tanda — sog‘lom aql! Har kuni harakatda bo‘ling!",
    stats: {
      lessons: 12,
      projects: 4,
      quizzes: 15,
      hours: "30 soat",
    },
    overview: {
      targetAudience: "Barcha sinf o‘quvchilari",
      prerequisites: "Sog‘lom bo‘lishga intilish va sportga mehr",
      outcomes: [
        "Shaxmat o‘yinida debyutlar va mat qilish taktikasini o‘rganish",
        "Voleybol va basketbolda to‘p uzatish va jamoaviy harakat qoidalari",
        "Stol tennisida raketkani to‘g‘ri ushlash va aylanma zarbalar",
        "Qad-qomatni tiklash va chidamlilikni oshiruvchi kunlik mashqlar",
      ],
    },
    lessons: [
      {
        id: "sp-1",
        title: "1-dars: Shaxmat donalari va 'Bolalar moti'dan himoya",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "Donalar kuchi (qiymati), markazni egallash va debyutning oltin qoidalari.",
        topics: [
          {
            title: "Donalarning nisbiy qiymati",
            explanation:
              "Piyoda = 1 ochko, Ot = 3 ochko, Fil = 3 ochko, Rux = 5 ochko, Farzin = 9 ochko. Shoh — bebaho!",
            tips: [
              "O‘yin boshida markaziy piyodalarni (e4, d4) surib, fil va otlarni jangga chiqaring.",
              "Shoh xavfsizligi uchun o‘yin boshida rokirovka qilishni unutmang.",
            ],
          },
        ],
      },
      {
        id: "sp-2",
        title: "2-dars: Voleybol — To‘p uzatish va jamoaviy taktika",
        duration: "25 daqiqa",
        level: "A1 Elementar",
        description: "Yuqoridan va pastdan to‘p qabul qilish, 3 ta teginish qoidasi.",
        topics: [
          {
            title: "Klassik 3 teginish qoidasi",
            explanation:
              "1-teginish: to‘pni qabul qilish, 2-teginish: bog‘lovchi (pasyor) hujumchiga to‘p oshiradi, 3-teginish: raqib maydoniga zarba berish.",
            tips: ["Voleybol eng jamoaviy sport turlaridan biridir."],
          },
        ],
      },
    ],
    projects: [
      {
        id: "sp-p1",
        title: "Loyiha 1: 14 kunlik sog‘lom turmush rejasi (Challenge)",
        level: "Boshlang‘ich",
        description:
          "Har kuni ertalab 15 daqiqa badantarbiya, 2 litr suv ichish va to‘g‘ri uyqu grafigi.",
        requirements: ["Kundalik daftar", "Iroda va intizom"],
        steps: [
          "Ertalab soat 07:00 da uyg‘onib, bo‘yin, qo‘l va oyoq mashqlarini bajaring.",
          "Kun davomida kamida 8000 qadam piyoda yuring.",
          "Kechki payt telefonni yotishdan 1 soat oldin o‘chiring.",
        ],
        expectedResult: "Tetiklik, yuqori kayfiyat va darslarda yaxshi e'tibor.",
      },
    ],
    quizzes: [
      {
        id: "sq1",
        question: "Shaxmatda Farzinning shartli kuchi nechta piyodaga teng?",
        options: ["3 ta", "5 ta", "9 ta", "15 ta"],
        answer: 2,
        explanation: "Farzin 9 ochkoga teng bo‘lib, eng kuchli dona hisoblanadi.",
      },
      {
        id: "sq2",
        question: "Voleybol jamoasida bir vaqtning o‘zida maydonda nechta o‘yinchi bo‘ladi?",
        options: ["5 ta", "6 ta", "7 ta", "11 ta"],
        answer: 1,
        explanation: "Voleybolda har bir jamoada 6 tadan o‘yinchi maydonda harakat qiladi.",
      },
    ],
    terms: [
      {
        term: "Rokirovka",
        definition: "Shaxmatda bir vaqtning o‘zida shoh va ruxning maxsus ko‘chishi.",
        example: "Kichik rokirovka (0-0) yoki Katta rokirovka (0-0-0).",
      },
      {
        term: "Debyut",
        definition:
          "Shaxmat partiyasining dastlabki 10-15 ta yurishdan iborat boshlang‘ich bosqichi.",
        example: "Italiya partiyasi, Sitsiliya himoyasi.",
      },
    ],
  },
};
