export interface VocabWord {
  id: string;
  word: string;
  translation: string;
  pronunciation: string;
  example: string;
  category: string;
}

export interface LessonTopic {
  title: string;
  explanation: string;
  examples: string[];
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  level: string;
  description: string;
  topics: LessonTopic[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface DialogItem {
  speaker: string;
  text: string;
  translation: string;
}

export interface LanguageData {
  id: string;
  name: string;
  nativeName: string;
  code: string;
  locale: string;
  bg: string;
  accentColor: string;
  level: string;
  description: string;
  alphabetInfo: {
    title: string;
    description: string;
    sample: string;
  };
  stats: {
    lessons: number;
    words: number;
    learners: string;
    rating: string;
  };
  vocabulary: VocabWord[];
  lessons: Lesson[];
  quiz: QuizQuestion[];
  dialogue: DialogItem[];
  tips: string[];
}

export const languagesData: Record<string, LanguageData> = {
  ingliz: {
    id: "ingliz",
    name: "Ingliz tili",
    nativeName: "English",
    code: "gb",
    locale: "en-US",
    bg: "bg-indigo-100/70",
    accentColor: "indigo",
    level: "A1 - B2",
    description:
      "Xalqaro muloqot, IT texnologiyalar va jahon ta’limi tili. Navoiy shahar 8-maktab o‘quvchilari uchun maxsus dastur.",
    alphabetInfo: {
      title: "Lotin alifbosi (26 ta harf)",
      description:
        "Ingliz alifbosi 26 ta harfdan iborat: 5 ta unli (A, E, I, O, U) va 21 ta undosh.",
      sample: "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz",
    },
    stats: {
      lessons: 24,
      words: 350,
      learners: "1,240+",
      rating: "4.9",
    },
    vocabulary: [
      {
        id: "1",
        word: "Hello",
        translation: "Salom",
        pronunciation: "/həˈləʊ/",
        example: "Hello, my friend!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Good morning",
        translation: "Xayrli tong",
        pronunciation: "/ɡʊd ˈmɔː.nɪŋ/",
        example: "Good morning, teacher!",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Thank you",
        translation: "Rahmat",
        pronunciation: "/θæŋk juː/",
        example: "Thank you for your help.",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "School",
        translation: "Maktab",
        pronunciation: "/skuːl/",
        example: "Navoi school number 8 is great.",
        category: "Maktab",
      },
      {
        id: "5",
        word: "Student",
        translation: "O‘quvchi",
        pronunciation: "/ˈstjuː.dənt/",
        example: "I am a smart student.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Book",
        translation: "Kitob",
        pronunciation: "/bʊk/",
        example: "Open your English book.",
        category: "O‘quv qurollari",
      },
      {
        id: "7",
        word: "Teacher",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "/ˈtiː.tʃər/",
        example: "Our teacher is very kind.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Knowledge",
        translation: "Bilim",
        pronunciation: "/ˈnɒl.ɪdʒ/",
        example: "Knowledge is the real power.",
        category: "Ta'lim",
      },
      {
        id: "9",
        word: "Friend",
        translation: "Do‘st",
        pronunciation: "/frend/",
        example: "We study languages with friends.",
        category: "Muloqot",
      },
      {
        id: "10",
        word: "Future",
        translation: "Kelajak",
        pronunciation: "/ˈfjuː.tʃər/",
        example: "The future belongs to the educated.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "Language",
        translation: "Til",
        pronunciation: "/ˈlæŋ.ɡwɪdʒ/",
        example: "Learning a new language opens doors.",
        category: "Ta'lim",
      },
      {
        id: "12",
        word: "Goodbye",
        translation: "Xayr",
        pronunciation: "/ɡʊdˈbaɪ/",
        example: "Goodbye, see you tomorrow!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "en-1",
        title: "1-dars: Salomlashish va o‘zini tanishtirish",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "Ingliz tilida ilk suhbatni boshlash, ism va yoshni aytishni o‘rganamiz.",
        topics: [
          {
            title: "Salomlashish turlari",
            explanation:
              "Rasmiy va norasmiy salomlashishlar: 'Hi' (norasmiy), 'Hello' (umumiy), 'Good morning' (ertalab), 'Good afternoon' (kunduzi).",
            examples: ["Hi, I am Anvar.", "Nice to meet you!"],
          },
          {
            title: "Ismni aytish",
            explanation: "'My name is...' yoki 'I am...' konstruksiyalari orqali ism ifodalanadi.",
            examples: ["My name is Madina.", "I am a student at School No. 8."],
          },
        ],
      },
      {
        id: "en-2",
        title: "2-dars: 'To be' fe'li (am, is, are)",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "Ingliz tili grammatikasining eng muhim poydevori — 'bo‘lmoq' fe'li.",
        topics: [
          {
            title: "Tuslanish qoidalari",
            explanation: "I -> am; He/She/It -> is; We/You/They -> are.",
            examples: ["I am a pupil.", "She is clever.", "We are in Navoiy."],
          },
          {
            title: "Inkor va so‘roq shakllari",
            explanation:
              "Inkor: 'not' qo'shiladi (is not / isn't). So'roq: 'am/is/are' ega oldiga chiqadi.",
            examples: ["Are you ready? - Yes, I am.", "He is not absent today."],
          },
        ],
      },
      {
        id: "en-3",
        title: "3-dars: Sonlar va kundalik vaqt",
        duration: "18 daqiqa",
        level: "A1 Elementar",
        description: "1 dan 100 gacha sonlar va soatni aytishni o‘rganish.",
        topics: [
          {
            title: "Sanoq sonlar",
            explanation: "One, two, three... ten, twenty, thirty, one hundred.",
            examples: ["I have five lessons today.", "There are thirty pupils in our classroom."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Xayrli tong' ingliz tilida qanday bo'ladi?",
        options: ["Good evening", "Good morning", "Good night", "Goodbye"],
        answer: 1,
        explanation: "'Good morning' ertalab aytiladigan salomlashuv hisoblanadi.",
      },
      {
        id: "q2",
        question: "'She ___ a good teacher' gapidagi bo'sh o'ringa to'g'ri fe'lni tanlang:",
        options: ["am", "are", "is", "be"],
        answer: 2,
        explanation: "Uchinchi shaxs birlikda (She/He/It) 'is' fe'li ishlatiladi.",
      },
      {
        id: "q3",
        question: "'School' so‘zining o‘zbekcha tarjimasi nima?",
        options: ["Sinf", "Maktab", "Kutubxona", "Daftar"],
        answer: 1,
        explanation: "'School' so'zi maktab ma'nosini bildiradi.",
      },
    ],
    dialogue: [
      {
        speaker: "Ustoz (John)",
        text: "Good morning, students! Welcome to English class.",
        translation: "Xayrli tong, o‘quvchilar! Ingliz tili darsiga xush kelibsiz.",
      },
      {
        speaker: "O‘quvchi (Malika)",
        text: "Good morning, teacher! We are excited to learn today.",
        translation: "Xayrli tong, ustoz! Bugun o‘rganishdan xursandmiz.",
      },
      {
        speaker: "Ustoz (John)",
        text: "What language do you want to master?",
        translation: "Qaysi tilni mukammal o‘rganmoqchisiz?",
      },
      {
        speaker: "O‘quvchi (Malika)",
        text: "I want to speak fluent English for my future.",
        translation: "Kelajagim uchun ingliz tilida ravon gapirishni xohlayman.",
      },
    ],
    tips: [
      "Har kuni kamida 5 ta yangi so‘z yod oling va ularni gapda ishlating.",
      "So‘zlarning to‘g‘ri talaffuzini tinglash uchun audio tugmachasidan foydalaning.",
      "Kichik inglizcha ertak va matnlarni ovoz chiqarib o‘qish talaffuzni tez o‘stiradi.",
    ],
  },

  rus: {
    id: "rus",
    name: "Rus tili",
    nativeName: "Русский язык",
    code: "ru",
    locale: "ru-RU",
    bg: "bg-sky-100/70",
    accentColor: "sky",
    level: "A1 - B2",
    description:
      "Hamdo‘stlik davlatlarida keng qo‘llaniladigan ilmiy va madaniy aloqa tili. Grammatika va ravon so‘zlashuv kursi.",
    alphabetInfo: {
      title: "Kirill alifbosi (33 ta harf)",
      description:
        "Rus alifbosida 33 ta harf: 10 ta unli, 21 ta undosh va 2 ta belgi (ь, ъ) mavjud.",
      sample:
        "Аа Бб Вв Гг Дд Ее Ёё Жж Зз Ии Йй Кк Лл Мм Нн Оо Пп Рр Сс Тт Уу Фф Хх Цц Чч Шш Щщ Ъъ Ыы Ьь Ээ Юю Яя",
    },
    stats: {
      lessons: 22,
      words: 320,
      learners: "1,150+",
      rating: "4.8",
    },
    vocabulary: [
      {
        id: "1",
        word: "Здравствуйте",
        translation: "Assalomu alaykum",
        pronunciation: "Zdravstvuyte",
        example: "Здравствуйте, учитель!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Привет",
        translation: "Salom",
        pronunciation: "Privet",
        example: "Привет, как дела?",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Спасибо",
        translation: "Rahmat",
        pronunciation: "Spasibo",
        example: "Большое спасибо!",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "Пожалуйста",
        translation: "Iltimos / Arzimaydi",
        pronunciation: "Pozhaluysta",
        example: "Пожалуйста, откройте книгу.",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "Школа",
        translation: "Maktab",
        pronunciation: "Shkola",
        example: "Наша школа номер 8 самая лучшая.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Ученик",
        translation: "O‘quvchi",
        pronunciation: "Uchenik",
        example: "Я примерный ученик.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Учитель",
        translation: "O‘qituvchi",
        pronunciation: "Uchitel",
        example: "Наш учитель объясняет понятно.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Урок",
        translation: "Dars",
        pronunciation: "Urok",
        example: "Урок русского языка начался.",
        category: "Ta'lim",
      },
      {
        id: "9",
        word: "Книга",
        translation: "Kitob",
        pronunciation: "Kniga",
        example: "Я читаю интересную книгу.",
        category: "O‘quv qurollari",
      },
      {
        id: "10",
        word: "Знания",
        translation: "Bilimlar",
        pronunciation: "Znaniya",
        example: "Знания — это сила.",
        category: "Ta'lim",
      },
      {
        id: "11",
        word: "Друг",
        translation: "Do‘st",
        pronunciation: "Drug",
        example: "Мой друг учится отлично.",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "До свидания",
        translation: "Xayr / Ko‘rishguncha",
        pronunciation: "Do svidaniya",
        example: "До свидания, до завтра!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ru-1",
        title: "1-dars: Salomlashish va xushmuomalalik",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "Rus tilida rasmiy va do'stona salomlashish, minnatdorchilik bildirish.",
        topics: [
          {
            title: "Salomlashish shakllari",
            explanation: "Kattalarga 'Здравствуйте', tengdoshlarga 'Привет' deyiladi.",
            examples: ["Здравствуйте, Анна Ивановна!", "Привет, Рустам!"],
          },
        ],
      },
      {
        id: "ru-2",
        title: "2-dars: Otlarning rodlari (Мужской, Женский, Средний)",
        duration: "25 daqiqa",
        level: "A1 Boshlang‘ich",
        description: "Rus tilidagi 3 ta rod: erkak, ayol va o'rta jinsni aniqlash qoidalari.",
        topics: [
          {
            title: "Rod belgilari",
            explanation:
              "Erkak jinsi (Мужской): qattiq undoshga tugaydi (стол, урок). Ayol jinsi (Женский): -а, -я ga tugaydi (книга, школа). O'rta jins (Средний): -о, -е ga tugaydi (окно, море).",
            examples: ["Это мой класс (он).", "Это моя школа (она).", "Это наше знание (оно)."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Школа' so‘zi qaysi rodga mansub?",
        options: ["Мужской род", "Женский род", "Средний род", "Umumiy rod"],
        answer: 1,
        explanation: "-а harfiga tugagani uchun 'Женский род' (она).",
      },
      {
        id: "q2",
        question: "'Спасибо' so‘zining ma'nosi nima?",
        options: ["Salom", "Xayr", "Rahmat", "Iltimos"],
        answer: 2,
        explanation: "'Спасибо' minnatdorchilik, ya'ni rahmat degani.",
      },
    ],
    dialogue: [
      {
        speaker: "Учитель",
        text: "Здравствуйте, ребята! Откройте тетради.",
        translation: "Assalomu alaykum, bolalar! Daftarlarni oching.",
      },
      {
        speaker: "Ученик",
        text: "Здравствуйте! Какая сегодня тема урока?",
        translation: "Assalomu alaykum! Bugungi dars mavzusi qanday?",
      },
      {
        speaker: "Учитель",
        text: "Сегодня мы изучаем новые правила речи.",
        translation: "Bugun biz nutqning yangi qoidalarini o‘rganamiz.",
      },
    ],
    tips: [
      "Urg'uga (ударение) doim e'tibor bering, chunki 'о' harfi urg'usiz 'а' kabi aytiladi.",
      "Har kuni qisqa ruscha dialoglarni takrorlang.",
    ],
  },

  koreys: {
    id: "koreys",
    name: "Koreys tili",
    nativeName: "한국어",
    code: "kr",
    locale: "ko-KR",
    bg: "bg-cyan-100/70",
    accentColor: "cyan",
    level: "TOPIK I (1-2 daraja)",
    description:
      "K-pop, zamonaviy texnologiyalar va Janubiy Koreya universitetlari ta’lim tili. Hangul alifbosidan boshlab o‘rgatiladi.",
    alphabetInfo: {
      title: "Hangul (한글) alifbosi",
      description:
        "Koreys alifbosi dunyodagi eng ilmiy va oson o'rganiladigan alifbolardan biri. 14 ta asosiy undosh va 10 ta asosiy unlidan iborat.",
      sample: "ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅅ ㅇ ㅈ ㅊ ㅋ ㅌ ㅍ ㅎ / ㅏ ㅑ ㅓ ㅕ ㅗ ㅛ ㅜ ㅠ ㅡ ㅣ",
    },
    stats: {
      lessons: 20,
      words: 280,
      learners: "980+",
      rating: "4.95",
    },
    vocabulary: [
      {
        id: "1",
        word: "안녕하세요",
        translation: "Assalomu alaykum / Salom",
        pronunciation: "Annyeonghaseyo",
        example: "안녕하세요, 선생님!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "감사합니다",
        translation: "Rahmat",
        pronunciation: "Gamsahamnida",
        example: "도와주셔서 감사합니다.",
        category: "Xushmuomalalik",
      },
      {
        id: "3",
        word: "학교",
        translation: "Maktab",
        pronunciation: "Hakgyo",
        example: "우리 학교는 나보이 8번 학교입니다.",
        category: "Maktab",
      },
      {
        id: "4",
        word: "학생",
        translation: "O‘quvchi / Talaba",
        pronunciation: "Haksaeng",
        example: "저는 성실한 학생입니다.",
        category: "Maktab",
      },
      {
        id: "5",
        word: "선생님",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "Seonsaengnim",
        example: "선생님, 질문이 있습니다.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "친구",
        translation: "Do‘st",
        pronunciation: "Chingu",
        example: "친구와 같이 한국어를 배워요.",
        category: "Muloqot",
      },
      {
        id: "7",
        word: "책",
        translation: "Kitob",
        pronunciation: "Chaek",
        example: "한국어 책을 읽어요.",
        category: "O‘quv qurollari",
      },
      {
        id: "8",
        word: "공부",
        translation: "O‘qish / Dars qilish",
        pronunciation: "Gongbu",
        example: "열심히 공부해요.",
        category: "Ta'lim",
      },
      {
        id: "9",
        word: "네",
        translation: "Ha",
        pronunciation: "Ne",
        example: "네, 알겠습니다.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "아니요",
        translation: "Yo‘q",
        pronunciation: "Aniyo",
        example: "아니요, 아직 안 끝났어요.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "죄송합니다",
        translation: "Kechirasiz",
        pronunciation: "Joesonghamnida",
        example: "늦어서 죄송합니다.",
        category: "Xushmuomalalik",
      },
      {
        id: "12",
        word: "안녕히 계세요",
        translation: "Xayr (qoluvchiga)",
        pronunciation: "Annyeonghi gyeseyo",
        example: "선생님, 안녕히 계세요!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ko-1",
        title: "1-dars: Hangul unli va undoshlari",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "Koreys harflarini birlashtirib bo'g'in hosil qilish va o'qish qoidalari.",
        topics: [
          {
            title: "Bo‘g‘in tuzilishi",
            explanation:
              "Har bir bo'g'in kamida bitta undosh va bitta unlidan tashkil topadi: masalan, ㅎ + ㅏ + ㄱ = 학 (hak).",
            examples: ["한 (han) + 국 (guk) = 한국 (Janubiy Koreya)"],
          },
        ],
      },
      {
        id: "ko-2",
        title: "2-dars: 'Men ... man' (입니다 / 이에요)",
        duration: "18 daqiqa",
        level: "Boshlang‘ich",
        description: "O‘z kasbi, ismi va millatini aytish formulalari.",
        topics: [
          {
            title: "Hurmat shakli (입니다)",
            explanation: "Men o'quvchiman: 저는 학생입니다 (Jeoneun haksaeng-imnida).",
            examples: ["저는 우즈베키스탄 사람입니다 (Men o'zbekistonlikman)."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Koreys tilida 'Rahmat' qanday aytiladi?",
        options: ["안녕하세요", "감사합니다", "죄송합니다", "안녕히 가세요"],
        answer: 1,
        explanation: "감사합니다 (Gamsahamnida) xushmuomala rasmiy rahmat aytishdir.",
      },
      {
        id: "q2",
        question: "'학교' (Hakgyo) so‘zining ma'nosi nima?",
        options: ["Maktab", "Uy", "Kutubxona", "Shahar"],
        answer: 0,
        explanation: "학교 — maktab degan ma'noni anglatadi.",
      },
    ],
    dialogue: [
      {
        speaker: "민수 (Minsu)",
        text: "안녕하세요! 저는 한국어 선생님입니다.",
        translation: "Assalomu alaykum! Men koreys tili o‘qituvchisiman.",
      },
      {
        speaker: "지수 (Jisu)",
        text: "안녕하세요! 만나서 반갑습니다.",
        translation: "Assalomu alaykum! Siz bilan tanishganimdan xursandman.",
      },
    ],
    tips: [
      "Hangul harflarini daftarga chiroyli tartibda yozib mashq qiling.",
      "Koreys tili grammatikasi o‘zbek tiliga judayam yaqin: Ega + To‘ldiruvchi + Fe'l tartibida keladi!",
    ],
  },

  nemis: {
    id: "nemis",
    name: "Nemis tili",
    nativeName: "Deutsch",
    code: "de",
    locale: "de-DE",
    bg: "bg-orange-100/70",
    accentColor: "orange",
    level: "A1 - B1",
    description:
      "Germaniya, Avstriya va Shveytsariya tili. Yevropaning ilg‘or muhandislik va ilmiy innovatsiyalar poydevori.",
    alphabetInfo: {
      title: "Nemis alifbosi (Umlautlar bilan)",
      description:
        "26 ta asosiy lotin harflari hamda 3 ta umlaut (Ä, Ö, Ü) va ß (Eszett) harfidan iborat.",
      sample:
        "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz + Ää Öö Üü ß",
    },
    stats: {
      lessons: 20,
      words: 290,
      learners: "720+",
      rating: "4.85",
    },
    vocabulary: [
      {
        id: "1",
        word: "Hallo",
        translation: "Salom",
        pronunciation: "/haˈloː/",
        example: "Hallo, wie geht's?",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Guten Tag",
        translation: "Xayrli kun",
        pronunciation: "/ɡuːtn̩ ˈtaːk/",
        example: "Guten Tag, Herr Müller!",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Danke",
        translation: "Rahmat",
        pronunciation: "/ˈdaŋkə/",
        example: "Danke schön!",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "Bitte",
        translation: "Iltimos / Arzimaydi",
        pronunciation: "/ˈbɪtə/",
        example: "Bitte sehr!",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "Schule",
        translation: "Maktab",
        pronunciation: "/ˈʃuːlə/",
        example: "Die Schule ist modern.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Schüler",
        translation: "O‘quvchi",
        pronunciation: "/ˈʃyːlɐ/",
        example: "Ich bin ein fleißiger Schüler.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Lehrer",
        translation: "O‘qituvchi",
        pronunciation: "/ˈleːʁɐ/",
        example: "Der Lehrer erklärt gut.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Buch",
        translation: "Kitob",
        pronunciation: "/buːx/",
        example: "Das Buch ist interessant.",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "Ja",
        translation: "Ha",
        pronunciation: "/jaː/",
        example: "Ja, natürlich.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "Nein",
        translation: "Yo‘q",
        pronunciation: "/naɪn/",
        example: "Nein, danke.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "Freund",
        translation: "Do‘st",
        pronunciation: "/fʁɔɪnt/",
        example: "Mein Freund lernt Deutsch.",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "Auf Wiedersehen",
        translation: "Ko‘rishguncha xayr",
        pronunciation: "/aʊf ˈviːdɐˌzeːən/",
        example: "Auf Wiedersehen, bis morgen!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "de-1",
        title: "1-dars: Salomlashish va o‘zini tanishtirish",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "Wie heißt du? Ich heiße... savol-javoblari.",
        topics: [
          {
            title: "Ismni so'rash",
            explanation:
              "'Ich heiße...' (Mening ismim...), 'Ich komme aus Usbekistan' (Men O'zbekistondanman).",
            examples: ["Ich heiße Davron.", "Wie geht es Ihnen?"],
          },
        ],
      },
      {
        id: "de-2",
        title: "2-dars: Artikllar — Der, Die, Das",
        duration: "25 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Nemis tilida har bir otning o'z artikli bor (der - erkak, die - ayol, das - o'rta).",
        topics: [
          {
            title: "Artikllar qoidasi",
            explanation:
              "Barcha nemischa otlar bosh harf bilan yoziladi va artikli bilan yodlanadi.",
            examples: ["der Tisch (stol)", "die Schule (maktab)", "das Buch (kitob)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Guten Tag' iborasi qachon aytiladi?",
        options: ["Ertalab", "Kunduzi (Xayrli kun)", "Kechasi", "Xayrlashganda"],
        answer: 1,
        explanation: "Guten Tag — Xayrli kun degani.",
      },
      {
        id: "q2",
        question: "Nemis tilida barcha otlar qanday yoziladi?",
        options: [
          "Kichik harf bilan",
          "Katta (bosh) harf bilan",
          "Qo'shtirnoq ichida",
          "Artiklsiz",
        ],
        answer: 1,
        explanation: "Nemis tilida barcha otlar istisnosiz bosh harf bilan yoziladi.",
      },
    ],
    dialogue: [
      {
        speaker: "Lehrer",
        text: "Guten Tag! Willkommen im Deutschunterricht.",
        translation: "Xayrli kun! Nemis tili darsiga xush kelibsiz.",
      },
      {
        speaker: "Schüler",
        text: "Guten Tag, Herr Lehrer! Wir freuen uns.",
        translation: "Xayrli kun, ustoz! Biz xursandmiz.",
      },
    ],
    tips: [
      "Nemischa so'zlarni doim artikli bilan birga yodlang (masalan, shunchaki 'Buch' emas, 'das Buch').",
      "Umlautlarni to'g'ri eshitish va talaffuz qilish uchun audio eshitishni ko'paytiring.",
    ],
  },

  turk: {
    id: "turk",
    name: "Turk tili",
    nativeName: "Türkçe",
    code: "tr",
    locale: "tr-TR",
    bg: "bg-indigo-100/70",
    accentColor: "indigo",
    level: "A1 - B2",
    description:
      "Qardosh turkiy til. O‘zbek tiliga eng yaqin va o‘rganish eng oson tillardan biri. Madaniyat va zamonaviy Turkiya ta’limi.",
    alphabetInfo: {
      title: "Turk alifbosi (29 ta harf)",
      description: "Lotin yozuviga asoslangan 29 ta harf. O'qilishi o'zbek tiliga juda o'xshash.",
      sample: "A B C Ç D E F G Ğ H I İ J K L M N O Ö P R S Ş T U Ü V Y Z",
    },
    stats: {
      lessons: 22,
      words: 340,
      learners: "1,310+",
      rating: "4.95",
    },
    vocabulary: [
      {
        id: "1",
        word: "Merhaba",
        translation: "Salom",
        pronunciation: "Merhaba",
        example: "Merhaba, nasılsınız?",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Günaydın",
        translation: "Xayrli tong",
        pronunciation: "Gunaydyn",
        example: "Günaydın arkadaşlar!",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "Teşekkür ederim",
        translation: "Tashakkur qilaman / Rahmat",
        pronunciation: "Teshekkur ederim",
        example: "Yardımınız için teşekkür ederim.",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "Lütfen",
        translation: "Iltimos",
        pronunciation: "Lutfen",
        example: "Lütfen içeri girin.",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "Okul",
        translation: "Maktab",
        pronunciation: "Okul",
        example: "8 numaralı okulumuz çok güzel.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Öğrenci",
        translation: "O‘quvchi",
        pronunciation: "Ogrendji",
        example: "Ben başarılı bir öğrenciyim.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Öğretmen",
        translation: "O‘qituvchi",
        pronunciation: "Ogretmen",
        example: "Öğretmenimiz dersi anlattı.",
        category: "Maktab",
      },
      {
        id: "8",
        word: "Kitap",
        translation: "Kitob",
        pronunciation: "Kitap",
        example: "Yeni bir Türkçe kitap okuyorum.",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "Evet",
        translation: "Ha",
        pronunciation: "Evet",
        example: "Evet, hazırım.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "Hayır",
        translation: "Yo‘q",
        pronunciation: "Hayyr",
        example: "Hayır, teşekkürler.",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "Arkadaş",
        translation: "Do‘st / O‘rtoq",
        pronunciation: "Arkadosh",
        example: "Arkadaşımla çalışıyoruz.",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "Hoşça kalın",
        translation: "Xayr, sog‘ bo‘ling",
        pronunciation: "Hoshcha kalyn",
        example: "Görüşmek üzere, hoşça kalın!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "tr-1",
        title: "1-dars: Tanishuv va ahvol so‘rash",
        duration: "15 daqiqa",
        level: "Boshlang‘ich",
        description: "'Adınız ne?' (Ismingiz nima?) va 'Nasılsınız?' (Qandaysiz?) iboralari.",
        topics: [
          {
            title: "Muloqot formulalari",
            explanation:
              "'Benim adım...' (Mening ismim...), 'İyiyim, teşekkürler' (Yaxshiman, rahmat).",
            examples: ["Adım Ali.", "Ben Özbekistanlıyım."],
          },
        ],
      },
      {
        id: "tr-2",
        title: "2-dars: Unlilar uyg‘unligi (Ünlü uyumu)",
        duration: "20 daqiqa",
        level: "A1 Boshlang‘ich",
        description: "Turk tilida qo'shimchalar so'z oxiridagi unliga qarab moslashadi (lar/ler).",
        topics: [
          {
            title: "Ko'plik qo'shimchasi",
            explanation:
              "Qalin unlilarga (a, ı, o, u) -> -lar; Yumshoq unlilarga (e, i, ö, ü) -> -ler.",
            examples: ["kitap -> kitaplar", "öğrenci -> öğrenciler"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Günaydın' so‘zining o‘zbekcha tarjimasi nima?",
        options: ["Xayrli oqshom", "Xayrli tong", "Ko‘rishguncha", "Kechirasiz"],
        answer: 1,
        explanation: "'Günaydın' ertalab aytiladigan 'Xayrli tong' salomlashuvidir.",
      },
      {
        id: "q2",
        question: "'Kitap' so‘zining ko‘plik shakli qaysi?",
        options: ["Kitapler", "Kitaplar", "Kitaplarim", "Kitapci"],
        answer: 1,
        explanation: "Unlilar uyg'unligiga ko'ra 'a' qalin unli bo'lgani uchun '-lar' qo'shiladi.",
      },
    ],
    dialogue: [
      {
        speaker: "Öğretmen",
        text: "Merhaba çocuklar! Nasılsınız?",
        translation: "Salom bolalar! Qalaysizlar?",
      },
      {
        speaker: "Öğrenci",
        text: "İyiyiz öğretmenim, siz nasılsınız?",
        translation: "Yaxshimiz ustoz, o‘zingiz qalaysiz?",
      },
    ],
    tips: [
      "Turk tili o‘zbek tiliga juda yaqin bo‘lgani uchun grammatikasini 2-3 barobar tezroq o‘zlashtira olasiz!",
      "Iboralardagi harflar farqiga (masalan: Ğ, Ç, Ş, I, İ) e'tibor qarating.",
    ],
  },

  fransuz: {
    id: "fransuz",
    name: "Fransuz tili",
    nativeName: "Français",
    code: "fr",
    locale: "fr-FR",
    bg: "bg-blue-100/70",
    accentColor: "blue",
    level: "DELF A1 - B1",
    description:
      "Diplomatiya, san'at, moda va xalqaro tashkilotlar (BMT, YUNESKO)ning rasmiy tili. Nafis talaffuz va boy adabiyot.",
    alphabetInfo: {
      title: "Fransuz alifbosi (Aksentlar bilan)",
      description: "26 ta standart lotin harflari va aksentli harflar (é, è, ê, ç, à, ù, ô).",
      sample:
        "Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz + é è ê ç à",
    },
    stats: {
      lessons: 18,
      words: 270,
      learners: "650+",
      rating: "4.8",
    },
    vocabulary: [
      {
        id: "1",
        word: "Bonjour",
        translation: "Salom / Xayrli kun",
        pronunciation: "/bɔ̃.ʒuʁ/",
        example: "Bonjour tout le monde!",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "Merci",
        translation: "Rahmat",
        pronunciation: "/mɛʁ.si/",
        example: "Merci beaucoup!",
        category: "Xushmuomalalik",
      },
      {
        id: "3",
        word: "S'il vous plaît",
        translation: "Iltimos",
        pronunciation: "/sil vu plɛ/",
        example: "Un café, s'il vous plaît.",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "École",
        translation: "Maktab",
        pronunciation: "/e.kɔl/",
        example: "Notre école numéro 8 est formidable.",
        category: "Maktab",
      },
      {
        id: "5",
        word: "Élève",
        translation: "O‘quvchi",
        pronunciation: "/e.lɛv/",
        example: "Je suis un bon élève.",
        category: "Maktab",
      },
      {
        id: "6",
        word: "Professeur",
        translation: "O‘qituvchi / Professor",
        pronunciation: "/pʁɔ.fɛ.sœʁ/",
        example: "Le professeur est très gentil.",
        category: "Maktab",
      },
      {
        id: "7",
        word: "Livre",
        translation: "Kitob",
        pronunciation: "/livʁ/",
        example: "J'aime lire ce livre.",
        category: "O‘quv qurollari",
      },
      {
        id: "8",
        word: "Oui",
        translation: "Ha",
        pronunciation: "/wi/",
        example: "Oui, bien sûr.",
        category: "Umumiy",
      },
      {
        id: "9",
        word: "Non",
        translation: "Yo‘q",
        pronunciation: "/nɔ̃/",
        example: "Non, merci.",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "Ami",
        translation: "Do‘st",
        pronunciation: "/a.mi/",
        example: "Mon ami parle français.",
        category: "Muloqot",
      },
      {
        id: "11",
        word: "Bonne nuit",
        translation: "Xayrli tun",
        pronunciation: "/bɔn nɥi/",
        example: "Bonne nuit et faites de beaux rêves.",
        category: "Xayrlashuv",
      },
      {
        id: "12",
        word: "Au revoir",
        translation: "Xayr / Ko‘rishguncha",
        pronunciation: "/o ʁə.vwaʁ/",
        example: "Au revoir, à demain!",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "fr-1",
        title: "1-dars: Salomlashish va o‘zini tanishtirish",
        duration: "18 daqiqa",
        level: "Boshlang‘ich",
        description: "'Je m'appelle...' (Mening ismim...) va salomlashish odobi.",
        topics: [
          {
            title: "Salomlashish",
            explanation:
              "Bonjour (kunduzi), Bonsoir (oqshomda), Salut (do'stlarga norasmiy salom).",
            examples: ["Je m'appelle Jasur.", "Enchanté! (Tanishganimdan xursandman)."],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "'Merci beaucoup' nimani anglatadi?",
        options: ["Xayrli tong", "Katta rahmat", "Iltimos", "Xayr"],
        answer: 1,
        explanation: "Merci beaucoup — Katta rahmat degani.",
      },
    ],
    dialogue: [
      {
        speaker: "Professeur",
        text: "Bonjour la classe! Vous êtes prêts?",
        translation: "Salom sinf! Tayyormisiz?",
      },
      {
        speaker: "Élève",
        text: "Oui professeur, nous sommes prêts!",
        translation: "Ha ustoz, biz tayyormiz!",
      },
    ],
    tips: [
      "Fransuz tilida so'z oxiridagi ko'p undosh harflar (s, t, d, x) o'qilmaydi.",
      "Burun tovushlarini (nasal unlilarni) to'g'ri chiqarish uchun audio mashqlarni takrorlang.",
    ],
  },

  arab: {
    id: "arab",
    name: "Arab tili",
    nativeName: "العربية",
    code: "sa",
    locale: "ar-SA",
    bg: "bg-emerald-100/70",
    accentColor: "emerald",
    level: "Boshlang‘ich - O‘rta",
    description:
      "Sharqiy madaniyat, boy adabiyot va tarixiy qo‘lyozmalar tili. Arab yozuvidan boshlab muloqotgacha.",
    alphabetInfo: {
      title: "Arab alifbosi (28 ta harf)",
      description:
        "Arab yozuvi o'ngdan chapga qarab yoziladi va o'qiladi. Harflar so'z boshida, o'rtasida va oxirida turli shakllarda ulanadi.",
      sample: "ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن هـ و ي",
    },
    stats: {
      lessons: 22,
      words: 300,
      learners: "1,020+",
      rating: "4.9",
    },
    vocabulary: [
      {
        id: "1",
        word: "السلام عليكم",
        translation: "Assalomu alaykum",
        pronunciation: "As-salamu alaykum",
        example: "السلام عليكم ورحمة الله",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "شكراً",
        translation: "Rahmat",
        pronunciation: "Shukran",
        example: "شكراً جزيلاً لك",
        category: "Xushmuomalalik",
      },
      {
        id: "3",
        word: "من فضلك",
        translation: "Iltimos",
        pronunciation: "Min fadlik",
        example: "تفضل من فضلك",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "مدرسة",
        translation: "Maktab",
        pronunciation: "Madrasa",
        example: "مدرستنا مدرسة جميلة",
        category: "Maktab",
      },
      {
        id: "5",
        word: "طالب",
        translation: "Talaba / O‘quvchi",
        pronunciation: "Tolib",
        example: "أنا طالب مجتهد",
        category: "Maktab",
      },
      {
        id: "6",
        word: "معلم",
        translation: "Ustoz / Muallim",
        pronunciation: "Muallim",
        example: "المعلم يشرح الدرس",
        category: "Maktab",
      },
      {
        id: "7",
        word: "كتاب",
        translation: "Kitob",
        pronunciation: "Kitob",
        example: "هذا كتاب مفيد",
        category: "O‘quv qurollari",
      },
      {
        id: "8",
        word: "قلم",
        translation: "Qalam",
        pronunciation: "Qalam",
        example: "أكتب بالقلم",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "نعم",
        translation: "Ha",
        pronunciation: "Na'am",
        example: "نعم، أنا مستعد",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "لا",
        translation: "Yo‘q",
        pronunciation: "La",
        example: "لا، شكراً",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "صديق",
        translation: "Do‘st",
        pronunciation: "Sodiq",
        example: "صديقي يدرس بجد",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "مع السلامة",
        translation: "Xayr, omon bo‘ling",
        pronunciation: "Ma'a as-salama",
        example: "إلى اللقاء، مع السلامة",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ar-1",
        title: "1-dars: Arab yozuvi va harakatlar",
        duration: "25 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Arab harflarining o'ngdan chapga yozilishi va 3 ta asosiy harakat (Fatha, Kasra, Zamma).",
        topics: [
          {
            title: "Harakatlar tizimi",
            explanation: "Fatha (a tovushi), Kasra (i tovushi), Zamma (u tovushi).",
            examples: ["كَتَبَ (kataba - yozdi)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Arab yozuvi qaysi tomondan boshlab yoziladi?",
        options: ["Chapdan o‘ngga", "O‘ngdan chapga", "Tepadan pastga", "Farqi yo‘q"],
        answer: 1,
        explanation: "Arab tili o'ngdan chapga qarab o'qiladi va yoziladi.",
      },
    ],
    dialogue: [
      {
        speaker: "المعلم",
        text: "صباح الخير يا طلاب! كيف حالكم؟",
        translation: "Xayrli tong, o‘quvchilar! Ahvollaringiz qalay?",
      },
      {
        speaker: "الطالب",
        text: "صباح النور يا أستاذ! نحن بخير والحمد لله.",
        translation: "Xayrli tong ustoz! Biz yaxshimiz, Xudoga shukur.",
      },
    ],
    tips: [
      "Harflarning so'z boshi, o'rtasi va oxiridagi ulanish ko'rinishlarini alohida chizib mashq qiling.",
      "Ovozli audio tugmachasini tinglab maxrajlarni to'g'ri talaffuz qilishni o'rganing.",
    ],
  },

  xitoy: {
    id: "xitoy",
    name: "Xitoy tili",
    nativeName: "中文 (Hànyǔ)",
    code: "cn",
    locale: "zh-CN",
    bg: "bg-rose-100/70",
    accentColor: "rose",
    level: "HSK 1 - 2",
    description:
      "Dunyodagi eng ko‘p so‘zlashuvchiga ega til. Pinyin transkripsiyasi, 4 ta ton va iyerogliflar olami.",
    alphabetInfo: {
      title: "Pinyin va Iyerogliflar (汉字)",
      description:
        "Xitoy tilida harf emas, balki so'z va ma'nolarni ifodalovchi iyerogliflar qo'llaniladi. Talaffuz lotin yozuvidagi 'Pinyin' orqali o'qitiladi.",
      sample: "你好 (Nǐ hǎo) · 谢谢 (Xièxie) · 学校 (Xuéxiào) · 学习 (Xuéxí)",
    },
    stats: {
      lessons: 18,
      words: 240,
      learners: "810+",
      rating: "4.85",
    },
    vocabulary: [
      {
        id: "1",
        word: "你好",
        translation: "Salom",
        pronunciation: "Nǐ hǎo",
        example: "你好！很高兴认识你。",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "早上好",
        translation: "Xayrli tong",
        pronunciation: "Zǎoshang hǎo",
        example: "老师，早上好！",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "谢谢",
        translation: "Rahmat",
        pronunciation: "Xièxie",
        example: "谢谢你的帮助。",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "不客气",
        translation: "Arzimaydi",
        pronunciation: "Bú kèqi",
        example: "不客气，慢慢学。",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "学校",
        translation: "Maktab",
        pronunciation: "Xuéxiào",
        example: "我们的第八学校很棒。",
        category: "Maktab",
      },
      {
        id: "6",
        word: "学生",
        translation: "O‘quvchi / Talaba",
        pronunciation: "Xuésheng",
        example: "我是一名好学生。",
        category: "Maktab",
      },
      {
        id: "7",
        word: "老师",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "Lǎoshī",
        example: "老师很耐心。",
        category: "Maktab",
      },
      {
        id: "8",
        word: "书",
        translation: "Kitob",
        pronunciation: "Shū",
        example: "我看中文书。",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "好",
        translation: "Yaxshi",
        pronunciation: "Hǎo",
        example: "很好！",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "朋友",
        translation: "Do‘st",
        pronunciation: "Péngyou",
        example: "我们是好朋友。",
        category: "Muloqot",
      },
      {
        id: "11",
        word: "学习",
        translation: "O‘rganish / O‘qish",
        pronunciation: "Xuéxí",
        example: "我喜欢学习中文。",
        category: "Ta'lim",
      },
      {
        id: "12",
        word: "再见",
        translation: "Xayr / Ko‘rishguncha",
        pronunciation: "Zàijiàn",
        example: "明天见，再见！",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "zh-1",
        title: "1-dars: Pinyin va 4 ta asosiy ton",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description:
          "Xitoy tilining 4 ta toni: 1-tekis, 2-ko'tariluvchi, 3-pastlab ko'tariluvchi, 4-tushuvchi.",
        topics: [
          {
            title: "Tonlar ahamiyati",
            explanation:
              "Bitta 'ma' so'zi toniga qarab: mā (ona), má (kanop), mǎ (ot), mà (so'kmoq) ma'nolarini beradi.",
            examples: ["mā (1-ton: ona)", "mǎ (3-ton: ot)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Xitoy tilida 'Salom' qanday aytiladi?",
        options: ["Xièxie", "Nǐ hǎo", "Zàijiàn", "Duìbuqǐ"],
        answer: 1,
        explanation: "Nǐ hǎo (你好) — eng mashhur xitoycha salomlashuvdir.",
      },
    ],
    dialogue: [
      {
        speaker: "老师 (Ustoz)",
        text: "同学们好！今天我们学习中文。",
        translation: "Salom o‘quvchilar! Bugun xitoy tilini o‘rganamiz.",
      },
      {
        speaker: "学生 (O‘quvchi)",
        text: "老师好！我们准备好了。",
        translation: "Salom ustoz! Biz tayyormiz.",
      },
    ],
    tips: [
      "Tonlarni aniq talaffuz qilish uchun qo‘lingiz bilan havoda ohang yo‘nalishini chizib mashq qiling.",
      "Iyerogliflarning chiziqlar ketma-ketligiga (strokelar) e'tibor bering.",
    ],
  },

  yapon: {
    id: "yapon",
    name: "Yapon tili",
    nativeName: "日本語 (Nihongo)",
    code: "jp",
    locale: "ja-JP",
    bg: "bg-slate-100/70",
    accentColor: "slate",
    level: "JLPT N5 - N4",
    description:
      "Kunchiqar yurt madaniyati, robototexnika, animatsiya va yuqori texnologiyalar tili. Hiragana va Katakana tizimlari.",
    alphabetInfo: {
      title: "Hiragana, Katakana va Kanji",
      description:
        "Yapon yozuvida 3 ta tizim: Hiragana (yapon so'zlari uchun bo'g'inli alifbo), Katakana (chet tili so'zlari uchun) va Kanji (iyerogliflar).",
      sample: "あいうえお (Hiragana) · アイウエオ (Katakana) · 日本 (Kanji)",
    },
    stats: {
      lessons: 18,
      words: 250,
      learners: "790+",
      rating: "4.9",
    },
    vocabulary: [
      {
        id: "1",
        word: "こんにちは",
        translation: "Salom / Xayrli kun",
        pronunciation: "Konnichiwa",
        example: "皆さん、こんにちは！",
        category: "Salomlashish",
      },
      {
        id: "2",
        word: "おはようございます",
        translation: "Xayrli tong",
        pronunciation: "Ohayou gozaimasu",
        example: "先生、おはようございます！",
        category: "Salomlashish",
      },
      {
        id: "3",
        word: "ありがとうございます",
        translation: "Rahmat (hurmat bilan)",
        pronunciation: "Arigatou gozaimasu",
        example: "親切にありがとうございます。",
        category: "Xushmuomalalik",
      },
      {
        id: "4",
        word: "すみません",
        translation: "Kechirasiz / Iltimos",
        pronunciation: "Sumimasen",
        example: "すみません、質問があります。",
        category: "Xushmuomalalik",
      },
      {
        id: "5",
        word: "学校",
        translation: "Maktab",
        pronunciation: "Gakkou",
        example: "ナボイの第8学校です。",
        category: "Maktab",
      },
      {
        id: "6",
        word: "学生",
        translation: "O‘quvchi / Talaba",
        pronunciation: "Gakusei",
        example: "私は学生です。",
        category: "Maktab",
      },
      {
        id: "7",
        word: "先生",
        translation: "O‘qituvchi / Ustoz",
        pronunciation: "Sensei",
        example: "田中先生はやさしいです。",
        category: "Maktab",
      },
      {
        id: "8",
        word: "本",
        translation: "Kitob",
        pronunciation: "Hon",
        example: "日本語の本を読みます。",
        category: "O‘quv qurollari",
      },
      {
        id: "9",
        word: "はい",
        translation: "Ha",
        pronunciation: "Hai",
        example: "はい、わかりました。",
        category: "Umumiy",
      },
      {
        id: "10",
        word: "いいえ",
        translation: "Yo‘q",
        pronunciation: "Iie",
        example: "いいえ、違います。",
        category: "Umumiy",
      },
      {
        id: "11",
        word: "友達",
        translation: "Do‘st",
        pronunciation: "Tomodachi",
        example: "友達と日本語を勉強します。",
        category: "Muloqot",
      },
      {
        id: "12",
        word: "さようなら",
        translation: "Xayr",
        pronunciation: "Sayounara",
        example: "皆さん、また明日、さようなら！",
        category: "Xayrlashuv",
      },
    ],
    lessons: [
      {
        id: "ja-1",
        title: "1-dars: Hiragana alifbosi (46 ta bo‘g‘in)",
        duration: "20 daqiqa",
        level: "Boshlang‘ich",
        description: "A-I-U-E-O besh asosiy unlidan boshlanuvchi yapon bo'g'inlari.",
        topics: [
          {
            title: "Asosiy unlilar",
            explanation: "あ (a), い (i), う (u), え (e), お (o).",
            examples: ["あい (ai - sevgi)", "いえ (ie - uy)"],
          },
        ],
      },
    ],
    quiz: [
      {
        id: "q1",
        question: "Yapon tilida 'Arigatou gozaimasu' nima degani?",
        options: ["Salom", "Katta rahmat", "Kechirasiz", "Xayr"],
        answer: 1,
        explanation: "ありがとうございます — chuqur minnatdorchilik (rahmat) bildirish iborasi.",
      },
    ],
    dialogue: [
      {
        speaker: "先生 (Sensei)",
        text: "皆さん、おはようございます！",
        translation: "Hammamizga xayrli tong!",
      },
      {
        speaker: "学生 (O‘quvchi)",
        text: "先生、おはようございます！今日もよろしくお願いします。",
        translation: "Ustoz, xayrli tong! Bugun ham birga o‘rganishdan xursandmiz.",
      },
    ],
    tips: [
      "Yapon tili grammatikasi ham o‘zbek tili kabi agglyutinativ: Fe'l gap oxirida keladi!",
      "Avval Hiragana alifbosini to'liq yodlang, so'ngra Katakanaga o'ting.",
    ],
  },
};
